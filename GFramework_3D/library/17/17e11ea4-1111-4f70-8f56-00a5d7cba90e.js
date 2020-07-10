System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, Platforms, GameConfig;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0,
    Platforms: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "17e116kERFPcI9WAKXXy6kO", "GameConfig", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;

      (function (Platforms) {
        Platforms[Platforms["H5"] = 0] = "H5";
        Platforms[Platforms["VIVO"] = 1] = "VIVO";
        Platforms[Platforms["OPPO"] = 2] = "OPPO";
      })(Platforms || _export("Platforms", Platforms = {}));

      _export("GameConfig", GameConfig = (_dec = ccclass("GameConfig"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function GameConfig() {
          _classCallCheck(this, GameConfig);
        }

        _createClass(GameConfig, null, [{
          key: "IsPublishPlatform",

          /**
           * 发布平台
           */

          /**
           * 测试模式
           */

          /**
           * 调试日志
           */

          /**
           * 运行状态信息
           */
          get: function get() {
            return this.PublishPlatform;
          }
        }, {
          key: "IsTestMode",
          get: function get() {
            return this.TEST_MODE;
          }
        }, {
          key: "IsDebugMode",
          get: function get() {
            return this.DEBUG_SWITCH;
          }
        }, {
          key: "IsShowDisplayState",
          get: function get() {
            return this.SHOW_DISPLAYSTATE;
          }
        }]);

        return GameConfig;
      }(), _class2.PublishPlatform = Platforms.H5, _class2.TEST_MODE = false, _class2.DEBUG_SWITCH = true, _class2.SHOW_DISPLAYSTATE = false, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvR2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsIlBsYXRmb3JtcyIsIkdhbWVDb25maWciLCJQdWJsaXNoUGxhdGZvcm0iLCJURVNUX01PREUiLCJERUJVR19TV0lUQ0giLCJTSE9XX0RJU1BMQVlTVEFURSIsIkg1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBWUQsVSxDQUFaQyxPOztpQkFFSUMsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO0FBQUFBLFFBQUFBLFMsQ0FBQUEsUztTQUFBQSxTLHlCQUFBQSxTOzs0QkFPQ0MsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7Ozs7OztBQUVKOzs7O0FBS0E7Ozs7QUFLQTs7OztBQUtBOzs7OEJBTWdEO0FBQzVDLG1CQUFPLEtBQUtHLGVBQVo7QUFDSDs7OzhCQUV1QztBQUNwQyxtQkFBTyxLQUFLQyxTQUFaO0FBQ0g7Ozs4QkFFd0M7QUFDckMsbUJBQU8sS0FBS0MsWUFBWjtBQUNIOzs7OEJBRStDO0FBQzVDLG1CQUFPLEtBQUtDLGlCQUFaO0FBQ0g7Ozs7bUJBaENjSCxlLEdBQTZCRixTQUFTLENBQUNNLEUsVUFLdkNILFMsR0FBcUIsSyxVQUtyQkMsWSxHQUF3QixJLFVBS3hCQyxpQixHQUE2QixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBQbGF0Zm9ybXMge1xyXG4gICAgSDUgPSAwLFxyXG4gICAgVklWTyA9IDEsXHJcbiAgICBPUFBPID0gMixcclxufVxyXG5cclxuQGNjY2xhc3MoXCJHYW1lQ29uZmlnXCIpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICog5Y+R5biD5bmz5Y+wXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIFB1Ymxpc2hQbGF0Zm9ybTogUGxhdGZvcm1zID0gUGxhdGZvcm1zLkg1O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rWL6K+V5qih5byPXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIFRFU1RfTU9ERTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LCD6K+V5pel5b+XXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIERFQlVHX1NXSVRDSDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5DooYznirbmgIHkv6Hmga9cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgU0hPV19ESVNQTEFZU1RBVEU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSXNQdWJsaXNoUGxhdGZvcm0oKTogUGxhdGZvcm1ze1xyXG4gICAgICAgIHJldHVybiB0aGlzLlB1Ymxpc2hQbGF0Zm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJc1Rlc3RNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlRFU1RfTU9ERTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJc0RlYnVnTW9kZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ERUJVR19TV0lUQ0g7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSXNTaG93RGlzcGxheVN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlNIT1dfRElTUExBWVNUQVRFO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==