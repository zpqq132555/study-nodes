System.register(["cc", "code-quality:cr", "../tools/DebugUtil.js", "../save/SaveManager.js", "../tools/Tools.js", "./AudioConfig.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, AudioClip, AudioSourceComponent, loader, _decorator, DebugUtil, SaveManager, Tools, AudioConfig, AudioType, _dec, _class, _temp, _crd, ccclass, property, AudioManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "../tools/DebugUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveManager(extras) {
    _reporterNs.report("SaveManager", "../save/SaveManager", _context.meta, extras);
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
    }, function (_toolsDebugUtilJs) {
      DebugUtil = _toolsDebugUtilJs.DebugUtil;
    }, function (_saveSaveManagerJs) {
      SaveManager = _saveSaveManagerJs.SaveManager;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL2F1ZGlvL0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6WyJBdWRpb0NsaXAiLCJBdWRpb1NvdXJjZUNvbXBvbmVudCIsImxvYWRlciIsIl9kZWNvcmF0b3IiLCJEZWJ1Z1V0aWwiLCJTYXZlTWFuYWdlciIsIlRvb2xzIiwiQXVkaW9Db25maWciLCJBdWRpb1R5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBdWRpb01hbmFnZXIiLCJyb290Tm9kZSIsIm11c2ljU3dpdGNoIiwic291bmRTd2l0Y2giLCJtdXNpY0F1ZGlvQ29tcG9uZW50Iiwic291bmRBdWRpb0NvbXBvbmVudHMiLCJtdXNpY0NhY2hlIiwic291bmRDYWNoZSIsImN1ckJnTXVzaWMiLCJJbnN0YW5jZSIsImxvYWRJdGVtUmVjb3JkIiwicHJlbG9hZFJlc291cmNlcyIsImxvZ0luZm8iLCJUaW1lVG9vbHMiLCJnZXRDdXJUaW1lU3RhbXBTZWMiLCJzdGFydFRpbWUiLCJzZWxmIiwia2V5IiwiQXVkaW9zUHJlbG9hZCIsIm11c2ljIiwicmVzUGF0aCIsIlJlc1BhdGgiLCJsb2FkUmVzIiwiZXJyIiwiY2xpcCIsImxvZ0Vycm9yIiwibmFtZSIsInNvdW5kIiwidmFsdWUiLCJzZXRNdXNpY1N3aXRjaCIsInNldFNvdW5kU3dpdGNoIiwiZ2V0TXVzaWNTd2l0Y2giLCJnZXRTb3VuZFN3aXRjaCIsInNhdmVJdGVtUmVjb3JkIiwiYXVkaW9JZCIsImF1ZGlvTmFtZSIsImdldEF1ZGlvTmFtZUJ5SWQiLCJ1bmRlZmluZWQiLCJwbGF5U291bmRDbGlwIiwiZ2V0QXVkaW9SZXNQYXRoIiwiU291bmQiLCJhdWRpb0NsaXAiLCJhdWRpb0NvbXBvbmVudCIsIkFycmF5IiwiaSIsImxlbmd0aCIsInBsYXlpbmciLCJhZGRDb21wb25lbnQiLCJsb29wIiwicHVzaCIsInBsYXlPbmVTaG90IiwicGxheUJnTXVzaWMiLCJzdG9wQmdNdXNpYyIsImlzQmdNdXNpY1BsYXlpbmciLCJwbGF5QmdNdXNpY0NsaXAiLCJNdXNpYyIsInBhdXNlIiwicGxheSIsInN0b3AiLCJfaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQXNCQyxNQUFBQSxNLE9BQUFBLE07QUFBY0MsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQy9DQyxNQUFBQSxTLHFCQUFBQSxTOztBQUNBQyxNQUFBQSxXLHNCQUFBQSxXOztBQUNBQyxNQUFBQSxLLGlCQUFBQSxLOztBQUNBQyxNQUFBQSxXLGtCQUFBQSxXO0FBQXFCQyxNQUFBQSxTLGtCQUFBQSxTOzs7Ozs7QUFDdEJDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEM7Ozs7ZUFXSUcsUSxHQUFpQixJO2VBQ2pCQyxXLEdBQXVCLEk7ZUFDdkJDLFcsR0FBdUIsSTtlQUN2QkMsbUIsR0FBNEMsSTtlQUM1Q0Msb0IsR0FBK0MsSTtlQUMvQ0MsVSxHQUFhLEU7ZUFDYkMsVSxHQUFhLEU7ZUFFYkMsVSxHQUFxQixJOzs7Ozs7QUFDN0I7OzsrQkFHWVAsUSxFQUFzQjtBQUM5QjtBQUNBLGlCQUFLQSxRQUFMLEdBQWdCQSxRQUFoQixDQUY4QixDQUc5Qjs7QUFDQSxpQkFBS0MsV0FBTCxHQUFtQjtBQUFBO0FBQUEsNENBQVlPLFFBQVosQ0FBcUJDLGNBQXJCLENBQW9DLGFBQXBDLEVBQW1ELEdBQW5ELEtBQTJELEdBQTNELEdBQWlFLElBQWpFLEdBQXdFLEtBQTNGO0FBQ0EsaUJBQUtQLFdBQUwsR0FBbUI7QUFBQTtBQUFBLDRDQUFZTSxRQUFaLENBQXFCQyxjQUFyQixDQUFvQyxhQUFwQyxFQUFtRCxHQUFuRCxLQUEyRCxHQUEzRCxHQUFp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Q0FBeUIwQyxPQUFoQztBQUNIOzs7QUFyUUQ7OEJBRTJDO0FBQ3ZDLGdCQUFJOUMsWUFBWSxDQUFDMkQsU0FBYixJQUEwQixJQUE5QixFQUFvQztBQUNoQzNELGNBQUFBLFlBQVksQ0FBQzJELFNBQWIsR0FBeUIsSUFBSTNELFlBQUosRUFBekI7QUFDSDs7QUFDRCxtQkFBT0EsWUFBWSxDQUFDMkQsU0FBcEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvQ2xpcCwgQXVkaW9Tb3VyY2VDb21wb25lbnQsIGxvYWRlciwgTm9kZSwgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi4vdG9vbHMvRGVidWdVdGlsXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uL3NhdmUvU2F2ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vdG9vbHMvVG9vbHNcIjtcclxuaW1wb3J0IHsgQXVkaW9Db25maWcsIEF1ZGlvcywgQXVkaW9UeXBlIH0gZnJvbSBcIi4vQXVkaW9Db25maWdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiQXVkaW9NYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xyXG4gICAgLy/ljZXkvovmqKHlvI9cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQXVkaW9NYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogQXVkaW9NYW5hZ2VyIHtcclxuICAgICAgICBpZiAoQXVkaW9NYW5hZ2VyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgQXVkaW9NYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBdWRpb01hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcm9vdE5vZGU6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtdXNpY1N3aXRjaDogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNvdW5kU3dpdGNoOiBib29sZWFuID0gbnVsbDtcclxuICAgIHByaXZhdGUgbXVzaWNBdWRpb0NvbXBvbmVudDogQXVkaW9Tb3VyY2VDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzb3VuZEF1ZGlvQ29tcG9uZW50czogQXVkaW9Tb3VyY2VDb21wb25lbnRbXSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG11c2ljQ2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgc291bmRDYWNoZSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgY3VyQmdNdXNpYzogQXVkaW9zID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KHJvb3ROb2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICAgICAgLy/mt7vliqBBdWRpb1NvdXJjZee7hOS7tueahOeItue6p+iKgueCuVxyXG4gICAgICAgIHRoaXMucm9vdE5vZGUgPSByb290Tm9kZTtcclxuICAgICAgICAvL+mfs+S5kOW8gOWFs1xyXG4gICAgICAgIHRoaXMubXVzaWNTd2l0Y2ggPSBTYXZlTWFuYWdlci5JbnN0YW5jZS5sb2FkSXRlbVJlY29yZChcIm11c2ljU3dpdGNoXCIsIFwiMVwiKSA9PSBcIjFcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvdW5kU3dpdGNoID0gU2F2ZU1hbmFnZXIuSW5zdGFuY2UubG9hZEl0ZW1SZWNvcmQoXCJzb3VuZFN3aXRjaFwiLCBcIjFcIikgPT0gXCIxXCIgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMucHJlbG9hZFJlc291cmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aKE5Yqg6L296Z+z6aKR6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJlbG9hZFJlc291cmNlcygpOiB2b2lkIHtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbygn5byA5aeL6aKE5Yqg6L296Z+z6aKR6LWE5rqQ77yaJyArIFRvb2xzLlRpbWVUb29scy5nZXRDdXJUaW1lU3RhbXBTZWMoKSlcclxuICAgICAgICBsZXQgc3RhcnRUaW1lID0gVG9vbHMuVGltZVRvb2xzLmdldEN1clRpbWVTdGFtcFNlYygpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAvL+mihOWKoOi9vemfs+S5kFxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBBdWRpb0NvbmZpZy5BdWRpb3NQcmVsb2FkLm11c2ljKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNQYXRoID0gQXVkaW9Db25maWcuUmVzUGF0aCArIEF1ZGlvQ29uZmlnLkF1ZGlvc1ByZWxvYWQubXVzaWNba2V5XTtcclxuICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMocmVzUGF0aCwgQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oJ+e7k+adn+mihOWKoOi9vemfs+S5kOi1hOa6kO+8micgKyBjbGlwLm5hbWUgKyBcIlvogJfml7ZdXCIgKyAoVG9vbHMuVGltZVRvb2xzLmdldEN1clRpbWVTdGFtcFNlYygpIC0gc3RhcnRUaW1lKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm11c2ljQ2FjaGVbY2xpcC5uYW1lXSA9IGNsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mihOWKoOi9vemfs+aViFxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBBdWRpb0NvbmZpZy5BdWRpb3NQcmVsb2FkLnNvdW5kKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNQYXRoID0gQXVkaW9Db25maWcuUmVzUGF0aCArIEF1ZGlvQ29uZmlnLkF1ZGlvc1ByZWxvYWQuc291bmRba2V5XTtcclxuICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMocmVzUGF0aCwgQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oJ+e7k+adn+mihOWKoOi9vemfs+aViOi1hOa6kO+8micgKyBjbGlwLm5hbWUgKyBcIlvogJfml7ZdXCIgKyAoVG9vbHMuVGltZVRvb2xzLmdldEN1clRpbWVTdGFtcFNlYygpIC0gc3RhcnRUaW1lKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNvdW5kQ2FjaGVbY2xpcC5uYW1lXSA9IGNsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQXVkaW/lhajlsYDmjqfliLYgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgcHVibGljIHNldEF1ZGlvU3dpdGNoKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRNdXNpY1N3aXRjaCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTb3VuZFN3aXRjaCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF1ZGlvU3dpdGNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE11c2ljU3dpdGNoKCkgfHwgdGhpcy5nZXRTb3VuZFN3aXRjaCgpO1xyXG4gICAgfVxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFNvdW5k6Z+z5pWIICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHB1YmxpYyBzZXRTb3VuZFN3aXRjaCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi6K6+572u6Z+z6aKR5byA5YWz77yaXCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgU2F2ZU1hbmFnZXIuSW5zdGFuY2Uuc2F2ZUl0ZW1SZWNvcmQoJ3NvdW5kU3dpdGNoJywgJzEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTYXZlTWFuYWdlci5JbnN0YW5jZS5zYXZlSXRlbVJlY29yZCgnc291bmRTd2l0Y2gnLCAnMCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdW5kU3dpdGNoID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNvdW5kU3dpdGNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kU3dpdGNoID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VuZFN3aXRjaDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKGF1ZGlvSWQ6IEF1ZGlvcyk6IHZvaWQge1xyXG4gICAgICAgIC8v5Yik5pat6Z+z5pWI5byA5YWz5piv5ZCm5byA5ZCv5LqGXHJcbiAgICAgICAgaWYgKCF0aGlzLnNvdW5kU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liqDovb3lubbmkq3mlL5cclxuICAgICAgICBsZXQgYXVkaW9OYW1lID0gQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChhdWRpb0lkKTtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZENhY2hlW2F1ZGlvTmFtZV0gIT0gbnVsbCAmJiB0aGlzLnNvdW5kQ2FjaGVbYXVkaW9OYW1lXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy/mkq3mlL7nvJPlrZhcclxuICAgICAgICAgICAgdGhpcy5wbGF5U291bmRDbGlwKHRoaXMuc291bmRDYWNoZVthdWRpb05hbWVdKTtcclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJBdWRpb01hbmFnZXIu5pKt5pS+6Z+z5pWIKOe8k+WtmCk6XCIgKyBBdWRpb0NvbmZpZy5nZXRBdWRpb05hbWVCeUlkKGF1ZGlvSWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBUb29scy5UaW1lVG9vbHMuZ2V0Q3VyVGltZVN0YW1wU2VjKCk7XHJcbiAgICAgICAgICAgIGxldCByZXNQYXRoID0gQXVkaW9Db25maWcuZ2V0QXVkaW9SZXNQYXRoKGF1ZGlvSWQsIEF1ZGlvVHlwZS5Tb3VuZCk7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMocmVzUGF0aCwgQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJBdWRpb01hbmFnZXIu6Z+z5pWI6LWE5rqQ5Yqg6L295a6M5q+VW1wiICsgQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChhdWRpb0lkKSArIFwiXSxb6ICX5pe2OlwiICsgKFRvb2xzLlRpbWVUb29scy5nZXRDdXJUaW1lU3RhbXBTZWMoKSAtIHN0YXJ0VGltZSkgKyBcIl1cIik7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIkF1ZGlvTWFuYWdlci7mkq3mlL7pn7PmlYgo5Yqo5oCBKTpcIiArIEF1ZGlvQ29uZmlnLmdldEF1ZGlvTmFtZUJ5SWQoYXVkaW9JZCkpO1xyXG4gICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCx0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucGxheVNvdW5kQ2xpcChjbGlwKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc291bmRDYWNoZVtjbGlwLm5hbWVdID0gY2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheVNvdW5kQ2xpcChhdWRpb0NsaXA6IEF1ZGlvQ2xpcCkge1xyXG4gICAgICAgIGxldCBhdWRpb0NvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRBdWRpb0NvbXBvbmVudHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQXVkaW9Db21wb25lbnRzID0gbmV3IEFycmF5PEF1ZGlvU291cmNlQ29tcG9uZW50PigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc291bmRBdWRpb0NvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNvdW5kQXVkaW9Db21wb25lbnRzW2ldLnBsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvQ29tcG9uZW50ID0gdGhpcy5zb3VuZEF1ZGlvQ29tcG9uZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhdWRpb0NvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwi5rKh5pyJ5Y+v55So6Z+z6aKR57uE5Lu277yM5re75Yqg5paw55qE6Z+z6aKR57uE5Lu2XCIpO1xyXG4gICAgICAgICAgICBhdWRpb0NvbXBvbmVudCA9IHRoaXMucm9vdE5vZGUuYWRkQ29tcG9uZW50KEF1ZGlvU291cmNlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgYXVkaW9Db21wb25lbnQubG9vcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQXVkaW9Db21wb25lbnRzLnB1c2goYXVkaW9Db21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhdWRpb0NvbXBvbmVudC5wbGF5T25lU2hvdChhdWRpb0NsaXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBNdXNpY+mfs+S5kCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumfs+S5kOW8gOWFs1xyXG4gICAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0TXVzaWNTd2l0Y2godmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIuiuvue9rumfs+S5kOW8gOWFs++8mlwiICsgdmFsdWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIFNhdmVNYW5hZ2VyLkluc3RhbmNlLnNhdmVJdGVtUmVjb3JkKCdtdXNpY1N3aXRjaCcsICcxJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU2F2ZU1hbmFnZXIuSW5zdGFuY2Uuc2F2ZUl0ZW1SZWNvcmQoJ211c2ljU3dpdGNoJywgJzAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlCZ011c2ljKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQmdNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumfs+S5kOW8gOWFs1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TXVzaWNTd2l0Y2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2ggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljU3dpdGNoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6IOM5pmv6Z+zXHJcbiAgICAgKiBAcGFyYW0gYXVkaW9JZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlCZ011c2ljKGF1ZGlvSWQ6IEF1ZGlvcyA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaBouWkjeS5i+WJjWJnbeeahOaSreaUvlxyXG4gICAgICAgIGlmIChhdWRpb0lkID09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCZ011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJCZ011c2ljID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhdWRpb0lkID0gdGhpcy5jdXJCZ011c2ljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6YeN5aSN5pKt5pS+55u45ZCM55qEYmdtXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCZ011c2ljUGxheWluZygpICYmIChhdWRpb0lkID09IHRoaXMuY3VyQmdNdXNpYykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWremfs+mikeW8gOWFs+aYr+WQpuW8gOWQr+S6hlxyXG4gICAgICAgIHRoaXMuY3VyQmdNdXNpYyA9IGF1ZGlvSWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yqg6L295bm25pKt5pS+XHJcbiAgICAgICAgbGV0IGF1ZGlvTmFtZSA9IEF1ZGlvQ29uZmlnLmdldEF1ZGlvTmFtZUJ5SWQoYXVkaW9JZCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNDYWNoZVthdWRpb05hbWVdICE9IG51bGwgJiYgdGhpcy5tdXNpY0NhY2hlW2F1ZGlvTmFtZV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+57yT5a2YXHJcbiAgICAgICAgICAgIHRoaXMucGxheUJnTXVzaWNDbGlwKHRoaXMubXVzaWNDYWNoZVthdWRpb05hbWVdKTtcclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJBdWRpb01hbmFnZXIu5pKt5pS+6IOM5pmv6Z+zKOe8k+WtmClcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WKqOaAgeWKoOi9vVxyXG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gVG9vbHMuVGltZVRvb2xzLmdldEN1clRpbWVTdGFtcFNlYygpO1xyXG4gICAgICAgICAgICBsZXQgcmVzUGF0aCA9IEF1ZGlvQ29uZmlnLmdldEF1ZGlvUmVzUGF0aChhdWRpb0lkLCBBdWRpb1R5cGUuTXVzaWMpO1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKHJlc1BhdGgsIEF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERlYnVnVXRpbC5sb2dJbmZvKFwiQXVkaW9NYW5hZ2VyLumfs+mikei1hOa6kOWKoOi9veWujOavlVtcIiArIEF1ZGlvQ29uZmlnLmdldEF1ZGlvTmFtZUJ5SWQoYXVkaW9JZCkgKyBcIl0sW+iAl+aXtjpcIiArIChUb29scy5UaW1lVG9vbHMuZ2V0Q3VyVGltZVN0YW1wU2VjKCkgLSBzdGFydFRpbWUpICsgXCJdXCIpO1xyXG4gICAgICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0luZm8oXCJBdWRpb01hbmFnZXIu5pKt5pS+6IOM5pmv6Z+zKOWKqOaAgSlcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXlCZ011c2ljQ2xpcChjbGlwKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubXVzaWNDYWNoZVtjbGlwLm5hbWVdID0gY2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXVzZUJnTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljQXVkaW9Db21wb25lbnQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3VtZUJnTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljQXVkaW9Db21wb25lbnQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEJnTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljQXVkaW9Db21wb25lbnQuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlCZ011c2ljQ2xpcChhdWRpb0NsaXA6IEF1ZGlvQ2xpcCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljQXVkaW9Db21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBEZWJ1Z1V0aWwubG9nSW5mbyhcIummluasoeaSreaUvuiDjOaZr+mfs++8jOa3u+WKoOmfs+mikee7hOS7tlwiKTtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0F1ZGlvQ29tcG9uZW50ID0gdGhpcy5yb290Tm9kZS5hZGRDb21wb25lbnQoQXVkaW9Tb3VyY2VDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljQXVkaW9Db21wb25lbnQubG9vcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudC5jbGlwID0gYXVkaW9DbGlwO1xyXG4gICAgICAgIHRoaXMubXVzaWNBdWRpb0NvbXBvbmVudC5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY1iZ23mmK/lkKblnKjmkq3mlL5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc0JnTXVzaWNQbGF5aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljQXVkaW9Db21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljQXVkaW9Db21wb25lbnQucGxheWluZztcclxuICAgIH1cclxuXHJcbn0iXX0=