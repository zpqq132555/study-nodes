import { AudioClip, AudioSourceComponent, loader, Node, _decorator } from "cc";
import { SaveManager } from "../save/SaveManager";
import { DebugUtil } from "../tools/DebugUtil";
import { Tools } from "../tools/Tools";
import { AudioConfig, Audios, AudioType } from "./AudioConfig";
const { ccclass, property } = _decorator;

@ccclass("AudioManager")
export class AudioManager {
    //单例模式
    private static _instance: AudioManager;
    public static get Instance(): AudioManager {
        if (AudioManager._instance == null) {
            AudioManager._instance = new AudioManager();
        }
        return AudioManager._instance;
    }

    private rootNode: Node = null;
    private musicSwitch: boolean = null;
    private soundSwitch: boolean = null;
    private musicAudioComponent: AudioSourceComponent = null;
    private soundAudioComponents: AudioSourceComponent[] = null;
    private musicCache = {};
    private soundCache = {};

    private curBgMusic: Audios = null;
    /**
     * 初始化
     */
    public init(rootNode: Node): void {
        //添加AudioSource组件的父级节点
        this.rootNode = rootNode;
        //音乐开关
        this.musicSwitch = SaveManager.Instance.loadItemRecord("musicSwitch", "1") == "1" ? true : false;
        this.soundSwitch = SaveManager.Instance.loadItemRecord("soundSwitch", "1") == "1" ? true : false;

        this.preloadResources();
    }

    /**
     * 预加载音频资源
     */
    private preloadResources(): void {
        DebugUtil.logInfo('开始预加载音频资源：' + Tools.TimeTools.getCurTimeStampSec())
        let startTime = Tools.TimeTools.getCurTimeStampSec();
        let self = this;
        //预加载音乐
        for (let key in AudioConfig.AudiosPreload.music) {
            let resPath = AudioConfig.ResPath + AudioConfig.AudiosPreload.music[key];
            loader.loadRes(resPath, AudioClip, function (err, clip) {
                if (err) {
                    DebugUtil.logError(err);
                    return;
                }
                DebugUtil.logInfo('结束预加载音乐资源：' + clip.name + "[耗时]" + (Tools.TimeTools.getCurTimeStampSec() - startTime));
                self.musicCache[clip.name] = clip;
            });
        }
        //预加载音效
        for (let key in AudioConfig.AudiosPreload.sound) {
            let resPath = AudioConfig.ResPath + AudioConfig.AudiosPreload.sound[key];
            loader.loadRes(resPath, AudioClip, function (err, clip) {
                if (err) {
                    DebugUtil.logError(err);
                    return;
                }
                DebugUtil.logInfo('结束预加载音效资源：' + clip.name + "[耗时]" + (Tools.TimeTools.getCurTimeStampSec() - startTime));
                self.soundCache[clip.name] = clip;
            });
        }
    }

    /************************************** Audio全局控制 ***************************************/
    public setAudioSwitch(value: boolean): void {
        this.setMusicSwitch(value);
        this.setSoundSwitch(value);
    }

    public getAudioSwitch(): boolean {
        return this.getMusicSwitch() || this.getSoundSwitch();
    }
    /************************************** Sound音效 ***************************************/
    public setSoundSwitch(value: boolean): void {
        DebugUtil.logInfo("设置音频开关：" + value);
        if (value == true) {
            SaveManager.Instance.saveItemRecord('soundSwitch', '1');
        } else {
            SaveManager.Instance.saveItemRecord('soundSwitch', '0');
        }
        this.soundSwitch = value;
    }

    public getSoundSwitch(): boolean {
        if (this.soundSwitch == null) {
            return false;
        }
        return this.soundSwitch;
    }

    public playSound(audioId: Audios): void {
        //判断音效开关是否开启了
        if (!this.soundSwitch) {
            return;
        }
        //加载并播放
        let audioName = AudioConfig.getAudioNameById(audioId);
        if (this.soundCache[audioName] != null && this.soundCache[audioName] != undefined) {
            //播放缓存
            this.playSoundClip(this.soundCache[audioName]);
            DebugUtil.logInfo("AudioManager.播放音效(缓存):" + AudioConfig.getAudioNameById(audioId));
        }
        else {
            //动态加载
            let startTime = Tools.TimeTools.getCurTimeStampSec();
            let resPath = AudioConfig.getAudioResPath(audioId, AudioType.Sound);
            let self = this;
            loader.loadRes(resPath, AudioClip, function (err, clip) {
                if (err) {
                    DebugUtil.logError(err);
                    return;
                }
                DebugUtil.logInfo("AudioManager.音效资源加载完毕[" + AudioConfig.getAudioNameById(audioId) + "],[耗时:" + (Tools.TimeTools.getCurTimeStampSec() - startTime) + "]");
                DebugUtil.logInfo("AudioManager.播放音效(动态):" + AudioConfig.getAudioNameById(audioId));
                //cc.audioEngine.playMusic(clip,true);
                self.playSoundClip(clip);
                self.soundCache[clip.name] = clip;
            });
        }
    }

