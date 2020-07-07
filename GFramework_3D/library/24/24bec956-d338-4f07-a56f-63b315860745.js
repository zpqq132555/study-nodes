System.register(["cc", "code-quality:cr", "../tools/DebugUtil.js", "./UIBasePanel.js", "./UIConfig.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Component, find, instantiate, loader, Node, Prefab, _decorator, DebugUtil, UIBasePanel, UIConfig, UIPanels, _dec, _class, _temp, _crd, ccclass, property, UIPanelType, UIManager;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "../tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBasePanel(extras) {
    _reporterNs.report("UIBasePanel", "./UIBasePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanels(extras) {
    _reporterNs.report("UIPanels", "./UIConfig", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0,
    UIPanelType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      find = _cc.find;
      instantiate = _cc.instantiate;
      loader = _cc.loader;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_toolsDebugUtilJs) {
      DebugUtil = _toolsDebugUtilJs.DebugUtil;
    }, function (_UIBasePanelJs) {
      UIBasePanel = _UIBasePanelJs.UIBasePanel;
    }, function (_UIConfigJs) {
      UIConfig = _UIConfigJs.UIConfig;
      UIPanels = _UIConfigJs.UIPanels;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "24beclW0zhPB6VvY7MVhgdF", "UIManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (UIPanelType) {
        UIPanelType[UIPanelType["FullPanel"] = 0] = "FullPanel";
        UIPanelType[UIPanelType["PopPanel"] = 1] = "PopPanel";
        UIPanelType[UIPanelType["TopPanel"] = 2] = "TopPanel";
      })(UIPanelType || _export("UIPanelType", UIPanelType = {}));

      /**
       * UI管理器，使用要求如下：
       * 1、每个场景都要有个Canvas对象，作为UI界面挂载的根节点
       * 2、每个场景的Canvas对象下都有有两个子对象，BaseLayer和TopLayer，TopLayer中显示始终居于屏幕顶层的内容（例如插屏广告）
       */
      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UIManager, _Component);

        function UIManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.uiBaseRoot = null;
          _this.uiTopRoot = null;
          _this.ui2LoadList = [];
          _this.uiResList = [];
          _this.showingUIList = [];
          _this.isLoadingUIRes = false;
          return _this;
        }

        _createClass(UIManager, [{
          key: "init",
          //当前帧是否在加载UI页面，一帧只加载一个UI页面

          /**************************初始化、配置********************************/

          /**
           * 初始化
           * @param rootNode 
           */
          value: function init() {}
        }, {
          key: "setUIRoot",
          value: function setUIRoot(rootNode) {
            if (rootNode == null) {
              this.uiBaseRoot = null;
              this.uiTopRoot = null;
            } else {
              this.uiBaseRoot = rootNode.getChildByName("BaseLayer");
              this.uiTopRoot = rootNode.getChildByName("TopLayer");

              if (this.uiBaseRoot == null) {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logError("Canvas中不存在BaseLayer子节点");
              }

              if (this.uiTopRoot == null) {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logError("Canvas中不存在TopLayer子节点");
              }
            }
          }
        }, {
          key: "getUIBaseRoot",
          value: function getUIBaseRoot() {
            if (this.uiBaseRoot == null || this.uiTopRoot == null) {
              var canvasNode = find("Canvas");

              if (canvasNode != null) {
                this.setUIRoot(find("Canvas"));
              } else {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logError("检查当前场景是否存在Canvas节点");
              }
            }

            return this.uiBaseRoot;
          }
        }, {
          key: "getUITopRoot",
          value: function getUITopRoot() {
            if (this.uiBaseRoot == null || this.uiTopRoot == null) {
              var canvasNode = find("Canvas");

              if (canvasNode != null) {
                this.setUIRoot(find("Canvas"));
              } else {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logError("检查当前场景是否存在Canvas节点");
              }
            }

            return this.uiTopRoot;
          }
          /************************** 开放功能接口 ********************************/

          /**
           * 打开一个UI页面
           * 如果是全屏页面则关闭其他页面
           * @param panelType 
           * @param uiid 
           * @param autoClose 是否允许自动关闭该页面，例如广告弹窗页面可以设置为false
           * @param datas 
           * @param callback 
           * @param target 
           */

        }, {
          key: "openUIPanel",
          value: function openUIPanel(panelType, uiid) {
            var datas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var target = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var uiName = (_crd && UIPanels === void 0 ? (_reportPossibleCrUseOfUIPanels({
              error: Error()
            }), UIPanels) : UIPanels)[uiid]; //判断页面是否已经显示过了

            if (this.checkUIShow(uiid)) {
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logInfo("UI页面已经显示了：" + uiName);
              return;
            } //判断页面资源是否加载了


            if (this.uiResList[uiid] == null) {
              //首次加载资源
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logInfo("尝试显示UI页面，首次加载：" + uiName);
              this.uiResList[uiid] = {
                reloadActive: -1
              };
              var loadObj = {
                typeId: panelType,
                //正常页面是0，弹窗页面是1
                uiid: uiid,
                resName: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).ResPath + uiName,
                callback: callback,
                target: target,
                datas: datas
              };
              this.ui2LoadList.push(loadObj); //DebugUtil.logInfo(this.ui2LoadList);
            } else {
              //判断是否加载完成
              if (this.uiResList[uiid] instanceof Node) {
                //已经加载完毕了
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo("尝试显示UI页面，缓存获取：" + uiName); //关闭其他UI界面

                if (panelType == UIPanelType.FullPanel) {
                  this.clearUIObj();
                } //重新设置页面数据


                var basePanel = this.uiResList[uiid].getComponent(_crd && UIBasePanel === void 0 ? (_reportPossibleCrUseOfUIBasePanel({
                  error: Error()
                }), UIBasePanel) : UIBasePanel);

                if (basePanel) {
                  basePanel.setPanelDatas(datas);
                } //显示页面


                this.pushUIObj2ShowList(this.uiResList[uiid], panelType); //显示成功的回调

                if (callback != null && target != null) {
                  callback.call(target, this.uiResList[uiid]);
                }
              } else {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo("UI页面资源正在加载中，请勿频繁调用：" + uiName);
              }
            }
          }
          /**
           * 关闭一个指定的UI页面
           * @param uiid 
           */

        }, {
          key: "closeUIPanel",
          value: function closeUIPanel(uiid) {
            var uiName = (_crd && UIPanels === void 0 ? (_reportPossibleCrUseOfUIPanels({
              error: Error()
            }), UIPanels) : UIPanels)[uiid]; //判断页面是否已经显示过了

            if (!this.checkUIShow(uiid)) {
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logInfo("UI页面已经关闭了：" + uiName);
              return;
            }

            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("关闭UI页面：" + uiName);

            if (this.uiResList[uiid] != null) {
              if (this.uiResList[uiid] instanceof Node) {
                this.popUIObj2ShowList(this.uiResList[uiid]);
              } else {
                this.uiResList[uiid].reloadActive = 1;
              }
            }
          }
          /************************** 内部功能接口 ********************************/

          /**
           * 关闭当前显示的所有页面
           */

        }, {
          key: "clearUIObj",
          value: function clearUIObj() {
            var forceClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("关闭其他所有UI页面", this.showingUIList);

            for (var i = this.showingUIList.length - 1; i >= 0; i--) {
              if (forceClear == true) {
                //强制清除所有UI界面
                this.popUIObj2ShowList(this.showingUIList[i]);
              } else if (this.showingUIList[i].parent.name == "BaseLayer") {
                //只清除BaseLayer中的UI界面
                this.popUIObj2ShowList(this.showingUIList[i]);
              }
            }
          }
          /**
           * 添加一个UI页面到显示列表并显示在最上层
           */

        }, {
          key: "pushUIObj2ShowList",
          value: function pushUIObj2ShowList(uiObj, panelType) {
            this.showingUIList.unshift(uiObj);

            if (panelType == UIPanelType.TopPanel) {
              if (uiObj.parent == null || uiObj.parent == undefined) {
                this.getUITopRoot().addChild(uiObj);
              }
            } else {
              if (uiObj.parent == null || uiObj.parent == undefined) {
                this.getUIBaseRoot().addChild(uiObj);
              }
            }

            var basePanel = uiObj.getComponent(_crd && UIBasePanel === void 0 ? (_reportPossibleCrUseOfUIBasePanel({
              error: Error()
            }), UIBasePanel) : UIBasePanel);

            if (basePanel) {
              basePanel.showView();
            }

            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("成功显示UI页面：" + uiObj.name);
          }
        }, {
          key: "popUIObj2ShowList",
          value: function popUIObj2ShowList(uiObj) {
            var popObj = null;

            for (var i = this.showingUIList.length - 1; i >= 0; i--) {
              if (uiObj == this.showingUIList[i]) {
                popObj = this.showingUIList.splice(i, 1)[0];
                break;
              }
            }

            if (popObj != null) {
              if (popObj.getComponent(_crd && UIBasePanel === void 0 ? (_reportPossibleCrUseOfUIBasePanel({
                error: Error()
              }), UIBasePanel) : UIBasePanel)) {
                popObj.getComponent(_crd && UIBasePanel === void 0 ? (_reportPossibleCrUseOfUIBasePanel({
                  error: Error()
                }), UIBasePanel) : UIBasePanel).hideView();
              } else {
                popObj.removeFromParent();
              }
            }
          }
          /**
           * 判断某个UI页面是否在显示中
           * @param uiid
           */

        }, {
          key: "checkUIShow",
          value: function checkUIShow(uiid) {
            for (var i = 0; i < this.showingUIList.length; i++) {
              if (this.showingUIList[i].name == (_crd && UIPanels === void 0 ? (_reportPossibleCrUseOfUIPanels({
                error: Error()
              }), UIPanels) : UIPanels)[uiid]) {
                return true;
              }
            }

            return false;
          }
          /************************** 资源加载 ********************************/

        }, {
          key: "update",
          value: function update(dt) {
            var _this2 = this;

            if (!this.isLoadingUIRes) {
              if (this.ui2LoadList.length > 0) {
                this.isLoadingUIRes = true;
                var loadObj = this.ui2LoadList.shift();
                var self = this;
                loader.loadRes(loadObj.resName, Prefab, function (err, prefab) {
                  _this2.isLoadingUIRes = false;

                  if (!err) {
                    //DebugUtil.logInfo("加载UI页面资源完成：",UIPanels[loadObj.uiid]);
                    (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                      error: Error()
                    }), DebugUtil) : DebugUtil).logInfo("加载UI页面资源完成：", (_crd && UIPanels === void 0 ? (_reportPossibleCrUseOfUIPanels({
                      error: Error()
                    }), UIPanels) : UIPanels)[loadObj.uiid]);
                    self.loadUICallBack(prefab, loadObj);
                  } else {
                    (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                      error: Error()
                    }), DebugUtil) : DebugUtil).logError("加载UI页面资源出错：", err);
                  }
                });
              }
            }
          }
          /**
           * 加载完页面资源后的回调
           * @param prefab 
           * @param loadObj 
           */

        }, {
          key: "loadUICallBack",
          value: function loadUICallBack(prefab, loadObj) {
            //判断是独立页面还是弹窗
            if (loadObj.typeId == 0) {
              //独立页面,关闭其他所有页面
              this.clearUIObj();
            }

            var uiNode = instantiate(prefab);
            var basePanel = uiNode.getComponent(_crd && UIBasePanel === void 0 ? (_reportPossibleCrUseOfUIBasePanel({
              error: Error()
            }), UIBasePanel) : UIBasePanel);

            if (basePanel) {
              basePanel.setPanelDatas(loadObj.datas);
            }

            if (this.uiResList[loadObj.uiid] != null) {
              if (this.uiResList[loadObj.uiid].reloadActive != 1) {
                //加载完成之前没有被关闭了
                //显示UI界面
                this.pushUIObj2ShowList(uiNode, loadObj.typeId); //显示成功的回调

                if (loadObj.callback != null && loadObj.target != null) {
                  loadObj.callback.call(loadObj.target, loadObj.datas);
                }
              } else {
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logWarn("UI页面加载完成前就被关闭了：" + (_crd && UIPanels === void 0 ? (_reportPossibleCrUseOfUIPanels({
                  error: Error()
                }), UIPanels) : UIPanels)[loadObj.uiid]);
              } //添加到缓存中


              this.uiResList[loadObj.uiid] = uiNode;
              this.uiResList[loadObj.uiid].resName = loadObj.resName;
            } else {
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logError("加载资源出错，资源缓存是null");
            }
          }
          /**
           * 释放所有的UI资源
           */

        }, {
          key: "releaseAllUIRes",
          value: function releaseAllUIRes() {
            //删除加载过得UI对象
            for (var i = 0; i < this.uiResList.length; i++) {
              if (this.uiResList[i] != null && this.uiResList[i] instanceof Node) {
                this.uiResList[i].destroy();
              }
            } //删除加载中的UI资源


            for (var _i = 0; _i < this.uiResList.length; _i++) {
              if (this.uiResList[_i] != null && this.uiResList[_i] instanceof Node) {
                loader.releaseRes(this.uiResList[_i].resName);
              }
            }

            this.uiResList = [];
            this.showingUIList = [];
            this.ui2LoadList = [];
          }
        }]);

        return UIManager;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImZpbmQiLCJpbnN0YW50aWF0ZSIsImxvYWRlciIsIk5vZGUiLCJQcmVmYWIiLCJfZGVjb3JhdG9yIiwiRGVidWdVdGlsIiwiVUlCYXNlUGFuZWwiLCJVSUNvbmZpZyIsIlVJUGFuZWxzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlQYW5lbFR5cGUiLCJVSU1hbmFnZXIiLCJ1aUJhc2VSb290IiwidWlUb3BSb290IiwidWkyTG9hZExpc3QiLCJ1aVJlc0xpc3QiLCJzaG93aW5nVUlMaXN0IiwiaXNMb2FkaW5nVUlSZXMiLCJyb290Tm9kZSIsImdldENoaWxkQnlOYW1lIiwibG9nRXJyb3IiLCJjYW52YXNOb2RlIiwic2V0VUlSb290IiwicGFuZWxUeXBlIiwidWlpZCIsImRhdGFzIiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJ1aU5hbWUiLCJjaGVja1VJU2hvdyIsImxvZ0luZm8iLCJyZWxvYWRBY3RpdmUiLCJsb2FkT2JqIiwidHlwZUlkIiwicmVzTmFtZSIsIlJlc1BhdGgiLCJwdXNoIiwiRnVsbFBhbmVsIiwiY2xlYXJVSU9iaiIsImJhc2VQYW5lbCIsImdldENvbXBvbmVudCIsInNldFBhbmVsRGF0YXMiLCJwdXNoVUlPYmoyU2hvd0xpc3QiLCJjYWxsIiwicG9wVUlPYmoyU2hvd0xpc3QiLCJmb3JjZUNsZWFyIiwiaSIsImxlbmd0aCIsInBhcmVudCIsIm5hbWUiLCJ1aU9iaiIsInVuc2hpZnQiLCJUb3BQYW5lbCIsInVuZGVmaW5lZCIsImdldFVJVG9wUm9vdCIsImFkZENoaWxkIiwiZ2V0VUlCYXNlUm9vdCIsInNob3dWaWV3IiwicG9wT2JqIiwic3BsaWNlIiwiaGlkZVZpZXciLCJyZW1vdmVGcm9tUGFyZW50IiwiZHQiLCJzaGlmdCIsInNlbGYiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwibG9hZFVJQ2FsbEJhY2siLCJ1aU5vZGUiLCJsb2dXYXJuIiwiZGVzdHJveSIsInJlbGVhc2VSZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ3BEQyxNQUFBQSxTLHFCQUFBQSxTOztBQUNBQyxNQUFBQSxXLGtCQUFBQSxXOztBQUNBQyxNQUFBQSxRLGVBQUFBLFE7QUFBVUMsTUFBQUEsUSxlQUFBQSxROzs7Ozs7QUFDWEMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7aUJBRUxDLFc7QUFBQUEsUUFBQUEsVyxDQUFBQSxXO0FBQUFBLFFBQUFBLFcsQ0FBQUEsVztBQUFBQSxRQUFBQSxXLENBQUFBLFc7U0FBQUEsVywyQkFBQUEsVzs7QUFlWjs7Ozs7MkJBTWFDLFMsV0FEWkgsT0FBTyxDQUFDLFdBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQUdJSSxVLEdBQW1CLEk7Z0JBQ25CQyxTLEdBQWtCLEk7Z0JBQ2xCQyxXLEdBQTJCLEU7Z0JBQzNCQyxTLEdBQW1CLEU7Z0JBQ25CQyxhLEdBQXdCLEU7Z0JBQ3hCQyxjLEdBQWlCLEs7Ozs7OztBQUFXOztBQUVwQzs7QUFDQTs7OztpQ0FJb0IsQ0FFbkI7OztvQ0FFZ0JDLFEsRUFBc0I7QUFDbkMsZ0JBQUlBLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNsQixtQkFBS04sVUFBTCxHQUFrQixJQUFsQjtBQUNBLG1CQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsbUJBQUtELFVBQUwsR0FBa0JNLFFB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LE9BQTdCLEdBQXVDRixPQUFPLENBQUNFLE9BQS9DO0FBQ0gsYUFmRCxNQWdCSztBQUNEO0FBQUE7QUFBQSwwQ0FBVWQsUUFBVixDQUFtQixrQkFBbkI7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs0Q0FHK0I7QUFDM0I7QUFDQSxpQkFBSyxJQUFJMEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLL0IsU0FBTCxDQUFlZ0MsTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDNUMsa0JBQUksS0FBSy9CLFNBQUwsQ0FBZStCLENBQWYsS0FBcUIsSUFBckIsSUFBNkIsS0FBSy9CLFNBQUwsQ0FBZStCLENBQWYsYUFBNkI3QyxJQUE5RCxFQUFvRTtBQUNoRSxxQkFBS2MsU0FBTCxDQUFlK0IsQ0FBZixFQUFrQnlCLE9BQWxCO0FBQ0g7QUFDSixhQU4wQixDQU8zQjs7O0FBQ0EsaUJBQUssSUFBSXpCLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsS0FBSy9CLFNBQUwsQ0FBZWdDLE1BQW5DLEVBQTJDRCxFQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGtCQUFJLEtBQUsvQixTQUFMLENBQWUrQixFQUFmLEtBQXFCLElBQXJCLElBQTZCLEtBQUsvQixTQUFMLENBQWUrQixFQUFmLGFBQTZCN0MsSUFBOUQsRUFBb0U7QUFDaEVELGdCQUFBQSxNQUFNLENBQUN3RSxVQUFQLENBQWtCLEtBQUt6RCxTQUFMLENBQWUrQixFQUFmLEVBQWtCWixPQUFwQztBQUNIO0FBQ0o7O0FBQ0QsaUJBQUtuQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsaUJBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxpQkFBS0YsV0FBTCxHQUFtQixFQUFuQjtBQUNIOzs7O1FBblMwQmpCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZpbmQsIGluc3RhbnRpYXRlLCBsb2FkZXIsIE5vZGUsIFByZWZhYiwgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi4vdG9vbHMvRGVidWdVdGlsXCI7XHJcbmltcG9ydCB7IFVJQmFzZVBhbmVsIH0gZnJvbSBcIi4vVUlCYXNlUGFuZWxcIjtcclxuaW1wb3J0IHsgVUlDb25maWcsIFVJUGFuZWxzIH0gZnJvbSBcIi4vVUlDb25maWdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFVJUGFuZWxUeXBlIHtcclxuICAgIEZ1bGxQYW5lbCA9IDAsICAgICAgICAgIC8v5YWo5bGP6aG16Z2iXHJcbiAgICBQb3BQYW5lbCA9IDEsICAgICAgICAgICAvL+W8ueeql+mhtemdolxyXG4gICAgVG9wUGFuZWwgPSAyLCAgICAgICAgICAgLy/nva7pobbpobXpnaJcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJTG9hZE9iaiB7XHJcbiAgICB0eXBlSWQ6IG51bWJlcixcclxuICAgIHVpaWQ6IFVJUGFuZWxzLFxyXG4gICAgcmVzTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQsXHJcbiAgICB0YXJnZXQ6IGFueSxcclxuICAgIGRhdGFzOiBhbnksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVSeeuoeeQhuWZqO+8jOS9v+eUqOimgeaxguWmguS4i++8mlxyXG4gKiAx44CB5q+P5Liq5Zy65pmv6YO96KaB5pyJ5LiqQ2FudmFz5a+56LGh77yM5L2c5Li6VUnnlYzpnaLmjILovb3nmoTmoLnoioLngrlcclxuICogMuOAgeavj+S4quWcuuaZr+eahENhbnZhc+WvueixoeS4i+mDveacieacieS4pOS4quWtkOWvueixoe+8jEJhc2VMYXllcuWSjFRvcExheWVy77yMVG9wTGF5ZXLkuK3mmL7npLrlp4vnu4jlsYXkuo7lsY/luZXpobblsYLnmoTlhoXlrrnvvIjkvovlpoLmj5LlsY/lub/lkYrvvIlcclxuICovXHJcbkBjY2NsYXNzKFwiVUlNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgdWlCYXNlUm9vdDogTm9kZSA9IG51bGw7ICAgICAgICAgLy9VSemhtemdouaMgui9veeahOagueiKgueCuVxyXG4gICAgcHJpdmF0ZSB1aVRvcFJvb3Q6IE5vZGUgPSBudWxsOyAgICAgICAgIC8vVUnpobXpnaLmjILovb3nmoTmoLnoioLngrlcclxuICAgIHByaXZhdGUgdWkyTG9hZExpc3Q6IFVJTG9hZE9ialtdID0gW107ICAgICAgICAvL+W+heWKoOi9vei1hOa6kOeahFVJ6aG16Z2iXHJcbiAgICBwcml2YXRlIHVpUmVzTGlzdDogYW55W10gPSBbXTsgICAgICAgICAgLy9VSemhtemdoueahOi1hOa6kOe8k+WtmFxyXG4gICAgcHJpdmF0ZSBzaG93aW5nVUlMaXN0OiBOb2RlW10gPSBbXTsgICAgICAvL+W9k+WJjeaYvuekuuS4reeahFVJ6aG16Z2iXHJcbiAgICBwcml2YXRlIGlzTG9hZGluZ1VJUmVzID0gZmFsc2U7ICAgICAvL+W9k+WJjeW4p+aYr+WQpuWcqOWKoOi9vVVJ6aG16Z2i77yM5LiA5bin5Y+q5Yqg6L295LiA5LiqVUnpobXpnaJcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKirliJ3lp4vljJbjgIHphY3nva4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gcm9vdE5vZGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VUlSb290KHJvb3ROb2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHJvb3ROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy51aUJhc2VSb290ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy51aVRvcFJvb3QgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlCYXNlUm9vdCA9IHJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQmFzZUxheWVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpVG9wUm9vdCA9IHJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiVG9wTGF5ZXJcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQmFzZVJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwiQ2FudmFz5Lit5LiN5a2Y5ZyoQmFzZUxheWVy5a2Q6IqC54K5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpVG9wUm9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nRXJyb3IoXCJDYW52YXPkuK3kuI3lrZjlnKhUb3BMYXllcuWtkOiKgueCuVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VUlCYXNlUm9vdCgpOiBOb2RlIHtcclxuICAgICAgICBpZiAodGhpcy51aUJhc2VSb290ID09IG51bGwgfHwgdGhpcy51aVRvcFJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXNOb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VUlSb290KGZpbmQoXCJDYW52YXNcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwi5qOA5p+l5b2T5YmN5Zy65pmv5piv5ZCm5a2Y5ZyoQ2FudmFz6IqC54K5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVpQmFzZVJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVJVG9wUm9vdCgpOiBOb2RlIHtcclxuICAgICAgICBpZiAodGhpcy51aUJhc2VSb290ID09IG51bGwgfHwgdGhpcy51aVRvcFJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXNOb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VUlSb290KGZpbmQoXCJDYW52YXNcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwi5qOA5p+l5b2T5YmN5Zy65pmv5piv5ZCm5a2Y5ZyoQ2FudmFz6IqC54K5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVpVG9wUm9vdDtcclxuICAgIH1cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKiog5byA5pS+5Yqf6IO95o6l5Y+jICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDkuIDkuKpVSemhtemdolxyXG4gICAgICog5aaC5p6c5piv5YWo5bGP6aG16Z2i5YiZ5YWz6Zet5YW25LuW6aG16Z2iXHJcbiAgICAgKiBAcGFyYW0gcGFuZWxUeXBlIFxyXG4gICAgICogQHBhcmFtIHVpaWQgXHJcbiAgICAgKiBAcGFyYW0gYXV0b0Nsb3NlIOaYr+WQpuWFgeiuuOiHquWKqOWFs+mXreivpemhtemdou+8jOS+i+WmguW5v+WRiuW8ueeql+mhtemdouWPr+S7peiuvue9ruS4umZhbHNlXHJcbiAgICAgKiBAcGFyYW0gZGF0YXMgXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlblVJUGFuZWwocGFuZWxUeXBlOiBVSVBhbmVsVHlwZSwgdWlpZDogVUlQYW5lbHMsIGRhdGFzOiBhbnkgPSBudWxsLCBjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCA9IG51bGwsIHRhcmdldDogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB1aU5hbWUgPSBVSVBhbmVsc1t1aWlkXTtcclxuICAgICAgICAvL+WIpOaWremhtemdouaYr+WQpuW3sue7j+aYvuekuui/h+S6hlxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrVUlTaG93KHVpaWQpKSB7XHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiVUnpobXpnaLlt7Lnu4/mmL7npLrkuobvvJpcIiArIHVpTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yik5pat6aG16Z2i6LWE5rqQ5piv5ZCm5Yqg6L295LqGXHJcbiAgICAgICAgaWYgKHRoaXMudWlSZXNMaXN0W3VpaWRdID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy/pppbmrKHliqDovb3otYTmupBcclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLlsJ3or5XmmL7npLpVSemhtemdou+8jOmmluasoeWKoOi9ve+8mlwiICsgdWlOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy51aVJlc0xpc3RbdWlpZF0gPSB7IHJlbG9hZEFjdGl2ZTogLTEgfTtcclxuICAgICAgICAgICAgbGV0IGxvYWRPYmogPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlSWQ6IHBhbmVsVHlwZSwgICAgICAgICAvL+ato+W4uOmhtemdouaYrzDvvIzlvLnnqpfpobXpnaLmmK8xXHJcbiAgICAgICAgICAgICAgICB1aWlkOiB1aWlkLFxyXG4gICAgICAgICAgICAgICAgcmVzTmFtZTogVUlDb25maWcuUmVzUGF0aCArIHVpTmFtZSxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgZGF0YXM6IGRhdGFzLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVpMkxvYWRMaXN0LnB1c2gobG9hZE9iaik7XHJcbiAgICAgICAgICAgIC8vRGVidWdVdGlsLmxvZ0luZm8odGhpcy51aTJMb2FkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuWKoOi9veWujOaIkFxyXG4gICAgICAgICAgICBpZiAodGhpcy51aVJlc0xpc3RbdWlpZF0gaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+W3sue7j+WKoOi9veWujOavleS6hlxyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLlsJ3or5XmmL7npLpVSemhtemdou+8jOe8k+WtmOiOt+WPlu+8mlwiICsgdWlOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8v5YWz6Zet5YW25LuWVUnnlYzpnaJcclxuICAgICAgICAgICAgICAgIGlmIChwYW5lbFR5cGUgPT0gVUlQYW5lbFR5cGUuRnVsbFBhbmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclVJT2JqKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+mHjeaWsOiuvue9rumhtemdouaVsOaNrlxyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2VQYW5lbDogVUlCYXNlUGFuZWwgPSB0aGlzLnVpUmVzTGlzdFt1aWlkXS5nZXRDb21wb25lbnQoVUlCYXNlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2VQYW5lbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQYW5lbC5zZXRQYW5lbERhdGFzKGRhdGFzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5pi+56S66aG16Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hVSU9iajJTaG93TGlzdCh0aGlzLnVpUmVzTGlzdFt1aWlkXSwgcGFuZWxUeXBlKTtcclxuICAgICAgICAgICAgICAgIC8v5pi+56S65oiQ5Yqf55qE5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0YXJnZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCB0aGlzLnVpUmVzTGlzdFt1aWlkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIlVJ6aG16Z2i6LWE5rqQ5q2j5Zyo5Yqg6L295Lit77yM6K+35Yu/6aKR57mB6LCD55So77yaXCIgKyB1aU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5LiA5Liq5oyH5a6a55qEVUnpobXpnaJcclxuICAgICAqIEBwYXJhbSB1aWlkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2VVSVBhbmVsKHVpaWQ6IFVJUGFuZWxzKSB7XHJcbiAgICAgICAgbGV0IHVpTmFtZSA9IFVJUGFuZWxzW3VpaWRdO1xyXG4gICAgICAgIC8v5Yik5pat6aG16Z2i5piv5ZCm5bey57uP5pi+56S66L+H5LqGXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrVUlTaG93KHVpaWQpKSB7XHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiVUnpobXpnaLlt7Lnu4/lhbPpl63kuobvvJpcIiArIHVpTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLlhbPpl61VSemhtemdou+8mlwiICsgdWlOYW1lKTtcclxuICAgICAgICBpZiAodGhpcy51aVJlc0xpc3RbdWlpZF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51aVJlc0xpc3RbdWlpZF0gaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcFVJT2JqMlNob3dMaXN0KHRoaXMudWlSZXNMaXN0W3VpaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlSZXNMaXN0W3VpaWRdLnJlbG9hZEFjdGl2ZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqIOWGhemDqOWKn+iDveaOpeWPoyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5b2T5YmN5pi+56S655qE5omA5pyJ6aG16Z2iXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhclVJT2JqKGZvcmNlQ2xlYXI6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5YWz6Zet5YW25LuW5omA5pyJVUnpobXpnaJcIiwgdGhpcy5zaG93aW5nVUlMaXN0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zaG93aW5nVUlMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JjZUNsZWFyID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8v5by65Yi25riF6Zmk5omA5pyJVUnnlYzpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wVUlPYmoyU2hvd0xpc3QodGhpcy5zaG93aW5nVUlMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNob3dpbmdVSUxpc3RbaV0ucGFyZW50Lm5hbWUgPT0gXCJCYXNlTGF5ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgLy/lj6rmuIXpmaRCYXNlTGF5ZXLkuK3nmoRVSeeVjOmdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVSU9iajJTaG93TGlzdCh0aGlzLnNob3dpbmdVSUxpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5LiqVUnpobXpnaLliLDmmL7npLrliJfooajlubbmmL7npLrlnKjmnIDkuIrlsYJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwdXNoVUlPYmoyU2hvd0xpc3QodWlPYmo6IE5vZGUsIHBhbmVsVHlwZTogVUlQYW5lbFR5cGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3dpbmdVSUxpc3QudW5zaGlmdCh1aU9iaik7XHJcbiAgICAgICAgaWYgKHBhbmVsVHlwZSA9PSBVSVBhbmVsVHlwZS5Ub3BQYW5lbCkge1xyXG4gICAgICAgICAgICBpZiAodWlPYmoucGFyZW50ID09IG51bGwgfHwgdWlPYmoucGFyZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSVRvcFJvb3QoKS5hZGRDaGlsZCh1aU9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodWlPYmoucGFyZW50ID09IG51bGwgfHwgdWlPYmoucGFyZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSUJhc2VSb290KCkuYWRkQ2hpbGQodWlPYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYXNlUGFuZWw6IFVJQmFzZVBhbmVsID0gdWlPYmouZ2V0Q29tcG9uZW50KFVJQmFzZVBhbmVsKTtcclxuICAgICAgICBpZiAoYmFzZVBhbmVsKSB7XHJcbiAgICAgICAgICAgIGJhc2VQYW5lbC5zaG93VmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuaIkOWKn+aYvuekulVJ6aG16Z2i77yaXCIgKyB1aU9iai5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvcFVJT2JqMlNob3dMaXN0KHVpT2JqOiBOb2RlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBvcE9iajogTm9kZSA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2hvd2luZ1VJTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodWlPYmogPT0gdGhpcy5zaG93aW5nVUlMaXN0W2ldKSB7XHJcbiAgICAgICAgICAgICAgICBwb3BPYmogPSB0aGlzLnNob3dpbmdVSUxpc3Quc3BsaWNlKGksIDEpWzBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcE9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3BPYmouZ2V0Q29tcG9uZW50KFVJQmFzZVBhbmVsKSkge1xyXG4gICAgICAgICAgICAgICAgcG9wT2JqLmdldENvbXBvbmVudChVSUJhc2VQYW5lbCkuaGlkZVZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvcE9iai5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mn5DkuKpVSemhtemdouaYr+WQpuWcqOaYvuekuuS4rVxyXG4gICAgICogQHBhcmFtIHVpaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja1VJU2hvdyh1aWlkOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hvd2luZ1VJTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93aW5nVUlMaXN0W2ldLm5hbWUgPT0gVUlQYW5lbHNbdWlpZF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKiDotYTmupDliqDovb0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvYWRpbmdVSVJlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51aTJMb2FkTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1VJUmVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FkT2JqID0gdGhpcy51aTJMb2FkTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMobG9hZE9iai5yZXNOYW1lLCBQcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nVUlSZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RlYnVnVXRpbC5sb2dJbmZvKFwi5Yqg6L29VUnpobXpnaLotYTmupDlrozmiJDvvJpcIixVSVBhbmVsc1tsb2FkT2JqLnVpaWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLliqDovb1VSemhtemdoui1hOa6kOWujOaIkO+8mlwiLCBVSVBhbmVsc1tsb2FkT2JqLnVpaWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2FkVUlDYWxsQmFjayhwcmVmYWIsIGxvYWRPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dFcnJvcihcIuWKoOi9vVVJ6aG16Z2i6LWE5rqQ5Ye66ZSZ77yaXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozpobXpnaLotYTmupDlkI7nmoTlm57osINcclxuICAgICAqIEBwYXJhbSBwcmVmYWIgXHJcbiAgICAgKiBAcGFyYW0gbG9hZE9iaiBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2FkVUlDYWxsQmFjayhwcmVmYWI6IFByZWZhYiwgbG9hZE9iajogVUlMb2FkT2JqKTogdm9pZCB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/ni6znq4vpobXpnaLov5jmmK/lvLnnqpdcclxuICAgICAgICBpZiAobG9hZE9iai50eXBlSWQgPT0gMCkge1xyXG4gICAgICAgICAgICAvL+eLrOeri+mhtemdoizlhbPpl63lhbbku5bmiYDmnInpobXpnaJcclxuICAgICAgICAgICAgdGhpcy5jbGVhclVJT2JqKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdWlOb2RlOiBOb2RlID0gaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICBsZXQgYmFzZVBhbmVsOiBVSUJhc2VQYW5lbCA9IHVpTm9kZS5nZXRDb21wb25lbnQoVUlCYXNlUGFuZWwpO1xyXG4gICAgICAgIGlmIChiYXNlUGFuZWwpIHtcclxuICAgICAgICAgICAgYmFzZVBhbmVsLnNldFBhbmVsRGF0YXMobG9hZE9iai5kYXRhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnVpUmVzTGlzdFtsb2FkT2JqLnVpaWRdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWlSZXNMaXN0W2xvYWRPYmoudWlpZF0ucmVsb2FkQWN0aXZlICE9IDEpIHtcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQ5LmL5YmN5rKh5pyJ6KKr5YWz6Zet5LqGXHJcbiAgICAgICAgICAgICAgICAvL+aYvuekulVJ55WM6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hVSU9iajJTaG93TGlzdCh1aU5vZGUsIGxvYWRPYmoudHlwZUlkKTtcclxuICAgICAgICAgICAgICAgIC8v5pi+56S65oiQ5Yqf55qE5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZE9iai5jYWxsYmFjayAhPSBudWxsICYmIGxvYWRPYmoudGFyZ2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkT2JqLmNhbGxiYWNrLmNhbGwobG9hZE9iai50YXJnZXQsIGxvYWRPYmouZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ1dhcm4oXCJVSemhtemdouWKoOi9veWujOaIkOWJjeWwseiiq+WFs+mXreS6hu+8mlwiICsgVUlQYW5lbHNbbG9hZE9iai51aWlkXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+a3u+WKoOWIsOe8k+WtmOS4rVxyXG4gICAgICAgICAgICB0aGlzLnVpUmVzTGlzdFtsb2FkT2JqLnVpaWRdID0gdWlOb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnVpUmVzTGlzdFtsb2FkT2JqLnVpaWRdLnJlc05hbWUgPSBsb2FkT2JqLnJlc05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBEZWJ1Z1V0aWwubG9nRXJyb3IoXCLliqDovb3otYTmupDlh7rplJnvvIzotYTmupDnvJPlrZjmmK9udWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHiuaUvuaJgOacieeahFVJ6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWxlYXNlQWxsVUlSZXMoKTogdm9pZCB7XHJcbiAgICAgICAgLy/liKDpmaTliqDovb3ov4flvpdVSeWvueixoVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aVJlc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWlSZXNMaXN0W2ldICE9IG51bGwgJiYgdGhpcy51aVJlc0xpc3RbaV0gaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpUmVzTGlzdFtpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKDpmaTliqDovb3kuK3nmoRVSei1hOa6kFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aVJlc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWlSZXNMaXN0W2ldICE9IG51bGwgJiYgdGhpcy51aVJlc0xpc3RbaV0gaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZXIucmVsZWFzZVJlcyh0aGlzLnVpUmVzTGlzdFtpXS5yZXNOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVpUmVzTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd2luZ1VJTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMudWkyTG9hZExpc3QgPSBbXTtcclxuICAgIH1cclxufVxyXG4iXX0=