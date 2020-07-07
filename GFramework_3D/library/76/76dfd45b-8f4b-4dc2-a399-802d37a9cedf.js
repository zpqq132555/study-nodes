System.register(["cc", "code-quality:cr", "../tools/DebugUtil.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, DebugUtil, _dec, _class, _class2, _temp, _crd, ccclass, Audios, AudioType, AudioConfig;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfDebugUtil(extras) {
    _reporterNs.report("DebugUtil", "../tools/DebugUtil", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0,
    Audios: void 0,
    AudioType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_toolsDebugUtilJs) {
      DebugUtil = _toolsDebugUtilJs.DebugUtil;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "76dfdRbj0tNwqOZgC03qc7f", "AudioConfig", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      /**
       * 所有音频的枚举
       * 枚举名称必须和音频文件的名称相同
       */

      (function (Audios) {
        Audios[Audios["btn"] = 0] = "btn";
        Audios[Audios["success"] = 1] = "success";
        Audios[Audios["bgm"] = 2] = "bgm";
      })(Audios || _export("Audios", Audios = {}));

      (function (AudioType) {
        AudioType[AudioType["Music"] = 0] = "Music";
        AudioType[AudioType["Sound"] = 1] = "Sound";
      })(AudioType || _export("AudioType", AudioType = {}));

      _export("AudioConfig", AudioConfig = (_dec = ccclass("AudioConfig"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function AudioConfig() {
          _classCallCheck(this, AudioConfig);
        }

        _createClass(AudioConfig, null, [{
          key: "getAudioNameById",
          value: function getAudioNameById(audioId) {
            return Audios[audioId];
          }
        }, {
          key: "getAudioResPath",
          value: function getAudioResPath(audioId, audioType) {
            var subPath = null;

            if (audioType == AudioType.Music) {
              subPath = AudioConfig.AudiosPreload.music[AudioConfig.getAudioNameById(audioId)];
            } else if (audioType == AudioType.Sound) {
              subPath = AudioConfig.AudiosPreload.sound[AudioConfig.getAudioNameById(audioId)];
            }

            if (subPath == null || subPath == undefined) {
              subPath = "";
              (_crd && DebugUtil === void 0 ? (_reportPossibleCrUseOfDebugUtil({
                error: Error()
              }), DebugUtil) : DebugUtil).logError("音频资源路径配置错误：" + AudioConfig.getAudioNameById(audioId));
            }

            return AudioConfig.ResPath + subPath;
          }
        }]);

        return AudioConfig;
      }(), _class2.ResPath = "art/audio/", _class2.AudiosPreload = {
        music: {
          bgm: "music/bgm"
        },
        sound: {
          btn: "sound/btn",
          success: "sound/success"
        }
      }, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovc3R1ZHktbm90ZXMvR0ZyYW1ld29ya18zRC9hc3NldHMvc2NyaXB0cy9mcmFtZXdvcmsvYXVkaW8vQXVkaW9Db25maWcudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkRlYnVnVXRpbCIsImNjY2xhc3MiLCJBdWRpb3MiLCJBdWRpb1R5cGUiLCJBdWRpb0NvbmZpZyIsImF1ZGlvSWQiLCJhdWRpb1R5cGUiLCJzdWJQYXRoIiwiTXVzaWMiLCJBdWRpb3NQcmVsb2FkIiwibXVzaWMiLCJnZXRBdWRpb05hbWVCeUlkIiwiU291bmQiLCJzb3VuZCIsInVuZGVmaW5lZCIsImxvZ0Vycm9yIiwiUmVzUGF0aCIsImJnbSIsImJ0biIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDQUMsTUFBQUEsUyxxQkFBQUEsUzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBWUYsVSxDQUFaRSxPO0FBRVI7Ozs7O2lCQUlZQyxNO0FBQUFBLFFBQUFBLE0sQ0FBQUEsTTtBQUFBQSxRQUFBQSxNLENBQUFBLE07QUFBQUEsUUFBQUEsTSxDQUFBQSxNO1NBQUFBLE0sc0JBQUFBLE07O2lCQVNBQyxTO0FBQUFBLFFBQUFBLFMsQ0FBQUEsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7U0FBQUEsUyx5QkFBQUEsUzs7NkJBTUNDLFcsV0FEWkgsT0FBTyxDQUFDLGFBQUQsQzs7Ozs7OzsyQ0FhMkJJLE8sRUFBeUI7QUFDcEQsbUJBQU9ILE1BQU0sQ0FBQ0csT0FBRCxDQUFiO0FBQ0g7OzswQ0FFNkJBLE8sRUFBaUJDLFMsRUFBOEI7QUFDekUsZ0JBQUlDLE9BQU8sR0FBRyxJQUFkOztBQUNBLGdCQUFJRCxTQUFTLElBQUlILFNBQVMsQ0FBQ0ssS0FBM0IsRUFBa0M7QUFDOUJELGNBQUFBLE9BQU8sR0FBR0gsV0FBVyxDQUFDSyxhQUFaLENBQTBCQyxLQUExQixDQUFnQ04sV0FBVyxDQUFDTyxnQkFBWixDQUE2Qk4sT0FBN0IsQ0FBaEMsQ0FBVjtBQUNILGFBRkQsTUFHSyxJQUFJQyxTQUFTLElBQUlILFNBQVMsQ0FBQ1MsS0FBM0IsRUFBa0M7QUFDbkNMLGNBQUFBLE9BQU8sR0FBR0gsV0FBVyxDQUFDSyxhQUFaLENBQTBCSSxLQUExQixDQUFnQ1QsV0FBVyxDQUFDTyxnQkFBWixDQUE2Qk4sT0FBN0IsQ0FBaEMsQ0FBVjtBQUNIOztBQUNELGdCQUFJRSxPQUFPLElBQUksSUFBWCxJQUFtQkEsT0FBTyxJQUFJTyxTQUFsQyxFQUE2QztBQUN6Q1AsY0FBQUEsT0FBTyxHQUFHLEVBQVY7QUFDQTtBQUFBO0FBQUEsMENBQVVRLFFBQVYsQ0FBbUIsZ0JBQWdCWCxXQUFXLENBQUNPLGdCQUFaLENBQTZCTixPQUE3QixDQUFuQztBQUNIOztBQUNELG1CQUFPRCxXQUFXLENBQUNZLE9BQVosR0FBc0JULE9BQTdCO0FBQ0g7Ozs7bUJBNUJhUyxPLEdBQWtCLFksVUFDbEJQLGEsR0FBZ0I7QUFDMUJDLFFBQUFBLEtBQUssRUFBRTtBQUNITyxVQUFBQSxHQUFHLEVBQUU7QUFERixTQURtQjtBQUkxQkosUUFBQUEsS0FBSyxFQUFFO0FBQ0hLLFVBQUFBLEdBQUcsRUFBRSxXQURGO0FBRUhDLFVBQUFBLE9BQU8sRUFBRTtBQUZOO0FBSm1CLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IERlYnVnVXRpbCB9IGZyb20gXCIuLi90b29scy9EZWJ1Z1V0aWxcIjtcclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOaJgOaciemfs+mikeeahOaemuS4vlxyXG4gKiDmnprkuL7lkI3np7Dlv4Xpobvlkozpn7PpopHmlofku7bnmoTlkI3np7Dnm7jlkIxcclxuICovXHJcbmV4cG9ydCBlbnVtIEF1ZGlvcyB7XHJcbiAgICBidG4sXHJcbiAgICBzdWNjZXNzLFxyXG4gICAgYmdtLFxyXG59XHJcblxyXG4vKipcclxuICog6Z+z6aKR55qE57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBdWRpb1R5cGUge1xyXG4gICAgTXVzaWMsXHJcbiAgICBTb3VuZCxcclxufVxyXG5cclxuQGNjY2xhc3MoXCJBdWRpb0NvbmZpZ1wiKVxyXG5leHBvcnQgY2xhc3MgQXVkaW9Db25maWcge1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXNQYXRoOiBzdHJpbmcgPSBcImFydC9hdWRpby9cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQXVkaW9zUHJlbG9hZCA9IHtcclxuICAgICAgICBtdXNpYzoge1xyXG4gICAgICAgICAgICBiZ206IFwibXVzaWMvYmdtXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzb3VuZDoge1xyXG4gICAgICAgICAgICBidG46IFwic291bmQvYnRuXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwic291bmQvc3VjY2Vzc1wiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEF1ZGlvTmFtZUJ5SWQoYXVkaW9JZDogQXVkaW9zKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQXVkaW9zW2F1ZGlvSWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QXVkaW9SZXNQYXRoKGF1ZGlvSWQ6IEF1ZGlvcywgYXVkaW9UeXBlOiBBdWRpb1R5cGUpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzdWJQYXRoID0gbnVsbDtcclxuICAgICAgICBpZiAoYXVkaW9UeXBlID09IEF1ZGlvVHlwZS5NdXNpYykge1xyXG4gICAgICAgICAgICBzdWJQYXRoID0gQXVkaW9Db25maWcuQXVkaW9zUHJlbG9hZC5tdXNpY1tBdWRpb0NvbmZpZy5nZXRBdWRpb05hbWVCeUlkKGF1ZGlvSWQpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXVkaW9UeXBlID09IEF1ZGlvVHlwZS5Tb3VuZCkge1xyXG4gICAgICAgICAgICBzdWJQYXRoID0gQXVkaW9Db25maWcuQXVkaW9zUHJlbG9hZC5zb3VuZFtBdWRpb0NvbmZpZy5nZXRBdWRpb05hbWVCeUlkKGF1ZGlvSWQpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1YlBhdGggPT0gbnVsbCB8fCBzdWJQYXRoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdWJQYXRoID0gXCJcIjtcclxuICAgICAgICAgICAgRGVidWdVdGlsLmxvZ0Vycm9yKFwi6Z+z6aKR6LWE5rqQ6Lev5b6E6YWN572u6ZSZ6K+v77yaXCIgKyBBdWRpb0NvbmZpZy5nZXRBdWRpb05hbWVCeUlkKGF1ZGlvSWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEF1ZGlvQ29uZmlnLlJlc1BhdGggKyBzdWJQYXRoO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==