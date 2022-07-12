(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ScreenView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppHeader.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppHeader.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/FilterIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/StopIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/VideoCameraIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ChevronDownIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/SwitchVerticalIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ChevronLeftIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ChevronRightIcon.js");
/* harmony import */ var _AppModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppModal */ "./resources/js/Pages/AppModal.vue");



var recording = {
  title: 'My Recording',
  records: '25'
};
var screenToggle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

function changeToggleState() {
  return screenToggle.value = !screenToggle.value;
}

function _goto(unlock) {
  if (unlock == true) {
    window.location.href = "/records/screens/1";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FilterIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"],
    StopIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
    VideoCameraIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"],
    ChevronDownIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"],
    SwitchVerticalIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__["default"],
    ChevronLeftIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__["default"],
    ChevronRightIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_8__["default"],
    AppModal: _AppModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  emits: ['viewScreenTrigger'],
  setup: function setup(props, context) {
    context.emit("viewScreenTrigger", true);
    return {
      recording: recording,
      screenToggle: screenToggle,
      "goto": _goto,
      changeToggleState: changeToggleState
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/dialog/dialog.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/switch/switch.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ExclamationIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ChevronDownIcon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['open'],
  components: {
    Dialog: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.Dialog,
    DialogOverlay: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.DialogOverlay,
    DialogTitle: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.DialogTitle,
    TransitionChild: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.TransitionChild,
    TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.TransitionRoot,
    ExclamationIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"],
    Switch: _headlessui_vue__WEBPACK_IMPORTED_MODULE_5__.Switch,
    ChevronDownIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  emits: ['viewScreen'],
  setup: function setup(props, context) {
    var pics = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var cam = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var mic = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var vid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var checkMic = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (cam.value == true || vid.value == true || mic.value == true) {
                  context.emit("viewScreen", true);
                } else {
                  alert("choose an option");
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function checkMic() {
        return _ref.apply(this, arguments);
      };
    }();

    return {
      cam: cam,
      mic: mic,
      vid: vid,
      checkMic: checkMic,
      pics: pics
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavBar.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavBar.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/menu/menu.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/BellIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/MenuIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/XIcon.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Disclosure: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.Disclosure,
    DisclosureButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.DisclosureButton,
    DisclosurePanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.DisclosurePanel,
    Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.Menu,
    MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.MenuButton,
    MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.MenuItem,
    MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.MenuItems,
    BellIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
    MenuIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"],
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link,
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Head
  },
  props: {
    name: String,
    email: String,
    avatar: String
  },
  setup: function setup() {
    return {//
    };
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ScreenView.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ScreenView.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/popover/popover.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/SearchIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/BellIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/MenuIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/XIcon.js");
/* harmony import */ var _NavBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue */ "./resources/js/Pages/NavBar.vue");
/* harmony import */ var _SideBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue */ "./resources/js/Pages/SideBar.vue");
/* harmony import */ var _AppHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppHeader.vue */ "./resources/js/Pages/AppHeader.vue");
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Screen */ "./resources/js/Pages/Screen.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");








var viewShow = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(false);

function openScreen(value) {
  viewShow.value = value;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_5__.Menu,
    MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_5__.MenuButton,
    MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_5__.MenuItem,
    MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_5__.MenuItems,
    Popover: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.Popover,
    PopoverButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.PopoverButton,
    PopoverPanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.PopoverPanel,
    BellIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__["default"],
    MenuIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_8__["default"],
    SearchIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_9__["default"],
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_10__["default"],
    NavBar: _NavBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SideBar: _SideBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppHeader: _AppHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Screen: _Screen__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    name: String,
    email: String,
    avatar: String
  },
  setup: function setup() {
    return {
      openScreen: openScreen,
      viewShow: viewShow
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SideBar.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SideBar.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/dialog/dialog.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/transitions/transition.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/FilmIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ShareIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/XIcon.js");



var navigation = [{
  name: 'My Recording',
  href: '#',
  icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__["default"],
  current: true
}, {
  name: 'Requested',
  href: '#',
  icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"],
  current: false
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Dialog: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.Dialog,
    DialogOverlay: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.DialogOverlay,
    TransitionChild: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.TransitionChild,
    TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.TransitionRoot,
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"],
    FilmIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__["default"],
    ShareIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    var sidebarOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    return {
      navigation: navigation,
      sidebarOpen: sidebarOpen
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppHeader.vue?vue&type=template&id=0144d5b5":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppHeader.vue?vue&type=template&id=0144d5b5 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "hidden sm:flex",
  "aria-label": "Breadcrumb"
};
var _hoisted_2 = {
  role: "list",
  "class": "flex items-center space-x-4"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "text-sm font-medium text-gray-500 hover:text-gray-700"
}, "Snapbyte")])], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "flex items-center"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
}, "My Recordings", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "mt-2 md:flex md:items-center md:justify-between"
};
var _hoisted_7 = {
  "class": "flex items-center min-w-0"
};
var _hoisted_8 = {
  "class": "text-2xl leading-7 text-gray-900"
};
var _hoisted_9 = {
  "class": "text-2xl font-bold text-gray-500 ml-3"
};
var _hoisted_10 = {
  "class": "mt-4 flex md:mt-0 md:ml-4"
};
var _hoisted_11 = {
  type: "button",
  "class": "inline-flex items-center px-4 py-2 border border-gray-500 rounded-full shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" By Date ");

var _hoisted_13 = {
  type: "button",
  "class": "ml-3 inline-flex items-center px-4 py-2 border border-gray-500 rounded-full shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Filter ");

var _hoisted_15 = {
  type: "button",
  "class": "ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" New Request ");

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Start Recording ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChevronRightIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChevronRightIcon");

  var _component_SwitchVerticalIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SwitchVerticalIcon");

  var _component_FilterIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FilterIcon");

  var _component_ChevronDownIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChevronDownIcon");

  var _component_VideoCameraIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VideoCameraIcon");

  var _component_StopIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StopIcon");

  var _component_AppModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChevronRightIcon, {
    "class": "flex-shrink-0 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), _hoisted_5])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.recording.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.recording.records), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SwitchVerticalIcon, {
    "class": "mr-3 flex-shrink-0 h-4 w-4"
  }), _hoisted_12]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FilterIcon, {
    "class": "mr-3 flex-shrink-0 h-4 w-4"
  }), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChevronDownIcon, {
    "class": "mr-3 flex-shrink-0 h-4 w-4"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VideoCameraIcon, {
    "class": "mr-3 flex-shrink-0 h-4 w-4"
  }), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.changeToggleState && $setup.changeToggleState.apply($setup, arguments);
    }),
    "class": "ml-3 inline-flex items-center px-4 py-2 border border-red-500 rounded-full shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StopIcon, {
    "class": "mr-3 flex-shrink-0 h-4 w-4"
  }), _hoisted_17])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppModal, {
    open: $setup.screenToggle,
    onViewScreen: $setup["goto"]
  }, null, 8
  /* PROPS */
  , ["open", "onViewScreen"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppModal.vue?vue&type=template&id=1dc3c496":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppModal.vue?vue&type=template&id=1dc3c496 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
};
var _hoisted_4 = {
  "class": "hidden sm:block absolute top-0 right-0 pt-4 pr-4"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Close", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "w-full"
};
var _hoisted_7 = {
  "class": "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" New Recording ");

var _hoisted_9 = {
  "class": "mt-2"
};
var _hoisted_10 = {
  "class": "bg-white py-2 px-4 overflow-hidden"
};
var _hoisted_11 = {
  "class": "relative max-w-xl mx-auto"
};
var _hoisted_12 = {
  "class": "mt-12"
};
var _hoisted_13 = {
  "class": "grid grid-cols-1 gap-y-6 sm:gap-x-8"
};
var _hoisted_14 = {
  "class": "w-full"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "startcam",
  "class": "block text-sm font-medium text-gray-500"
}, "Save the recording in", -1
/* HOISTED */
);

