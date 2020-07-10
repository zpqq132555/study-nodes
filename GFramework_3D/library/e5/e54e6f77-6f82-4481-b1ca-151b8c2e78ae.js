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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL3Rvb2xzL01hdGhUb29scy50cyJdLCJuYW1lcyI6WyJsZXJwIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1hdGhUb29scyIsIm1pbiIsIm1heCIsInJhbmROdW0iLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJ2YWx1ZSIsInJlc3VsdCIsImFicyIsInRhcmdldFZhbHVlIiwiZnJvbSIsInRvIiwic21vb3RoIiwidmFsdWVBcnJheSIsImFtb3VudCIsIm51bXMiLCJpIiwibGVuZ3RoIiwiaXNOYU4iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsSyxPQUFBQSxJO0FBQU1DLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ1BDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7O0FBRUo7Ozs7OztvQ0FNaUJHLEcsRUFBYUMsRyxFQUFxQjtBQUMvQyxnQkFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsRUFBZDtBQUNBRixZQUFBQSxPQUFPLEdBQUdBLE9BQU8sSUFBSUQsR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBaEIsQ0FBUCxHQUE0QkEsR0FBdEM7QUFDQSxtQkFBT0csSUFBSSxDQUFDRSxLQUFMLENBQVdILE9BQVgsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OztzQ0FNbUJGLEcsRUFBYUMsRyxFQUFxQjtBQUNqRCxnQkFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsRUFBZDtBQUNBRixZQUFBQSxPQUFPLEdBQUdBLE9BQU8sSUFBSUQsR0FBRyxHQUFHRCxHQUFWLENBQVAsR0FBd0JBLEdBQWxDO0FBQ0EsbUJBQU9FLE9BQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7Z0NBTWFJLEssRUFBZU4sRyxFQUFhQyxHLEVBQXFCO0FBQzFELGdCQUFJTSxNQUFNLEdBQUdELEtBQWI7O0FBQ0EsZ0JBQUlBLEtBQUssR0FBR04sR0FBWixFQUFpQjtBQUNiTyxjQUFBQSxNQUFNLEdBQUdQLEdBQVQ7QUFDSCxhQUZELE1BRU8sSUFBSU0sS0FBSyxHQUFHTCxHQUFaLEVBQWlCO0FBQ3BCTSxjQUFBQSxNQUFNLEdBQUdOLEdBQVQ7QUFDSDs7QUFDRCxtQkFBT00sTUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Z0NBSWFELEssRUFBdUI7QUFDaEMsbUJBQU9ILElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxLQUFYLENBQVA7QUFDSDtBQUVEOzs7Ozs7OzhCQUlXQSxLLEVBQXVCO0FBQzlCLG1CQUFPSCxJQUFJLENBQUNLLEdBQUwsQ0FBU0YsS0FBVCxDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7dUNBS29CQSxLLEVBQXVCO0FBQ3ZDLGdCQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1gscUJBQU8sQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFPQSxLQUFQO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7Ozt3Q0FLcUJBLEssRUFBZUcsVyxFQUFxQjtBQUNyRCxnQkFBSU4sSUFBSSxDQUFDSyxHQUFMLENBQVNGLEtBQUssR0FBR0csV0FBakIsSUFBZ0MsR0FBcEMsRUFBeUM7QUFDckMscUJBQU8sSUFBUDtBQUNIOztBQUNELG1CQUFPLEtBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7K0JBTVlDLEksRUFBY0MsRSxFQUFZQyxNLEVBQXdCO0FBQzFELG1CQUFPakIsS0FBSSxDQUFDZSxJQUFELEVBQU9DLEVBQVAsRUFBV0MsTUFBWCxDQUFYO0FBQ0g7QUFFRDs7Ozs7OztrQ0FJUUMsVSxFQUE4QjtBQUNsQyxnQkFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxnQkFBSUMsSUFBSSxHQUFHLENBQVg7O0FBQ0EsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsVUFBVSxDQUFDSSxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxrQkFBSSxDQUFDRSxLQUFLLENBQUNMLFVBQVUsQ0FBQ0csQ0FBRCxDQUFYLENBQU4sSUFBeUJILFVBQVUsQ0FBQ0csQ0FBRCxDQUFWLElBQWlCLElBQTFDLElBQWtESCxVQUFVLENBQUNHLENBQUQsQ0FBVixJQUFpQkcsU0FBdkUsRUFBa0Y7QUFDOUVMLGdCQUFBQSxNQUFNLElBQUlELFVBQVUsQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBRCxnQkFBQUEsSUFBSTtBQUNQO0FBQ0o7O0FBQ0QsbUJBQU9ELE1BQU0sR0FBR0MsSUFBaEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxlcnAsIF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiTWF0aFRvb2xzXCIpXHJcbmV4cG9ydCBjbGFzcyBNYXRoVG9vbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrkuIDkuKrmlbTmlbBcclxuICAgICAqIOWPluWAvOiMg+WbtCBbbWluLG1heF1cclxuICAgICAqIEBwYXJhbSBtaW4gXHJcbiAgICAgKiBAcGFyYW0gbWF4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHJhbmROdW0gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHJhbmROdW0gPSByYW5kTnVtICogKG1heCAtIG1pbiArIDEpICsgbWluO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmROdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5py65LiA5Liq5rWu54K55pWwXHJcbiAgICAgKiDlj5blgLzojIPlm7QgW21pbixtYXgpXHJcbiAgICAgKiBAcGFyYW0gbWluIFxyXG4gICAgICogQHBhcmFtIG1heCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJhbmRvbUZsb2F0KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHJhbmROdW0gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHJhbmROdW0gPSByYW5kTnVtICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICAgICAgcmV0dXJuIHJhbmROdW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljLrpl7TpmZDliLZcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBcclxuICAgICAqIEBwYXJhbSBtaW4gXHJcbiAgICAgKiBAcGFyYW0gbWF4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG1pbjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPluacgOWwj+aVtOaVsFxyXG4gICAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmxvb3IodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57ud5a+55YC8XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnModmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiIjeW8g+i0n+aVsFxyXG4gICAgICog6LSf5pWw5b2SMFxyXG4gICAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zaXRpdmVPbmx5KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/keS8vOWAvFxyXG4gICAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAgICogQHBhcmFtIHRhcmdldFZhbHVlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNBcHByb3hpbWF0ZSh2YWx1ZTogbnVtYmVyLCB0YXJnZXRWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHZhbHVlIC0gdGFyZ2V0VmFsdWUpIDwgMC4xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5LlgLznrpfms5VcclxuICAgICAqIEBwYXJhbSBmcm9tIFxyXG4gICAgICogQHBhcmFtIHRvIFxyXG4gICAgICogQHBhcmFtIHNtb290aCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxlcnAoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBzbW9vdGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGxlcnAoZnJvbSwgdG8sIHNtb290aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpflubPlnYflgLxcclxuICAgICAqIEBwYXJhbSB2YWx1ZUFycmF5IFxyXG4gICAgICovXHJcbiAgICBhdmVyYWdlKHZhbHVlQXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgYW1vdW50ID0gMDtcclxuICAgICAgICB2YXIgbnVtcyA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4odmFsdWVBcnJheVtpXSkgJiYgdmFsdWVBcnJheVtpXSAhPSBudWxsICYmIHZhbHVlQXJyYXlbaV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQgKz0gdmFsdWVBcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIG51bXMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW1vdW50IC8gbnVtcztcclxuICAgIH1cclxuXHJcbn0iXX0=