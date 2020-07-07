(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
require('./rt-feature-premut-alpha.js');

require('./rt-sys.js');

require('./rt_input.js');

require('./rt-loadSubpackage.js');

require('./rt-game.js');

require('./rt-jsb.js');

require('./rt-websocket.js');

require('./jsb-audio.js');

require('./jsb-loader.js');

require('./jsb-editbox.js');

},{"./jsb-audio.js":2,"./jsb-editbox.js":3,"./jsb-loader.js":4,"./rt-feature-premut-alpha.js":5,"./rt-game.js":6,"./rt-jsb.js":7,"./rt-loadSubpackage.js":8,"./rt-sys.js":9,"./rt-websocket.js":10,"./rt_input.js":11}],2:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var AudioPlayer = cc.internal.AudioPlayer;
var _cc$AudioClip = cc.AudioClip,
    PlayingState = _cc$AudioClip.PlayingState,
    AudioType = _cc$AudioClip.AudioType;

cc.AudioClip.prototype._getPlayer = function (clip) {
  this._loadMode = AudioType.JSB_AUDIO;
  return AudioPlayerRT;
};

var rt = loadRuntime();
jsb.AudioEngine = rt.AudioEngine;

var AudioPlayerRT =
/*#__PURE__*/
function (_AudioPlayer) {
  _inherits(AudioPlayerRT, _AudioPlayer);

  function AudioPlayerRT(info) {
    var _this;

    _classCallCheck(this, AudioPlayerRT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioPlayerRT).call(this, info));
    _this._startTime = 0;
    _this._offset = 0;
    _this._volume = 1;
    _this._loop = false;
    _this._url = info.clip;
    _this._audio = -1;
    _this._onEnded = _this._onEnded.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AudioPlayerRT, [{
    key: "play",
    value: function play() {
      if (this._state === PlayingState.PLAYING) {
        return;
      }

      if (this._blocking) {
        this._interrupted = true;
        return;
      }

      this._doPlay(); // delay eval here to yield uniform behavior with other platforms


      cc.director.once(cc.Director.EVENT_AFTER_UPDATE, this._onPlay, this);
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this._audio < 0 || this._state !== PlayingState.PLAYING) {
        return;
      }

      rt.AudioEngine.pause(this._audio);

      this._onPause();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this._audio < 0) {
        return;
      }

      rt.AudioEngine.stop(this._audio);
      this._audio = -1;

      this._onStop();
    }
  }, {
    key: "playOneShot",
    value: function playOneShot(volume) {
      if (volume === undefined) {
        volume = 1;
      }

      rt.AudioEngine.play(this._url, false, volume);
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (this._state !== PlayingState.PLAYING) {
        return this._offset / 1000;
      }

      var current = (performance.now() - this._startTime + this._offset) / 1000;

      if (current > this._duration) {
        current -= this._duration;
        this._startTime += this._duration * 1000;
      }

      return current;
    }
  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(val) {
      if (this._audio < 0) {
        return;
      }

      this._offset = cc.math.clamp(val, 0, this._duration) * 1000;
      this._startTime = performance.now();
      rt.AudioEngine.setCurrentTime(this._audio, val);
    }
  }, {
    key: "getVolume",
    value: function getVolume() {
      return this._volume;
    }
  }, {
    key: "setVolume",
    value: function setVolume(val, immediate) {
      this._volume = val;

      if (this._audio >= 0) {
        rt.AudioEngine.setVolume(this._audio, val);
      }
    }
  }, {
    key: "getLoop",
    value: function getLoop() {
      return this._loop;
    }
  }, {
    key: "setLoop",
    value: function setLoop(val) {
      this._loop = val;

      if (this._audio >= 0) {
        rt.AudioEngine.setLoop(this._audio, val);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._audio >= 0) {
        rt.AudioEngine.uncache(this._url);
        this._audio = -1;
      }

      _get(_getPrototypeOf(AudioPlayerRT.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_doPlay",
    value: function _doPlay() {
      if (this._audio >= 0) rt.AudioEngine.resume(this._audio);else {
        this._audio = rt.AudioEngine.play(this._url, this._loop, this._volume);
        rt.AudioEngine.setErrorCallback(this._audio, console.error);
        rt.AudioEngine.setFinishCallback(this._audio, this._onEnded);
      }
    }
  }, {
    key: "_onPlay",
    value: function _onPlay() {
      if (this._state === PlayingState.PLAYING) {
        return;
      }

      this._state = PlayingState.PLAYING;
      this._startTime = performance.now();

      this._eventTarget.emit('started');
    }
  }, {
    key: "_onPause",
    value: function _onPause() {
      if (this._state === PlayingState.STOPPED) {
        return;
      }

      this._state = PlayingState.STOPPED;
      this._offset += performance.now() - this._startTime;
    }
  }, {
    key: "_onStop",
    value: function _onStop() {
      this._offset = 0;

      if (this._state === PlayingState.STOPPED) {
        return;
      }

      this._state = PlayingState.STOPPED;
    }
  }, {
    key: "_onEnded",
    value: function _onEnded() {
      this._offset = 0;
      this._audio = -1;

      if (this._state === PlayingState.STOPPED) {
        return;
      }

      this._state = PlayingState.STOPPED;

      this._eventTarget.emit('ended');
    }
  }]);

  return AudioPlayerRT;
}(AudioPlayer);

},{}],3:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.
 http://www.cocos.com
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.
 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
