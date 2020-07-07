System.register("chunks:///GameConfig.js", ['./_virtual/_rollupPluginBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, _classCallCheck, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      exports('Platforms', void 0);

      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "17e116kERFPcI9WAKXXy6kO", "GameConfig", undefined);

      var ccclass = _decorator.ccclass;
      var Platforms;

      (function (Platforms) {
        Platforms[Platforms["H5"] = 0] = "H5";
        Platforms[Platforms["VIVO"] = 1] = "VIVO";
        Platforms[Platforms["OPPO"] = 2] = "OPPO";
      })(Platforms || (Platforms = exports('Platforms', {})));

      var GameConfig = exports('GameConfig', (_dec = ccclass("GameConfig"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function () {
        function GameConfig() {
          _classCallCheck(this, GameConfig);
        }

        _createClass(GameConfig, null, [{
          key: "IsTestMode",
          //发布平台

          /**
           * 测试模式
           * 0--关闭
           * 非0--开启
           */
          get: function get() {
            return GameConfig.TEST_MODE == 0;
          }
        }]);

        return GameConfig;
      }(), _class2.PublishPlatform = Platforms.OPPO, _class2.TEST_MODE = 1, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///framework/debugger/logUtil.js", ['../../_virtual/_rollupPluginBabelHelpers.js', 'cc', '../../GameConfig.js'], function (exports) {
  'use strict';

  var _createClass, _classCallCheck, cclegacy, _decorator, log, warn, error, GameConfig;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
      warn = module.warn;
      error = module.error;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "eccad9GPzZHJpOxPLw+3K6I", "logUtil", undefined);

      var ccclass = _decorator.ccclass;
      /**
       * 日志工具类
       */

      var logUtil = exports('logUtil', (_dec = ccclass("logUtil"), _dec(_class =
      /*#__PURE__*/
      function () {
        function logUtil() {
          _classCallCheck(this, logUtil);
        }

        _createClass(logUtil, null, [{
          key: "logInfo",
          value: function logInfo(msg) {
            if (this.logOpen()) {
              return;
            }

            for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              param[_key - 1] = arguments[_key];
            }

            if (param.length == 0) {
              log(msg);
            } else {
              log(msg, param);
            }
          }
        }, {
          key: "logWarn",
          value: function logWarn(msg) {
            if (this.logOpen()) {
              return;
            }

            for (var _len2 = arguments.length, param = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              param[_key2 - 1] = arguments[_key2];
            }

            if (param.length == 0) {
              warn(msg);
            } else {
              warn(msg, param);
            }
          }
        }, {
          key: "logError",
          value: function logError(msg) {
            if (this.logOpen()) {
              return;
            }

            for (var _len3 = arguments.length, param = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              param[_key3 - 1] = arguments[_key3];
            }

            if (param.length == 0) {
              error(msg);
            } else {
              error(msg, param);
            }
          }
        }, {
          key: "logOpen",
          value: function logOpen() {
            return GameConfig.IsTestMode;
          }
        }]);

        return logUtil;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///framework/save/SaveConfig.js", ['../../_virtual/_rollupPluginBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _classCallCheck, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "bc5fdKf7oRI/oxd6JLm4Hhy", "SaveConfig", undefined);

      var ccclass = _decorator.ccclass;
      var SaveConfig = exports('SaveConfig', (_dec = ccclass("SaveConfig"), _dec(_class = (_temp = _class2 = function SaveConfig() {
        _classCallCheck(this, SaveConfig);
      }, _class2.SaveItems = {
        "test": "0",
        "test1": "1"
      }, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///framework/save/SaveManager.js", ['../../_virtual/_rollupPluginBabelHelpers.js', 'cc', '../../GameConfig.js', '../debugger/logUtil.js'], function (exports) {
  'use strict';

  var _createClass, _classCallCheck, cclegacy, _decorator, GameConfig, Platforms, logUtil;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameConfig = module.GameConfig;
      Platforms = module.Platforms;
    }, function (module) {
      logUtil = module.logUtil;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "3df31ZRoehA8IRtUtcHL/K7", "SaveManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SaveManager = exports('SaveManager', (_dec = ccclass("SaveManager"), _dec(_class = (_temp =
      /*#__PURE__*/
      function () {
        _createClass(SaveManager, null, [{
          key: "Instance",
          //单例模式
          get: function get() {
            if (SaveManager._instance == null) {
              SaveManager._instance = new SaveManager();
            }

            return SaveManager._instance;
          }
        }]); //存档缓存


        function SaveManager() {
          _classCallCheck(this, SaveManager);

          this.saveCache = {};
          this.saveCache = {};
        }
        /*****************对外暴露的接口******************/

        /**
         * 保存一条存档
         */


        _createClass(SaveManager, [{
          key: "saveItemRecord",
          value: function saveItemRecord(key, value) {
            this.saveCache[key] = value;
            this.saveItem(key, value);
          }
          /**
           * 读取一条存档
           * @param key 
           * @param defaultValue 
           */

        }, {
          key: "loadItemRecord",
          value: function loadItemRecord(key, defaultValue) {
            var value = null;

            if (this.saveCache[key] != null && this.saveCache[key] != undefined) {
              value = this.saveCache[key];
            } else {
              value = this.loadItem(key);
              this.saveCache[key] = value;
            }

            if (value == null || value == undefined || value == "") {
              value = defaultValue;
            }

            return value;
          }
          /**
           * 保存游戏存档
           * @param saveData
           */

        }, {
          key: "saveGameRecord",
          value: function saveGameRecord(saveData) {
            for (var key in saveData) {
              this.saveItemRecord(key, saveData[key]);
            }
          }
          /**
           * 读取游戏存档
           * @param loadItems 
           * @param callback 
           */

        }, {
          key: "loadGameRecord",
          value: function loadGameRecord(loadItems, callback, target) {
            var result = {};

            for (var key in loadItems) {
              var itemLoaded = this.loadItemRecord(key, loadItems[key]);
              result[key] = itemLoaded;
            }

            var args = new Array();
            args.push(result);
            callback.apply(target, args);
          }
          /**********************各平台的基础API********************/

        }, {
          key: "saveItem",
          value: function saveItem(key, value) {
            if (GameConfig.PublishPlatform == Platforms.H5) {
              cc.sys.localStorage.setItem(key, value);
            } else if (GameConfig.PublishPlatform == Platforms.VIVO) {
              qg.setStorage({
                key: key,
                value: value,
                success: function success(data) {
                  logUtil.logInfo("saveRecord success:", data);
                },
                fail: function fail(data, code) {
                  logUtil.logInfo("saveRecord fail:", data, code);
                }
              });
            } else if (GameConfig.PublishPlatform == Platforms.OPPO) {
              cc.sys.localStorage.setItem(key, value);
            }

            logUtil.logInfo("saveItem[key:" + key + " value:" + value + "]");
          }
        }, {
          key: "loadItem",
          value: function loadItem(key) {
            var result = "";

            if (GameConfig.PublishPlatform == Platforms.H5) {
              result = cc.sys.localStorage.getItem(key);
            } else if (GameConfig.PublishPlatform == Platforms.VIVO) {
              result = qg.getStorageSync({
                key: key
              });
            } else if (GameConfig.PublishPlatform == Platforms.OPPO) {
              result = cc.sys.localStorage.getItem(key);
            }

            logUtil.logInfo("loadItem[key:" + key + " value:" + result + "]");

            if (result == null || result == undefined) {
              result = "";
            }

            return result;
          }
        }]);

        return SaveManager;
      }(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Game.js", ['./_virtual/_rollupPluginBabelHelpers.js', 'cc', './framework/debugger/logUtil.js', './framework/save/SaveManager.js'], function (exports) {
  'use strict';

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, find, Component, logUtil, SaveManager;

  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _possibleConstructorReturn = module.possibleConstructorReturn;
      _getPrototypeOf = module.getPrototypeOf;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      logUtil = module.logUtil;
    }, function (module) {
      SaveManager = module.SaveManager;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "5a2b1bRI2dN5ovRZwAhnOz0", "Game", undefined);

      var ccclass = _decorator.ccclass;
      var Game = exports('Game', (_dec = ccclass("Game"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        _inherits(Game, _Component);

        function Game() {
          _classCallCheck(this, Game);

          return _possibleConstructorReturn(this, _getPrototypeOf(Game).apply(this, arguments));
        }

        _createClass(Game, [{
          key: "onLoad",
          value: function onLoad() {
            //单例模式赋值
            Game._instance = this; //初始化系统组件

            Game.saveManager = SaveManager.Instance;
          }
        }, {
          key: "onEnable",
          value: function onEnable() {}
        }, {
          key: "start",
          value: function start() {}
        }], [{
          key: "Instance",
          //单例模式
          get: function get() {
            if (Game._instance == null) {
              Game._instance = find("Game").getComponent(Game);

              if (Game._instance == null) {
                logUtil.logInfo("Game is null, please attach Game");
              }
            }

            return Game._instance;
          } //系统组件

        }]);

        return Game;
      }(Component), _class2.saveManager = null, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///framework/tools/PlatformTools.js", ['../../_virtual/_rollupPluginBabelHelpers.js', 'cc', '../../GameConfig.js', '../debugger/logUtil.js', '../../Game.js'], function (exports) {
  'use strict';

  var _createClass, _classCallCheck, cclegacy, _decorator, GameConfig, Platforms, logUtil, Game;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameConfig = module.GameConfig;
      Platforms = module.Platforms;
    }, function (module) {
      logUtil = module.logUtil;
    }, function (module) {
      Game = module.Game;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "d853fPBQOVO041xHWRd/BAM", "PlatformTools", undefined);

      var ccclass = _decorator.ccclass;
      var PlatformTools = exports('PlatformTools', (_dec = ccclass("PlatformTools"), _dec(_class = (_temp =
      /*#__PURE__*/
      function () {
        function PlatformTools() {
          _classCallCheck(this, PlatformTools);

          this.vibrateSwitch = null;
        }

        _createClass(PlatformTools, [{
          key: "getScreenSize",

          /**
           * 获得窗口分辨率（非硬件分辨率）
           * 是根据设计分辨率和适配模式计算后得到的
           * 例如设计分辨率是960*720，适配宽度，则得到的窗口分辨率就是960*？，其中高度是不确定的，但是宽度是确定
           */
          value: function getScreenSize() {
            return {
              width: cc.winSize.width,
              height: cc.winSize.height
            };
          }
        }, {
          key: "getScreenWidth",
          value: function getScreenWidth() {
            return cc.winSize.width;
          }
        }, {
          key: "getScreenHeight",
          value: function getScreenHeight() {
            return cc.winSize.height;
          }
          /**
           * 获得设计分辨率宽高比，ratio = 宽/高
           */

        }, {
          key: "getScreenRatio",
          value: function getScreenRatio() {
            var ratio = cc.winSize.width / cc.winSize.height;
            return ratio;
          }
          /********************************震动相关*********************************/
          //设置震动功能的开关

        }, {
          key: "setVibrateSwitch",
          value: function setVibrateSwitch(value) {
            this.vibrateSwitch = value;

            if (value == true) {
              Game.saveManager.saveItemRecord("vibrateSwitch", "1");
            } else {
              Game.saveManager.saveItemRecord("vibrateSwitch", "0");
            }
          }
        }, {
          key: "getVibrateSwitch",
          value: function getVibrateSwitch() {
            if (this.vibrateSwitch == null || this.vibrateSwitch == undefined) {
              this.vibrateSwitch = Game.saveManager.loadItemRecord('vibrateSwitch', "1") == "1" ? true : false;
            }

            return this.vibrateSwitch;
          } //短震动

        }, {
          key: "vibrateShort",
          value: function vibrateShort() {
            if (!this.getVibrateSwitch()) {
              return;
            }

            if (GameConfig.PublishPlatform == Platforms.H5) {
              return;
            } else if (GameConfig.PublishPlatform == Platforms.VIVO) {
              qg.vibrateShort();
            } else if (GameConfig.PublishPlatform == Platforms.OPPO) {
              qg.vibrateShort({
                success: function success(res) {},
                fail: function fail(res) {},
                complete: function complete(res) {}
              });
            }
          }
        }, {
          key: "vibrateLong",
          value: function vibrateLong() {
            if (!this.getVibrateSwitch()) {
              return;
            }

            if (GameConfig.PublishPlatform == Platforms.H5) {
              return;
            } else if (GameConfig.PublishPlatform == Platforms.VIVO) {
              qg.vibrateLong();
            } else if (GameConfig.PublishPlatform == Platforms.OPPO) {
              qg.vibrateLong({
                success: function success(res) {},
                fail: function fail(res) {},
                complete: function complete(res) {}
              });
            }
          }
          /********************************加速度计相关*********************************/
          //获取加速度计的值

        }, {
          key: "listenAccelerometerValue",
          value: function listenAccelerometerValue(_callback, target) {
            if (GameConfig.PublishPlatform == Platforms.H5) {
              return;
            } else if (GameConfig.PublishPlatform == Platforms.VIVO) {
              qg.subscribeAccelerometer({
                callback: function callback(data) {
                  logUtil.logInfo("listenAccelerometerValue callback, x = ".concat(data.x, ", y = ").concat(data.y, ", z = ").concat(data.z));

                  _callback.apply(target, data);
                }
              });
            } else if (GameConfig.PublishPlatform == Platforms.OPPO) {
              qg.startAccelerometer({
                interval: "ui",
                success: function success(res) {},
                fail: function fail(res) {},
                complete: function complete(res) {}
              });
              qg.onAccelerometerChange(function (x, y, z) {
                _callback.apply(target, arguments);
              });
            }
          }
        }, {
          key: "stopListenAccelerometerValue",
          value: function stopListenAccelerometerValue() {
            if (GameConfig.PublishPlatform == Platforms.H5) {
              return;
            } else if (GameConfig.PublishPlatform == Platforms.VIVO) {
              qg.unsubscribeAccelerometer();
            } else if (GameConfig.PublishPlatform == Platforms.OPPO) {
              qg.stopAccelerometer({
                success: function success(res) {},
                fail: function fail(res) {},
                complete: function complete(res) {}
              });
            }
          }
        }]);

        return PlatformTools;
      }(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///framework/tools/Tools.js", ['../../_virtual/_rollupPluginBabelHelpers.js', 'cc', './PlatformTools.js'], function (exports) {
  'use strict';

  var _createClass, _classCallCheck, cclegacy, _decorator, PlatformTools;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      PlatformTools = module.PlatformTools;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "c7ffeCtjVBCV5693xKtQuSe", "Tools", undefined);

      var ccclass = _decorator.ccclass;
      var Tools = exports('Tools', (_dec = ccclass("Tools"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function () {
        function Tools() {
          _classCallCheck(this, Tools);
        }

        _createClass(Tools, null, [{
          key: "PlatformTools",
          //硬件平台相关工具
          get: function get() {
            if (Tools.platformTools == null) {
              Tools.platformTools = new PlatformTools();
            }

            return Tools.platformTools;
          }
        }]);

        return Tools;
      }(), _class2.platformTools = null, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Test.js", ['./_virtual/_rollupPluginBabelHelpers.js', 'cc', './framework/debugger/logUtil.js', './framework/save/SaveConfig.js', './Game.js', './framework/tools/Tools.js'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, LabelComponent, Component, logUtil, SaveConfig, Game, Tools;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inherits = module.inherits;
      _classCallCheck = module.classCallCheck;
      _possibleConstructorReturn = module.possibleConstructorReturn;
      _getPrototypeOf = module.getPrototypeOf;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      LabelComponent = module.LabelComponent;
      Component = module.Component;
    }, function (module) {
      logUtil = module.logUtil;
    }, function (module) {
      SaveConfig = module.SaveConfig;
    }, function (module) {
      Game = module.Game;
    }, function (module) {
      Tools = module.Tools;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "b8988QdghpOKLsZVmMMHR4w", "Test", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Test = exports('Test', (_dec = ccclass("Test"), _dec2 = property({
        type: LabelComponent
      }), _dec3 = property({
        type: LabelComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(Test, _Component);

        function Test() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Test);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Test)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "testLabel1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "testLabel2", _descriptor2, _assertThisInitialized(_this));

          _this.testObj = {};
          return _this;
        }

        _createClass(Test, [{
          key: "start",
          value: function start() {
            Game.saveManager.saveItemRecord("ga", "gaoang111");
            var save = Game.saveManager.loadItemRecord("ga", "");

            if (save.length == 0) {
              save = "empty";
            }

            this.testLabel1.string = save;
            save = Game.saveManager.loadItemRecord("ga1", "");

            if (save.length == 0) {
              save = "empty";
            }

            this.testLabel2.string = save;
            Game.saveManager.loadGameRecord(SaveConfig.SaveItems, this.loadCallback, this);
            logUtil.logInfo(Tools.PlatformTools.getScreenSize()); //this.testLabel1.string = Tools.PlatformTools.getScreenSize().width;
            //this.testLabel2.string = Tools.PlatformTools.getScreenSize().height;

            Tools.PlatformTools.vibrateShort();
            Tools.PlatformTools.listenAccelerometerValue(this.accelerateCallback, this);
          }
        }, {
          key: "loadCallback",
          value: function loadCallback(result) {
            logUtil.logInfo("loadGameRecord", result);
          }
        }, {
          key: "accelerateCallback",
          value: function accelerateCallback(data) {
            logUtil.logInfo("accelerateCallback", data, this);
          }
        }]);

        return Test;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testLabel1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testLabel2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/_rollupPluginBabelHelpers.js", [], function (exports) {
  'use strict';

  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        assertThisInitialized: _assertThisInitialized,
        classCallCheck: _classCallCheck,
        createClass: _createClass,
        getPrototypeOf: _getPrototypeOf,
        inherits: _inherits,
        initializerDefineProperty: _initializerDefineProperty,
        possibleConstructorReturn: _possibleConstructorReturn,
        setPrototypeOf: _setPrototypeOf
      });

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = exports('getPrototypeOf', Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        });
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }
    }
  };
});

(function () {
    var aliasChunk = function(chunkId, moduleId) {
        System.register(moduleId, [chunkId], function (_export, _context) {
            var _m;
            return {
                setters: [function(m) {
                    _m = m;
                }],
                execute: function () {
                    _export(_m);
                }
            };
        });
    };
	aliasChunk('chunks:///GameConfig.js', 'project:///assets/scripts/GameConfig.js');
	aliasChunk('chunks:///framework/debugger/logUtil.js', 'project:///assets/scripts/framework/debugger/logUtil.js');
	aliasChunk('chunks:///framework/save/SaveConfig.js', 'project:///assets/scripts/framework/save/SaveConfig.js');
	aliasChunk('chunks:///framework/save/SaveManager.js', 'project:///assets/scripts/framework/save/SaveManager.js');
	aliasChunk('chunks:///Game.js', 'project:///assets/scripts/Game.js');
	aliasChunk('chunks:///framework/tools/PlatformTools.js', 'project:///assets/scripts/framework/tools/PlatformTools.js');
	aliasChunk('chunks:///framework/tools/Tools.js', 'project:///assets/scripts/framework/tools/Tools.js');
	aliasChunk('chunks:///Test.js', 'project:///assets/scripts/Test.js');
})();
