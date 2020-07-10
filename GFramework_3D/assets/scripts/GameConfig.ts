import { _decorator } from "cc";
const { ccclass } = _decorator;

export enum Platforms {
    H5 = 0,
    VIVO = 1,
    OPPO = 2,
}

@ccclass("GameConfig")
export class GameConfig {
    /**
     * 发布平台
     */
    private static PublishPlatform: Platforms = Platforms.H5;

    /**
     * 测试模式
     */
    private static TEST_MODE: boolean = false;

    /**
     * 调试日志
     */
    private static DEBUG_SWITCH: boolean = true;

    /**
     * 运行状态信息
     */
    private static SHOW_DISPLAYSTATE: boolean = false;


    public static get IsPublishPlatform(): Platforms{
        return this.PublishPlatform;
    }

    public static get IsTestMode(): boolean {
        return this.TEST_MODE;
    }

    public static get IsDebugMode(): boolean {
        return this.DEBUG_SWITCH;
    }

    public static get IsShowDisplayState(): boolean {
        return this.SHOW_DISPLAYSTATE;
    }
}
