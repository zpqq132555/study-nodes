import { _decorator } from "cc";
const { ccclass } = _decorator;

export enum Platforms {
    H5 = 0,
    VIVO = 1,
    OPPO = 2,
}

@ccclass("GameConfig")
export class GameConfig {
    //发布平台
    public static PublishPlatform: Platforms = Platforms.H5;

    /**
     * 测试模式
     * 0--关闭
     * 非0--开启
     */
    public static TEST_MODE: number = 1;
    
    public static get IsTestMode(): boolean {
        return GameConfig.TEST_MODE != 0;
    }

    /**
     * 调试日志
     * 0--关闭  1--开启
     */
    private static DEBUG_SWITCH:number = 1;
    public static get IsDebugMode():boolean{
        return GameConfig.DEBUG_SWITCH != 0;
    }

    /**
     * 运行状态信息
     * 0--关闭  1--开启
     */
    private static SHOW_DISPLAYSTATE:number = 0;
    public static get IsShowDisplayState():boolean{
        return GameConfig.SHOW_DISPLAYSTATE != 0;
    }
}
