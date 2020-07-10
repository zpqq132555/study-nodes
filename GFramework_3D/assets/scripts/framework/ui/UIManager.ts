import { Component, find, instantiate, loader, Node, Prefab, _decorator } from "cc";
import { DebugUtil } from "../tools/DebugUtil";
import { UIBasePanel } from "./UIBasePanel";
import { UIConfig, UIPanels } from "./UIConfig";
const { ccclass, property } = _decorator;

export enum UIPanelType {
    FullPanel = 0,          //全屏页面
    PopPanel = 1,           //弹窗页面
    TopPanel = 2,           //置顶页面
}

interface UILoadObj {
    typeId: number,
    uiid: UIPanels,
    resName: string,
    callback: (data: any) => void,
    target: any,
    datas: any,
}

/**
 * UI管理器，使用要求如下：
 * 1、每个场景都要有个Canvas对象，作为UI界面挂载的根节点
 * 2、每个场景的Canvas对象下都有有两个子对象，BaseLayer和TopLayer，TopLayer中显示始终居于屏幕顶层的内容（例如插屏广告）
 */
@ccclass("UIManager")
export class UIManager extends Component {

    private uiBaseRoot: Node = null;         //UI页面挂载的根节点
    private uiTopRoot: Node = null;         //UI页面挂载的根节点
    private ui2LoadList: UILoadObj[] = [];        //待加载资源的UI页面
    private uiResList: any[] = [];          //UI页面的资源缓存
    private showingUIList: Node[] = [];      //当前显示中的UI页面
    private isLoadingUIRes = false;     //当前帧是否在加载UI页面，一帧只加载一个UI页面

    /**************************初始化、配置********************************/
    /**
     * 初始化
     * @param rootNode 
     */
    public init(): void {

    }

    public setUIRoot(rootNode: Node): void {
        if (rootNode == null) {
            this.uiBaseRoot = null;
            this.uiTopRoot = null;
        } else {
            this.uiBaseRoot = rootNode.getChildByName("BaseLayer");
            this.uiTopRoot = rootNode.getChildByName("TopLayer");
            if (this.uiBaseRoot == null) {
                DebugUtil.logError("Canvas中不存在BaseLayer子节点");
            }
            if (this.uiTopRoot == null) {
                DebugUtil.logError("Canvas中不存在TopLayer子节点");
            }
        }
    }

    public getUIBaseRoot(): Node {
        if (this.uiBaseRoot == null || this.uiTopRoot == null) {
            let canvasNode = find("Canvas");
            if (canvasNode != null) {
                this.setUIRoot(find("Canvas"));
            }
            else {
                DebugUtil.logError("检查当前场景是否存在Canvas节点");
            }
        }
        return this.uiBaseRoot;
    }

    public getUITopRoot(): Node {
        if (this.uiBaseRoot == null || this.uiTopRoot == null) {
            let canvasNode = find("Canvas");
            if (canvasNode != null) {
                this.setUIRoot(find("Canvas"));
            }
            else {
                DebugUtil.logError("检查当前场景是否存在Canvas节点");
            }
        }
        return this.uiTopRoot;
    }

    /************************** 开放功能接口 ********************************/
    /**
     * 打开一个UI页面
     * 如果是全屏页面则关闭其他页面
     * @param panelType 
     * @param uiid 
     * @param autoClose 是否允许自动关闭该页面，例如广告弹窗页面可以设置为false
     * @param datas 
     * @param callback 
     * @param target 
     */
    public openUIPanel(panelType: UIPanelType, uiid: UIPanels, datas: any = null, callback: (data: any) => void = null, target: any = null): void {
        let uiName = UIPanels[uiid];
        //判断页面是否已经显示过了
        if (this.checkUIShow(uiid)) {
            DebugUtil.logInfo("UI页面已经显示了：" + uiName);
            return;
        }

        //判断页面资源是否加载了
        if (this.uiResList[uiid] == null) {
            //首次加载资源
            DebugUtil.logInfo("尝试显示UI页面，首次加载：" + uiName);
            this.uiResList[uiid] = { reloadActive: -1 };
            let loadObj = {
                typeId: panelType,         //正常页面是0，弹窗页面是1
                uiid: uiid,
                resName: UIConfig.ResPath + uiName,
                callback: callback,
                target: target,
                datas: datas,
            };
            this.ui2LoadList.push(loadObj);
            //DebugUtil.logInfo(this.ui2LoadList);
        }
        else {
            //判断是否加载完成
            if (this.uiResList[uiid] instanceof Node) {
                //已经加载完毕了
                DebugUtil.logInfo("尝试显示UI页面，缓存获取：" + uiName);
                //关闭其他UI界面
                if (panelType == UIPanelType.FullPanel) {
                    this.clearUIObj();
                }
                //重新设置页面数据
                let basePanel: UIBasePanel = this.uiResList[uiid].getComponent(UIBasePanel);
                if (basePanel) {
                    basePanel.setPanelDatas(datas);
                }
                //显示页面
                this.pushUIObj2ShowList(this.uiResList[uiid], panelType);
                //显示成功的回调
                if (callback != null && target != null) {
                    callback.call(target, this.uiResList[uiid]);
                }
            }
            else {
                DebugUtil.logInfo("UI页面资源正在加载中，请勿频繁调用：" + uiName);
            }
        }
    }

    /**
     * 关闭一个指定的UI页面
     * @param uiid 
     */
    public closeUIPanel(uiid: UIPanels) {
        let uiName = UIPanels[uiid];
        //判断页面是否已经显示过了
        if (!this.checkUIShow(uiid)) {
            DebugUtil.logInfo("UI页面已经关闭了：" + uiName);
            return;
        }
        DebugUtil.logInfo("关闭UI页面：" + uiName);
        if (this.uiResList[uiid] != null) {
            if (this.uiResList[uiid] instanceof Node) {
                this.popUIObj2ShowList(this.uiResList[uiid]);
            }
            else {
                this.uiResList[uiid].reloadActive = 1;
            }
        }
    }

