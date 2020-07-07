System.register(["cc", "code-quality:cr", "./framework/audio/AudioManager.js", "./framework/save/SaveManager.js", "./framework/scene/SceneManager.js", "./framework/tools/DebugUtil.js", "./framework/ui/UIManager.js", "./framework/_message/MsgCenter.js", "./GameConfig.js", "./GameManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Component, find, game, systemEvent, SystemEvent, _decorator, AudioManager, SaveManager, SceneManager, DebugUtil, UIManager, MsgCenter, GameConfig, GameManager, _dec, _class, _class2, _temp, _crd, ccclass, Game;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./framework/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveManager(extras) {
    _reporterNs.report("SaveManager", "./framework/save/SaveManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneManager(extras) {
    _reporterNs.report("SceneManager", "./framework/scene/SceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "./framework/tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./framework/ui/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgCenter(extras) {
    _reporterNs.report("MsgCenter", "./framework/_message/MsgCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "./GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      find = _cc.find;
      game = _cc.game;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_frameworkAudioAudioManagerJs) {
      AudioManager = _frameworkAudioAudioManagerJs.AudioManager;
    }, function (_frameworkSaveSaveManagerJs) {
      SaveManager = _frameworkSaveSaveManagerJs.SaveManager;
    }, function (_frameworkSceneSceneManagerJs) {
      SceneManager = _frameworkSceneSceneManagerJs.SceneManager;
    }, function (_frameworkToolsDebugUtilJs) {
      DebugUtil = _frameworkToolsDebugUtilJs.DebugUtil;
    }, function (_frameworkUiUIManagerJs) {
      UIManager = _frameworkUiUIManagerJs.UIManager;
    }, function (_framework_messageMsgCenterJs) {
      MsgCenter = _framework_messageMsgCenterJs.MsgCenter;
    }, function (_GameConfigJs) {
      GameConfig = _GameConfigJs.GameConfig;
    }, function (_GameManagerJs) {
      GameManager = _GameManagerJs.GameManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5a2b1bRI2dN5ovRZwAhnOz0", "Game", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;

      _export("Game", Game = (_dec = ccclass("Game"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inherits(Game, _Component);

        function Game() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Game);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Game)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.keyDownEventsDic = {};
          _this.keyUpEventsDic = {};
          return _this;
        }

        _createClass(Game, [{
          key: "onLoad",
          value: function onLoad() {
            //1、单例模式赋值
            Game._instance = this; //2、设置常驻节点

            game.addPersistRootNode(this.node); //3、初始化系统组件
            //MsgCenter

            Game.msgCenter = (_crd && MsgCenter === void 0 ? (_reportPossibleCrUseOfMsgCenter({
              error: Error()
            }), MsgCenter) : MsgCenter).Instance; //SaveManager

            Game.saveManager = (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
              error: Error()
            }), SaveManager) : SaveManager).Instance; //AudioManager

            Game.audioManager = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).Instance;
            Game.audioManager.init(this.node); //UIManager

            if (Game.uiManager == null) {
              Game.uiManager = this.addComponent(_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager);
              Game.uiManager.init();
            } //SceneManager


            Game.sceneManager = (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
              error: Error()
            }), SceneManager) : SceneManager).Instance;
            Game.sceneManager.setBeforeLoadEvent(this.onSceneUnload, this); //GameManager

            if (Game.gameManager == null) {
              Game.gameManager = this.addComponent(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager);
              Game.gameManager.init();
            } //是否显示运行信息,默认开启


            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsShowDisplayState == false) {
              //@ts-ignore
              cc.debug.setDisplayStats(false); //在预览窗口左下角显示FPS、DrawCall等调试信息

              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logInfo("关闭运行信息显示(FPS、DrawCall...etc)");
            } //注册键盘事件，用于调试


            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsDebugMode) {
              this.registerKeyBoardEvent();
            }
          }
        }, {
          key: "onEnable",
          value: function onEnable() {}
        }, {
          key: "start",
          value: function start() {
            //进入游戏
            Game.gameManager.checkEnterGame();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsDebugMode) {
              this.unregisterKeyBoardEvent();
            }
          }
          /**
           * 卸载场景的处理
           */

        }, {
          key: "onSceneUnload",
          value: function onSceneUnload() {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("onSceneUnload"); //回收UI资源并重置UI根节点

            Game.uiManager.clearUIObj(true);
            Game.uiManager.releaseAllUIRes();
            Game.uiManager.setUIRoot(null);
          }
          /***************************** 键盘事件 start********************************/

        }, {
          key: "registerKeyDownEvent",
          value: function registerKeyDownEvent(keyCode, callback, target) {
            if (!this.keyDownEventsDic[keyCode]) {
              this.keyDownEventsDic[keyCode] = [];
            }

            this.keyDownEventsDic[keyCode].push({
              callback: callback,
              target: target
            });
          }
        }, {
          key: "unRegisterKeyDownEvent",
          value: function unRegisterKeyDownEvent(keyCode, callback, target) {
            if (!this.keyDownEventsDic[keyCode]) {
              return;
            }

            for (var item in this.keyDownEventsDic[keyCode]) {
              if (this.keyDownEventsDic[keyCode][item].callback == callback && this.keyDownEventsDic[keyCode][item].target == target) {
                this.keyDownEventsDic[keyCode][item].callback = null;
                this.keyDownEventsDic[keyCode][item].target = null;
              }
            }
          }
        }, {
          key: "registerKeyUpEvent",
          value: function registerKeyUpEvent(keyCode, callback, target) {
            if (!this.keyUpEventsDic[keyCode]) {
              this.keyUpEventsDic[keyCode] = [];
            }

            this.keyUpEventsDic[keyCode].push({
              callback: callback,
              target: target
            });
          }
        }, {
          key: "unRegisterKeyUpEvent",
          value: function unRegisterKeyUpEvent(keyCode, callback, target) {
            if (!this.keyUpEventsDic[keyCode]) {
              return;
            }

            for (var item in this.keyUpEventsDic[keyCode]) {
              if (this.keyUpEventsDic[keyCode][item].callback == callback && this.keyUpEventsDic[keyCode][item].target == target) {
                this.keyUpEventsDic[keyCode][item].callback = null;
                this.keyUpEventsDic[keyCode][item].target = null;
              }
            }
          }
        }, {
          key: "registerKeyBoardEvent",
          value: function registerKeyBoardEvent() {
            systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          }
        }, {
          key: "unregisterKeyBoardEvent",
          value: function unregisterKeyBoardEvent() {
            systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(event) {
            if (this.keyUpEventsDic[event.keyCode]) {
              for (var i = this.keyUpEventsDic[event.keyCode].length - 1; i >= 0; i--) {
                if (this.keyUpEventsDic[event.keyCode][i].callback != null) {
                  this.keyUpEventsDic[event.keyCode][i].callback.apply(this.keyUpEventsDic[event.keyCode][i].target, null);
                } else {
                  this.keyUpEventsDic[event.keyCode].splice(i, 1);
                }
              }
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            if (this.keyDownEventsDic[event.keyCode]) {
              for (var i = this.keyDownEventsDic[event.keyCode].length - 1; i >= 0; i--) {
                if (this.keyDownEventsDic[event.keyCode][i].callback != null) {
                  this.keyDownEventsDic[event.keyCode][i].callback.apply(this.keyDownEventsDic[event.keyCode][i].target, null);
                } else {
                  this.keyDownEventsDic[event.keyCode].splice(i, 1);
                }
              }
            }
          }
          /***************************** 键盘事件 end********************************/

        }], [{
          key: "Instance",
          //单例模式
          get: function get() {
            if (Game._instance == null) {
              Game._instance = find("Game").getComponent(Game);

              if (Game._instance == null) {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo("Game is null, please attach Game");
              }
            }

            return Game._instance;
          } //系统组件

        }]);

        return Game;
      }(Component), _class2.msgCenter = null, _class2.saveManager = null, _class2.audioManager = null, _class2.uiManager = null, _class2.sceneManager = null, _class2.gameManager = null, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9HYW1lLnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImZpbmQiLCJnYW1lIiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudCIsIl9kZWNvcmF0b3IiLCJBdWRpb01hbmFnZXIiLCJTYXZlTWFuYWdlciIsIlNjZW5lTWFuYWdlciIsIkRlYnVnVXRpbCIsIlVJTWFuYWdlciIsIk1zZ0NlbnRlciIsIkdhbWVDb25maWciLCJHYW1lTWFuYWdlciIsImNjY2xhc3MiLCJHYW1lIiwia2V5RG93bkV2ZW50c0RpYyIsImtleVVwRXZlbnRzRGljIiwiX2luc3RhbmNlIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsIm1zZ0NlbnRlciIsIkluc3RhbmNlIiwic2F2ZU1hbmFnZXIiLCJhdWRpb01hbmFnZXIiLCJpbml0IiwidWlNYW5hZ2VyIiwiYWRkQ29tcG9uZW50Iiwic2NlbmVNYW5hZ2VyIiwic2V0QmVmb3JlTG9hZEV2ZW50Iiwib25TY2VuZVVubG9hZCIsImdhbWVNYW5hZ2VyIiwiSXNTaG93RGlzcGxheVN0YXRlIiwiY2MiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsImxvZ0luZm8iLCJJc0RlYnVnTW9kZSIsInJlZ2lzdGVyS2V5Qm9hcmRFdmVudCIsImNoZWNrRW50ZXJHYW1lIiwidW5yZWdpc3RlcktleUJvYXJkRXZlbnQiLCJjbGVhclVJT2JqIiwicmVsZWFzZUFsbFVJUmVzIiwic2V0VUlSb290Iiwia2V5Q29kZSIsImNhbGxiYWNrIiwidGFyZ2V0IiwicHVzaCIsIml0ZW0iLCJvbiIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsIm9mZiIsImV2ZW50IiwiaSIsImxlbmd0aCIsImFwcGx5Iiwic3BsaWNlIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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M0JDLFksR0FBNkIsSSxVQUM3QkUsUyxHQUF1QixJLFVBQ3ZCRSxZLEdBQTZCLEksVUFDN0JHLFcsR0FBMkIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZmluZCwgZ2FtZSwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuL2ZyYW1ld29yay9hdWRpby9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi9mcmFtZXdvcmsvc2F2ZS9TYXZlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTY2VuZU1hbmFnZXIgfSBmcm9tIFwiLi9mcmFtZXdvcmsvc2NlbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IERlYnVnVXRpbCB9IGZyb20gXCIuL2ZyYW1ld29yay90b29scy9EZWJ1Z1V0aWxcIjtcclxuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3VpL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBNc2dDZW50ZXIgfSBmcm9tIFwiLi9mcmFtZXdvcmsvX21lc3NhZ2UvTXNnQ2VudGVyXCI7XHJcbmltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJHYW1lXCIpXHJcbmV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8v5Y2V5L6L5qih5byPXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdhbWU7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBHYW1lIHtcclxuICAgICAgICBpZiAoR2FtZS5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBHYW1lLl9pbnN0YW5jZSA9IGZpbmQoXCJHYW1lXCIpLmdldENvbXBvbmVudChHYW1lKTtcclxuICAgICAgICAgICAgaWYgKEdhbWUuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiR2FtZSBpcyBudWxsLCBwbGVhc2UgYXR0YWNoIEdhbWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEdhbWUuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v57O757uf57uE5Lu2XHJcbiAgICBwdWJsaWMgc3RhdGljIG1zZ0NlbnRlcjogTXNnQ2VudGVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZU1hbmFnZXI6IFNhdmVNYW5hZ2VyID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyB1aU1hbmFnZXI6IFVJTWFuYWdlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNjZW5lTWFuYWdlcjogU2NlbmVNYW5hZ2VyID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8x44CB5Y2V5L6L5qih5byP6LWL5YC8XHJcbiAgICAgICAgR2FtZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIC8vMuOAgeiuvue9ruW4uOmpu+iKgueCuVxyXG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8z44CB5Yid5aeL5YyW57O757uf57uE5Lu2XHJcbiAgICAgICAgLy9Nc2dDZW50ZXJcclxuICAgICAgICBHYW1lLm1zZ0NlbnRlciA9IE1zZ0NlbnRlci5JbnN0YW5jZTtcclxuICAgICAgICAvL1NhdmVNYW5hZ2VyXHJcbiAgICAgICAgR2FtZS5zYXZlTWFuYWdlciA9IFNhdmVNYW5hZ2VyLkluc3RhbmNlO1xyXG4gICAgICAgIC8vQXVkaW9NYW5hZ2VyXHJcbiAgICAgICAgR2FtZS5hdWRpb01hbmFnZXIgPSBBdWRpb01hbmFnZXIuSW5zdGFuY2U7XHJcbiAgICAgICAgR2FtZS5hdWRpb01hbmFnZXIuaW5pdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vVUlNYW5hZ2VyXHJcbiAgICAgICAgaWYgKEdhbWUudWlNYW5hZ2VyID09IG51bGwpIHtcclxuICAgICAgICAgICAgR2FtZS51aU1hbmFnZXIgPSB0aGlzLmFkZENvbXBvbmVudChVSU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBHYW1lLnVpTWFuYWdlci5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vU2NlbmVNYW5hZ2VyXHJcbiAgICAgICAgR2FtZS5zY2VuZU1hbmFnZXIgPSBTY2VuZU1hbmFnZXIuSW5zdGFuY2U7XHJcbiAgICAgICAgR2FtZS5zY2VuZU1hbmFnZXIuc2V0QmVmb3JlTG9hZEV2ZW50KHRoaXMub25TY2VuZVVubG9hZCwgdGhpcyk7XHJcbiAgICAgICAgLy9HYW1lTWFuYWdlclxyXG4gICAgICAgIGlmIChHYW1lLmdhbWVNYW5hZ2VyID09IG51bGwpIHtcclxuICAgICAgICAgICAgR2FtZS5nYW1lTWFuYWdlciA9IHRoaXMuYWRkQ29tcG9uZW50KEdhbWVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgR2FtZS5nYW1lTWFuYWdlci5pbml0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aYr+WQpuaYvuekuui/kOihjOS/oeaBryzpu5jorqTlvIDlkK9cclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5Jc1Nob3dEaXNwbGF5U3RhdGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7IC8v5Zyo6aKE6KeI56qX5Y+j5bem5LiL6KeS5pi+56S6RlBT44CBRHJhd0NhbGznrYnosIPor5Xkv6Hmga9cclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLlhbPpl63ov5DooYzkv6Hmga/mmL7npLooRlBT44CBRHJhd0NhbGwuLi5ldGMpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ms6jlhozplK7nm5jkuovku7bvvIznlKjkuo7osIPor5VcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5Jc0RlYnVnTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyS2V5Qm9hcmRFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHsgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8v6L+b5YWl5ri45oiPXHJcbiAgICAgICAgR2FtZS5nYW1lTWFuYWdlci5jaGVja0VudGVyR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5Jc0RlYnVnTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJLZXlCb2FyZEV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y246L295Zy65pmv55qE5aSE55CGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25TY2VuZVVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIm9uU2NlbmVVbmxvYWRcIik7XHJcbiAgICAgICAgLy/lm57mlLZVSei1hOa6kOW5tumHjee9rlVJ5qC56IqC54K5XHJcbiAgICAgICAgR2FtZS51aU1hbmFnZXIuY2xlYXJVSU9iaih0cnVlKTtcclxuICAgICAgICBHYW1lLnVpTWFuYWdlci5yZWxlYXNlQWxsVUlSZXMoKTtcclxuICAgICAgICBHYW1lLnVpTWFuYWdlci5zZXRVSVJvb3QobnVsbCk7XHJcbiAgICB9XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiog6ZSu55uY5LqL5Lu2IHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcml2YXRlIGtleURvd25FdmVudHNEaWMgPSB7fTtcclxuICAgIHByaXZhdGUga2V5VXBFdmVudHNEaWMgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJLZXlEb3duRXZlbnQoXHJcbiAgICAgICAga2V5Q29kZTogbnVtYmVyLFxyXG4gICAgICAgIGNhbGxiYWNrOiBGdW5jdGlvbixcclxuICAgICAgICB0YXJnZXQ6IE9iamVjdFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleURvd25FdmVudHNEaWNba2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duRXZlbnRzRGljW2tleUNvZGVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2V5RG93bkV2ZW50c0RpY1trZXlDb2RlXS5wdXNoKHsgY2FsbGJhY2s6IGNhbGxiYWNrLCB0YXJnZXQ6IHRhcmdldCB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1blJlZ2lzdGVyS2V5RG93bkV2ZW50KFxyXG4gICAgICAgIGtleUNvZGU6IG51bWJlcixcclxuICAgICAgICBjYWxsYmFjazogRnVuY3Rpb24sXHJcbiAgICAgICAgdGFyZ2V0OiBPYmplY3RcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5rZXlEb3duRXZlbnRzRGljW2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiB0aGlzLmtleURvd25FdmVudHNEaWNba2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duRXZlbnRzRGljW2tleUNvZGVdW2l0ZW1dLmNhbGxiYWNrID09IGNhbGxiYWNrICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd25FdmVudHNEaWNba2V5Q29kZV1baXRlbV0udGFyZ2V0ID09IHRhcmdldFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bkV2ZW50c0RpY1trZXlDb2RlXVtpdGVtXS5jYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd25FdmVudHNEaWNba2V5Q29kZV1baXRlbV0udGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJLZXlVcEV2ZW50KGtleUNvZGU6IG51bWJlciwgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ6IE9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5rZXlVcEV2ZW50c0RpY1trZXlDb2RlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleVVwRXZlbnRzRGljW2tleUNvZGVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2V5VXBFdmVudHNEaWNba2V5Q29kZV0ucHVzaCh7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGFyZ2V0OiB0YXJnZXQgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdW5SZWdpc3RlcktleVVwRXZlbnQoXHJcbiAgICAgICAga2V5Q29kZTogbnVtYmVyLFxyXG4gICAgICAgIGNhbGxiYWNrOiBGdW5jdGlvbixcclxuICAgICAgICB0YXJnZXQ6IE9iamVjdFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleVVwRXZlbnRzRGljW2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiB0aGlzLmtleVVwRXZlbnRzRGljW2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBFdmVudHNEaWNba2V5Q29kZV1baXRlbV0uY2FsbGJhY2sgPT0gY2FsbGJhY2sgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBFdmVudHNEaWNba2V5Q29kZV1baXRlbV0udGFyZ2V0ID09IHRhcmdldFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBFdmVudHNEaWNba2V5Q29kZV1baXRlbV0uY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcEV2ZW50c0RpY1trZXlDb2RlXVtpdGVtXS50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJLZXlCb2FyZEV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1bnJlZ2lzdGVyS2V5Qm9hcmRFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbktleVVwKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5VXBFdmVudHNEaWNbZXZlbnQua2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMua2V5VXBFdmVudHNEaWNbZXZlbnQua2V5Q29kZV0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleVVwRXZlbnRzRGljW2V2ZW50LmtleUNvZGVdW2ldLmNhbGxiYWNrICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleVVwRXZlbnRzRGljW2V2ZW50LmtleUNvZGVdW2ldLmNhbGxiYWNrLmFwcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleVVwRXZlbnRzRGljW2V2ZW50LmtleUNvZGVdW2ldLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5VXBFdmVudHNEaWNbZXZlbnQua2V5Q29kZV0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiB7IGtleUNvZGU6IHN0cmluZyB8IG51bWJlcjsgfSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmtleURvd25FdmVudHNEaWNbZXZlbnQua2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgIGxldCBpID0gdGhpcy5rZXlEb3duRXZlbnRzRGljW2V2ZW50LmtleUNvZGVdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBpID49IDA7XHJcbiAgICAgICAgICAgICAgICBpLS1cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXlEb3duRXZlbnRzRGljW2V2ZW50LmtleUNvZGVdW2ldLmNhbGxiYWNrICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25FdmVudHNEaWNbZXZlbnQua2V5Q29kZV1baV0uY2FsbGJhY2suYXBwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bkV2ZW50c0RpY1tldmVudC5rZXlDb2RlXVtpXS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25FdmVudHNEaWNbZXZlbnQua2V5Q29kZV0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIOmUruebmOS6i+S7tiBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxufVxyXG4iXX0=