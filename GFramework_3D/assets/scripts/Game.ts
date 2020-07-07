import { Component, find, game, systemEvent, SystemEvent, _decorator } from "cc";
import { AudioManager } from "./framework/audio/AudioManager";
import { SaveManager } from "./framework/save/SaveManager";
import { SceneManager } from "./framework/scene/SceneManager";
import { DebugUtil } from "./framework/tools/DebugUtil";
import { UIManager } from "./framework/ui/UIManager";
import { MsgCenter } from "./framework/_message/MsgCenter";
import { GameConfig } from "./GameConfig";
import { GameManager } from "./GameManager";
const { ccclass } = _decorator;

@ccclass("Game")
export class Game extends Component {
    //单例模式
    private static _instance: Game;
    public static get Instance(): Game {
        if (Game._instance == null) {
            Game._instance = find("Game").getComponent(Game);
            if (Game._instance == null) {
                DebugUtil.logInfo("Game is null, please attach Game");
            }
        }
        return Game._instance;
    }

    //系统组件
    public static msgCenter: MsgCenter = null;
    public static saveManager: SaveManager = null;
    public static audioManager: AudioManager = null;
    public static uiManager: UIManager = null;
    public static sceneManager: SceneManager = null;
    public static gameManager: GameManager = null;

    onLoad() {
        //1、单例模式赋值
        Game._instance = this;
        //2、设置常驻节点
        game.addPersistRootNode(this.node);
        //3、初始化系统组件
        //MsgCenter
        Game.msgCenter = MsgCenter.Instance;
        //SaveManager
        Game.saveManager = SaveManager.Instance;
        //AudioManager
        Game.audioManager = AudioManager.Instance;
        Game.audioManager.init(this.node);
        //UIManager
        if (Game.uiManager == null) {
            Game.uiManager = this.addComponent(UIManager);
            Game.uiManager.init();
        }
        //SceneManager
        Game.sceneManager = SceneManager.Instance;
        Game.sceneManager.setBeforeLoadEvent(this.onSceneUnload, this);
        //GameManager
        if (Game.gameManager == null) {
            Game.gameManager = this.addComponent(GameManager);
            Game.gameManager.init();
        }

        //是否显示运行信息,默认开启
        if (GameConfig.IsShowDisplayState == false) {
            //@ts-ignore
            cc.debug.setDisplayStats(false); //在预览窗口左下角显示FPS、DrawCall等调试信息
            DebugUtil.logInfo("关闭运行信息显示(FPS、DrawCall...etc)");
        }

        //注册键盘事件，用于调试
        if (GameConfig.IsDebugMode) {
            this.registerKeyBoardEvent();
        }
    }

    onEnable() { }

    start() {
        //进入游戏
        Game.gameManager.checkEnterGame();
    }

    onDestroy() {
        if (GameConfig.IsDebugMode) {
            this.unregisterKeyBoardEvent();
        }
    }

    /**
     * 卸载场景的处理
     */
    private onSceneUnload(): void {
        DebugUtil.logInfo("onSceneUnload");
        //回收UI资源并重置UI根节点
        Game.uiManager.clearUIObj(true);
        Game.uiManager.releaseAllUIRes();
        Game.uiManager.setUIRoot(null);
    }
    /***************************** 键盘事件 start********************************/
    private keyDownEventsDic = {};
    private keyUpEventsDic = {};

    public registerKeyDownEvent(
        keyCode: number,
        callback: Function,
        target: Object
    ): void {
        if (!this.keyDownEventsDic[keyCode]) {
            this.keyDownEventsDic[keyCode] = [];
        }
        this.keyDownEventsDic[keyCode].push({ callback: callback, target: target });
    }
    public unRegisterKeyDownEvent(
        keyCode: number,
        callback: Function,
        target: Object
    ): void {
        if (!this.keyDownEventsDic[keyCode]) {
            return;
        }
        for (let item in this.keyDownEventsDic[keyCode]) {
            if (
                this.keyDownEventsDic[keyCode][item].callback == callback &&
                this.keyDownEventsDic[keyCode][item].target == target
            ) {
                this.keyDownEventsDic[keyCode][item].callback = null;
                this.keyDownEventsDic[keyCode][item].target = null;
            }
        }
    }

    public registerKeyUpEvent(keyCode: number, callback: Function, target: Object): void {
        if (!this.keyUpEventsDic[keyCode]) {
            this.keyUpEventsDic[keyCode] = [];
        }
        this.keyUpEventsDic[keyCode].push({ callback: callback, target: target });
    }
    public unRegisterKeyUpEvent(
        keyCode: number,
        callback: Function,
        target: Object
    ): void {
        if (!this.keyUpEventsDic[keyCode]) {
            return;
        }
        for (let item in this.keyUpEventsDic[keyCode]) {
            if (
                this.keyUpEventsDic[keyCode][item].callback == callback &&
                this.keyUpEventsDic[keyCode][item].target == target
            ) {
                this.keyUpEventsDic[keyCode][item].callback = null;
                this.keyUpEventsDic[keyCode][item].target = null;
            }
        }
    }

    private registerKeyBoardEvent(): void {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    private unregisterKeyBoardEvent(): void {
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    private onKeyUp(event): void {
        if (this.keyUpEventsDic[event.keyCode]) {
            for (let i = this.keyUpEventsDic[event.keyCode].length - 1; i >= 0; i--) {
                if (this.keyUpEventsDic[event.keyCode][i].callback != null) {
                    this.keyUpEventsDic[event.keyCode][i].callback.apply(
                        this.keyUpEventsDic[event.keyCode][i].target,
                        null
                    );
                } else {
                    this.keyUpEventsDic[event.keyCode].splice(i, 1);
                }
            }
        }
    }

    private onKeyDown(event: { keyCode: string | number; }): void {
        if (this.keyDownEventsDic[event.keyCode]) {
            for (
                let i = this.keyDownEventsDic[event.keyCode].length - 1;
                i >= 0;
                i--
            ) {
                if (this.keyDownEventsDic[event.keyCode][i].callback != null) {
                    this.keyDownEventsDic[event.keyCode][i].callback.apply(
                        this.keyDownEventsDic[event.keyCode][i].target,
                        null
                    );
                } else {
                    this.keyDownEventsDic[event.keyCode].splice(i, 1);
                }
            }
        }
    }
    /***************************** 键盘事件 end********************************/
}
