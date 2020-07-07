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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9UZXN0LnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIm1hY3JvIiwiX2RlY29yYXRvciIsIkRlYnVnVXRpbCIsIlNjZW5lcyIsIlVJUGFuZWxzIiwiVUlQYW5lbFR5cGUiLCJFdmVudElEIiwiR2FtZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRlc3QiLCJ0ZXN0T2JqIiwiSW5zdGFuY2UiLCJyZWdpc3RlcktleURvd25FdmVudCIsIktFWSIsImEiLCJrZXlEb3duVGVzdCIsInMiLCJrZXlEb3duVGVzdDMiLCJkIiwia2V5RG93blRlc3QyIiwicmVzdWx0IiwibG9nSW5mbyIsImRhdGEiLCJ1aU1hbmFnZXIiLCJvcGVuVUlQYW5lbCIsIkZ1bGxQYW5lbCIsIl9UZW1wbGF0ZVBhbmVsIiwiVG9wUGFuZWwiLCJfVGVtcGxhdGVQb3BQYW5lbCIsInNjZW5lTWFuYWdlciIsImxvYWRTY2VuZSIsIm1zZyIsIm1zZ0NlbnRlciIsInVucmVnaXN0ZXJFdmVudExpc3RlbmVyIiwiVGVzdEV2ZW50IiwibXNnVGVzdCIsInVuUmVnaXN0ZXJLZXlEb3duRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ2xCQyxNQUFBQSxTLDhCQUFBQSxTOztBQUNBQyxNQUFBQSxNLGdDQUFBQSxNOztBQUNBQyxNQUFBQSxRLDBCQUFBQSxROztBQUNBQyxNQUFBQSxXLDJCQUFBQSxXOztBQUNBQyxNQUFBQSxPLGlDQUFBQSxPOztBQUNBQyxNQUFBQSxJLFdBQUFBLEk7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROztzQkFHSkMsSSxXQURaRixPQUFPLENBQUMsTUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBR0lHLE8sR0FBVSxFOzs7Ozs7cUNBQ1A7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUEsOEJBQUtDLFFBQUwsQ0FBY0Msb0JBQWQsQ0FBbUNiLEtBQUssQ0FBQ2MsR0FBTixDQUFVQyxDQUE3QyxFQUFnRCxLQUFLQyxXQUFyRCxFQUFrRSxJQUFsRTtBQUNBO0FBQUE7QUFBQSw4QkFBS0osUUFBTCxDQUFjQyxvQkFBZCxDQUFtQ2IsS0FBSyxDQUFDYyxHQUFOLENBQVVHLENBQTdDLEVBQWdELEtBQUtDLFlBQXJELEVBQW1FLElBQW5FO0FBQ0E7QUFBQTtBQUFBLDhCQUFLTixRQUFMLENBQWNDLG9CQUFkLENBQW1DYixLQUFLLENBQUNjLEdBQU4sQ0FBVUssQ0FBN0MsRUFBZ0QsS0FBS0MsWUFBckQsRUFBbUUsSUFBbkUsRUF4RE8sQ0EwRFA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0g7Ozt1Q0FFbUJDLE0sRUFBbUI7QUFDbkM7QUFBQTtBQUFBLHdDQUFVQyxPQUFWLENBQWtCLGdCQUFsQixFQUFvQ0QsTUFBcEM7QUFDSDs7OzZDQUV5QkUsSSxFQUFpQjtBQUN2QztBQUFBO0FBQUEsd0NBQVVELE9BQVYsQ0FBa0Isb0JBQWxCLEVBQXdDQyxJQUF4QyxFQUE4QyxJQUE5QztBQUNIOzs7d0NBRTBCO0FBQ3ZCO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUEsOEJBQUtDLFNBQUwsQ0FBZUMsV0FBZixDQUEyQjtBQUFBO0FBQUEsNENBQVlDLFNBQXZDLEVBQWtEO0FBQUE7QUFBQSxzQ0FBU0MsY0FBM0Q7QUFFSDs7O3lDQUUyQjtBQUN4QjtBQUNBO0FBQUE7QUFBQSw4QkFBS0gsU0FBTCxDQUFlQyxXQUFmLENBQTJCO0FBQUE7QUFBQSw0Q0FBWUcsUUFBdkMsRUFBaUQ7QUFBQTtBQUFBLHNDQUFTQyxpQkFBMUQ7QUFFSDs7O3lDQUUyQjtBQUN4QjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUEsOEJBQUtDLFlBQUwsQ0FBa0JDLFNBQWxCLENBQTRCO0FBQUE7QUFBQSxrQ0FBT3hCLElBQW5DO0FBQ0g7OztrQ0FFY2dCLEksRUFBaUI7QUFDNUI7QUFBQTtBQUFBLHdDQUFVRCxPQUFWLENBQWtCLFFBQWxCLEVBQTRCQyxJQUFJLENBQUNTLEdBQWpDO0FBQ0E7QUFBQTtBQUFBLDhCQUFLQyxTQUFMLENBQWVDLHVCQUFmLENBQXVDO0FBQUE7QUFBQSxvQ0FBUUMsU0FBL0MsRUFBMEQsS0FBS0MsT0FBL0QsRUFBd0UsSUFBeEU7QUFDSDs7O3NDQUVXO0FBQ1I7QUFBQTtBQUFBLDhCQUFLeEIsUUFBTCxDQUFjeUIsc0JBQWQsQ0FBcUNyQyxLQUFLLENBQUNjLEdBQU4sQ0FBVUMsQ0FBL0MsRUFBa0QsS0FBS0MsV0FBdkQsRUFBb0UsSUFBcEU7QUFDQTtBQUFBO0FBQUEsOEJBQUtKLFFBQUwsQ0FBY3lCLHNCQUFkLENBQXFDckMsS0FBSyxDQUFDYyxHQUFOLENBQVVHLENBQS9DLEVBQWtELEtBQUtDLFlBQXZELEVBQXFFLElBQXJFO0FBQ0E7QUFBQTtBQUFBLDhCQUFLTixRQUFMLENBQWN5QixzQkFBZCxDQUFxQ3JDLEtBQUssQ0FBQ2MsR0FBTixDQUFVSyxDQUEvQyxFQUFrRCxLQUFLQyxZQUF2RCxFQUFxRSxJQUFyRTtBQUNIOzs7O1FBdEhxQnJCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIG1hY3JvLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IERlYnVnVXRpbCB9IGZyb20gXCIuL2ZyYW1ld29yay90b29scy9EZWJ1Z1V0aWxcIjtcclxuaW1wb3J0IHsgU2NlbmVzIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3NjZW5lL1NjZW5lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFVJUGFuZWxzIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3VpL1VJQ29uZmlnXCI7XHJcbmltcG9ydCB7IFVJUGFuZWxUeXBlIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3VpL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudElEIH0gZnJvbSBcIi4vZnJhbWV3b3JrL19tZXNzYWdlL01zZ0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJUZXN0XCIpXHJcbmV4cG9ydCBjbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHRlc3RPYmogPSB7fTtcclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIC8vMeOAgeWNleadoeWtmOaho+a1i+ivlVxyXG4gICAgICAgIC8vIEdhbWUuc2F2ZU1hbmFnZXIuc2F2ZUl0ZW1SZWNvcmQoXCJnYVwiLFwiZ2FvYW5nMTExXCIpO1xyXG4gICAgICAgIC8vIGxldCBzYXZlOnN0cmluZyA9IEdhbWUuc2F2ZU1hbmFnZXIubG9hZEl0ZW1SZWNvcmQoXCJnYVwiLFwiXCIpO1xyXG4gICAgICAgIC8vIGlmKHNhdmUubGVuZ3RoID09IDApe1xyXG4gICAgICAgIC8vICAgICBzYXZlID0gXCJlbXB0eVwiO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnRlc3RMYWJlbDEuc3RyaW5nID0gc2F2ZTtcclxuICAgICAgICAvLyBzYXZlID0gR2FtZS5zYXZlTWFuYWdlci5sb2FkSXRlbVJlY29yZChcImdhMVwiLFwiXCIpO1xyXG4gICAgICAgIC8vIGlmKHNhdmUubGVuZ3RoID09IDApe1xyXG4gICAgICAgIC8vICAgICBzYXZlID0gXCJlbXB0eVwiO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnRlc3RMYWJlbDIuc3RyaW5nID0gc2F2ZTtcclxuXHJcbiAgICAgICAgLy8y44CB5ri45oiP5a2Y5qGj5rWL6K+VXHJcbiAgICAgICAgLy8gR2FtZS5zYXZlTWFuYWdlci5sb2FkR2FtZVJlY29yZChTYXZlQ29uZmlnLlNhdmVJdGVtcyx0aGlzLmxvYWRDYWxsYmFjayx0aGlzKTtcclxuXHJcbiAgICAgICAgLy8z44CB5YiG6L6o546H5rWL6K+VXHJcbiAgICAgICAgLy9EZWJ1Z1V0aWwubG9nSW5mbyhUb29scy5QbGF0Zm9ybVRvb2xzLmdldFNjcmVlblNpemUoKSk7XHJcbiAgICAgICAgLy90aGlzLnRlc3RMYWJlbDEuc3RyaW5nID0gVG9vbHMuUGxhdGZvcm1Ub29scy5nZXRTY3JlZW5TaXplKCkud2lkdGg7XHJcbiAgICAgICAgLy90aGlzLnRlc3RMYWJlbDIuc3RyaW5nID0gVG9vbHMuUGxhdGZvcm1Ub29scy5nZXRTY3JlZW5TaXplKCkuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLzTjgIHpnIfliqjlip/og73mtYvor5VcclxuICAgICAgICAvL1Rvb2xzLlBsYXRmb3JtVG9vbHMudmlicmF0ZVNob3J0KCk7XHJcblxyXG4gICAgICAgIC8vNeOAgeWKoOmAn+W6puiuoea1i+ivlVxyXG4gICAgICAgIC8vVG9vbHMuUGxhdGZvcm1Ub29scy5saXN0ZW5BY2NlbGVyb21ldGVyVmFsdWUodGhpcy5hY2NlbGVyYXRlQ2FsbGJhY2ssdGhpcyk7XHJcblxyXG4gICAgICAgIC8vNuOAgeaVsOWtpuW3peWFt+exu+a1i+ivlVxyXG4gICAgICAgIC8vIGZvcihsZXQgaT0wOyBpPDEwO2krKyl7XHJcbiAgICAgICAgLy8gICAgIERlYnVnVXRpbC5sb2dJbmZvKFRvb2xzLk1hdGhUb29scy5yYW5kb21JbnQoMCw1KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZvcihsZXQgaT0wOyBpPDIwO2krKyl7XHJcbiAgICAgICAgLy8gICAgIERlYnVnVXRpbC5sb2dJbmZvKFRvb2xzLk1hdGhUb29scy5yYW5kRmxvYXQoMCwyKSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vdmFyIG51bWJlcnMgPSBbMSwyLDMsNCw1LG51bGwsdW5kZWZpbmVkXTtcclxuICAgICAgICAvL0RlYnVnVXRpbC5sb2dJbmZvKFRvb2xzLk1hdGhUb29scy5hdmVyYWdlKG51bWJlcnMpKTtcclxuXHJcbiAgICAgICAgLy8344CB5pe26Ze05bel5YW35rWL6K+VXHJcbiAgICAgICAgLy8gRGVidWdVdGlsLmxvZ0luZm8oVG9vbHMuVGltZVRvb2xzLmdldEN1clRpbWVTdGFtcFNlYygpKTtcclxuICAgICAgICAvLyBEZWJ1Z1V0aWwubG9nSW5mbyhUb29scy5UaW1lVG9vbHMuZ2V0Q3VyVGltZVN0YW1wTWlsbFNlYygpKTtcclxuXHJcbiAgICAgICAgLy8444CBQXVkaW9NYW5hZ2Vy5rWL6K+VXHJcbiAgICAgICAgLy8gRGVidWdVdGlsLmxvZ0luZm8oQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChBdWRpb3MuYnRuQ2xpY2spKTtcclxuICAgICAgICAvLyBEZWJ1Z1V0aWwubG9nSW5mbyhBdWRpb0NvbmZpZy5nZXRBdWRpb1Jlc1BhdGgoQXVkaW9zLmJnbSxBdWRpb1R5cGUuTXVzaWMpKTtcclxuICAgICAgICAvL0dhbWUuYXVkaW9NYW5hZ2VyLnBsYXlCZ011c2ljKEF1ZGlvcy5iZ20pO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICBHYW1lLmF1ZGlvTWFuYWdlci5wYXVzZUJnTXVzaWMoKTtcclxuICAgICAgICAvLyB9LCAxKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgR2FtZS5hdWRpb01hbmFnZXIucGxheUJnTXVzaWMoKTtcclxuICAgICAgICAvLyB9LCAzKTtcclxuXHJcbiAgICAgICAgLy8544CB6ZSu55uY5oyJ6ZSu5LqL5Lu25rWL6K+VXHJcbiAgICAgICAgR2FtZS5JbnN0YW5jZS5yZWdpc3RlcktleURvd25FdmVudChtYWNyby5LRVkuYSwgdGhpcy5rZXlEb3duVGVzdCwgdGhpcyk7XHJcbiAgICAgICAgR2FtZS5JbnN0YW5jZS5yZWdpc3RlcktleURvd25FdmVudChtYWNyby5LRVkucywgdGhpcy5rZXlEb3duVGVzdDMsIHRoaXMpO1xyXG4gICAgICAgIEdhbWUuSW5zdGFuY2UucmVnaXN0ZXJLZXlEb3duRXZlbnQobWFjcm8uS0VZLmQsIHRoaXMua2V5RG93blRlc3QyLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8xMOOAgea2iOaBr+S4reW/g+a1i+ivlVxyXG4gICAgICAgIC8vR2FtZS5tc2dDZW50ZXIucmVnaXN0ZXJFdmVudExpc3RlbmVyKEV2ZW50SUQuVGVzdEV2ZW50LHRoaXMubXNnVGVzdCx0aGlzKTtcclxuXHJcbiAgICAgICAgLy8xMeOAgVVJTWFuYWdlcua1i+ivlVxyXG4gICAgICAgIC8vR2FtZS51aU1hbmFnZXIub3BlblVJUGFuZWwoVUlQYW5lbHMuVGVzdFBhbmVsKTtcclxuICAgICAgICAvL0dhbWUudWlNYW5hZ2VyLmNsb3NlVUlQYW5lbChVSVBhbmVscy5UZXN0UGFuZWwpO1xyXG5cclxuICAgICAgICAvLzEy44CBU2NlbmVNYW5hZ2Vy5rWL6K+VXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRDYWxsYmFjayhyZXN1bHQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwibG9hZEdhbWVSZWNvcmRcIiwgcmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZWxlcmF0ZUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiYWNjZWxlcmF0ZUNhbGxiYWNrXCIsIGRhdGEsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlEb3duVGVzdCgpOiB2b2lkIHtcclxuICAgICAgICAvLzjjgIFBdWRpb01hbmFnZXLmtYvor5VcclxuICAgICAgICAvL0dhbWUuYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChBdWRpb3MuYnRuKTtcclxuXHJcbiAgICAgICAgLy8xMOOAgea2iOaBr+S4reW/g+a1i+ivlVxyXG4gICAgICAgIC8vR2FtZS5tc2dDZW50ZXIuZGlzcGF0Y2hFdmVudChFdmVudElELlRlc3RFdmVudCx7bXNnOlwic2JzYlwifSk7XHJcblxyXG4gICAgICAgIC8vMTHjgIFVSU1hbmFnZXLmtYvor5VcclxuICAgICAgICBHYW1lLnVpTWFuYWdlci5vcGVuVUlQYW5lbChVSVBhbmVsVHlwZS5GdWxsUGFuZWwsIFVJUGFuZWxzLl9UZW1wbGF0ZVBhbmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGtleURvd25UZXN0MygpOiB2b2lkIHtcclxuICAgICAgICAvLzEx44CBVUlNYW5hZ2Vy5rWL6K+VXHJcbiAgICAgICAgR2FtZS51aU1hbmFnZXIub3BlblVJUGFuZWwoVUlQYW5lbFR5cGUuVG9wUGFuZWwsIFVJUGFuZWxzLl9UZW1wbGF0ZVBvcFBhbmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGtleURvd25UZXN0MigpOiB2b2lkIHtcclxuICAgICAgICAvLzjjgIFBdWRpb01hbmFnZXLmtYvor5VcclxuICAgICAgICAvL0dhbWUuYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChBdWRpb3Muc3VjY2Vzcyk7XHJcblxyXG4gICAgICAgIC8vMTHjgIFVSU1hbmFnZXLmtYvor5VcclxuICAgICAgICAvL0dhbWUudWlNYW5hZ2VyLmNsb3NlVUlQYW5lbChVSVBhbmVscy5UZXN0UGFuZWwpO1xyXG4gICAgICAgIC8vR2FtZS51aU1hbmFnZXIub3BlblVJUGFuZWwoVUlQYW5lbFR5cGUuUG9wUGFuZWwsVUlQYW5lbHMuVGVzdFBvcFBhbmVsKTtcclxuXHJcbiAgICAgICAgLy8xMuOAgVNjZW5lTWFuYWdlcua1i+ivlVxyXG4gICAgICAgIEdhbWUuc2NlbmVNYW5hZ2VyLmxvYWRTY2VuZShTY2VuZXMuR2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1zZ1Rlc3QoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJnZXRNc2dcIiwgZGF0YS5tc2cpO1xyXG4gICAgICAgIEdhbWUubXNnQ2VudGVyLnVucmVnaXN0ZXJFdmVudExpc3RlbmVyKEV2ZW50SUQuVGVzdEV2ZW50LCB0aGlzLm1zZ1Rlc3QsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBHYW1lLkluc3RhbmNlLnVuUmVnaXN0ZXJLZXlEb3duRXZlbnQobWFjcm8uS0VZLmEsIHRoaXMua2V5RG93blRlc3QsIHRoaXMpO1xyXG4gICAgICAgIEdhbWUuSW5zdGFuY2UudW5SZWdpc3RlcktleURvd25FdmVudChtYWNyby5LRVkucywgdGhpcy5rZXlEb3duVGVzdDMsIHRoaXMpO1xyXG4gICAgICAgIEdhbWUuSW5zdGFuY2UudW5SZWdpc3RlcktleURvd25FdmVudChtYWNyby5LRVkuZCwgdGhpcy5rZXlEb3duVGVzdDIsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==