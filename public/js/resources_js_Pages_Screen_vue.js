(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Screen_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Screen.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Screen.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var videojs_record_dist_css_videojs_record_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! videojs-record/dist/css/videojs.record.css */ "./node_modules/videojs-record/dist/css/videojs.record.css");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recordrtc */ "./node_modules/recordrtc/RecordRTC.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videojs-record/dist/videojs.record.js */ "./node_modules/videojs-record/dist/videojs.record.js");
/* harmony import */ var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videojs_record_dist_plugins_videojs_record_ffmpegjs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videojs-record/dist/plugins/videojs.record.ffmpegjs.js */ "./node_modules/videojs-record/dist/plugins/videojs.record.ffmpegjs.js");
/* harmony import */ var videojs_record_dist_plugins_videojs_record_ffmpegjs_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videojs_record_dist_plugins_videojs_record_ffmpegjs_js__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['uploadUrl', 'startRecorder'],
  data: function data() {
    return {
      player: '',
      retake: 0,
      isSaveDisabled: true,
      isStartRecording: this.startRecorder,
      isRetakeDisabled: true,
      submitText: 'Submit',
      options: {
        controls: true,
        bigPlayButton: false,
        controlBar: {
          deviceButton: false,
          recordToggle: false,
          pipToggle: false
        },
        width: 500,
        height: 250,
        fluid: true,
        plugins: {
          record: {
            pip: false,
            audio: true,
            video: true,
            maxLength: 20,
            debug: true
          }
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.player = video_js__WEBPACK_IMPORTED_MODULE_2__["default"]('myVideo', this.options, function () {
      // print version information at startup
      var msg = 'Using video.js ' + video_js__WEBPACK_IMPORTED_MODULE_2__["default"].VERSION + ' with videojs-record ' + video_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPluginVersion('record') + ' and recordrtc ' + (recordrtc__WEBPACK_IMPORTED_MODULE_4___default().version);
      video_js__WEBPACK_IMPORTED_MODULE_2__["default"].log(msg);
    }); // error handling

    this.player.on('deviceReady', function () {
      _this.player.record().start();

      console.log('device ready:');
    });
    this.player.on('deviceError', function () {
      console.log('device error:', _this.player.deviceErrorCode);
    });
    this.player.on('error', function (element, error) {
      console.error(error);
    }); // user clicked the record button and started recording

    this.player.on('startRecord', function () {
      console.log('started recording!');
    }); // user completed recording and stream is available

    this.player.on('finishRecord', function () {
      _this.isSaveDisabled = false;

      if (_this.retake == 0) {
        _this.isRetakeDisabled = false;
      } // the blob object contains the recorded data that
      // can be downloaded by the user, stored on server etc.


      console.log('finished recording: ', _this.player.recordedData);
    });
  },
  methods: {
    startRecording: function startRecording() {
      this.isStartRecording = false; // this.player.record().getDevice();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Screen.vue?vue&type=template&id=519f4155":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Screen.vue?vue&type=template&id=519f4155 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-6 flex items-center justify-center flex-col"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"relative py-4 flex items-center w-full\"><span class=\"flex h-3 w-3 px-4\"><span class=\"animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75\"></span><span class=\"relative inline-flex rounded-full h-3 w-3 bg-red-500\"></span></span><p class=\"text-gray-500 px-2 text-sm\">Live Preview</p></div>", 1);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("video", {
  id: "myVideo",
  playsinline: "",
  "class": "video-js vjs-default-skin"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "vjs-no-js"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To view this video please enable JavaScript, or consider upgrading to a web browser that "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://videojs.com/html5-video-support/",
  target: "_blank"
}, " supports HTML5 video. ")])], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "sm:col-span-2 pt-4 flex justify-center items-center"
};
var _hoisted_5 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"relative block w-full border-2 border-sky-900 border bg-sky-900 h-96  rounded-lg p-12 text-center bg\">\t "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white disabled:opacity-75 cursor-not-allowed bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.startRecording();
    }, ["prevent"])),
    disabled: $data.isStartRecording
  }, " Start Recording ", 8
  /* PROPS */
  , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button type=\"button\" class=\"inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white  disabled:opacity-75 cursor-not-allowed bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500\" @click.prevent=\"submitVideo()\" v-bind:disabled=\"isSaveDisabled\" id=\"btnSave\">{{ submitText }}</button>\n\t\t        <button type=\"button\" class=\"inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white  disabled:opacity-75 cursor-not-allowed bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500\" @click.prevent=\"retakeVideo()\" v-bind:disabled=\"isRetakeDisabled\" id=\"btnRetake\">Retake</button> ")])])]);
}

/***/ }),

/***/ "./resources/js/Pages/Screen.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Screen.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Screen_vue_vue_type_template_id_519f4155__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screen.vue?vue&type=template&id=519f4155 */ "./resources/js/Pages/Screen.vue?vue&type=template&id=519f4155");
/* harmony import */ var _Screen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screen.vue?vue&type=script&lang=js */ "./resources/js/Pages/Screen.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Screen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Screen_vue_vue_type_template_id_519f4155__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Screen.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Screen.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Screen.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Screen.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Screen.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Screen.vue?vue&type=template&id=519f4155":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Screen.vue?vue&type=template&id=519f4155 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screen_vue_vue_type_template_id_519f4155__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screen_vue_vue_type_template_id_519f4155__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Screen.vue?vue&type=template&id=519f4155 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Screen.vue?vue&type=template&id=519f4155");


/***/ }),

/***/ "?6298":
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);