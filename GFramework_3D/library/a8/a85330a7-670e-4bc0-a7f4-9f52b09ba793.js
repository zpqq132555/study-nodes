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
              saveString: "oldPoint",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvR2FtZURhdGEudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkRlYnVnVXRpbCIsIkdhbWUiLCJjY2NsYXNzIiwiR2FtZURhdGEiLCJyZWNvcmRMb2FkZWQiLCJsb2FkR2FtZVJlY29yZCIsInNhdmVHYW1lUmVjb3JkIiwibG9hZEl0ZW1zIiwic2F2ZU51bWJlciIsInNhdmVTdHJpbmciLCJzYXZlQm9vbGVhbiIsInNhdmVNYW5hZ2VyIiwib25Mb2FkR2FtZVJlY29yZCIsInJlY29yZERhdGEiLCJsb2dJbmZvIiwiaXNOYU4iLCJzYXZlSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ0FDLE1BQUFBLFMsOEJBQUFBLFM7O0FBQ0FDLE1BQUFBLEksV0FBQUEsSTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBWUgsVSxDQUFaRyxPO0FBRVI7Ozs7MEJBSWFDLFEsV0FEWkQsT0FBTyxDQUFDLFVBQUQsQzs7OztlQUdHRSxZLEdBQXdCLEs7Ozs7OztBQVMvQjs7O2lDQUdvQjtBQUNoQjtBQUNBLGlCQUFLQyxjQUFMLEdBRmdCLENBR2hCOztBQUNBLGlCQUFLQyxjQUFMO0FBQ0g7QUFFRDs7QUFDQTs7Ozs7OzJDQUcrQjtBQUMzQjtBQUNBLGdCQUFJQyxTQUFTLEdBQUc7QUFDWkMsY0FBQUEsVUFBVSxFQUFFLEdBREE7QUFFWkMsY0FBQUEsVUFBVSxFQUFFLFVBRkE7QUFHWkMsY0FBQUEsV0FBVyxFQUFFO0FBSEQsYUFBaEI7QUFLQTtBQUFBO0FBQUEsOEJBQUtDLFdBQUwsQ0FBaUJOLGNBQWpCLENBQWdDRSxTQUFoQyxFQUEyQyxLQUFLSyxnQkFBaEQsRUFBa0UsSUFBbEU7QUFDSDtBQUVEOzs7Ozs7MkNBR3lCQyxVLEVBQWtCO0FBQ3ZDO0FBQUE7QUFBQSx3Q0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QkQsVUFBN0IsRUFEdUMsQ0FFdkM7O0FBQ0EsaUJBQUtMLFVBQUwsR0FBa0JLLFVBQVUsQ0FBQ0wsVUFBN0I7O0FBQ0EsZ0JBQUlPLEtBQUssQ0FBQyxLQUFLUCxVQUFOLENBQVQsRUFBNEI7QUFDeEIsbUJBQUtBLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUFDRDtBQUFBO0FBQUEsd0NBQVVNLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsS0FBS04sVUFBdEM7QUFFQSxpQkFBS0MsVUFBTCxHQUFrQkksVUFBVSxDQUFDSixVQUE3QjtBQUNBO0FBQUE7QUFBQSx3Q0FBVUssT0FBVixDQUFrQixhQUFsQixFQUFpQyxLQUFLTCxVQUF0QztBQUVBLGlCQUFLQyxXQUFMLEdBQW1CRyxVQUFVLENBQUNILFdBQVgsSUFBMEIsQ0FBMUIsR0FBOEIsSUFBOUIsR0FBcUMsS0FBeEQ7QUFDQTtBQUFBO0FBQUEsd0NBQVVJLE9BQVYsQ0FBa0IsY0FBbEIsRUFBa0MsS0FBS0osV0FBdkMsRUFidUMsQ0FldkM7O0FBQ0EsaUJBQUtOLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUVEOzs7Ozs7MkNBRzhCO0FBQzFCLGdCQUFJWSxTQUFTLEdBQUc7QUFDWlIsY0FBQUEsVUFBVSxFQUFFLEtBQUtBLFVBREw7QUFFWkMsY0FBQUEsVUFBVSxFQUFFLEtBQUtBLFVBRkw7QUFHWkMsY0FBQUEsV0FBVyxFQUFFLEtBQUtBLFdBQUwsSUFBb0IsSUFBcEIsR0FBMkIsQ0FBM0IsR0FBK0I7QUFIaEMsYUFBaEI7QUFLQTtBQUFBO0FBQUEsOEJBQUtDLFdBQUwsQ0FBaUJMLGNBQWpCLENBQWdDVSxTQUFoQztBQUNBO0FBQUE7QUFBQSx3Q0FBVUYsT0FBVixDQUFrQixVQUFsQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi9mcmFtZXdvcmsvdG9vbHMvRGVidWdVdGlsXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/nmoTov5DooYzmlbDmja5cclxuICovXHJcbkBjY2NsYXNzKFwiR2FtZURhdGFcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVEYXRhIHtcclxuICAgIC8v5a2Y5qGj5piv5ZCm6K+75Y+W5a6M5q+VXHJcbiAgICBwdWJsaWMgcmVjb3JkTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKiropoHlrZjmoaPnmoTmlbDmja4qKioqKioqKioqKioqKioqKi9cclxuICAgIHB1YmxpYyBzYXZlTnVtYmVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2F2ZVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHNhdmVCb29sZWFuOiBib29sZWFuO1xyXG4gICAgLyoqKioqKioqKioqKioqKirov5DooYzml7bmlbDmja4qKioqKioqKioqKioqKioqKioqL1xyXG4gICAgcHVibGljIHJ1bk51bWJlcjogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5ri45oiP5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8v6K+75Y+W5a2Y5qGj5pWw5o2uXHJcbiAgICAgICAgdGhpcy5sb2FkR2FtZVJlY29yZCgpO1xyXG4gICAgICAgIC8v5YaZ5YWl5a2Y5qGj5pWw5o2uXHJcbiAgICAgICAgdGhpcy5zYXZlR2FtZVJlY29yZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWtmOaho+aVsOaNru+8iOawuOS5heS/neWtmO+8iSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKipcclxuICAgICAqIOivu+WPluWtmOaho+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRHYW1lUmVjb3JkKCk6IHZvaWQge1xyXG4gICAgICAgIC8v5a2Y5qGj5p2h55uuXHJcbiAgICAgICAgbGV0IGxvYWRJdGVtcyA9IHtcclxuICAgICAgICAgICAgc2F2ZU51bWJlcjogMTAwLFxyXG4gICAgICAgICAgICBzYXZlU3RyaW5nOiBcIm9sZFBvaW50XCIsXHJcbiAgICAgICAgICAgIHNhdmVCb29sZWFuOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgICBHYW1lLnNhdmVNYW5hZ2VyLmxvYWRHYW1lUmVjb3JkKGxvYWRJdGVtcywgdGhpcy5vbkxvYWRHYW1lUmVjb3JkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOivu+WPluWtmOaho+aIkOWKn+eahOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uTG9hZEdhbWVSZWNvcmQocmVjb3JkRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi6K+75Y+W5a2Y5qGj5oiQ5Yqf77yaXCIsIHJlY29yZERhdGEpO1xyXG4gICAgICAgIC8v6L+H5ruk5a2Y5qGj5YaF5a65XHJcbiAgICAgICAgdGhpcy5zYXZlTnVtYmVyID0gcmVjb3JkRGF0YS5zYXZlTnVtYmVyO1xyXG4gICAgICAgIGlmIChpc05hTih0aGlzLnNhdmVOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZU51bWJlciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwic2F2ZU51bWJlcjpcIiwgdGhpcy5zYXZlTnVtYmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlU3RyaW5nID0gcmVjb3JkRGF0YS5zYXZlU3RyaW5nO1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwic2F2ZVN0cmluZzpcIiwgdGhpcy5zYXZlU3RyaW5nKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlQm9vbGVhbiA9IHJlY29yZERhdGEuc2F2ZUJvb2xlYW4gPT0gMSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcInNhdmVCb29sZWFuOlwiLCB0aGlzLnNhdmVCb29sZWFuKTtcclxuXHJcbiAgICAgICAgLy/lrZjmoaPor7vlj5blrozmiJBcclxuICAgICAgICB0aGlzLnJlY29yZExvYWRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhpnlhaXlrZjmoaPmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNhdmVHYW1lUmVjb3JkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzYXZlSXRlbXMgPSB7XHJcbiAgICAgICAgICAgIHNhdmVOdW1iZXI6IHRoaXMuc2F2ZU51bWJlcixcclxuICAgICAgICAgICAgc2F2ZVN0cmluZzogdGhpcy5zYXZlU3RyaW5nLFxyXG4gICAgICAgICAgICBzYXZlQm9vbGVhbjogdGhpcy5zYXZlQm9vbGVhbiA9PSB0cnVlID8gMSA6IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBHYW1lLnNhdmVNYW5hZ2VyLnNhdmVHYW1lUmVjb3JkKHNhdmVJdGVtcyk7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLkv53lrZjmuLjmiI/lrZjmoaPmiJDlip9cIik7XHJcbiAgICB9XHJcbn1cclxuIl19