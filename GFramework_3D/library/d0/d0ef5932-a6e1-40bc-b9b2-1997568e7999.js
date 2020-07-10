System.register(["cc", "code-quality:cr", "../tools/DebugUtil.js", "./MsgConfig.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, DebugUtil, EventID, _dec, _class, _temp, _crd, ccclass, MsgCenter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "../tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventID(extras) {
    _reporterNs.report("EventID", "./MsgConfig", _context.meta, extras);
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
    }, function (_toolsDebugUtilJs) {
      DebugUtil = _toolsDebugUtilJs.DebugUtil;
    }, function (_MsgConfigJs) {
      EventID = _MsgConfigJs.EventID;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "d0ef5kypuFAvLmyGZdWjnmZ", "MsgCenter", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;

      /**
       * 消息中心
       * 1、注册消息：registerEventListener
       * 2、注销消息：unregisterEventListener
       * 3、广播消息：dispatchEvent
       */
      _export("MsgCenter", MsgCenter = (_dec = ccclass("MsgCenter"), _dec(_class = (_temp = /*#__PURE__*/function () {
        function MsgCenter() {
          _classCallCheck(this, MsgCenter);

          this._eventList = {};
        }

        _createClass(MsgCenter, [{
          key: "registerEventListener",

          /**
           * 注册事件
           * 允许重复注册
           * @param eventId
           * @param callback
           * @param target
           */
          value: function registerEventListener(eventId, callback, target) {
            if (eventId == null || callback == null || target == null) {
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logError("注销事件参数错误，不能是null");
              return;
            } //判断该类型消息是否注册过


            var eventName = (_crd && EventID === void 0 ? (_reportPossibleCrUseOfEventID({
              error: Error()
            }), EventID) : EventID)[eventId];

            if (this._eventList[eventName] == undefined) {
              this._eventList[eventName] = [];
            }

            this._eventList[eventName].push({
              callback: callback,
              target: target
            });
          }
          /**
           * 注销事件
           * 只传入eventId则注销该id对应的所有事件
           * @param eventId 
           * @param callback 
           * @param target 
           */

        }, {
          key: "unregisterEventListener",
          value: function unregisterEventListener(eventId) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var eventName = (_crd && EventID === void 0 ? (_reportPossibleCrUseOfEventID({
              error: Error()
            }), EventID) : EventID)[eventId];

            if (callback == null && target == null) {
              this._eventList[eventName] = undefined;
              return true;
            } else {
              if (this._eventList[eventName] != undefined) {
                //遍历
                for (var i = this._eventList[eventName].length - 1; i >= 0; i--) {
                  if (this._eventList[eventName][i].callback == callback && this._eventList[eventName][i].target == target) {
                    this._eventList[eventName][i].callback = null;
                    this._eventList[eventName][i].target = null;
                    return true;
                  }
                }
              }
            }

            return false;
          }
          /**
           * 广播消息
           * 处理消息方从获取到的data.msg中获取参数
           * @param eventId 
           * @param data 
           */

        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(eventId, data) {
            var eventName = (_crd && EventID === void 0 ? (_reportPossibleCrUseOfEventID({
              error: Error()
            }), EventID) : EventID)[eventId];
            var eventList = this._eventList[eventName];

            if (eventList != undefined) {
              for (var i = eventList.length - 1; i >= 0; i--) {
                var eventData = eventList[i];

                if (eventData.callback != undefined && eventData.callback != null && eventData.target != undefined && eventData.target != null) {
                  eventData.callback.call(eventData.target, {
                    eventId: eventId,
                    msg: data
                  });
                } else {
                  eventList.splice(i, 1);
                }
              }
            }
          }
        }], [{
          key: "Instance",
          //单例模式
          get: function get() {
            if (MsgCenter._instance == null) {
              MsgCenter._instance = new MsgCenter();
            }

            return MsgCenter._instance;
          }
        }]);

        return MsgCenter;
      }(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL19tZXNzYWdlL01zZ0NlbnRlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiRGVidWdVdGlsIiwiRXZlbnRJRCIsImNjY2xhc3MiLCJNc2dDZW50ZXIiLCJfZXZlbnRMaXN0IiwiZXZlbnRJZCIsImNhbGxiYWNrIiwidGFyZ2V0IiwibG9nRXJyb3IiLCJldmVudE5hbWUiLCJ1bmRlZmluZWQiLCJwdXNoIiwiaSIsImxlbmd0aCIsImRhdGEiLCJldmVudExpc3QiLCJldmVudERhdGEiLCJjYWxsIiwibXNnIiwic3BsaWNlIiwiX2luc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7OztBQUNBQyxNQUFBQSxTLHFCQUFBQSxTOztBQUNBQyxNQUFBQSxPLGdCQUFBQSxPOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFZSCxVLENBQVpHLE87O0FBT1I7Ozs7OzsyQkFPYUMsUyxXQURaRCxPQUFPLENBQUMsV0FBRCxDOzs7O2VBV0lFLFUsR0FBb0QsRTs7Ozs7O0FBRTVEOzs7Ozs7O2dEQU82QkMsTyxFQUFrQkMsUSxFQUErQkMsTSxFQUFtQjtBQUM3RixnQkFBSUYsT0FBTyxJQUFJLElBQVgsSUFBbUJDLFFBQVEsSUFBSSxJQUEvQixJQUF1Q0MsTUFBTSxJQUFJLElBQXJELEVBQTJEO0FBQ3ZEO0FBQUE7QUFBQSwwQ0FBVUMsUUFBVixDQUFtQixrQkFBbkI7QUFDQTtBQUNILGFBSjRGLENBSzdGOzs7QUFDQSxnQkFBSUMsU0FBUyxHQUFHO0FBQUE7QUFBQSxvQ0FBUUosT0FBUixDQUFoQjs7QUFDQSxnQkFBSSxLQUFLRCxVQUFMLENBQWdCSyxTQUFoQixLQUE4QkMsU0FBbEMsRUFBNkM7QUFDekMsbUJBQUtOLFVBQUwsQ0FBZ0JLLFNBQWhCLElBQTZCLEVBQTdCO0FBQ0g7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ZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgRGVidWdVdGlsIH0gZnJvbSBcIi4uL3Rvb2xzL0RlYnVnVXRpbFwiO1xyXG5pbXBvcnQgeyBFdmVudElEIH0gZnJvbSBcIi4vTXNnQ29uZmlnXCI7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50RGF0YSB7XHJcbiAgICBjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZDtcclxuICAgIHRhcmdldDogYW55O1xyXG59XHJcblxyXG4vKipcclxuICog5raI5oGv5Lit5b+DXHJcbiAqIDHjgIHms6jlhozmtojmga/vvJpyZWdpc3RlckV2ZW50TGlzdGVuZXJcclxuICogMuOAgeazqOmUgOa2iOaBr++8mnVucmVnaXN0ZXJFdmVudExpc3RlbmVyXHJcbiAqIDPjgIHlub/mkq3mtojmga/vvJpkaXNwYXRjaEV2ZW50XHJcbiAqL1xyXG5AY2NjbGFzcyhcIk1zZ0NlbnRlclwiKVxyXG5leHBvcnQgY2xhc3MgTXNnQ2VudGVyIHtcclxuICAgIC8v5Y2V5L6L5qih5byPXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE1zZ0NlbnRlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6IE1zZ0NlbnRlciB7XHJcbiAgICAgICAgaWYgKE1zZ0NlbnRlci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBNc2dDZW50ZXIuX2luc3RhbmNlID0gbmV3IE1zZ0NlbnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTXNnQ2VudGVyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9ldmVudExpc3Q6IHsgW2V2ZW50TmFtZTogc3RyaW5nXTogSUV2ZW50RGF0YVtdIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOS6i+S7tlxyXG4gICAgICog5YWB6K646YeN5aSN5rOo5YaMXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50TGlzdGVuZXIoZXZlbnRJZDogRXZlbnRJRCwgY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQsIHRhcmdldDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGV2ZW50SWQgPT0gbnVsbCB8fCBjYWxsYmFjayA9PSBudWxsIHx8IHRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dFcnJvcihcIuazqOmUgOS6i+S7tuWPguaVsOmUmeivr++8jOS4jeiDveaYr251bGxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3or6Xnsbvlnovmtojmga/mmK/lkKbms6jlhozov4dcclxuICAgICAgICBsZXQgZXZlbnROYW1lID0gRXZlbnRJRFtldmVudElkXTtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdLnB1c2goeyBjYWxsYmFjazogY2FsbGJhY2ssIHRhcmdldDogdGFyZ2V0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo6ZSA5LqL5Lu2XHJcbiAgICAgKiDlj6rkvKDlhaVldmVudElk5YiZ5rOo6ZSA6K+laWTlr7nlupTnmoTmiYDmnInkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudElkIFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIFxyXG4gICAgICogQHBhcmFtIHRhcmdldCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVucmVnaXN0ZXJFdmVudExpc3RlbmVyKGV2ZW50SWQ6IEV2ZW50SUQsIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkID0gbnVsbCwgdGFyZ2V0OiBhbnkgPSBudWxsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGV2ZW50TmFtZSA9IEV2ZW50SURbZXZlbnRJZF07XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrID09IG51bGwgJiYgdGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy/pgY3ljoZcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXVtpXS5jYWxsYmFjayA9PSBjYWxsYmFjayAmJiB0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXVtpXS50YXJnZXQgPT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdW2ldLmNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV1baV0udGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW5v+aSrea2iOaBr1xyXG4gICAgICog5aSE55CG5raI5oGv5pa55LuO6I635Y+W5Yiw55qEZGF0YS5tc2fkuK3ojrflj5blj4LmlbBcclxuICAgICAqIEBwYXJhbSBldmVudElkIFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwYXRjaEV2ZW50KGV2ZW50SWQ6IEV2ZW50SUQsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBldmVudE5hbWUgPSBFdmVudElEW2V2ZW50SWRdO1xyXG4gICAgICAgIGxldCBldmVudExpc3Q6IElFdmVudERhdGFbXSA9IHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdO1xyXG4gICAgICAgIGlmIChldmVudExpc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBldmVudExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudERhdGE6IElFdmVudERhdGEgPSBldmVudExpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnREYXRhLmNhbGxiYWNrICE9IHVuZGVmaW5lZCAmJiBldmVudERhdGEuY2FsbGJhY2sgIT0gbnVsbCAmJiBldmVudERhdGEudGFyZ2V0ICE9IHVuZGVmaW5lZCAmJiBldmVudERhdGEudGFyZ2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGEuY2FsbGJhY2suY2FsbChldmVudERhdGEudGFyZ2V0LCB7IGV2ZW50SWQ6IGV2ZW50SWQsIG1zZzogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19