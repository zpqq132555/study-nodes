import { _decorator} from "cc";
const { ccclass} = _decorator;

/**
 * UI页面枚举
 * 
 * 注意事项：
 * 1、枚举名称和预制体资源名称要一致
 * 2、预制体资源名称要和预制体节点名称一致
 */
export enum UIPanels{
    

    _TemplatePanel = 100,
    _TemplatePopPanel = 101,
}

@ccclass("UIConfig")
export class UIConfig{
    //预制体资源路径
    public static ResPath:string = "uiPanels/";
}
