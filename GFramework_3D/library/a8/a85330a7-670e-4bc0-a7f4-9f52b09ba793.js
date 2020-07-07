System.register(["cc", "code-quality:cr", "./framework/tools/DebugUtil.js", "./Game.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, DebugUtil, Game, _dec, _class, _temp, _crd, ccclass, GameData;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "./framework/tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
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
    }, function (_GameJs) {
      Game = _GameJs.Game;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "a8533CnZw5LwKf0n1Kwm6eT", "GameData", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      /**
       * 游戏的运行数据
       */

      _export("GameData", GameData = (_dec = ccclass("GameData"), _dec(_class = (_temp = /*#__PURE__*/function () {
        function GameData() {
          _classCallCheck(this, GameData);

          this.recordLoaded = false;
        }

        _createClass(GameData, [{
          key: "init",

          /**
           * 初始化游戏数据
           */
          value: function init() {
            //读取存档数据
            this.loadGameRecord(); //写入存档数据

            this.saveGameRecord();
          }
          /***********************************存档数据（永久保存）****************************************/

          /**
           * 读取存档数据
           */

        }, {
          key: "loadGameRecord",
          value: function loadGameRecord() {
            //存档条目
            var loadItems = {
              saveNumber: 100,
              saveString: "gaoang",
              saveBoolean: 1
            };
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).saveManager.loadGameRecord(loadItems, this.onLoadGameRecord, this);
          }
          /**
           * 读取存档成功的回调
           */

        }, {
          key: "onLoadGameRecord",
          value: function onLoadGameRecord(recordData) {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("读取存档成功：", recordData); //过滤存档内容

            this.saveNumber = recordData.saveNumber;

            if (isNaN(this.saveNumber)) {
              this.saveNumber = 0;
            }

            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("saveNumber:", this.saveNumber);
            this.saveString = recordData.saveString;
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("saveString:", this.saveString);
            this.saveBoolean = recordData.saveBoolean == 1 ? true : false;
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("saveBoolean:", this.saveBoolean); //存档读取完成

            this.recordLoaded = true;
          }
          /**
           * 写入存档数据
           */

        }, {
          key: "saveGameRecord",
          value: function saveGameRecord() {
            var saveItems = {
              saveNumber: this.saveNumber,
              saveString: this.saveString,
              saveBoolean: this.saveBoolean == true ? 1 : 0
            };
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).saveManager.saveGameRecord(saveItems);
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("保存游戏存档成功");
          }
        }]);

        return GameData;
      }(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9HYW1lRGF0YS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiRGVidWdVdGlsIiwiR2FtZSIsImNjY2xhc3MiLCJHYW1lRGF0YSIsInJlY29yZExvYWRlZCIsImxvYWRHYW1lUmVjb3JkIiwic2F2ZUdhbWVSZWNvcmQiLCJsb2FkSXRlbXMiLCJzYXZlTnVtYmVyIiwic2F2ZVN0cmluZyIsInNhdmVCb29sZWFuIiwic2F2ZU1hbmFnZXIiLCJvbkxvYWRHYW1lUmVjb3JkIiwicmVjb3JkRGF0YSIsImxvZ0luZm8iLCJpc05hTiIsInNhdmVJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDQUMsTUFBQUEsUyw4QkFBQUEsUzs7QUFDQUMsTUFBQUEsSSxXQUFBQSxJOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFZSCxVLENBQVpHLE87QUFFUjs7OzswQkFJYUMsUSxXQURaRCxPQUFPLENBQUMsVUFBRCxDOzs7O2VBR0dFLFksR0FBd0IsSzs7Ozs7O0FBUy9COzs7aUNBR29CO0FBQ2hCO0FBQ0EsaUJBQUtDLGNBQUwsR0FGZ0IsQ0FHaEI7O0FBQ0EsaUJBQUtDLGNBQUw7QUFDSDtBQUVEOztBQUNBOzs7Ozs7MkNBRytCO0FBQzNCO0FBQ0EsZ0JBQUlDLFNBQVMsR0FBRztBQUNaQyxjQUFBQSxVQUFVLEVBQUUsR0FEQTtBQUVaQyxjQUFBQSxVQUFVLEVBQUUsUUFGQTtBQUdaQyxjQUFBQSxXQUFXLEVBQUU7QUFIRCxhQUFoQjtBQUtBO0FBQUE7QUFBQSw4QkFBS0MsV0FBTCxDQUFpQk4sY0FBakIsQ0FBZ0NFLFNBQWhDLEVBQTJDLEtBQUtLLGdCQUFoRCxFQUFrRSxJQUFsRTtBQUNIO0FBRUQ7Ozs7OzsyQ0FHeUJDLFUsRUFBdUI7QUFDNUM7QUFBQTtBQUFBLHdDQUFVQyxPQUFWLENBQWtCLFNBQWxCLEVBQTZCRCxVQUE3QixFQUQ0QyxDQUU1Qzs7QUFDQSxpQkFBS0wsVUFBTCxHQUFrQkssVUFBVSxDQUFDTCxVQUE3Qjs7QUFDQSxnQkFBSU8sS0FBSyxDQUFDLEtBQUtQLFVBQU4sQ0FBVCxFQUE0QjtBQUN4QixtQkFBS0EsVUFBTCxHQUFrQixDQUFsQjtBQUNIOztBQUNEO0FBQUE7QUFBQSx3Q0FBVU0sT0FBVixDQUFrQixhQUFsQixFQUFpQyxLQUFLTixVQUF0QztBQUVBLGlCQUFLQyxVQUFMLEdBQWtCSSxVQUFVLENBQUNKLFVBQTdCO0FBQ0E7QUFBQTtBQUFBLHdDQUFVSyxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLEtBQUtMLFVBQXRDO0FBRUEsaUJBQUtDLFdBQUwsR0FBbUJHLFVBQVUsQ0FBQ0gsV0FBWCxJQUEwQixDQUExQixHQUE4QixJQUE5QixHQUFxQyxLQUF4RDtBQUNBO0FBQUE7QUFBQSx3Q0FBVUksT0FBVixDQUFrQixjQUFsQixFQUFrQyxLQUFLSixXQUF2QyxFQWI0QyxDQWU1Qzs7QUFDQSxpQkFBS04sWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBRUQ7Ozs7OzsyQ0FHOEI7QUFDMUIsZ0JBQUlZLFNBQVMsR0FBRztBQUNaUixjQUFBQSxVQUFVLEVBQUUsS0FBS0EsVUFETDtBQUVaQyxjQUFBQSxVQUFVLEVBQUUsS0FBS0EsVUFGTDtBQUdaQyxjQUFBQSxXQUFXLEVBQUUsS0FBS0EsV0FBTCxJQUFvQixJQUFwQixHQUEyQixDQUEzQixHQUErQjtBQUhoQyxhQUFoQjtBQUtBO0FBQUE7QUFBQSw4QkFBS0MsV0FBTCxDQUFpQkwsY0FBakIsQ0FBZ0NVLFNBQWhDO0FBQ0E7QUFBQTtBQUFBLHdDQUFVRixPQUFWLENBQWtCLFVBQWxCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IERlYnVnVXRpbCB9IGZyb20gXCIuL2ZyYW1ld29yay90b29scy9EZWJ1Z1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+eahOi/kOihjOaVsOaNrlxyXG4gKi9cclxuQGNjY2xhc3MoXCJHYW1lRGF0YVwiKVxyXG5leHBvcnQgY2xhc3MgR2FtZURhdGEge1xyXG4gICAgLy/lrZjmoaPmmK/lkKbor7vlj5blrozmr5VcclxuICAgIHB1YmxpYyByZWNvcmRMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKuimgeWtmOaho+eahOaVsOaNrioqKioqKioqKioqKioqKioqL1xyXG4gICAgcHVibGljIHNhdmVOdW1iZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzYXZlU3RyaW5nOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2F2ZUJvb2xlYW46IGJvb2xlYW47XHJcbiAgICAvKioqKioqKioqKioqKioqKui/kOihjOaXtuaVsOaNrioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwdWJsaWMgcnVuTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmuLjmiI/mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy/or7vlj5blrZjmoaPmlbDmja5cclxuICAgICAgICB0aGlzLmxvYWRHYW1lUmVjb3JkKCk7XHJcbiAgICAgICAgLy/lhpnlhaXlrZjmoaPmlbDmja5cclxuICAgICAgICB0aGlzLnNhdmVHYW1lUmVjb3JkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5a2Y5qGj5pWw5o2u77yI5rC45LmF5L+d5a2Y77yJKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog6K+75Y+W5a2Y5qGj5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEdhbWVSZWNvcmQoKTogdm9pZCB7XHJcbiAgICAgICAgLy/lrZjmoaPmnaHnm65cclxuICAgICAgICBsZXQgbG9hZEl0ZW1zID0ge1xyXG4gICAgICAgICAgICBzYXZlTnVtYmVyOiAxMDAsXHJcbiAgICAgICAgICAgIHNhdmVTdHJpbmc6IFwiZ2FvYW5nXCIsXHJcbiAgICAgICAgICAgIHNhdmVCb29sZWFuOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgICBHYW1lLnNhdmVNYW5hZ2VyLmxvYWRHYW1lUmVjb3JkKGxvYWRJdGVtcywgdGhpcy5vbkxvYWRHYW1lUmVjb3JkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOivu+WPluWtmOaho+aIkOWKn+eahOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uTG9hZEdhbWVSZWNvcmQocmVjb3JkRGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLor7vlj5blrZjmoaPmiJDlip/vvJpcIiwgcmVjb3JkRGF0YSk7XHJcbiAgICAgICAgLy/ov4fmu6TlrZjmoaPlhoXlrrlcclxuICAgICAgICB0aGlzLnNhdmVOdW1iZXIgPSByZWNvcmREYXRhLnNhdmVOdW1iZXI7XHJcbiAgICAgICAgaWYgKGlzTmFOKHRoaXMuc2F2ZU51bWJlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlTnVtYmVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJzYXZlTnVtYmVyOlwiLCB0aGlzLnNhdmVOdW1iZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNhdmVTdHJpbmcgPSByZWNvcmREYXRhLnNhdmVTdHJpbmc7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJzYXZlU3RyaW5nOlwiLCB0aGlzLnNhdmVTdHJpbmcpO1xyXG5cclxuICAgICAgICB0aGlzLnNhdmVCb29sZWFuID0gcmVjb3JkRGF0YS5zYXZlQm9vbGVhbiA9PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwic2F2ZUJvb2xlYW46XCIsIHRoaXMuc2F2ZUJvb2xlYW4pO1xyXG5cclxuICAgICAgICAvL+WtmOaho+ivu+WPluWujOaIkFxyXG4gICAgICAgIHRoaXMucmVjb3JkTG9hZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWGmeWFpeWtmOaho+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2F2ZUdhbWVSZWNvcmQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNhdmVJdGVtcyA9IHtcclxuICAgICAgICAgICAgc2F2ZU51bWJlcjogdGhpcy5zYXZlTnVtYmVyLFxyXG4gICAgICAgICAgICBzYXZlU3RyaW5nOiB0aGlzLnNhdmVTdHJpbmcsXHJcbiAgICAgICAgICAgIHNhdmVCb29sZWFuOiB0aGlzLnNhdmVCb29sZWFuID09IHRydWUgPyAxIDogMCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIEdhbWUuc2F2ZU1hbmFnZXIuc2F2ZUdhbWVSZWNvcmQoc2F2ZUl0ZW1zKTtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuS/neWtmOa4uOaIj+WtmOaho+aIkOWKn1wiKTtcclxuICAgIH1cclxufVxyXG4iXX0=