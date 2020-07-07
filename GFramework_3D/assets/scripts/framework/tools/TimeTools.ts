import { _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass("TimeTools")
export class TimeTools {
    /**
     * 获取当前时间戳
     * 单位：秒
     */
    public getCurTimeStampSec(): number {
        var myDate = new Date();
        return Math.floor(myDate.getTime() / 1000);
    }

    /**
     * 获取当前时间戳
     * 单位：毫秒
     */
    public getCurTimeStampMillSec(): number {
        var myDate = new Date();
        return Math.floor(myDate.getTime());
    }

    /**
     * 判断是否是同一天
     * @param timeStamp 
     */
    public isSameDay(timeStamp: number): boolean {
        var date1 = new Date(timeStamp);
        var date2 = new Date();
        if (date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate()) {
            return true;
        } else {
            return false;
        }
    }
}