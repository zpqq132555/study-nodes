System.register(["cc", "code-quality:cr", "../../GameConfig.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, log, warn, error, GameConfig, _dec, _class, _crd, ccclass, logUtil;

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
      _decorator = _cc._decorator;
      log = _cc.log;
      warn = _cc.warn;
      error = _cc.error;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameConfigJs) {
      GameConfig = _GameConfigJs.GameConfig;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "eccad9GPzZHJpOxPLw+3K6I", "logUtil", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      /**
       * 日志工具类
       */

      _export("logUtil", logUtil = (_dec = ccclass("logUtil"), _dec(_class = /*#__PURE__*/function () {
        function logUtil() {
          _classCallCheck(this, logUtil);
        }

        _createClass(logUtil, null, [{
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

        return logUtil;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvZGVidWdnZXIvbG9nVXRpbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwibG9nIiwid2FybiIsImVycm9yIiwiR2FtZUNvbmZpZyIsImNjY2xhc3MiLCJsb2dVdGlsIiwibXNnIiwibG9nT3BlbiIsInBhcmFtIiwibGVuZ3RoIiwiSXNEZWJ1Z01vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxHLE9BQUFBLEc7QUFBS0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSzs7OztBQUN2QkMsTUFBQUEsVSxpQkFBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBV0wsVSxDQUFYSyxPO0FBRVI7Ozs7eUJBSWFDLE8sV0FEWkQsT0FBTyxDQUFDLFNBQUQsQzs7Ozs7OztrQ0FFa0JFLEcsRUFBNEI7QUFDOUMsZ0JBQUcsQ0FBQyxLQUFLQyxPQUFMLEVBQUosRUFBbUI7QUFDZjtBQUNIOztBQUg2Qyw4Q0FBakJDLEtBQWlCO0FBQWpCQSxjQUFBQSxLQUFpQjtBQUFBOztBQUk5QyxnQkFBR0EsS0FBSyxDQUFDQyxNQUFOLElBQWdCLENBQW5CLEVBQXFCO0FBQ2pCVCxjQUFBQSxHQUFHLENBQUNNLEdBQUQsQ0FBSDtBQUNILGFBRkQsTUFFSztBQUNETixjQUFBQSxHQUFHLENBQUNNLEdBQUQsRUFBS0UsS0FBTCxDQUFIO0FBQ0g7QUFDSjs7O2tDQUVxQkYsRyxFQUE0QjtBQUM5QyxnQkFBRyxDQUFDLEtBQUtDLE9BQUwsRUFBSixFQUFtQjtBQUNmO0FBQ0g7O0FBSDZDLCtDQUFqQkMsS0FBaUI7QUFBakJBLGNBQUFBLEtBQWlCO0FBQUE7O0FBSTlDLGdCQUFHQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsQ0FBbkIsRUFBcUI7QUFDakJSLGNBQUFBLElBQUksQ0FBQ0ssR0FBRCxDQUFKO0FBQ0gsYUFGRCxNQUVLO0FBQ0RMLGNBQUFBLElBQUksQ0FBQ0ssR0FBRCxFQUFLRSxLQUFMLENBQUo7QUFDSDtBQUNKOzs7bUNBRXNCRixHLEVBQTRCO0FBQy9DLGdCQUFHLENBQUMsS0FBS0MsT0FBTCxFQUFKLEVBQW1CO0FBQ2Y7QUFDSDs7QUFIOEMsK0NBQWpCQyxLQUFpQjtBQUFqQkEsY0FBQUEsS0FBaUI7QUFBQTs7QUFJL0MsZ0JBQUdBLEtBQUssQ0FBQ0MsTUFBTixJQUFnQixDQUFuQixFQUFxQjtBQUNqQlAsY0FBQUEsS0FBSyxDQUFDSSxHQUFELENBQUw7QUFDSCxhQUZELE1BRUs7QUFDREosY0FBQUEsS0FBSyxDQUFDSSxHQUFELEVBQUtFLEtBQUwsQ0FBTDtBQUNIO0FBQ0o7OztvQ0FFK0I7QUFDNUIsbUJBQU87QUFBQTtBQUFBLDBDQUFXRSxXQUFsQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgbG9nLCB3YXJuLCBlcnJvcn0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tIFwiLi4vLi4vR2FtZUNvbmZpZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3N9ID0gX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDml6Xlv5flt6XlhbfnsbtcclxuICovXHJcbkBjY2NsYXNzKFwibG9nVXRpbFwiKVxyXG5leHBvcnQgY2xhc3MgbG9nVXRpbHtcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9nSW5mbyhtc2c6YW55LC4uLnBhcmFtOmFueVtdKTp2b2lke1xyXG4gICAgICAgIGlmKCF0aGlzLmxvZ09wZW4oKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGFyYW0ubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICBsb2cobXNnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbG9nKG1zZyxwYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9nV2Fybihtc2c6YW55LC4uLnBhcmFtOmFueVtdKTp2b2lke1xyXG4gICAgICAgIGlmKCF0aGlzLmxvZ09wZW4oKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGFyYW0ubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICB3YXJuKG1zZyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHdhcm4obXNnLHBhcmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2dFcnJvcihtc2c6YW55LC4uLnBhcmFtOmFueVtdKTp2b2lke1xyXG4gICAgICAgIGlmKCF0aGlzLmxvZ09wZW4oKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGFyYW0ubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICBlcnJvcihtc2cpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBlcnJvcihtc2cscGFyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2dPcGVuKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gR2FtZUNvbmZpZy5Jc0RlYnVnTW9kZTtcclxuICAgIH1cclxufVxyXG4iXX0=