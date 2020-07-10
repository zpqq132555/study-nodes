System.register(["cc", "code-quality:cr", "./MathTools.js", "./PlatformTools.js", "./TimeTools.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, MathTools, PlatformTools, TimeTools, _dec, _class, _class2, _temp, _crd, ccclass, Tools;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfMathTools(extras) {
    _reporterNs.report("MathTools", "./MathTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatformTools(extras) {
    _reporterNs.report("PlatformTools", "./PlatformTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeTools(extras) {
    _reporterNs.report("TimeTools", "./TimeTools", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MathToolsJs) {
      MathTools = _MathToolsJs.MathTools;
    }, function (_PlatformToolsJs) {
      PlatformTools = _PlatformToolsJs.PlatformTools;
    }, function (_TimeToolsJs) {
      TimeTools = _TimeToolsJs.TimeTools;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "c7ffeCtjVBCV5693xKtQuSe", "Tools", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;

      _export("Tools", Tools = (_dec = ccclass("Tools"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function Tools() {
          _classCallCheck(this, Tools);
        }

        _createClass(Tools, null, [{
          key: "PlatformTools",
          //硬件平台相关工具
          //数学工具类
          //时间工具类
          get: function get() {
            if (Tools.platformTools == null) {
              Tools.platformTools = new (_crd && PlatformTools === void 0 ? (_reportPossibleCrUseOfPlatformTools({
                error: Error()
              }), PlatformTools) : PlatformTools)();
            }

            return Tools.platformTools;
          }
        }, {
          key: "MathTools",
          get: function get() {
            if (Tools.mathTools == null) {
              Tools.mathTools = new (_crd && MathTools === void 0 ? (_reportPossibleCrUseOfMathTools({
                error: Error()
              }), MathTools) : MathTools)();
            }

            return Tools.mathTools;
          }
        }, {
          key: "TimeTools",
          get: function get() {
            if (Tools.timeTools == null) {
              Tools.timeTools = new (_crd && TimeTools === void 0 ? (_reportPossibleCrUseOfTimeTools({
                error: Error()
              }), TimeTools) : TimeTools)();
            }

            return Tools.timeTools;
          }
        }]);

        return Tools;
      }(), _class2.platformTools = null, _class2.mathTools = null, _class2.timeTools = null, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL3Rvb2xzL1Rvb2xzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNYXRoVG9vbHMiLCJQbGF0Zm9ybVRvb2xzIiwiVGltZVRvb2xzIiwiY2NjbGFzcyIsIlRvb2xzIiwicGxhdGZvcm1Ub29scyIsIm1hdGhUb29scyIsInRpbWVUb29scyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7OztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOztBQUNBQyxNQUFBQSxhLG9CQUFBQSxhOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFZSixVLENBQVpJLE87O3VCQUdLQyxLLFdBRFpELE9BQU8sQ0FBQyxPQUFELEM7Ozs7Ozs7QUFHSjtBQUdBO0FBR0E7OEJBR2lEO0FBQzdDLGdCQUFJQyxLQUFLLENBQUNDLGFBQU4sSUFBdUIsSUFBM0IsRUFBaUM7QUFDN0JELGNBQUFBLEtBQUssQ0FBQ0MsYUFBTixHQUFzQjtBQUFBO0FBQUEsbURBQXRCO0FBQ0g7O0FBQ0QsbUJBQU9ELEtBQUssQ0FBQ0MsYUFBYjtBQUNIOzs7OEJBRXdDO0FBQ3JDLGdCQUFJRCxLQUFLLENBQUNFLFNBQU4sSUFBbUIsSUFBdkIsRUFBNkI7QUFDekJGLGNBQUFBLEtBQUssQ0FBQ0UsU0FBTixHQUFrQjtBQUFBO0FBQUEsMkNBQWxCO0FBQ0g7O0FBQ0QsbUJBQU9GLEtBQUssQ0FBQ0UsU0FBYjtBQUNIOzs7OEJBRXdDO0FBQ3JDLGdCQUFJRixLQUFLLENBQUNHLFNBQU4sSUFBbUIsSUFBdkIsRUFBNkI7QUFDekJILGNBQUFBLEtBQUssQ0FBQ0csU0FBTixHQUFrQjtBQUFBO0FBQUEsMkNBQWxCO0FBQ0g7O0FBQ0QsbUJBQU9ILEtBQUssQ0FBQ0csU0FBYjtBQUNIOzs7O21CQTNCY0YsYSxHQUErQixJLFVBRy9CQyxTLEdBQXVCLEksVUFHdkJDLFMsR0FBdUIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgTWF0aFRvb2xzIH0gZnJvbSBcIi4vTWF0aFRvb2xzXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtVG9vbHMgfSBmcm9tIFwiLi9QbGF0Zm9ybVRvb2xzXCI7XHJcbmltcG9ydCB7IFRpbWVUb29scyB9IGZyb20gXCIuL1RpbWVUb29sc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJUb29sc1wiKVxyXG5leHBvcnQgY2xhc3MgVG9vbHMge1xyXG5cclxuICAgIC8v56Gs5Lu25bmz5Y+w55u45YWz5bel5YW3XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwbGF0Zm9ybVRvb2xzOiBQbGF0Zm9ybVRvb2xzID0gbnVsbDtcclxuXHJcbiAgICAvL+aVsOWtpuW3peWFt+exu1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWF0aFRvb2xzOiBNYXRoVG9vbHMgPSBudWxsO1xyXG5cclxuICAgIC8v5pe26Ze05bel5YW357G7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB0aW1lVG9vbHM6IFRpbWVUb29scyA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgUGxhdGZvcm1Ub29scygpOiBQbGF0Zm9ybVRvb2xzIHtcclxuICAgICAgICBpZiAoVG9vbHMucGxhdGZvcm1Ub29scyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXRmb3JtVG9vbHMgPSBuZXcgUGxhdGZvcm1Ub29scygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVG9vbHMucGxhdGZvcm1Ub29scztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBNYXRoVG9vbHMoKTogTWF0aFRvb2xzIHtcclxuICAgICAgICBpZiAoVG9vbHMubWF0aFRvb2xzID09IG51bGwpIHtcclxuICAgICAgICAgICAgVG9vbHMubWF0aFRvb2xzID0gbmV3IE1hdGhUb29scygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVG9vbHMubWF0aFRvb2xzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFRpbWVUb29scygpOiBUaW1lVG9vbHMge1xyXG4gICAgICAgIGlmIChUb29scy50aW1lVG9vbHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBUb29scy50aW1lVG9vbHMgPSBuZXcgVGltZVRvb2xzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUb29scy50aW1lVG9vbHM7XHJcbiAgICB9XHJcbn0iXX0=