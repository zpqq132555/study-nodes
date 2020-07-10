System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, TimeTools;

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
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "66e57iJqsJPgp2yQOFnbGge", "TimeTools", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TimeTools", TimeTools = (_dec = ccclass("TimeTools"), _dec(_class = /*#__PURE__*/function () {
        function TimeTools() {
          _classCallCheck(this, TimeTools);
        }

        _createClass(TimeTools, [{
          key: "getCurTimeStampSec",

          /**
           * 获取当前时间戳
           * 单位：秒
           */
          value: function getCurTimeStampSec() {
            var myDate = new Date();
            return Math.floor(myDate.getTime() / 1000);
          }
          /**
           * 获取当前时间戳
           * 单位：毫秒
           */

        }, {
          key: "getCurTimeStampMillSec",
          value: function getCurTimeStampMillSec() {
            var myDate = new Date();
            return Math.floor(myDate.getTime());
          }
          /**
           * 判断是否是同一天
           * @param timeStamp 
           */

        }, {
          key: "isSameDay",
          value: function isSameDay(timeStamp) {
            var date1 = new Date(timeStamp);
            var date2 = new Date();

            if (date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate()) {
              return true;
            } else {
              return false;
            }
          }
        }]);

        return TimeTools;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL3Rvb2xzL1RpbWVUb29scy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVGltZVRvb2xzIiwibXlEYXRlIiwiRGF0ZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJ0aW1lU3RhbXAiLCJkYXRlMSIsImRhdGUyIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkQsVSxDQUF0QkMsTztBQUFTQyxNQUFBQSxRLEdBQWFGLFUsQ0FBYkUsUTs7MkJBR0pDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQzs7Ozs7Ozs7QUFFSjs7OzsrQ0FJb0M7QUFDaEMsZ0JBQUlHLE1BQU0sR0FBRyxJQUFJQyxJQUFKLEVBQWI7QUFDQSxtQkFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQU0sQ0FBQ0ksT0FBUCxLQUFtQixJQUE5QixDQUFQO0FBQ0g7QUFFRDs7Ozs7OzttREFJd0M7QUFDcEMsZ0JBQUlKLE1BQU0sR0FBRyxJQUFJQyxJQUFKLEVBQWI7QUFDQSxtQkFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQU0sQ0FBQ0ksT0FBUCxFQUFYLENBQVA7QUFDSDtBQUVEOzs7Ozs7O29DQUlpQkMsUyxFQUE0QjtBQUN6QyxnQkFBSUMsS0FBSyxHQUFHLElBQUlMLElBQUosQ0FBU0ksU0FBVCxDQUFaO0FBQ0EsZ0JBQUlFLEtBQUssR0FBRyxJQUFJTixJQUFKLEVBQVo7O0FBQ0EsZ0JBQUlLLEtBQUssQ0FBQ0UsV0FBTixNQUF1QkQsS0FBSyxDQUFDQyxXQUFOLEVBQXZCLElBQThDRixLQUFLLENBQUNHLFFBQU4sTUFBb0JGLEtBQUssQ0FBQ0UsUUFBTixFQUFsRSxJQUFzRkgsS0FBSyxDQUFDSSxPQUFOLE1BQW1CSCxLQUFLLENBQUNHLE9BQU4sRUFBN0csRUFBOEg7QUFDMUgscUJBQU8sSUFBUDtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFPLEtBQVA7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJUaW1lVG9vbHNcIilcclxuZXhwb3J0IGNsYXNzIFRpbWVUb29scyB7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeaXtumXtOaIs1xyXG4gICAgICog5Y2V5L2N77ya56eSXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDdXJUaW1lU3RhbXBTZWMoKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgbXlEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihteURhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3ml7bpl7TmiLNcclxuICAgICAqIOWNleS9je+8muavq+enklxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q3VyVGltZVN0YW1wTWlsbFNlYygpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBteURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG15RGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5piv5ZCm5piv5ZCM5LiA5aSpXHJcbiAgICAgKiBAcGFyYW0gdGltZVN0YW1wIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTYW1lRGF5KHRpbWVTdGFtcDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGRhdGUxID0gbmV3IERhdGUodGltZVN0YW1wKTtcclxuICAgICAgICB2YXIgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGlmIChkYXRlMS5nZXRGdWxsWWVhcigpID09IGRhdGUyLmdldEZ1bGxZZWFyKCkgJiYgZGF0ZTEuZ2V0TW9udGgoKSA9PSBkYXRlMi5nZXRNb250aCgpICYmIGRhdGUxLmdldERhdGUoKSA9PSBkYXRlMi5nZXREYXRlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==