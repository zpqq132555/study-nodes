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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvdG9vbHMvVG9vbHMudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk1hdGhUb29scyIsIlBsYXRmb3JtVG9vbHMiLCJUaW1lVG9vbHMiLCJjY2NsYXNzIiwiVG9vbHMiLCJwbGF0Zm9ybVRvb2xzIiwibWF0aFRvb2xzIiwidGltZVRvb2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7O0FBQ0FDLE1BQUFBLGEsb0JBQUFBLGE7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQVlKLFUsQ0FBWkksTzs7dUJBR0tDLEssV0FEWkQsT0FBTyxDQUFDLE9BQUQsQzs7Ozs7OztBQUdKO0FBR0E7QUFHQTs4QkFHaUQ7QUFDN0MsZ0JBQUlDLEtBQUssQ0FBQ0MsYUFBTixJQUF1QixJQUEzQixFQUFpQztBQUM3QkQsY0FBQUEsS0FBSyxDQUFDQyxhQUFOLEdBQXNCO0FBQUE7QUFBQSxtREFBdEI7QUFDSDs7QUFDRCxtQkFBT0QsS0FBSyxDQUFDQyxhQUFiO0FBQ0g7Ozs4QkFFd0M7QUFDckMsZ0JBQUlELEtBQUssQ0FBQ0UsU0FBTixJQUFtQixJQUF2QixFQUE2QjtBQUN6QkYsY0FBQUEsS0FBSyxDQUFDRSxTQUFOLEdBQWtCO0FBQUE7QUFBQSwyQ0FBbEI7QUFDSDs7QUFDRCxtQkFBT0YsS0FBSyxDQUFDRSxTQUFiO0FBQ0g7Ozs4QkFFd0M7QUFDckMsZ0JBQUlGLEtBQUssQ0FBQ0csU0FBTixJQUFtQixJQUF2QixFQUE2QjtBQUN6QkgsY0FBQUEsS0FBSyxDQUFDRyxTQUFOLEdBQWtCO0FBQUE7QUFBQSwyQ0FBbEI7QUFDSDs7QUFDRCxtQkFBT0gsS0FBSyxDQUFDRyxTQUFiO0FBQ0g7Ozs7bUJBM0JjRixhLEdBQStCLEksVUFHL0JDLFMsR0FBdUIsSSxVQUd2QkMsUyxHQUF1QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBNYXRoVG9vbHMgfSBmcm9tIFwiLi9NYXRoVG9vbHNcIjtcclxuaW1wb3J0IHsgUGxhdGZvcm1Ub29scyB9IGZyb20gXCIuL1BsYXRmb3JtVG9vbHNcIjtcclxuaW1wb3J0IHsgVGltZVRvb2xzIH0gZnJvbSBcIi4vVGltZVRvb2xzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlRvb2xzXCIpXHJcbmV4cG9ydCBjbGFzcyBUb29scyB7XHJcblxyXG4gICAgLy/noazku7blubPlj7Dnm7jlhbPlt6XlhbdcclxuICAgIHByaXZhdGUgc3RhdGljIHBsYXRmb3JtVG9vbHM6IFBsYXRmb3JtVG9vbHMgPSBudWxsO1xyXG5cclxuICAgIC8v5pWw5a2m5bel5YW357G7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtYXRoVG9vbHM6IE1hdGhUb29scyA9IG51bGw7XHJcblxyXG4gICAgLy/ml7bpl7Tlt6XlhbfnsbtcclxuICAgIHByaXZhdGUgc3RhdGljIHRpbWVUb29sczogVGltZVRvb2xzID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBQbGF0Zm9ybVRvb2xzKCk6IFBsYXRmb3JtVG9vbHMge1xyXG4gICAgICAgIGlmIChUb29scy5wbGF0Zm9ybVRvb2xzID09IG51bGwpIHtcclxuICAgICAgICAgICAgVG9vbHMucGxhdGZvcm1Ub29scyA9IG5ldyBQbGF0Zm9ybVRvb2xzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUb29scy5wbGF0Zm9ybVRvb2xzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE1hdGhUb29scygpOiBNYXRoVG9vbHMge1xyXG4gICAgICAgIGlmIChUb29scy5tYXRoVG9vbHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBUb29scy5tYXRoVG9vbHMgPSBuZXcgTWF0aFRvb2xzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUb29scy5tYXRoVG9vbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgVGltZVRvb2xzKCk6IFRpbWVUb29scyB7XHJcbiAgICAgICAgaWYgKFRvb2xzLnRpbWVUb29scyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLnRpbWVUb29scyA9IG5ldyBUaW1lVG9vbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRvb2xzLnRpbWVUb29scztcclxuICAgIH1cclxufSJdfQ==