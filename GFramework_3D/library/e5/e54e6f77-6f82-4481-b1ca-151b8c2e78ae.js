System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _lerp, _decorator, _dec, _class, _crd, ccclass, property, MathTools;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _lerp = _cc.lerp;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e54e693b4JEgbHKFRuMLniu", "MathTools", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MathTools", MathTools = (_dec = ccclass("MathTools"), _dec(_class = /*#__PURE__*/function () {
        function MathTools() {
          _classCallCheck(this, MathTools);
        }

        _createClass(MathTools, [{
          key: "randomInt",

          /**
           * 随机一个整数
           * 取值范围 [min,max]
           * @param min 
           * @param max 
           */
          value: function randomInt(min, max) {
            var randNum = Math.random();
            randNum = randNum * (max - min + 1) + min;
            return Math.floor(randNum);
          }
          /**
           * 随机一个浮点数
           * 取值范围 [min,max)
           * @param min 
           * @param max 
           */

        }, {
          key: "randomFloat",
          value: function randomFloat(min, max) {
            var randNum = Math.random();
            randNum = randNum * (max - min) + min;
            return randNum;
          }
          /**
           * 区间限制
           * @param value 
           * @param min 
           * @param max 
           */

        }, {
          key: "clamp",
          value: function clamp(value, min, max) {
            var result = value;

            if (value < min) {
              result = min;
            } else if (value > max) {
              result = max;
            }

            return result;
          }
          /**
           * 取最小整数
           * @param value 
           */

        }, {
          key: "floor",
          value: function floor(value) {
            return Math.floor(value);
          }
          /**
           * 绝对值
           * @param value 
           */

        }, {
          key: "abs",
          value: function abs(value) {
            return Math.abs(value);
          }
          /**
           * 舍弃负数
           * 负数归0
           * @param value 
           */

        }, {
          key: "positiveOnly",
          value: function positiveOnly(value) {
            if (value < 0) {
              return 0;
            } else {
              return value;
            }
          }
          /**
           * 近似值
           * @param value 
           * @param targetValue 
           */

        }, {
          key: "isApproximate",
          value: function isApproximate(value, targetValue) {
            if (Math.abs(value - targetValue) < 0.1) {
              return true;
            }

            return false;
          }
          /**
           * 插值算法
           * @param from 
           * @param to 
           * @param smooth 
           */

        }, {
          key: "lerp",
          value: function lerp(from, to, smooth) {
            return _lerp(from, to, smooth);
          }
          /**
           * 计算平均值
           * @param valueArray 
           */

        }, {
          key: "average",
          value: function average(valueArray) {
            var amount = 0;
            var nums = 0;

            for (var i = 0; i < valueArray.length; i++) {
              if (!isNaN(valueArray[i]) && valueArray[i] != null && valueArray[i] != undefined) {
                amount += valueArray[i];
                nums++;
              }
            }

            return amount / nums;
          }
        }]);

        return MathTools;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvdG9vbHMvTWF0aFRvb2xzLnRzIl0sIm5hbWVzIjpbImxlcnAiLCJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWF0aFRvb2xzIiwibWluIiwibWF4IiwicmFuZE51bSIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInZhbHVlIiwicmVzdWx0IiwiYWJzIiwidGFyZ2V0VmFsdWUiLCJmcm9tIiwidG8iLCJzbW9vdGgiLCJ2YWx1ZUFycmF5IiwiYW1vdW50IiwibnVtcyIsImkiLCJsZW5ndGgiLCJpc05hTiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxLLE9BQUFBLEk7QUFBTUMsTUFBQUEsVSxPQUFBQSxVOzs7Ozs7QUFDUEMsTUFBQUEsTyxHQUFzQkQsVSxDQUF0QkMsTztBQUFTQyxNQUFBQSxRLEdBQWFGLFUsQ0FBYkUsUTs7MkJBR0pDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQzs7Ozs7Ozs7QUFFSjs7Ozs7O29DQU1pQkcsRyxFQUFhQyxHLEVBQXFCO0FBQy9DLGdCQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFkO0FBQ0FGLFlBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJRCxHQUFHLEdBQUdELEdBQU4sR0FBWSxDQUFoQixDQUFQLEdBQTRCQSxHQUF0QztBQUNBLG1CQUFPRyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsT0FBWCxDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7O3NDQU1tQkYsRyxFQUFhQyxHLEVBQXFCO0FBQ2pELGdCQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFkO0FBQ0FGLFlBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJRCxHQUFHLEdBQUdELEdBQVYsQ0FBUCxHQUF3QkEsR0FBbEM7QUFDQSxtQkFBT0UsT0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OztnQ0FNYUksSyxFQUFlTixHLEVBQWFDLEcsRUFBcUI7QUFDMUQsZ0JBQUlNLE1BQU0sR0FBR0QsS0FBYjs7QUFDQSxnQkFBSUEsS0FBSyxHQUFHTixHQUFaLEVBQWlCO0FBQ2JPLGNBQUFBLE1BQU0sR0FBR1AsR0FBVDtBQUNILGFBRkQsTUFFTyxJQUFJTSxLQUFLLEdBQUdMLEdBQVosRUFBaUI7QUFDcEJNLGNBQUFBLE1BQU0sR0FBR04sR0FBVDtBQUNIOztBQUNELG1CQUFPTSxNQUFQO0FBQ0g7QUFFRDs7Ozs7OztnQ0FJYUQsSyxFQUF1QjtBQUNoQyxtQkFBT0gsSUFBSSxDQUFDRSxLQUFMLENBQVdDLEtBQVgsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OEJBSVdBLEssRUFBdUI7QUFDOUIsbUJBQU9ILElBQUksQ0FBQ0ssR0FBTCxDQUFTRixLQUFULENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozt1Q0FLb0JBLEssRUFBdUI7QUFDdkMsZ0JBQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxxQkFBTyxDQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQU9BLEtBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7O3dDQUtxQkEsSyxFQUFlRyxXLEVBQXFCO0FBQ3JELGdCQUFJTixJQUFJLENBQUNLLEdBQUwsQ0FBU0YsS0FBSyxHQUFHRyxXQUFqQixJQUFnQyxHQUFwQyxFQUF5QztBQUNyQyxxQkFBTyxJQUFQO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OzsrQkFNWUMsSSxFQUFjQyxFLEVBQVlDLE0sRUFBd0I7QUFDMUQsbUJBQU9qQixLQUFJLENBQUNlLElBQUQsRUFBT0MsRUFBUCxFQUFXQyxNQUFYLENBQVg7QUFDSDtBQUVEOzs7Ozs7O2tDQUlRQyxVLEVBQThCO0FBQ2xDLGdCQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLGdCQUFJQyxJQUFJLEdBQUcsQ0FBWDs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxVQUFVLENBQUNJLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLGtCQUFJLENBQUNFLEtBQUssQ0FBQ0wsVUFBVSxDQUFDRyxDQUFELENBQVgsQ0FBTixJQUF5QkgsVUFBVSxDQUFDRyxDQUFELENBQVYsSUFBaUIsSUFBMUMsSUFBa0RILFVBQVUsQ0FBQ0csQ0FBRCxDQUFWLElBQWlCRyxTQUF2RSxFQUFrRjtBQUM5RUwsZ0JBQUFBLE1BQU0sSUFBSUQsVUFBVSxDQUFDRyxDQUFELENBQXBCO0FBQ0FELGdCQUFBQSxJQUFJO0FBQ1A7QUFDSjs7QUFDRCxtQkFBT0QsTUFBTSxHQUFHQyxJQUFoQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGVycCwgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJNYXRoVG9vbHNcIilcclxuZXhwb3J0IGNsYXNzIE1hdGhUb29scyB7XHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuS4gOS4quaVtOaVsFxyXG4gICAgICog5Y+W5YC86IyD5Zu0IFttaW4sbWF4XVxyXG4gICAgICogQHBhcmFtIG1pbiBcclxuICAgICAqIEBwYXJhbSBtYXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcmFuZE51bSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgcmFuZE51bSA9IHJhbmROdW0gKiAobWF4IC0gbWluICsgMSkgKyBtaW47XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZE51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrkuIDkuKrmta7ngrnmlbBcclxuICAgICAqIOWPluWAvOiMg+WbtCBbbWluLG1heClcclxuICAgICAqIEBwYXJhbSBtaW4gXHJcbiAgICAgKiBAcGFyYW0gbWF4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmFuZG9tRmxvYXQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcmFuZE51bSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgcmFuZE51bSA9IHJhbmROdW0gKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgICAgICByZXR1cm4gcmFuZE51bTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMuumXtOmZkOWItlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAgICogQHBhcmFtIG1pbiBcclxuICAgICAqIEBwYXJhbSBtYXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgPCBtaW4pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbWluO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+W5pyA5bCP5pW05pWwXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmbG9vcih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu53lr7nlgLxcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFicyh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnModmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IiN5byD6LSf5pWwXHJcbiAgICAgKiDotJ/mlbDlvZIwXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3NpdGl2ZU9ubHkodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+R5Ly85YC8XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0VmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0FwcHJveGltYXRlKHZhbHVlOiBudW1iZXIsIHRhcmdldFZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoTWF0aC5hYnModmFsdWUgLSB0YXJnZXRWYWx1ZSkgPCAwLjEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaPkuWAvOeul+azlVxyXG4gICAgICogQHBhcmFtIGZyb20gXHJcbiAgICAgKiBAcGFyYW0gdG8gXHJcbiAgICAgKiBAcGFyYW0gc21vb3RoIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGVycChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIHNtb290aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbGVycChmcm9tLCB0bywgc21vb3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+W5s+Wdh+WAvFxyXG4gICAgICogQHBhcmFtIHZhbHVlQXJyYXkgXHJcbiAgICAgKi9cclxuICAgIGF2ZXJhZ2UodmFsdWVBcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBhbW91bnQgPSAwO1xyXG4gICAgICAgIHZhciBudW1zID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZUFycmF5W2ldKSAmJiB2YWx1ZUFycmF5W2ldICE9IG51bGwgJiYgdmFsdWVBcnJheVtpXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudCArPSB2YWx1ZUFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgbnVtcysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbW91bnQgLyBudW1zO1xyXG4gICAgfVxyXG5cclxufSJdfQ==