var _hoisted_16 = {
  id: "startcam",
  name: "startcam",
  "class": "mt-1 border border-2 px-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 text-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  "class": "text-gray-300",
  selected: ""
}, "Select a project", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "sm:col-span-2"
};
var _hoisted_19 = {
  "class": "flex justify-between"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ml-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-base font-bold text-gray-500"
}, " Record Screen ")], -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "flex-shrink-0"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Vid setting", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "flex justify-between"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ml-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-base font-bold text-gray-500"
}, " Record Camera ")], -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "flex-shrink-0"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Cam setting", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "flex justify-between"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ml-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-base font-bold text-gray-500"
}, " Record Mic ")], -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "flex-shrink-0"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Mic setting", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "sm:col-span-2 flex justify-center items-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DialogOverlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogOverlay");

  var _component_TransitionChild = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransitionChild");

  var _component_XIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("XIcon");

  var _component_DialogTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogTitle");

  var _component_ChevronDownIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChevronDownIcon");

  var _component_Switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Switch");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  var _component_TransitionRoot = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransitionRoot");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TransitionRoot, {
    as: "template",
    show: $props.open
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
        as: "div",
        "class": "fixed z-10 inset-0 overflow-y-auto",
        onClose: _cache[5] || (_cache[5] = function ($event) {
          return $props.open = false;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogOverlay, {
                "class": "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              })];
            }),
            _: 1
            /* STABLE */

          }), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "button",
                "class": "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white",
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return $props.open = false;
                })
              }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_XIcon, {
                "class": "h-6 w-6",
                "aria-hidden": "true"
              })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogTitle, {
                as: "h3",
                "class": "text-lg leading-6 font-bold text-gray-900"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_8];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChevronDownIcon), _hoisted_17])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
                modelValue: $setup.vid,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                  return $setup.vid = $event;
                }),
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.vid ? 'bg-green-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'])
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                    "aria-hidden": "true",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.vid ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'])
                  }, null, 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["modelValue", "class"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
                modelValue: $setup.cam,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return $setup.cam = $event;
                }),
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.cam ? 'bg-green-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'])
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                    "aria-hidden": "true",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.cam ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'])
                  }, null, 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["modelValue", "class"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
                modelValue: $setup.mic,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                  return $setup.mic = $event;
                }),
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.mic ? 'bg-green-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'])
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                    "aria-hidden": "true",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.mic ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'])
                  }, null, 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["modelValue", "class"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "button",
                onClick: _cache[4] || (_cache[4] = function () {
                  return $setup.checkMic && $setup.checkMic.apply($setup, arguments);
                }),
                "class": "ml-3 inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500"
              }, " Start Recording ")])])])])])])])])])];
            }),
            _: 1
            /* STABLE */

          })])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavBar.vue?vue&type=template&id=7dd27a4e":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavBar.vue?vue&type=template&id=7dd27a4e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed inset-0 z-40 overflow-y-auto bg-white shadow-sm lg:static lg:overflow-y-visible"
};
var _hoisted_2 = {
  "class": "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
};
var _hoisted_3 = {
  "class": "flex justify-between h-16"
};
var _hoisted_4 = {
  "class": "flex"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-8 h-8 bg-orange-500 rounded-md flex justify-center items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-5 h-5 rounded-full bg-white"
})], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "ml-3 font-bold text-gray-900"
}, "Adilo", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "hidden sm:ml-6 sm:flex sm:space-x-8"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "border-transparent text-gray-500 hover:border-sky-500 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium"
}, " Project ", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-gray-500"
}, "Tools & App", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Snapbyte Recorder");

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "border-transparent text-gray-500 hover:border-sky-500 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium"
}, " Channels ", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "border-transparent text-gray-500 hover:border-sky-500 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium"
}, " Contacts ", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "border-transparent text-gray-500 hover:border-sky-500 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium"
}, " Analytics ", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "border-transparent text-gray-500 hover:border-sky-400 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium"
}, " Settings ", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "hidden sm:ml-6 sm:flex sm:items-center"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-gray-700 font-bold mr-3"
}, " Help ", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-1 h-5 bg-gray-500 mx-5 flex"
}, null, -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "ml-3 relative"
};
var _hoisted_19 = {
  role: "button",
  "class": "bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
};
var _hoisted_20 = ["src"];
var _hoisted_21 = {
  "class": "ml-3 px-2 flex flex-col justify-left items-start text-gray-500"
};
var _hoisted_22 = {
  "class": "font-bold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_MenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItem");

  var _component_MenuItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItems");

  var _component_MenuButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuButton");

  var _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");

  var _component_Disclosure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Disclosure");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Disclosure, {
    as: "nav",
    "class": "bg-white shadow"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var open = _ref.open;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: _ctx.route('home'),
        "class": "flex-shrink-0 flex items-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5, _hoisted_6];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu, {
        as: "div",
        "class": "relative flex"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuButton, {
            "class": "border-sky-500 text-gray-900 inline-flex items-center px-1 pt-1 border-t-4 rounded-sm text-sm font-medium"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
                "enter-active-class": "transition ease-out duration-200",
                "enter-from-class": "transform opacity-0 scale-95",
                "enter-to-class": "transform opacity-100 scale-100",
                "leave-active-class": "transition ease-in duration-75",
                "leave-from-class": "transform opacity-100 scale-100",
                "leave-to-class": "transform opacity-0 scale-95"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItems, {
                    "class": "origin-top-right absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                    style: {
                      "top": "3rem"
                    }
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
                          var active = _ref2.active;
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                            href: _ctx.route('record.list'),
                            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-sky-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-sky-700'])
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [_hoisted_10];
                            }),
                            _: 2
                            /* DYNAMIC */

                          }, 1032
                          /* PROPS, DYNAMIC_SLOTS */
                          , ["href", "class"])];
                        }),
                        _: 1
                        /* STABLE */

                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
                          var active = _ref3.active;
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                            href: "#",
                            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-sky-100' : '', 'block px-4 py-2 text-sm hover:bg-white border-t-2 border-gray-300 text-gray-700 hover:text-sky-700'])
                          }, "AudioBounce", 2
                          /* CLASS */
                          )];
                        }),
                        _: 1
                        /* STABLE */

                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
                          var active = _ref4.active;
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                            href: "#",
                            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-sky-100' : '', 'block px-4 py-2 text-sm hover:bg-white border-t-2 border-gray-300 text-gray-700 hover:text-sky-700'])
                          }, "Sugar Voice", 2
                          /* CLASS */
                          )];
                        }),
                        _: 1
                        /* STABLE */

                      })];
                    }),
                    _: 1
                    /* STABLE */

                  })];
                }),
                _: 1
                /* STABLE */

              })];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }), _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Profile dropdown "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "h-12 w-12 rounded-lg",
        src: $props.avatar,
        alt: ""
      }, null, 8
      /* PROPS */
      , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.name), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.email), 1
      /* TEXT */
      )])])])])])])])];
    }),
    _: 1
    /* STABLE */

  })]);
}

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ScreenView.vue?vue&type=template&id=74095f1a":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ScreenView.vue?vue&type=template&id=74095f1a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative min-h-screen flex flex-col"
};
var _hoisted_2 = {
  "class": "flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex"
};
var _hoisted_3 = {
  "class": "flex-1 min-w-0 bg-white xl:flex"
};
var _hoisted_4 = {
  "class": "bg-white lg:min-w-0 lg:flex-1"
};
var _hoisted_5 = {
  "class": "h-full py-6 px-4 sm:px-6 lg:px-8"
};
var _hoisted_6 = {
  "class": "relative h-full",
  style: {
    "min-height": "36rem"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavBar");

  var _component_AppHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppHeader");

  var _component_Screen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Screen");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Navbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavBar, {
    name: $props.name,
    email: $props.email,
    avatar: $props.avatar
  }, null, 8
  /* PROPS */
  , ["name", "email", "avatar"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Left sidebar & main wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start main area"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppHeader, {
    onViewScreenTrigger: $setup.openScreen
  }, null, 8
  /* PROPS */
  , ["onViewScreenTrigger"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Screen, {
    startRecorder: $setup.viewShow
  }, null, 8
  /* PROPS */
  , ["startRecorder"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End main area ")])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SideBar.vue?vue&type=template&id=3237eda3":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SideBar.vue?vue&type=template&id=3237eda3 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"
};
var _hoisted_2 = {
  "class": "flex-1 mt-12 flex flex-col min-h-0 border-r border-gray-200 bg-white"
};
var _hoisted_3 = {
  "class": "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"
};
var _hoisted_4 = {
  "class": "mt-5 flex-1 px-2 bg-white space-y-1"
};
var _hoisted_5 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.navigation, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: item.name,
      href: item.href,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md'])
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.icon), {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']),
      "aria-hidden": "true"
    }, null, 8
    /* PROPS */
    , ["class"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )], 10
    /* CLASS, PROPS */
    , _hoisted_5);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]);
}

