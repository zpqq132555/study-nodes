System.register(["cc", "code-quality:cr", "../save/SaveManager.js", "../tools/DebugUtil.js", "../tools/Tools.js", "./AudioConfig.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, AudioClip, AudioSourceComponent, loader, _decorator, SaveManager, DebugUtil, Tools, AudioConfig, AudioType, _dec, _class, _temp, _crd, ccclass, property, AudioManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfSaveManager(extras) {
    _reporterNs.report("SaveManager", "../save/SaveManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "../tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTools(extras) {
    _reporterNs.report("Tools", "../tools/Tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioConfig(extras) {
    _reporterNs.report("AudioConfig", "./AudioConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioType(extras) {
    _reporterNs.report("AudioType", "./AudioConfig", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      AudioClip = _cc.AudioClip;
      AudioSourceComponent = _cc.AudioSourceComponent;
      loader = _cc.loader;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_saveSaveManagerJs) {
      SaveManager = _saveSaveManagerJs.SaveManager;
    }, function (_toolsDebugUtilJs) {
      DebugUtil = _toolsDebugUtilJs.DebugUtil;
    }, function (_toolsToolsJs) {
      Tools = _toolsToolsJs.Tools;
    }, function (_AudioConfigJs) {
      AudioConfig = _AudioConfigJs.AudioConfig;
      AudioType = _AudioConfigJs.AudioType;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2c374ZIiFBCEbyZfbcXK/e7", "AudioManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AudioManager", AudioManager = (_dec = ccclass("AudioManager"), _dec(_class = (_temp = /*#__PURE__*/function () {
        function AudioManager() {
          _classCallCheck(this, AudioManager);

          this.rootNode = null;
          this.musicSwitch = null;
          this.soundSwitch = null;
          this.musicAudioComponent = null;
          this.soundAudioComponents = null;
          this.musicCache = {};
          this.soundCache = {};
          this.curBgMusic = null;
        }

        _createClass(AudioManager, [{
          key: "init",

          /**
           * 初始化
           */
          value: function init(rootNode) {
            //添加AudioSource组件的父级节点
            this.rootNode = rootNode; //音乐开关

            this.musicSwitch = (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
              error: Error()
            }), SaveManager) : SaveManager).Instance.loadItemRecord("musicSwitch", "1") == "1" ? true : false;
            this.soundSwitch = (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
              error: Error()
            }), SaveManager) : SaveManager).Instance.loadItemRecord("soundSwitch", "1") == "1" ? true : false;
            this.preloadResources();
          }
          /**
           * 预加载音频资源
           */

        }, {
          key: "preloadResources",
          value: function preloadResources() {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo('开始预加载音频资源：' + (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
              error: Error()
            }), Tools) : Tools).TimeTools.getCurTimeStampSec());
            var startTime = (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
              error: Error()
            }), Tools) : Tools).TimeTools.getCurTimeStampSec();
            var self = this; //预加载音乐

            for (var key in (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
              error: Error()
            }), AudioConfig) : AudioConfig).AudiosPreload.music) {
              var resPath = (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                error: Error()
              }), AudioConfig) : AudioConfig).ResPath + (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                error: Error()
              }), AudioConfig) : AudioConfig).AudiosPreload.music[key];
              loader.loadRes(resPath, AudioClip, function (err, clip) {
                if (err) {
                  (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                    error: Error()
                  }), DebugUtil) : DebugUtil).logError(err);
                  return;
                }

                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo('结束预加载音乐资源：' + clip.name + "[耗时]" + ((_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                  error: Error()
                }), Tools) : Tools).TimeTools.getCurTimeStampSec() - startTime));
                self.musicCache[clip.name] = clip;
              });
            } //预加载音效


            for (var _key in (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
              error: Error()
            }), AudioConfig) : AudioConfig).AudiosPreload.sound) {
              var _resPath = (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                error: Error()
              }), AudioConfig) : AudioConfig).ResPath + (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                error: Error()
              }), AudioConfig) : AudioConfig).AudiosPreload.sound[_key];

              loader.loadRes(_resPath, AudioClip, function (err, clip) {
                if (err) {
                  (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                    error: Error()
                  }), DebugUtil) : DebugUtil).logError(err);
                  return;
                }

                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo('结束预加载音效资源：' + clip.name + "[耗时]" + ((_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                  error: Error()
                }), Tools) : Tools).TimeTools.getCurTimeStampSec() - startTime));
                self.soundCache[clip.name] = clip;
              });
            }
          }
          /************************************** Audio全局控制 ***************************************/

        }, {
          key: "setAudioSwitch",
          value: function setAudioSwitch(value) {
            this.setMusicSwitch(value);
            this.setSoundSwitch(value);
          }
        }, {
          key: "getAudioSwitch",
          value: function getAudioSwitch() {
            return this.getMusicSwitch() || this.getSoundSwitch();
          }
          /************************************** Sound音效 ***************************************/

        }, {
          key: "setSoundSwitch",
          value: function setSoundSwitch(value) {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("设置音频开关：" + value);

            if (value == true) {
              (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
                error: Error()
              }), SaveManager) : SaveManager).Instance.saveItemRecord('soundSwitch', '1');
            } else {
              (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
                error: Error()
              }), SaveManager) : SaveManager).Instance.saveItemRecord('soundSwitch', '0');
            }

            this.soundSwitch = value;
          }
        }, {
          key: "getSoundSwitch",
          value: function getSoundSwitch() {
            if (this.soundSwitch == null) {
              return false;
            }

            return this.soundSwitch;
          }
        }, {
          key: "playSound",
          value: function playSound(audioId) {
            //判断音效开关是否开启了
            if (!this.soundSwitch) {
              return;
            } //加载并播放


            var audioName = (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
              error: Error()
            }), AudioConfig) : AudioConfig).getAudioNameById(audioId);

            if (this.soundCache[audioName] != null && this.soundCache[audioName] != undefined) {
              //播放缓存
              this.playSoundClip(this.soundCache[audioName]);
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logInfo("AudioManager.播放音效(缓存):" + (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                error: Error()
              }), AudioConfig) : AudioConfig).getAudioNameById(audioId));
            } else {
              //动态加载
              var startTime = (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                error: Error()
              }), Tools) : Tools).TimeTools.getCurTimeStampSec();
              var resPath = (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                error: Error()
              }), AudioConfig) : AudioConfig).getAudioResPath(audioId, (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
                error: Error()
              }), AudioType) : AudioType).Sound);
              var self = this;
              loader.loadRes(resPath, AudioClip, function (err, clip) {
                if (err) {
                  (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                    error: Error()
                  }), DebugUtil) : DebugUtil).logError(err);
                  return;
                }

                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo("AudioManager.音效资源加载完毕[" + (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                  error: Error()
                }), AudioConfig) : AudioConfig).getAudioNameById(audioId) + "],[耗时:" + ((_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                  error: Error()
                }), Tools) : Tools).TimeTools.getCurTimeStampSec() - startTime) + "]");
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo("AudioManager.播放音效(动态):" + (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                  error: Error()
                }), AudioConfig) : AudioConfig).getAudioNameById(audioId)); //cc.audioEngine.playMusic(clip,true);

                self.playSoundClip(clip);
                self.soundCache[clip.name] = clip;
              });
            }
          }
        }, {
          key: "playSoundClip",
          value: function playSoundClip(audioClip) {
            var audioComponent = null;

            if (this.soundAudioComponents == null) {
              this.soundAudioComponents = new Array();
            }

            for (var i = 0; i < this.soundAudioComponents.length; i++) {
              if (!this.soundAudioComponents[i].playing) {
                audioComponent = this.soundAudioComponents[i];
                break;
              }
            }

            if (audioComponent == null) {
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logInfo("没有可用音频组件，添加新的音频组件");
              audioComponent = this.rootNode.addComponent(AudioSourceComponent);
              audioComponent.loop = false;
              this.soundAudioComponents.push(audioComponent);
            }

            audioComponent.playOneShot(audioClip);
          }
          /************************************** Music音乐 ***************************************/

          /**
           * 设置音乐开关
           * @param value 
           */

        }, {
          key: "setMusicSwitch",
          value: function setMusicSwitch(value) {
            (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
              error: Error()
            }), DebugUtil) : DebugUtil).logInfo("设置音乐开关：" + value);

            if (value == true) {
              (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
                error: Error()
              }), SaveManager) : SaveManager).Instance.saveItemRecord('musicSwitch', '1');
            } else {
              (_crd && SaveManager === void 0 ? (_reportPossibleCrUseOfSaveManager({
                error: Error()
              }), SaveManager) : SaveManager).Instance.saveItemRecord('musicSwitch', '0');
            }

            this.musicSwitch = value;

            if (value == true) {
              this.playBgMusic();
            } else {
              this.stopBgMusic();
            }
          }
          /**
           * 获取音乐开关
           */

        }, {
          key: "getMusicSwitch",
          value: function getMusicSwitch() {
            if (this.musicSwitch == null) {
              return false;
            }

            return this.musicSwitch;
          }
          /**
           * 播放背景音
           * @param audioId 
           */

        }, {
          key: "playBgMusic",
          value: function playBgMusic() {
            var audioId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            //判断是否恢复之前bgm的播放
            if (audioId == null) {
              if (this.isBgMusicPlaying()) {
                return;
              } else {
                if (this.curBgMusic == null) {
                  return;
                }

                audioId = this.curBgMusic;
              }
            } //判断是否重复播放相同的bgm


            if (this.isBgMusicPlaying() && audioId == this.curBgMusic) {
              return;
            } //判断音频开关是否开启了


            this.curBgMusic = audioId;

            if (!this.musicSwitch) {
              return;
            } //加载并播放


            var audioName = (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
              error: Error()
            }), AudioConfig) : AudioConfig).getAudioNameById(audioId);

            if (this.musicCache[audioName] != null && this.musicCache[audioName] != undefined) {
              //播放缓存
              this.playBgMusicClip(this.musicCache[audioName]);
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logInfo("AudioManager.播放背景音(缓存)");
            } else {
              //动态加载
              var startTime = (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                error: Error()
              }), Tools) : Tools).TimeTools.getCurTimeStampSec();
              var resPath = (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                error: Error()
              }), AudioConfig) : AudioConfig).getAudioResPath(audioId, (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
                error: Error()
              }), AudioType) : AudioType).Music);
              var self = this;
              loader.loadRes(resPath, AudioClip, function (err, clip) {
                if (err) {
                  (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                    error: Error()
                  }), DebugUtil) : DebugUtil).logError(err);
                  return;
                }

                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo("AudioManager.音频资源加载完毕[" + (_crd && AudioConfig === void 0 ? (_reportPossibleCrUseOfAudioConfig({
                  error: Error()
                }), AudioConfig) : AudioConfig).getAudioNameById(audioId) + "],[耗时:" + ((_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                  error: Error()
                }), Tools) : Tools).TimeTools.getCurTimeStampSec() - startTime) + "]");
                (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                  error: Error()
                }), DebugUtil) : DebugUtil).logInfo("AudioManager.播放背景音(动态)");
                self.playBgMusicClip(clip);
                self.musicCache[clip.name] = clip;
              });
            }
          }
        }, {
          key: "pauseBgMusic",
          value: function pauseBgMusic() {
            if (this.musicAudioComponent) {
              this.musicAudioComponent.pause();
            }
          }
        }, {
          key: "resumeBgMusic",
          value: function resumeBgMusic() {
            if (this.musicAudioComponent) {
              this.musicAudioComponent.play();
            }
          }
        }, {
          key: "stopBgMusic",
          value: function stopBgMusic() {
            if (this.musicAudioComponent) {
              this.musicAudioComponent.stop();
            }
          }
        }, {
          key: "playBgMusicClip",
          value: function playBgMusicClip(audioClip) {
            if (this.musicAudioComponent == null) {
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logInfo("首次播放背景音，添加音频组件");
              this.musicAudioComponent = this.rootNode.addComponent(AudioSourceComponent);
              this.musicAudioComponent.loop = true;
            }

            this.musicAudioComponent.clip = audioClip;
            this.musicAudioComponent.play();
          }
          /**
           * 当前bgm是否在播放
           */

        }, {
          key: "isBgMusicPlaying",
          value: function isBgMusicPlaying() {
            if (this.musicAudioComponent == null) {
              return false;
            }

            return this.musicAudioComponent.playing;
          }
        }], [{
          key: "Instance",
          //单例模式
          get: function get() {
            if (AudioManager._instance == null) {
              AudioManager._instance = new AudioManager();
            }

            return AudioManager._instance;
          }
        }]);

        return AudioManager;
      }(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvYXVkaW8vQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIkF1ZGlvQ2xpcCIsIkF1ZGlvU291cmNlQ29tcG9uZW50IiwibG9hZGVyIiwiX2RlY29yYXRvciIsIlNhdmVNYW5hZ2VyIiwiRGVidWdVdGlsIiwiVG9vbHMiLCJBdWRpb0NvbmZpZyIsIkF1ZGlvVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkF1ZGlvTWFuYWdlciIsInJvb3ROb2RlIiwibXVzaWNTd2l0Y2giLCJzb3VuZFN3aXRjaCIsIm11c2ljQXVkaW9Db21wb25lbnQiLCJzb3VuZEF1ZGlvQ29tcG9uZW50cyIsIm11c2ljQ2FjaGUiLCJzb3VuZENhY2hlIiwiY3VyQmdNdXNpYyIsIkluc3RhbmNlIiwibG9hZEl0ZW1SZWNvcmQiLCJwcmVsb2FkUmVzb3VyY2VzIiwibG9nSW5mbyIsIlRpbWVUb29scyIsImdldEN1clRpbWVTdGFtcFNlYyIsInN0YXJ0VGltZSIsInNlbGYiLCJrZXkiLCJBdWRpb3NQcmVsb2FkIiwibXVzaWMiLCJyZXNQYXRoIiwiUmVzUGF0aCIsImxvYWRSZXMiLCJlcnIiLCJjbGlwIiwibG9nRXJyb3IiLCJuYW1lIiwic291bmQiLCJ2YWx1ZSIsInNldE11c2ljU3dpdGNoIiwic2V0U291bmRTd2l0Y2giLCJnZXRNdXNpY1N3aXRjaCIsImdldFNvdW5kU3dpdGNoIiwic2F2ZUl0ZW1SZWNvcmQiLCJhdWRpb0lkIiwiYXVkaW9OYW1lIiwiZ2V0QXVkaW9OYW1lQnlJZCIsInVuZGVmaW5lZCIsInBsYXlTb3VuZENsaXAiLCJnZXRBdWRpb1Jlc1BhdGgiLCJTb3VuZCIsImF1ZGlvQ2xpcCIsImF1ZGlvQ29tcG9uZW50IiwiQXJyYXkiLCJpIiwibGVuZ3RoIiwicGxheWluZyIsImFkZENvbXBvbmVudCIsImxvb3AiLCJwdXNoIiwicGxheU9uZVNob3QiLCJwbGF5QmdNdXNpYyIsInN0b3BCZ011c2ljIiwiaXNCZ011c2ljUGxheWluZyIsInBsYXlCZ011c2ljQ2xpcCIsIk11c2ljIiwicGF1c2UiLCJwbGF5Iiwic3RvcCIsIl9pbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBc0JDLE1BQUFBLE0sT0FBQUEsTTtBQUFjQyxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDL0NDLE1BQUFBLFcsc0JBQUFBLFc7O0FBQ0FDLE1BQUFBLFMscUJBQUFBLFM7O0FBQ0FDLE1BQUFBLEssaUJBQUFBLEs7O0FBQ0FDLE1BQUFBLFcsa0JBQUFBLFc7QUFBcUJDLE1BQUFBLFMsa0JBQUFBLFM7Ozs7OztBQUN0QkMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQzs7OztlQVdJRyxRLEdBQWlCLEk7ZUFDakJDLFcsR0FBdUIsSTtlQUN2QkMsVyxHQUF1QixJO2VBQ3ZCQyxtQixHQUE0QyxJO2VBQzVDQyxvQixHQUErQyxJO2VBQy9DQyxVLEdBQWEsRTtlQUNiQyxVLEdBQWEsRTtlQUViQyxVLEdBQXFCLEk7Ozs7OztBQUM3Qjs7OytCQUdZUCxRLEVBQXNCO0FBQzlCO0FBQ0EsaUJBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCLENBRjhCLENBRzlCOztBQUNBLGlCQUFLQyxXQUFMLEdBQW1CO0FBQUE7QUFBQSw0Q0FBWU8sUUFBWixDQUFxQkMsY0FBckIsQ0FBb0MsYUFBcEMsRUFBbUQsR0FBbkQsS0FBMkQsR0FBM0QsR0FBaUUsSUFBakUsR0FBd0UsS0FBM0Y7QUFDQSxpQkFBS1AsV0FBTCxHQUFtQjtBQUFBO0FBQUEsNENBQVlNLFFBQVosQ0FBcUJDLGNBQXJCLENBQW9DLGFBQXBDLEVBQW1ELEdBQW5ELEtBQTJELEdBQTNELEdBQWlF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QUF5QjBDLE9BQWhDO0FBQ0g7OztBQXJRRDs4QkFFMkM7QUFDdkMsZ0JBQUk5QyxZQUFZLENBQUMyRCxTQUFiLElBQTBCLElBQTlCLEVBQW9DO0FBQ2hDM0QsY0FBQUEsWUFBWSxDQUFDMkQsU0FBYixHQUF5QixJQUFJM0QsWUFBSixFQUF6QjtBQUNIOztBQUNELG1CQUFPQSxZQUFZLENBQUMyRCxTQUFwQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9DbGlwLCBBdWRpb1NvdXJjZUNvbXBvbmVudCwgbG9hZGVyLCBOb2RlLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uL3NhdmUvU2F2ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRGVidWdVdGlsIH0gZnJvbSBcIi4uL3Rvb2xzL0RlYnVnVXRpbFwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi90b29scy9Ub29sc1wiO1xyXG5pbXBvcnQgeyBBdWRpb0NvbmZpZywgQXVkaW9zLCBBdWRpb1R5cGUgfSBmcm9tIFwiLi9BdWRpb0NvbmZpZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJBdWRpb01hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgICAvL+WNleS+i+aooeW8j1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBdWRpb01hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBBdWRpb01hbmFnZXIge1xyXG4gICAgICAgIGlmIChBdWRpb01hbmFnZXIuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBBdWRpb01hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEF1ZGlvTWFuYWdlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByb290Tm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG11c2ljU3dpdGNoOiBib29sZWFuID0gbnVsbDtcclxuICAgIHByaXZhdGUgc291bmRTd2l0Y2g6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtdXNpY0F1ZGlvQ29tcG9uZW50OiBBdWRpb1NvdXJjZUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNvdW5kQXVkaW9Db21wb25lbnRzOiBBdWRpb1NvdXJjZUNvbXBvbmVudFtdID0gbnVsbDtcclxuICAgIHByaXZhdGUgbXVzaWNDYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBzb3VuZENhY2hlID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJCZ011c2ljOiBBdWRpb3MgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQocm9vdE5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgICAgICAvL+a3u+WKoEF1ZGlvU291cmNl57uE5Lu255qE54i257qn6IqC54K5XHJcbiAgICAgICAgdGhpcy5yb290Tm9kZSA9IHJvb3ROb2RlO1xyXG4gICAgICAgIC8v6Z+z5LmQ5byA5YWzXHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9IFNhdmVNYW5hZ2VyLkluc3RhbmNlLmxvYWRJdGVtUmVjb3JkKFwibXVzaWNTd2l0Y2hcIiwgXCIxXCIpID09IFwiMVwiID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc291bmRTd2l0Y2ggPSBTYXZlTWFuYWdlci5JbnN0YW5jZS5sb2FkSXRlbVJlY29yZChcInNvdW5kU3dpdGNoXCIsIFwiMVwiKSA9PSBcIjFcIiA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmVsb2FkUmVzb3VyY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpooTliqDovb3pn7PpopHotYTmupBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwcmVsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKCflvIDlp4vpooTliqDovb3pn7PpopHotYTmupDvvJonICsgVG9vbHMuVGltZVRvb2xzLmdldEN1clRpbWVTdGFtcFNlYygpKVxyXG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBUb29scy5UaW1lVG9vbHMuZ2V0Q3VyVGltZVN0YW1wU2VjKCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8v6aKE5Yqg6L296Z+z5LmQXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIEF1ZGlvQ29uZmlnLkF1ZGlvc1ByZWxvYWQubXVzaWMpIHtcclxuICAgICAgICAgICAgbGV0IHJlc1BhdGggPSBBdWRpb0NvbmZpZy5SZXNQYXRoICsgQXVkaW9Db25maWcuQXVkaW9zUHJlbG9hZC5tdXNpY1trZXldO1xyXG4gICAgICAgICAgICBsb2FkZXIubG9hZFJlcyhyZXNQYXRoLCBBdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbygn57uT5p2f6aKE5Yqg6L296Z+z5LmQ6LWE5rqQ77yaJyArIGNsaXAubmFtZSArIFwiW+iAl+aXtl1cIiArIChUb29scy5UaW1lVG9vbHMuZ2V0Q3VyVGltZVN0YW1wU2VjKCkgLSBzdGFydFRpbWUpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubXVzaWNDYWNoZVtjbGlwLm5hbWVdID0gY2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6aKE5Yqg6L296Z+z5pWIXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIEF1ZGlvQ29uZmlnLkF1ZGlvc1ByZWxvYWQuc291bmQpIHtcclxuICAgICAgICAgICAgbGV0IHJlc1BhdGggPSBBdWRpb0NvbmZpZy5SZXNQYXRoICsgQXVkaW9Db25maWcuQXVkaW9zUHJlbG9hZC5zb3VuZFtrZXldO1xyXG4gICAgICAgICAgICBsb2FkZXIubG9hZFJlcyhyZXNQYXRoLCBBdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbygn57uT5p2f6aKE5Yqg6L296Z+z5pWI6LWE5rqQ77yaJyArIGNsaXAubmFtZSArIFwiW+iAl+aXtl1cIiArIChUb29scy5UaW1lVG9vbHMuZ2V0Q3VyVGltZVN0YW1wU2VjKCkgLSBzdGFydFRpbWUpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc291bmRDYWNoZVtjbGlwLm5hbWVdID0gY2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBBdWRpb+WFqOWxgOaOp+WItiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwdWJsaWMgc2V0QXVkaW9Td2l0Y2godmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldE11c2ljU3dpdGNoKHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFNvdW5kU3dpdGNoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXVkaW9Td2l0Y2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TXVzaWNTd2l0Y2goKSB8fCB0aGlzLmdldFNvdW5kU3dpdGNoKCk7XHJcbiAgICB9XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogU291bmTpn7PmlYggKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgcHVibGljIHNldFNvdW5kU3dpdGNoKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLorr7nva7pn7PpopHlvIDlhbPvvJpcIiArIHZhbHVlKTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBTYXZlTWFuYWdlci5JbnN0YW5jZS5zYXZlSXRlbVJlY29yZCgnc291bmRTd2l0Y2gnLCAnMScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFNhdmVNYW5hZ2VyLkluc3RhbmNlLnNhdmVJdGVtUmVjb3JkKCdzb3VuZFN3aXRjaCcsICcwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc291bmRTd2l0Y2ggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U291bmRTd2l0Y2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRTd2l0Y2ggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdW5kU3dpdGNoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5U291bmQoYXVkaW9JZDogQXVkaW9zKTogdm9pZCB7XHJcbiAgICAgICAgLy/liKTmlq3pn7PmlYjlvIDlhbPmmK/lkKblvIDlkK/kuoZcclxuICAgICAgICBpZiAoIXRoaXMuc291bmRTd2l0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WKoOi9veW5tuaSreaUvlxyXG4gICAgICAgIGxldCBhdWRpb05hbWUgPSBBdWRpb0NvbmZpZy5nZXRBdWRpb05hbWVCeUlkKGF1ZGlvSWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kQ2FjaGVbYXVkaW9OYW1lXSAhPSBudWxsICYmIHRoaXMuc291bmRDYWNoZVthdWRpb05hbWVdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvL+aSreaUvue8k+WtmFxyXG4gICAgICAgICAgICB0aGlzLnBsYXlTb3VuZENsaXAodGhpcy5zb3VuZENhY2hlW2F1ZGlvTmFtZV0pO1xyXG4gICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIkF1ZGlvTWFuYWdlci7mkq3mlL7pn7PmlYgo57yT5a2YKTpcIiArIEF1ZGlvQ29uZmlnLmdldEF1ZGlvTmFtZUJ5SWQoYXVkaW9JZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy/liqjmgIHliqDovb1cclxuICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IFRvb2xzLlRpbWVUb29scy5nZXRDdXJUaW1lU3RhbXBTZWMoKTtcclxuICAgICAgICAgICAgbGV0IHJlc1BhdGggPSBBdWRpb0NvbmZpZy5nZXRBdWRpb1Jlc1BhdGgoYXVkaW9JZCwgQXVkaW9UeXBlLlNvdW5kKTtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBsb2FkZXIubG9hZFJlcyhyZXNQYXRoLCBBdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIkF1ZGlvTWFuYWdlci7pn7PmlYjotYTmupDliqDovb3lrozmr5VbXCIgKyBBdWRpb0NvbmZpZy5nZXRBdWRpb05hbWVCeUlkKGF1ZGlvSWQpICsgXCJdLFvogJfml7Y6XCIgKyAoVG9vbHMuVGltZVRvb2xzLmdldEN1clRpbWVTdGFtcFNlYygpIC0gc3RhcnRUaW1lKSArIFwiXVwiKTtcclxuICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiQXVkaW9NYW5hZ2VyLuaSreaUvumfs+aViCjliqjmgIEpOlwiICsgQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChhdWRpb0lkKSk7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5U291bmRDbGlwKGNsaXApO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zb3VuZENhY2hlW2NsaXAubmFtZV0gPSBjbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5U291bmRDbGlwKGF1ZGlvQ2xpcDogQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgbGV0IGF1ZGlvQ29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEF1ZGlvQ29tcG9uZW50cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRBdWRpb0NvbXBvbmVudHMgPSBuZXcgQXJyYXk8QXVkaW9Tb3VyY2VDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3VuZEF1ZGlvQ29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc291bmRBdWRpb0NvbXBvbmVudHNbaV0ucGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9Db21wb25lbnQgPSB0aGlzLnNvdW5kQXVkaW9Db21wb25lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF1ZGlvQ29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCLmsqHmnInlj6/nlKjpn7PpopHnu4Tku7bvvIzmt7vliqDmlrDnmoTpn7PpopHnu4Tku7ZcIik7XHJcbiAgICAgICAgICAgIGF1ZGlvQ29tcG9uZW50ID0gdGhpcy5yb290Tm9kZS5hZGRDb21wb25lbnQoQXVkaW9Tb3VyY2VDb21wb25lbnQpO1xyXG4gICAgICAgICAgICBhdWRpb0NvbXBvbmVudC5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRBdWRpb0NvbXBvbmVudHMucHVzaChhdWRpb0NvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1ZGlvQ29tcG9uZW50LnBsYXlPbmVTaG90KGF1ZGlvQ2xpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIE11c2lj6Z+z5LmQICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6Z+z5LmQ5byA5YWzXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRNdXNpY1N3aXRjaCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi6K6+572u6Z+z5LmQ5byA5YWz77yaXCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgU2F2ZU1hbmFnZXIuSW5zdGFuY2Uuc2F2ZUl0ZW1SZWNvcmQoJ211c2ljU3dpdGNoJywgJzEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTYXZlTWFuYWdlci5JbnN0YW5jZS5zYXZlSXRlbVJlY29yZCgnbXVzaWNTd2l0Y2gnLCAnMCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11c2ljU3dpdGNoID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUJnTXVzaWMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BCZ011c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6Z+z5LmQ5byA5YWzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRNdXNpY1N3aXRjaCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVzaWNTd2l0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7og4zmma/pn7NcclxuICAgICAqIEBwYXJhbSBhdWRpb0lkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGxheUJnTXVzaWMoYXVkaW9JZDogQXVkaW9zID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5oGi5aSN5LmL5YmNYmdt55qE5pKt5pS+XHJcbiAgICAgICAgaWYgKGF1ZGlvSWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0JnTXVzaWNQbGF5aW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1ckJnTXVzaWMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF1ZGlvSWQgPSB0aGlzLmN1ckJnTXVzaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbph43lpI3mkq3mlL7nm7jlkIznmoRiZ21cclxuICAgICAgICBpZiAodGhpcy5pc0JnTXVzaWNQbGF5aW5nKCkgJiYgKGF1ZGlvSWQgPT0gdGhpcy5jdXJCZ011c2ljKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat6Z+z6aKR5byA5YWz5piv5ZCm5byA5ZCv5LqGXHJcbiAgICAgICAgdGhpcy5jdXJCZ011c2ljID0gYXVkaW9JZDtcclxuICAgICAgICBpZiAoIXRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/liqDovb3lubbmkq3mlL5cclxuICAgICAgICBsZXQgYXVkaW9OYW1lID0gQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChhdWRpb0lkKTtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY0NhY2hlW2F1ZGlvTmFtZV0gIT0gbnVsbCAmJiB0aGlzLm11c2ljQ2FjaGVbYXVkaW9OYW1lXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy/mkq3mlL7nvJPlrZhcclxuICAgICAgICAgICAgdGhpcy5wbGF5QmdNdXNpY0NsaXAodGhpcy5tdXNpY0NhY2hlW2F1ZGlvTmFtZV0pO1xyXG4gICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIkF1ZGlvTWFuYWdlci7mkq3mlL7og4zmma/pn7Mo57yT5a2YKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBUb29scy5UaW1lVG9vbHMuZ2V0Q3VyVGltZVN0YW1wU2VjKCk7XHJcbiAgICAgICAgICAgIGxldCByZXNQYXRoID0gQXVkaW9Db25maWcuZ2V0QXVkaW9SZXNQYXRoKGF1ZGlvSWQsIEF1ZGlvVHlwZS5NdXNpYyk7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMocmVzUGF0aCwgQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJBdWRpb01hbmFnZXIu6Z+z6aKR6LWE5rqQ5Yqg6L295a6M5q+VW1wiICsgQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChhdWRpb0lkKSArIFwiXSxb6ICX5pe2OlwiICsgKFRvb2xzLlRpbWVUb29scy5nZXRDdXJUaW1lU3RhbXBTZWMoKSAtIHN0YXJ0VGltZSkgKyBcIl1cIik7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIkF1ZGlvTWFuYWdlci7mkq3mlL7og4zmma/pn7Mo5Yqo5oCBKVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucGxheUJnTXVzaWNDbGlwKGNsaXApO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5tdXNpY0NhY2hlW2NsaXAubmFtZV0gPSBjbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQmdNdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY0F1ZGlvQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lQmdNdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY0F1ZGlvQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQmdNdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY0F1ZGlvQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudC5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheUJnTXVzaWNDbGlwKGF1ZGlvQ2xpcDogQXVkaW9DbGlwKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi6aaW5qyh5pKt5pS+6IOM5pmv6Z+z77yM5re75Yqg6Z+z6aKR57uE5Lu2XCIpO1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljQXVkaW9Db21wb25lbnQgPSB0aGlzLnJvb3ROb2RlLmFkZENvbXBvbmVudChBdWRpb1NvdXJjZUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudC5sb29wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tdXNpY0F1ZGlvQ29tcG9uZW50LmNsaXAgPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgdGhpcy5tdXNpY0F1ZGlvQ29tcG9uZW50LnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjWJnbeaYr+WQpuWcqOaSreaUvlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzQmdNdXNpY1BsYXlpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudC5wbGF5aW5nO1xyXG4gICAgfVxyXG5cclxufSJdfQ==