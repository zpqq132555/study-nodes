import { error, log, warn, _decorator } from "cc";
import { GameConfig } from "../../GameConfig";
const { ccclass } = _decorator;

/**
 * 日志工具类
 */
@ccclass("DebugUtil")
export class DebugUtil {
    public static logInfo(msg: any, ...param: any[]): void {
        if (!this.logOpen()) {
            return;
        }
        if (param.length == 0) {
            log(msg);
        } else {
            log(msg, param);
        }
    }

    public static logWarn(msg: any, ...param: any[]): void {
        if (!this.logOpen()) {
            return;
        }
        if (param.length == 0) {
            warn(msg);
        } else {
            warn(msg, param);
        }
    }

    public static logError(msg: any, ...param: any[]): void {
        if (!this.logOpen()) {
            return;
        }
        if (param.length == 0) {
            error(msg);
        } else {
            error(msg, param);
        }
    }

    private static logOpen(): boolean {
        return GameConfig.IsDebugMode;
    }
}
