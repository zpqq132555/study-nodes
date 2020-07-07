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
          key: "IsTestMode",
          //发布平台

          /**
           * 测试模式
           * 0--关闭
           * 非0--开启
           */
          get: function get() {
            return GameConfig.TEST_MODE != 0;
          }
          /**
           * 调试日志
           * 0--关闭  1--开启
           */

        }, {
          key: "IsDebugMode",
          get: function get() {
            return GameConfig.DEBUG_SWITCH != 0;
          }
          /**
           * 运行状态信息
           * 0--关闭  1--开启
           */

        }, {
          key: "IsShowDisplayState",
          get: function get() {
            return GameConfig.SHOW_DISPLAYSTATE != 0;
          }
        }]);

        return GameConfig;
      }(), _class2.PublishPlatform = Platforms.H5, _class2.TEST_MODE = 1, _class2.DEBUG_SWITCH = 1, _class2.SHOW_DISPLAYSTATE = 0, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9HYW1lQ29uZmlnLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwiUGxhdGZvcm1zIiwiR2FtZUNvbmZpZyIsIlRFU1RfTU9ERSIsIkRFQlVHX1NXSVRDSCIsIlNIT1dfRElTUExBWVNUQVRFIiwiUHVibGlzaFBsYXRmb3JtIiwiSDUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFZRCxVLENBQVpDLE87O2lCQUVJQyxTO0FBQUFBLFFBQUFBLFMsQ0FBQUEsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO1NBQUFBLFMseUJBQUFBLFM7OzRCQU9DQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEM7Ozs7Ozs7QUFFSjs7QUFHQTs7Ozs7OEJBT3dDO0FBQ3BDLG1CQUFPRSxVQUFVLENBQUNDLFNBQVgsSUFBd0IsQ0FBL0I7QUFDSDtBQUVEOzs7Ozs7OzhCQUt1QztBQUNuQyxtQkFBT0QsVUFBVSxDQUFDRSxZQUFYLElBQTJCLENBQWxDO0FBQ0g7QUFFRDs7Ozs7Ozs4QkFLOEM7QUFDMUMsbUJBQU9GLFVBQVUsQ0FBQ0csaUJBQVgsSUFBZ0MsQ0FBdkM7QUFDSDs7OzttQkE3QmFDLGUsR0FBNkJMLFNBQVMsQ0FBQ00sRSxVQU92Q0osUyxHQUFvQixDLFVBVW5CQyxZLEdBQXNCLEMsVUFTdEJDLGlCLEdBQTJCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFBsYXRmb3JtcyB7XHJcbiAgICBINSA9IDAsXHJcbiAgICBWSVZPID0gMSxcclxuICAgIE9QUE8gPSAyLFxyXG59XHJcblxyXG5AY2NjbGFzcyhcIkdhbWVDb25maWdcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgLy/lj5HluIPlubPlj7BcclxuICAgIHB1YmxpYyBzdGF0aWMgUHVibGlzaFBsYXRmb3JtOiBQbGF0Zm9ybXMgPSBQbGF0Zm9ybXMuSDU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYvor5XmqKHlvI9cclxuICAgICAqIDAtLeWFs+mXrVxyXG4gICAgICog6Z2eMC0t5byA5ZCvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9NT0RFOiBudW1iZXIgPSAxO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJc1Rlc3RNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ29uZmlnLlRFU1RfTU9ERSAhPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LCD6K+V5pel5b+XXHJcbiAgICAgKiAwLS3lhbPpl60gIDEtLeW8gOWQr1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUJVR19TV0lUQ0g6bnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IElzRGVidWdNb2RlKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gR2FtZUNvbmZpZy5ERUJVR19TV0lUQ0ggIT0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/kOihjOeKtuaAgeS/oeaBr1xyXG4gICAgICogMC0t5YWz6ZetICAxLS3lvIDlkK9cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgU0hPV19ESVNQTEFZU1RBVEU6bnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IElzU2hvd0Rpc3BsYXlTdGF0ZSgpOmJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDb25maWcuU0hPV19ESVNQTEFZU1RBVEUgIT0gMDtcclxuICAgIH1cclxufVxyXG4iXX0=