/***/ }),

/***/ "./resources/js/Pages/AppHeader.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/AppHeader.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppHeader_vue_vue_type_template_id_0144d5b5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=template&id=0144d5b5 */ "./resources/js/Pages/AppHeader.vue?vue&type=template&id=0144d5b5");
/* harmony import */ var _AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=script&lang=js */ "./resources/js/Pages/AppHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppHeader_vue_vue_type_template_id_0144d5b5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/AppHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/AppModal.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/AppModal.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppModal_vue_vue_type_template_id_1dc3c496__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppModal.vue?vue&type=template&id=1dc3c496 */ "./resources/js/Pages/AppModal.vue?vue&type=template&id=1dc3c496");
/* harmony import */ var _AppModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppModal.vue?vue&type=script&lang=js */ "./resources/js/Pages/AppModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppModal_vue_vue_type_template_id_1dc3c496__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/AppModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/NavBar.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/NavBar.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavBar_vue_vue_type_template_id_7dd27a4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=7dd27a4e */ "./resources/js/Pages/NavBar.vue?vue&type=template&id=7dd27a4e");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js */ "./resources/js/Pages/NavBar.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavBar_vue_vue_type_template_id_7dd27a4e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/NavBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/Pages/ScreenView.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ScreenView.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScreenView_vue_vue_type_template_id_74095f1a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenView.vue?vue&type=template&id=74095f1a */ "./resources/js/Pages/ScreenView.vue?vue&type=template&id=74095f1a");
/* harmony import */ var _ScreenView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenView.vue?vue&type=script&lang=js */ "./resources/js/Pages/ScreenView.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ScreenView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ScreenView_vue_vue_type_template_id_74095f1a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/ScreenView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SideBar.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/SideBar.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideBar_vue_vue_type_template_id_3237eda3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=3237eda3 */ "./resources/js/Pages/SideBar.vue?vue&type=template&id=3237eda3");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js */ "./resources/js/Pages/SideBar.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_tvynch_Sites_adilotest_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SideBar_vue_vue_type_template_id_3237eda3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SideBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/AppHeader.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/AppHeader.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppHeader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/AppModal.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/AppModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/NavBar.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/NavBar.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavBar.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/ScreenView.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/ScreenView.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScreenView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ScreenView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SideBar.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/SideBar.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SideBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/AppHeader.vue?vue&type=template&id=0144d5b5":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/AppHeader.vue?vue&type=template&id=0144d5b5 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppHeader_vue_vue_type_template_id_0144d5b5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppHeader_vue_vue_type_template_id_0144d5b5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppHeader.vue?vue&type=template&id=0144d5b5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppHeader.vue?vue&type=template&id=0144d5b5");