(function () {
  if (!(cc && cc.EditBoxComponent)) {
    return;
  }

  var KeyboardReturnType = cc.EditBoxComponent.KeyboardReturnType;
  var InputMode = cc.EditBoxComponent.InputMode;
  var InputFlag = cc.EditBoxComponent.InputFlag;
  var _p = cc.EditBoxComponent._EditBoxImpl.prototype;

  function getInputType(type) {
    switch (type) {
      case InputMode.EMAIL_ADDR:
        return 'email';

      case InputMode.NUMERIC:
      case InputMode.DECIMAL:
        return 'number';

      case InputMode.PHONE_NUMBER:
        return 'phone';

      case InputMode.URL:
        return 'url';

      case InputMode.SINGLE_LINE:
      case InputMode.ANY:
      default:
        return 'text';
    }
  }

  function getKeyboardReturnType(type) {
    switch (type) {
      case KeyboardReturnType.DEFAULT:
      case KeyboardReturnType.DONE:
        return 'done';

      case KeyboardReturnType.SEND:
        return 'send';

      case KeyboardReturnType.SEARCH:
        return 'search';

      case KeyboardReturnType.GO:
        return 'go';

      case KeyboardReturnType.NEXT:
        return 'next';
    }

    return 'done';
  }

  function updateLabelsInvisible(editBox) {
    var placeholderLabel = editBox.placeholderLabel;
    var textLabel = editBox.textLabel;
    var displayText = editBox.string;
    placeholderLabel.node.active = displayText === '';
    textLabel.node.active = displayText !== '';
  }

  _p.init = function (delegate) {
    this._delegate = delegate;
  };

  _p.createInput = function () {
    var editBoxImpl = this;
    var editBox = this._delegate;
    editBoxImpl._editing = true;
    var multiline = editBox.inputMode === InputMode.ANY;
    var inputTypeString = getInputType(editBox.inputMode);

    if (editBox.inputFlag === InputFlag.PASSWORD) {
      inputTypeString = 'password';
    }

    var rect = this._getRect();

    this.setMaxLength(editBox.maxLength);
    jsb.inputBox.show({
      defaultValue: editBox.string,
      maxLength: editBoxImpl._maxLength,
      multiple: multiline,
      confirmHold: false,
      confirmType: getKeyboardReturnType(editBox.returnType),
      inputType: inputTypeString,
      originX: rect.x,
      originY: rect.y,
      width: rect.width,
      height: rect.height
    });

    if (editBox) {
      editBox._editBoxEditingDidBegan();

      updateLabelsInvisible(editBox);
    }

    function onConfirm(res) {
      editBoxImpl._delegate && editBoxImpl._delegate._editBoxEditingReturn && editBoxImpl._delegate._editBoxEditingReturn();
    }

    jsb.inputBox.onConfirm(onConfirm);

    function onInput(res) {
      if (res.value.length > editBoxImpl._maxLength) {
        res.value = res.value.slice(0, editBoxImpl._maxLength);
      }

      if (editBoxImpl._delegate && editBoxImpl._delegate._editBoxTextChanged) {
        if (editBoxImpl._delegate.string !== res.value) {
          editBoxImpl._delegate._editBoxTextChanged(res.value);
        }
      }
    }

    jsb.inputBox.onInput(onInput);

    function onComplete(res) {
      editBoxImpl.endEditing();
      jsb.inputBox.offConfirm(onConfirm);
      jsb.inputBox.offInput(onInput);
      jsb.inputBox.offComplete(onComplete);
    }

    jsb.inputBox.onComplete(onComplete);
  };

  _p.setTabIndex = function (index) {// jsb not support
  };

  _p.setFocus = function () {
    this.beginEditing();
  };

  _p.isFocused = function () {
    return this._editing;
  }, _p.stayOnTop = function (flag) {// jsb not support
  };

  _p._getRect = function () {
    var node = this._delegate.node,
        scaleX = cc.view._scaleX,
        scaleY = cc.view._scaleY;
    var dpr = cc.view._devicePixelRatio;
    var matrix = cc.mat4();
    node.getWorldMatrix(matrix);
    var transform = node._uiProps.uiTransformComp;
    var vec3 = cc.v3();
    var width = 0;
    var height = 0;

    if (transform) {
      var contentSize = transform.contentSize;
      var anchorPoint = transform.anchorPoint;
      width = contentSize.width;
      height = contentSize.height;
      vec3.x = -anchorPoint.x * width;
      vec3.y = -anchorPoint.y * height;
    }

    cc.Mat4.translate(matrix, matrix, vec3);
    scaleX /= dpr;
    scaleY /= dpr;
    var finalScaleX = matrix.m00 * scaleX;
    var finaleScaleY = matrix.m05 * scaleY;
    return {
      x: matrix.m12 * finalScaleX,
      y: matrix.m13 * finaleScaleY,
      width: width * finalScaleX,
      height: height * finaleScaleY
    };
  };

  _p.setMaxLength = function (maxLength) {
    if (!isNaN(maxLength)) {
      if (maxLength < 0) {
        //we can't set Number.MAX_VALUE to input's maxLength property
        //so we use a magic number here, it should works at most use cases.
        maxLength = 65535;
      }

      this._maxLength = maxLength;
    }
  };

  _p.beginEditing = function () {
    this.createInput();
  };

  _p.endEditing = function () {
    var self = this;

    if (this._editing) {
      // self._endEditingOnMobile();
      if (self._delegate && self._delegate._editBoxEditingDidEnded) {
        self._delegate._editBoxEditingDidEnded();
      }
    }

    this._editing = false;
  };
})();

},{}],4:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

