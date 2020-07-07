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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvX2Jhc2UvR2FtZUJhc2UudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiX2RlY29yYXRvciIsIk1zZ0NlbnRlciIsIkV2ZW50SUQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQmFzZSIsImV2ZW50SWQiLCJjYWxsYmFjayIsInRhcmdldCIsIkluc3RhbmNlIiwicmVnaXN0ZXJFdmVudExpc3RlbmVyIiwiZXZlbnROYW1lIiwiX2V2ZW50TGlzdCIsInVuZGVmaW5lZCIsInB1c2giLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lciIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJrZXkiLCJkYXRhIiwiZGlzcGF0Y2hFdmVudCIsImludGVydmFsIiwicmVwZWF0IiwiZGVsYXkiLCJzY2hlZHVsZSIsInRpbWUiLCJzY2hlZHVsZU9uY2UiLCJ1bnNjaGVkdWxlIiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsInJlbW92ZUFsbEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxTY2hlZHVsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLFUsT0FBQUEsVTs7OztBQUNDQyxNQUFBQSxTLHVCQUFBQSxTOztBQUNaQyxNQUFBQSxPLHVCQUFBQSxPOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQzs7Ozs7O0FBR0o7MkNBRTJCRyxPLEVBQWtCQyxRLEVBQStCQyxNLEVBQW1CO0FBQzNGO0FBQUE7QUFBQSx3Q0FBVUMsUUFBVixDQUFtQkMscUJBQW5CLENBQXlDSixPQUF6QyxFQUFrREMsUUFBbEQsRUFBNERDLE1BQTVEO0FB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LFVBQUwsQ0FBZ0JyQixRQUFoQjtBQUNIOzs7K0NBRWlDO0FBQzlCLGlCQUFLc0Isc0JBQUw7QUFDSDtBQUNEOztBQUNBOzs7Ozs7QUFHQSw0QkFBYztBQUFBOztBQUFBOztBQUNWO0FBRFUsZ0JBdEVOakIsVUFzRU0sR0F0RThDLEVBc0U5QztBQUFBO0FBRWI7Ozs7bUNBRVEsQ0FFUjs7O3NDQUVXO0FBQ1IsaUJBQUtrQixzQkFBTDtBQUNBLGlCQUFLQyxrQkFBTDtBQUNIOzs7O1FBcEZ5QmhDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgSUV2ZW50RGF0YSwgTXNnQ2VudGVyIH0gZnJvbSBcIi4uL19tZXNzYWdlL01zZ0NlbnRlclwiO1xyXG5pbXBvcnQgeyBFdmVudElEIH0gZnJvbSBcIi4uL19tZXNzYWdlL01zZ0NvbmZpZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJHYW1lQmFzZVwiKVxyXG5leHBvcnQgY2xhc3MgR2FtZUJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqIOS6i+S7tuebuOWFsyAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHByaXZhdGUgX2V2ZW50TGlzdDogeyBbZXZlbnROYW1lOiBzdHJpbmddOiBJRXZlbnREYXRhW10gfSA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRJZDogRXZlbnRJRCwgY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQsIHRhcmdldDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgTXNnQ2VudGVyLkluc3RhbmNlLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcihldmVudElkLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgbGV0IGV2ZW50TmFtZSA9IEV2ZW50SURbZXZlbnRJZF07XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXS5wdXNoKHsgY2FsbGJhY2s6IGNhbGxiYWNrLCB0YXJnZXQ6IHRhcmdldCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudElkOiBFdmVudElELCBjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBNc2dDZW50ZXIuSW5zdGFuY2UudW5yZWdpc3RlckV2ZW50TGlzdGVuZXIoZXZlbnRJZCwgY2FsbGJhY2ssIHRhcmdldCk7XHJcblxyXG4gICAgICAgIGxldCBldmVudE5hbWUgPSBFdmVudElEW2V2ZW50SWRdO1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudExpc3RbZXZlbnROYW1lXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy/pgY3ljoZcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV1baV0uY2FsbGJhY2sgPT0gY2FsbGJhY2sgJiYgdGhpcy5fZXZlbnRMaXN0W2V2ZW50TmFtZV1baV0udGFyZ2V0ID09IHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdFtldmVudE5hbWVdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOenu+mZpOaJgOacieeahOS6i+S7tuebkeWQrFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fZXZlbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRMaXN0W2tleV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIE1zZ0NlbnRlci5JbnN0YW5jZS51bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcihFdmVudElEW2tleV0sIHRoaXMuX2V2ZW50TGlzdFtrZXldW2ldLmNhbGxiYWNrLCB0aGlzLl9ldmVudExpc3Rba2V5XVtpXS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaXNwYXRjaEV2ZW50KGV2ZW50SWQ6IEV2ZW50SUQsIGRhdGE6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBNc2dDZW50ZXIuSW5zdGFuY2UuZGlzcGF0Y2hFdmVudChldmVudElkLCBkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKirlrprml7blmajnm7jlhbMqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog5b6q546v5a6a5pe25ZmoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRTY2hlZHVsZXIoY2FsbGJhY2s6IGFueSwgaW50ZXJ2YWw6IG51bWJlciwgcmVwZWF0ID0gbnVsbCwgZGVsYXkgPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHJlcGVhdCAhPSBudWxsICYmIGRlbGF5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShjYWxsYmFjaywgaW50ZXJ2YWwsIHJlcGVhdCwgZGVsYXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoY2FsbGJhY2ssIGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNjaGVkdWxlck9uY2UoY2FsbGJhY2s6IGFueSwgdGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoY2FsbGJhY2ssIHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVTY2hlZHVsZXIoY2FsbGJhY2s6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZShjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUFsbFNjaGVkdWxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqQ29jb3PnlJ/lkb3lkajmnJ/nm7jlhbMqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog5p6E6YCg5pa55rOVXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxTY2hlZHVsZXIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=