    private playSoundClip(audioClip: AudioClip) {
        let audioComponent = null;
        if (this.soundAudioComponents == null) {
            this.soundAudioComponents = new Array<AudioSourceComponent>();
        }
        for (let i = 0; i < this.soundAudioComponents.length; i++) {
            if (!this.soundAudioComponents[i].playing) {
                audioComponent = this.soundAudioComponents[i];
                break;
            }
        }
        if (audioComponent == null) {
            DebugUtil.logInfo("没有可用音频组件，添加新的音频组件");
            audioComponent = this.rootNode.addComponent(AudioSourceComponent);
            audioComponent.loop = false;
            this.soundAudioComponents.push(audioComponent);
        }
        audioComponent.playOneShot(audioClip);
    }

    /************************************** Music音乐 ***************************************/
    /**
     * 设置音乐开关
     * @param value 
     */
    public setMusicSwitch(value: boolean): void {
        DebugUtil.logInfo("设置音乐开关：" + value);
        if (value == true) {
            SaveManager.Instance.saveItemRecord('musicSwitch', '1');
        } else {
            SaveManager.Instance.saveItemRecord('musicSwitch', '0');
        }
        this.musicSwitch = value;

        if (value == true) {
            this.playBgMusic();
        } else {
            this.stopBgMusic();
        }
    }

    /**
     * 获取音乐开关
     */
    public getMusicSwitch(): boolean {
        if (this.musicSwitch == null) {
            return false;
        }
        return this.musicSwitch;
    }

    /**
     * 播放背景音
     * @param audioId 
     */
    public playBgMusic(audioId: Audios = null): void {
        //判断是否恢复之前bgm的播放
        if (audioId == null) {
            if (this.isBgMusicPlaying()) {
                return;
            }
            else {
                if (this.curBgMusic == null) {
                    return;
                }
                audioId = this.curBgMusic;
            }
        }
        //判断是否重复播放相同的bgm
        if (this.isBgMusicPlaying() && (audioId == this.curBgMusic)) {
            return;
        }
        //判断音频开关是否开启了
        this.curBgMusic = audioId;
        if (!this.musicSwitch) {
            return;
        }

        //加载并播放
        let audioName = AudioConfig.getAudioNameById(audioId);
        if (this.musicCache[audioName] != null && this.musicCache[audioName] != undefined) {
            //播放缓存
            this.playBgMusicClip(this.musicCache[audioName]);
            DebugUtil.logInfo("AudioManager.播放背景音(缓存)");
        }
        else {
            //动态加载
            let startTime = Tools.TimeTools.getCurTimeStampSec();
            let resPath = AudioConfig.getAudioResPath(audioId, AudioType.Music);
            let self = this;
            loader.loadRes(resPath, AudioClip, function (err, clip) {
                if (err) {
                    DebugUtil.logError(err);
                    return;
                }
                DebugUtil.logInfo("AudioManager.音频资源加载完毕[" + AudioConfig.getAudioNameById(audioId) + "],[耗时:" + (Tools.TimeTools.getCurTimeStampSec() - startTime) + "]");
                DebugUtil.logInfo("AudioManager.播放背景音(动态)");
                self.playBgMusicClip(clip);
                self.musicCache[clip.name] = clip;
            });
        }
    }

    public pauseBgMusic(): void {
        if (this.musicAudioComponent) {
            this.musicAudioComponent.pause();
        }
    }

    public resumeBgMusic(): void {
        if (this.musicAudioComponent) {
            this.musicAudioComponent.play();
        }
    }

    public stopBgMusic(): void {
        if (this.musicAudioComponent) {
            this.musicAudioComponent.stop();
        }
    }

    private playBgMusicClip(audioClip: AudioClip): void {
        if (this.musicAudioComponent == null) {
            DebugUtil.logInfo("首次播放背景音，添加音频组件");
            this.musicAudioComponent = this.rootNode.addComponent(AudioSourceComponent);
            this.musicAudioComponent.loop = true;
        }
        this.musicAudioComponent.clip = audioClip;
        this.musicAudioComponent.play();
    }

    /**
     * 当前bgm是否在播放
     */
    private isBgMusicPlaying(): boolean {
        if (this.musicAudioComponent == null) {
            return false;
        }
        return this.musicAudioComponent.playing;
    }

}