function downloadScript(item, callback, isAsync) {
  var url = '../../../' + item.url;

  require(url);

  callback(null, item.url);
}

function downloadAudio(item, callback) {
  // this triggers the audio to play immediately somehow, so disregard it
  // jsb.AudioEngine.preload(item.url, function (isSucceed, duration) {
  //     if (isSucceed) callback(null, item.url);
  //     else callback('load audio failed', null);
  // });
  callback(null, item.url);
}

function downloadImage(item, callback) {
  var img = new Image();
  img.src = item.url;

  img.onload = function (info) {
    callback(null, img);
  }; // Don't return anything to use async loading.

}

function _getFontFamily(fontHandle) {
  var ttfIndex = fontHandle.lastIndexOf(".ttf");
  if (ttfIndex === -1) return fontHandle;
  var slashPos = fontHandle.lastIndexOf("/");
  var fontFamilyName;

  if (slashPos === -1) {
    fontFamilyName = fontHandle.substring(0, ttfIndex) + "_LABEL";
  } else {
    fontFamilyName = fontHandle.substring(slashPos + 1, ttfIndex) + "_LABEL";
  }

  if (fontFamilyName.indexOf(' ') !== -1) {
    fontFamilyName = '"' + fontFamilyName + '"';
  }

  return fontFamilyName;
}

