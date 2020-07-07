import { director, _decorator } from "cc";
import { DebugUtil } from "../tools/DebugUtil";
import { Scenes } from "./SceneConfig";
const { ccclass } = _decorator;

@ccclass("SceneManager")
export class SceneManager {
    //单例模式
    private static _instance: SceneManager = null;

    private curSceneId: Scenes;                      //当前的场景id
    private loadingSceneId: Scenes = null;           //加载中的场景id

    private loadCallback: (data: any) => void = null;
    private loadTarget: any = null;
    private beforeLoadFunc: (data: any) => void = null;
    private beforeLoadTarget: any = null;

    /**
     *构造方法
     */
    constructor() {
        this.curSceneId = Scenes.Init;
    }

    public static get Instance(): SceneManager {
        if (SceneManager._instance == null) {
            SceneManager._instance = new SceneManager();
        }
        return SceneManager._instance;
    }

    /**
     * 加载场景
     * @param sceneId 
     * @param loadCallback 
     * @param loadTarget 
     */
    public loadScene(sceneId: Scenes): void {
        this.loadingSceneId = sceneId;
        let sceneName = Scenes[sceneId];
        //先卸载需要的资源再加载成就
        //回调
        if (this.beforeLoadFunc != null && this.beforeLoadTarget != null) {
            this.beforeLoadFunc.call(this.beforeLoadTarget, sceneName);
        }
        director.loadScene(sceneName, this.onSceneLaunched.bind(this), this.onSceneUnLoaded.bind(this));
    }

    /**
     * 设置加载场景的事件
     * @param loadCallback 
     * @param loadTarget 
     */
    public setLoadEvent(loadCallback: (data: any) => void, loadTarget: any) {
        this.loadCallback = loadCallback;
        this.loadTarget = loadTarget;
        DebugUtil.logInfo("设置加载场景的事件", this.loadCallback, this.loadTarget);
    }

    /**
     * 设置卸载场景的事件
     * @param beforeLoadFunc 
     * @param beforeLoadTarget 
     */
    public setBeforeLoadEvent(beforeLoadFunc: (data: any) => void, beforeLoadTarget: any) {
        this.beforeLoadFunc = beforeLoadFunc;
        this.beforeLoadTarget = beforeLoadTarget;
        DebugUtil.logInfo("设置卸载场景的事件", this.beforeLoadFunc, this.beforeLoadTarget);
    }

    /**
     * 加载场景成功的回调
     */
    private onSceneLaunched(): void {
        this.curSceneId = this.loadingSceneId;
        this.loadingSceneId = null;
        let sceneName = Scenes[this.curSceneId];
        DebugUtil.logInfo("场景加载完成", sceneName);
        //回调
        if (this.loadCallback != null && this.loadTarget != null) {
            this.loadCallback.call(this.loadTarget, sceneName);
        }
    }

    /**
     * 卸载场景成功的回调
     */
    private onSceneUnLoaded(): void {
        let sceneName = Scenes[this.curSceneId];
        DebugUtil.logInfo("场景卸载完成", sceneName);
    }

}
