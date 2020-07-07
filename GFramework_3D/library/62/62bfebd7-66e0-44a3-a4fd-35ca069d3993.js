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
      _cclegacy._RF.push({}, "62bfevXZuBEo6T9NcoGnTmT", "DebugUtil", _context.meta);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvZGVidWdnZXIvRGVidWdVdGlsLnRzIl0sIm5hbWVzIjpbImVycm9yIiwibG9nIiwid2FybiIsIl9kZWNvcmF0b3IiLCJHYW1lQ29uZmlnIiwiY2NjbGFzcyIsIkRlYnVnVXRpbCIsIm1zZyIsImxvZ09wZW4iLCJwYXJhbSIsImxlbmd0aCIsIklzRGVidWdNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsRyxPQUFBQSxHO0FBQUtDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDbEJDLE1BQUFBLFUsaUJBQUFBLFU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQVlGLFUsQ0FBWkUsTztBQUVSOzs7OzJCQUlhQyxTLFdBRFpELE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7a0NBRWtCRSxHLEVBQWlDO0FBQ25ELGdCQUFJLENBQUMsS0FBS0MsT0FBTCxFQUFMLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBSGtELDhDQUFwQkMsS0FBb0I7QUFBcEJBLGNBQUFBLEtBQW9CO0FBQUE7O0FBSW5ELGdCQUFJQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJULGNBQUFBLEdBQUcsQ0FBQ00sR0FBRCxDQUFIO0FBQ0gsYUFGRCxNQUVPO0FBQ0hOLGNBQUFBLEdBQUcsQ0FBQ00sR0FBRCxFQUFNRSxLQUFOLENBQUg7QUFDSDtBQUNKOzs7a0NBRXFCRixHLEVBQWlDO0FBQ25ELGdCQUFJLENBQUMsS0FBS0MsT0FBTCxFQUFMLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBSGtELCtDQUFwQkMsS0FBb0I7QUFBcEJBLGNBQUFBLEtBQW9CO0FBQUE7O0FBSW5ELGdCQUFJQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJSLGNBQUFBLElBQUksQ0FBQ0ssR0FBRCxDQUFKO0FBQ0gsYUFGRCxNQUVPO0FBQ0hMLGNBQUFBLElBQUksQ0FBQ0ssR0FBRCxFQUFNRSxLQUFOLENBQUo7QUFDSDtBQUNKOzs7bUNBRXNCRixHLEVBQWlDO0FBQ3BELGdCQUFJLENBQUMsS0FBS0MsT0FBTCxFQUFMLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBSG1ELCtDQUFwQkMsS0FBb0I7QUFBcEJBLGNBQUFBLEtBQW9CO0FBQUE7O0FBSXBELGdCQUFJQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJWLGNBQUFBLEtBQUssQ0FBQ08sR0FBRCxDQUFMO0FBQ0gsYUFGRCxNQUVPO0FBQ0hQLGNBQUFBLEtBQUssQ0FBQ08sR0FBRCxFQUFNRSxLQUFOLENBQUw7QUFDSDtBQUNKOzs7b0NBRWlDO0FBQzlCLG1CQUFPO0FBQUE7QUFBQSwwQ0FBV0UsV0FBbEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVycm9yLCBsb2csIHdhcm4sIF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgR2FtZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9HYW1lQ29uZmlnXCI7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDml6Xlv5flt6XlhbfnsbtcclxuICovXHJcbkBjY2NsYXNzKFwiRGVidWdVdGlsXCIpXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z1V0aWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2dJbmZvKG1zZzogYW55LCAuLi5wYXJhbTogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9nT3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmFtLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxvZyhtc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZyhtc2csIHBhcmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2dXYXJuKG1zZzogYW55LCAuLi5wYXJhbTogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9nT3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmFtLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHdhcm4obXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3YXJuKG1zZywgcGFyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZ0Vycm9yKG1zZzogYW55LCAuLi5wYXJhbTogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9nT3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmFtLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGVycm9yKG1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3IobXNnLCBwYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGxvZ09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDb25maWcuSXNEZWJ1Z01vZGU7XHJcbiAgICB9XHJcbn1cclxuIl19