var downloadBinary, downloadText, loadFont;

downloadText = function downloadText(item) {
  var url = item.url;
  var result = jsb.fileUtils.getStringFromFile(url);

  if (typeof result === 'string' && result) {
    return result;
  } else {
    return new Error('Download text failed: ' + url);
  }
};

downloadBinary = function downloadBinary(item) {
  var url = item.url;
  var result = jsb.fileUtils.getDataFromFile(url);

  if (result) {
    return result;
  } else {
    return new Error('Download binary file failed: ' + url);
  }
};

loadFont = function loadFont(item) {
  var url = item.url;
  var fontFamily = jsb.loadFont(url);
  return fontFamily || 'Arial';
};

function loadCompressedTex(item) {
  return item.content;
}

cc.loader.addDownloadHandlers({
  // JS
  'js': downloadScript,
  'jsc': downloadScript,
  // Images
  'png': downloadImage,
  'jpg': downloadImage,
  'bmp': downloadImage,
  'jpeg': downloadImage,
  'gif': downloadImage,
  'ico': downloadImage,
  'tiff': downloadImage,
  'webp': downloadImage,
  'image': downloadImage,
  'pvr': downloadImage,
  'pkm': downloadImage,
  // Audio
  'mp3': downloadAudio,
  'ogg': downloadAudio,
  'wav': downloadAudio,
  'mp4': downloadAudio,
  'm4a': downloadAudio,
  // Text
  'txt': downloadText,
  'xml': downloadText,
  'vsh': downloadText,
  'fsh': downloadText,
  'atlas': downloadText,
  'tmx': downloadText,
  'tsx': downloadText,
  'json': downloadText,
  'ExportJson': downloadText,
  'plist': downloadText,
  'fnt': downloadText,
  'binary': downloadBinary,
  'bin': downloadBinary,
  'dbbin': downloadBinary,
  'default': downloadText
});
cc.loader.addLoadHandlers({
  // Font
  'font': loadFont,
  'eot': loadFont,
  'ttf': loadFont,
  'woff': loadFont,
  'svg': loadFont,
  'ttc': loadFont,
  // compressed texture
  'pvr': loadCompressedTex,
  'pkm': loadCompressedTex
});

},{}],5:[function(require,module,exports){
'use strict'; // Please go to :
// https://github.com/cocos-creator-packages/jsb-adapter/pull/130
// to see more information about function clamp and unpremutAlpha

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _clamp = function _clamp(value) {
  value = Math.round(value);
  return value < 0 ? 0 : value < 255 ? value : 255;
}; // Because the blend factor is modified to SRC_ALPHA, here must perform unpremult alpha.


var _premultAlpha = function _premultAlpha(data, premult) {
  var alpha;

  if (premult) {
    for (var i = 0, len = data._data.length; i < len; i += 4) {
      alpha = data._data[i + 3] / 255;

      if (alpha > 0 && alpha < 255) {
        data._data[i + 0] = clamp(data._data[i + 0] * alpha);
        data._data[i + 1] = clamp(data._data[i + 1] * alpha);
        data._data[i + 2] = clamp(data._data[i + 2] * alpha);
      }
    }
  } else {
    for (var _i = 0, _len = data._data.length; _i < _len; _i += 4) {
      alpha = 255 / data._data[_i + 3];

      if (alpha > 0 && alpha < 255) {
        data._data[_i + 0] = _clamp(data._data[_i + 0] * alpha);
        data._data[_i + 1] = _clamp(data._data[_i + 1] * alpha);
        data._data[_i + 2] = _clamp(data._data[_i + 2] * alpha);
      }
    }
  }
};

var _loop = function _loop() {
  var rt = window["qg"];

  if (_typeof(rt) != "object") {
    console.error("not runtime platform");
    return "break";
  }

  if ((typeof cc === "undefined" ? "undefined" : _typeof(cc)) !== "object") {
    console.error("can not get cocos creator version");
    return "break";
  } // Judge version，is newer than 2.0.9


  var versionJudge = "2.0.9";
  var engineVersion = cc.ENGINE_VERSION;
  var versionJudgeNum = versionJudge.replace(/[a-zA-Z]/g, function (match, i) {
    return match.charCodeAt();
  }).replace(/[^\d]/g, '') - 0;
  var engineVersionNum = engineVersion.replace(/[a-zA-Z]/g, function (match, i) {
    return match.charCodeAt();
  }).replace(/[^\d]/g, '') - 0;
  var isEngineVersionNew = engineVersionNum >= versionJudgeNum;
  var isRTSupportFeature = typeof rt.getFeature == "function" && typeof rt.setFeature === "function";
  var featureName = "canvas.context2d.premultiply_image_data";
  var shouldPremult = false;

  if (!isEngineVersionNew && !isRTSupportFeature) {
    // old creator old runtime
    return "break";
  }

  if (!isEngineVersionNew) {
    shouldPremult = true;
  }

  if (isRTSupportFeature) {
    rt.setFeature(featureName, shouldPremult);

    if (rt.getFeature(featureName) === shouldPremult) {
      return "break";
    }
  } // set feature fail


  var dataDescriptor = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype, "_data");
  var dataGetter = void 0; // get old getter

  if (_typeof(dataDescriptor) === "object") {
    dataGetter = dataDescriptor["get"];
  } // delete old runtime version _data property


  delete HTMLCanvasElement.prototype._data;

  var _newDataGetter = function _newDataGetter() {
    var data;

    if (typeof dataGetter === "function") {
      data = dataGetter.bind(this)();
    } else {
      // old runtime version
      data = this._dataInner;
    }

    if (data === null) {
      return null;
    }

    var premultHandled = data["_premultHandled"];

    if (premultHandled === true) {
      return data;
    }

    _premultAlpha(data, shouldPremult);

    data["_premultHandled"] = true;
    return data;
  };

  Object.defineProperty(HTMLCanvasElement.prototype, "_data", {
    get: _newDataGetter,
    set: function set(params) {
      this._dataInner = params;
    }
  });
};

do {
  var _ret = _loop();

  if (_ret === "break") break;
} while (false);

},{}],6:[function(require,module,exports){
"use strict";

cc.game.restart = function () {
  cc.sys.restartVM();
};

qg && qg.onHide(function () {
  cc.game.emit(cc.game.EVENT_HIDE);
});
qg && qg.onShow(function () {
  cc.game.emit(cc.game.EVENT_SHOW);
});
qg && qg.onWindowResize && qg.onWindowResize(function () {
  // Since the initialization of the creator engine may not take place until after the onWindowResize call,
  // you need to determine whether the canvas already exists before you can call the setCanvasSize method
  cc.game.canvas && cc.view.setCanvasSize(window.innerWidth, window.innerHeight);
});

},{}],7:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

