import { Component, _decorator } from "cc";
import { IEventData, MsgCenter } from "../_message/MsgCenter";
import { EventID } from "../_message/MsgConfig";
const { ccclass, property } = _decorator;

@ccclass("GameBase")
export class GameBase extends Component {

    /********************** 事件相关 **************************/
    private _eventList: { [eventName: string]: IEventData[] } = {};
    protected addEventListener(eventId: EventID, callback: (data: any) => void, target: any): void {
        MsgCenter.Instance.registerEventListener(eventId, callback, target);

        let eventName = EventID[eventId];
        if (this._eventList[eventName] == undefined) {
            this._eventList[eventName] = [];
        }
        this._eventList[eventName].push({ callback: callback, target: target });
    }

    protected removeEventListener(eventId: EventID, callback: (data: any) => void, target: any): void {
        MsgCenter.Instance.unregisterEventListener(eventId, callback, target);

        let eventName = EventID[eventId];
        if (this._eventList[eventName] != undefined) {
            //遍历
            for (let i = this._eventList[eventName].length - 1; i >= 0; i--) {
                if (this._eventList[eventName][i].callback == callback && this._eventList[eventName][i].target == target) {
                    this._eventList[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    /**
     * 移除所有的事件监听
     */
    protected removeAllEventListener(): void {
        for (let key in this._eventList) {
            for (let i = 0; i < this._eventList[key].length; i++) {
                MsgCenter.Instance.unregisterEventListener(EventID[key], this._eventList[key][i].callback, this._eventList[key][i].target);
            }
        }
        this._eventList = {};
    }

    protected dispatchEvent(eventId: EventID, data: any = null): void {
        MsgCenter.Instance.dispatchEvent(eventId, data);
    }


    /**********************定时器相关**************************/
    /**
     * 循环定时器
     */
    public addScheduler(callback: any, interval: number, repeat = null, delay = null): void {
        if (repeat != null && delay != null) {
            this.schedule(callback, interval, repeat, delay);
        } else {
            this.schedule(callback, interval);
        }
    }

    public addSchedulerOnce(callback: any, time: number): void {
        this.scheduleOnce(callback, time);
    }

    public removeScheduler(callback: any): void {
        this.unschedule(callback);
    }

    public removeAllScheduler(): void {
        this.unscheduleAllCallbacks();
    }
    /**********************Cocos生命周期相关**************************/
    /**
     * 构造方法
     */
    constructor() {
        super();
    }

    onLoad() {

    }

    onDestroy() {
        this.removeAllEventListener();
        this.removeAllScheduler();
    }
}
