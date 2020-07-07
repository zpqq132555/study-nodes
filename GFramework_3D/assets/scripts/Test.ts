import { Component, macro, _decorator } from "cc";
import { DebugUtil } from "./framework/tools/DebugUtil";
import { Scenes } from "./framework/scene/SceneConfig";
import { UIPanels } from "./framework/ui/UIConfig";
import { UIPanelType } from "./framework/ui/UIManager";
import { EventID } from "./framework/_message/MsgConfig";
import { Game } from "./Game";
const { ccclass, property } = _decorator;

@ccclass("Test")
export class Test extends Component {

    private testObj = {};
    onEnable() {
        //1、单条存档测试
        // Game.saveManager.saveItemRecord("ga","gaoang111");
        // let save:string = Game.saveManager.loadItemRecord("ga","");
        // if(save.length == 0){
        //     save = "empty";
        // }
        // this.testLabel1.string = save;
        // save = Game.saveManager.loadItemRecord("ga1","");
        // if(save.length == 0){
        //     save = "empty";
        // }
        // this.testLabel2.string = save;

        //2、游戏存档测试
        // Game.saveManager.loadGameRecord(SaveConfig.SaveItems,this.loadCallback,this);

        //3、分辨率测试
        //DebugUtil.logInfo(Tools.PlatformTools.getScreenSize());
        //this.testLabel1.string = Tools.PlatformTools.getScreenSize().width;
        //this.testLabel2.string = Tools.PlatformTools.getScreenSize().height;

        //4、震动功能测试
        //Tools.PlatformTools.vibrateShort();

        //5、加速度计测试
        //Tools.PlatformTools.listenAccelerometerValue(this.accelerateCallback,this);

        //6、数学工具类测试
        // for(let i=0; i<10;i++){
        //     DebugUtil.logInfo(Tools.MathTools.randomInt(0,5));
        // }
        // for(let i=0; i<20;i++){
        //     DebugUtil.logInfo(Tools.MathTools.randFloat(0,2));
        // }
        //var numbers = [1,2,3,4,5,null,undefined];
        //DebugUtil.logInfo(Tools.MathTools.average(numbers));

        //7、时间工具测试
        // DebugUtil.logInfo(Tools.TimeTools.getCurTimeStampSec());
        // DebugUtil.logInfo(Tools.TimeTools.getCurTimeStampMillSec());

        //8、AudioManager测试
        // DebugUtil.logInfo(AudioConfig.getAudioNameById(Audios.btnClick));
        // DebugUtil.logInfo(AudioConfig.getAudioResPath(Audios.bgm,AudioType.Music));
        //Game.audioManager.playBgMusic(Audios.bgm);
        // this.scheduleOnce(function() {
        //     Game.audioManager.pauseBgMusic();
        // }, 1);
        // this.scheduleOnce(function() {
        //     Game.audioManager.playBgMusic();
        // }, 3);

        //9、键盘按键事件测试
        Game.Instance.registerKeyDownEvent(macro.KEY.a, this.keyDownTest, this);
        Game.Instance.registerKeyDownEvent(macro.KEY.s, this.keyDownTest3, this);
        Game.Instance.registerKeyDownEvent(macro.KEY.d, this.keyDownTest2, this);

        //10、消息中心测试
        //Game.msgCenter.registerEventListener(EventID.TestEvent,this.msgTest,this);

        //11、UIManager测试
        //Game.uiManager.openUIPanel(UIPanels.TestPanel);
        //Game.uiManager.closeUIPanel(UIPanels.TestPanel);

        //12、SceneManager测试
    }

    public loadCallback(result: any): void {
        DebugUtil.logInfo("loadGameRecord", result);
    }

    public accelerateCallback(data: any): void {
        DebugUtil.logInfo("accelerateCallback", data, this);
    }

    public keyDownTest(): void {
        //8、AudioManager测试
        //Game.audioManager.playSound(Audios.btn);

        //10、消息中心测试
        //Game.msgCenter.dispatchEvent(EventID.TestEvent,{msg:"sbsb"});

        //11、UIManager测试
        Game.uiManager.openUIPanel(UIPanelType.FullPanel, UIPanels._TemplatePanel);

    }

    public keyDownTest3(): void {
        //11、UIManager测试
        Game.uiManager.openUIPanel(UIPanelType.TopPanel, UIPanels._TemplatePopPanel);

    }

    public keyDownTest2(): void {
        //8、AudioManager测试
        //Game.audioManager.playSound(Audios.success);

        //11、UIManager测试
        //Game.uiManager.closeUIPanel(UIPanels.TestPanel);
        //Game.uiManager.openUIPanel(UIPanelType.PopPanel,UIPanels.TestPopPanel);

        //12、SceneManager测试
        Game.sceneManager.loadScene(Scenes.Game);
    }

    public msgTest(data: any): void {
        DebugUtil.logInfo("getMsg", data.msg);
        Game.msgCenter.unregisterEventListener(EventID.TestEvent, this.msgTest, this);
    }

    onDestroy() {
        Game.Instance.unRegisterKeyDownEvent(macro.KEY.a, this.keyDownTest, this);
        Game.Instance.unRegisterKeyDownEvent(macro.KEY.s, this.keyDownTest3, this);
        Game.Instance.unRegisterKeyDownEvent(macro.KEY.d, this.keyDownTest2, this);
    }
}
