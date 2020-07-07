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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9HYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiRGVidWdVdGlsIiwiU2NlbmVzIiwiU2NlbmVNYW5hZ2VyIiwiR2FtZUJhc2UiLCJHYW1lRGF0YSIsImNjY2xhc3MiLCJHYW1lTWFuYWdlciIsIl9nYW1lRGF0YSIsImdhbWVEYXRhIiwiaW5pdCIsImxvZ0luZm8iLCJhZGRTY2hlZHVsZXIiLCJjaGVja0VudGVyR2FtZVNjaGVkdWxlciIsInJlY29yZExvYWRlZCIsInJlbW92ZVNjaGVkdWxlciIsImVudGVyR2FtZSIsIkluc3RhbmNlIiwibG9hZFNjZW5lIiwiTWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDQUMsTUFBQUEsUyw4QkFBQUEsUzs7QUFDQUMsTUFBQUEsTSxnQ0FBQUEsTTs7QUFDQUMsTUFBQUEsWSxpQ0FBQUEsWTs7QUFDQUMsTUFBQUEsUSw2QkFBQUEsUTs7QUFDQUMsTUFBQUEsUSxlQUFBQSxROzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFZTixVLENBQVpNLE87OzZCQUdLQyxXLFdBRFpELE9BQU8sQ0FBQyxhQUFELEM7Ozs7OzhCQUk0QjtBQUM1QixtQkFBTyxLQUFLRSxTQUFaO0FBQ0g7QUFFRDs7Ozs7O0FBR0EsK0JBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQURVLGdCQVJOQSxTQVFNLEdBUmdCLElBUWhCO0FBRVYsZ0JBQUtBLFNBQUwsR0FBaUI7QUFBQTtBQUFBLHFDQUFqQjtBQUZVO0FBR2I7QUFFRDs7Ozs7OztpQ0FHb0I7QUFDaEIsaUJBQUtDLFFBQUwsQ0FBY0MsSUFBZDtBQUNIO0FBRUQ7Ozs7OzsyQ0FHOEI7QUFDMUI7QUFBQTtBQUFBLHdDQUFVQyxPQUFWLENBQWtCLGVBQWxCO0FBQ0EsaUJBQUtDLFlBQUwsQ0FBa0IsS0FBS0MsdUJBQXZCLEVBQWdELEdBQWhEO0FBQ0g7OztvREFFdUM7QUFDcEMsZ0JBQUksS0FBS0wsU0FBTCxDQUFlTSxZQUFuQixFQUFpQztBQUM3QixtQkFBS0MsZUFBTCxDQUFxQixLQUFLRix1QkFBMUI7QUFDQSxtQkFBS0csU0FBTDtBQUNIO0FBQ0o7QUFFRDs7Ozs7O3NDQUcwQjtBQUN0QjtBQUFBO0FBQUEsd0NBQVVMLE9BQVYsQ0FBa0IsY0FBbEI7QUFDQTtBQUFBO0FBQUEsOENBQWFNLFFBQWIsQ0FBc0JDLFNBQXRCLENBQWdDO0FBQUE7QUFBQSxrQ0FBT0MsSUFBdkM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgRGVidWdVdGlsIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3Rvb2xzL0RlYnVnVXRpbFwiO1xyXG5pbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwiLi9mcmFtZXdvcmsvc2NlbmUvU2NlbmVDb25maWdcIjtcclxuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSBcIi4vZnJhbWV3b3JrL3NjZW5lL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQmFzZSB9IGZyb20gXCIuL2ZyYW1ld29yay9fYmFzZS9HYW1lQmFzZVwiO1xyXG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gXCIuL0dhbWVEYXRhXCI7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiR2FtZU1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgR2FtZUJhc2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2dhbWVEYXRhOiBHYW1lRGF0YSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGdhbWVEYXRhKCk6IEdhbWVEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhID0gbmV3IEdhbWVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlrnms5VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3moYbmnrbliJ3lp4vljJbmmK/lkKblrozmiJDvvIzlrozmiJDliJnov5vlhaXmuLjmiI/lhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNoZWNrRW50ZXJHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5qGG5p625Yid5aeL5YyW5Lit77yM562J5b6F6L+b5YWl5ri45oiPXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU2NoZWR1bGVyKHRoaXMuY2hlY2tFbnRlckdhbWVTY2hlZHVsZXIsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0VudGVyR2FtZVNjaGVkdWxlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEucmVjb3JkTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2NoZWR1bGVyKHRoaXMuY2hlY2tFbnRlckdhbWVTY2hlZHVsZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vea4uOaIj+WGheWuueWcuuaZr1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGVudGVyR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuahhuaetuWIneWni+WMluWujOaIkO+8jOi/m+WFpea4uOaIj1wiKTtcclxuICAgICAgICBTY2VuZU1hbmFnZXIuSW5zdGFuY2UubG9hZFNjZW5lKFNjZW5lcy5NYWluKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19