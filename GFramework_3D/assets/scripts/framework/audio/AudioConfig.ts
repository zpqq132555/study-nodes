import { _decorator } from "cc";
import { DebugUtil } from "../tools/DebugUtil";
const { ccclass } = _decorator;

/**
 * 所有音频的枚举
 * 枚举名称必须和音频文件的名称相同
 */
export enum Audios {
    btn,
    success,
    bgm,
}

/**
 * 音频的类型
 */
export enum AudioType {
    Music,
    Sound,
}

@ccclass("AudioConfig")
export class AudioConfig {
    public static ResPath: string = "art/audio/";
    public static AudiosPreload = {
        music: {
            bgm: "music/bgm",
        },
        sound: {
            btn: "sound/btn",
            success: "sound/success"
        }
    };

    public static getAudioNameById(audioId: Audios): string {
        return Audios[audioId];
    }

    public static getAudioResPath(audioId: Audios, audioType: AudioType): string {
        let subPath = null;
        if (audioType == AudioType.Music) {
            subPath = AudioConfig.AudiosPreload.music[AudioConfig.getAudioNameById(audioId)];
        }
        else if (audioType == AudioType.Sound) {
            subPath = AudioConfig.AudiosPreload.sound[AudioConfig.getAudioNameById(audioId)];
        }
        if (subPath == null || subPath == undefined) {
            subPath = "";
            DebugUtil.logError("音频资源路径配置错误：" + AudioConfig.getAudioNameById(audioId));
        }
        return AudioConfig.ResPath + subPath;
    }
}
