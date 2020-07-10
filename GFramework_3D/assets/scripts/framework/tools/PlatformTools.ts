import { _decorator } from "cc";
import { GameConfig, Platforms } from "../../GameConfig";
import { SaveManager } from "../save/SaveManager";
import { DebugUtil } from "./DebugUtil";
const { ccclass } = _decorator;

@ccclass("PlatformTools")
export class PlatformTools {
    /**
     * 获得窗口分辨率（非硬件分辨率）
     * 是根据设计分辨率和适配模式计算后得到的
     * 例如设计分辨率是960*720，适配宽度，则得到的窗口分辨率就是960*？，其中高度是不确定的，但是宽度是确定
     */
    public getScreenSize(): any {
        //@ts-ignore
        return { width: cc.winSize.width, height: cc.winSize.height };
    }

    public getScreenWidth(): number {
        //@ts-ignore
        return cc.winSize.width;
    }

    public getScreenHeight(): number {
        //@ts-ignore
        return cc.winSize.height;
    }

    /**
     * 获得设计分辨率宽高比，ratio = 宽/高
     */
    public getScreenRatio(): number {
        //@ts-ignore
        let ratio = cc.winSize.width / cc.winSize.height;
        return ratio;
    }

    /********************************震动相关*********************************/
    //设置震动功能的开关
    private vibrateSwitch: boolean = null;
    public setVibrateSwitch(value: boolean): void {
        this.vibrateSwitch = value;
        if (value == true) {
            SaveManager.Instance.saveItemRecord("vibrateSwitch", "1");
        } else {
            SaveManager.Instance.saveItemRecord("vibrateSwitch", "0");
        }
    }
    public getVibrateSwitch(): boolean {
        DebugUtil.logInfo("获取震动开关");
        if (this.vibrateSwitch == null || this.vibrateSwitch == undefined) {
            this.vibrateSwitch = SaveManager.Instance.loadItemRecord('vibrateSwitch', "1") == "1" ? true : false;
            this.vibrateSwitch = true;
        }
        return this.vibrateSwitch;
    }

    //短震动
    public vibrateShort(): void {
        if (!this.getVibrateSwitch()) {
            return;
        }
        if (GameConfig.IsPublishPlatform == Platforms.H5) {
            return;
        }
        else if (GameConfig.IsPublishPlatform == Platforms.VIVO) {
            //@ts-ignore
            qg.vibrateShort();
        } else if (GameConfig.IsPublishPlatform == Platforms.OPPO) {
            //@ts-ignore
            qg.vibrateShort({
                success: function (_res: any) { },
                fail: function (_res: any) { },
                complete: function (_res: any) { }
            });
        }
    }

    public vibrateLong(): void {
        if (!this.getVibrateSwitch()) {
            return;
        }
        if (GameConfig.IsPublishPlatform == Platforms.H5) {
            return;
        }
        else if (GameConfig.IsPublishPlatform == Platforms.VIVO) {
            //@ts-ignore
            qg.vibrateLong();
        } else if (GameConfig.IsPublishPlatform == Platforms.OPPO) {
            //@ts-ignore
            qg.vibrateLong({
                success: function (_res: any) { },
                fail: function (_res: any) { },
                complete: function (_res: any) { }
            });
        }
    }

    /********************************加速度计相关*********************************/
    //获取加速度计的值
    public listenAccelerometerValue(callback: Function, target: Object): void {
        if (GameConfig.IsPublishPlatform == Platforms.H5) {
            return;
        }
        else if (GameConfig.IsPublishPlatform == Platforms.VIVO) {
            //@ts-ignore
            qg.subscribeAccelerometer({
                callback: function (data: { x: any; y: any; z: any; }) {
                    DebugUtil.logInfo(`listenAccelerometerValue callback, x = ${data.x}, y = ${data.y}, z = ${data.z}`);
                    callback.apply(target, data);
                }
            });
        }
        else if (GameConfig.IsPublishPlatform == Platforms.OPPO) {
            //@ts-ignore
            qg.startAccelerometer({
                interval: "ui",
                success: function (_res: any) { },
                fail: function (_res: any) { },
                complete: function (_res: any) { }
            });
            //@ts-ignore
            qg.onAccelerometerChange(function (_x: any, _y: any, _z: any) {
                callback.apply(target, arguments);
            });
        }
    }

    public stopListenAccelerometerValue(): void {
        if (GameConfig.IsPublishPlatform == Platforms.H5) {
            return;
        }
        else if (GameConfig.IsPublishPlatform == Platforms.VIVO) {
            //@ts-ignore
            qg.unsubscribeAccelerometer();
        }
        else if (GameConfig.IsPublishPlatform == Platforms.OPPO) {
            //@ts-ignore
            qg.stopAccelerometer({
                success: function (_res: any) { },
                fail: function (_res: any) { },
                complete: function (_res: any) { }
            });
        }
    }
}