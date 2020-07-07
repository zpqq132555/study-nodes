System.register(["cc", "code-quality:cr", "../tools/DebugUtil.js", "../_base/GameBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Node, SpriteAtlas, SpriteFrame, _decorator, DebugUtil, GameBase, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, UIBasePanel;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "../tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameBase(extras) {
    _reporterNs.report("GameBase", "../_base/GameBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_toolsDebugUtilJs) {
      DebugUtil = _toolsDebugUtilJs.DebugUtil;
    }, function (_baseGameBaseJs) {
      GameBase = _baseGameBaseJs.GameBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "1734dQzWFJH7agkoYQDBS32", "UIBasePanel", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIBasePanel", UIBasePanel = (_dec = ccclass("UIBasePanel"), _dec2 = property({
        type: [SpriteFrame]
      }), _dec3 = property({
        type: [SpriteAtlas]
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inherits(UIBasePanel, _ref);

        //是否初始化
        //页面参数
        //页面的背景，用于屏蔽下层点击事件
        //待使用的精灵
        //待使用的图集

        /**
         *
         */
        function UIBasePanel() {
          var _this;

          _classCallCheck(this, UIBasePanel);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(UIBasePanel).call(this));
          _this._mInit = false;
          _this._panelDatas = null;
          _this._uiScreenBg = null;

          _initializerDefineProperty(_this, "spriteFrameList", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteAtlasList", _descriptor2, _assertThisInitialized(_this));

          _this._mInit = false;
          _this._panelDatas = null;
          return _this;
        }
        /**
         * 页面参数
         * @param datas 
         */


        _createClass(UIBasePanel, [{
          key: "setPanelDatas",
          value: function setPanelDatas(datas) {
            this._panelDatas = datas;
          }
        }, {
          key: "getPanelDatas",
          value: function getPanelDatas() {
            return this._panelDatas;
          }
          /**
           * 页面初始化状态
           * @param state 
           */

        }, {
          key: "setInitState",
          value: function setInitState(state) {
            this._mInit = state;
          }
        }, {
          key: "getInitState",
          value: function getInitState() {
            return this._mInit;
          }
          /**
           * 初始化页面
           * 只在首次加载的时候调用一次
           */

        }, {
          key: "initView",
          value: function initView() {
            this.setInitState(true);
          }
          /**
           * 展示页面
           */

        }, {
          key: "showView",
          value: function showView() {
            this.node.active = true;

            if (this.getInitState() == false) {
              this.initData();
              this.refreshData();
              this.initView();
              this.refreshView();
            } else {
              this.refreshData();
              this.refreshView();
            }
          }
          /**
           * 隐藏页面
           */

        }, {
          key: "hideView",
          value: function hideView() {
            this.node.active = false;
          }
          /**
           * 刷新页面
           */

        }, {
          key: "refreshView",
          value: function refreshView() {}
          /**
           * 初始化数据
           */

        }, {
          key: "initData",
          value: function initData() {}
          /**
           * 刷新数据
           */

        }, {
          key: "refreshData",
          value: function refreshData() {}
          /************************** 点击事件 *******************************/

        }, {
          key: "registerClickListener",
          value: function registerClickListener() {}
          /**************************事件监听 *******************************/

        }, {
          key: "registerEventListener",
          value: function registerEventListener() {}
        }, {
          key: "unregisterEventListener",
          value: function unregisterEventListener() {}
          /****************************** Cocos生命周期方法 *****************************/

        }, {
          key: "onLoad",
          value: function onLoad() {
            _get(_getPrototypeOf(UIBasePanel.prototype), "onLoad", this).call(this); //初始化屏蔽事件层


            if (this._uiScreenBg == null) {
              this._uiScreenBg = this.node.getChildByName("panelBackground");
            }

            if (this._uiScreenBg != null) {
              this._uiScreenBg.on(Node.EventType.TOUCH_END, function () {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo("屏蔽下层点击事件");
              }, this);
            } //注册事件


            this.registerEventListener();
            this.registerClickListener();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            _get(_getPrototypeOf(UIBasePanel.prototype), "onDestroy", this).call(this);

            this.unregisterEventListener();
          }
        }]);

        return UIBasePanel;
      }(_crd && GameBase === void 0 ? (_reportPossibleCrUseOfGameBase({
        error: Error()
      }), GameBase) : GameBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteAtlasList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlCYXNlUGFuZWwudHMiXSwibmFtZXMiOlsiTm9kZSIsIlNwcml0ZUF0bGFzIiwiU3ByaXRlRnJhbWUiLCJfZGVjb3JhdG9yIiwiRGVidWdVdGlsIiwiR2FtZUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUJhc2VQYW5lbCIsInR5cGUiLCJfbUluaXQiLCJfcGFuZWxEYXRhcyIsIl91aVNjcmVlbkJnIiwiZGF0YXMiLCJzdGF0ZSIsInNldEluaXRTdGF0ZSIsIm5vZGUiLCJhY3RpdmUiLCJnZXRJbml0U3RhdGUiLCJpbml0RGF0YSIsInJlZnJlc2hEYXRhIiwiaW5pdFZpZXciLCJyZWZyZXNoVmlldyIsImdldENoaWxkQnlOYW1lIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJsb2dJbmZvIiwicmVnaXN0ZXJFdmVudExpc3RlbmVyIiwicmVnaXN0ZXJDbGlja0xpc3RlbmVyIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ2hDQyxNQUFBQSxTLHFCQUFBQSxTOztBQUNBQyxNQUFBQSxRLG1CQUFBQSxROzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyxVQVNIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFLENBQUNQLFdBQUQ7QUFBUixPQUFELEMsVUFHUkssUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRSxDQUFDUixXQUFEO0FBQVIsT0FBRCxDOzs7QUFUZ0M7QUFDQTtBQUVBO0FBRXpDO0FBR0E7O0FBSUE7OztBQUdBLCtCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFEVSxnQkFmTlMsTUFlTSxHQWZZLEtBZVo7QUFBQSxnQkFkTkMsV0FjTSxHQWRhLElBY2I7QUFBQSxnQkFaTkMsV0FZTSxHQVpjLElBWWQ7O0FBQUE7O0FBQUE7O0FBRVYsZ0JBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsZ0JBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFIVTtBQUliO0FBRUQ7Ozs7Ozs7O3dDQUlxQkUsSyxFQUFZO0FBQzdCLGlCQUFLRixXQUFMLEdBQW1CRSxLQUFuQjtBQUNIOzs7MENBRTJCO0FBQ3hCLG1CQUFPLEtBQUtGLFdBQVo7QUFDSDtBQUVEOzs7Ozs7O3VDQUlvQkcsSyxFQUFzQjtBQUN0QyxpQkFBS0osTUFBTCxHQUFjSSxLQUFkO0FBQ0g7Ozt5Q0FFOEI7QUFDM0IsbUJBQU8sS0FBS0osTUFBWjtBQUNIO0FBRUQ7Ozs7Ozs7cUNBSXdCO0FBQ3BCLGlCQUFLSyxZQUFMLENBQWtCLElBQWxCO0FBQ0g7QUFFRDs7Ozs7O3FDQUd3QjtBQUNwQixpQkFBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLElBQW5COztBQUNBLGdCQUFJLEtBQUtDLFlBQUwsTUFBdUIsS0FBM0IsRUFBa0M7QUFDOUIsbUJBQUtDLFFBQUw7QUFDQSxtQkFBS0MsV0FBTDtBQUNBLG1CQUFLQyxRQUFMO0FBQ0EsbUJBQUtDLFdBQUw7QUFDSCxhQUxELE1BS087QUFDSCxtQkFBS0YsV0FBTDtBQUNBLG1CQUFLRSxXQUFMO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7cUNBR3dCO0FBQ3BCLGlCQUFLTixJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFDSDtBQUVEOzs7Ozs7d0NBRzJCLENBRTFCO0FBRUQ7Ozs7OztxQ0FHd0IsQ0FFdkI7QUFFRDs7Ozs7O3dDQUcyQixDQUUxQjtBQUVEOzs7O2tEQUNxQyxDQUVwQztBQUVEOzs7O2tEQUNxQyxDQUVwQzs7O29EQUVzQyxDQUV0QztBQUNEOzs7O21DQUNTO0FBQ0wsb0ZBREssQ0FFTDs7O0FBQ0EsZ0JBQUksS0FBS0wsV0FBTCxJQUFvQixJQUF4QixFQUE4QjtBQUMxQixtQkFBS0EsV0FBTCxHQUFtQixLQUFLSSxJQUFMLENBQVVPLGNBQVYsQ0FBeUIsaUJBQXpCLENBQW5CO0FBQ0g7O0FBQ0QsZ0JBQUksS0FBS1gsV0FBTCxJQUFvQixJQUF4QixFQUE4QjtBQUMxQixtQkFBS0EsV0FBTCxDQUFpQlksRUFBakIsQ0FBb0J4QixJQUFJLENBQUN5QixTQUFMLENBQWVDLFNBQW5DLEVBQThDLFlBQVk7QUFDdEQ7QUFBQTtBQUFBLDRDQUFVQyxPQUFWLENBQWtCLFVBQWxCO0FBQ0gsZUFGRCxFQUVHLElBRkg7QUFHSCxhQVZJLENBWUw7OztBQUNBLGlCQUFLQyxxQkFBTDtBQUNBLGlCQUFLQyxxQkFBTDtBQUNIOzs7c0NBRVc7QUFDUjs7QUFDQSxpQkFBS0MsdUJBQUw7QUFDSDs7Ozs7Ozs7Ozs7aUJBNUg0QyxFOzs7Ozs7O2lCQUdBLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlLCBTcHJpdGVBdGxhcywgU3ByaXRlRnJhbWUsIF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgRGVidWdVdGlsIH0gZnJvbSBcIi4uL3Rvb2xzL0RlYnVnVXRpbFwiO1xyXG5pbXBvcnQgeyBHYW1lQmFzZSB9IGZyb20gXCIuLi9fYmFzZS9HYW1lQmFzZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJVSUJhc2VQYW5lbFwiKVxyXG5leHBvcnQgY2xhc3MgVUlCYXNlUGFuZWwgZXh0ZW5kcyBHYW1lQmFzZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbUluaXQ6IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgICAvL+aYr+WQpuWIneWni+WMllxyXG4gICAgcHJpdmF0ZSBfcGFuZWxEYXRhczogYW55ID0gbnVsbDsgICAgICAgICAvL+mhtemdouWPguaVsFxyXG5cclxuICAgIHByaXZhdGUgX3VpU2NyZWVuQmc6IE5vZGUgPSBudWxsOyAgICAgICAgLy/pobXpnaLnmoTog4zmma/vvIznlKjkuo7lsY/olL3kuIvlsYLngrnlh7vkuovku7ZcclxuXHJcbiAgICAvL+W+heS9v+eUqOeahOeyvueBtVxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW1Nwcml0ZUZyYW1lXSB9KVxyXG4gICAgc3ByaXRlRnJhbWVMaXN0OiBBcnJheTxTcHJpdGVGcmFtZSB8IG51bGw+ID0gW107XHJcbiAgICAvL+W+heS9v+eUqOeahOWbvumbhlxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW1Nwcml0ZUF0bGFzXSB9KVxyXG4gICAgc3ByaXRlQXRsYXNMaXN0OiBBcnJheTxTcHJpdGVBdGxhcyB8IG51bGw+ID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX21Jbml0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcGFuZWxEYXRhcyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpobXpnaLlj4LmlbBcclxuICAgICAqIEBwYXJhbSBkYXRhcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBhbmVsRGF0YXMoZGF0YXM6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3BhbmVsRGF0YXMgPSBkYXRhcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFuZWxEYXRhcygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYW5lbERhdGFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i5Yid5aeL5YyW54q25oCBXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRJbml0U3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tSW5pdCA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbml0U3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21Jbml0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW6aG16Z2iXHJcbiAgICAgKiDlj6rlnKjpppbmrKHliqDovb3nmoTml7blgJnosIPnlKjkuIDmrKFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdFN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bGV56S66aG16Z2iXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93VmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5nZXRJbml0U3RhdGUoKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP6aG16Z2iXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLfmlrDpobXpnaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi35paw5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoRGF0YSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqIOeCueWHu+S6i+S7tiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcigpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioq5LqL5Lu255uR5ZCsICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudExpc3RlbmVyKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXIoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb2Nvc+eUn+WRveWRqOacn+aWueazlSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICAvL+WIneWni+WMluWxj+iUveS6i+S7tuWxglxyXG4gICAgICAgIGlmICh0aGlzLl91aVNjcmVlbkJnID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdWlTY3JlZW5CZyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhbmVsQmFja2dyb3VuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3VpU2NyZWVuQmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl91aVNjcmVlbkJnLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLlsY/olL3kuIvlsYLngrnlh7vkuovku7ZcIik7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ms6jlhozkuovku7ZcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDbGlja0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMudW5yZWdpc3RlckV2ZW50TGlzdGVuZXIoKTtcclxuICAgIH1cclxufSJdfQ==