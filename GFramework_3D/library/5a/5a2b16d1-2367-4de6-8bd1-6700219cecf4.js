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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvR2FtZS50cyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJmaW5kIiwiZ2FtZSIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJfZGVjb3JhdG9yIiwiQXVkaW9NYW5hZ2VyIiwiU2F2ZU1hbmFnZXIiLCJTY2VuZU1hbmFnZXIiLCJEZWJ1Z1V0aWwiLCJVSU1hbmFnZXIiLCJNc2dDZW50ZXIiLCJHYW1lQ29uZmlnIiwiR2FtZU1hbmFnZXIiLCJjY2NsYXNzIiwiR2FtZSIsImtleURvd25FdmVudHNEaWMiLCJrZXlVcEV2ZW50c0RpYyIsIl9pbnN0YW5jZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJtc2dDZW50ZXIiLCJJbnN0YW5jZSIsInNhdmVNYW5hZ2VyIiwiYXVkaW9NYW5hZ2VyIiwiaW5pdCIsInVpTWFuYWdlciIsImFkZENvbXBvbmVudCIsInNjZW5lTWFuYWdlciIsInNldEJlZm9yZUxvYWRFdmVudCIsIm9uU2NlbmVVbmxvYWQiLCJnYW1lTWFuYWdlciIsIklzU2hvd0Rpc3BsYXlTdGF0ZSIsImNjIiwiZGVidWciLCJzZXREaXNwbGF5U3RhdHMiLCJsb2dJbmZvIiwiSXNEZWJ1Z01vZGUiLCJyZWdpc3RlcktleUJvYXJkRXZlbnQiLCJjaGVja0VudGVyR2FtZSIsInVucmVnaXN0ZXJLZXlCb2FyZEV2ZW50IiwiY2xlYXJVSU9iaiIsInJlbGVhc2VBbGxVSVJlcyIsInNldFVJUm9vdCIsImtleUNvZGUiLCJjYWxsYmFjayIsInRhcmdldCIsInB1c2giLCJpdGVtIiwib24iLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIktFWV9VUCIsIm9uS2V5VXAiLCJvZmYiLCJldmVudCIsImkiLCJsZW5ndGgiLCJhcHBseSIsInNwbGljZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SSxVQUN2QkUsVyxHQUEyQixJLFVBQzNCQyxZLEdBQTZCLEksVUFDN0JFLFMsR0FBdUIsSSxVQUN2QkUsWSxHQUE2QixJLFVBQzdCRyxXLEdBQTJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZpbmQsIGdhbWUsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi9mcmFtZXdvcmsvYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3NhdmUvU2F2ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3NjZW5lL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi9mcmFtZXdvcmsvdG9vbHMvRGVidWdVdGlsXCI7XHJcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuL2ZyYW1ld29yay91aS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTXNnQ2VudGVyIH0gZnJvbSBcIi4vZnJhbWV3b3JrL19tZXNzYWdlL01zZ0NlbnRlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiR2FtZVwiKVxyXG5leHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvL+WNleS+i+aooeW8j1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBHYW1lO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogR2FtZSB7XHJcbiAgICAgICAgaWYgKEdhbWUuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgR2FtZS5faW5zdGFuY2UgPSBmaW5kKFwiR2FtZVwiKS5nZXRDb21wb25lbnQoR2FtZSk7XHJcbiAgICAgICAgICAgIGlmIChHYW1lLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIkdhbWUgaXMgbnVsbCwgcGxlYXNlIGF0dGFjaCBHYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBHYW1lLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+ezu+e7n+e7hOS7tlxyXG4gICAgcHVibGljIHN0YXRpYyBtc2dDZW50ZXI6IE1zZ0NlbnRlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmVNYW5hZ2VyOiBTYXZlTWFuYWdlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgdWlNYW5hZ2VyOiBVSU1hbmFnZXIgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBzY2VuZU1hbmFnZXI6IFNjZW5lTWFuYWdlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdhbWVNYW5hZ2VyOiBHYW1lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vMeOAgeWNleS+i+aooeW8j+i1i+WAvFxyXG4gICAgICAgIEdhbWUuX2luc3RhbmNlID0gdGhpcztcclxuICAgICAgICAvLzLjgIHorr7nva7luLjpqbvoioLngrlcclxuICAgICAgICBnYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vM+OAgeWIneWni+WMluezu+e7n+e7hOS7tlxyXG4gICAgICAgIC8vTXNnQ2VudGVyXHJcbiAgICAgICAgR2FtZS5tc2dDZW50ZXIgPSBNc2dDZW50ZXIuSW5zdGFuY2U7XHJcbiAgICAgICAgLy9TYXZlTWFuYWdlclxyXG4gICAgICAgIEdhbWUuc2F2ZU1hbmFnZXIgPSBTYXZlTWFuYWdlci5JbnN0YW5jZTtcclxuICAgICAgICAvL0F1ZGlvTWFuYWdlclxyXG4gICAgICAgIEdhbWUuYXVkaW9NYW5hZ2VyID0gQXVkaW9NYW5hZ2VyLkluc3RhbmNlO1xyXG4gICAgICAgIEdhbWUuYXVkaW9NYW5hZ2VyLmluaXQodGhpcy5ub2RlKTtcclxuICAgICAgICAvL1VJTWFuYWdlclxyXG4gICAgICAgIGlmIChHYW1lLnVpTWFuYWdlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEdhbWUudWlNYW5hZ2VyID0gdGhpcy5hZGRDb21wb25lbnQoVUlNYW5hZ2VyKTtcclxuICAgICAgICAgICAgR2FtZS51aU1hbmFnZXIuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1NjZW5lTWFuYWdlclxyXG4gICAgICAgIEdhbWUuc2NlbmVNYW5hZ2VyID0gU2NlbmVNYW5hZ2VyLkluc3RhbmNlO1xyXG4gICAgICAgIEdhbWUuc2NlbmVNYW5hZ2VyLnNldEJlZm9yZUxvYWRFdmVudCh0aGlzLm9uU2NlbmVVbmxvYWQsIHRoaXMpO1xyXG4gICAgICAgIC8vR2FtZU1hbmFnZXJcclxuICAgICAgICBpZiAoR2FtZS5nYW1lTWFuYWdlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEdhbWUuZ2FtZU1hbmFnZXIgPSB0aGlzLmFkZENvbXBvbmVudChHYW1lTWFuYWdlcik7XHJcbiAgICAgICAgICAgIEdhbWUuZ2FtZU1hbmFnZXIuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mmK/lkKbmmL7npLrov5DooYzkv6Hmga8s6buY6K6k5byA5ZCvXHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuSXNTaG93RGlzcGxheVN0YXRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpOyAvL+WcqOmihOiniOeql+WPo+W3puS4i+inkuaYvuekukZQU+OAgURyYXdDYWxs562J6LCD6K+V5L+h5oGvXHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5YWz6Zet6L+Q6KGM5L+h5oGv5pi+56S6KEZQU+OAgURyYXdDYWxsLi4uZXRjKVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5rOo5YaM6ZSu55uY5LqL5Lu277yM55So5LqO6LCD6K+VXHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuSXNEZWJ1Z01vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcktleUJvYXJkRXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7IH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgICAgIEdhbWUuZ2FtZU1hbmFnZXIuY2hlY2tFbnRlckdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuSXNEZWJ1Z01vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy51bnJlZ2lzdGVyS2V5Qm9hcmRFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNuOi9veWcuuaZr+eahOWkhOeQhlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uU2NlbmVVbmxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJvblNjZW5lVW5sb2FkXCIpO1xyXG4gICAgICAgIC8v5Zue5pS2VUnotYTmupDlubbph43nva5VSeagueiKgueCuVxyXG4gICAgICAgIEdhbWUudWlNYW5hZ2VyLmNsZWFyVUlPYmoodHJ1ZSk7XHJcbiAgICAgICAgR2FtZS51aU1hbmFnZXIucmVsZWFzZUFsbFVJUmVzKCk7XHJcbiAgICAgICAgR2FtZS51aU1hbmFnZXIuc2V0VUlSb290KG51bGwpO1xyXG4gICAgfVxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIOmUruebmOS6i+S7tiBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgcHJpdmF0ZSBrZXlEb3duRXZlbnRzRGljID0ge307XHJcbiAgICBwcml2YXRlIGtleVVwRXZlbnRzRGljID0ge307XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyS2V5RG93bkV2ZW50KGtleUNvZGU6IG51bWJlciwgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ6IE9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5rZXlEb3duRXZlbnRzRGljW2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5RG93bkV2ZW50c0RpY1trZXlDb2RlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtleURvd25FdmVudHNEaWNba2V5Q29kZV0ucHVzaCh7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGFyZ2V0OiB0YXJnZXQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVuUmVnaXN0ZXJLZXlEb3duRXZlbnQoa2V5Q29kZTogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldDogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleURvd25FdmVudHNEaWNba2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMua2V5RG93bkV2ZW50c0RpY1trZXlDb2RlXSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd25FdmVudHNEaWNba2V5Q29kZV1baXRlbV0uY2FsbGJhY2sgPT0gY2FsbGJhY2sgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bkV2ZW50c0RpY1trZXlDb2RlXVtpdGVtXS50YXJnZXQgPT0gdGFyZ2V0XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duRXZlbnRzRGljW2tleUNvZGVdW2l0ZW1dLmNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bkV2ZW50c0RpY1trZXlDb2RlXVtpdGVtXS50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RlcktleVVwRXZlbnQoa2V5Q29kZTogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldDogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleVVwRXZlbnRzRGljW2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5VXBFdmVudHNEaWNba2V5Q29kZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rZXlVcEV2ZW50c0RpY1trZXlDb2RlXS5wdXNoKHsgY2FsbGJhY2s6IGNhbGxiYWNrLCB0YXJnZXQ6IHRhcmdldCB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1blJlZ2lzdGVyS2V5VXBFdmVudChrZXlDb2RlOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0OiBPYmplY3QpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5VXBFdmVudHNEaWNba2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMua2V5VXBFdmVudHNEaWNba2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcEV2ZW50c0RpY1trZXlDb2RlXVtpdGVtXS5jYWxsYmFjayA9PSBjYWxsYmFjayAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcEV2ZW50c0RpY1trZXlDb2RlXVtpdGVtXS50YXJnZXQgPT0gdGFyZ2V0XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcEV2ZW50c0RpY1trZXlDb2RlXVtpdGVtXS5jYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwRXZlbnRzRGljW2tleUNvZGVdW2l0ZW1dLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcktleUJvYXJkRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVucmVnaXN0ZXJLZXlCb2FyZEV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9mZihTeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uS2V5VXAoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5rZXlVcEV2ZW50c0RpY1tldmVudC5rZXlDb2RlXSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5rZXlVcEV2ZW50c0RpY1tldmVudC5rZXlDb2RlXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMua2V5VXBFdmVudHNEaWNbZXZlbnQua2V5Q29kZV1baV0uY2FsbGJhY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5VXBFdmVudHNEaWNbZXZlbnQua2V5Q29kZV1baV0uY2FsbGJhY2suYXBwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5VXBFdmVudHNEaWNbZXZlbnQua2V5Q29kZV1baV0udGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlVcEV2ZW50c0RpY1tldmVudC5rZXlDb2RlXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmtleURvd25FdmVudHNEaWNbZXZlbnQua2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMua2V5RG93bkV2ZW50c0RpY1tldmVudC5rZXlDb2RlXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMua2V5RG93bkV2ZW50c0RpY1tldmVudC5rZXlDb2RlXVtpXS5jYWxsYmFjayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duRXZlbnRzRGljW2V2ZW50LmtleUNvZGVdW2ldLmNhbGxiYWNrLmFwcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25FdmVudHNEaWNbZXZlbnQua2V5Q29kZV1baV0udGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duRXZlbnRzRGljW2V2ZW50LmtleUNvZGVdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiDplK7nm5jkuovku7YgZW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbn1cclxuIl19