var rt = loadRuntime();
jsb.fileUtils = {
  getStringFromFile: function getStringFromFile(url) {
    var result;

    try {
      result = rt.getFileSystemManager().readFileSync(url, "utf8");
    } catch (error) {
      cc.error(error);
    }

    return result;
  },
  getDataFromFile: function getDataFromFile(url) {
    var result;

    try {
      result = rt.getFileSystemManager().readFileSync(url);
    } catch (error) {
      cc.error(error);
    }

    return result;
  },
  getWritablePath: function getWritablePath() {
    return "".concat(rt.env.USER_DATA_PATH, "/");
  },
  writeToFile: function writeToFile(map, url) {
    var str = JSON.stringify(map);
    var result = false;

    try {
      rt.getFileSystemManager().writeFileSync(url, str, "utf8");
      result = true;
    } catch (error) {
      cc.error(error);
    }

    return result;
  },
  getValueMapFromFile: function getValueMapFromFile(url) {
    var map_object = {};
    var read;

    try {
      read = rt.getFileSystemManager().readFileSync(url, "utf8");
    } catch (error) {
      cc.error(error);
    }

    if (!read) {
      return map_object;
    }

    map_object = JSON.parse(read);
    return map_object;
  }
};

if (typeof jsb.saveImageData === 'undefined') {
  jsb.saveImageData = function (data, width, height, filePath) {
    var index = filePath.lastIndexOf(".");

    if (index === -1) {
      return false;
    }

    var fileType = filePath.substr(index + 1);
    var tempFilePath = rt.saveImageTempSync({
      'data': data,
      'width': width,
      'height': height,
      'fileType': fileType
    });

    if (tempFilePath === '') {
      return false;
    }

    var savedFilePath = rt.getFileSystemManager().saveFileSync(tempFilePath, filePath);

    if (savedFilePath === filePath) {
      return true;
    }

    return false;
  };
}

