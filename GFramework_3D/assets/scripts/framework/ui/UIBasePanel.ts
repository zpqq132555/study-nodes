import { Node, SpriteAtlas, SpriteFrame, _decorator } from "cc";
import { DebugUtil } from "../tools/DebugUtil";
import { GameBase } from "../_base/GameBase";
const { ccclass, property } = _decorator;

@ccclass("UIBasePanel")
export class UIBasePanel extends GameBase {

    private _mInit: boolean = false;         //是否初始化
    private _panelDatas: any = null;         //页面参数

    private _uiScreenBg: Node = null;        //页面的背景，用于屏蔽下层点击事件

    //待使用的精灵
    @property({ type: [SpriteFrame] })
    spriteFrameList: Array<SpriteFrame | null> = [];
    //待使用的图集
    @property({ type: [SpriteAtlas] })
    spriteAtlasList: Array<SpriteAtlas | null> = [];

    /**
     *
     */
    constructor() {
        super();
        this._mInit = false;
        this._panelDatas = null;
    }

    /**
     * 页面参数
     * @param datas 
     */
    public setPanelDatas(datas: any) {
        this._panelDatas = datas;
    }

    public getPanelDatas(): any {
        return this._panelDatas;
    }

    /**
     * 页面初始化状态
     * @param state 
     */
    public setInitState(state: boolean): void {
        this._mInit = state;
    }

    public getInitState(): boolean {
        return this._mInit;
    }

    /**
     * 初始化页面
     * 只在首次加载的时候调用一次
     */
    public initView(): void {
        this.setInitState(true);
    }

    /**
     * 展示页面
     */
    public showView(): void {
        this.node.active = true;
        if (this.getInitState() == false) {
            this.initData();
            this.refreshData();
            this.initView();
            this.refreshView();
        } else {
            this.refreshData();
            this.refreshView();
        }
    }

    /**
     * 隐藏页面
     */
    public hideView(): void {
        this.node.active = false;
    }

    /**
     * 刷新页面
     */
    public refreshView(): void {

    }

    /**
     * 初始化数据
     */
    public initData(): void {

    }

    /**
     * 刷新数据
     */
    public refreshData(): void {

    }

    /************************** 点击事件 *******************************/
    public registerClickListener(): void {

    }

    /**************************事件监听 *******************************/
    public registerEventListener(): void {

    }

    public unregisterEventListener(): void {

    }
    /****************************** Cocos生命周期方法 *****************************/
    onLoad() {
        super.onLoad();
        //初始化屏蔽事件层
        if (this._uiScreenBg == null) {
            this._uiScreenBg = this.node.getChildByName("panelBackground");
            if (this._uiScreenBg == null) {
                DebugUtil.logWarn(this.node.name + "not Child panelBackground");
            }
        }
        if (this._uiScreenBg != null) {
            this._uiScreenBg.on(Node.EventType.TOUCH_END, function () {
                DebugUtil.logInfo("屏蔽下层点击事件");
            }, this);
        }

        //注册事件
        this.registerEventListener();
        this.registerClickListener();
    }

    onDestroy() {
        super.onDestroy();
        this.unregisterEventListener();
    }
}