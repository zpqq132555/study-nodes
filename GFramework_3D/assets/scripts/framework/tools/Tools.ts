import { _decorator } from "cc";
import { MathTools } from "./MathTools";
import { PlatformTools } from "./PlatformTools";
import { TimeTools } from "./TimeTools";

const { ccclass } = _decorator;

@ccclass("Tools")
export class Tools {

    //硬件平台相关工具
    private static platformTools: PlatformTools = null;

    //数学工具类
    private static mathTools: MathTools = null;

    //时间工具类
    private static timeTools: TimeTools = null;

    public static get PlatformTools(): PlatformTools {
        if (Tools.platformTools == null) {
            Tools.platformTools = new PlatformTools();
        }
        return Tools.platformTools;
    }

    public static get MathTools(): MathTools {
        if (Tools.mathTools == null) {
            Tools.mathTools = new MathTools();
        }
        return Tools.mathTools;
    }

    public static get TimeTools(): TimeTools {
        if (Tools.timeTools == null) {
            Tools.timeTools = new TimeTools();
        }
        return Tools.timeTools;
    }
}