if (typeof jsb.setPreferredFramesPerSecond === 'undefined') {
  if (typeof rt.setPreferredFramesPerSecond !== 'undefined') {
    jsb.setPreferredFramesPerSecond = rt.setPreferredFramesPerSecond;
  } else {
    jsb.setPreferredFramesPerSecond = function () {
      console.error("The jsb.setPreferredFramesPerSecond is not define!");
    };
  }
}

if (jsb.device && !jsb.device.getDeviceMotionValue) {
  var _tempX = 0,
      _tempY = 0,
      _tempZ = 0;
  var _tempGravitySenceArray = undefined;

  jsb.device.setAccelerometerEnabled = function (enabled) {
    if (_tempGravitySenceArray !== undefined === enabled) return;

    if (!enabled) {
      qg.stopAccelerometer();
      _tempX = 0;
      _tempY = 0;
      _tempZ = 0;
      _tempGravitySenceArray = undefined;
      return;
    }

    _tempGravitySenceArray = new Array(6).fill(0);
    qg.onAccelerometerChange(function (obj) {
      _tempGravitySenceArray[3] = 1.25 * obj.x + _tempX;
      _tempGravitySenceArray[4] = 1.25 * obj.y + _tempY;
      _tempGravitySenceArray[5] = 1.25 * obj.z + _tempZ;
      _tempX = 0.8 * _tempX + 0.2 * _tempGravitySenceArray[3];
      _tempY = 0.8 * _tempY + 0.2 * _tempGravitySenceArray[4];
      _tempZ = 0.8 * _tempZ + 0.2 * _tempGravitySenceArray[5];
    });
  };

  jsb.device.getDeviceMotionValue = function () {
    if (_tempGravitySenceArray === undefined) {
      return undefined;
    }

    return _tempGravitySenceArray.slice();
  };
}

},{}],8:[function(require,module,exports){
"use strict";

cc.loader.downloader.loadSubpackage = function (name, completeCallback) {
  var rt = loadRuntime();
  rt.loadSubpackage({
    name: name,
    //fileName,
    success: function success() {
      Promise.all(packageModuleIds[name].map(function (id) {
        return System["import"](id);
      })).then(function () {
        if (completeCallback) {
          completeCallback();
        }
      })["catch"](function (err) {
        console.error(err);

        if (completeCallback) {
          completeCallback(err);
        }
      });
    },
    fail: function fail() {
      if (completeCallback) completeCallback(new Error("Failed to load subpackage ".concat(name)));
    }
  });
};

if (cc.Pipeline.SubPackPipe && cc.Pipeline.SubPackPipe.prototype && cc.Pipeline.SubPackPipe.prototype.transformURL) {
  var _tempTransformUrl = cc.Pipeline.SubPackPipe.prototype.transformURL;

  cc.Pipeline.SubPackPipe.prototype.transformURL = function (url) {
    var url = _tempTransformUrl(url);

    return url.replace("subpackages/", "");
  };
}

},{}],9:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

