// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/Observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANIM_OBSERVER = ANIM_OBSERVER;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// const $from_bottom = document.querySelectorAll('.anim-from-bottom')
// export default class Observer {
// 	anim_observer() {
// 		const appearOptions = {
// 			threshold: 0.5,
// 			rootMargin: '0px 0px 0px 0px'
// 		}
// 		const appearOnScroll = new IntersectionObserverEntry((entries, appearOptions) => {
// 			entries.forEach(entry => {
// 				console.log(entry.target.className)
// 				// if(!entry.isIntersecting) { return }
// 				// else {
// 				// 	entry.target.classList.add('appear');
// 				// 	appearOnScroll.unobserve(entry.target); //! stop looking on something when you've done ur job
// 				// }
// 			}, appearOptions)
// 		})
// 		// this.addObserveToEls($from_bottom, appearOnScroll)
// 		$from_bottom.forEach(bottom => {
// 			appearOnScroll.observe(bottom);
// 		})
// 	}
// 	// addObserveToEls(_arrEls, _nameOfObserver) {
// 	// 	_arrEls.forEach(el => {
// 	// 		_nameOfObserver.observe(el)
// 	// 	})
// 	// }
// }
// const $from_bottom = document.querySelectorAll('.anim-from-bottom')
// const $from_bottom = document.querySelectorAll('section')
var $from_bottom = document.querySelectorAll('.anim--fromBottom');
var $from_top = document.querySelectorAll('.anim--fromTop');
var $from_left = document.querySelectorAll('.anim--fromLeft');
var $from_right = document.querySelectorAll('.anim--fromRight');

var $imgs = _toConsumableArray(document.querySelectorAll('.anim--imgs'));

var $circle_imgs = document.querySelectorAll('.anim--circle-imgs');
var $icons = document.querySelectorAll('.anim--icon');
var $from_bottom_cards = document.querySelectorAll('.anim--card-fromBottom');
var $scale = document.querySelectorAll('.anim--scale');
var $fade_in = document.querySelectorAll('.anim--fadeIn');
var $from_right_rotating = document.querySelector('.anim--fromRight-rotating'); // const $from_right_rotating = [...document.querySelectorAll('.anim--fromRight-rotating')]
// const $from_right_rotating = document.querySelectorAll('.anim--fromRight-rotating')

function ANIM_OBSERVER() {
  console.log("ANIM_OBSERVER");
  var appearOptions = {
    threshold: 1,
    rootMargin: '-300px 0px 0px 0px'
  };
  var appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      // console.log(entry.target.className)
      // console.log($from_right_rotating.className);
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target); //! stop looking on something when u've done ur job
      }
    }, appearOptions);
  }); //* primeniti observer na niz elemenata

  appearOnScroll.observe($from_right_rotating);
  $from_bottom.forEach(function (bottom) {
    appearOnScroll.observe(bottom);
  });
  $from_bottom_cards.forEach(function (card) {
    appearOnScroll.observe(card);
  });
  $from_top.forEach(function (top) {
    appearOnScroll.observe(top);
  });
  $from_left.forEach(function (left) {
    appearOnScroll.observe(left);
  });
  $from_right.forEach(function (right) {
    appearOnScroll.observe(right);
  });
  $icons.forEach(function (icon) {
    appearOnScroll.observe(icon);
  });
  $imgs.forEach(function (img) {
    appearOnScroll.observe(img);
  });
  $circle_imgs.forEach(function (circle_img) {
    appearOnScroll.observe(circle_img);
  });
  $scale.forEach(function (scale) {
    appearOnScroll.observe(scale);
  });
  $fade_in.forEach(function (fade) {
    appearOnScroll.observe(fade);
  }); // $from_right_rotating.forEach(rot => {
  // 	appearOnScroll.observe(rot);
  // })
  //* primeniti observer na 1 element
  // let element = document.querySelector(_selector)
  // appearOnScroll.observe(element)
} // module.exports = {
// 	observe_fun: ANIM_OBSERVER()
// }
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Observer = require("./Observer");

// const body = document.body || document.documentElement.body,
// 	scrollWrap = document.querySelector('.smooth-scroll-wrapper'),
// 	height = scrollWrap.getBoundingClientRect().height - 1,
// 	speed = 0.04;
// let offset = 0;
// body.style.height = `${Math.floor(height)}px`;
// function smoothScroll() {
// 	offset += (window.pageYOffset - offset) * speed;
// 	let scroll = `translateY(-${offset}px) translateZ(0)`;
// 	scrollWrap.style.transform = scroll;
// 	callScroll = requestAnimationFrame(smoothScroll);
// }
// smoothScroll();
window.addEventListener('load', function () {
  displayContent();
  hideAfterloader();
  hidePreloader();
  addAnimationClass();
  setTimeout(removePreloaderAnimation, 3000); // const _observe = new Observer();
  // if (!!window.IntersectionObserver) {
  // 	_observe.anim_observer();
  // } else {
  // 	//todo dodati style za sve elemente da su vidljivi i bez transforma
  // 	// _observe.browserDontSupportObserver();
  // 	console.log('NE PODRZAVA OBSERVER');
  // }

  (0, _Observer.ANIM_OBSERVER)();
});

var displayContent = function displayContent() {
  return document.querySelector('.content').style.display = 'block';
};

var hidePreloader = function hidePreloader() {
  return document.querySelector('.preloader').classList.add('preloader--hidden');
};

var hideAfterloader = function hideAfterloader() {
  return document.querySelector('.afterloader').classList.add('afterloader--hidden');
};

var addAnimationClass = function addAnimationClass() {
  var body = document.body || document.documentElement.body;
  if (body.classList.contains('animate-all ')) return;
  body.classList.add('animate-all');
};

var removePreloaderAnimation = function removePreloaderAnimation() {
  document.querySelector('.preloader__circle').style.animation = 'none';
  document.styleSheets[0].addRule('.preloader__circle::before', 'animation: none');
  document.styleSheets[0].addRule('.preloader__circle::after', 'animation: none');
  pseudoElementsCss();
};

var pseudoElementsCss = function pseudoElementsCss() {
  var beforeValue = window.getComputedStyle(document.querySelector('.preloader__circle'), '::before').getPropertyValue('animation');
  var afterValue = window.getComputedStyle(document.querySelector('.preloader__circle'), '::after').getPropertyValue('animation');
  return console.log("beforeValue: ".concat(beforeValue, " and afterValue: ").concat(afterValue));
};
},{"./Observer":"js/Observer.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65319" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)