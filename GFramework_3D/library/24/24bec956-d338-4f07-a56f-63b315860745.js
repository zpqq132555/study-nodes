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
            } //DebugUtil.logInfo("popUIObj2ShowList:",this.showingUIList);

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
            } //DebugUtil.logInfo("loadUICallBack",this.uiResList[loadObj.uiid]);


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
            } //DebugUtil.logInfo("loadUICallBack",this.uiResList[loadObj.uiid]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJTWFuYWdlci50cyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJmaW5kIiwiaW5zdGFudGlhdGUiLCJsb2FkZXIiLCJOb2RlIiwiUHJlZmFiIiwiX2RlY29yYXRvciIsIkRlYnVnVXRpbCIsIlVJQmFzZVBhbmVsIiwiVUlDb25maWciLCJVSVBhbmVscyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlVJUGFuZWxUeXBlIiwiVUlNYW5hZ2VyIiwidWlCYXNlUm9vdCIsInVpVG9wUm9vdCIsInVpMkxvYWRMaXN0IiwidWlSZXNMaXN0Iiwic2hvd2luZ1VJTGlzdCIsImlzTG9hZGluZ1VJUmVzIiwicm9vdE5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImxvZ0Vycm9yIiwiY2FudmFzTm9kZSIsInNldFVJUm9vdCIsInBhbmVsVHlwZSIsInVpaWQiLCJkYXRhcyIsImNhbGxiYWNrIiwidGFyZ2V0IiwidWlOYW1lIiwiY2hlY2tVSVNob3ciLCJsb2dJbmZvIiwicmVsb2FkQWN0aXZlIiwibG9hZE9iaiIsInR5cGVJZCIsInJlc05hbWUiLCJSZXNQYXRoIiwicHVzaCIsIkZ1bGxQYW5lbCIsImNsZWFyVUlPYmoiLCJiYXNlUGFuZWwiLCJnZXRDb21wb25lbnQiLCJzZXRQYW5lbERhdGFzIiwicHVzaFVJT2JqMlNob3dMaXN0IiwiY2FsbCIsInBvcFVJT2JqMlNob3dMaXN0IiwiZm9yY2VDbGVhciIsImkiLCJsZW5ndGgiLCJwYXJlbnQiLCJuYW1lIiwidWlPYmoiLCJ1bnNoaWZ0IiwiVG9wUGFuZWwiLCJ1bmRlZmluZWQiLCJnZXRVSVRvcFJvb3QiLCJhZGRDaGlsZCIsImdldFVJQmFzZVJvb3QiLCJzaG93VmlldyIsInBvcE9iaiIsInNwbGljZSIsImhpZGVWaWV3IiwicmVtb3ZlRnJvbVBhcmVudCIsImR0Iiwic2hpZnQiLCJzZWxmIiwibG9hZFJlcyIsImVyciIsInByZWZhYiIsImxvYWRVSUNhbGxCYWNrIiwidWlOb2RlIiwibG9nV2FybiIsImRlc3Ryb3kiLCJyZWxlYXNlUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFUsT0FBQUEsVTs7OztBQUNwREMsTUFBQUEsUyxxQkFBQUEsUzs7QUFDQUMsTUFBQUEsVyxrQkFBQUEsVzs7QUFDQUMsTUFBQUEsUSxlQUFBQSxRO0FBQVVDLE1BQUFBLFEsZUFBQUEsUTs7Ozs7O0FBQ1hDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O2lCQUVMQyxXO0FBQUFBLFFBQUFBLFcsQ0FBQUEsVztBQUFBQSxRQUFBQSxXLENBQUFBLFc7QUFBQUEsUUFBQUEsVyxDQUFBQSxXO1NBQUFBLFcsMkJBQUFBLFc7O0FBZVo7Ozs7OzJCQU1hQyxTLFdBRFpILE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFHSUksVSxHQUFtQixJO2dCQUNuQkMsUyxHQUFrQixJO2dCQUNsQkMsVyxHQUEyQixFO2dCQUMzQkMsUyxHQUFtQixFO2dCQUNuQkMsYSxHQUF3QixFO2dCQUN4QkMsYyxHQUFpQixLOzs7Ozs7QUFBVzs7QUFFcEM7O0FBQ0E7Ozs7aUNBSW9CLENBRW5COzs7b0NBRWdCQyxRLEVBQXNCO0FBQ25DLGdCQUFJQSxRQUFRLElBQUksSUFBaEIsRUFBc0I7QUFDbEIsbUJBQUtOLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxtQkFBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNILGFBSEQsTUFHTztBQUNILG1CQUFLRCxVQUFMLEdBQWtCTSxR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ZWlCLE9BQU8sQ0FBQ1IsSUFBdkIsRUFBNkJVLE9BQTdCLEdBQXVDRixPQUFPLENBQUNFLE9BQS9DO0FBQ0gsYUFmRCxNQWdCSztBQUNEO0FBQUE7QUFBQSwwQ0FBVWQsUUFBVixDQUFtQixrQkFBbkI7QUFDSCxhQS9CNEQsQ0FnQzdEOztBQUNIO0FBRUQ7Ozs7Ozs0Q0FHK0I7QUFDM0I7QUFDQSxpQkFBSyxJQUFJMEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLL0IsU0FBTCxDQUFlZ0MsTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDNUMsa0JBQUksS0FBSy9CLFNBQUwsQ0FBZStCLENBQWYsS0FBcUIsSUFBckIsSUFBNkIsS0FBSy9CLFNBQUwsQ0FBZStCLENBQWYsYUFBNkI3QyxJQUE5RCxFQUFvRTtBQUNoRSxxQkFBS2MsU0FBTCxDQUFlK0IsQ0FBZixFQUFrQnlCLE9BQWxCO0FBQ0g7QUFDSixhQU4wQixDQU8zQjs7O0FBQ0EsaUJBQUssSUFBSXpCLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsS0FBSy9CLFNBQUwsQ0FBZWdDLE1BQW5DLEVBQTJDRCxFQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGtCQUFJLEtBQUsvQixTQUFMLENBQWUrQixFQUFmLEtBQXFCLElBQXJCLElBQTZCLEtBQUsvQixTQUFMLENBQWUrQixFQUFmLGFBQTZCN0MsSUFBOUQsRUFBb0U7QUFDaEVELGdCQUFBQSxNQUFNLENBQUN3RSxVQUFQLENBQWtCLEtBQUt6RCxTQUFMLENBQWUrQixFQUFmLEVBQWtCWixPQUFwQztBQUNIO0FBQ0o7O0FBQ0QsaUJBQUtuQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsaUJBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxpQkFBS0YsV0FBTCxHQUFtQixFQUFuQjtBQUNIOzs7O1FBdFMwQmpCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZpbmQsIGluc3RhbnRpYXRlLCBsb2FkZXIsIE5vZGUsIFByZWZhYiwgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi4vdG9vbHMvRGVidWdVdGlsXCI7XHJcbmltcG9ydCB7IFVJQmFzZVBhbmVsIH0gZnJvbSBcIi4vVUlCYXNlUGFuZWxcIjtcclxuaW1wb3J0IHsgVUlDb25maWcsIFVJUGFuZWxzIH0gZnJvbSBcIi4vVUlDb25maWdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFVJUGFuZWxUeXBlIHtcclxuICAgIEZ1bGxQYW5lbCA9IDAsICAgICAgICAgIC8v5YWo5bGP6aG16Z2iXHJcbiAgICBQb3BQYW5lbCA9IDEsICAgICAgICAgICAvL+W8ueeql+mhtemdolxyXG4gICAgVG9wUGFuZWwgPSAyLCAgICAgICAgICAgLy/nva7pobbpobXpnaJcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJTG9hZE9iaiB7XHJcbiAgICB0eXBlSWQ6IG51bWJlcixcclxuICAgIHVpaWQ6IFVJUGFuZWxzLFxyXG4gICAgcmVzTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQsXHJcbiAgICB0YXJnZXQ6IGFueSxcclxuICAgIGRhdGFzOiBhbnksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVSeeuoeeQhuWZqO+8jOS9v+eUqOimgeaxguWmguS4i++8mlxyXG4gKiAx44CB5q+P5Liq5Zy65pmv6YO96KaB5pyJ5LiqQ2FudmFz5a+56LGh77yM5L2c5Li6VUnnlYzpnaLmjILovb3nmoTmoLnoioLngrlcclxuICogMuOAgeavj+S4quWcuuaZr+eahENhbnZhc+WvueixoeS4i+mDveacieacieS4pOS4quWtkOWvueixoe+8jEJhc2VMYXllcuWSjFRvcExheWVy77yMVG9wTGF5ZXLkuK3mmL7npLrlp4vnu4jlsYXkuo7lsY/luZXpobblsYLnmoTlhoXlrrnvvIjkvovlpoLmj5LlsY/lub/lkYrvvIlcclxuICovXHJcbkBjY2NsYXNzKFwiVUlNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgdWlCYXNlUm9vdDogTm9kZSA9IG51bGw7ICAgICAgICAgLy9VSemhtemdouaMgui9veeahOagueiKgueCuVxyXG4gICAgcHJpdmF0ZSB1aVRvcFJvb3Q6IE5vZGUgPSBudWxsOyAgICAgICAgIC8vVUnpobXpnaLmjILovb3nmoTmoLnoioLngrlcclxuICAgIHByaXZhdGUgdWkyTG9hZExpc3Q6IFVJTG9hZE9ialtdID0gW107ICAgICAgICAvL+W+heWKoOi9vei1hOa6kOeahFVJ6aG16Z2iXHJcbiAgICBwcml2YXRlIHVpUmVzTGlzdDogYW55W10gPSBbXTsgICAgICAgICAgLy9VSemhtemdoueahOi1hOa6kOe8k+WtmFxyXG4gICAgcHJpdmF0ZSBzaG93aW5nVUlMaXN0OiBOb2RlW10gPSBbXTsgICAgICAvL+W9k+WJjeaYvuekuuS4reeahFVJ6aG16Z2iXHJcbiAgICBwcml2YXRlIGlzTG9hZGluZ1VJUmVzID0gZmFsc2U7ICAgICAvL+W9k+WJjeW4p+aYr+WQpuWcqOWKoOi9vVVJ6aG16Z2i77yM5LiA5bin5Y+q5Yqg6L295LiA5LiqVUnpobXpnaJcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKirliJ3lp4vljJbjgIHphY3nva4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gcm9vdE5vZGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VUlSb290KHJvb3ROb2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHJvb3ROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy51aUJhc2VSb290ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy51aVRvcFJvb3QgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlCYXNlUm9vdCA9IHJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQmFzZUxheWVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpVG9wUm9vdCA9IHJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiVG9wTGF5ZXJcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQmFzZVJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwiQ2FudmFz5Lit5LiN5a2Y5ZyoQmFzZUxheWVy5a2Q6IqC54K5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpVG9wUm9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nRXJyb3IoXCJDYW52YXPkuK3kuI3lrZjlnKhUb3BMYXllcuWtkOiKgueCuVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VUlCYXNlUm9vdCgpOiBOb2RlIHtcclxuICAgICAgICBpZiAodGhpcy51aUJhc2VSb290ID09IG51bGwgfHwgdGhpcy51aVRvcFJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXNOb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VUlSb290KGZpbmQoXCJDYW52YXNcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwi5qOA5p+l5b2T5YmN5Zy65pmv5piv5ZCm5a2Y5ZyoQ2FudmFz6IqC54K5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVpQmFzZVJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVJVG9wUm9vdCgpOiBOb2RlIHtcclxuICAgICAgICBpZiAodGhpcy51aUJhc2VSb290ID09IG51bGwgfHwgdGhpcy51aVRvcFJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXNOb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VUlSb290KGZpbmQoXCJDYW52YXNcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwi5qOA5p+l5b2T5YmN5Zy65pmv5piv5ZCm5a2Y5ZyoQ2FudmFz6IqC54K5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVpVG9wUm9vdDtcclxuICAgIH1cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKiog5byA5pS+5Yqf6IO95o6l5Y+jICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDkuIDkuKpVSemhtemdolxyXG4gICAgICog5aaC5p6c5piv5YWo5bGP6aG16Z2i5YiZ5YWz6Zet5YW25LuW6aG16Z2iXHJcbiAgICAgKiBAcGFyYW0gcGFuZWxUeXBlIFxyXG4gICAgICogQHBhcmFtIHVpaWQgXHJcbiAgICAgKiBAcGFyYW0gYXV0b0Nsb3NlIOaYr+WQpuWFgeiuuOiHquWKqOWFs+mXreivpemhtemdou+8jOS+i+WmguW5v+WRiuW8ueeql+mhtemdouWPr+S7peiuvue9ruS4umZhbHNlXHJcbiAgICAgKiBAcGFyYW0gZGF0YXMgXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlblVJUGFuZWwocGFuZWxUeXBlOiBVSVBhbmVsVHlwZSwgdWlpZDogVUlQYW5lbHMsIGRhdGFzOiBhbnkgPSBudWxsLCBjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCA9IG51bGwsIHRhcmdldDogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB1aU5hbWUgPSBVSVBhbmVsc1t1aWlkXTtcclxuICAgICAgICAvL+WIpOaWremhtemdouaYr+WQpuW3sue7j+aYvuekuui/h+S6hlxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrVUlTaG93KHVpaWQpKSB7XHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiVUnpobXpnaLlt7Lnu4/mmL7npLrkuobvvJpcIiArIHVpTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yik5pat6aG16Z2i6LWE5rqQ5piv5ZCm5Yqg6L295LqGXHJcbiAgICAgICAgaWYgKHRoaXMudWlSZXNMaXN0W3VpaWRdID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy/pppbmrKHliqDovb3otYTmupBcclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLlsJ3or5XmmL7npLpVSemhtemdou+8jOmmluasoeWKoOi9ve+8mlwiICsgdWlOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy51aVJlc0xpc3RbdWlpZF0gPSB7IHJlbG9hZEFjdGl2ZTogLTEgfTtcclxuICAgICAgICAgICAgbGV0IGxvYWRPYmogPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlSWQ6IHBhbmVsVHlwZSwgICAgICAgICAvL+ato+W4uOmhtemdouaYrzDvvIzlvLnnqpfpobXpnaLmmK8xXHJcbiAgICAgICAgICAgICAgICB1aWlkOiB1aWlkLFxyXG4gICAgICAgICAgICAgICAgcmVzTmFtZTogVUlDb25maWcuUmVzUGF0aCArIHVpTmFtZSxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgZGF0YXM6IGRhdGFzLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVpMkxvYWRMaXN0LnB1c2gobG9hZE9iaik7XHJcbiAgICAgICAgICAgIC8vRGVidWdVdGlsLmxvZ0luZm8odGhpcy51aTJMb2FkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuWKoOi9veWujOaIkFxyXG4gICAgICAgICAgICBpZiAodGhpcy51aVJlc0xpc3RbdWlpZF0gaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+W3sue7j+WKoOi9veWujOavleS6hlxyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLlsJ3or5XmmL7npLpVSemhtemdou+8jOe8k+WtmOiOt+WPlu+8mlwiICsgdWlOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8v5YWz6Zet5YW25LuWVUnnlYzpnaJcclxuICAgICAgICAgICAgICAgIGlmIChwYW5lbFR5cGUgPT0gVUlQYW5lbFR5cGUuRnVsbFBhbmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclVJT2JqKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+mHjeaWsOiuvue9rumhtemdouaVsOaNrlxyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2VQYW5lbDogVUlCYXNlUGFuZWwgPSB0aGlzLnVpUmVzTGlzdFt1aWlkXS5nZXRDb21wb25lbnQoVUlCYXNlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2VQYW5lbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQYW5lbC5zZXRQYW5lbERhdGFzKGRhdGFzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5pi+56S66aG16Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hVSU9iajJTaG93TGlzdCh0aGlzLnVpUmVzTGlzdFt1aWlkXSwgcGFuZWxUeXBlKTtcclxuICAgICAgICAgICAgICAgIC8v5pi+56S65oiQ5Yqf55qE5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0YXJnZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCB0aGlzLnVpUmVzTGlzdFt1aWlkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIlVJ6aG16Z2i6LWE5rqQ5q2j5Zyo5Yqg6L295Lit77yM6K+35Yu/6aKR57mB6LCD55So77yaXCIgKyB1aU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5LiA5Liq5oyH5a6a55qEVUnpobXpnaJcclxuICAgICAqIEBwYXJhbSB1aWlkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2VVSVBhbmVsKHVpaWQ6IFVJUGFuZWxzKSB7XHJcbiAgICAgICAgbGV0IHVpTmFtZSA9IFVJUGFuZWxzW3VpaWRdO1xyXG4gICAgICAgIC8v5Yik5pat6aG16Z2i5piv5ZCm5bey57uP5pi+56S66L+H5LqGXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrVUlTaG93KHVpaWQpKSB7XHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiVUnpobXpnaLlt7Lnu4/lhbPpl63kuobvvJpcIiArIHVpTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLlhbPpl61VSemhtemdou+8mlwiICsgdWlOYW1lKTtcclxuICAgICAgICBpZiAodGhpcy51aVJlc0xpc3RbdWlpZF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51aVJlc0xpc3RbdWlpZF0gaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcFVJT2JqMlNob3dMaXN0KHRoaXMudWlSZXNMaXN0W3VpaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlSZXNMaXN0W3VpaWRdLnJlbG9hZEFjdGl2ZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqIOWGhemDqOWKn+iDveaOpeWPoyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5b2T5YmN5pi+56S655qE5omA5pyJ6aG16Z2iXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhclVJT2JqKGZvcmNlQ2xlYXI6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5YWz6Zet5YW25LuW5omA5pyJVUnpobXpnaJcIiwgdGhpcy5zaG93aW5nVUlMaXN0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zaG93aW5nVUlMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JjZUNsZWFyID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8v5by65Yi25riF6Zmk5omA5pyJVUnnlYzpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wVUlPYmoyU2hvd0xpc3QodGhpcy5zaG93aW5nVUlMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNob3dpbmdVSUxpc3RbaV0ucGFyZW50Lm5hbWUgPT0gXCJCYXNlTGF5ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgLy/lj6rmuIXpmaRCYXNlTGF5ZXLkuK3nmoRVSeeVjOmdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVSU9iajJTaG93TGlzdCh0aGlzLnNob3dpbmdVSUxpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5LiqVUnpobXpnaLliLDmmL7npLrliJfooajlubbmmL7npLrlnKjmnIDkuIrlsYJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwdXNoVUlPYmoyU2hvd0xpc3QodWlPYmo6IE5vZGUsIHBhbmVsVHlwZTogVUlQYW5lbFR5cGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3dpbmdVSUxpc3QudW5zaGlmdCh1aU9iaik7XHJcbiAgICAgICAgaWYgKHBhbmVsVHlwZSA9PSBVSVBhbmVsVHlwZS5Ub3BQYW5lbCkge1xyXG4gICAgICAgICAgICBpZiAodWlPYmoucGFyZW50ID09IG51bGwgfHwgdWlPYmoucGFyZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSVRvcFJvb3QoKS5hZGRDaGlsZCh1aU9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodWlPYmoucGFyZW50ID09IG51bGwgfHwgdWlPYmoucGFyZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSUJhc2VSb290KCkuYWRkQ2hpbGQodWlPYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYXNlUGFuZWw6IFVJQmFzZVBhbmVsID0gdWlPYmouZ2V0Q29tcG9uZW50KFVJQmFzZVBhbmVsKTtcclxuICAgICAgICBpZiAoYmFzZVBhbmVsKSB7XHJcbiAgICAgICAgICAgIGJhc2VQYW5lbC5zaG93VmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuaIkOWKn+aYvuekulVJ6aG16Z2i77yaXCIgKyB1aU9iai5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvcFVJT2JqMlNob3dMaXN0KHVpT2JqOiBOb2RlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBvcE9iajogTm9kZSA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2hvd2luZ1VJTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodWlPYmogPT0gdGhpcy5zaG93aW5nVUlMaXN0W2ldKSB7XHJcbiAgICAgICAgICAgICAgICBwb3BPYmogPSB0aGlzLnNob3dpbmdVSUxpc3Quc3BsaWNlKGksIDEpWzBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcE9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3BPYmouZ2V0Q29tcG9uZW50KFVJQmFzZVBhbmVsKSkge1xyXG4gICAgICAgICAgICAgICAgcG9wT2JqLmdldENvbXBvbmVudChVSUJhc2VQYW5lbCkuaGlkZVZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvcE9iai5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9EZWJ1Z1V0aWwubG9nSW5mbyhcInBvcFVJT2JqMlNob3dMaXN0OlwiLHRoaXMuc2hvd2luZ1VJTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mn5DkuKpVSemhtemdouaYr+WQpuWcqOaYvuekuuS4rVxyXG4gICAgICogQHBhcmFtIHVpaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja1VJU2hvdyh1aWlkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNob3dpbmdVSUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd2luZ1VJTGlzdFtpXS5uYW1lID09IFVJUGFuZWxzW3VpaWRdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKiog6LWE5rqQ5Yqg6L29ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb2FkaW5nVUlSZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWkyTG9hZExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdVSVJlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hZE9iaiA9IHRoaXMudWkyTG9hZExpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKGxvYWRPYmoucmVzTmFtZSwgUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1VJUmVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9EZWJ1Z1V0aWwubG9nSW5mbyhcIuWKoOi9vVVJ6aG16Z2i6LWE5rqQ5a6M5oiQ77yaXCIsVUlQYW5lbHNbbG9hZE9iai51aWlkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5Yqg6L29VUnpobXpnaLotYTmupDlrozmiJDvvJpcIiwgVUlQYW5lbHNbbG9hZE9iai51aWlkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9hZFVJQ2FsbEJhY2socHJlZmFiLCBsb2FkT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nRXJyb3IoXCLliqDovb1VSemhtemdoui1hOa6kOWHuumUme+8mlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M6aG16Z2i6LWE5rqQ5ZCO55qE5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gcHJlZmFiIFxyXG4gICAgICogQHBhcmFtIGxvYWRPYmogXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZFVJQ2FsbEJhY2socHJlZmFiOiBQcmVmYWIsIGxvYWRPYmo6IFVJTG9hZE9iaik6IHZvaWQge1xyXG4gICAgICAgIC8v5Yik5pat5piv54us56uL6aG16Z2i6L+Y5piv5by556qXXHJcbiAgICAgICAgaWYgKGxvYWRPYmoudHlwZUlkID09IDApIHtcclxuICAgICAgICAgICAgLy/ni6znq4vpobXpnaIs5YWz6Zet5YW25LuW5omA5pyJ6aG16Z2iXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJVSU9iaigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVpTm9kZTogTm9kZSA9IGluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgbGV0IGJhc2VQYW5lbDogVUlCYXNlUGFuZWwgPSB1aU5vZGUuZ2V0Q29tcG9uZW50KFVJQmFzZVBhbmVsKTtcclxuICAgICAgICBpZiAoYmFzZVBhbmVsKSB7XHJcbiAgICAgICAgICAgIGJhc2VQYW5lbC5zZXRQYW5lbERhdGFzKGxvYWRPYmouZGF0YXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0RlYnVnVXRpbC5sb2dJbmZvKFwibG9hZFVJQ2FsbEJhY2tcIix0aGlzLnVpUmVzTGlzdFtsb2FkT2JqLnVpaWRdKTtcclxuICAgICAgICBpZiAodGhpcy51aVJlc0xpc3RbbG9hZE9iai51aWlkXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpUmVzTGlzdFtsb2FkT2JqLnVpaWRdLnJlbG9hZEFjdGl2ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWujOaIkOS5i+WJjeayoeacieiiq+WFs+mXreS6hlxyXG4gICAgICAgICAgICAgICAgLy/mmL7npLpVSeeVjOmdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoVUlPYmoyU2hvd0xpc3QodWlOb2RlLCBsb2FkT2JqLnR5cGVJZCk7XHJcbiAgICAgICAgICAgICAgICAvL+aYvuekuuaIkOWKn+eahOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRPYmouY2FsbGJhY2sgIT0gbnVsbCAmJiBsb2FkT2JqLnRhcmdldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9iai5jYWxsYmFjay5jYWxsKGxvYWRPYmoudGFyZ2V0LCBsb2FkT2JqLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dXYXJuKFwiVUnpobXpnaLliqDovb3lrozmiJDliY3lsLHooqvlhbPpl63kuobvvJpcIiArIFVJUGFuZWxzW2xvYWRPYmoudWlpZF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/mt7vliqDliLDnvJPlrZjkuK1cclxuICAgICAgICAgICAgdGhpcy51aVJlc0xpc3RbbG9hZE9iai51aWlkXSA9IHVpTm9kZTtcclxuICAgICAgICAgICAgdGhpcy51aVJlc0xpc3RbbG9hZE9iai51aWlkXS5yZXNOYW1lID0gbG9hZE9iai5yZXNOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwi5Yqg6L296LWE5rqQ5Ye66ZSZ77yM6LWE5rqQ57yT5a2Y5pivbnVsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9EZWJ1Z1V0aWwubG9nSW5mbyhcImxvYWRVSUNhbGxCYWNrXCIsdGhpcy51aVJlc0xpc3RbbG9hZE9iai51aWlkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph4rmlL7miYDmnInnmoRVSei1hOa6kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVsZWFzZUFsbFVJUmVzKCk6IHZvaWQge1xyXG4gICAgICAgIC8v5Yig6Zmk5Yqg6L296L+H5b6XVUnlr7nosaFcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudWlSZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpUmVzTGlzdFtpXSAhPSBudWxsICYmIHRoaXMudWlSZXNMaXN0W2ldIGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aVJlc0xpc3RbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yig6Zmk5Yqg6L295Lit55qEVUnotYTmupBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudWlSZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpUmVzTGlzdFtpXSAhPSBudWxsICYmIHRoaXMudWlSZXNMaXN0W2ldIGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVyLnJlbGVhc2VSZXModGhpcy51aVJlc0xpc3RbaV0ucmVzTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51aVJlc0xpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dpbmdVSUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnVpMkxvYWRMaXN0ID0gW107XHJcbiAgICB9XHJcbn1cclxuIl19