System.register(["cc", "code-quality:cr", "../../GameConfig.js", "../save/SaveManager.js", "./DebugUtil.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, GameConfig, Platforms, SaveManager, DebugUtil, _dec, _class, _temp, _crd, ccclass, PlatformTools;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatforms(extras) {
    _reporterNs.report("Platforms", "../../GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveManager(extras) {
    _reporterNs.report("SaveManager", "../save/SaveManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "./DebugUtil", _context.meta, extras);
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
    }, function (_GameConfigJs) {
      GameConfig = _GameConfigJs.GameConfig;
      Platforms = _GameConfigJs.Platforms;
    }, function (_saveSaveManagerJs) {
      SaveManager = _saveSaveManagerJs.SaveManager;
    }, function (_DebugUtilJs) {
      DebugUtil = _DebugUtilJs.DebugUtil;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "d853fPBQOVO041xHWRd/BAM", "PlatformTools", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;

      _export("PlatformTools", PlatformTools = (_dec = ccclass("PlatformTools"), _dec(_class = (_temp = /*#__PURE__*/function () {
        function PlatformTools() {
          _classCallCheck(this, PlatformTools);

          this.vibrateSwitch = null;
        }

        _createClass(PlatformTools, [{
          key: "getScreenSize",

          /**
           * 获得窗口分辨率（非硬件分辨率）
           * 是根据设计分辨率和适配模式计算后得到的
           * 例如设计分辨率是960*720，适配宽度，则得到的窗口分辨率就是960*？，其中高度是不确定的，但是宽度是确定
           */
          value: function getScreenSize() {
            //@ts-ignore
            return {
              width: cc.winSize.width,
              height: cc.winSize.height
            };
          }
        }, {
          key: "getScreenWidth",
          value: function getScreenWidth() {
            //@ts-ignore
            return cc.winSize.width;
          }
        }, {
          key: "getScreenHeight",
          value: function getScreenHeight() {
            //@ts-ignore
            return cc.winSize.height;
          }
          /**
           * 获得设计分辨率宽高比，ratio = 宽/高
           */

        }, {
          key: "getScreenRatio",
          value: function getScreenRatio() {
            //@ts-ignore
            var ratio = cc.winSize.width / cc.winSize.height;
            return ratio;
          }
          /********************************震动相关*********************************/
          //设置震动功能的开关

        }, {
          key: "setVibrateSwitch",
          value: function setVibrateSwitch(value) {
            this.vibrateSwitch = value;

            if (value == true) {
              (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
                error: Error()
              }), SaveManager) : SaveManager).Instance.saveItemRecord("vibrateSwitch", "1");
            } else {
              (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
                error: Error()
              }), SaveManager) : SaveManager).Instance.saveItemRecord("vibrateSwitch", "0");
            }
          }
        }, {
          key: "getVibrateSwitch",
          value: function getVibrateSwitch() {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("获取震动开关");

            if (this.vibrateSwitch == null || this.vibrateSwitch == undefined) {
              this.vibrateSwitch = (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
                error: Error()
              }), SaveManager) : SaveManager).Instance.loadItemRecord('vibrateSwitch', "1") == "1" ? true : false;
              this.vibrateSwitch = true;
            }

            return this.vibrateSwitch;
          } //短震动

        }, {
          key: "vibrateShort",
          value: function vibrateShort() {
            if (!this.getVibrateSwitch()) {
              return;
            }

            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).H5) {
              return;
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).VIVO) {
              //@ts-ignore
              qg.vibrateShort();
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).OPPO) {
              //@ts-ignore
              qg.vibrateShort({
                success: function success(_res) {},
                fail: function fail(_res) {},
                complete: function complete(_res) {}
              });
            }
          }
        }, {
          key: "vibrateLong",
          value: function vibrateLong() {
            if (!this.getVibrateSwitch()) {
              return;
            }

            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).H5) {
              return;
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).VIVO) {
              //@ts-ignore
              qg.vibrateLong();
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).OPPO) {
              //@ts-ignore
              qg.vibrateLong({
                success: function success(_res) {},
                fail: function fail(_res) {},
                complete: function complete(_res) {}
              });
            }
          }
          /********************************加速度计相关*********************************/
          //获取加速度计的值

        }, {
          key: "listenAccelerometerValue",
          value: function listenAccelerometerValue(_callback, target) {
            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).H5) {
              return;
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).VIVO) {
              //@ts-ignore
              qg.subscribeAccelerometer({
                callback: function callback(data) {
                  (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                    error: Error()
                  }), DebugUtil) : DebugUtil).logInfo("listenAccelerometerValue callback, x = ".concat(data.x, ", y = ").concat(data.y, ", z = ").concat(data.z));

                  _callback.apply(target, data);
                }
              });
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).OPPO) {
              //@ts-ignore
              qg.startAccelerometer({
                interval: "ui",
                success: function success(_res) {},
                fail: function fail(_res) {},
                complete: function complete(_res) {}
              }); //@ts-ignore

              qg.onAccelerometerChange(function (_x, _y, _z) {
                _callback.apply(target, arguments);
              });
            }
          }
        }, {
          key: "stopListenAccelerometerValue",
          value: function stopListenAccelerometerValue() {
            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).H5) {
              return;
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).VIVO) {
              //@ts-ignore
              qg.unsubscribeAccelerometer();
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).IsPublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).OPPO) {
              //@ts-ignore
              qg.stopAccelerometer({
                success: function success(_res) {},
                fail: function fail(_res) {},
                complete: function complete(_res) {}
              });
            }
          }
        }]);

        return PlatformTools;
      }(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL3Rvb2xzL1BsYXRmb3JtVG9vbHMudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkdhbWVDb25maWciLCJQbGF0Zm9ybXMiLCJTYXZlTWFuYWdlciIsIkRlYnVnVXRpbCIsImNjY2xhc3MiLCJQbGF0Zm9ybVRvb2xzIiwidmlicmF0ZVN3aXRjaCIsIndpZHRoIiwiY2MiLCJ3aW5TaXplIiwiaGVpZ2h0IiwicmF0aW8iLCJ2YWx1ZSIsIkluc3RhbmNlIiwic2F2ZUl0ZW1SZWNvcmQiLCJsb2dJbmZvIiwidW5kZWZpbmVkIiwibG9hZEl0ZW1SZWNvcmQiLCJnZXRWaWJyYXRlU3dpdGNoIiwiSXNQdWJsaXNoUGxhdGZvcm0iLCJINSIsIlZJVk8iLCJxZyIsInZpYnJhdGVTaG9ydCIsIk9QUE8iLCJzdWNjZXNzIiwiX3JlcyIsImZhaWwiLCJjb21wbGV0ZSIsInZpYnJhdGVMb25nIiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJzdWJzY3JpYmVBY2NlbGVyb21ldGVyIiwiZGF0YSIsIngiLCJ5IiwieiIsImFwcGx5Iiwic3RhcnRBY2NlbGVyb21ldGVyIiwiaW50ZXJ2YWwiLCJvbkFjY2VsZXJvbWV0ZXJDaGFuZ2UiLCJfeCIsIl95IiwiX3oiLCJhcmd1bWVudHMiLCJ1bnN1YnNjcmliZUFjY2VsZXJvbWV0ZXIiLCJzdG9wQWNjZWxlcm9tZXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7OztBQUNBQyxNQUFBQSxVLGlCQUFBQSxVO0FBQVlDLE1BQUFBLFMsaUJBQUFBLFM7O0FBQ1pDLE1BQUFBLFcsc0JBQUFBLFc7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQVlMLFUsQ0FBWkssTzs7K0JBR0tDLGEsV0FEWkQsT0FBTyxDQUFD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LENBQUcsQ0FGZjtBQUdsQkMsZ0JBQUFBLElBQUksRUFBRSxjQUFVRCxJQUFWLEVBQXFCLENBQUcsQ0FIWjtBQUlsQkUsZ0JBQUFBLFFBQVEsRUFBRSxrQkFBVUYsSUFBVixFQUFxQixDQUFHO0FBSmhCLGVBQXRCLEVBRnFELENBUXJEOztBQUNBSixjQUFBQSxFQUFFLENBQUNrQixxQkFBSCxDQUF5QixVQUFVQyxFQUFWLEVBQW1CQyxFQUFuQixFQUE0QkMsRUFBNUIsRUFBcUM7QUFDMURiLGdCQUFBQSxTQUFRLENBQUNPLEtBQVQsQ0FBZU4sTUFBZixFQUF1QmEsU0FBdkI7QUFDSCxlQUZEO0FBR0g7QUFDSjs7O3lEQUUyQztBQUN4QyxnQkFBSTtBQUFBO0FBQUEsMENBQVd6QixpQkFBWCxJQUFnQztBQUFBO0FBQUEsd0NBQVVDLEVBQTlDLEVBQWtEO0FBQzlDO0FBQ0gsYUFGRCxNQUdLLElBQUk7QUFBQTtBQUFBLDBDQUFXRCxpQkFBWCxJQUFnQztBQUFBO0FBQUEsd0NBQVVFLElBQTlDLEVBQW9EO0FBQ3JEO0FBQ0FDLGNBQUFBLEVBQUUsQ0FBQ3VCLHdCQUFIO0FBQ0gsYUFISSxNQUlBLElBQUk7QUFBQTtBQUFBLDBDQUFXMUIsaUJBQVgsSUFBZ0M7QUFBQTtBQUFBLHdDQUFVSyxJQUE5QyxFQUFvRDtBQUNyRDtBQUNBRixjQUFBQSxFQUFFLENBQUN3QixpQkFBSCxDQUFxQjtBQUNqQnJCLGdCQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBcUIsQ0FBRyxDQURoQjtBQUVqQkMsZ0JBQUFBLElBQUksRUFBRSxjQUFVRCxJQUFWLEVBQXFCLENBQUcsQ0FGYjtBQUdqQkUsZ0JBQUFBLFFBQVEsRUFBRSxrQkFBVUYsSUFBVixFQUFxQixDQUFHO0FBSGpCLGVBQXJCO0FBS0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgR2FtZUNvbmZpZywgUGxhdGZvcm1zIH0gZnJvbSBcIi4uLy4uL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vc2F2ZS9TYXZlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi9EZWJ1Z1V0aWxcIjtcclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJQbGF0Zm9ybVRvb2xzXCIpXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybVRvb2xzIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635b6X56qX5Y+j5YiG6L6o546H77yI6Z2e56Gs5Lu25YiG6L6o546H77yJXHJcbiAgICAgKiDmmK/moLnmja7orr7orqHliIbovqjnjoflkozpgILphY3mqKHlvI/orqHnrpflkI7lvpfliLDnmoRcclxuICAgICAqIOS+i+WmguiuvuiuoeWIhui+qOeOh+aYrzk2MCo3MjDvvIzpgILphY3lrr3luqbvvIzliJnlvpfliLDnmoTnqpflj6PliIbovqjnjoflsLHmmK85NjAq77yf77yM5YW25Lit6auY5bqm5piv5LiN56Gu5a6a55qE77yM5L2G5piv5a695bqm5piv56Gu5a6aXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY3JlZW5TaXplKCk6IGFueSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6IGNjLndpblNpemUud2lkdGgsIGhlaWdodDogY2Mud2luU2l6ZS5oZWlnaHQgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NyZWVuV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NyZWVuSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIGNjLndpblNpemUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X6K6+6K6h5YiG6L6o546H5a696auY5q+U77yMcmF0aW8gPSDlrr0v6auYXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY3JlZW5SYXRpbygpOiBudW1iZXIge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGxldCByYXRpbyA9IGNjLndpblNpemUud2lkdGggLyBjYy53aW5TaXplLmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq6ZyH5Yqo55u45YWzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy/orr7nva7pnIfliqjlip/og73nmoTlvIDlhbNcclxuICAgIHByaXZhdGUgdmlicmF0ZVN3aXRjaDogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgc2V0VmlicmF0ZVN3aXRjaCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlicmF0ZVN3aXRjaCA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIFNhdmVNYW5hZ2VyLkluc3RhbmNlLnNhdmVJdGVtUmVjb3JkKFwidmlicmF0ZVN3aXRjaFwiLCBcIjFcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU2F2ZU1hbmFnZXIuSW5zdGFuY2Uuc2F2ZUl0ZW1SZWNvcmQoXCJ2aWJyYXRlU3dpdGNoXCIsIFwiMFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VmlicmF0ZVN3aXRjaCgpOiBib29sZWFuIHtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuiOt+WPlumch+WKqOW8gOWFs1wiKTtcclxuICAgICAgICBpZiAodGhpcy52aWJyYXRlU3dpdGNoID09IG51bGwgfHwgdGhpcy52aWJyYXRlU3dpdGNoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpYnJhdGVTd2l0Y2ggPSBTYXZlTWFuYWdlci5JbnN0YW5jZS5sb2FkSXRlbVJlY29yZCgndmlicmF0ZVN3aXRjaCcsIFwiMVwiKSA9PSBcIjFcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52aWJyYXRlU3dpdGNoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlicmF0ZVN3aXRjaDtcclxuICAgIH1cclxuXHJcbiAgICAvL+efremch+WKqFxyXG4gICAgcHVibGljIHZpYnJhdGVTaG9ydCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0VmlicmF0ZVN3aXRjaCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuSXNQdWJsaXNoUGxhdGZvcm0gPT0gUGxhdGZvcm1zLkg1KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoR2FtZUNvbmZpZy5Jc1B1Ymxpc2hQbGF0Zm9ybSA9PSBQbGF0Zm9ybXMuVklWTykge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcWcudmlicmF0ZVNob3J0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChHYW1lQ29uZmlnLklzUHVibGlzaFBsYXRmb3JtID09IFBsYXRmb3Jtcy5PUFBPKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBxZy52aWJyYXRlU2hvcnQoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKF9yZXM6IGFueSkgeyB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKF9yZXM6IGFueSkgeyB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChfcmVzOiBhbnkpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpYnJhdGVMb25nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXRWaWJyYXRlU3dpdGNoKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5Jc1B1Ymxpc2hQbGF0Zm9ybSA9PSBQbGF0Zm9ybXMuSDUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChHYW1lQ29uZmlnLklzUHVibGlzaFBsYXRmb3JtID09IFBsYXRmb3Jtcy5WSVZPKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBxZy52aWJyYXRlTG9uZygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoR2FtZUNvbmZpZy5Jc1B1Ymxpc2hQbGF0Zm9ybSA9PSBQbGF0Zm9ybXMuT1BQTykge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcWcudmlicmF0ZUxvbmcoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKF9yZXM6IGFueSkgeyB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKF9yZXM6IGFueSkgeyB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChfcmVzOiBhbnkpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5Yqg6YCf5bqm6K6h55u45YWzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy/ojrflj5bliqDpgJ/luqborqHnmoTlgLxcclxuICAgIHB1YmxpYyBsaXN0ZW5BY2NlbGVyb21ldGVyVmFsdWUoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ6IE9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLklzUHVibGlzaFBsYXRmb3JtID09IFBsYXRmb3Jtcy5INSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEdhbWVDb25maWcuSXNQdWJsaXNoUGxhdGZvcm0gPT0gUGxhdGZvcm1zLlZJVk8pIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHFnLnN1YnNjcmliZUFjY2VsZXJvbWV0ZXIoe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChkYXRhOiB7IHg6IGFueTsgeTogYW55OyB6OiBhbnk7IH0pIHtcclxuICAgICAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhgbGlzdGVuQWNjZWxlcm9tZXRlclZhbHVlIGNhbGxiYWNrLCB4ID0gJHtkYXRhLnh9LCB5ID0gJHtkYXRhLnl9LCB6ID0gJHtkYXRhLnp9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGFyZ2V0LCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEdhbWVDb25maWcuSXNQdWJsaXNoUGxhdGZvcm0gPT0gUGxhdGZvcm1zLk9QUE8pIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHFnLnN0YXJ0QWNjZWxlcm9tZXRlcih7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogXCJ1aVwiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKF9yZXM6IGFueSkgeyB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKF9yZXM6IGFueSkgeyB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChfcmVzOiBhbnkpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHFnLm9uQWNjZWxlcm9tZXRlckNoYW5nZShmdW5jdGlvbiAoX3g6IGFueSwgX3k6IGFueSwgX3o6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BMaXN0ZW5BY2NlbGVyb21ldGVyVmFsdWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuSXNQdWJsaXNoUGxhdGZvcm0gPT0gUGxhdGZvcm1zLkg1KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoR2FtZUNvbmZpZy5Jc1B1Ymxpc2hQbGF0Zm9ybSA9PSBQbGF0Zm9ybXMuVklWTykge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcWcudW5zdWJzY3JpYmVBY2NlbGVyb21ldGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEdhbWVDb25maWcuSXNQdWJsaXNoUGxhdGZvcm0gPT0gUGxhdGZvcm1zLk9QUE8pIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHFnLnN0b3BBY2NlbGVyb21ldGVyKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChfcmVzOiBhbnkpIHsgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChfcmVzOiBhbnkpIHsgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoX3JlczogYW55KSB7IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19