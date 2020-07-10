System.register(["cc", "code-quality:cr", "../_message/MsgCenter.js", "../_message/MsgConfig.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Component, _decorator, MsgCenter, EventID, _dec, _class, _temp, _crd, ccclass, property, GameBase;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfMsgCenter(extras) {
    _reporterNs.report("MsgCenter", "../_message/MsgCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventID(extras) {
    _reporterNs.report("EventID", "../_message/MsgConfig", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_messageMsgCenterJs) {
      MsgCenter = _messageMsgCenterJs.MsgCenter;
    }, function (_messageMsgConfigJs) {
      EventID = _messageMsgConfigJs.EventID;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "a5d21nGAnBC9aCQYFgMyf59", "GameBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameBase", GameBase = (_dec = ccclass("GameBase"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameBase, _Component);

        _createClass(GameBase, [{
          key: "addEventListener",

          /********************** 事件相关 **************************/
          value: function addEventListener(eventId, callback, target) {
            (_crd && MsgCenter === void 0 ? (_reportPossibleCrUseOfMsgCenter({
              error: Error()
            }), MsgCenter) : MsgCenter).Instance.registerEventListener(eventId, callback, target);
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
        }, {
          key: "removeEventListener",
          value: function removeEventListener(eventId, callback, target) {
            (_crd && MsgCenter === void 0 ? (_reportPossibleCrUseOfMsgCenter({
              error: Error()
            }), MsgCenter) : MsgCenter).Instance.unregisterEventListener(eventId, callback, target);
            var eventName = (_crd && EventID === void 0 ? (_reportPossibleCrUseOfEventID({
              error: Error()
            }), EventID) : EventID)[eventId];

            if (this._eventList[eventName] != undefined) {
              //遍历
              for (var i = this._eventList[eventName].length - 1; i >= 0; i--) {
                if (this._eventList[eventName][i].callback == callback && this._eventList[eventName][i].target == target) {
                  this._eventList[eventName].splice(i, 1);

                  break;
                }
              }
            }
          }
          /**
           * 移除所有的事件监听
           */

        }, {
          key: "removeAllEventListener",
          value: function removeAllEventListener() {
            for (var key in this._eventList) {
              for (var i = 0; i < this._eventList[key].length; i++) {
                (_crd && MsgCenter === void 0 ? (_reportPossibleCrUseOfMsgCenter({
                  error: Error()
                }), MsgCenter) : MsgCenter).Instance.unregisterEventListener((_crd && EventID === void 0 ? (_reportPossibleCrUseOfEventID({
                  error: Error()
                }), EventID) : EventID)[key], this._eventList[key][i].callback, this._eventList[key][i].target);
              }
            }

            this._eventList = {};
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(eventId) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            (_crd && MsgCenter === void 0 ? (_reportPossibleCrUseOfMsgCenter({
              error: Error()
            }), MsgCenter) : MsgCenter).Instance.dispatchEvent(eventId, data);
          }
          /**********************定时器相关**************************/

          /**
           * 循环定时器
           */

        }, {
          key: "addScheduler",
          value: function addScheduler(callback, interval) {
            var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            if (repeat != null && delay != null) {
              this.schedule(callback, interval, repeat, delay);
            } else {
              this.schedule(callback, interval);
            }
          }
        }, {
          key: "addSchedulerOnce",
          value: function addSchedulerOnce(callback, time) {
            this.scheduleOnce(callback, time);
          }
        }, {
          key: "removeScheduler",
          value: function removeScheduler(callback) {
            this.unschedule(callback);
          }
        }, {
          key: "removeAllScheduler",
          value: function removeAllScheduler() {
            this.unscheduleAllCallbacks();
          }
          /**********************Cocos生命周期相关**************************/

          /**
           * 构造方法
           */

        }]);

        function GameBase() {
          var _this;

          _classCallCheck(this, GameBase);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(GameBase).call(this));
          _this._eventList = {};
          return _this;
        }

        _createClass(GameBase, [{
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.removeAllEventListener();
            this.removeAllScheduler();
          }
        }]);

        return GameBase;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL19iYXNlL0dhbWVCYXNlLnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJNc2dDZW50ZXIiLCJFdmVudElEIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUJhc2UiLCJldmVudElkIiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJJbnN0YW5jZSIsInJlZ2lzdGVyRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSIsIl9ldmVudExpc3QiLCJ1bmRlZmluZWQiLCJwdXNoIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXIiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwia2V5IiwiZGF0YSIsImRpc3BhdGNoRXZlbnQiLCJpbnRlcnZhbCIsInJlcGVhdCIsImRlbGF5Iiwic2NoZWR1bGUiLCJ0aW1lIiwic2NoZWR1bGVPbmNlIiwidW5zY2hlZHVsZSIsInVuc2NoZWR1bGVBbGxDYWxsYmFja3MiLCJyZW1vdmVBbGxFdmVudExpc3RlbmVyIiwicmVtb3ZlQWxsU2NoZWR1bGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDQ0MsTUFBQUEsUyx1QkFBQUEsUzs7QUFDWkMsTUFBQUEsTyx1QkFBQUEsTzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7Ozs7OztBQUdKOzJDQUUyQkcsTyxFQUFrQkMsUSxFQUErQkMsTSxFQUFtQjtBQUMzRjtBQUFBO0FBQUEsd0NBQVVDLFFBQVYsQ0FBbUJDLHFCQUFuQixDQUF5Q0osT0FBekMsRUFBa0RDLFFBQWxELEVBQTREQyxNQUE1RDtB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QixVQUFMLENBQWdCckIsUUFBaEI7QUFDSDs7OytDQUVpQztBQUM5QixpQkFBS3NCLHNCQUFMO0FBQ0g7QUFDRDs7QUFDQTs7Ozs7O0FBR0EsNEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQURVLGdCQXRFTmpCLFVBc0VNLEdBdEU4QyxFQXNFOUM7QUFBQTtBQUViOzs7O21DQUVRLENBRVI7OztzQ0FFVztBQUNSLGlCQUFLa0Isc0JBQUw7QUFDQSxpQkFBS0Msa0JBQUw7QUFDSDs7OztRQXBGeUJoQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IElFdmVudERhdGEsIE1zZ0NlbnRlciB9IGZyb20gXCIuLi9fbWVzc2FnZS9Nc2dDZW50ZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRJRCB9IGZyb20gXCIuLi9fbWVzc2FnZS9Nc2dDb25maWdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiR2FtZUJhc2VcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKiDkuovku7bnm7jlhbMgKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcml2YXRlIF9ldmVudExpc3Q6IHsgW2V2ZW50TmFtZTogc3RyaW5nXTogSUV2ZW50RGF0YVtdIH0gPSB7fTtcclxuICAgIHByb3RlY3RlZCBhZGRFdmVudExpc3RlbmVyKGV2ZW50SWQ6IEV2ZW50SUQsIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkLCB0YXJnZXQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIE1zZ0NlbnRlci5JbnN0YW5jZS5yZWdpc3RlckV2ZW50TGlzdGVuZXIoZXZlbnRJZCwgY2FsbGJhY2ssIHRhcmdldCk7XHJcblxyXG4gICAgICAgIGxldCBldmVudE5hbWUgPSBFdmVudElEW2V2ZW50SWRdO1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV0ucHVzaCh7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGFyZ2V0OiB0YXJnZXQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRJZDogRXZlbnRJRCwgY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQsIHRhcmdldDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgTXNnQ2VudGVyLkluc3RhbmNlLnVucmVnaXN0ZXJFdmVudExpc3RlbmVyKGV2ZW50SWQsIGNhbGxiYWNrLCB0YXJnZXQpO1xyXG5cclxuICAgICAgICBsZXQgZXZlbnROYW1lID0gRXZlbnRJRFtldmVudElkXTtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8v6YGN5Y6GXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdW2ldLmNhbGxiYWNrID09IGNhbGxiYWNrICYmIHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdW2ldLnRhcmdldCA9PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTmiYDmnInnmoTkuovku7bnm5HlkKxcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2V2ZW50TGlzdCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2V2ZW50TGlzdFtrZXldLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBNc2dDZW50ZXIuSW5zdGFuY2UudW5yZWdpc3RlckV2ZW50TGlzdGVuZXIoRXZlbnRJRFtrZXldLCB0aGlzLl9ldmVudExpc3Rba2V5XVtpXS5jYWxsYmFjaywgdGhpcy5fZXZlbnRMaXN0W2tleV1baV0udGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ldmVudExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlzcGF0Y2hFdmVudChldmVudElkOiBFdmVudElELCBkYXRhOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgTXNnQ2VudGVyLkluc3RhbmNlLmRpc3BhdGNoRXZlbnQoZXZlbnRJZCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioq5a6a5pe25Zmo55u45YWzKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKipcclxuICAgICAqIOW+queOr+WumuaXtuWZqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkU2NoZWR1bGVyKGNhbGxiYWNrOiBhbnksIGludGVydmFsOiBudW1iZXIsIHJlcGVhdCA9IG51bGwsIGRlbGF5ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChyZXBlYXQgIT0gbnVsbCAmJiBkZWxheSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoY2FsbGJhY2ssIGludGVydmFsLCByZXBlYXQsIGRlbGF5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGNhbGxiYWNrLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTY2hlZHVsZXJPbmNlKGNhbGxiYWNrOiBhbnksIHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGNhbGxiYWNrLCB0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlU2NoZWR1bGVyKGNhbGxiYWNrOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBbGxTY2hlZHVsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKkNvY29z55Sf5ZG95ZGo5pyf55u45YWzKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOaWueazlVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsU2NoZWR1bGVyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19