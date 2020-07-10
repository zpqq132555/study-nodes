import { _decorator } from "cc";
import { GameConfig, Platforms } from "../../GameConfig";
import { DebugUtil } from "../tools/DebugUtil";
const { ccclass, property } = _decorator;

@ccclass("SaveManager")
export class SaveManager {
    //单例模式
    private static _instance: SaveManager;
    public static get Instance(): SaveManager {
        if (SaveManager._instance == null) {
            SaveManager._instance = new SaveManager();
        }
        return SaveManager._instance;
    }

    private saveCache = {};     //存档缓存

    public constructor() {
        this.saveCache = {};
    }

    /*****************对外暴露的接口******************/
    /**
     * 保存一条存档
     */
    public saveItemRecord(key: string, value: string): void {
        this.saveCache[key] = value;
        this.saveItem(key, value);
    }
    /**
     * 读取一条存档
     * @param key 
     * @param defaultValue 
     */
    public loadItemRecord(key: string, defaultValue: string): string {
        let value: string = null;
        if (this.saveCache[key] != null && this.saveCache[key] != undefined) {
            value = this.saveCache[key];
        }
        else {
            value = this.loadItem(key);
            this.saveCache[key] = value;
        }
        if (value == null || value == undefined || value == "") {
            value = defaultValue;
        }
        return value;
    }
    /**
     * 保存游戏存档
     * @param saveData
     */
    public saveGameRecord(saveData: any) {
        for (var key in saveData) {
            this.saveItemRecord(key, saveData[key]);
        }
    }
    /**
     * 读取游戏存档
     * @param loadItems 
     * @param callback 
     */
    public loadGameRecord(loadItems: any, callback: Function, target: any) {
        let result = {};
        for (let key in loadItems) {
            let itemLoaded = this.loadItemRecord(key, loadItems[key]);
            result[key] = itemLoaded;
        }
        callback.call(target, result);
    }
    /**********************各平台的基础API********************/
    private saveItem(key: string, value: string): void {
        if (GameConfig.IsPublishPlatform == Platforms.H5) {
            //@ts-ignore
            cc.sys.localStorage.setItem(key, value);
        }
        else if (GameConfig.IsPublishPlatform == Platforms.VIVO) {
            //@ts-ignore
            qg.setStorage({
                key: key,
                value: value,
                success: function (data: any) {
                    DebugUtil.logInfo("saveRecord success:", data);
                },
                fail: function (data: any, code: any) {
                    DebugUtil.logInfo("saveRecord fail:", data, code);
                }
            });
        }
        else if (GameConfig.IsPublishPlatform == Platforms.OPPO) {
            //@ts-ignore
            cc.sys.localStorage.setItem(key, value);
        }
        DebugUtil.logInfo("saveItem[key:" + key + " value:" + value + "]");
    }

    private loadItem(key: string): string {
        let result: any = "";
        if (GameConfig.IsPublishPlatform == Platforms.H5) {
            //@ts-ignore
            result = cc.sys.localStorage.getItem(key);
        }
        else if (GameConfig.IsPublishPlatform == Platforms.VIVO) {
            //@ts-ignore
            result = qg.getStorageSync({
                key: key,
            });
        }
        else if (GameConfig.IsPublishPlatform == Platforms.OPPO) {
            //@ts-ignore
            result = cc.sys.localStorage.getItem(key);
        }
        DebugUtil.logInfo("loadItem[key:" + key + " value:" + result + "]");
        if (result == null || result == undefined) {
            result = "";
        }
        return result;
    }
}
