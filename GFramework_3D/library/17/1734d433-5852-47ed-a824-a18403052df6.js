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

              if (this._uiScreenBg == null) {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logWarn(this.node.name + "not Child panelBackground");
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJQmFzZVBhbmVsLnRzIl0sIm5hbWVzIjpbIk5vZGUiLCJTcHJpdGVBdGxhcyIsIlNwcml0ZUZyYW1lIiwiX2RlY29yYXRvciIsIkRlYnVnVXRpbCIsIkdhbWVCYXNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlCYXNlUGFuZWwiLCJ0eXBlIiwiX21Jbml0IiwiX3BhbmVsRGF0YXMiLCJfdWlTY3JlZW5CZyIsImRhdGFzIiwic3RhdGUiLCJzZXRJbml0U3RhdGUiLCJub2RlIiwiYWN0aXZlIiwiZ2V0SW5pdFN0YXRlIiwiaW5pdERhdGEiLCJyZWZyZXNoRGF0YSIsImluaXRWaWV3IiwicmVmcmVzaFZpZXciLCJnZXRDaGlsZEJ5TmFtZSIsImxvZ1dhcm4iLCJuYW1lIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJsb2dJbmZvIiwicmVnaXN0ZXJFdmVudExpc3RlbmVyIiwicmVnaXN0ZXJDbGlja0xpc3RlbmVyIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ2hDQyxNQUFBQSxTLHFCQUFBQSxTOztBQUNBQyxNQUFBQSxRLG1CQUFBQSxROzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyxVQVNIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFLENBQUNQLFdBQUQ7QUFBUixPQUFELEMsVUFHUkssUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRSxDQUFDUixXQUFEO0FBQVIsT0FBRCxDOzs7QUFUZ0M7QUFDQTtBQUVBO0FBRXpDO0FBR0E7O0FBSUE7OztBQUdBLCtCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFEVSxnQkFmTlMsTUFlTSxHQWZZLEtBZVo7QUFBQSxnQkFkTkMsV0FjTSxHQWRhLElBY2I7QUFBQSxnQkFaTkMsV0FZTSxHQVpjLElBWWQ7O0FBQUE7O0FBQUE7O0FBRVYsZ0JBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsZ0JBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFIVTtBQUliO0FBRUQ7Ozs7Ozs7O3dDQUlxQkUsSyxFQUFZO0FBQzdCLGlCQUFLRixXQUFMLEdBQW1CRSxLQUFuQjtBQUNIOzs7MENBRTJCO0FBQ3hCLG1CQUFPLEtBQUtGLFdBQVo7QUFDSDtBQUVEOzs7Ozs7O3VDQUlvQkcsSyxFQUFzQjtBQUN0QyxpQkFBS0osTUFBTCxHQUFjSSxLQUFkO0FBQ0g7Ozt5Q0FFOEI7QUFDM0IsbUJBQU8sS0FBS0osTUFBWjtBQUNIO0FBRUQ7Ozs7Ozs7cUNBSXdCO0FBQ3BCLGlCQUFLSyxZQUFMLENBQWtCLElBQWxCO0FBQ0g7QUFFRDs7Ozs7O3FDQUd3QjtBQUNwQixpQkFBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLElBQW5COztBQUNBLGdCQUFJLEtBQUtDLFlBQUwsTUFBdUIsS0FBM0IsRUFBa0M7QUFDOUIsbUJBQUtDLFFBQUw7QUFDQSxtQkFBS0MsV0FBTDtBQUNBLG1CQUFLQyxRQUFMO0FBQ0EsbUJBQUtDLFdBQUw7QUFDSCxhQUxELE1BS087QUFDSCxtQkFBS0YsV0FBTDtBQUNBLG1CQUFLRSxXQUFMO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7cUNBR3dCO0FBQ3BCLGlCQUFLTixJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFDSDtBQUVEOzs7Ozs7d0NBRzJCLENBRTFCO0FBRUQ7Ozs7OztxQ0FHd0IsQ0FFdkI7QUFFRDs7Ozs7O3dDQUcyQixDQUUxQjtBQUVEOzs7O2tEQUNxQyxDQUVwQztBQUVEOzs7O2tEQUNxQyxDQUVwQzs7O29EQUVzQyxDQUV0QztBQUNEOzs7O21DQUNTO0FBQ0wsb0ZBREssQ0FFTDs7O0FBQ0EsZ0JBQUksS0FBS0wsV0FBTCxJQUFvQixJQUF4QixFQUE4QjtBQUMxQixtQkFBS0EsV0FBTCxHQUFtQixLQUFLSSxJQUFMLENBQVVPLGNBQVYsQ0FBeUIsaUJBQXpCLENBQW5COztBQUNBLGtCQUFJLEtBQUtYLFdBQUwsSUFBb0IsSUFBeEIsRUFBOEI7QUFDMUI7QUFBQTtBQUFBLDRDQUFVWSxPQUFWLENBQWtCLEtBQUtSLElBQUwsQ0FBVVMsSUFBVixHQUFpQiwyQkFBbkM7QUFDSDtBQUNKOztBQUNELGdCQUFJLEtBQUtiLFdBQUwsSUFBb0IsSUFBeEIsRUFBOEI7QUFDMUIsbUJBQUtBLFdBQUwsQ0FBaUJjLEVBQWpCLENBQW9CMUIsSUFBSSxDQUFDMkIsU0FBTCxDQUFlQyxTQUFuQyxFQUE4QyxZQUFZO0FBQ3REO0FBQUE7QUFBQSw0Q0FBVUMsT0FBVixDQUFrQixVQUFsQjtBQUNILGVBRkQsRUFFRyxJQUZIO0FBR0gsYUFiSSxDQWVMOzs7QUFDQSxpQkFBS0MscUJBQUw7QUFDQSxpQkFBS0MscUJBQUw7QUFDSDs7O3NDQUVXO0FBQ1I7O0FBQ0EsaUJBQUtDLHVCQUFMO0FBQ0g7Ozs7Ozs7Ozs7O2lCQS9INEMsRTs7Ozs7OztpQkFHQSxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSwgU3ByaXRlQXRsYXMsIFNwcml0ZUZyYW1lLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IERlYnVnVXRpbCB9IGZyb20gXCIuLi90b29scy9EZWJ1Z1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZUJhc2UgfSBmcm9tIFwiLi4vX2Jhc2UvR2FtZUJhc2VcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiVUlCYXNlUGFuZWxcIilcclxuZXhwb3J0IGNsYXNzIFVJQmFzZVBhbmVsIGV4dGVuZHMgR2FtZUJhc2Uge1xyXG5cclxuICAgIHByaXZhdGUgX21Jbml0OiBib29sZWFuID0gZmFsc2U7ICAgICAgICAgLy/mmK/lkKbliJ3lp4vljJZcclxuICAgIHByaXZhdGUgX3BhbmVsRGF0YXM6IGFueSA9IG51bGw7ICAgICAgICAgLy/pobXpnaLlj4LmlbBcclxuXHJcbiAgICBwcml2YXRlIF91aVNjcmVlbkJnOiBOb2RlID0gbnVsbDsgICAgICAgIC8v6aG16Z2i55qE6IOM5pmv77yM55So5LqO5bGP6JS95LiL5bGC54K55Ye75LqL5Lu2XHJcblxyXG4gICAgLy/lvoXkvb/nlKjnmoTnsr7ngbVcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtTcHJpdGVGcmFtZV0gfSlcclxuICAgIHNwcml0ZUZyYW1lTGlzdDogQXJyYXk8U3ByaXRlRnJhbWUgfCBudWxsPiA9IFtdO1xyXG4gICAgLy/lvoXkvb/nlKjnmoTlm77pm4ZcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtTcHJpdGVBdGxhc10gfSlcclxuICAgIHNwcml0ZUF0bGFzTGlzdDogQXJyYXk8U3ByaXRlQXRsYXMgfCBudWxsPiA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9tSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3BhbmVsRGF0YXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gZGF0YXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQYW5lbERhdGFzKGRhdGFzOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9wYW5lbERhdGFzID0gZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhbmVsRGF0YXMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFuZWxEYXRhcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhtemdouWIneWni+WMlueKtuaAgVxyXG4gICAgICogQHBhcmFtIHN0YXRlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0SW5pdFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbUluaXQgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5pdFN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tSW5pdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlumhtemdolxyXG4gICAgICog5Y+q5Zyo6aaW5qyh5Yqg6L2955qE5pe25YCZ6LCD55So5LiA5qyhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0VmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEluaXRTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWxleekuumhtemdolxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1ZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0SW5pdFN0YXRlKCkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+mhtemdolxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi35paw6aG16Z2iXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoVmlldygpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIt+aWsOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmcmVzaERhdGEoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKiDngrnlh7vkuovku7YgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHB1YmxpYyByZWdpc3RlckNsaWNrTGlzdGVuZXIoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKuS6i+S7tuebkeWQrCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcigpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVucmVnaXN0ZXJFdmVudExpc3RlbmVyKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29jb3PnlJ/lkb3lkajmnJ/mlrnms5UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XHJcbiAgICAgICAgLy/liJ3lp4vljJblsY/olL3kuovku7blsYJcclxuICAgICAgICBpZiAodGhpcy5fdWlTY3JlZW5CZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VpU2NyZWVuQmcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYW5lbEJhY2tncm91bmRcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91aVNjcmVlbkJnID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dXYXJuKHRoaXMubm9kZS5uYW1lICsgXCJub3QgQ2hpbGQgcGFuZWxCYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl91aVNjcmVlbkJnICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdWlTY3JlZW5CZy5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5bGP6JS95LiL5bGC54K55Ye75LqL5Lu2XCIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5rOo5YaM5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn0iXX0=