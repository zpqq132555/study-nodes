import { _decorator } from "cc";
import { DebugUtil } from "../tools/DebugUtil";
import { EventID } from "./MsgConfig";
const { ccclass } = _decorator;

export interface IEventData {
    callback: (data: any) => void;
    target: any;
}

/**
 * 消息中心
 * 1、注册消息：registerEventListener
 * 2、注销消息：unregisterEventListener
 * 3、广播消息：dispatchEvent
 */
@ccclass("MsgCenter")
export class MsgCenter {
    //单例模式
    private static _instance: MsgCenter;
    public static get Instance(): MsgCenter {
        if (MsgCenter._instance == null) {
            MsgCenter._instance = new MsgCenter();
        }
        return MsgCenter._instance;
    }

    private _eventList: { [eventName: string]: IEventData[] } = {};

    /**
     * 注册事件
     * 允许重复注册
     * @param eventId
     * @param callback
     * @param target
     */
    public registerEventListener(eventId: EventID, callback: (data: any) => void, target: any): void {
        if (eventId == null || callback == null || target == null) {
            DebugUtil.logError("注销事件参数错误，不能是null");
            return;
        }
        //判断该类型消息是否注册过
        let eventName = EventID[eventId];
        if (this._eventList[eventName] == undefined) {
            this._eventList[eventName] = [];
        }
        this._eventList[eventName].push({ callback: callback, target: target });
    }

    /**
     * 注销事件
     * 只传入eventId则注销该id对应的所有事件
     * @param eventId 
     * @param callback 
     * @param target 
     */
    public unregisterEventListener(eventId: EventID, callback: (data: any) => void = null, target: any = null): boolean {
        let eventName = EventID[eventId];
        if (callback == null && target == null) {
            this._eventList[eventName] = undefined;
            return true;
        }
        else {
            if (this._eventList[eventName] != undefined) {
                //遍历
                for (let i = this._eventList[eventName].length - 1; i >= 0; i--) {
                    if (this._eventList[eventName][i].callback == callback && this._eventList[eventName][i].target == target) {
                        this._eventList[eventName][i].callback = null;
                        this._eventList[eventName][i].target = null;
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * 广播消息
     * 处理消息方从获取到的data.msg中获取参数
     * @param eventId 
     * @param data 
     */
    public dispatchEvent(eventId: EventID, data: any) {
        let eventName = EventID[eventId];
        let eventList: IEventData[] = this._eventList[eventName];
        if (eventList != undefined) {
            for (let i = eventList.length - 1; i >= 0; i--) {
                let eventData: IEventData = eventList[i];
                if (eventData.callback != undefined && eventData.callback != null && eventData.target != undefined && eventData.target != null) {
                    eventData.callback.call(eventData.target, { eventId: eventId, msg: data });
                }
                else {
                    eventList.splice(i, 1);
                }
            }
        }
    }
}
