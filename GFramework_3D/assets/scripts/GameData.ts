import { _decorator } from "cc";
import { DebugUtil } from "./framework/tools/DebugUtil";
import { Game } from "./Game";
const { ccclass } = _decorator;

/**
 * 游戏的运行数据
 */
@ccclass("GameData")
export class GameData {
    //存档是否读取完毕
    public recordLoaded: boolean = false;

    /****************要存档的数据*****************/
    public saveNumber: number;
    public saveString: string;
    public saveBoolean: boolean;
    /****************运行时数据*******************/
    public runNumber: number;

    /**
     * 初始化游戏数据
     */
    public init(): void {
        //读取存档数据
        this.loadGameRecord();
        //写入存档数据
        this.saveGameRecord();
    }

    /***********************************存档数据（永久保存）****************************************/
    /**
     * 读取存档数据
     */
    private loadGameRecord(): void {
        //存档条目
        let loadItems = {
            saveNumber: 100,
            saveString: "gaoang",
            saveBoolean: 1,
        }
        Game.saveManager.loadGameRecord(loadItems, this.onLoadGameRecord, this);
    }

    /**
     * 读取存档成功的回调
     */
    private onLoadGameRecord(recordData: any): void {
        DebugUtil.logInfo("读取存档成功：", recordData);
        //过滤存档内容
        this.saveNumber = recordData.saveNumber;
        if (isNaN(this.saveNumber)) {
            this.saveNumber = 0;
        }
        DebugUtil.logInfo("saveNumber:", this.saveNumber);

        this.saveString = recordData.saveString;
        DebugUtil.logInfo("saveString:", this.saveString);

        this.saveBoolean = recordData.saveBoolean == 1 ? true : false;
        DebugUtil.logInfo("saveBoolean:", this.saveBoolean);

        //存档读取完成
        this.recordLoaded = true;
    }

    /**
     * 写入存档数据
     */
    public saveGameRecord(): void {
        let saveItems = {
            saveNumber: this.saveNumber,
            saveString: this.saveString,
            saveBoolean: this.saveBoolean == true ? 1 : 0,
        };
        Game.saveManager.saveGameRecord(saveItems);
        DebugUtil.logInfo("保存游戏存档成功");
    }
}
