System.register(["cc", "code-quality:cr", "../tools/DebugUtil.js", "./SceneConfig.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, director, _decorator, DebugUtil, Scenes, _dec, _class, _class2, _temp, _crd, ccclass, SceneManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "../tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScenes(extras) {
    _reporterNs.report("Scenes", "./SceneConfig", _context.meta, extras);
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
      director = _cc.director;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_toolsDebugUtilJs) {
      DebugUtil = _toolsDebugUtilJs.DebugUtil;
    }, function (_SceneConfigJs) {
      Scenes = _SceneConfigJs.Scenes;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "40a86M40u9OBoRBpIBz8qN2", "SceneManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;

      _export("SceneManager", SceneManager = (_dec = ccclass("SceneManager"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        //单例模式
        //当前的场景id
        //加载中的场景id

        /**
         *构造方法
         */
        function SceneManager() {
          _classCallCheck(this, SceneManager);

          this.loadingSceneId = null;
          this.loadCallback = null;
          this.loadTarget = null;
          this.beforeLoadFunc = null;
          this.beforeLoadTarget = null;
          this.curSceneId = (_crd && Scenes === void 0 ? (_reportPossibleCrUseOfScenes({
            error: Error()
          }), Scenes) : Scenes).Init;
        }

        _createClass(SceneManager, [{
          key: "loadScene",

          /**
           * 加载场景
           * @param sceneId 
           * @param loadCallback 
           * @param loadTarget 
           */
          value: function loadScene(sceneId) {
            this.loadingSceneId = sceneId;
            var sceneName = (_crd && Scenes === void 0 ? (_reportPossibleCrUseOfScenes({
              error: Error()
            }), Scenes) : Scenes)[sceneId]; //先卸载需要的资源再加载成就
            //回调

            if (this.beforeLoadFunc != null && this.beforeLoadTarget != null) {
              this.beforeLoadFunc.call(this.beforeLoadTarget, sceneName);
            }

            director.loadScene(sceneName, this.onSceneLaunched.bind(this), this.onSceneUnLoaded.bind(this));
          }
          /**
           * 设置加载场景的事件
           * @param loadCallback 
           * @param loadTarget 
           */

        }, {
          key: "setLoadEvent",
          value: function setLoadEvent(loadCallback, loadTarget) {
            this.loadCallback = loadCallback;
            this.loadTarget = loadTarget;
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("设置加载场景的事件", this.loadCallback, this.loadTarget);
          }
          /**
           * 设置卸载场景的事件
           * @param beforeLoadFunc 
           * @param beforeLoadTarget 
           */

        }, {
          key: "setBeforeLoadEvent",
          value: function setBeforeLoadEvent(beforeLoadFunc, beforeLoadTarget) {
            this.beforeLoadFunc = beforeLoadFunc;
            this.beforeLoadTarget = beforeLoadTarget;
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("设置卸载场景的事件", this.beforeLoadFunc, this.beforeLoadTarget);
          }
          /**
           * 加载场景成功的回调
           */

        }, {
          key: "onSceneLaunched",
          value: function onSceneLaunched() {
            this.curSceneId = this.loadingSceneId;
            this.loadingSceneId = null;
            var sceneName = (_crd && Scenes === void 0 ? (_reportPossibleCrUseOfScenes({
              error: Error()
            }), Scenes) : Scenes)[this.curSceneId];
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("场景加载完成", sceneName); //回调

            if (this.loadCallback != null && this.loadTarget != null) {
              this.loadCallback.call(this.loadTarget, sceneName);
            }
          }
          /**
           * 卸载场景成功的回调
           */

        }, {
          key: "onSceneUnLoaded",
          value: function onSceneUnLoaded() {
            var sceneName = (_crd && Scenes === void 0 ? (_reportPossibleCrUseOfScenes({
              error: Error()
            }), Scenes) : Scenes)[this.curSceneId];
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("场景卸载完成", sceneName);
          }
        }], [{
          key: "Instance",
          get: function get() {
            if (SceneManager._instance == null) {
              SceneManager._instance = new SceneManager();
            }

            return SceneManager._instance;
          }
        }]);

        return SceneManager;
      }(), _class2._instance = null, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvc2NlbmUvU2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbImRpcmVjdG9yIiwiX2RlY29yYXRvciIsIkRlYnVnVXRpbCIsIlNjZW5lcyIsImNjY2xhc3MiLCJTY2VuZU1hbmFnZXIiLCJsb2FkaW5nU2NlbmVJZCIsImxvYWRDYWxsYmFjayIsImxvYWRUYXJnZXQiLCJiZWZvcmVMb2FkRnVuYyIsImJlZm9yZUxvYWRUYXJnZXQiLCJjdXJTY2VuZUlkIiwiSW5pdCIsInNjZW5lSWQiLCJzY2VuZU5hbWUiLCJjYWxsIiwibG9hZFNjZW5lIiwib25TY2VuZUxhdW5jaGVkIiwiYmluZCIsIm9uU2NlbmVVbkxvYWRlZCIsImxvZ0luZm8iLCJfaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDVkMsTUFBQUEsUyxxQkFBQUEsUzs7QUFDQUMsTUFBQUEsTSxrQkFBQUEsTTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBWUgsVSxDQUFaRyxPOzs4QkFHS0MsWSxXQURaRCxPQUFPLENBQUMsY0FBRCxDO0FBRUo7QUFHaUQ7QUFDQTs7QUFPakQ7OztBQUdBLGdDQUFjO0FBQUE7O0FBQUEsZUFWTkUsY0FVTSxHQVZtQixJQVVuQjtBQUFBLGVBUk5DLFlBUU0sR0FSOEIsSUFROUI7QUFBQSxlQVBOQyxVQU9NLEdBUFksSUFPWjtBQUFBLGVBTk5DLGNBTU0sR0FOZ0MsSUFNaEM7QUFBQSxlQUxOQyxnQkFLTSxHQUxrQixJQUtsQjtBQUNWLGVBQUtDLFVBQUwsR0FBa0I7QUFBQTtBQUFBLGdDQUFPQyxJQUF6QjtBQUNIOzs7OztBQVNEOzs7Ozs7b0NBTWlCQyxPLEVBQXVCO0FBQ3BDLGlCQUFLUCxjQUFMLEdBQXNCTyxPQUF0QjtBQUNBLGdCQUFJQyxTQUFTLEdBQUc7QUFBQTtBQUFBLGtDQUFPRCxPQUFQLENBQWhCLENBRm9DLENBR3BDO0FBQ0E7O0FBQ0EsZ0JBQUksS0FBS0osY0FBTCxJQUF1QixJQUF2QixJQUErQixLQUFLQyxnQkFBTCxJQUF5QixJQUE1RCxFQUFrRTtBQUM5RCxtQkFBS0QsY0FBTCxDQUFvQk0sSUFBcEIsQ0FBeUIsS0FBS0wsZ0JBQTlCLEVBQWdESSxTQUFoRDtBQUNIOztBQUNEZCxZQUFBQSxRQUFRLENBQUNnQixTQUFULENBQW1CRixTQUFuQixFQUE4QixLQUFLRyxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUE5QixFQUErRCxLQUFLQyxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUEvRDtBQUNIO0FBRUQ7Ozs7Ozs7O3VDQUtvQlgsWSxFQUFtQ0MsVSxFQUFpQjtBQUNwRSxpQkFBS0QsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQTtBQUFBO0FBQUEsd0NBQVVZLE9BQVYsQ0FBa0IsV0FBbEIsRUFBK0IsS0FBS2IsWUFBcEMsRUFBa0QsS0FBS0MsVUFBdkQ7QUFDSDtBQUVEOzs7Ozs7Ozs2Q0FLMEJDLGMsRUFBcUNDLGdCLEVBQXVCO0FBQ2xGLGlCQUFLRCxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLGlCQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0E7QUFBQTtBQUFBLHdDQUFVVSxPQUFWLENBQWtCLFdBQWxCLEVBQStCLEtBQUtYLGNBQXBDLEVBQW9ELEtBQUtDLGdCQUF6RDtBQUNIO0FBRUQ7Ozs7Ozs0Q0FHZ0M7QUFDNUIsaUJBQUtDLFVBQUwsR0FBa0IsS0FBS0wsY0FBdkI7QUFDQSxpQkFBS0EsY0FBTCxHQUFzQixJQUF0QjtBQUNBLGdCQUFJUSxTQUFTLEdBQUc7QUFBQTtBQUFBLGtDQUFPLEtBQUtILFVBQVosQ0FBaEI7QUFDQTtBQUFBO0FBQUEsd0NBQVVTLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEJOLFNBQTVCLEVBSjRCLENBSzVCOztBQUNBLGdCQUFJLEtBQUtQLFlBQUwsSUFBcUIsSUFBckIsSUFBNkIsS0FBS0MsVUFBTCxJQUFtQixJQUFwRCxFQUEwRDtBQUN0RCxtQkFBS0QsWUFBTCxDQUFrQlEsSUFBbEIsQ0FBdUIsS0FBS1AsVUFBNUIsRUFBd0NNLFNBQXhDO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7NENBR2dDO0FBQzVCLGdCQUFJQSxTQUFTLEdBQUc7QUFBQTtBQUFBLGtDQUFPLEtBQUtILFVBQVosQ0FBaEI7QUFDQTtBQUFBO0FBQUEsd0NBQVVTLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEJOLFNBQTVCO0FBQ0g7Ozs4QkFsRTBDO0FBQ3ZDLGdCQUFJVCxZQUFZLENBQUNnQixTQUFiLElBQTBCLElBQTlCLEVBQW9DO0FBQ2hDaEIsY0FBQUEsWUFBWSxDQUFDZ0IsU0FBYixHQUF5QixJQUFJaEIsWUFBSixFQUF6QjtBQUNIOztBQUNELG1CQUFPQSxZQUFZLENBQUNnQixTQUFwQjtBQUNIOzs7O21CQXRCY0EsUyxHQUEwQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlyZWN0b3IsIF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgRGVidWdVdGlsIH0gZnJvbSBcIi4uL3Rvb2xzL0RlYnVnVXRpbFwiO1xyXG5pbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwiLi9TY2VuZUNvbmZpZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlNjZW5lTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuICAgIC8v5Y2V5L6L5qih5byPXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNjZW5lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJTY2VuZUlkOiBTY2VuZXM7ICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN55qE5Zy65pmvaWRcclxuICAgIHByaXZhdGUgbG9hZGluZ1NjZW5lSWQ6IFNjZW5lcyA9IG51bGw7ICAgICAgICAgICAvL+WKoOi9veS4reeahOWcuuaZr2lkXHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkQ2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBsb2FkVGFyZ2V0OiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZWZvcmVMb2FkRnVuYzogKGRhdGE6IGFueSkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJlZm9yZUxvYWRUYXJnZXQ6IGFueSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKuaehOmAoOaWueazlVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1clNjZW5lSWQgPSBTY2VuZXMuSW5pdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBTY2VuZU1hbmFnZXIge1xyXG4gICAgICAgIGlmIChTY2VuZU1hbmFnZXIuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNjZW5lTWFuYWdlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lnLrmma9cclxuICAgICAqIEBwYXJhbSBzY2VuZUlkIFxyXG4gICAgICogQHBhcmFtIGxvYWRDYWxsYmFjayBcclxuICAgICAqIEBwYXJhbSBsb2FkVGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFNjZW5lKHNjZW5lSWQ6IFNjZW5lcyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjZW5lSWQgPSBzY2VuZUlkO1xyXG4gICAgICAgIGxldCBzY2VuZU5hbWUgPSBTY2VuZXNbc2NlbmVJZF07XHJcbiAgICAgICAgLy/lhYjljbjovb3pnIDopoHnmoTotYTmupDlho3liqDovb3miJDlsLFcclxuICAgICAgICAvL+Wbnuiwg1xyXG4gICAgICAgIGlmICh0aGlzLmJlZm9yZUxvYWRGdW5jICE9IG51bGwgJiYgdGhpcy5iZWZvcmVMb2FkVGFyZ2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5iZWZvcmVMb2FkRnVuYy5jYWxsKHRoaXMuYmVmb3JlTG9hZFRhcmdldCwgc2NlbmVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lTmFtZSwgdGhpcy5vblNjZW5lTGF1bmNoZWQuYmluZCh0aGlzKSwgdGhpcy5vblNjZW5lVW5Mb2FkZWQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liqDovb3lnLrmma/nmoTkuovku7ZcclxuICAgICAqIEBwYXJhbSBsb2FkQ2FsbGJhY2sgXHJcbiAgICAgKiBAcGFyYW0gbG9hZFRhcmdldCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExvYWRFdmVudChsb2FkQ2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQsIGxvYWRUYXJnZXQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMubG9hZENhbGxiYWNrID0gbG9hZENhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMubG9hZFRhcmdldCA9IGxvYWRUYXJnZXQ7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLorr7nva7liqDovb3lnLrmma/nmoTkuovku7ZcIiwgdGhpcy5sb2FkQ2FsbGJhY2ssIHRoaXMubG9hZFRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ljbjovb3lnLrmma/nmoTkuovku7ZcclxuICAgICAqIEBwYXJhbSBiZWZvcmVMb2FkRnVuYyBcclxuICAgICAqIEBwYXJhbSBiZWZvcmVMb2FkVGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0QmVmb3JlTG9hZEV2ZW50KGJlZm9yZUxvYWRGdW5jOiAoZGF0YTogYW55KSA9PiB2b2lkLCBiZWZvcmVMb2FkVGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmJlZm9yZUxvYWRGdW5jID0gYmVmb3JlTG9hZEZ1bmM7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVMb2FkVGFyZ2V0ID0gYmVmb3JlTG9hZFRhcmdldDtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuiuvue9ruWNuOi9veWcuuaZr+eahOS6i+S7tlwiLCB0aGlzLmJlZm9yZUxvYWRGdW5jLCB0aGlzLmJlZm9yZUxvYWRUYXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295Zy65pmv5oiQ5Yqf55qE5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25TY2VuZUxhdW5jaGVkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VyU2NlbmVJZCA9IHRoaXMubG9hZGluZ1NjZW5lSWQ7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NlbmVJZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNjZW5lTmFtZSA9IFNjZW5lc1t0aGlzLmN1clNjZW5lSWRdO1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5Zy65pmv5Yqg6L295a6M5oiQXCIsIHNjZW5lTmFtZSk7XHJcbiAgICAgICAgLy/lm57osINcclxuICAgICAgICBpZiAodGhpcy5sb2FkQ2FsbGJhY2sgIT0gbnVsbCAmJiB0aGlzLmxvYWRUYXJnZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRDYWxsYmFjay5jYWxsKHRoaXMubG9hZFRhcmdldCwgc2NlbmVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljbjovb3lnLrmma/miJDlip/nmoTlm57osINcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblNjZW5lVW5Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNjZW5lTmFtZSA9IFNjZW5lc1t0aGlzLmN1clNjZW5lSWRdO1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5Zy65pmv5Y246L295a6M5oiQXCIsIHNjZW5lTmFtZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==