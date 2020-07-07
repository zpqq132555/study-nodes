import { _decorator } from "cc";
import { DebugUtil } from "./framework/tools/DebugUtil";
import { Scenes } from "./framework/scene/SceneConfig";
import { SceneManager } from "./framework/scene/SceneManager";
import { GameBase } from "./framework/_base/GameBase";
import { GameData } from "./GameData";
const { ccclass } = _decorator;

@ccclass("GameManager")
export class GameManager extends GameBase {

    private _gameData: GameData = null;
    public get gameData(): GameData {
        return this._gameData;
    }

    /**
     *
     */
    constructor() {
        super();
        this._gameData = new GameData();
    }

    /**
     * 初始化方法
     */
    public init(): void {
        this.gameData.init();
    }

    /**
     * 判断框架初始化是否完成，完成则进入游戏内容
     */
    public checkEnterGame(): void {
        DebugUtil.logInfo("框架初始化中，等待进入游戏");
        this.addScheduler(this.checkEnterGameScheduler, 0.2);
    }

    private checkEnterGameScheduler(): void {
        if (this._gameData.recordLoaded) {
            this.removeScheduler(this.checkEnterGameScheduler);
            this.enterGame();
        }
    }

    /**
     * 加载游戏内容场景
     */
    private enterGame(): void {
        DebugUtil.logInfo("框架初始化完成，进入游戏");
        SceneManager.Instance.loadScene(Scenes.Main);
    }

}
