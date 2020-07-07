import { lerp, _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MathTools")
export class MathTools {
    /**
     * 随机一个整数
     * 取值范围 [min,max]
     * @param min 
     * @param max 
     */
    public randomInt(min: number, max: number): number {
        let randNum = Math.random();
        randNum = randNum * (max - min + 1) + min;
        return Math.floor(randNum);
    }

    /**
     * 随机一个浮点数
     * 取值范围 [min,max)
     * @param min 
     * @param max 
     */
    public randomFloat(min: number, max: number): number {
        let randNum = Math.random();
        randNum = randNum * (max - min) + min;
        return randNum;
    }

    /**
     * 区间限制
     * @param value 
     * @param min 
     * @param max 
     */
    public clamp(value: number, min: number, max: number): number {
        var result = value;
        if (value < min) {
            result = min;
        } else if (value > max) {
            result = max;
        }
        return result;
    }

    /**
     * 取最小整数
     * @param value 
     */
    public floor(value: number): number {
        return Math.floor(value);
    }

    /**
     * 绝对值
     * @param value 
     */
    public abs(value: number): number {
        return Math.abs(value);
    }

    /**
     * 舍弃负数
     * 负数归0
     * @param value 
     */
    public positiveOnly(value: number): number {
        if (value < 0) {
            return 0;
        } else {
            return value;
        }
    }

    /**
     * 近似值
     * @param value 
     * @param targetValue 
     */
    public isApproximate(value: number, targetValue: number) {
        if (Math.abs(value - targetValue) < 0.1) {
            return true;
        }
        return false;
    }

    /**
     * 插值算法
     * @param from 
     * @param to 
     * @param smooth 
     */
    public lerp(from: number, to: number, smooth: number): number {
        return lerp(from, to, smooth);
    }

    /**
     * 计算平均值
     * @param valueArray 
     */
    average(valueArray: number[]): number {
        var amount = 0;
        var nums = 0;
        for (var i = 0; i < valueArray.length; i++) {
            if (!isNaN(valueArray[i]) && valueArray[i] != null && valueArray[i] != undefined) {
                amount += valueArray[i];
                nums++;
            }
        }
        return amount / nums;
    }

}