    /************************** 内部功能接口 ********************************/
    /**
     * 关闭当前显示的所有页面
     */
    public clearUIObj(forceClear: boolean = false): void {
        DebugUtil.logInfo("关闭其他所有UI页面", this.showingUIList);
        for (let i = this.showingUIList.length - 1; i >= 0; i--) {
            if (forceClear == true) {
                //强制清除所有UI界面
                this.popUIObj2ShowList(this.showingUIList[i]);
            }
            else if (this.showingUIList[i].parent.name == "BaseLayer") {
                //只清除BaseLayer中的UI界面
                this.popUIObj2ShowList(this.showingUIList[i]);
            }
        }
    }

    /**
     * 添加一个UI页面到显示列表并显示在最上层
     */
    private pushUIObj2ShowList(uiObj: Node, panelType: UIPanelType): void {
        this.showingUIList.unshift(uiObj);
        if (panelType == UIPanelType.TopPanel) {
            if (uiObj.parent == null || uiObj.parent == undefined) {
                this.getUITopRoot().addChild(uiObj);
            }
        } else {
            if (uiObj.parent == null || uiObj.parent == undefined) {
                this.getUIBaseRoot().addChild(uiObj);
            }
        }
        let basePanel: UIBasePanel = uiObj.getComponent(UIBasePanel);
        if (basePanel) {
            basePanel.showView();
        }
        DebugUtil.logInfo("成功显示UI页面：" + uiObj.name);
    }

    private popUIObj2ShowList(uiObj: Node): void {
        let popObj: Node = null;
        for (let i = this.showingUIList.length - 1; i >= 0; i--) {
            if (uiObj == this.showingUIList[i]) {
                popObj = this.showingUIList.splice(i, 1)[0];
                break;
            }
        }
        if (popObj != null) {
            if (popObj.getComponent(UIBasePanel)) {
                popObj.getComponent(UIBasePanel).hideView();
            }
            else {
                popObj.removeFromParent();
            }
        }
        //DebugUtil.logInfo("popUIObj2ShowList:",this.showingUIList);
    }

    /**
     * 判断某个UI页面是否在显示中
     * @param uiid
     */
    private checkUIShow(uiid): boolean {
        for (let i = 0; i < this.showingUIList.length; i++) {
            if (this.showingUIList[i].name == UIPanels[uiid]) {
                return true;
            }
        }
        return false;
    }
    /************************** 资源加载 ********************************/
    update(dt: number) {
        if (!this.isLoadingUIRes) {
            if (this.ui2LoadList.length > 0) {
                this.isLoadingUIRes = true;
                let loadObj = this.ui2LoadList.shift();
                let self = this;
                loader.loadRes(loadObj.resName, Prefab, (err, prefab) => {
                    this.isLoadingUIRes = false;
                    if (!err) {
                        //DebugUtil.logInfo("加载UI页面资源完成：",UIPanels[loadObj.uiid]);
                        DebugUtil.logInfo("加载UI页面资源完成：", UIPanels[loadObj.uiid]);
                        self.loadUICallBack(prefab, loadObj);
                    } else {
                        DebugUtil.logError("加载UI页面资源出错：", err);
                    }
                });
            }
        }
    }

    /**
     * 加载完页面资源后的回调
     * @param prefab 
     * @param loadObj 
     */
    private loadUICallBack(prefab: Prefab, loadObj: UILoadObj): void {
        //判断是独立页面还是弹窗
        if (loadObj.typeId == 0) {
            //独立页面,关闭其他所有页面
            this.clearUIObj();
        }

        let uiNode: Node = instantiate(prefab);
        let basePanel: UIBasePanel = uiNode.getComponent(UIBasePanel);
        if (basePanel) {
            basePanel.setPanelDatas(loadObj.datas);
        }
        //DebugUtil.logInfo("loadUICallBack",this.uiResList[loadObj.uiid]);
        if (this.uiResList[loadObj.uiid] != null) {
            if (this.uiResList[loadObj.uiid].reloadActive != 1) {
                //加载完成之前没有被关闭了
                //显示UI界面
                this.pushUIObj2ShowList(uiNode, loadObj.typeId);
                //显示成功的回调
                if (loadObj.callback != null && loadObj.target != null) {
                    loadObj.callback.call(loadObj.target, loadObj.datas);
                }
            } else {
                DebugUtil.logWarn("UI页面加载完成前就被关闭了：" + UIPanels[loadObj.uiid])
            }
            //添加到缓存中
            this.uiResList[loadObj.uiid] = uiNode;
            this.uiResList[loadObj.uiid].resName = loadObj.resName;
        }
        else {
            DebugUtil.logError("加载资源出错，资源缓存是null");
        }
        //DebugUtil.logInfo("loadUICallBack",this.uiResList[loadObj.uiid]);
    }

    /**
     * 释放所有的UI资源
     */
    public releaseAllUIRes(): void {
        //删除加载过得UI对象
        for (let i = 0; i < this.uiResList.length; i++) {
            if (this.uiResList[i] != null && this.uiResList[i] instanceof Node) {
                this.uiResList[i].destroy();
            }
        }
        //删除加载中的UI资源
        for (let i = 0; i < this.uiResList.length; i++) {
            if (this.uiResList[i] != null && this.uiResList[i] instanceof Node) {
                loader.releaseRes(this.uiResList[i].resName);
            }
        }
        this.uiResList = [];
        this.showingUIList = [];
        this.ui2LoadList = [];
    }
}
