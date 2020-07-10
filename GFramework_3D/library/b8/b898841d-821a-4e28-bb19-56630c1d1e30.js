System.register(["cc", "code-quality:cr", "./framework/tools/DebugUtil.js", "./framework/scene/SceneConfig.js", "./framework/ui/UIConfig.js", "./framework/ui/UIManager.js", "./framework/_message/MsgConfig.js", "./Game.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Component, macro, _decorator, DebugUtil, Scenes, UIPanels, UIPanelType, EventID, Game, _dec, _class, _temp, _crd, ccclass, property, Test;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "./framework/tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScenes(extras) {
    _reporterNs.report("Scenes", "./framework/scene/SceneConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanels(extras) {
    _reporterNs.report("UIPanels", "./framework/ui/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanelType(extras) {
    _reporterNs.report("UIPanelType", "./framework/ui/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventID(extras) {
    _reporterNs.report("EventID", "./framework/_message/MsgConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      macro = _cc.macro;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_frameworkToolsDebugUtilJs) {
      DebugUtil = _frameworkToolsDebugUtilJs.DebugUtil;
    }, function (_frameworkSceneSceneConfigJs) {
      Scenes = _frameworkSceneSceneConfigJs.Scenes;
    }, function (_frameworkUiUIConfigJs) {
      UIPanels = _frameworkUiUIConfigJs.UIPanels;
    }, function (_frameworkUiUIManagerJs) {
      UIPanelType = _frameworkUiUIManagerJs.UIPanelType;
    }, function (_framework_messageMsgConfigJs) {
      EventID = _framework_messageMsgConfigJs.EventID;
    }, function (_GameJs) {
      Game = _GameJs.Game;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b8988QdghpOKLsZVmMMHR4w", "Test", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Test", Test = (_dec = ccclass("Test"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Test, _Component);

        function Test() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Test);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Test)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.testObj = {};
          return _this;
        }

        _createClass(Test, [{
          key: "onEnable",
          value: function onEnable() {
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
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance.registerKeyDownEvent(macro.KEY.a, this.keyDownTest, this);
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance.registerKeyDownEvent(macro.KEY.s, this.keyDownTest3, this);
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance.registerKeyDownEvent(macro.KEY.d, this.keyDownTest2, this); //10、消息中心测试
            //Game.msgCenter.registerEventListener(EventID.TestEvent,this.msgTest,this);
            //11、UIManager测试
            //Game.uiManager.openUIPanel(UIPanels.TestPanel);
            //Game.uiManager.closeUIPanel(UIPanels.TestPanel);
            //12、SceneManager测试
          }
        }, {
          key: "loadCallback",
          value: function loadCallback(result) {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("loadGameRecord", result);
          }
        }, {
          key: "accelerateCallback",
          value: function accelerateCallback(data) {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("accelerateCallback", data, this);
          }
        }, {
          key: "keyDownTest",
          value: function keyDownTest() {
            //8、AudioManager测试
            //Game.audioManager.playSound(Audios.btn);
            //10、消息中心测试
            //Game.msgCenter.dispatchEvent(EventID.TestEvent,{msg:"sbsb"});
            //11、UIManager测试
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).uiManager.openUIPanel((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
              error: Error()
            }), UIPanelType) : UIPanelType).FullPanel, (_crd && UIPanels === void 0 ? (_reportPossibleCrUseOfUIPanels({
              error: Error()
            }), UIPanels) : UIPanels)._TemplatePanel);
          }
        }, {
          key: "keyDownTest3",
          value: function keyDownTest3() {
            //11、UIManager测试
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).uiManager.openUIPanel((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
              error: Error()
            }), UIPanelType) : UIPanelType).TopPanel, (_crd && UIPanels === void 0 ? (_reportPossibleCrUseOfUIPanels({
              error: Error()
            }), UIPanels) : UIPanels)._TemplatePopPanel);
          }
        }, {
          key: "keyDownTest2",
          value: function keyDownTest2() {
            //8、AudioManager测试
            //Game.audioManager.playSound(Audios.success);
            //11、UIManager测试
            //Game.uiManager.closeUIPanel(UIPanels.TestPanel);
            //Game.uiManager.openUIPanel(UIPanelType.PopPanel,UIPanels.TestPopPanel);
            //12、SceneManager测试
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).sceneManager.loadScene((_crd && Scenes === void 0 ? (_reportPossibleCrUseOfScenes({
              error: Error()
            }), Scenes) : Scenes).Game);
          }
        }, {
          key: "msgTest",
          value: function msgTest(data) {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("getMsg", data.msg);
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).msgCenter.unregisterEventListener((_crd && EventID === void 0 ? (_reportPossibleCrUseOfEventID({
              error: Error()
            }), EventID) : EventID).TestEvent, this.msgTest, this);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance.unRegisterKeyDownEvent(macro.KEY.a, this.keyDownTest, this);
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance.unRegisterKeyDownEvent(macro.KEY.s, this.keyDownTest3, this);
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance.unRegisterKeyDownEvent(macro.KEY.d, this.keyDownTest2, this);
          }
        }]);

        return Test;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvVGVzdC50cyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJtYWNybyIsIl9kZWNvcmF0b3IiLCJEZWJ1Z1V0aWwiLCJTY2VuZXMiLCJVSVBhbmVscyIsIlVJUGFuZWxUeXBlIiwiRXZlbnRJRCIsIkdhbWUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUZXN0IiwidGVzdE9iaiIsIkluc3RhbmNlIiwicmVnaXN0ZXJLZXlEb3duRXZlbnQiLCJLRVkiLCJhIiwia2V5RG93blRlc3QiLCJzIiwia2V5RG93blRlc3QzIiwiZCIsImtleURvd25UZXN0MiIsInJlc3VsdCIsImxvZ0luZm8iLCJkYXRhIiwidWlNYW5hZ2VyIiwib3BlblVJUGFuZWwiLCJGdWxsUGFuZWwiLCJfVGVtcGxhdGVQYW5lbCIsIlRvcFBhbmVsIiwiX1RlbXBsYXRlUG9wUGFuZWwiLCJzY2VuZU1hbmFnZXIiLCJsb2FkU2NlbmUiLCJtc2ciLCJtc2dDZW50ZXIiLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lciIsIlRlc3RFdmVudCIsIm1zZ1Rlc3QiLCJ1blJlZ2lzdGVyS2V5RG93bkV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLFUsT0FBQUEsVTs7OztBQUNsQkMsTUFBQUEsUyw4QkFBQUEsUzs7QUFDQUMsTUFBQUEsTSxnQ0FBQUEsTTs7QUFDQUMsTUFBQUEsUSwwQkFBQUEsUTs7QUFDQUMsTUFBQUEsVywyQkFBQUEsVzs7QUFDQUMsTUFBQUEsTyxpQ0FBQUEsTzs7QUFDQUMsTUFBQUEsSSxXQUFBQSxJOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7c0JBR0pDLEksV0FEWkYsT0FBTyxDQUFDLE1BQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQUdJRyxPLEdBQVUsRTs7Ozs7O3FDQUNQO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBLDhCQUFLQyxRQUFMLENBQWNDLG9CQUFkLENBQW1DYixLQUFLLENBQUNjLEdBQU4sQ0FBVUMsQ0FBN0MsRUFBZ0QsS0FBS0MsV0FBckQsRUFBa0UsSUFBbEU7QUFDQTtBQUFBO0FBQUEsOEJBQUtKLFFBQUwsQ0FBY0Msb0JBQWQsQ0FBbUNiLEtBQUssQ0FBQ2MsR0FBTixDQUFVRyxDQUE3QyxFQUFnRCxLQUFLQyxZQUFyRCxFQUFtRSxJQUFuRTtBQUNBO0FBQUE7QUFBQSw4QkFBS04sUUFBTCxDQUFjQyxvQkFBZCxDQUFtQ2IsS0FBSyxDQUFDYyxHQUFOLENBQVVLLENBQTdDLEVBQWdELEtBQUtDLFlBQXJELEVBQW1FLElBQW5FLEVBeERPLENBMERQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNIOzs7dUNBRW1CQyxNLEVBQW1CO0FBQ25DO0FBQUE7QUFBQSx3Q0FBVUMsT0FBVixDQUFrQixnQkFBbEIsRUFBb0NELE1BQXBDO0FBQ0g7Ozs2Q0FFeUJFLEksRUFBaUI7QUFDdkM7QUFBQTtBQUFBLHdDQUFVRCxPQUFWLENBQWtCLG9CQUFsQixFQUF3Q0MsSUFBeEMsRUFBOEMsSUFBOUM7QUFDSDs7O3dDQUUwQjtBQUN2QjtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBLDhCQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkI7QUFBQTtBQUFBLDRDQUFZQyxTQUF2QyxFQUFrRDtBQUFBO0FBQUEsc0NBQVNDLGNBQTNEO0FBRUg7Ozt5Q0FFMkI7QUFDeEI7QUFDQTtBQUFBO0FBQUEsOEJBQUtILFNBQUwsQ0FBZUMsV0FBZixDQUEyQjtBQUFBO0FBQUEsNENBQVlHLFFBQXZDLEVBQWlEO0FBQUE7QUFBQSxzQ0FBU0MsaUJBQTFEO0FBRUg7Ozt5Q0FFMkI7QUFDeEI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBLDhCQUFLQyxZQUFMLENBQWtCQyxTQUFsQixDQUE0QjtBQUFBO0FBQUEsa0NBQU94QixJQUFuQztBQUNIOzs7a0NBRWNnQixJLEVBQWlCO0FBQzVCO0FBQUE7QUFBQSx3Q0FBVUQsT0FBVixDQUFrQixRQUFsQixFQUE0QkMsSUFBSSxDQUFDUyxHQUFqQztBQUNBO0FBQUE7QUFBQSw4QkFBS0MsU0FBTCxDQUFlQyx1QkFBZixDQUF1QztBQUFBO0FBQUEsb0NBQVFDLFNBQS9DLEVBQTBELEtBQUtDLE9BQS9ELEVBQXdFLElBQXhFO0FBQ0g7OztzQ0FFVztBQUNSO0FBQUE7QUFBQSw4QkFBS3hCLFFBQUwsQ0FBY3lCLHNCQUFkLENBQXFDckMsS0FBSyxDQUFDYyxHQUFOLENBQVVDLENBQS9DLEVBQWtELEtBQUtDLFdBQXZELEVBQW9FLElBQXBFO0FBQ0E7QUFBQTtBQUFBLDhCQUFLSixRQUFMLENBQWN5QixzQkFBZCxDQUFxQ3JDLEtBQUssQ0FBQ2MsR0FBTixDQUFVRyxDQUEvQyxFQUFrRCxLQUFLQyxZQUF2RCxFQUFxRSxJQUFyRTtBQUNBO0FBQUE7QUFBQSw4QkFBS04sUUFBTCxDQUFjeUIsc0JBQWQsQ0FBcUNyQyxLQUFLLENBQUNjLEdBQU4sQ0FBVUssQ0FBL0MsRUFBa0QsS0FBS0MsWUFBdkQsRUFBcUUsSUFBckU7QUFDSDs7OztRQXRIcUJyQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBtYWNybywgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi9mcmFtZXdvcmsvdG9vbHMvRGVidWdVdGlsXCI7XHJcbmltcG9ydCB7IFNjZW5lcyB9IGZyb20gXCIuL2ZyYW1ld29yay9zY2VuZS9TY2VuZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVSVBhbmVscyB9IGZyb20gXCIuL2ZyYW1ld29yay91aS9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVSVBhbmVsVHlwZSB9IGZyb20gXCIuL2ZyYW1ld29yay91aS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRJRCB9IGZyb20gXCIuL2ZyYW1ld29yay9fbWVzc2FnZS9Nc2dDb25maWdcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiVGVzdFwiKVxyXG5leHBvcnQgY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXN0T2JqID0ge307XHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICAvLzHjgIHljZXmnaHlrZjmoaPmtYvor5VcclxuICAgICAgICAvLyBHYW1lLnNhdmVNYW5hZ2VyLnNhdmVJdGVtUmVjb3JkKFwiZ2FcIixcImdhb2FuZzExMVwiKTtcclxuICAgICAgICAvLyBsZXQgc2F2ZTpzdHJpbmcgPSBHYW1lLnNhdmVNYW5hZ2VyLmxvYWRJdGVtUmVjb3JkKFwiZ2FcIixcIlwiKTtcclxuICAgICAgICAvLyBpZihzYXZlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAvLyAgICAgc2F2ZSA9IFwiZW1wdHlcIjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy50ZXN0TGFiZWwxLnN0cmluZyA9IHNhdmU7XHJcbiAgICAgICAgLy8gc2F2ZSA9IEdhbWUuc2F2ZU1hbmFnZXIubG9hZEl0ZW1SZWNvcmQoXCJnYTFcIixcIlwiKTtcclxuICAgICAgICAvLyBpZihzYXZlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAvLyAgICAgc2F2ZSA9IFwiZW1wdHlcIjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy50ZXN0TGFiZWwyLnN0cmluZyA9IHNhdmU7XHJcblxyXG4gICAgICAgIC8vMuOAgea4uOaIj+WtmOaho+a1i+ivlVxyXG4gICAgICAgIC8vIEdhbWUuc2F2ZU1hbmFnZXIubG9hZEdhbWVSZWNvcmQoU2F2ZUNvbmZpZy5TYXZlSXRlbXMsdGhpcy5sb2FkQ2FsbGJhY2ssdGhpcyk7XHJcblxyXG4gICAgICAgIC8vM+OAgeWIhui+qOeOh+a1i+ivlVxyXG4gICAgICAgIC8vRGVidWdVdGlsLmxvZ0luZm8oVG9vbHMuUGxhdGZvcm1Ub29scy5nZXRTY3JlZW5TaXplKCkpO1xyXG4gICAgICAgIC8vdGhpcy50ZXN0TGFiZWwxLnN0cmluZyA9IFRvb2xzLlBsYXRmb3JtVG9vbHMuZ2V0U2NyZWVuU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIC8vdGhpcy50ZXN0TGFiZWwyLnN0cmluZyA9IFRvb2xzLlBsYXRmb3JtVG9vbHMuZ2V0U2NyZWVuU2l6ZSgpLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8044CB6ZyH5Yqo5Yqf6IO95rWL6K+VXHJcbiAgICAgICAgLy9Ub29scy5QbGF0Zm9ybVRvb2xzLnZpYnJhdGVTaG9ydCgpO1xyXG5cclxuICAgICAgICAvLzXjgIHliqDpgJ/luqborqHmtYvor5VcclxuICAgICAgICAvL1Rvb2xzLlBsYXRmb3JtVG9vbHMubGlzdGVuQWNjZWxlcm9tZXRlclZhbHVlKHRoaXMuYWNjZWxlcmF0ZUNhbGxiYWNrLHRoaXMpO1xyXG5cclxuICAgICAgICAvLzbjgIHmlbDlrablt6XlhbfnsbvmtYvor5VcclxuICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTwxMDtpKyspe1xyXG4gICAgICAgIC8vICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhUb29scy5NYXRoVG9vbHMucmFuZG9tSW50KDAsNSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTwyMDtpKyspe1xyXG4gICAgICAgIC8vICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhUb29scy5NYXRoVG9vbHMucmFuZEZsb2F0KDAsMikpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL3ZhciBudW1iZXJzID0gWzEsMiwzLDQsNSxudWxsLHVuZGVmaW5lZF07XHJcbiAgICAgICAgLy9EZWJ1Z1V0aWwubG9nSW5mbyhUb29scy5NYXRoVG9vbHMuYXZlcmFnZShudW1iZXJzKSk7XHJcblxyXG4gICAgICAgIC8vN+OAgeaXtumXtOW3peWFt+a1i+ivlVxyXG4gICAgICAgIC8vIERlYnVnVXRpbC5sb2dJbmZvKFRvb2xzLlRpbWVUb29scy5nZXRDdXJUaW1lU3RhbXBTZWMoKSk7XHJcbiAgICAgICAgLy8gRGVidWdVdGlsLmxvZ0luZm8oVG9vbHMuVGltZVRvb2xzLmdldEN1clRpbWVTdGFtcE1pbGxTZWMoKSk7XHJcblxyXG4gICAgICAgIC8vOOOAgUF1ZGlvTWFuYWdlcua1i+ivlVxyXG4gICAgICAgIC8vIERlYnVnVXRpbC5sb2dJbmZvKEF1ZGlvQ29uZmlnLmdldEF1ZGlvTmFtZUJ5SWQoQXVkaW9zLmJ0bkNsaWNrKSk7XHJcbiAgICAgICAgLy8gRGVidWdVdGlsLmxvZ0luZm8oQXVkaW9Db25maWcuZ2V0QXVkaW9SZXNQYXRoKEF1ZGlvcy5iZ20sQXVkaW9UeXBlLk11c2ljKSk7XHJcbiAgICAgICAgLy9HYW1lLmF1ZGlvTWFuYWdlci5wbGF5QmdNdXNpYyhBdWRpb3MuYmdtKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgR2FtZS5hdWRpb01hbmFnZXIucGF1c2VCZ011c2ljKCk7XHJcbiAgICAgICAgLy8gfSwgMSk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgIEdhbWUuYXVkaW9NYW5hZ2VyLnBsYXlCZ011c2ljKCk7XHJcbiAgICAgICAgLy8gfSwgMyk7XHJcblxyXG4gICAgICAgIC8vOeOAgemUruebmOaMiemUruS6i+S7tua1i+ivlVxyXG4gICAgICAgIEdhbWUuSW5zdGFuY2UucmVnaXN0ZXJLZXlEb3duRXZlbnQobWFjcm8uS0VZLmEsIHRoaXMua2V5RG93blRlc3QsIHRoaXMpO1xyXG4gICAgICAgIEdhbWUuSW5zdGFuY2UucmVnaXN0ZXJLZXlEb3duRXZlbnQobWFjcm8uS0VZLnMsIHRoaXMua2V5RG93blRlc3QzLCB0aGlzKTtcclxuICAgICAgICBHYW1lLkluc3RhbmNlLnJlZ2lzdGVyS2V5RG93bkV2ZW50KG1hY3JvLktFWS5kLCB0aGlzLmtleURvd25UZXN0MiwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vMTDjgIHmtojmga/kuK3lv4PmtYvor5VcclxuICAgICAgICAvL0dhbWUubXNnQ2VudGVyLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcihFdmVudElELlRlc3RFdmVudCx0aGlzLm1zZ1Rlc3QsdGhpcyk7XHJcblxyXG4gICAgICAgIC8vMTHjgIFVSU1hbmFnZXLmtYvor5VcclxuICAgICAgICAvL0dhbWUudWlNYW5hZ2VyLm9wZW5VSVBhbmVsKFVJUGFuZWxzLlRlc3RQYW5lbCk7XHJcbiAgICAgICAgLy9HYW1lLnVpTWFuYWdlci5jbG9zZVVJUGFuZWwoVUlQYW5lbHMuVGVzdFBhbmVsKTtcclxuXHJcbiAgICAgICAgLy8xMuOAgVNjZW5lTWFuYWdlcua1i+ivlVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQ2FsbGJhY2socmVzdWx0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcImxvYWRHYW1lUmVjb3JkXCIsIHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VsZXJhdGVDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcImFjY2VsZXJhdGVDYWxsYmFja1wiLCBkYXRhLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2V5RG93blRlc3QoKTogdm9pZCB7XHJcbiAgICAgICAgLy8444CBQXVkaW9NYW5hZ2Vy5rWL6K+VXHJcbiAgICAgICAgLy9HYW1lLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoQXVkaW9zLmJ0bik7XHJcblxyXG4gICAgICAgIC8vMTDjgIHmtojmga/kuK3lv4PmtYvor5VcclxuICAgICAgICAvL0dhbWUubXNnQ2VudGVyLmRpc3BhdGNoRXZlbnQoRXZlbnRJRC5UZXN0RXZlbnQse21zZzpcInNic2JcIn0pO1xyXG5cclxuICAgICAgICAvLzEx44CBVUlNYW5hZ2Vy5rWL6K+VXHJcbiAgICAgICAgR2FtZS51aU1hbmFnZXIub3BlblVJUGFuZWwoVUlQYW5lbFR5cGUuRnVsbFBhbmVsLCBVSVBhbmVscy5fVGVtcGxhdGVQYW5lbCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlEb3duVGVzdDMoKTogdm9pZCB7XHJcbiAgICAgICAgLy8xMeOAgVVJTWFuYWdlcua1i+ivlVxyXG4gICAgICAgIEdhbWUudWlNYW5hZ2VyLm9wZW5VSVBhbmVsKFVJUGFuZWxUeXBlLlRvcFBhbmVsLCBVSVBhbmVscy5fVGVtcGxhdGVQb3BQYW5lbCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlEb3duVGVzdDIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8444CBQXVkaW9NYW5hZ2Vy5rWL6K+VXHJcbiAgICAgICAgLy9HYW1lLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoQXVkaW9zLnN1Y2Nlc3MpO1xyXG5cclxuICAgICAgICAvLzEx44CBVUlNYW5hZ2Vy5rWL6K+VXHJcbiAgICAgICAgLy9HYW1lLnVpTWFuYWdlci5jbG9zZVVJUGFuZWwoVUlQYW5lbHMuVGVzdFBhbmVsKTtcclxuICAgICAgICAvL0dhbWUudWlNYW5hZ2VyLm9wZW5VSVBhbmVsKFVJUGFuZWxUeXBlLlBvcFBhbmVsLFVJUGFuZWxzLlRlc3RQb3BQYW5lbCk7XHJcblxyXG4gICAgICAgIC8vMTLjgIFTY2VuZU1hbmFnZXLmtYvor5VcclxuICAgICAgICBHYW1lLnNjZW5lTWFuYWdlci5sb2FkU2NlbmUoU2NlbmVzLkdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtc2dUZXN0KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiZ2V0TXNnXCIsIGRhdGEubXNnKTtcclxuICAgICAgICBHYW1lLm1zZ0NlbnRlci51bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcihFdmVudElELlRlc3RFdmVudCwgdGhpcy5tc2dUZXN0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgR2FtZS5JbnN0YW5jZS51blJlZ2lzdGVyS2V5RG93bkV2ZW50KG1hY3JvLktFWS5hLCB0aGlzLmtleURvd25UZXN0LCB0aGlzKTtcclxuICAgICAgICBHYW1lLkluc3RhbmNlLnVuUmVnaXN0ZXJLZXlEb3duRXZlbnQobWFjcm8uS0VZLnMsIHRoaXMua2V5RG93blRlc3QzLCB0aGlzKTtcclxuICAgICAgICBHYW1lLkluc3RhbmNlLnVuUmVnaXN0ZXJLZXlEb3duRXZlbnQobWFjcm8uS0VZLmQsIHRoaXMua2V5RG93blRlc3QyLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=