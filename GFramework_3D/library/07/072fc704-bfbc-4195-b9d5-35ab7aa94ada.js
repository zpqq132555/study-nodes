System.register(["cc", "code-quality:cr", "./framework/tools/DebugUtil.js", "./framework/scene/SceneConfig.js", "./framework/scene/SceneManager.js", "./framework/_base/GameBase.js", "./GameData.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, DebugUtil, Scenes, SceneManager, GameBase, GameData, _dec, _class, _temp, _crd, ccclass, GameManager;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "./framework/tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScenes(extras) {
    _reporterNs.report("Scenes", "./framework/scene/SceneConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneManager(extras) {
    _reporterNs.report("SceneManager", "./framework/scene/SceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameBase(extras) {
    _reporterNs.report("GameBase", "./framework/_base/GameBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_frameworkToolsDebugUtilJs) {
      DebugUtil = _frameworkToolsDebugUtilJs.DebugUtil;
    }, function (_frameworkSceneSceneConfigJs) {
      Scenes = _frameworkSceneSceneConfigJs.Scenes;
    }, function (_frameworkSceneSceneManagerJs) {
      SceneManager = _frameworkSceneSceneManagerJs.SceneManager;
    }, function (_framework_baseGameBaseJs) {
      GameBase = _framework_baseGameBaseJs.GameBase;
    }, function (_GameDataJs) {
      GameData = _GameDataJs.GameData;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "072fccEv7xBlbnVNat6qUra", "GameManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(GameManager, _ref);

        _createClass(GameManager, [{
          key: "gameData",
          get: function get() {
            return this._gameData;
          }
          /**
           *
           */

        }]);

        function GameManager() {
          var _this;

          _classCallCheck(this, GameManager);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(GameManager).call(this));
          _this._gameData = null;
          _this._gameData = new (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData)();
          return _this;
        }
        /**
         * 初始化方法
         */


        _createClass(GameManager, [{
          key: "init",
          value: function init() {
            this.gameData.init();
          }
          /**
           * 判断框架初始化是否完成，完成则进入游戏内容
           */

        }, {
          key: "checkEnterGame",
          value: function checkEnterGame() {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("框架初始化中，等待进入游戏");
            this.addScheduler(this.checkEnterGameScheduler, 0.2);
          }
        }, {
          key: "checkEnterGameScheduler",
          value: function checkEnterGameScheduler() {
            if (this._gameData.recordLoaded) {
              this.removeScheduler(this.checkEnterGameScheduler);
              this.enterGame();
            }
          }
          /**
           * 加载游戏内容场景
           */

        }, {
          key: "enterGame",
          value: function enterGame() {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("框架初始化完成，进入游戏");
            (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
              error: Error()
            }), SceneManager) : SceneManager).Instance.loadScene((_crd && Scenes === void 0 ? (_reportPossibleCrUseOfScenes({
              error: Error()
            }), Scenes) : Scenes).Main);
          }
        }]);

        return GameManager;
      }(_crd && GameBase === void 0 ? (_reportPossibleCrUseOfGameBase({
        error: Error()
      }), GameBase) : GameBase), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkRlYnVnVXRpbCIsIlNjZW5lcyIsIlNjZW5lTWFuYWdlciIsIkdhbWVCYXNlIiwiR2FtZURhdGEiLCJjY2NsYXNzIiwiR2FtZU1hbmFnZXIiLCJfZ2FtZURhdGEiLCJnYW1lRGF0YSIsImluaXQiLCJsb2dJbmZvIiwiYWRkU2NoZWR1bGVyIiwiY2hlY2tFbnRlckdhbWVTY2hlZHVsZXIiLCJyZWNvcmRMb2FkZWQiLCJyZW1vdmVTY2hlZHVsZXIiLCJlbnRlckdhbWUiLCJJbnN0YW5jZSIsImxvYWRTY2VuZSIsIk1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ0FDLE1BQUFBLFMsOEJBQUFBLFM7O0FBQ0FDLE1BQUFBLE0sZ0NBQUFBLE07O0FBQ0FDLE1BQUFBLFksaUNBQUFBLFk7O0FBQ0FDLE1BQUFBLFEsNkJBQUFBLFE7O0FBQ0FDLE1BQUFBLFEsZUFBQUEsUTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBWU4sVSxDQUFaTSxPOzs2QkFHS0MsVyxXQURaRCxPQUFPLENBQUMsYUFBRCxDOzs7Ozs4QkFJNEI7QUFDNUIsbUJBQU8sS0FBS0UsU0FBWjtBQUNIO0FBRUQ7Ozs7OztBQUdBLCtCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFEVSxnQkFSTkEsU0FRTSxHQVJnQixJQVFoQjtBQUVWLGdCQUFLQSxTQUFMLEdBQWlCO0FBQUE7QUFBQSxxQ0FBakI7QUFGVTtBQUdiO0FBRUQ7Ozs7Ozs7aUNBR29CO0FBQ2hCLGlCQUFLQyxRQUFMLENBQWNDLElBQWQ7QUFDSDtBQUVEOzs7Ozs7MkNBRzhCO0FBQzFCO0FBQUE7QUFBQSx3Q0FBVUMsT0FBVixDQUFrQixlQUFsQjtBQUNBLGlCQUFLQyxZQUFMLENBQWtCLEtBQUtDLHVCQUF2QixFQUFnRCxHQUFoRDtBQUNIOzs7b0RBRXVDO0FBQ3BDLGdCQUFJLEtBQUtMLFNBQUwsQ0FBZU0sWUFBbkIsRUFBaUM7QUFDN0IsbUJBQUtDLGVBQUwsQ0FBcUIsS0FBS0YsdUJBQTFCO0FBQ0EsbUJBQUtHLFNBQUw7QUFDSDtBQUNKO0FBRUQ7Ozs7OztzQ0FHMEI7QUFDdEI7QUFBQTtBQUFBLHdDQUFVTCxPQUFWLENBQWtCLGNBQWxCO0FBQ0E7QUFBQTtBQUFBLDhDQUFhTSxRQUFiLENBQXNCQyxTQUF0QixDQUFnQztBQUFBO0FBQUEsa0NBQU9DLElBQXZDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IERlYnVnVXRpbCB9IGZyb20gXCIuL2ZyYW1ld29yay90b29scy9EZWJ1Z1V0aWxcIjtcclxuaW1wb3J0IHsgU2NlbmVzIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3NjZW5lL1NjZW5lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gXCIuL2ZyYW1ld29yay9zY2VuZS9TY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUJhc2UgfSBmcm9tIFwiLi9mcmFtZXdvcmsvX2Jhc2UvR2FtZUJhc2VcIjtcclxuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tIFwiLi9HYW1lRGF0YVwiO1xyXG5jb25zdCB7IGNjY2xhc3MgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkdhbWVNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIEdhbWVCYXNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9nYW1lRGF0YTogR2FtZURhdGEgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBnYW1lRGF0YSgpOiBHYW1lRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YSA9IG5ldyBHYW1lRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5qGG5p625Yid5aeL5YyW5piv5ZCm5a6M5oiQ77yM5a6M5oiQ5YiZ6L+b5YWl5ri45oiP5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjaGVja0VudGVyR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuahhuaetuWIneWni+WMluS4re+8jOetieW+hei/m+WFpea4uOaIj1wiKTtcclxuICAgICAgICB0aGlzLmFkZFNjaGVkdWxlcih0aGlzLmNoZWNrRW50ZXJHYW1lU2NoZWR1bGVyLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tFbnRlckdhbWVTY2hlZHVsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhLnJlY29yZExvYWRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNjaGVkdWxlcih0aGlzLmNoZWNrRW50ZXJHYW1lU2NoZWR1bGVyKTtcclxuICAgICAgICAgICAgdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3muLjmiI/lhoXlrrnlnLrmma9cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBlbnRlckdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLmoYbmnrbliJ3lp4vljJblrozmiJDvvIzov5vlhaXmuLjmiI9cIik7XHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyLkluc3RhbmNlLmxvYWRTY2VuZShTY2VuZXMuTWFpbik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==