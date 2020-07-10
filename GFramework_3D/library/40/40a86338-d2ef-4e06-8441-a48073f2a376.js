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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL3NjZW5lL1NjZW5lTWFuYWdlci50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsIl9kZWNvcmF0b3IiLCJEZWJ1Z1V0aWwiLCJTY2VuZXMiLCJjY2NsYXNzIiwiU2NlbmVNYW5hZ2VyIiwibG9hZGluZ1NjZW5lSWQiLCJsb2FkQ2FsbGJhY2siLCJsb2FkVGFyZ2V0IiwiYmVmb3JlTG9hZEZ1bmMiLCJiZWZvcmVMb2FkVGFyZ2V0IiwiY3VyU2NlbmVJZCIsIkluaXQiLCJzY2VuZUlkIiwic2NlbmVOYW1lIiwiY2FsbCIsImxvYWRTY2VuZSIsIm9uU2NlbmVMYXVuY2hlZCIsImJpbmQiLCJvblNjZW5lVW5Mb2FkZWQiLCJsb2dJbmZvIiwiX2luc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxRLE9BQUFBLFE7QUFBVUMsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ1ZDLE1BQUFBLFMscUJBQUFBLFM7O0FBQ0FDLE1BQUFBLE0sa0JBQUFBLE07Ozs7OztBQUNEQyxNQUFBQSxPLEdBQVlILFUsQ0FBWkcsTzs7OEJBR0tDLFksV0FEWkQsT0FBTyxDQUFDLGNBQUQsQztBQUVKO0FBR2lEO0FBQ0E7O0FBT2pEOzs7QUFHQSxnQ0FBYztBQUFBOztBQUFBLGVBVk5FLGNBVU0sR0FWbUIsSUFVbkI7QUFBQSxlQVJOQyxZQVFNLEdBUjhCLElBUTlCO0FBQUEsZUFQTkMsVUFPTSxHQVBZLElBT1o7QUFBQSxlQU5OQyxjQU1NLEdBTmdDLElBTWhDO0FBQUEsZUFMTkMsZ0JBS00sR0FMa0IsSUFLbEI7QUFDVixlQUFLQyxVQUFMLEdBQWtCO0FBQUE7QUFBQSxnQ0FBT0MsSUFBekI7QUFDSDs7Ozs7QUFTRDs7Ozs7O29DQU1pQkMsTyxFQUF1QjtBQUNwQyxpQkFBS1AsY0FBTCxHQUFzQk8sT0FBdEI7QUFDQSxnQkFBSUMsU0FBUyxHQUFHO0FBQUE7QUFBQSxrQ0FBT0QsT0FBUCxDQUFoQixDQUZvQyxDQUdwQztBQUNBOztBQUNBLGdCQUFJLEtBQUtKLGNBQUwsSUFBdUIsSUFBdkIsSUFBK0IsS0FBS0MsZ0JBQUwsSUFBeUIsSUFBNUQsRUFBa0U7QUFDOUQsbUJBQUtELGNBQUwsQ0FBb0JNLElBQXBCLENBQXlCLEtBQUtMLGdCQUE5QixFQUFnREksU0FBaEQ7QUFDSDs7QUFDRGQsWUFBQUEsUUFBUSxDQUFDZ0IsU0FBVCxDQUFtQkYsU0FBbkIsRUFBOEIsS0FBS0csZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBOUIsRUFBK0QsS0FBS0MsZUFBTCxDQUFxQkQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBL0Q7QUFDSDtBQUVEOzs7Ozs7Ozt1Q0FLb0JYLFksRUFBbUNDLFUsRUFBaUI7QUFDcEUsaUJBQUtELFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsaUJBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0E7QUFBQTtBQUFBLHdDQUFVWSxPQUFWLENBQWtCLFdBQWxCLEVBQStCLEtBQUtiLFlBQXBDLEVBQWtELEtBQUtDLFVBQXZEO0FBQ0g7QUFFRDs7Ozs7Ozs7NkNBSzBCQyxjLEVBQXFDQyxnQixFQUF1QjtBQUNsRixpQkFBS0QsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxpQkFBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBO0FBQUE7QUFBQSx3Q0FBVVUsT0FBVixDQUFrQixXQUFsQixFQUErQixLQUFLWCxjQUFwQyxFQUFvRCxLQUFLQyxnQkFBekQ7QUFDSDtBQUVEOzs7Ozs7NENBR2dDO0FBQzVCLGlCQUFLQyxVQUFMLEdBQWtCLEtBQUtMLGNBQXZCO0FBQ0EsaUJBQUtBLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxnQkFBSVEsU0FBUyxHQUFHO0FBQUE7QUFBQSxrQ0FBTyxLQUFLSCxVQUFaLENBQWhCO0FBQ0E7QUFBQTtBQUFBLHdDQUFVUyxPQUFWLENBQWtCLFFBQWxCLEVBQTRCTixTQUE1QixFQUo0QixDQUs1Qjs7QUFDQSxnQkFBSSxLQUFLUCxZQUFMLElBQXFCLElBQXJCLElBQTZCLEtBQUtDLFVBQUwsSUFBbUIsSUFBcEQsRUFBMEQ7QUFDdEQsbUJBQUtELFlBQUwsQ0FBa0JRLElBQWxCLENBQXVCLEtBQUtQLFVBQTVCLEVBQXdDTSxTQUF4QztBQUNIO0FBQ0o7QUFFRDs7Ozs7OzRDQUdnQztBQUM1QixnQkFBSUEsU0FBUyxHQUFHO0FBQUE7QUFBQSxrQ0FBTyxLQUFLSCxVQUFaLENBQWhCO0FBQ0E7QUFBQTtBQUFBLHdDQUFVUyxPQUFWLENBQWtCLFFBQWxCLEVBQTRCTixTQUE1QjtBQUNIOzs7OEJBbEUwQztBQUN2QyxnQkFBSVQsWUFBWSxDQUFDZ0IsU0FBYixJQUEwQixJQUE5QixFQUFvQztBQUNoQ2hCLGNBQUFBLFlBQVksQ0FBQ2dCLFNBQWIsR0FBeUIsSUFBSWhCLFlBQUosRUFBekI7QUFDSDs7QUFDRCxtQkFBT0EsWUFBWSxDQUFDZ0IsU0FBcEI7QUFDSDs7OzttQkF0QmNBLFMsR0FBMEIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpcmVjdG9yLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IERlYnVnVXRpbCB9IGZyb20gXCIuLi90b29scy9EZWJ1Z1V0aWxcIjtcclxuaW1wb3J0IHsgU2NlbmVzIH0gZnJvbSBcIi4vU2NlbmVDb25maWdcIjtcclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJTY2VuZU1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcbiAgICAvL+WNleS+i+aooeW8j1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTY2VuZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY3VyU2NlbmVJZDogU2NlbmVzOyAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeeahOWcuuaZr2lkXHJcbiAgICBwcml2YXRlIGxvYWRpbmdTY2VuZUlkOiBTY2VuZXMgPSBudWxsOyAgICAgICAgICAgLy/liqDovb3kuK3nmoTlnLrmma9pZFxyXG5cclxuICAgIHByaXZhdGUgbG9hZENhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkID0gbnVsbDtcclxuICAgIHByaXZhdGUgbG9hZFRhcmdldDogYW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmVmb3JlTG9hZEZ1bmM6IChkYXRhOiBhbnkpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZWZvcmVMb2FkVGFyZ2V0OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICrmnoTpgKDmlrnms5VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJTY2VuZUlkID0gU2NlbmVzLkluaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogU2NlbmVNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoU2NlbmVNYW5hZ2VyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgU2NlbmVNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTY2VuZU1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295Zy65pmvXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVJZCBcclxuICAgICAqIEBwYXJhbSBsb2FkQ2FsbGJhY2sgXHJcbiAgICAgKiBAcGFyYW0gbG9hZFRhcmdldCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRTY2VuZShzY2VuZUlkOiBTY2VuZXMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTY2VuZUlkID0gc2NlbmVJZDtcclxuICAgICAgICBsZXQgc2NlbmVOYW1lID0gU2NlbmVzW3NjZW5lSWRdO1xyXG4gICAgICAgIC8v5YWI5Y246L296ZyA6KaB55qE6LWE5rqQ5YaN5Yqg6L295oiQ5bCxXHJcbiAgICAgICAgLy/lm57osINcclxuICAgICAgICBpZiAodGhpcy5iZWZvcmVMb2FkRnVuYyAhPSBudWxsICYmIHRoaXMuYmVmb3JlTG9hZFRhcmdldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlTG9hZEZ1bmMuY2FsbCh0aGlzLmJlZm9yZUxvYWRUYXJnZXQsIHNjZW5lTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUsIHRoaXMub25TY2VuZUxhdW5jaGVkLmJpbmQodGhpcyksIHRoaXMub25TY2VuZVVuTG9hZGVkLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yqg6L295Zy65pmv55qE5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gbG9hZENhbGxiYWNrIFxyXG4gICAgICogQHBhcmFtIGxvYWRUYXJnZXQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRMb2FkRXZlbnQobG9hZENhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkLCBsb2FkVGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmxvYWRDYWxsYmFjayA9IGxvYWRDYWxsYmFjaztcclxuICAgICAgICB0aGlzLmxvYWRUYXJnZXQgPSBsb2FkVGFyZ2V0O1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi6K6+572u5Yqg6L295Zy65pmv55qE5LqL5Lu2XCIsIHRoaXMubG9hZENhbGxiYWNrLCB0aGlzLmxvYWRUYXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Y246L295Zy65pmv55qE5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gYmVmb3JlTG9hZEZ1bmMgXHJcbiAgICAgKiBAcGFyYW0gYmVmb3JlTG9hZFRhcmdldCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEJlZm9yZUxvYWRFdmVudChiZWZvcmVMb2FkRnVuYzogKGRhdGE6IGFueSkgPT4gdm9pZCwgYmVmb3JlTG9hZFRhcmdldDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVMb2FkRnVuYyA9IGJlZm9yZUxvYWRGdW5jO1xyXG4gICAgICAgIHRoaXMuYmVmb3JlTG9hZFRhcmdldCA9IGJlZm9yZUxvYWRUYXJnZXQ7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLorr7nva7ljbjovb3lnLrmma/nmoTkuovku7ZcIiwgdGhpcy5iZWZvcmVMb2FkRnVuYywgdGhpcy5iZWZvcmVMb2FkVGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWcuuaZr+aIkOWKn+eahOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uU2NlbmVMYXVuY2hlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1clNjZW5lSWQgPSB0aGlzLmxvYWRpbmdTY2VuZUlkO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjZW5lSWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBzY2VuZU5hbWUgPSBTY2VuZXNbdGhpcy5jdXJTY2VuZUlkXTtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuWcuuaZr+WKoOi9veWujOaIkFwiLCBzY2VuZU5hbWUpO1xyXG4gICAgICAgIC8v5Zue6LCDXHJcbiAgICAgICAgaWYgKHRoaXMubG9hZENhbGxiYWNrICE9IG51bGwgJiYgdGhpcy5sb2FkVGFyZ2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQ2FsbGJhY2suY2FsbCh0aGlzLmxvYWRUYXJnZXQsIHNjZW5lTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y246L295Zy65pmv5oiQ5Yqf55qE5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25TY2VuZVVuTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzY2VuZU5hbWUgPSBTY2VuZXNbdGhpcy5jdXJTY2VuZUlkXTtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuWcuuaZr+WNuOi9veWujOaIkFwiLCBzY2VuZU5hbWUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=