/***/ }),

/***/ "./resources/js/Pages/AppModal.vue?vue&type=template&id=1dc3c496":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/AppModal.vue?vue&type=template&id=1dc3c496 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppModal_vue_vue_type_template_id_1dc3c496__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppModal_vue_vue_type_template_id_1dc3c496__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppModal.vue?vue&type=template&id=1dc3c496 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AppModal.vue?vue&type=template&id=1dc3c496");


/***/ }),

/***/ "./resources/js/Pages/NavBar.vue?vue&type=template&id=7dd27a4e":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/NavBar.vue?vue&type=template&id=7dd27a4e ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_template_id_7dd27a4e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_template_id_7dd27a4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavBar.vue?vue&type=template&id=7dd27a4e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavBar.vue?vue&type=template&id=7dd27a4e");


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

/***/ "./resources/js/Pages/ScreenView.vue?vue&type=template&id=74095f1a":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/ScreenView.vue?vue&type=template&id=74095f1a ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenView_vue_vue_type_template_id_74095f1a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScreenView_vue_vue_type_template_id_74095f1a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScreenView.vue?vue&type=template&id=74095f1a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ScreenView.vue?vue&type=template&id=74095f1a");


/***/ }),

/***/ "./resources/js/Pages/SideBar.vue?vue&type=template&id=3237eda3":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/SideBar.vue?vue&type=template&id=3237eda3 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideBar_vue_vue_type_template_id_3237eda3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideBar_vue_vue_type_template_id_3237eda3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideBar.vue?vue&type=template&id=3237eda3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SideBar.vue?vue&type=template&id=3237eda3");


/***/ }),

/***/ "?6298":
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);