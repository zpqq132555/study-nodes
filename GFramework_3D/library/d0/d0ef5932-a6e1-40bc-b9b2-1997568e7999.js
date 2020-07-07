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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvX21lc3NhZ2UvTXNnQ2VudGVyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJEZWJ1Z1V0aWwiLCJFdmVudElEIiwiY2NjbGFzcyIsIk1zZ0NlbnRlciIsIl9ldmVudExpc3QiLCJldmVudElkIiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJsb2dFcnJvciIsImV2ZW50TmFtZSIsInVuZGVmaW5lZCIsInB1c2giLCJpIiwibGVuZ3RoIiwiZGF0YSIsImV2ZW50TGlzdCIsImV2ZW50RGF0YSIsImNhbGwiLCJtc2ciLCJzcGxpY2UiLCJfaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ0FDLE1BQUFBLFMscUJBQUFBLFM7O0FBQ0FDLE1BQUFBLE8sZ0JBQUFBLE87Ozs7OztBQUNEQyxNQUFBQSxPLEdBQVlILFUsQ0FBWkcsTzs7QUFPUjs7Ozs7OzJCQU9hQyxTLFdBRFpELE9BQU8sQ0FBQyxXQUFELEM7Ozs7ZUFXSUUsVSxHQUFvRCxFOzs7Ozs7QUFFNUQ7Ozs7Ozs7Z0RBTzZCQyxPLEVBQWtCQyxRLEVBQStCQyxNLEVBQW1CO0FBQzdGLGdCQUFJRixPQUFPLElBQUksSUFBWCxJQUFtQkMsUUFBUSxJQUFJLElBQS9CLElBQXVDQyxNQUFNLElBQUksSUFBckQsRUFBMkQ7QUFDdkQ7QUFBQTtBQUFBLDBDQUFVQyxRQUFWLENBQW1CLGtCQUFuQjtBQUNBO0FBQ0gsYUFKNEYsQ0FLN0Y7OztBQUNBLGdCQUFJQyxTQUFTLEdBQUc7QUFBQTtBQUFBLG9DQUFRSixPQUFSLENBQWhCOztBQUNBLGdCQUFJLEtBQUtELFVBQUwsQ0FBZ0JLLFNBQWhCLEtBQThCQyxTQUFsQyxFQUE2QztBQUN6QyxtQkFBS04sVUFBTCxDQUFnQkssU0FBaEIsSUFBNkIsRUFBN0I7QUFDSDs7QUFDRCxpQkFBS0wsVUFBTCxDQUFnQkssU0FBaEIsRUFBMkJFLElBQTNCLENBQWdDO0FBQUVMLGNBQUFBLFFBQVEsRUFBRUEsUUFBWjtBQUFzQkMsY0FBQUEsTUFBTSxFQUFFQTtBQUE5QixhQUFoQztBQUNIO0FBRUQ7Ozs7Ozs7Ozs7a0RBTytCRixPLEVBQXFGO0FBQUEsZ0JBQW5FQyxRQUFtRSx1RUFBbkMsSUFBbUM7QUFBQSxnQkFBN0JDLE1BQTZCLHVFQUFmLElBQWU7QUFDaEgsZ0JBQUlFLFNBQVMsR0FBRztBQUFBO0FBQUEsb0NBQVFKLE9BQVIsQ0FBaEI7O0FBQ0EsZ0JBQUlDLFFBQVEsSUFBSSxJQUFaLElBQW9CQyxNQUFNLElBQUksSUFBbEMsRUFBd0M7QUFDcEMsbUJBQUtILFVBQUwsQ0FBZ0JLLFNBQWhCLElBQTZCQyxTQUE3QjtBQUNBLHFCQUFPLElBQVA7QUFDSCxhQUhELE1BSUs7QUFDRCxrQkFBSSxLQUFLTixVQUFMLENBQWdCSyxTQUFoQixLQUE4QkMsU0FBbEMsRUFBNkM7QUFDekM7QUFDQSxxQkFBSyxJQUFJRSxDQUFDLEdBQUcsS0FBS1IsVUFBTCxDQUFnQkssU0FBaEIsRUFBMkJJLE1BQTNCLEdBQW9DLENBQWpELEVBQW9ERCxDQUFDLElBQUksQ0FBekQsRUFBNERBLENBQUMsRUFBN0QsRUFBaUU7QUFDN0Qsc0JBQUksS0FBS1IsVUFBTCxDQUFnQkssU0FBaEIsRUFBMkJHLENBQTNCLEVBQThCTixRQUE5QixJQUEwQ0EsUUFBMUMsSUFBc0QsS0FBS0YsVUFBTCxDQUFnQkssU0FBaEIsRUFBMkJHLENBQTNCLEVBQThCTCxNQUE5QixJQUF3Q0EsTUFBbEcsRUFBMEc7QUFDdEcseUJBQUtILFVBQUwsQ0FBZ0JLLFNBQWhCLEVBQTJCRyxDQUEzQixFQUE4Qk4sUUFBOUIsR0FBeUMsSUFBekM7QUFDQSx5QkFBS0YsVUFBTCxDQUFnQkssU0FBaEIsRUFBMkJHLENBQTNCLEVBQThCTCxNQUE5QixHQUF1QyxJQUF2QztBQUNBLDJCQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7O3dDQU1xQkYsTyxFQUFrQlMsSSxFQUFXO0FBQzlDLGdCQUFJTCxTQUFTLEdBQUc7QUFBQTtBQUFBLG9DQUFRSixPQUFSLENBQWhCO0FBQ0EsZ0JBQUlVLFNBQXVCLEdBQUcsS0FBS1gsVUFBTCxDQUFnQkssU0FBaEIsQ0FBOUI7O0FBQ0EsZ0JBQUlNLFNBQVMsSUFBSUwsU0FBakIsRUFBNEI7QUFDeEIsbUJBQUssSUFBSUUsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLE1BQVYsR0FBbUIsQ0FBaEMsRUFBbUNELENBQUMsSUFBSSxDQUF4QyxFQUEyQ0EsQ0FBQyxFQUE1QyxFQUFnRDtBQUM1QyxvQkFBSUksU0FBcUIsR0FBR0QsU0FBUyxDQUFDSCxDQUFELENBQXJDOztBQUNBLG9CQUFJSSxTQUFTLENBQUNWLFFBQVYsSUFBc0JJLFNBQXRCLElBQW1DTSxTQUFTLENBQUNWLFFBQVYsSUFBc0IsSUFBekQsSUFBaUVVLFNBQVMsQ0FBQ1QsTUFBVixJQUFvQkcsU0FBckYsSUFBa0dNLFNBQVMsQ0FBQ1QsTUFBVixJQUFvQixJQUExSCxFQUFnSTtBQUM1SFMsa0JBQUFBLFNBQVMsQ0FBQ1YsUUFBVixDQUFtQlcsSUFBbkIsQ0FBd0JELFNBQVMsQ0FBQ1QsTUFBbEMsRUFBMEM7QUFBRUYsb0JBQUFBLE9BQU8sRUFBRUEsT0FBWDtBQUFvQmEsb0JBQUFBLEdBQUcsRUFBRUo7QUFBekIsbUJBQTFDO0FBQ0gsaUJBRkQsTUFHSztBQUNEQyxrQkFBQUEsU0FBUyxDQUFDSSxNQUFWLENBQWlCUCxDQUFqQixFQUFvQixDQUFwQjtBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7QUEvRUQ7OEJBRXdDO0FBQ3BDLGdCQUFJVCxTQUFTLENBQUNpQixTQUFWLElBQXVCLElBQTNCLEVBQWlDO0FBQzdCakIsY0FBQUEsU0FBUyxDQUFDaUIsU0FBVixHQUFzQixJQUFJakIsU0FBSixFQUF0QjtBQUNIOztBQUNELG1CQUFPQSxTQUFTLENBQUNpQixTQUFqQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi4vdG9vbHMvRGVidWdVdGlsXCI7XHJcbmltcG9ydCB7IEV2ZW50SUQgfSBmcm9tIFwiLi9Nc2dDb25maWdcIjtcclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnREYXRhIHtcclxuICAgIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkO1xyXG4gICAgdGFyZ2V0OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmtojmga/kuK3lv4NcclxuICogMeOAgeazqOWGjOa2iOaBr++8mnJlZ2lzdGVyRXZlbnRMaXN0ZW5lclxyXG4gKiAy44CB5rOo6ZSA5raI5oGv77yadW5yZWdpc3RlckV2ZW50TGlzdGVuZXJcclxuICogM+OAgeW5v+aSrea2iOaBr++8mmRpc3BhdGNoRXZlbnRcclxuICovXHJcbkBjY2NsYXNzKFwiTXNnQ2VudGVyXCIpXHJcbmV4cG9ydCBjbGFzcyBNc2dDZW50ZXIge1xyXG4gICAgLy/ljZXkvovmqKHlvI9cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTXNnQ2VudGVyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogTXNnQ2VudGVyIHtcclxuICAgICAgICBpZiAoTXNnQ2VudGVyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIE1zZ0NlbnRlci5faW5zdGFuY2UgPSBuZXcgTXNnQ2VudGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNc2dDZW50ZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V2ZW50TGlzdDogeyBbZXZlbnROYW1lOiBzdHJpbmddOiBJRXZlbnREYXRhW10gfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM5LqL5Lu2XHJcbiAgICAgKiDlhYHorrjph43lpI3ms6jlhoxcclxuICAgICAqIEBwYXJhbSBldmVudElkXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcihldmVudElkOiBFdmVudElELCBjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZXZlbnRJZCA9PSBudWxsIHx8IGNhbGxiYWNrID09IG51bGwgfHwgdGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwi5rOo6ZSA5LqL5Lu25Y+C5pWw6ZSZ6K+v77yM5LiN6IO95pivbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreivpeexu+Wei+a2iOaBr+aYr+WQpuazqOWGjOi/h1xyXG4gICAgICAgIGxldCBldmVudE5hbWUgPSBFdmVudElEW2V2ZW50SWRdO1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV0ucHVzaCh7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGFyZ2V0OiB0YXJnZXQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jplIDkuovku7ZcclxuICAgICAqIOWPquS8oOWFpWV2ZW50SWTliJnms6jplIDor6VpZOWvueW6lOeahOaJgOacieS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50SWQgXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXIoZXZlbnRJZDogRXZlbnRJRCwgY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQgPSBudWxsLCB0YXJnZXQ6IGFueSA9IG51bGwpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgZXZlbnROYW1lID0gRXZlbnRJRFtldmVudElkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2sgPT0gbnVsbCAmJiB0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvL+mBjeWOhlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdW2ldLmNhbGxiYWNrID09IGNhbGxiYWNrICYmIHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdW2ldLnRhcmdldCA9PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV1baV0uY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXVtpXS50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bm/5pKt5raI5oGvXHJcbiAgICAgKiDlpITnkIbmtojmga/mlrnku47ojrflj5bliLDnmoRkYXRhLm1zZ+S4reiOt+WPluWPguaVsFxyXG4gICAgICogQHBhcmFtIGV2ZW50SWQgXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnRJZDogRXZlbnRJRCwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGV2ZW50TmFtZSA9IEV2ZW50SURbZXZlbnRJZF07XHJcbiAgICAgICAgbGV0IGV2ZW50TGlzdDogSUV2ZW50RGF0YVtdID0gdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50TGlzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGV2ZW50TGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50RGF0YTogSUV2ZW50RGF0YSA9IGV2ZW50TGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudERhdGEuY2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmIGV2ZW50RGF0YS5jYWxsYmFjayAhPSBudWxsICYmIGV2ZW50RGF0YS50YXJnZXQgIT0gdW5kZWZpbmVkICYmIGV2ZW50RGF0YS50YXJnZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0YS5jYWxsYmFjay5jYWxsKGV2ZW50RGF0YS50YXJnZXQsIHsgZXZlbnRJZDogZXZlbnRJZCwgbXNnOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=