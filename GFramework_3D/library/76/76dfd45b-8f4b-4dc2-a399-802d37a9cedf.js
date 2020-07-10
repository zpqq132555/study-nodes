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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovQ29jb3NQcm9qZWN0L0dGcmFtZXdvcmtfM0QvYXNzZXRzL3NjcmlwdHMvZnJhbWV3b3JrL2F1ZGlvL0F1ZGlvQ29uZmlnLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJEZWJ1Z1V0aWwiLCJjY2NsYXNzIiwiQXVkaW9zIiwiQXVkaW9UeXBlIiwiQXVkaW9Db25maWciLCJhdWRpb0lkIiwiYXVkaW9UeXBlIiwic3ViUGF0aCIsIk11c2ljIiwiQXVkaW9zUHJlbG9hZCIsIm11c2ljIiwiZ2V0QXVkaW9OYW1lQnlJZCIsIlNvdW5kIiwic291bmQiLCJ1bmRlZmluZWQiLCJsb2dFcnJvciIsIlJlc1BhdGgiLCJiZ20iLCJidG4iLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ0FDLE1BQUFBLFMscUJBQUFBLFM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQVlGLFUsQ0FBWkUsTztBQUVSOzs7OztpQkFJWUMsTTtBQUFBQSxRQUFBQSxNLENBQUFBLE07QUFBQUEsUUFBQUEsTSxDQUFBQSxNO0FBQUFBLFFBQUFBLE0sQ0FBQUEsTTtTQUFBQSxNLHNCQUFBQSxNOztpQkFTQUMsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO1NBQUFBLFMseUJBQUFBLFM7OzZCQU1DQyxXLFdBRFpILE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7MkNBYTJCSSxPLEVBQXlCO0FBQ3BELG1CQUFPSCxNQUFNLENBQUNHLE9BQUQsQ0FBYjtBQUNIOzs7MENBRTZCQSxPLEVBQWlCQyxTLEVBQThCO0FBQ3pFLGdCQUFJQyxPQUFPLEdBQUcsSUFBZDs7QUFDQSxnQkFBSUQsU0FBUyxJQUFJSCxTQUFTLENBQUNLLEtBQTNCLEVBQWtDO0FBQzlCRCxjQUFBQSxPQUFPLEdBQUdILFdBQVcsQ0FBQ0ssYUFBWixDQUEwQkMsS0FBMUIsQ0FBZ0NOLFdBQVcsQ0FBQ08sZ0JBQVosQ0FBNkJOLE9BQTdCLENBQWhDLENBQVY7QUFDSCxhQUZELE1BR0ssSUFBSUMsU0FBUyxJQUFJSCxTQUFTLENBQUNTLEtBQTNCLEVBQWtDO0FBQ25DTCxjQUFBQSxPQUFPLEdBQUdILFdBQVcsQ0FBQ0ssYUFBWixDQUEwQkksS0FBMUIsQ0FBZ0NULFdBQVcsQ0FBQ08sZ0JBQVosQ0FBNkJOLE9BQTdCLENBQWhDLENBQVY7QUFDSDs7QUFDRCxnQkFBSUUsT0FBTyxJQUFJLElBQVgsSUFBbUJBLE9BQU8sSUFBSU8sU0FBbEMsRUFBNkM7QUFDekNQLGNBQUFBLE9BQU8sR0FBRyxFQUFWO0FBQ0E7QUFBQTtBQUFBLDBDQUFVUSxRQUFWLENBQW1CLGdCQUFnQlgsV0FBVyxDQUFDTyxnQkFBWixDQUE2Qk4sT0FBN0IsQ0FBbkM7QUFDSDs7QUFDRCxtQkFBT0QsV0FBVyxDQUFDWSxPQUFaLEdBQXNCVCxPQUE3QjtBQUNIOzs7O21CQTVCYVMsTyxHQUFrQixZLFVBQ2xCUCxhLEdBQWdCO0FBQzFCQyxRQUFBQSxLQUFLLEVBQUU7QUFDSE8sVUFBQUEsR0FBRyxFQUFFO0FBREYsU0FEbUI7QUFJMUJKLFFBQUFBLEtBQUssRUFBRTtBQUNISyxVQUFBQSxHQUFHLEVBQUUsV0FERjtBQUVIQyxVQUFBQSxPQUFPLEVBQUU7QUFGTjtBQUptQixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBEZWJ1Z1V0aWwgfSBmcm9tIFwiLi4vdG9vbHMvRGVidWdVdGlsXCI7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDmiYDmnInpn7PpopHnmoTmnprkuL5cclxuICog5p6a5Li+5ZCN56ew5b+F6aG75ZKM6Z+z6aKR5paH5Lu255qE5ZCN56ew55u45ZCMXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBdWRpb3Mge1xyXG4gICAgYnRuLFxyXG4gICAgc3VjY2VzcyxcclxuICAgIGJnbSxcclxufVxyXG5cclxuLyoqXHJcbiAqIOmfs+mikeeahOexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGVudW0gQXVkaW9UeXBlIHtcclxuICAgIE11c2ljLFxyXG4gICAgU291bmQsXHJcbn1cclxuXHJcbkBjY2NsYXNzKFwiQXVkaW9Db25maWdcIilcclxuZXhwb3J0IGNsYXNzIEF1ZGlvQ29uZmlnIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzUGF0aDogc3RyaW5nID0gXCJhcnQvYXVkaW8vXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEF1ZGlvc1ByZWxvYWQgPSB7XHJcbiAgICAgICAgbXVzaWM6IHtcclxuICAgICAgICAgICAgYmdtOiBcIm11c2ljL2JnbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc291bmQ6IHtcclxuICAgICAgICAgICAgYnRuOiBcInNvdW5kL2J0blwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBcInNvdW5kL3N1Y2Nlc3NcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBdWRpb05hbWVCeUlkKGF1ZGlvSWQ6IEF1ZGlvcyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEF1ZGlvc1thdWRpb0lkXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEF1ZGlvUmVzUGF0aChhdWRpb0lkOiBBdWRpb3MsIGF1ZGlvVHlwZTogQXVkaW9UeXBlKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgc3ViUGF0aCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGF1ZGlvVHlwZSA9PSBBdWRpb1R5cGUuTXVzaWMpIHtcclxuICAgICAgICAgICAgc3ViUGF0aCA9IEF1ZGlvQ29uZmlnLkF1ZGlvc1ByZWxvYWQubXVzaWNbQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChhdWRpb0lkKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGF1ZGlvVHlwZSA9PSBBdWRpb1R5cGUuU291bmQpIHtcclxuICAgICAgICAgICAgc3ViUGF0aCA9IEF1ZGlvQ29uZmlnLkF1ZGlvc1ByZWxvYWQuc291bmRbQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChhdWRpb0lkKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJQYXRoID09IG51bGwgfHwgc3ViUGF0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3ViUGF0aCA9IFwiXCI7XHJcbiAgICAgICAgICAgIERlYnVnVXRpbC5sb2dFcnJvcihcIumfs+mikei1hOa6kOi3r+W+hOmFjee9rumUmeivr++8mlwiICsgQXVkaW9Db25maWcuZ2V0QXVkaW9OYW1lQnlJZChhdWRpb0lkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBdWRpb0NvbmZpZy5SZXNQYXRoICsgc3ViUGF0aDtcclxuICAgIH1cclxufVxyXG4iXX0=