System.register(["cc", "code-quality:cr", "../../GameConfig.js", "../tools/DebugUtil.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, GameConfig, Platforms, DebugUtil, _dec, _class, _temp, _crd, ccclass, property, SaveManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatforms(extras) {
    _reporterNs.report("Platforms", "../../GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "../tools/DebugUtil", _context.meta, extras);
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
    }, function (_toolsDebugUtilJs) {
      DebugUtil = _toolsDebugUtilJs.DebugUtil;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "3df31ZRoehA8IRtUtcHL/K7", "SaveManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SaveManager", SaveManager = (_dec = ccclass("SaveManager"), _dec(_class = (_temp = /*#__PURE__*/function () {
        _createClass(SaveManager, null, [{
          key: "Instance",
          //单例模式
          get: function get() {
            if (SaveManager._instance == null) {
              SaveManager._instance = new SaveManager();
            }

            return SaveManager._instance;
          }
        }]);

        //存档缓存
        function SaveManager() {
          _classCallCheck(this, SaveManager);

          this.saveCache = {};
          this.saveCache = {};
        }
        /*****************对外暴露的接口******************/

        /**
         * 保存一条存档
         */


        _createClass(SaveManager, [{
          key: "saveItemRecord",
          value: function saveItemRecord(key, value) {
            this.saveCache[key] = value;
            this.saveItem(key, value);
          }
          /**
           * 读取一条存档
           * @param key 
           * @param defaultValue 
           */

        }, {
          key: "loadItemRecord",
          value: function loadItemRecord(key, defaultValue) {
            var value = null;

            if (this.saveCache[key] != null && this.saveCache[key] != undefined) {
              value = this.saveCache[key];
            } else {
              value = this.loadItem(key);
              this.saveCache[key] = value;
            }

            if (value == null || value == undefined || value == "") {
              value = defaultValue;
            }

            return value;
          }
          /**
           * 保存游戏存档
           * @param saveData
           */

        }, {
          key: "saveGameRecord",
          value: function saveGameRecord(saveData) {
            for (var key in saveData) {
              this.saveItemRecord(key, saveData[key]);
            }
          }
          /**
           * 读取游戏存档
           * @param loadItems 
           * @param callback 
           */

        }, {
          key: "loadGameRecord",
          value: function loadGameRecord(loadItems, callback, target) {
            var result = {};

            for (var key in loadItems) {
              var itemLoaded = this.loadItemRecord(key, loadItems[key]);
              result[key] = itemLoaded;
            }

            callback.call(target, result);
          }
          /**********************各平台的基础API********************/

        }, {
          key: "saveItem",
          value: function saveItem(key, value) {
            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).PublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).H5) {
              //@ts-ignore
              cc.sys.localStorage.setItem(key, value);
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).PublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).VIVO) {
              //@ts-ignore
              qg.setStorage({
                key: key,
                value: value,
                success: function success(data) {
                  (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                    error: Error()
                  }), DebugUtil) : DebugUtil).logInfo("saveRecord success:", data);
                },
                fail: function fail(data, code) {
                  (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                    error: Error()
                  }), DebugUtil) : DebugUtil).logInfo("saveRecord fail:", data, code);
                }
              });
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).PublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).OPPO) {
              //@ts-ignore
              cc.sys.localStorage.setItem(key, value);
            }

            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("saveItem[key:" + key + " value:" + value + "]");
          }
        }, {
          key: "loadItem",
          value: function loadItem(key) {
            var result = "";

            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).PublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).H5) {
              //@ts-ignore
              result = cc.sys.localStorage.getItem(key);
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).PublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).VIVO) {
              //@ts-ignore
              result = qg.getStorageSync({
                key: key
              });
            } else if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).PublishPlatform == (_crd && Platforms === void 0 ? (_reportPossibleCrUseOfPlatforms({
              error: Error()
            }), Platforms) : Platforms).OPPO) {
              //@ts-ignore
              result = cc.sys.localStorage.getItem(key);
            }

            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("loadItem[key:" + key + " value:" + result + "]");

            if (result == null || result == undefined) {
              result = "";
            }

            return result;
          }
        }]);

        return SaveManager;
      }(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvc2F2ZS9TYXZlTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiR2FtZUNvbmZpZyIsIlBsYXRmb3JtcyIsIkRlYnVnVXRpbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNhdmVNYW5hZ2VyIiwiX2luc3RhbmNlIiwic2F2ZUNhY2hlIiwia2V5IiwidmFsdWUiLCJzYXZlSXRlbSIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsImxvYWRJdGVtIiwic2F2ZURhdGEiLCJzYXZlSXRlbVJlY29yZCIsImxvYWRJdGVtcyIsImNhbGxiYWNrIiwidGFyZ2V0IiwicmVzdWx0IiwiaXRlbUxvYWRlZCIsImxvYWRJdGVtUmVjb3JkIiwiY2FsbCIsIlB1Ymxpc2hQbGF0Zm9ybSIsIkg1IiwiY2MiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiVklWTyIsInFnIiwic2V0U3RvcmFnZSIsInN1Y2Nlc3MiLCJkYXRhIiwibG9nSW5mbyIsImZhaWwiLCJjb2RlIiwiT1BQTyIsImdldEl0ZW0iLCJnZXRTdG9yYWdlU3luYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7QUFBWUMsTUFBQUEsUyxpQkFBQUEsUzs7QUFDWkMsTUFBQUEsUyxxQkFBQUEsUzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7OztBQUVKOzhCQUUwQztBQUN0QyxnQkFBSUUsV0FBVyxDQUFDQyxTQUFaLElBQXlCLElBQTdCLEVBQW1DO0FBQy9CRCxjQUFBQSxXQUFXLENBQUNDLFNBQVosR0FBd0IsSUFBSUQsV0FB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SVAsU0FBaEMsRUFBMkM7QUFDdkNPLGNBQUFBLE1BQU0sR0FBRyxFQUFUO0FBQ0g7O0FBQ0QsbUJBQU9BLE1BQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgR2FtZUNvbmZpZywgUGxhdGZvcm1zIH0gZnJvbSBcIi4uLy4uL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgRGVidWdVdGlsIH0gZnJvbSBcIi4uL3Rvb2xzL0RlYnVnVXRpbFwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJTYXZlTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgU2F2ZU1hbmFnZXIge1xyXG4gICAgLy/ljZXkvovmqKHlvI9cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU2F2ZU1hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBTYXZlTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKFNhdmVNYW5hZ2VyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFNhdmVNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBTYXZlTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2F2ZU1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZUNhY2hlID0ge307ICAgICAvL+WtmOaho+e8k+WtmFxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNhdmVDYWNoZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKuWvueWkluaatOmcsueahOaOpeWPoyoqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y5LiA5p2h5a2Y5qGjXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlSXRlbVJlY29yZChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2F2ZUNhY2hlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNhdmVJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDor7vlj5bkuIDmnaHlrZjmoaNcclxuICAgICAqIEBwYXJhbSBrZXkgXHJcbiAgICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEl0ZW1SZWNvcmQoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuc2F2ZUNhY2hlW2tleV0gIT0gbnVsbCAmJiB0aGlzLnNhdmVDYWNoZVtrZXldICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc2F2ZUNhY2hlW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMubG9hZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlQ2FjaGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjmuLjmiI/lrZjmoaNcclxuICAgICAqIEBwYXJhbSBzYXZlRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2F2ZUdhbWVSZWNvcmQoc2F2ZURhdGE6IGFueSkge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzYXZlRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVJdGVtUmVjb3JkKGtleSwgc2F2ZURhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDor7vlj5bmuLjmiI/lrZjmoaNcclxuICAgICAqIEBwYXJhbSBsb2FkSXRlbXMgXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkR2FtZVJlY29yZChsb2FkSXRlbXM6IGFueSwgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gbG9hZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTG9hZGVkID0gdGhpcy5sb2FkSXRlbVJlY29yZChrZXksIGxvYWRJdGVtc1trZXldKTtcclxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBpdGVtTG9hZGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjay5jYWxsKHRhcmdldCwgcmVzdWx0KTtcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioq5ZCE5bmz5Y+w55qE5Z+656GAQVBJKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcml2YXRlIHNhdmVJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuUHVibGlzaFBsYXRmb3JtID09IFBsYXRmb3Jtcy5INSkge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChHYW1lQ29uZmlnLlB1Ymxpc2hQbGF0Zm9ybSA9PSBQbGF0Zm9ybXMuVklWTykge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcWcuc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcInNhdmVSZWNvcmQgc3VjY2VzczpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGRhdGE6IGFueSwgY29kZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJzYXZlUmVjb3JkIGZhaWw6XCIsIGRhdGEsIGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoR2FtZUNvbmZpZy5QdWJsaXNoUGxhdGZvcm0gPT0gUGxhdGZvcm1zLk9QUE8pIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJzYXZlSXRlbVtrZXk6XCIgKyBrZXkgKyBcIiB2YWx1ZTpcIiArIHZhbHVlICsgXCJdXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuUHVibGlzaFBsYXRmb3JtID09IFBsYXRmb3Jtcy5INSkge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzdWx0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEdhbWVDb25maWcuUHVibGlzaFBsYXRmb3JtID09IFBsYXRmb3Jtcy5WSVZPKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXN1bHQgPSBxZy5nZXRTdG9yYWdlU3luYyh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEdhbWVDb25maWcuUHVibGlzaFBsYXRmb3JtID09IFBsYXRmb3Jtcy5PUFBPKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXN1bHQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJsb2FkSXRlbVtrZXk6XCIgKyBrZXkgKyBcIiB2YWx1ZTpcIiArIHJlc3VsdCArIFwiXVwiKTtcclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgcmVzdWx0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==