var sys = cc.sys;

if (typeof loadRuntime === 'function') {
  var rt = loadRuntime();
  sys.getNetworkType = rt.getNetworkType;
  sys.getBatteryLevel = rt.getBatteryLevel;
  sys.garbageCollect = rt.triggerGC;
}

if (typeof __restartVM !== 'undefined') {
  sys.restartVM = __restartVM;
} else {
  sys.restartVM = function () {
    console.error("The restartVM is not define!");
  };
}

if (typeof __isObjectValid !== 'undefined') {
  sys.isObjectValid = __isObjectValid;
} else {
  sys.isObjectValid = function () {
    console.error("The sys.isObjectValid is not define!");
  };
}

},{}],10:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RTWebSocket =
/*#__PURE__*/
function (_window$WebSocket) {
  _inherits(RTWebSocket, _window$WebSocket);

  function RTWebSocket(wss, protocols, certificatePath) {
    _classCallCheck(this, RTWebSocket);

    do {
      if (typeof certificatePath !== 'string') {
        break;
      } // tiny package


      if (typeof window.rtAdapter === "undefined" || typeof window.rtAdapter.REMOTE_SERVER_ROOT === "undefined") {
        break;
      }

      var cachedPath = rtAdapter.getCacheName(certificatePath);
      var url = rtAdapter.cacheDir + '/' + cachedPath;

      try {
        qg.getFileSystemManager().accessSync(url);
      } catch (error) {
        console.warn("use default certificate .certificatePath is not exist in: ", url);
        certificatePath = undefined;
        break;
      }

      certificatePath = url;
    } while (0);

    return _possibleConstructorReturn(this, _getPrototypeOf(RTWebSocket).call(this, wss, protocols, certificatePath));
  }

  return RTWebSocket;
}(window.WebSocket);

delete window.WebSocket;
window.WebSocket = RTWebSocket;
delete window.RTWebSocket;

},{}],11:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var rt = loadRuntime();
jsb.inputBox = {
  onConfirm: function onConfirm(cb) {
    rt.onKeyboardConfirm(cb);
  },
  offConfirm: function offConfirm(cb) {
    rt.offKeyboardConfirm(cb);
  },
  onComplete: function onComplete(cb) {
    rt.onKeyboardComplete(cb);
  },
  offComplete: function offComplete(cb) {
    rt.offKeyboardComplete(cb);
  },
  onInput: function onInput(cb) {
    rt.onKeyboardInput(cb);
  },
  offInput: function offInput(cb) {
    rt.offKeyboardInput(cb);
  },

  /**
   * @param {string}		options.defaultValue
   * @param {number}		options.maxLength
   * @param {bool}        options.multiple
   * @param {bool}        options.confirmHold
   * @param {string}      options.confirmType
   * @param {string}      options.inputType
   * 
   * Values of options.confirmType can be [done|next|search|go|send].
   * Values of options.inputType can be [text|email|number|phone|password].
   */
  show: function show(options) {
    rt.showKeyboard(options);
  },
  hide: function hide() {
    rt.hideKeyboard();
  }
};

},{}]},{},[1]);
