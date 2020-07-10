System.register(["cc", "code-quality:cr", "../../GameConfig.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, error, log, warn, _decorator, GameConfig, _dec, _class, _crd, ccclass, DebugUtil;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../GameConfig", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
      log = _cc.log;
      warn = _cc.warn;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameConfigJs) {
      GameConfig = _GameConfigJs.GameConfig;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "6b2a0mAG2JBQokJrtlTygpC", "DebugUtil", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      /**
       * 日志工具类
       */

      _export("DebugUtil", DebugUtil = (_dec = ccclass("DebugUtil"), _dec(_class = /*#__PURE__*/function () {
        function DebugUtil() {
          _classCallCheck(this, DebugUtil);
        }

        _createClass(DebugUtil, null, [{
          key: "logInfo",
          value: function logInfo(msg) {
            if (!this.logOpen()) {
              return;
            }

            for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              param[_key - 1] = arguments[_key];
            }

            if (param.length == 0) {
              log(msg);
            } else {
              log(msg, param);
            }
          }
        }, {
          key: "logWarn",
          value: function logWarn(msg) {
            if (!this.logOpen()) {
              return;
            }

            for (var _len2 = arguments.length, param = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              param[_key2 - 1] = arguments[_key2];
            }

            if (param.length == 0) {
              warn(msg);
            } else {
              warn(msg, param);
            }
          }
        }, {
          key: "logError",
          value: function logError(msg) {
            if (!this.logOpen()) {
              return;
            }

            for (var _len3 = arguments.length, param = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              param[_key3 - 1] = arguments[_key3];
            }

            if (param.length == 0) {
              error(msg);
            } else {
              error(msg, param);
            }
          }
        }, {
          key: "logOpen",
          value: function logOpen() {
            return (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsDebugMode;
          }
        }]);

        return DebugUtil;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL3Rvb2xzL0RlYnVnVXRpbC50cyJdLCJuYW1lcyI6WyJlcnJvciIsImxvZyIsIndhcm4iLCJfZGVjb3JhdG9yIiwiR2FtZUNvbmZpZyIsImNjY2xhc3MiLCJEZWJ1Z1V0aWwiLCJtc2ciLCJsb2dPcGVuIiwicGFyYW0iLCJsZW5ndGgiLCJJc0RlYnVnTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEcsT0FBQUEsRztBQUFLQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ2xCQyxNQUFBQSxVLGlCQUFBQSxVOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFZRixVLENBQVpFLE87QUFFUjs7OzsyQkFJYUMsUyxXQURaRCxPQUFPLENBQUMsV0FBRCxDOzs7Ozs7O2tDQUVrQkUsRyxFQUFpQztBQUNuRCxnQkFBSSxDQUFDLEtBQUtDLE9BQUwsRUFBTCxFQUFxQjtBQUNqQjtBQUNIOztBQUhrRCw4Q0FBcEJDLEtBQW9CO0FBQXBCQSxjQUFBQSxLQUFvQjtBQUFBOztBQUluRCxnQkFBSUEsS0FBSyxDQUFDQyxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CVCxjQUFBQSxHQUFHLENBQUNNLEdBQUQsQ0FBSDtBQUNILGFBRkQsTUFFTztBQUNITixjQUFBQSxHQUFHLENBQUNNLEdBQUQsRUFBTUUsS0FBTixDQUFIO0FBQ0g7QUFDSjs7O2tDQUVxQkYsRyxFQUFpQztBQUNuRCxnQkFBSSxDQUFDLEtBQUtDLE9BQUwsRUFBTCxFQUFxQjtBQUNqQjtBQUNIOztBQUhrRCwrQ0FBcEJDLEtBQW9CO0FBQXBCQSxjQUFBQSxLQUFvQjtBQUFBOztBQUluRCxnQkFBSUEsS0FBSyxDQUFDQyxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CUixjQUFBQSxJQUFJLENBQUNLLEdBQUQsQ0FBSjtBQUNILGFBRkQsTUFFTztBQUNITCxjQUFBQSxJQUFJLENBQUNLLEdBQUQsRUFBTUUsS0FBTixDQUFKO0FBQ0g7QUFDSjs7O21DQUVzQkYsRyxFQUFpQztBQUNwRCxnQkFBSSxDQUFDLEtBQUtDLE9BQUwsRUFBTCxFQUFxQjtBQUNqQjtBQUNIOztBQUhtRCwrQ0FBcEJDLEtBQW9CO0FBQXBCQSxjQUFBQSxLQUFvQjtBQUFBOztBQUlwRCxnQkFBSUEsS0FBSyxDQUFDQyxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CVixjQUFBQSxLQUFLLENBQUNPLEdBQUQsQ0FBTDtBQUNILGFBRkQsTUFFTztBQUNIUCxjQUFBQSxLQUFLLENBQUNPLEdBQUQsRUFBTUUsS0FBTixDQUFMO0FBQ0g7QUFDSjs7O29DQUVpQztBQUM5QixtQkFBTztBQUFBO0FBQUEsMENBQVdFLFdBQWxCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlcnJvciwgbG9nLCB3YXJuLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tIFwiLi4vLi4vR2FtZUNvbmZpZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog5pel5b+X5bel5YW357G7XHJcbiAqL1xyXG5AY2NjbGFzcyhcIkRlYnVnVXRpbFwiKVxyXG5leHBvcnQgY2xhc3MgRGVidWdVdGlsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9nSW5mbyhtc2c6IGFueSwgLi4ucGFyYW06IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvZ09wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJhbS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBsb2cobXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2cobXNnLCBwYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9nV2Fybihtc2c6IGFueSwgLi4ucGFyYW06IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvZ09wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJhbS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB3YXJuKG1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2Fybihtc2csIHBhcmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2dFcnJvcihtc2c6IGFueSwgLi4ucGFyYW06IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvZ09wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJhbS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBlcnJvcihtc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yKG1zZywgcGFyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2dPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ29uZmlnLklzRGVidWdNb2RlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==