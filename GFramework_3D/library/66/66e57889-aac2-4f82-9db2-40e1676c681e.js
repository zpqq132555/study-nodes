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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvdG9vbHMvVGltZVRvb2xzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUaW1lVG9vbHMiLCJteURhdGUiLCJEYXRlIiwiTWF0aCIsImZsb29yIiwiZ2V0VGltZSIsInRpbWVTdGFtcCIsImRhdGUxIiwiZGF0ZTIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRCxVLENBQXRCQyxPO0FBQVNDLE1BQUFBLFEsR0FBYUYsVSxDQUFiRSxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7OztBQUVKOzs7OytDQUlvQztBQUNoQyxnQkFBSUcsTUFBTSxHQUFHLElBQUlDLElBQUosRUFBYjtBQUNBLG1CQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBTSxDQUFDSSxPQUFQLEtBQW1CLElBQTlCLENBQVA7QUFDSDtBQUVEOzs7Ozs7O21EQUl3QztBQUNwQyxnQkFBSUosTUFBTSxHQUFHLElBQUlDLElBQUosRUFBYjtBQUNBLG1CQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBTSxDQUFDSSxPQUFQLEVBQVgsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7b0NBSWlCQyxTLEVBQTRCO0FBQ3pDLGdCQUFJQyxLQUFLLEdBQUcsSUFBSUwsSUFBSixDQUFTSSxTQUFULENBQVo7QUFDQSxnQkFBSUUsS0FBSyxHQUFHLElBQUlOLElBQUosRUFBWjs7QUFDQSxnQkFBSUssS0FBSyxDQUFDRSxXQUFOLE1BQXVCRCxLQUFLLENBQUNDLFdBQU4sRUFBdkIsSUFBOENGLEtBQUssQ0FBQ0csUUFBTixNQUFvQkYsS0FBSyxDQUFDRSxRQUFOLEVBQWxFLElBQXNGSCxLQUFLLENBQUNJLE9BQU4sTUFBbUJILEtBQUssQ0FBQ0csT0FBTixFQUE3RyxFQUE4SDtBQUMxSCxxQkFBTyxJQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQU8sS0FBUDtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlRpbWVUb29sc1wiKVxyXG5leHBvcnQgY2xhc3MgVGltZVRvb2xzIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN5pe26Ze05oizXHJcbiAgICAgKiDljZXkvY3vvJrnp5JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEN1clRpbWVTdGFtcFNlYygpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBteURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG15RGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeaXtumXtOaIs1xyXG4gICAgICog5Y2V5L2N77ya5q+r56eSXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDdXJUaW1lU3RhbXBNaWxsU2VjKCk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIG15RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobXlEYXRlLmdldFRpbWUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKbmmK/lkIzkuIDlpKlcclxuICAgICAqIEBwYXJhbSB0aW1lU3RhbXAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NhbWVEYXkodGltZVN0YW1wOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZSh0aW1lU3RhbXApO1xyXG4gICAgICAgIHZhciBkYXRlMiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgaWYgKGRhdGUxLmdldEZ1bGxZZWFyKCkgPT0gZGF0ZTIuZ2V0RnVsbFllYXIoKSAmJiBkYXRlMS5nZXRNb250aCgpID09IGRhdGUyLmdldE1vbnRoKCkgJiYgZGF0ZTEuZ2V0RGF0ZSgpID09IGRhdGUyLmdldERhdGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19