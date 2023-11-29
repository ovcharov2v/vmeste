/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.umd.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wnumb */ "./node_modules/wnumb/wNumb.js");
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wnumb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");








// Check Webp support
(function checkWebpSupport() {
  var img = new Image();
  img.onload = function () {
    if (img.width > 0 && img.height > 0) {
      document.body.classList.add("webp-support");
    } else {
      document.body.classList.add("no-webp-support");
    }
  };
  img.onerror = function () {
    document.body.classList.add("no-webp-support");
  };
  img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
})();

// Scroll to
document.addEventListener("DOMContentLoaded", function () {
  var linkList = document.querySelectorAll('*[data-scroll-to]');
  if (!linkList.length) return;
  linkList.forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      var target = document.querySelector("#".concat(link.dataset.scrollTo));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Custom selects
var selectList = document.querySelectorAll('.select');
var ssList = [];
if (selectList.length) {
  selectList.forEach(function (select) {
    var ss = new slim_select__WEBPACK_IMPORTED_MODULE_1___default.a({
      select: select,
      settings: {
        showSearch: false,
        placeholderText: "   "
      },
      events: {
        beforeChange: function beforeChange() {
          select.closest('.form-group').classList.add('form-group--filled');
        }
      }
    });
    ssList.push(ss);
  });
}

// Range slider
var slider = document.querySelector('.form-group__range');
nouislider__WEBPACK_IMPORTED_MODULE_2__["default"].create(slider, {
  start: [100],
  range: {
    'min': 5,
    'max': 200
  },
  format: wnumb__WEBPACK_IMPORTED_MODULE_3___default()({
    decimals: 0
  }),
  pips: {
    mode: 'steps',
    stepped: true,
    density: 200
  }
});
var rangeValue = document.querySelector('.form-group__range-top-counter');
var rangeValueInput = document.querySelector('#range-value-input');
slider.noUiSlider.on('update', function (values, handle, unencoded) {
  rangeValue.innerHTML = values[handle].toString();
  rangeValueInput.value = values[handle];
});

// Input masks
var phoneMask = Object(imask__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('#phone'), {
  mask: '+{7}(000) 000-00-00'
});
var dateMask = Object(imask__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('#date'), {
  mask: Date
});

// Form submit
var form = document.querySelector('.section-order__form');
if (form) {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var data = new URLSearchParams(new FormData(form));
    fetch("https://ovcharov2v.github.io/vmeste/index.html", {
      method: 'post',
      body: data
    }).then(function (response) {
      //response.json()
      // ----do something----
      showModal();
    });
    formReset();
  });
}
var formReset = function formReset() {
  ssList.forEach(function (ss) {
    var select = ss.select.select;
    select.closest('.form-group').classList.remove('form-group--filled');
    var event = new Event('change');
    setTimeout(function () {
      select.dispatchEvent(event);
    });
  });
  phoneMask.updateValue();
  dateMask.updateValue();
  form.reset();
};
var modal = document.querySelector('.modal');
var modalCloseBtn = modal.querySelector('.modal__close');
var showModal = function showModal() {
  document.body.style.overflow = 'hidden';
  modal.style.display = 'flex';
  setTimeout(function () {
    modal.classList.add('modal--show');
  }, 50);
};
var closeModal = function closeModal() {
  modal.classList.remove('modal--show');
  setTimeout(function () {
    document.body.style.overflow = '';
    modal.style.display = '';
  }, 300);
};
modalCloseBtn.addEventListener('click', function () {
  return closeModal();
});
modal.addEventListener('click', function (evt) {
  if (!evt.target.closest('.modal__window')) {
    closeModal();
  }
});

// Mobile slider
var atmSlider = null;
var initAtmSlider = function initAtmSlider() {
  if (window.innerWidth > 768) {
    if (atmSlider) {
      atmSlider.destroy(true, true);
      atmSlider = null;
    }
  } else {
    if (!atmSlider) {
      atmSlider = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('.section-atmosphere__slider', {
        slidesPerView: 1.05,
        spaceBetween: 16
      });
    }
  }
};
initAtmSlider();
window.addEventListener('resize', function () {
  initAtmSlider();
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map