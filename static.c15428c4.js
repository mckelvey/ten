(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = ".//";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logo = __webpack_require__(23);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { style: { textAlign: 'center' } },
      'Welcome to'
    ),
    _react2.default.createElement('img', { src: _logo2.default, alt: '', style: { display: 'block', margin: '0 auto' } })
  );
});
//

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'This is what we\'re all about.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
    )
  );
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'It\'s blog time.'
    ),
    _react2.default.createElement('br', null),
    'All Posts:',
    _react2.default.createElement(
      'ul',
      null,
      posts.map(function (post) {
        return _react2.default.createElement(
          'li',
          { key: post.id },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/post/' + post.id + '/' },
            post.title
          )
        );
      })
    )
  );
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    _react2.default.createElement(
      'p',
      null,
      post.body
    )
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(13);

var _reactStaticRoutes = __webpack_require__(14);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(24);

var _commitHistory = __webpack_require__(26);

var _commitHistory2 = _interopRequireDefault(_commitHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_commitHistory2.default);
//


var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          _reactStatic.Link,
          { exact: true, to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/about' },
          'About'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/blog' },
          'Blog'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(15);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(16);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(17);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(18);

var _reactUniversalComponent = __webpack_require__(19);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/david/Sites/my-decade/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(5);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/Users/david/Sites/my-decade/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/Users/david/Sites/my-decade/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/Users/david/Sites/my-decade/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/david/Sites/my-decade/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(20);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(21);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(22);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(3);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.9ff8fc2e.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "body{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}a{text-decoration:none;color:#108db8;font-weight:700}img{max-width:100%}nav{width:100%;background:#108db8}nav a{color:#fff;display:inline-block}.content,nav a{padding:1rem}", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {"history":{"2008-12-06":{"count":1,"totalToDate":1},"2008-12-07":{"count":0,"totalToDate":1},"2008-12-08":{"count":0,"totalToDate":1},"2008-12-09":{"count":0,"totalToDate":1},"2008-12-10":{"count":0,"totalToDate":1},"2008-12-11":{"count":0,"totalToDate":1},"2008-12-12":{"count":0,"totalToDate":1},"2008-12-13":{"count":0,"totalToDate":1},"2008-12-14":{"count":0,"totalToDate":1},"2008-12-15":{"count":0,"totalToDate":1},"2008-12-16":{"count":0,"totalToDate":1},"2008-12-17":{"count":0,"totalToDate":1},"2008-12-18":{"count":0,"totalToDate":1},"2008-12-19":{"count":0,"totalToDate":1},"2008-12-20":{"count":0,"totalToDate":1},"2008-12-21":{"count":0,"totalToDate":1},"2008-12-22":{"count":0,"totalToDate":1},"2008-12-23":{"count":0,"totalToDate":1},"2008-12-24":{"count":0,"totalToDate":1},"2008-12-25":{"count":0,"totalToDate":1},"2008-12-26":{"count":0,"totalToDate":1},"2008-12-27":{"count":0,"totalToDate":1},"2008-12-28":{"count":0,"totalToDate":1},"2008-12-29":{"count":0,"totalToDate":1},"2008-12-30":{"count":0,"totalToDate":1},"2008-12-31":{"count":0,"totalToDate":1},"2009-01-01":{"count":0,"totalToDate":1},"2009-01-02":{"count":0,"totalToDate":1},"2009-01-03":{"count":0,"totalToDate":1},"2009-01-04":{"count":0,"totalToDate":1},"2009-01-05":{"count":0,"totalToDate":1},"2009-01-06":{"count":0,"totalToDate":1},"2009-01-07":{"count":0,"totalToDate":1},"2009-01-08":{"count":0,"totalToDate":1},"2009-01-09":{"count":0,"totalToDate":1},"2009-01-10":{"count":0,"totalToDate":1},"2009-01-11":{"count":0,"totalToDate":1},"2009-01-12":{"count":0,"totalToDate":1},"2009-01-13":{"count":0,"totalToDate":1},"2009-01-14":{"count":0,"totalToDate":1},"2009-01-15":{"count":0,"totalToDate":1},"2009-01-16":{"count":0,"totalToDate":1},"2009-01-17":{"count":0,"totalToDate":1},"2009-01-18":{"count":0,"totalToDate":1},"2009-01-19":{"count":0,"totalToDate":1},"2009-01-20":{"count":0,"totalToDate":1},"2009-01-21":{"count":0,"totalToDate":1},"2009-01-22":{"count":0,"totalToDate":1},"2009-01-23":{"count":0,"totalToDate":1},"2009-01-24":{"count":0,"totalToDate":1},"2009-01-25":{"count":0,"totalToDate":1},"2009-01-26":{"count":0,"totalToDate":1},"2009-01-27":{"count":0,"totalToDate":1},"2009-01-28":{"count":0,"totalToDate":1},"2009-01-29":{"count":0,"totalToDate":1},"2009-01-30":{"count":0,"totalToDate":1},"2009-01-31":{"count":0,"totalToDate":1},"2009-02-01":{"count":0,"totalToDate":1},"2009-02-02":{"count":0,"totalToDate":1},"2009-02-03":{"count":0,"totalToDate":1},"2009-02-04":{"count":0,"totalToDate":1},"2009-02-05":{"count":0,"totalToDate":1},"2009-02-06":{"count":0,"totalToDate":1},"2009-02-07":{"count":0,"totalToDate":1},"2009-02-08":{"count":0,"totalToDate":1},"2009-02-09":{"count":0,"totalToDate":1},"2009-02-10":{"count":0,"totalToDate":1},"2009-02-11":{"count":0,"totalToDate":1},"2009-02-12":{"count":0,"totalToDate":1},"2009-02-13":{"count":0,"totalToDate":1},"2009-02-14":{"count":0,"totalToDate":1},"2009-02-15":{"count":0,"totalToDate":1},"2009-02-16":{"count":0,"totalToDate":1},"2009-02-17":{"count":0,"totalToDate":1},"2009-02-18":{"count":0,"totalToDate":1},"2009-02-19":{"count":0,"totalToDate":1},"2009-02-20":{"count":0,"totalToDate":1},"2009-02-21":{"count":0,"totalToDate":1},"2009-02-22":{"count":0,"totalToDate":1},"2009-02-23":{"count":0,"totalToDate":1},"2009-02-24":{"count":0,"totalToDate":1},"2009-02-25":{"count":0,"totalToDate":1},"2009-02-26":{"count":0,"totalToDate":1},"2009-02-27":{"count":0,"totalToDate":1},"2009-02-28":{"count":0,"totalToDate":1},"2009-03-01":{"count":0,"totalToDate":1},"2009-03-02":{"count":0,"totalToDate":1},"2009-03-03":{"count":0,"totalToDate":1},"2009-03-04":{"count":0,"totalToDate":1},"2009-03-05":{"count":0,"totalToDate":1},"2009-03-06":{"count":0,"totalToDate":1},"2009-03-07":{"count":0,"totalToDate":1},"2009-03-08":{"count":0,"totalToDate":1},"2009-03-09":{"count":0,"totalToDate":1},"2009-03-10":{"count":0,"totalToDate":1},"2009-03-11":{"count":0,"totalToDate":1},"2009-03-12":{"count":2,"totalToDate":3},"2009-03-13":{"count":0,"totalToDate":3},"2009-03-14":{"count":0,"totalToDate":3},"2009-03-15":{"count":0,"totalToDate":3},"2009-03-16":{"count":0,"totalToDate":3},"2009-03-17":{"count":0,"totalToDate":3},"2009-03-18":{"count":0,"totalToDate":3},"2009-03-19":{"count":0,"totalToDate":3},"2009-03-20":{"count":0,"totalToDate":3},"2009-03-21":{"count":1,"totalToDate":4},"2009-03-22":{"count":2,"totalToDate":6},"2009-03-23":{"count":2,"totalToDate":8},"2009-03-24":{"count":0,"totalToDate":8},"2009-03-25":{"count":0,"totalToDate":8},"2009-03-26":{"count":1,"totalToDate":9},"2009-03-27":{"count":0,"totalToDate":9},"2009-03-28":{"count":0,"totalToDate":9},"2009-03-29":{"count":1,"totalToDate":10},"2009-03-30":{"count":1,"totalToDate":11},"2009-03-31":{"count":0,"totalToDate":11},"2009-04-01":{"count":0,"totalToDate":11},"2009-04-02":{"count":1,"totalToDate":12},"2009-04-03":{"count":0,"totalToDate":12},"2009-04-04":{"count":0,"totalToDate":12},"2009-04-05":{"count":1,"totalToDate":13},"2009-04-06":{"count":0,"totalToDate":13},"2009-04-07":{"count":0,"totalToDate":13},"2009-04-08":{"count":0,"totalToDate":13},"2009-04-09":{"count":6,"totalToDate":19},"2009-04-10":{"count":5,"totalToDate":24},"2009-04-11":{"count":8,"totalToDate":32},"2009-04-12":{"count":0,"totalToDate":32},"2009-04-13":{"count":0,"totalToDate":32},"2009-04-14":{"count":0,"totalToDate":32},"2009-04-15":{"count":0,"totalToDate":32},"2009-04-16":{"count":12,"totalToDate":44},"2009-04-17":{"count":0,"totalToDate":44},"2009-04-18":{"count":0,"totalToDate":44},"2009-04-19":{"count":0,"totalToDate":44},"2009-04-20":{"count":0,"totalToDate":44},"2009-04-21":{"count":0,"totalToDate":44},"2009-04-22":{"count":0,"totalToDate":44},"2009-04-23":{"count":1,"totalToDate":45},"2009-04-24":{"count":0,"totalToDate":45},"2009-04-25":{"count":1,"totalToDate":46},"2009-04-26":{"count":0,"totalToDate":46},"2009-04-27":{"count":0,"totalToDate":46},"2009-04-28":{"count":0,"totalToDate":46},"2009-04-29":{"count":0,"totalToDate":46},"2009-04-30":{"count":0,"totalToDate":46},"2009-05-01":{"count":0,"totalToDate":46},"2009-05-02":{"count":0,"totalToDate":46},"2009-05-03":{"count":0,"totalToDate":46},"2009-05-04":{"count":0,"totalToDate":46},"2009-05-05":{"count":2,"totalToDate":48},"2009-05-06":{"count":0,"totalToDate":48},"2009-05-07":{"count":1,"totalToDate":49},"2009-05-08":{"count":0,"totalToDate":49},"2009-05-09":{"count":3,"totalToDate":52},"2009-05-10":{"count":3,"totalToDate":55},"2009-05-11":{"count":3,"totalToDate":58},"2009-05-12":{"count":5,"totalToDate":63},"2009-05-13":{"count":0,"totalToDate":63},"2009-05-14":{"count":0,"totalToDate":63},"2009-05-15":{"count":0,"totalToDate":63},"2009-05-16":{"count":0,"totalToDate":63},"2009-05-17":{"count":0,"totalToDate":63},"2009-05-18":{"count":0,"totalToDate":63},"2009-05-19":{"count":3,"totalToDate":66},"2009-05-20":{"count":0,"totalToDate":66},"2009-05-21":{"count":0,"totalToDate":66},"2009-05-22":{"count":0,"totalToDate":66},"2009-05-23":{"count":2,"totalToDate":68},"2009-05-24":{"count":0,"totalToDate":68},"2009-05-25":{"count":2,"totalToDate":70},"2009-05-26":{"count":0,"totalToDate":70},"2009-05-27":{"count":0,"totalToDate":70},"2009-05-28":{"count":0,"totalToDate":70},"2009-05-29":{"count":0,"totalToDate":70},"2009-05-30":{"count":0,"totalToDate":70},"2009-05-31":{"count":1,"totalToDate":71},"2009-06-01":{"count":0,"totalToDate":71},"2009-06-02":{"count":0,"totalToDate":71},"2009-06-03":{"count":0,"totalToDate":71},"2009-06-04":{"count":0,"totalToDate":71},"2009-06-05":{"count":0,"totalToDate":71},"2009-06-06":{"count":0,"totalToDate":71},"2009-06-07":{"count":0,"totalToDate":71},"2009-06-08":{"count":0,"totalToDate":71},"2009-06-09":{"count":0,"totalToDate":71},"2009-06-10":{"count":2,"totalToDate":73},"2009-06-11":{"count":1,"totalToDate":74},"2009-06-12":{"count":0,"totalToDate":74},"2009-06-13":{"count":0,"totalToDate":74},"2009-06-14":{"count":0,"totalToDate":74},"2009-06-15":{"count":0,"totalToDate":74},"2009-06-16":{"count":0,"totalToDate":74},"2009-06-17":{"count":3,"totalToDate":77},"2009-06-18":{"count":0,"totalToDate":77},"2009-06-19":{"count":0,"totalToDate":77},"2009-06-20":{"count":0,"totalToDate":77},"2009-06-21":{"count":1,"totalToDate":78},"2009-06-22":{"count":0,"totalToDate":78},"2009-06-23":{"count":0,"totalToDate":78},"2009-06-24":{"count":0,"totalToDate":78},"2009-06-25":{"count":1,"totalToDate":79},"2009-06-26":{"count":0,"totalToDate":79},"2009-06-27":{"count":0,"totalToDate":79},"2009-06-28":{"count":1,"totalToDate":80},"2009-06-29":{"count":0,"totalToDate":80},"2009-06-30":{"count":1,"totalToDate":81},"2009-07-01":{"count":0,"totalToDate":81},"2009-07-02":{"count":0,"totalToDate":81},"2009-07-03":{"count":0,"totalToDate":81},"2009-07-04":{"count":0,"totalToDate":81},"2009-07-05":{"count":0,"totalToDate":81},"2009-07-06":{"count":0,"totalToDate":81},"2009-07-07":{"count":2,"totalToDate":83},"2009-07-08":{"count":0,"totalToDate":83},"2009-07-09":{"count":0,"totalToDate":83},"2009-07-10":{"count":0,"totalToDate":83},"2009-07-11":{"count":0,"totalToDate":83},"2009-07-12":{"count":0,"totalToDate":83},"2009-07-13":{"count":0,"totalToDate":83},"2009-07-14":{"count":0,"totalToDate":83},"2009-07-15":{"count":0,"totalToDate":83},"2009-07-16":{"count":0,"totalToDate":83},"2009-07-17":{"count":0,"totalToDate":83},"2009-07-18":{"count":0,"totalToDate":83},"2009-07-19":{"count":0,"totalToDate":83},"2009-07-20":{"count":0,"totalToDate":83},"2009-07-21":{"count":0,"totalToDate":83},"2009-07-22":{"count":0,"totalToDate":83},"2009-07-23":{"count":0,"totalToDate":83},"2009-07-24":{"count":0,"totalToDate":83},"2009-07-25":{"count":0,"totalToDate":83},"2009-07-26":{"count":0,"totalToDate":83},"2009-07-27":{"count":0,"totalToDate":83},"2009-07-28":{"count":0,"totalToDate":83},"2009-07-29":{"count":0,"totalToDate":83},"2009-07-30":{"count":0,"totalToDate":83},"2009-07-31":{"count":0,"totalToDate":83},"2009-08-01":{"count":0,"totalToDate":83},"2009-08-02":{"count":0,"totalToDate":83},"2009-08-03":{"count":0,"totalToDate":83},"2009-08-04":{"count":0,"totalToDate":83},"2009-08-05":{"count":1,"totalToDate":84},"2009-08-06":{"count":2,"totalToDate":86},"2009-08-07":{"count":0,"totalToDate":86},"2009-08-08":{"count":0,"totalToDate":86},"2009-08-09":{"count":2,"totalToDate":88},"2009-08-10":{"count":0,"totalToDate":88},"2009-08-11":{"count":0,"totalToDate":88},"2009-08-12":{"count":0,"totalToDate":88},"2009-08-13":{"count":0,"totalToDate":88},"2009-08-14":{"count":6,"totalToDate":94},"2009-08-15":{"count":0,"totalToDate":94},"2009-08-16":{"count":0,"totalToDate":94},"2009-08-17":{"count":0,"totalToDate":94},"2009-08-18":{"count":0,"totalToDate":94},"2009-08-19":{"count":0,"totalToDate":94},"2009-08-20":{"count":0,"totalToDate":94},"2009-08-21":{"count":0,"totalToDate":94},"2009-08-22":{"count":0,"totalToDate":94},"2009-08-23":{"count":0,"totalToDate":94},"2009-08-24":{"count":0,"totalToDate":94},"2009-08-25":{"count":0,"totalToDate":94},"2009-08-26":{"count":0,"totalToDate":94},"2009-08-27":{"count":0,"totalToDate":94},"2009-08-28":{"count":0,"totalToDate":94},"2009-08-29":{"count":0,"totalToDate":94},"2009-08-30":{"count":0,"totalToDate":94},"2009-08-31":{"count":1,"totalToDate":95},"2009-09-01":{"count":0,"totalToDate":95},"2009-09-02":{"count":0,"totalToDate":95},"2009-09-03":{"count":0,"totalToDate":95},"2009-09-04":{"count":0,"totalToDate":95},"2009-09-05":{"count":1,"totalToDate":96},"2009-09-06":{"count":0,"totalToDate":96},"2009-09-07":{"count":0,"totalToDate":96},"2009-09-08":{"count":0,"totalToDate":96},"2009-09-09":{"count":0,"totalToDate":96},"2009-09-10":{"count":0,"totalToDate":96},"2009-09-11":{"count":0,"totalToDate":96},"2009-09-12":{"count":0,"totalToDate":96},"2009-09-13":{"count":0,"totalToDate":96},"2009-09-14":{"count":0,"totalToDate":96},"2009-09-15":{"count":0,"totalToDate":96},"2009-09-16":{"count":0,"totalToDate":96},"2009-09-17":{"count":0,"totalToDate":96},"2009-09-18":{"count":0,"totalToDate":96},"2009-09-19":{"count":0,"totalToDate":96},"2009-09-20":{"count":0,"totalToDate":96},"2009-09-21":{"count":0,"totalToDate":96},"2009-09-22":{"count":0,"totalToDate":96},"2009-09-23":{"count":0,"totalToDate":96},"2009-09-24":{"count":0,"totalToDate":96},"2009-09-25":{"count":0,"totalToDate":96},"2009-09-26":{"count":0,"totalToDate":96},"2009-09-27":{"count":0,"totalToDate":96},"2009-09-28":{"count":0,"totalToDate":96},"2009-09-29":{"count":0,"totalToDate":96},"2009-09-30":{"count":0,"totalToDate":96},"2009-10-01":{"count":0,"totalToDate":96},"2009-10-02":{"count":0,"totalToDate":96},"2009-10-03":{"count":0,"totalToDate":96},"2009-10-04":{"count":0,"totalToDate":96},"2009-10-05":{"count":0,"totalToDate":96},"2009-10-06":{"count":0,"totalToDate":96},"2009-10-07":{"count":0,"totalToDate":96},"2009-10-08":{"count":0,"totalToDate":96},"2009-10-09":{"count":0,"totalToDate":96},"2009-10-10":{"count":0,"totalToDate":96},"2009-10-11":{"count":0,"totalToDate":96},"2009-10-12":{"count":0,"totalToDate":96},"2009-10-13":{"count":0,"totalToDate":96},"2009-10-14":{"count":0,"totalToDate":96},"2009-10-15":{"count":0,"totalToDate":96},"2009-10-16":{"count":2,"totalToDate":98},"2009-10-17":{"count":1,"totalToDate":99},"2009-10-18":{"count":3,"totalToDate":102},"2009-10-19":{"count":0,"totalToDate":102},"2009-10-20":{"count":0,"totalToDate":102},"2009-10-21":{"count":0,"totalToDate":102},"2009-10-22":{"count":0,"totalToDate":102},"2009-10-23":{"count":0,"totalToDate":102},"2009-10-24":{"count":0,"totalToDate":102},"2009-10-25":{"count":0,"totalToDate":102},"2009-10-26":{"count":0,"totalToDate":102},"2009-10-27":{"count":0,"totalToDate":102},"2009-10-28":{"count":0,"totalToDate":102},"2009-10-29":{"count":1,"totalToDate":103},"2009-10-30":{"count":0,"totalToDate":103},"2009-10-31":{"count":6,"totalToDate":109},"2009-11-01":{"count":0,"totalToDate":109},"2009-11-02":{"count":1,"totalToDate":110},"2009-11-03":{"count":0,"totalToDate":110},"2009-11-04":{"count":0,"totalToDate":110},"2009-11-05":{"count":0,"totalToDate":110},"2009-11-06":{"count":0,"totalToDate":110},"2009-11-07":{"count":0,"totalToDate":110},"2009-11-08":{"count":0,"totalToDate":110},"2009-11-09":{"count":0,"totalToDate":110},"2009-11-10":{"count":0,"totalToDate":110},"2009-11-11":{"count":0,"totalToDate":110},"2009-11-12":{"count":0,"totalToDate":110},"2009-11-13":{"count":0,"totalToDate":110},"2009-11-14":{"count":0,"totalToDate":110},"2009-11-15":{"count":3,"totalToDate":113},"2009-11-16":{"count":0,"totalToDate":113},"2009-11-17":{"count":0,"totalToDate":113},"2009-11-18":{"count":0,"totalToDate":113},"2009-11-19":{"count":0,"totalToDate":113},"2009-11-20":{"count":0,"totalToDate":113},"2009-11-21":{"count":0,"totalToDate":113},"2009-11-22":{"count":3,"totalToDate":116},"2009-11-23":{"count":11,"totalToDate":127},"2009-11-24":{"count":0,"totalToDate":127},"2009-11-25":{"count":0,"totalToDate":127},"2009-11-26":{"count":0,"totalToDate":127},"2009-11-27":{"count":1,"totalToDate":128},"2009-11-28":{"count":0,"totalToDate":128},"2009-11-29":{"count":2,"totalToDate":130},"2009-11-30":{"count":0,"totalToDate":130},"2009-12-01":{"count":0,"totalToDate":130},"2009-12-02":{"count":0,"totalToDate":130},"2009-12-03":{"count":0,"totalToDate":130},"2009-12-04":{"count":0,"totalToDate":130},"2009-12-05":{"count":0,"totalToDate":130},"2009-12-06":{"count":4,"totalToDate":134},"2009-12-07":{"count":0,"totalToDate":134},"2009-12-08":{"count":0,"totalToDate":134},"2009-12-09":{"count":0,"totalToDate":134},"2009-12-10":{"count":0,"totalToDate":134},"2009-12-11":{"count":0,"totalToDate":134},"2009-12-12":{"count":0,"totalToDate":134},"2009-12-13":{"count":0,"totalToDate":134},"2009-12-14":{"count":0,"totalToDate":134},"2009-12-15":{"count":1,"totalToDate":135},"2009-12-16":{"count":3,"totalToDate":138},"2009-12-17":{"count":0,"totalToDate":138},"2009-12-18":{"count":0,"totalToDate":138},"2009-12-19":{"count":0,"totalToDate":138},"2009-12-20":{"count":2,"totalToDate":140},"2009-12-21":{"count":0,"totalToDate":140},"2009-12-22":{"count":0,"totalToDate":140},"2009-12-23":{"count":0,"totalToDate":140},"2009-12-24":{"count":0,"totalToDate":140},"2009-12-25":{"count":0,"totalToDate":140},"2009-12-26":{"count":0,"totalToDate":140},"2009-12-27":{"count":0,"totalToDate":140},"2009-12-28":{"count":0,"totalToDate":140},"2009-12-29":{"count":0,"totalToDate":140},"2009-12-30":{"count":0,"totalToDate":140},"2009-12-31":{"count":1,"totalToDate":141},"2010-01-01":{"count":0,"totalToDate":141},"2010-01-02":{"count":0,"totalToDate":141},"2010-01-03":{"count":0,"totalToDate":141},"2010-01-04":{"count":0,"totalToDate":141},"2010-01-05":{"count":0,"totalToDate":141},"2010-01-06":{"count":0,"totalToDate":141},"2010-01-07":{"count":0,"totalToDate":141},"2010-01-08":{"count":0,"totalToDate":141},"2010-01-09":{"count":0,"totalToDate":141},"2010-01-10":{"count":0,"totalToDate":141},"2010-01-11":{"count":0,"totalToDate":141},"2010-01-12":{"count":0,"totalToDate":141},"2010-01-13":{"count":0,"totalToDate":141},"2010-01-14":{"count":2,"totalToDate":143},"2010-01-15":{"count":0,"totalToDate":143},"2010-01-16":{"count":0,"totalToDate":143},"2010-01-17":{"count":0,"totalToDate":143},"2010-01-18":{"count":1,"totalToDate":144},"2010-01-19":{"count":0,"totalToDate":144},"2010-01-20":{"count":0,"totalToDate":144},"2010-01-21":{"count":0,"totalToDate":144},"2010-01-22":{"count":0,"totalToDate":144},"2010-01-23":{"count":0,"totalToDate":144},"2010-01-24":{"count":0,"totalToDate":144},"2010-01-25":{"count":0,"totalToDate":144},"2010-01-26":{"count":0,"totalToDate":144},"2010-01-27":{"count":0,"totalToDate":144},"2010-01-28":{"count":0,"totalToDate":144},"2010-01-29":{"count":0,"totalToDate":144},"2010-01-30":{"count":0,"totalToDate":144},"2010-01-31":{"count":0,"totalToDate":144},"2010-02-01":{"count":0,"totalToDate":144},"2010-02-02":{"count":0,"totalToDate":144},"2010-02-03":{"count":0,"totalToDate":144},"2010-02-04":{"count":0,"totalToDate":144},"2010-02-05":{"count":0,"totalToDate":144},"2010-02-06":{"count":0,"totalToDate":144},"2010-02-07":{"count":0,"totalToDate":144},"2010-02-08":{"count":0,"totalToDate":144},"2010-02-09":{"count":0,"totalToDate":144},"2010-02-10":{"count":0,"totalToDate":144},"2010-02-11":{"count":0,"totalToDate":144},"2010-02-12":{"count":0,"totalToDate":144},"2010-02-13":{"count":0,"totalToDate":144},"2010-02-14":{"count":0,"totalToDate":144},"2010-02-15":{"count":0,"totalToDate":144},"2010-02-16":{"count":0,"totalToDate":144},"2010-02-17":{"count":0,"totalToDate":144},"2010-02-18":{"count":0,"totalToDate":144},"2010-02-19":{"count":0,"totalToDate":144},"2010-02-20":{"count":1,"totalToDate":145},"2010-02-21":{"count":0,"totalToDate":145},"2010-02-22":{"count":0,"totalToDate":145},"2010-02-23":{"count":1,"totalToDate":146},"2010-02-24":{"count":1,"totalToDate":147},"2010-02-25":{"count":0,"totalToDate":147},"2010-02-26":{"count":0,"totalToDate":147},"2010-02-27":{"count":0,"totalToDate":147},"2010-02-28":{"count":0,"totalToDate":147},"2010-03-01":{"count":0,"totalToDate":147},"2010-03-02":{"count":0,"totalToDate":147},"2010-03-03":{"count":0,"totalToDate":147},"2010-03-04":{"count":2,"totalToDate":149},"2010-03-05":{"count":0,"totalToDate":149},"2010-03-06":{"count":1,"totalToDate":150},"2010-03-07":{"count":0,"totalToDate":150},"2010-03-08":{"count":0,"totalToDate":150},"2010-03-09":{"count":0,"totalToDate":150},"2010-03-10":{"count":0,"totalToDate":150},"2010-03-11":{"count":0,"totalToDate":150},"2010-03-12":{"count":0,"totalToDate":150},"2010-03-13":{"count":0,"totalToDate":150},"2010-03-14":{"count":0,"totalToDate":150},"2010-03-15":{"count":0,"totalToDate":150},"2010-03-16":{"count":0,"totalToDate":150},"2010-03-17":{"count":0,"totalToDate":150},"2010-03-18":{"count":0,"totalToDate":150},"2010-03-19":{"count":0,"totalToDate":150},"2010-03-20":{"count":0,"totalToDate":150},"2010-03-21":{"count":0,"totalToDate":150},"2010-03-22":{"count":0,"totalToDate":150},"2010-03-23":{"count":0,"totalToDate":150},"2010-03-24":{"count":0,"totalToDate":150},"2010-03-25":{"count":0,"totalToDate":150},"2010-03-26":{"count":0,"totalToDate":150},"2010-03-27":{"count":0,"totalToDate":150},"2010-03-28":{"count":11,"totalToDate":161},"2010-03-29":{"count":0,"totalToDate":161},"2010-03-30":{"count":2,"totalToDate":163},"2010-03-31":{"count":0,"totalToDate":163},"2010-04-01":{"count":0,"totalToDate":163},"2010-04-02":{"count":0,"totalToDate":163},"2010-04-03":{"count":0,"totalToDate":163},"2010-04-04":{"count":0,"totalToDate":163},"2010-04-05":{"count":0,"totalToDate":163},"2010-04-06":{"count":0,"totalToDate":163},"2010-04-07":{"count":0,"totalToDate":163},"2010-04-08":{"count":0,"totalToDate":163},"2010-04-09":{"count":0,"totalToDate":163},"2010-04-10":{"count":0,"totalToDate":163},"2010-04-11":{"count":0,"totalToDate":163},"2010-04-12":{"count":0,"totalToDate":163},"2010-04-13":{"count":0,"totalToDate":163},"2010-04-14":{"count":0,"totalToDate":163},"2010-04-15":{"count":0,"totalToDate":163},"2010-04-16":{"count":0,"totalToDate":163},"2010-04-17":{"count":0,"totalToDate":163},"2010-04-18":{"count":0,"totalToDate":163},"2010-04-19":{"count":0,"totalToDate":163},"2010-04-20":{"count":0,"totalToDate":163},"2010-04-21":{"count":1,"totalToDate":164},"2010-04-22":{"count":0,"totalToDate":164},"2010-04-23":{"count":0,"totalToDate":164},"2010-04-24":{"count":0,"totalToDate":164},"2010-04-25":{"count":0,"totalToDate":164},"2010-04-26":{"count":0,"totalToDate":164},"2010-04-27":{"count":0,"totalToDate":164},"2010-04-28":{"count":0,"totalToDate":164},"2010-04-29":{"count":0,"totalToDate":164},"2010-04-30":{"count":0,"totalToDate":164},"2010-05-01":{"count":0,"totalToDate":164},"2010-05-02":{"count":0,"totalToDate":164},"2010-05-03":{"count":0,"totalToDate":164},"2010-05-04":{"count":0,"totalToDate":164},"2010-05-05":{"count":0,"totalToDate":164},"2010-05-06":{"count":0,"totalToDate":164},"2010-05-07":{"count":0,"totalToDate":164},"2010-05-08":{"count":0,"totalToDate":164},"2010-05-09":{"count":0,"totalToDate":164},"2010-05-10":{"count":0,"totalToDate":164},"2010-05-11":{"count":0,"totalToDate":164},"2010-05-12":{"count":0,"totalToDate":164},"2010-05-13":{"count":1,"totalToDate":165},"2010-05-14":{"count":11,"totalToDate":176},"2010-05-15":{"count":0,"totalToDate":176},"2010-05-16":{"count":0,"totalToDate":176},"2010-05-17":{"count":7,"totalToDate":183},"2010-05-18":{"count":3,"totalToDate":186},"2010-05-19":{"count":0,"totalToDate":186},"2010-05-20":{"count":0,"totalToDate":186},"2010-05-21":{"count":0,"totalToDate":186},"2010-05-22":{"count":0,"totalToDate":186},"2010-05-23":{"count":2,"totalToDate":188},"2010-05-24":{"count":0,"totalToDate":188},"2010-05-25":{"count":0,"totalToDate":188},"2010-05-26":{"count":0,"totalToDate":188},"2010-05-27":{"count":0,"totalToDate":188},"2010-05-28":{"count":0,"totalToDate":188},"2010-05-29":{"count":0,"totalToDate":188},"2010-05-30":{"count":0,"totalToDate":188},"2010-05-31":{"count":0,"totalToDate":188},"2010-06-01":{"count":0,"totalToDate":188},"2010-06-02":{"count":0,"totalToDate":188},"2010-06-03":{"count":0,"totalToDate":188},"2010-06-04":{"count":0,"totalToDate":188},"2010-06-05":{"count":0,"totalToDate":188},"2010-06-06":{"count":0,"totalToDate":188},"2010-06-07":{"count":0,"totalToDate":188},"2010-06-08":{"count":0,"totalToDate":188},"2010-06-09":{"count":2,"totalToDate":190},"2010-06-10":{"count":0,"totalToDate":190},"2010-06-11":{"count":0,"totalToDate":190},"2010-06-12":{"count":0,"totalToDate":190},"2010-06-13":{"count":0,"totalToDate":190},"2010-06-14":{"count":2,"totalToDate":192},"2010-06-15":{"count":0,"totalToDate":192},"2010-06-16":{"count":0,"totalToDate":192},"2010-06-17":{"count":0,"totalToDate":192},"2010-06-18":{"count":0,"totalToDate":192},"2010-06-19":{"count":0,"totalToDate":192},"2010-06-20":{"count":0,"totalToDate":192},"2010-06-21":{"count":0,"totalToDate":192},"2010-06-22":{"count":1,"totalToDate":193},"2010-06-23":{"count":0,"totalToDate":193},"2010-06-24":{"count":3,"totalToDate":196},"2010-06-25":{"count":0,"totalToDate":196},"2010-06-26":{"count":0,"totalToDate":196},"2010-06-27":{"count":0,"totalToDate":196},"2010-06-28":{"count":0,"totalToDate":196},"2010-06-29":{"count":0,"totalToDate":196},"2010-06-30":{"count":0,"totalToDate":196},"2010-07-01":{"count":0,"totalToDate":196},"2010-07-02":{"count":0,"totalToDate":196},"2010-07-03":{"count":0,"totalToDate":196},"2010-07-04":{"count":0,"totalToDate":196},"2010-07-05":{"count":0,"totalToDate":196},"2010-07-06":{"count":0,"totalToDate":196},"2010-07-07":{"count":0,"totalToDate":196},"2010-07-08":{"count":0,"totalToDate":196},"2010-07-09":{"count":0,"totalToDate":196},"2010-07-10":{"count":0,"totalToDate":196},"2010-07-11":{"count":0,"totalToDate":196},"2010-07-12":{"count":0,"totalToDate":196},"2010-07-13":{"count":0,"totalToDate":196},"2010-07-14":{"count":0,"totalToDate":196},"2010-07-15":{"count":0,"totalToDate":196},"2010-07-16":{"count":0,"totalToDate":196},"2010-07-17":{"count":0,"totalToDate":196},"2010-07-18":{"count":0,"totalToDate":196},"2010-07-19":{"count":0,"totalToDate":196},"2010-07-20":{"count":0,"totalToDate":196},"2010-07-21":{"count":0,"totalToDate":196},"2010-07-22":{"count":0,"totalToDate":196},"2010-07-23":{"count":0,"totalToDate":196},"2010-07-24":{"count":0,"totalToDate":196},"2010-07-25":{"count":0,"totalToDate":196},"2010-07-26":{"count":0,"totalToDate":196},"2010-07-27":{"count":0,"totalToDate":196},"2010-07-28":{"count":0,"totalToDate":196},"2010-07-29":{"count":0,"totalToDate":196},"2010-07-30":{"count":0,"totalToDate":196},"2010-07-31":{"count":0,"totalToDate":196},"2010-08-01":{"count":0,"totalToDate":196},"2010-08-02":{"count":0,"totalToDate":196},"2010-08-03":{"count":0,"totalToDate":196},"2010-08-04":{"count":0,"totalToDate":196},"2010-08-05":{"count":0,"totalToDate":196},"2010-08-06":{"count":0,"totalToDate":196},"2010-08-07":{"count":0,"totalToDate":196},"2010-08-08":{"count":0,"totalToDate":196},"2010-08-09":{"count":0,"totalToDate":196},"2010-08-10":{"count":0,"totalToDate":196},"2010-08-11":{"count":0,"totalToDate":196},"2010-08-12":{"count":0,"totalToDate":196},"2010-08-13":{"count":0,"totalToDate":196},"2010-08-14":{"count":0,"totalToDate":196},"2010-08-15":{"count":0,"totalToDate":196},"2010-08-16":{"count":0,"totalToDate":196},"2010-08-17":{"count":0,"totalToDate":196},"2010-08-18":{"count":0,"totalToDate":196},"2010-08-19":{"count":0,"totalToDate":196},"2010-08-20":{"count":0,"totalToDate":196},"2010-08-21":{"count":0,"totalToDate":196},"2010-08-22":{"count":0,"totalToDate":196},"2010-08-23":{"count":0,"totalToDate":196},"2010-08-24":{"count":0,"totalToDate":196},"2010-08-25":{"count":0,"totalToDate":196},"2010-08-26":{"count":0,"totalToDate":196},"2010-08-27":{"count":0,"totalToDate":196},"2010-08-28":{"count":0,"totalToDate":196},"2010-08-29":{"count":0,"totalToDate":196},"2010-08-30":{"count":0,"totalToDate":196},"2010-08-31":{"count":0,"totalToDate":196},"2010-09-01":{"count":0,"totalToDate":196},"2010-09-02":{"count":0,"totalToDate":196},"2010-09-03":{"count":0,"totalToDate":196},"2010-09-04":{"count":0,"totalToDate":196},"2010-09-05":{"count":0,"totalToDate":196},"2010-09-06":{"count":0,"totalToDate":196},"2010-09-07":{"count":0,"totalToDate":196},"2010-09-08":{"count":0,"totalToDate":196},"2010-09-09":{"count":0,"totalToDate":196},"2010-09-10":{"count":0,"totalToDate":196},"2010-09-11":{"count":0,"totalToDate":196},"2010-09-12":{"count":0,"totalToDate":196},"2010-09-13":{"count":0,"totalToDate":196},"2010-09-14":{"count":0,"totalToDate":196},"2010-09-15":{"count":0,"totalToDate":196},"2010-09-16":{"count":0,"totalToDate":196},"2010-09-17":{"count":0,"totalToDate":196},"2010-09-18":{"count":0,"totalToDate":196},"2010-09-19":{"count":0,"totalToDate":196},"2010-09-20":{"count":1,"totalToDate":197},"2010-09-21":{"count":0,"totalToDate":197},"2010-09-22":{"count":0,"totalToDate":197},"2010-09-23":{"count":0,"totalToDate":197},"2010-09-24":{"count":0,"totalToDate":197},"2010-09-25":{"count":0,"totalToDate":197},"2010-09-26":{"count":0,"totalToDate":197},"2010-09-27":{"count":1,"totalToDate":198},"2010-09-28":{"count":0,"totalToDate":198},"2010-09-29":{"count":0,"totalToDate":198},"2010-09-30":{"count":0,"totalToDate":198},"2010-10-01":{"count":0,"totalToDate":198},"2010-10-02":{"count":0,"totalToDate":198},"2010-10-03":{"count":0,"totalToDate":198},"2010-10-04":{"count":0,"totalToDate":198},"2010-10-05":{"count":0,"totalToDate":198},"2010-10-06":{"count":0,"totalToDate":198},"2010-10-07":{"count":0,"totalToDate":198},"2010-10-08":{"count":0,"totalToDate":198},"2010-10-09":{"count":0,"totalToDate":198},"2010-10-10":{"count":0,"totalToDate":198},"2010-10-11":{"count":1,"totalToDate":199},"2010-10-12":{"count":2,"totalToDate":201},"2010-10-13":{"count":1,"totalToDate":202},"2010-10-14":{"count":1,"totalToDate":203},"2010-10-15":{"count":0,"totalToDate":203},"2010-10-16":{"count":0,"totalToDate":203},"2010-10-17":{"count":0,"totalToDate":203},"2010-10-18":{"count":0,"totalToDate":203},"2010-10-19":{"count":0,"totalToDate":203},"2010-10-20":{"count":0,"totalToDate":203},"2010-10-21":{"count":0,"totalToDate":203},"2010-10-22":{"count":0,"totalToDate":203},"2010-10-23":{"count":0,"totalToDate":203},"2010-10-24":{"count":0,"totalToDate":203},"2010-10-25":{"count":2,"totalToDate":205},"2010-10-26":{"count":0,"totalToDate":205},"2010-10-27":{"count":0,"totalToDate":205},"2010-10-28":{"count":3,"totalToDate":208},"2010-10-29":{"count":3,"totalToDate":211},"2010-10-30":{"count":0,"totalToDate":211},"2010-10-31":{"count":0,"totalToDate":211},"2010-11-01":{"count":3,"totalToDate":214},"2010-11-02":{"count":1,"totalToDate":215},"2010-11-03":{"count":3,"totalToDate":218},"2010-11-04":{"count":0,"totalToDate":218},"2010-11-05":{"count":3,"totalToDate":221},"2010-11-06":{"count":0,"totalToDate":221},"2010-11-07":{"count":0,"totalToDate":221},"2010-11-08":{"count":0,"totalToDate":221},"2010-11-09":{"count":0,"totalToDate":221},"2010-11-10":{"count":0,"totalToDate":221},"2010-11-11":{"count":0,"totalToDate":221},"2010-11-12":{"count":4,"totalToDate":225},"2010-11-13":{"count":0,"totalToDate":225},"2010-11-14":{"count":0,"totalToDate":225},"2010-11-15":{"count":0,"totalToDate":225},"2010-11-16":{"count":9,"totalToDate":234},"2010-11-17":{"count":0,"totalToDate":234},"2010-11-18":{"count":2,"totalToDate":236},"2010-11-19":{"count":2,"totalToDate":238},"2010-11-20":{"count":0,"totalToDate":238},"2010-11-21":{"count":5,"totalToDate":243},"2010-11-22":{"count":0,"totalToDate":243},"2010-11-23":{"count":4,"totalToDate":247},"2010-11-24":{"count":1,"totalToDate":248},"2010-11-25":{"count":0,"totalToDate":248},"2010-11-26":{"count":0,"totalToDate":248},"2010-11-27":{"count":1,"totalToDate":249},"2010-11-28":{"count":0,"totalToDate":249},"2010-11-29":{"count":4,"totalToDate":253},"2010-11-30":{"count":6,"totalToDate":259},"2010-12-01":{"count":0,"totalToDate":259},"2010-12-02":{"count":1,"totalToDate":260},"2010-12-03":{"count":6,"totalToDate":266},"2010-12-04":{"count":0,"totalToDate":266},"2010-12-05":{"count":1,"totalToDate":267},"2010-12-06":{"count":1,"totalToDate":268},"2010-12-07":{"count":0,"totalToDate":268},"2010-12-08":{"count":0,"totalToDate":268},"2010-12-09":{"count":3,"totalToDate":271},"2010-12-10":{"count":1,"totalToDate":272},"2010-12-11":{"count":0,"totalToDate":272},"2010-12-12":{"count":2,"totalToDate":274},"2010-12-13":{"count":2,"totalToDate":276},"2010-12-14":{"count":0,"totalToDate":276},"2010-12-15":{"count":4,"totalToDate":280},"2010-12-16":{"count":0,"totalToDate":280},"2010-12-17":{"count":0,"totalToDate":280},"2010-12-18":{"count":0,"totalToDate":280},"2010-12-19":{"count":0,"totalToDate":280},"2010-12-20":{"count":1,"totalToDate":281},"2010-12-21":{"count":2,"totalToDate":283},"2010-12-22":{"count":3,"totalToDate":286},"2010-12-23":{"count":0,"totalToDate":286},"2010-12-24":{"count":0,"totalToDate":286},"2010-12-25":{"count":0,"totalToDate":286},"2010-12-26":{"count":0,"totalToDate":286},"2010-12-27":{"count":0,"totalToDate":286},"2010-12-28":{"count":0,"totalToDate":286},"2010-12-29":{"count":0,"totalToDate":286},"2010-12-30":{"count":0,"totalToDate":286},"2010-12-31":{"count":0,"totalToDate":286},"2011-01-01":{"count":0,"totalToDate":286},"2011-01-02":{"count":10,"totalToDate":296},"2011-01-03":{"count":0,"totalToDate":296},"2011-01-04":{"count":3,"totalToDate":299},"2011-01-05":{"count":0,"totalToDate":299},"2011-01-06":{"count":0,"totalToDate":299},"2011-01-07":{"count":4,"totalToDate":303},"2011-01-08":{"count":0,"totalToDate":303},"2011-01-09":{"count":6,"totalToDate":309},"2011-01-10":{"count":0,"totalToDate":309},"2011-01-11":{"count":0,"totalToDate":309},"2011-01-12":{"count":0,"totalToDate":309},"2011-01-13":{"count":0,"totalToDate":309},"2011-01-14":{"count":2,"totalToDate":311},"2011-01-15":{"count":0,"totalToDate":311},"2011-01-16":{"count":0,"totalToDate":311},"2011-01-17":{"count":7,"totalToDate":318},"2011-01-18":{"count":0,"totalToDate":318},"2011-01-19":{"count":0,"totalToDate":318},"2011-01-20":{"count":0,"totalToDate":318},"2011-01-21":{"count":5,"totalToDate":323},"2011-01-22":{"count":4,"totalToDate":327},"2011-01-23":{"count":0,"totalToDate":327},"2011-01-24":{"count":1,"totalToDate":328},"2011-01-25":{"count":0,"totalToDate":328},"2011-01-26":{"count":0,"totalToDate":328},"2011-01-27":{"count":2,"totalToDate":330},"2011-01-28":{"count":0,"totalToDate":330},"2011-01-29":{"count":0,"totalToDate":330},"2011-01-30":{"count":10,"totalToDate":340},"2011-01-31":{"count":0,"totalToDate":340},"2011-02-01":{"count":0,"totalToDate":340},"2011-02-02":{"count":0,"totalToDate":340},"2011-02-03":{"count":0,"totalToDate":340},"2011-02-04":{"count":4,"totalToDate":344},"2011-02-05":{"count":2,"totalToDate":346},"2011-02-06":{"count":0,"totalToDate":346},"2011-02-07":{"count":0,"totalToDate":346},"2011-02-08":{"count":0,"totalToDate":346},"2011-02-09":{"count":0,"totalToDate":346},"2011-02-10":{"count":0,"totalToDate":346},"2011-02-11":{"count":0,"totalToDate":346},"2011-02-12":{"count":0,"totalToDate":346},"2011-02-13":{"count":2,"totalToDate":348},"2011-02-14":{"count":6,"totalToDate":354},"2011-02-15":{"count":0,"totalToDate":354},"2011-02-16":{"count":2,"totalToDate":356},"2011-02-17":{"count":0,"totalToDate":356},"2011-02-18":{"count":0,"totalToDate":356},"2011-02-19":{"count":2,"totalToDate":358},"2011-02-20":{"count":0,"totalToDate":358},"2011-02-21":{"count":1,"totalToDate":359},"2011-02-22":{"count":0,"totalToDate":359},"2011-02-23":{"count":0,"totalToDate":359},"2011-02-24":{"count":1,"totalToDate":360},"2011-02-25":{"count":4,"totalToDate":364},"2011-02-26":{"count":0,"totalToDate":364},"2011-02-27":{"count":0,"totalToDate":364},"2011-02-28":{"count":0,"totalToDate":364},"2011-03-01":{"count":0,"totalToDate":364},"2011-03-02":{"count":2,"totalToDate":366},"2011-03-03":{"count":0,"totalToDate":366},"2011-03-04":{"count":0,"totalToDate":366},"2011-03-05":{"count":0,"totalToDate":366},"2011-03-06":{"count":0,"totalToDate":366},"2011-03-07":{"count":3,"totalToDate":369},"2011-03-08":{"count":0,"totalToDate":369},"2011-03-09":{"count":0,"totalToDate":369},"2011-03-10":{"count":0,"totalToDate":369},"2011-03-11":{"count":0,"totalToDate":369},"2011-03-12":{"count":0,"totalToDate":369},"2011-03-13":{"count":0,"totalToDate":369},"2011-03-14":{"count":0,"totalToDate":369},"2011-03-15":{"count":0,"totalToDate":369},"2011-03-16":{"count":1,"totalToDate":370},"2011-03-17":{"count":0,"totalToDate":370},"2011-03-18":{"count":0,"totalToDate":370},"2011-03-19":{"count":0,"totalToDate":370},"2011-03-20":{"count":0,"totalToDate":370},"2011-03-21":{"count":3,"totalToDate":373},"2011-03-22":{"count":0,"totalToDate":373},"2011-03-23":{"count":0,"totalToDate":373},"2011-03-24":{"count":0,"totalToDate":373},"2011-03-25":{"count":0,"totalToDate":373},"2011-03-26":{"count":0,"totalToDate":373},"2011-03-27":{"count":0,"totalToDate":373},"2011-03-28":{"count":0,"totalToDate":373},"2011-03-29":{"count":5,"totalToDate":378},"2011-03-30":{"count":0,"totalToDate":378},"2011-03-31":{"count":0,"totalToDate":378},"2011-04-01":{"count":0,"totalToDate":378},"2011-04-02":{"count":0,"totalToDate":378},"2011-04-03":{"count":0,"totalToDate":378},"2011-04-04":{"count":0,"totalToDate":378},"2011-04-05":{"count":0,"totalToDate":378},"2011-04-06":{"count":2,"totalToDate":380},"2011-04-07":{"count":1,"totalToDate":381},"2011-04-08":{"count":5,"totalToDate":386},"2011-04-09":{"count":7,"totalToDate":393},"2011-04-10":{"count":7,"totalToDate":400},"2011-04-11":{"count":2,"totalToDate":402},"2011-04-12":{"count":4,"totalToDate":406},"2011-04-13":{"count":1,"totalToDate":407},"2011-04-14":{"count":1,"totalToDate":408},"2011-04-15":{"count":7,"totalToDate":415},"2011-04-16":{"count":0,"totalToDate":415},"2011-04-17":{"count":1,"totalToDate":416},"2011-04-18":{"count":0,"totalToDate":416},"2011-04-19":{"count":0,"totalToDate":416},"2011-04-20":{"count":0,"totalToDate":416},"2011-04-21":{"count":0,"totalToDate":416},"2011-04-22":{"count":4,"totalToDate":420},"2011-04-23":{"count":0,"totalToDate":420},"2011-04-24":{"count":0,"totalToDate":420},"2011-04-25":{"count":0,"totalToDate":420},"2011-04-26":{"count":0,"totalToDate":420},"2011-04-27":{"count":0,"totalToDate":420},"2011-04-28":{"count":0,"totalToDate":420},"2011-04-29":{"count":0,"totalToDate":420},"2011-04-30":{"count":2,"totalToDate":422},"2011-05-01":{"count":0,"totalToDate":422},"2011-05-02":{"count":2,"totalToDate":424},"2011-05-03":{"count":4,"totalToDate":428},"2011-05-04":{"count":0,"totalToDate":428},"2011-05-05":{"count":0,"totalToDate":428},"2011-05-06":{"count":1,"totalToDate":429},"2011-05-07":{"count":0,"totalToDate":429},"2011-05-08":{"count":0,"totalToDate":429},"2011-05-09":{"count":1,"totalToDate":430},"2011-05-10":{"count":7,"totalToDate":437},"2011-05-11":{"count":0,"totalToDate":437},"2011-05-12":{"count":0,"totalToDate":437},"2011-05-13":{"count":0,"totalToDate":437},"2011-05-14":{"count":0,"totalToDate":437},"2011-05-15":{"count":0,"totalToDate":437},"2011-05-16":{"count":0,"totalToDate":437},"2011-05-17":{"count":0,"totalToDate":437},"2011-05-18":{"count":0,"totalToDate":437},"2011-05-19":{"count":0,"totalToDate":437},"2011-05-20":{"count":0,"totalToDate":437},"2011-05-21":{"count":4,"totalToDate":441},"2011-05-22":{"count":0,"totalToDate":441},"2011-05-23":{"count":0,"totalToDate":441},"2011-05-24":{"count":0,"totalToDate":441},"2011-05-25":{"count":4,"totalToDate":445},"2011-05-26":{"count":0,"totalToDate":445},"2011-05-27":{"count":0,"totalToDate":445},"2011-05-28":{"count":0,"totalToDate":445},"2011-05-29":{"count":4,"totalToDate":449},"2011-05-30":{"count":1,"totalToDate":450},"2011-05-31":{"count":0,"totalToDate":450},"2011-06-01":{"count":0,"totalToDate":450},"2011-06-02":{"count":0,"totalToDate":450},"2011-06-03":{"count":0,"totalToDate":450},"2011-06-04":{"count":0,"totalToDate":450},"2011-06-05":{"count":1,"totalToDate":451},"2011-06-06":{"count":0,"totalToDate":451},"2011-06-07":{"count":0,"totalToDate":451},"2011-06-08":{"count":0,"totalToDate":451},"2011-06-09":{"count":5,"totalToDate":456},"2011-06-10":{"count":1,"totalToDate":457},"2011-06-11":{"count":0,"totalToDate":457},"2011-06-12":{"count":0,"totalToDate":457},"2011-06-13":{"count":4,"totalToDate":461},"2011-06-14":{"count":8,"totalToDate":469},"2011-06-15":{"count":4,"totalToDate":473},"2011-06-16":{"count":0,"totalToDate":473},"2011-06-17":{"count":0,"totalToDate":473},"2011-06-18":{"count":0,"totalToDate":473},"2011-06-19":{"count":0,"totalToDate":473},"2011-06-20":{"count":0,"totalToDate":473},"2011-06-21":{"count":0,"totalToDate":473},"2011-06-22":{"count":1,"totalToDate":474},"2011-06-23":{"count":6,"totalToDate":480},"2011-06-24":{"count":5,"totalToDate":485},"2011-06-25":{"count":0,"totalToDate":485},"2011-06-26":{"count":0,"totalToDate":485},"2011-06-27":{"count":0,"totalToDate":485},"2011-06-28":{"count":3,"totalToDate":488},"2011-06-29":{"count":0,"totalToDate":488},"2011-06-30":{"count":0,"totalToDate":488},"2011-07-01":{"count":3,"totalToDate":491},"2011-07-02":{"count":0,"totalToDate":491},"2011-07-03":{"count":3,"totalToDate":494},"2011-07-04":{"count":0,"totalToDate":494},"2011-07-05":{"count":1,"totalToDate":495},"2011-07-06":{"count":1,"totalToDate":496},"2011-07-07":{"count":0,"totalToDate":496},"2011-07-08":{"count":0,"totalToDate":496},"2011-07-09":{"count":0,"totalToDate":496},"2011-07-10":{"count":0,"totalToDate":496},"2011-07-11":{"count":0,"totalToDate":496},"2011-07-12":{"count":0,"totalToDate":496},"2011-07-13":{"count":6,"totalToDate":502},"2011-07-14":{"count":0,"totalToDate":502},"2011-07-15":{"count":0,"totalToDate":502},"2011-07-16":{"count":3,"totalToDate":505},"2011-07-17":{"count":2,"totalToDate":507},"2011-07-18":{"count":0,"totalToDate":507},"2011-07-19":{"count":0,"totalToDate":507},"2011-07-20":{"count":1,"totalToDate":508},"2011-07-21":{"count":0,"totalToDate":508},"2011-07-22":{"count":2,"totalToDate":510},"2011-07-23":{"count":0,"totalToDate":510},"2011-07-24":{"count":0,"totalToDate":510},"2011-07-25":{"count":0,"totalToDate":510},"2011-07-26":{"count":1,"totalToDate":511},"2011-07-27":{"count":0,"totalToDate":511},"2011-07-28":{"count":0,"totalToDate":511},"2011-07-29":{"count":0,"totalToDate":511},"2011-07-30":{"count":0,"totalToDate":511},"2011-07-31":{"count":0,"totalToDate":511},"2011-08-01":{"count":0,"totalToDate":511},"2011-08-02":{"count":1,"totalToDate":512},"2011-08-03":{"count":5,"totalToDate":517},"2011-08-04":{"count":0,"totalToDate":517},"2011-08-05":{"count":1,"totalToDate":518},"2011-08-06":{"count":0,"totalToDate":518},"2011-08-07":{"count":0,"totalToDate":518},"2011-08-08":{"count":5,"totalToDate":523},"2011-08-09":{"count":0,"totalToDate":523},"2011-08-10":{"count":0,"totalToDate":523},"2011-08-11":{"count":1,"totalToDate":524},"2011-08-12":{"count":0,"totalToDate":524},"2011-08-13":{"count":2,"totalToDate":526},"2011-08-14":{"count":1,"totalToDate":527},"2011-08-15":{"count":1,"totalToDate":528},"2011-08-16":{"count":2,"totalToDate":530},"2011-08-17":{"count":1,"totalToDate":531},"2011-08-18":{"count":0,"totalToDate":531},"2011-08-19":{"count":1,"totalToDate":532},"2011-08-20":{"count":0,"totalToDate":532},"2011-08-21":{"count":4,"totalToDate":536},"2011-08-22":{"count":4,"totalToDate":540},"2011-08-23":{"count":4,"totalToDate":544},"2011-08-24":{"count":1,"totalToDate":545},"2011-08-25":{"count":0,"totalToDate":545},"2011-08-26":{"count":2,"totalToDate":547},"2011-08-27":{"count":0,"totalToDate":547},"2011-08-28":{"count":4,"totalToDate":551},"2011-08-29":{"count":2,"totalToDate":553},"2011-08-30":{"count":0,"totalToDate":553},"2011-08-31":{"count":1,"totalToDate":554},"2011-09-01":{"count":2,"totalToDate":556},"2011-09-02":{"count":0,"totalToDate":556},"2011-09-03":{"count":0,"totalToDate":556},"2011-09-04":{"count":0,"totalToDate":556},"2011-09-05":{"count":3,"totalToDate":559},"2011-09-06":{"count":0,"totalToDate":559},"2011-09-07":{"count":5,"totalToDate":564},"2011-09-08":{"count":5,"totalToDate":569},"2011-09-09":{"count":1,"totalToDate":570},"2011-09-10":{"count":21,"totalToDate":591},"2011-09-11":{"count":1,"totalToDate":592},"2011-09-12":{"count":2,"totalToDate":594},"2011-09-13":{"count":2,"totalToDate":596},"2011-09-14":{"count":0,"totalToDate":596},"2011-09-15":{"count":1,"totalToDate":597},"2011-09-16":{"count":0,"totalToDate":597},"2011-09-17":{"count":0,"totalToDate":597},"2011-09-18":{"count":3,"totalToDate":600},"2011-09-19":{"count":0,"totalToDate":600},"2011-09-20":{"count":2,"totalToDate":602},"2011-09-21":{"count":0,"totalToDate":602},"2011-09-22":{"count":0,"totalToDate":602},"2011-09-23":{"count":0,"totalToDate":602},"2011-09-24":{"count":0,"totalToDate":602},"2011-09-25":{"count":0,"totalToDate":602},"2011-09-26":{"count":0,"totalToDate":602},"2011-09-27":{"count":0,"totalToDate":602},"2011-09-28":{"count":0,"totalToDate":602},"2011-09-29":{"count":0,"totalToDate":602},"2011-09-30":{"count":0,"totalToDate":602},"2011-10-01":{"count":1,"totalToDate":603},"2011-10-02":{"count":4,"totalToDate":607},"2011-10-03":{"count":3,"totalToDate":610},"2011-10-04":{"count":1,"totalToDate":611},"2011-10-05":{"count":0,"totalToDate":611},"2011-10-06":{"count":0,"totalToDate":611},"2011-10-07":{"count":5,"totalToDate":616},"2011-10-08":{"count":0,"totalToDate":616},"2011-10-09":{"count":2,"totalToDate":618},"2011-10-10":{"count":1,"totalToDate":619},"2011-10-11":{"count":0,"totalToDate":619},"2011-10-12":{"count":0,"totalToDate":619},"2011-10-13":{"count":1,"totalToDate":620},"2011-10-14":{"count":1,"totalToDate":621},"2011-10-15":{"count":2,"totalToDate":623},"2011-10-16":{"count":2,"totalToDate":625},"2011-10-17":{"count":1,"totalToDate":626},"2011-10-18":{"count":1,"totalToDate":627},"2011-10-19":{"count":1,"totalToDate":628},"2011-10-20":{"count":1,"totalToDate":629},"2011-10-21":{"count":1,"totalToDate":630},"2011-10-22":{"count":3,"totalToDate":633},"2011-10-23":{"count":2,"totalToDate":635},"2011-10-24":{"count":3,"totalToDate":638},"2011-10-25":{"count":2,"totalToDate":640},"2011-10-26":{"count":0,"totalToDate":640},"2011-10-27":{"count":0,"totalToDate":640},"2011-10-28":{"count":2,"totalToDate":642},"2011-10-29":{"count":1,"totalToDate":643},"2011-10-30":{"count":0,"totalToDate":643},"2011-10-31":{"count":1,"totalToDate":644},"2011-11-01":{"count":0,"totalToDate":644},"2011-11-02":{"count":1,"totalToDate":645},"2011-11-03":{"count":4,"totalToDate":649},"2011-11-04":{"count":1,"totalToDate":650},"2011-11-05":{"count":0,"totalToDate":650},"2011-11-06":{"count":0,"totalToDate":650},"2011-11-07":{"count":0,"totalToDate":650},"2011-11-08":{"count":0,"totalToDate":650},"2011-11-09":{"count":6,"totalToDate":656},"2011-11-10":{"count":4,"totalToDate":660},"2011-11-11":{"count":1,"totalToDate":661},"2011-11-12":{"count":0,"totalToDate":661},"2011-11-13":{"count":7,"totalToDate":668},"2011-11-14":{"count":1,"totalToDate":669},"2011-11-15":{"count":1,"totalToDate":670},"2011-11-16":{"count":3,"totalToDate":673},"2011-11-17":{"count":1,"totalToDate":674},"2011-11-18":{"count":1,"totalToDate":675},"2011-11-19":{"count":4,"totalToDate":679},"2011-11-20":{"count":0,"totalToDate":679},"2011-11-21":{"count":2,"totalToDate":681},"2011-11-22":{"count":1,"totalToDate":682},"2011-11-23":{"count":0,"totalToDate":682},"2011-11-24":{"count":0,"totalToDate":682},"2011-11-25":{"count":0,"totalToDate":682},"2011-11-26":{"count":0,"totalToDate":682},"2011-11-27":{"count":0,"totalToDate":682},"2011-11-28":{"count":10,"totalToDate":692},"2011-11-29":{"count":6,"totalToDate":698},"2011-11-30":{"count":0,"totalToDate":698},"2011-12-01":{"count":0,"totalToDate":698},"2011-12-02":{"count":0,"totalToDate":698},"2011-12-03":{"count":0,"totalToDate":698},"2011-12-04":{"count":0,"totalToDate":698},"2011-12-05":{"count":3,"totalToDate":701},"2011-12-06":{"count":0,"totalToDate":701},"2011-12-07":{"count":0,"totalToDate":701},"2011-12-08":{"count":0,"totalToDate":701},"2011-12-09":{"count":0,"totalToDate":701},"2011-12-10":{"count":0,"totalToDate":701},"2011-12-11":{"count":0,"totalToDate":701},"2011-12-12":{"count":1,"totalToDate":702},"2011-12-13":{"count":0,"totalToDate":702},"2011-12-14":{"count":0,"totalToDate":702},"2011-12-15":{"count":1,"totalToDate":703},"2011-12-16":{"count":0,"totalToDate":703},"2011-12-17":{"count":1,"totalToDate":704},"2011-12-18":{"count":0,"totalToDate":704},"2011-12-19":{"count":0,"totalToDate":704},"2011-12-20":{"count":0,"totalToDate":704},"2011-12-21":{"count":1,"totalToDate":705},"2011-12-22":{"count":1,"totalToDate":706},"2011-12-23":{"count":2,"totalToDate":708},"2011-12-24":{"count":0,"totalToDate":708},"2011-12-25":{"count":0,"totalToDate":708},"2011-12-26":{"count":0,"totalToDate":708},"2011-12-27":{"count":0,"totalToDate":708},"2011-12-28":{"count":0,"totalToDate":708},"2011-12-29":{"count":0,"totalToDate":708},"2011-12-30":{"count":0,"totalToDate":708},"2011-12-31":{"count":0,"totalToDate":708},"2012-01-01":{"count":0,"totalToDate":708},"2012-01-02":{"count":0,"totalToDate":708},"2012-01-03":{"count":0,"totalToDate":708},"2012-01-04":{"count":0,"totalToDate":708},"2012-01-05":{"count":0,"totalToDate":708},"2012-01-06":{"count":0,"totalToDate":708},"2012-01-07":{"count":0,"totalToDate":708},"2012-01-08":{"count":0,"totalToDate":708},"2012-01-09":{"count":0,"totalToDate":708},"2012-01-10":{"count":0,"totalToDate":708},"2012-01-11":{"count":3,"totalToDate":711},"2012-01-12":{"count":4,"totalToDate":715},"2012-01-13":{"count":0,"totalToDate":715},"2012-01-14":{"count":0,"totalToDate":715},"2012-01-15":{"count":0,"totalToDate":715},"2012-01-16":{"count":1,"totalToDate":716},"2012-01-17":{"count":2,"totalToDate":718},"2012-01-18":{"count":0,"totalToDate":718},"2012-01-19":{"count":0,"totalToDate":718},"2012-01-20":{"count":0,"totalToDate":718},"2012-01-21":{"count":1,"totalToDate":719},"2012-01-22":{"count":1,"totalToDate":720},"2012-01-23":{"count":0,"totalToDate":720},"2012-01-24":{"count":0,"totalToDate":720},"2012-01-25":{"count":2,"totalToDate":722},"2012-01-26":{"count":0,"totalToDate":722},"2012-01-27":{"count":0,"totalToDate":722},"2012-01-28":{"count":0,"totalToDate":722},"2012-01-29":{"count":3,"totalToDate":725},"2012-01-30":{"count":2,"totalToDate":727},"2012-01-31":{"count":1,"totalToDate":728},"2012-02-01":{"count":0,"totalToDate":728},"2012-02-02":{"count":2,"totalToDate":730},"2012-02-03":{"count":0,"totalToDate":730},"2012-02-04":{"count":2,"totalToDate":732},"2012-02-05":{"count":5,"totalToDate":737},"2012-02-06":{"count":4,"totalToDate":741},"2012-02-07":{"count":3,"totalToDate":744},"2012-02-08":{"count":2,"totalToDate":746},"2012-02-09":{"count":4,"totalToDate":750},"2012-02-10":{"count":1,"totalToDate":751},"2012-02-11":{"count":0,"totalToDate":751},"2012-02-12":{"count":0,"totalToDate":751},"2012-02-13":{"count":0,"totalToDate":751},"2012-02-14":{"count":0,"totalToDate":751},"2012-02-15":{"count":0,"totalToDate":751},"2012-02-16":{"count":1,"totalToDate":752},"2012-02-17":{"count":2,"totalToDate":754},"2012-02-18":{"count":0,"totalToDate":754},"2012-02-19":{"count":0,"totalToDate":754},"2012-02-20":{"count":0,"totalToDate":754},"2012-02-21":{"count":0,"totalToDate":754},"2012-02-22":{"count":0,"totalToDate":754},"2012-02-23":{"count":2,"totalToDate":756},"2012-02-24":{"count":2,"totalToDate":758},"2012-02-25":{"count":0,"totalToDate":758},"2012-02-26":{"count":0,"totalToDate":758},"2012-02-27":{"count":6,"totalToDate":764},"2012-02-28":{"count":2,"totalToDate":766},"2012-02-29":{"count":0,"totalToDate":766},"2012-03-01":{"count":0,"totalToDate":766},"2012-03-02":{"count":0,"totalToDate":766},"2012-03-03":{"count":0,"totalToDate":766},"2012-03-04":{"count":1,"totalToDate":767},"2012-03-05":{"count":0,"totalToDate":767},"2012-03-06":{"count":2,"totalToDate":769},"2012-03-07":{"count":1,"totalToDate":770},"2012-03-08":{"count":0,"totalToDate":770},"2012-03-09":{"count":0,"totalToDate":770},"2012-03-10":{"count":0,"totalToDate":770},"2012-03-11":{"count":0,"totalToDate":770},"2012-03-12":{"count":0,"totalToDate":770},"2012-03-13":{"count":0,"totalToDate":770},"2012-03-14":{"count":0,"totalToDate":770},"2012-03-15":{"count":0,"totalToDate":770},"2012-03-16":{"count":0,"totalToDate":770},"2012-03-17":{"count":0,"totalToDate":770},"2012-03-18":{"count":0,"totalToDate":770},"2012-03-19":{"count":0,"totalToDate":770},"2012-03-20":{"count":5,"totalToDate":775},"2012-03-21":{"count":0,"totalToDate":775},"2012-03-22":{"count":0,"totalToDate":775},"2012-03-23":{"count":0,"totalToDate":775},"2012-03-24":{"count":0,"totalToDate":775},"2012-03-25":{"count":0,"totalToDate":775},"2012-03-26":{"count":0,"totalToDate":775},"2012-03-27":{"count":0,"totalToDate":775},"2012-03-28":{"count":0,"totalToDate":775},"2012-03-29":{"count":0,"totalToDate":775},"2012-03-30":{"count":0,"totalToDate":775},"2012-03-31":{"count":0,"totalToDate":775},"2012-04-01":{"count":0,"totalToDate":775},"2012-04-02":{"count":1,"totalToDate":776},"2012-04-03":{"count":0,"totalToDate":776},"2012-04-04":{"count":0,"totalToDate":776},"2012-04-05":{"count":0,"totalToDate":776},"2012-04-06":{"count":0,"totalToDate":776},"2012-04-07":{"count":0,"totalToDate":776},"2012-04-08":{"count":1,"totalToDate":777},"2012-04-09":{"count":0,"totalToDate":777},"2012-04-10":{"count":0,"totalToDate":777},"2012-04-11":{"count":0,"totalToDate":777},"2012-04-12":{"count":0,"totalToDate":777},"2012-04-13":{"count":0,"totalToDate":777},"2012-04-14":{"count":0,"totalToDate":777},"2012-04-15":{"count":2,"totalToDate":779},"2012-04-16":{"count":3,"totalToDate":782},"2012-04-17":{"count":0,"totalToDate":782},"2012-04-18":{"count":0,"totalToDate":782},"2012-04-19":{"count":0,"totalToDate":782},"2012-04-20":{"count":1,"totalToDate":783},"2012-04-21":{"count":0,"totalToDate":783},"2012-04-22":{"count":0,"totalToDate":783},"2012-04-23":{"count":0,"totalToDate":783},"2012-04-24":{"count":0,"totalToDate":783},"2012-04-25":{"count":0,"totalToDate":783},"2012-04-26":{"count":0,"totalToDate":783},"2012-04-27":{"count":0,"totalToDate":783},"2012-04-28":{"count":0,"totalToDate":783},"2012-04-29":{"count":0,"totalToDate":783},"2012-04-30":{"count":0,"totalToDate":783},"2012-05-01":{"count":3,"totalToDate":786},"2012-05-02":{"count":0,"totalToDate":786},"2012-05-03":{"count":0,"totalToDate":786},"2012-05-04":{"count":0,"totalToDate":786},"2012-05-05":{"count":0,"totalToDate":786},"2012-05-06":{"count":0,"totalToDate":786},"2012-05-07":{"count":0,"totalToDate":786},"2012-05-08":{"count":0,"totalToDate":786},"2012-05-09":{"count":1,"totalToDate":787},"2012-05-10":{"count":0,"totalToDate":787},"2012-05-11":{"count":3,"totalToDate":790},"2012-05-12":{"count":0,"totalToDate":790},"2012-05-13":{"count":0,"totalToDate":790},"2012-05-14":{"count":2,"totalToDate":792},"2012-05-15":{"count":0,"totalToDate":792},"2012-05-16":{"count":0,"totalToDate":792},"2012-05-17":{"count":4,"totalToDate":796},"2012-05-18":{"count":0,"totalToDate":796},"2012-05-19":{"count":0,"totalToDate":796},"2012-05-20":{"count":0,"totalToDate":796},"2012-05-21":{"count":1,"totalToDate":797},"2012-05-22":{"count":18,"totalToDate":815},"2012-05-23":{"count":0,"totalToDate":815},"2012-05-24":{"count":1,"totalToDate":816},"2012-05-25":{"count":1,"totalToDate":817},"2012-05-26":{"count":0,"totalToDate":817},"2012-05-27":{"count":0,"totalToDate":817},"2012-05-28":{"count":1,"totalToDate":818},"2012-05-29":{"count":1,"totalToDate":819},"2012-05-30":{"count":4,"totalToDate":823},"2012-05-31":{"count":1,"totalToDate":824},"2012-06-01":{"count":1,"totalToDate":825},"2012-06-02":{"count":0,"totalToDate":825},"2012-06-03":{"count":2,"totalToDate":827},"2012-06-04":{"count":1,"totalToDate":828},"2012-06-05":{"count":0,"totalToDate":828},"2012-06-06":{"count":0,"totalToDate":828},"2012-06-07":{"count":0,"totalToDate":828},"2012-06-08":{"count":0,"totalToDate":828},"2012-06-09":{"count":0,"totalToDate":828},"2012-06-10":{"count":0,"totalToDate":828},"2012-06-11":{"count":1,"totalToDate":829},"2012-06-12":{"count":1,"totalToDate":830},"2012-06-13":{"count":1,"totalToDate":831},"2012-06-14":{"count":2,"totalToDate":833},"2012-06-15":{"count":0,"totalToDate":833},"2012-06-16":{"count":0,"totalToDate":833},"2012-06-17":{"count":0,"totalToDate":833},"2012-06-18":{"count":0,"totalToDate":833},"2012-06-19":{"count":1,"totalToDate":834},"2012-06-20":{"count":0,"totalToDate":834},"2012-06-21":{"count":2,"totalToDate":836},"2012-06-22":{"count":0,"totalToDate":836},"2012-06-23":{"count":0,"totalToDate":836},"2012-06-24":{"count":0,"totalToDate":836},"2012-06-25":{"count":0,"totalToDate":836},"2012-06-26":{"count":0,"totalToDate":836},"2012-06-27":{"count":1,"totalToDate":837},"2012-06-28":{"count":0,"totalToDate":837},"2012-06-29":{"count":0,"totalToDate":837},"2012-06-30":{"count":3,"totalToDate":840},"2012-07-01":{"count":2,"totalToDate":842},"2012-07-02":{"count":0,"totalToDate":842},"2012-07-03":{"count":1,"totalToDate":843},"2012-07-04":{"count":0,"totalToDate":843},"2012-07-05":{"count":1,"totalToDate":844},"2012-07-06":{"count":0,"totalToDate":844},"2012-07-07":{"count":4,"totalToDate":848},"2012-07-08":{"count":0,"totalToDate":848},"2012-07-09":{"count":0,"totalToDate":848},"2012-07-10":{"count":2,"totalToDate":850},"2012-07-11":{"count":1,"totalToDate":851},"2012-07-12":{"count":0,"totalToDate":851},"2012-07-13":{"count":2,"totalToDate":853},"2012-07-14":{"count":0,"totalToDate":853},"2012-07-15":{"count":2,"totalToDate":855},"2012-07-16":{"count":7,"totalToDate":862},"2012-07-17":{"count":2,"totalToDate":864},"2012-07-18":{"count":0,"totalToDate":864},"2012-07-19":{"count":3,"totalToDate":867},"2012-07-20":{"count":1,"totalToDate":868},"2012-07-21":{"count":0,"totalToDate":868},"2012-07-22":{"count":0,"totalToDate":868},"2012-07-23":{"count":0,"totalToDate":868},"2012-07-24":{"count":3,"totalToDate":871},"2012-07-25":{"count":1,"totalToDate":872},"2012-07-26":{"count":0,"totalToDate":872},"2012-07-27":{"count":2,"totalToDate":874},"2012-07-28":{"count":0,"totalToDate":874},"2012-07-29":{"count":0,"totalToDate":874},"2012-07-30":{"count":0,"totalToDate":874},"2012-07-31":{"count":0,"totalToDate":874},"2012-08-01":{"count":0,"totalToDate":874},"2012-08-02":{"count":2,"totalToDate":876},"2012-08-03":{"count":0,"totalToDate":876},"2012-08-04":{"count":0,"totalToDate":876},"2012-08-05":{"count":1,"totalToDate":877},"2012-08-06":{"count":0,"totalToDate":877},"2012-08-07":{"count":1,"totalToDate":878},"2012-08-08":{"count":2,"totalToDate":880},"2012-08-09":{"count":1,"totalToDate":881},"2012-08-10":{"count":1,"totalToDate":882},"2012-08-11":{"count":1,"totalToDate":883},"2012-08-12":{"count":0,"totalToDate":883},"2012-08-13":{"count":0,"totalToDate":883},"2012-08-14":{"count":0,"totalToDate":883},"2012-08-15":{"count":1,"totalToDate":884},"2012-08-16":{"count":3,"totalToDate":887},"2012-08-17":{"count":1,"totalToDate":888},"2012-08-18":{"count":0,"totalToDate":888},"2012-08-19":{"count":0,"totalToDate":888},"2012-08-20":{"count":1,"totalToDate":889},"2012-08-21":{"count":4,"totalToDate":893},"2012-08-22":{"count":0,"totalToDate":893},"2012-08-23":{"count":0,"totalToDate":893},"2012-08-24":{"count":4,"totalToDate":897},"2012-08-25":{"count":0,"totalToDate":897},"2012-08-26":{"count":0,"totalToDate":897},"2012-08-27":{"count":2,"totalToDate":899},"2012-08-28":{"count":0,"totalToDate":899},"2012-08-29":{"count":0,"totalToDate":899},"2012-08-30":{"count":2,"totalToDate":901},"2012-08-31":{"count":0,"totalToDate":901},"2012-09-01":{"count":0,"totalToDate":901},"2012-09-02":{"count":0,"totalToDate":901},"2012-09-03":{"count":0,"totalToDate":901},"2012-09-04":{"count":1,"totalToDate":902},"2012-09-05":{"count":0,"totalToDate":902},"2012-09-06":{"count":0,"totalToDate":902},"2012-09-07":{"count":0,"totalToDate":902},"2012-09-08":{"count":0,"totalToDate":902},"2012-09-09":{"count":0,"totalToDate":902},"2012-09-10":{"count":6,"totalToDate":908},"2012-09-11":{"count":0,"totalToDate":908},"2012-09-12":{"count":1,"totalToDate":909},"2012-09-13":{"count":1,"totalToDate":910},"2012-09-14":{"count":0,"totalToDate":910},"2012-09-15":{"count":0,"totalToDate":910},"2012-09-16":{"count":0,"totalToDate":910},"2012-09-17":{"count":1,"totalToDate":911},"2012-09-18":{"count":4,"totalToDate":915},"2012-09-19":{"count":4,"totalToDate":919},"2012-09-20":{"count":0,"totalToDate":919},"2012-09-21":{"count":0,"totalToDate":919},"2012-09-22":{"count":0,"totalToDate":919},"2012-09-23":{"count":0,"totalToDate":919},"2012-09-24":{"count":0,"totalToDate":919},"2012-09-25":{"count":2,"totalToDate":921},"2012-09-26":{"count":0,"totalToDate":921},"2012-09-27":{"count":1,"totalToDate":922},"2012-09-28":{"count":0,"totalToDate":922},"2012-09-29":{"count":0,"totalToDate":922},"2012-09-30":{"count":0,"totalToDate":922},"2012-10-01":{"count":0,"totalToDate":922},"2012-10-02":{"count":0,"totalToDate":922},"2012-10-03":{"count":2,"totalToDate":924},"2012-10-04":{"count":0,"totalToDate":924},"2012-10-05":{"count":0,"totalToDate":924},"2012-10-06":{"count":0,"totalToDate":924},"2012-10-07":{"count":0,"totalToDate":924},"2012-10-08":{"count":1,"totalToDate":925},"2012-10-09":{"count":0,"totalToDate":925},"2012-10-10":{"count":2,"totalToDate":927},"2012-10-11":{"count":5,"totalToDate":932},"2012-10-12":{"count":0,"totalToDate":932},"2012-10-13":{"count":0,"totalToDate":932},"2012-10-14":{"count":0,"totalToDate":932},"2012-10-15":{"count":0,"totalToDate":932},"2012-10-16":{"count":0,"totalToDate":932},"2012-10-17":{"count":1,"totalToDate":933},"2012-10-18":{"count":2,"totalToDate":935},"2012-10-19":{"count":1,"totalToDate":936},"2012-10-20":{"count":0,"totalToDate":936},"2012-10-21":{"count":0,"totalToDate":936},"2012-10-22":{"count":0,"totalToDate":936},"2012-10-23":{"count":0,"totalToDate":936},"2012-10-24":{"count":1,"totalToDate":937},"2012-10-25":{"count":10,"totalToDate":947},"2012-10-26":{"count":6,"totalToDate":953},"2012-10-27":{"count":2,"totalToDate":955},"2012-10-28":{"count":0,"totalToDate":955},"2012-10-29":{"count":0,"totalToDate":955},"2012-10-30":{"count":1,"totalToDate":956},"2012-10-31":{"count":0,"totalToDate":956},"2012-11-01":{"count":1,"totalToDate":957},"2012-11-02":{"count":0,"totalToDate":957},"2012-11-03":{"count":0,"totalToDate":957},"2012-11-04":{"count":0,"totalToDate":957},"2012-11-05":{"count":3,"totalToDate":960},"2012-11-06":{"count":4,"totalToDate":964},"2012-11-07":{"count":5,"totalToDate":969},"2012-11-08":{"count":1,"totalToDate":970},"2012-11-09":{"count":0,"totalToDate":970},"2012-11-10":{"count":0,"totalToDate":970},"2012-11-11":{"count":7,"totalToDate":977},"2012-11-12":{"count":0,"totalToDate":977},"2012-11-13":{"count":1,"totalToDate":978},"2012-11-14":{"count":1,"totalToDate":979},"2012-11-15":{"count":3,"totalToDate":982},"2012-11-16":{"count":0,"totalToDate":982},"2012-11-17":{"count":0,"totalToDate":982},"2012-11-18":{"count":3,"totalToDate":985},"2012-11-19":{"count":2,"totalToDate":987},"2012-11-20":{"count":4,"totalToDate":991},"2012-11-21":{"count":2,"totalToDate":993},"2012-11-22":{"count":0,"totalToDate":993},"2012-11-23":{"count":0,"totalToDate":993},"2012-11-24":{"count":0,"totalToDate":993},"2012-11-25":{"count":0,"totalToDate":993},"2012-11-26":{"count":2,"totalToDate":995},"2012-11-27":{"count":2,"totalToDate":997},"2012-11-28":{"count":0,"totalToDate":997},"2012-11-29":{"count":2,"totalToDate":999},"2012-11-30":{"count":0,"totalToDate":999},"2012-12-01":{"count":1,"totalToDate":1000},"2012-12-02":{"count":1,"totalToDate":1001},"2012-12-03":{"count":1,"totalToDate":1002},"2012-12-04":{"count":0,"totalToDate":1002},"2012-12-05":{"count":0,"totalToDate":1002},"2012-12-06":{"count":0,"totalToDate":1002},"2012-12-07":{"count":3,"totalToDate":1005},"2012-12-08":{"count":1,"totalToDate":1006},"2012-12-09":{"count":0,"totalToDate":1006},"2012-12-10":{"count":1,"totalToDate":1007},"2012-12-11":{"count":3,"totalToDate":1010},"2012-12-12":{"count":0,"totalToDate":1010},"2012-12-13":{"count":2,"totalToDate":1012},"2012-12-14":{"count":2,"totalToDate":1014},"2012-12-15":{"count":0,"totalToDate":1014},"2012-12-16":{"count":2,"totalToDate":1016},"2012-12-17":{"count":3,"totalToDate":1019},"2012-12-18":{"count":4,"totalToDate":1023},"2012-12-19":{"count":0,"totalToDate":1023},"2012-12-20":{"count":3,"totalToDate":1026},"2012-12-21":{"count":0,"totalToDate":1026},"2012-12-22":{"count":0,"totalToDate":1026},"2012-12-23":{"count":0,"totalToDate":1026},"2012-12-24":{"count":0,"totalToDate":1026},"2012-12-25":{"count":0,"totalToDate":1026},"2012-12-26":{"count":0,"totalToDate":1026},"2012-12-27":{"count":0,"totalToDate":1026},"2012-12-28":{"count":4,"totalToDate":1030},"2012-12-29":{"count":0,"totalToDate":1030},"2012-12-30":{"count":0,"totalToDate":1030},"2012-12-31":{"count":0,"totalToDate":1030},"2013-01-01":{"count":0,"totalToDate":1030},"2013-01-02":{"count":0,"totalToDate":1030},"2013-01-03":{"count":6,"totalToDate":1036},"2013-01-04":{"count":5,"totalToDate":1041},"2013-01-05":{"count":0,"totalToDate":1041},"2013-01-06":{"count":0,"totalToDate":1041},"2013-01-07":{"count":0,"totalToDate":1041},"2013-01-08":{"count":5,"totalToDate":1046},"2013-01-09":{"count":2,"totalToDate":1048},"2013-01-10":{"count":0,"totalToDate":1048},"2013-01-11":{"count":1,"totalToDate":1049},"2013-01-12":{"count":0,"totalToDate":1049},"2013-01-13":{"count":1,"totalToDate":1050},"2013-01-14":{"count":0,"totalToDate":1050},"2013-01-15":{"count":0,"totalToDate":1050},"2013-01-16":{"count":5,"totalToDate":1055},"2013-01-17":{"count":4,"totalToDate":1059},"2013-01-18":{"count":1,"totalToDate":1060},"2013-01-19":{"count":0,"totalToDate":1060},"2013-01-20":{"count":0,"totalToDate":1060},"2013-01-21":{"count":2,"totalToDate":1062},"2013-01-22":{"count":1,"totalToDate":1063},"2013-01-23":{"count":0,"totalToDate":1063},"2013-01-24":{"count":0,"totalToDate":1063},"2013-01-25":{"count":1,"totalToDate":1064},"2013-01-26":{"count":0,"totalToDate":1064},"2013-01-27":{"count":0,"totalToDate":1064},"2013-01-28":{"count":1,"totalToDate":1065},"2013-01-29":{"count":1,"totalToDate":1066},"2013-01-30":{"count":0,"totalToDate":1066},"2013-01-31":{"count":1,"totalToDate":1067},"2013-02-01":{"count":2,"totalToDate":1069},"2013-02-02":{"count":0,"totalToDate":1069},"2013-02-03":{"count":0,"totalToDate":1069},"2013-02-04":{"count":0,"totalToDate":1069},"2013-02-05":{"count":0,"totalToDate":1069},"2013-02-06":{"count":1,"totalToDate":1070},"2013-02-07":{"count":0,"totalToDate":1070},"2013-02-08":{"count":1,"totalToDate":1071},"2013-02-09":{"count":0,"totalToDate":1071},"2013-02-10":{"count":0,"totalToDate":1071},"2013-02-11":{"count":3,"totalToDate":1074},"2013-02-12":{"count":3,"totalToDate":1077},"2013-02-13":{"count":0,"totalToDate":1077},"2013-02-14":{"count":6,"totalToDate":1083},"2013-02-15":{"count":0,"totalToDate":1083},"2013-02-16":{"count":1,"totalToDate":1084},"2013-02-17":{"count":0,"totalToDate":1084},"2013-02-18":{"count":0,"totalToDate":1084},"2013-02-19":{"count":3,"totalToDate":1087},"2013-02-20":{"count":1,"totalToDate":1088},"2013-02-21":{"count":8,"totalToDate":1096},"2013-02-22":{"count":4,"totalToDate":1100},"2013-02-23":{"count":1,"totalToDate":1101},"2013-02-24":{"count":5,"totalToDate":1106},"2013-02-25":{"count":0,"totalToDate":1106},"2013-02-26":{"count":1,"totalToDate":1107},"2013-02-27":{"count":1,"totalToDate":1108},"2013-02-28":{"count":1,"totalToDate":1109},"2013-03-01":{"count":4,"totalToDate":1113},"2013-03-02":{"count":0,"totalToDate":1113},"2013-03-03":{"count":2,"totalToDate":1115},"2013-03-04":{"count":1,"totalToDate":1116},"2013-03-05":{"count":0,"totalToDate":1116},"2013-03-06":{"count":0,"totalToDate":1116},"2013-03-07":{"count":0,"totalToDate":1116},"2013-03-08":{"count":0,"totalToDate":1116},"2013-03-09":{"count":0,"totalToDate":1116},"2013-03-10":{"count":1,"totalToDate":1117},"2013-03-11":{"count":5,"totalToDate":1122},"2013-03-12":{"count":1,"totalToDate":1123},"2013-03-13":{"count":0,"totalToDate":1123},"2013-03-14":{"count":4,"totalToDate":1127},"2013-03-15":{"count":0,"totalToDate":1127},"2013-03-16":{"count":0,"totalToDate":1127},"2013-03-17":{"count":0,"totalToDate":1127},"2013-03-18":{"count":0,"totalToDate":1127},"2013-03-19":{"count":0,"totalToDate":1127},"2013-03-20":{"count":0,"totalToDate":1127},"2013-03-21":{"count":6,"totalToDate":1133},"2013-03-22":{"count":0,"totalToDate":1133},"2013-03-23":{"count":0,"totalToDate":1133},"2013-03-24":{"count":0,"totalToDate":1133},"2013-03-25":{"count":0,"totalToDate":1133},"2013-03-26":{"count":3,"totalToDate":1136},"2013-03-27":{"count":0,"totalToDate":1136},"2013-03-28":{"count":0,"totalToDate":1136},"2013-03-29":{"count":1,"totalToDate":1137},"2013-03-30":{"count":0,"totalToDate":1137},"2013-03-31":{"count":0,"totalToDate":1137},"2013-04-01":{"count":4,"totalToDate":1141},"2013-04-02":{"count":0,"totalToDate":1141},"2013-04-03":{"count":1,"totalToDate":1142},"2013-04-04":{"count":2,"totalToDate":1144},"2013-04-05":{"count":1,"totalToDate":1145},"2013-04-06":{"count":0,"totalToDate":1145},"2013-04-07":{"count":0,"totalToDate":1145},"2013-04-08":{"count":0,"totalToDate":1145},"2013-04-09":{"count":2,"totalToDate":1147},"2013-04-10":{"count":2,"totalToDate":1149},"2013-04-11":{"count":1,"totalToDate":1150},"2013-04-12":{"count":1,"totalToDate":1151},"2013-04-13":{"count":0,"totalToDate":1151},"2013-04-14":{"count":0,"totalToDate":1151},"2013-04-15":{"count":4,"totalToDate":1155},"2013-04-16":{"count":0,"totalToDate":1155},"2013-04-17":{"count":0,"totalToDate":1155},"2013-04-18":{"count":1,"totalToDate":1156},"2013-04-19":{"count":1,"totalToDate":1157},"2013-04-20":{"count":0,"totalToDate":1157},"2013-04-21":{"count":3,"totalToDate":1160},"2013-04-22":{"count":0,"totalToDate":1160},"2013-04-23":{"count":0,"totalToDate":1160},"2013-04-24":{"count":1,"totalToDate":1161},"2013-04-25":{"count":1,"totalToDate":1162},"2013-04-26":{"count":0,"totalToDate":1162},"2013-04-27":{"count":0,"totalToDate":1162},"2013-04-28":{"count":0,"totalToDate":1162},"2013-04-29":{"count":4,"totalToDate":1166},"2013-04-30":{"count":0,"totalToDate":1166},"2013-05-01":{"count":1,"totalToDate":1167},"2013-05-02":{"count":0,"totalToDate":1167},"2013-05-03":{"count":7,"totalToDate":1174},"2013-05-04":{"count":5,"totalToDate":1179},"2013-05-05":{"count":0,"totalToDate":1179},"2013-05-06":{"count":2,"totalToDate":1181},"2013-05-07":{"count":0,"totalToDate":1181},"2013-05-08":{"count":2,"totalToDate":1183},"2013-05-09":{"count":3,"totalToDate":1186},"2013-05-10":{"count":1,"totalToDate":1187},"2013-05-11":{"count":0,"totalToDate":1187},"2013-05-12":{"count":0,"totalToDate":1187},"2013-05-13":{"count":0,"totalToDate":1187},"2013-05-14":{"count":1,"totalToDate":1188},"2013-05-15":{"count":2,"totalToDate":1190},"2013-05-16":{"count":2,"totalToDate":1192},"2013-05-17":{"count":0,"totalToDate":1192},"2013-05-18":{"count":0,"totalToDate":1192},"2013-05-19":{"count":0,"totalToDate":1192},"2013-05-20":{"count":5,"totalToDate":1197},"2013-05-21":{"count":1,"totalToDate":1198},"2013-05-22":{"count":0,"totalToDate":1198},"2013-05-23":{"count":0,"totalToDate":1198},"2013-05-24":{"count":0,"totalToDate":1198},"2013-05-25":{"count":0,"totalToDate":1198},"2013-05-26":{"count":0,"totalToDate":1198},"2013-05-27":{"count":1,"totalToDate":1199},"2013-05-28":{"count":0,"totalToDate":1199},"2013-05-29":{"count":1,"totalToDate":1200},"2013-05-30":{"count":0,"totalToDate":1200},"2013-05-31":{"count":0,"totalToDate":1200},"2013-06-01":{"count":1,"totalToDate":1201},"2013-06-02":{"count":0,"totalToDate":1201},"2013-06-03":{"count":6,"totalToDate":1207},"2013-06-04":{"count":0,"totalToDate":1207},"2013-06-05":{"count":1,"totalToDate":1208},"2013-06-06":{"count":0,"totalToDate":1208},"2013-06-07":{"count":2,"totalToDate":1210},"2013-06-08":{"count":0,"totalToDate":1210},"2013-06-09":{"count":1,"totalToDate":1211},"2013-06-10":{"count":2,"totalToDate":1213},"2013-06-11":{"count":1,"totalToDate":1214},"2013-06-12":{"count":4,"totalToDate":1218},"2013-06-13":{"count":2,"totalToDate":1220},"2013-06-14":{"count":4,"totalToDate":1224},"2013-06-15":{"count":0,"totalToDate":1224},"2013-06-16":{"count":0,"totalToDate":1224},"2013-06-17":{"count":1,"totalToDate":1225},"2013-06-18":{"count":0,"totalToDate":1225},"2013-06-19":{"count":1,"totalToDate":1226},"2013-06-20":{"count":0,"totalToDate":1226},"2013-06-21":{"count":0,"totalToDate":1226},"2013-06-22":{"count":1,"totalToDate":1227},"2013-06-23":{"count":0,"totalToDate":1227},"2013-06-24":{"count":1,"totalToDate":1228},"2013-06-25":{"count":0,"totalToDate":1228},"2013-06-26":{"count":1,"totalToDate":1229},"2013-06-27":{"count":0,"totalToDate":1229},"2013-06-28":{"count":0,"totalToDate":1229},"2013-06-29":{"count":0,"totalToDate":1229},"2013-06-30":{"count":0,"totalToDate":1229},"2013-07-01":{"count":1,"totalToDate":1230},"2013-07-02":{"count":1,"totalToDate":1231},"2013-07-03":{"count":3,"totalToDate":1234},"2013-07-04":{"count":0,"totalToDate":1234},"2013-07-05":{"count":0,"totalToDate":1234},"2013-07-06":{"count":2,"totalToDate":1236},"2013-07-07":{"count":0,"totalToDate":1236},"2013-07-08":{"count":1,"totalToDate":1237},"2013-07-09":{"count":0,"totalToDate":1237},"2013-07-10":{"count":1,"totalToDate":1238},"2013-07-11":{"count":3,"totalToDate":1241},"2013-07-12":{"count":0,"totalToDate":1241},"2013-07-13":{"count":0,"totalToDate":1241},"2013-07-14":{"count":0,"totalToDate":1241},"2013-07-15":{"count":1,"totalToDate":1242},"2013-07-16":{"count":0,"totalToDate":1242},"2013-07-17":{"count":0,"totalToDate":1242},"2013-07-18":{"count":0,"totalToDate":1242},"2013-07-19":{"count":1,"totalToDate":1243},"2013-07-20":{"count":0,"totalToDate":1243},"2013-07-21":{"count":0,"totalToDate":1243},"2013-07-22":{"count":1,"totalToDate":1244},"2013-07-23":{"count":3,"totalToDate":1247},"2013-07-24":{"count":1,"totalToDate":1248},"2013-07-25":{"count":2,"totalToDate":1250},"2013-07-26":{"count":5,"totalToDate":1255},"2013-07-27":{"count":0,"totalToDate":1255},"2013-07-28":{"count":0,"totalToDate":1255},"2013-07-29":{"count":1,"totalToDate":1256},"2013-07-30":{"count":3,"totalToDate":1259},"2013-07-31":{"count":2,"totalToDate":1261},"2013-08-01":{"count":0,"totalToDate":1261},"2013-08-02":{"count":0,"totalToDate":1261},"2013-08-03":{"count":0,"totalToDate":1261},"2013-08-04":{"count":0,"totalToDate":1261},"2013-08-05":{"count":1,"totalToDate":1262},"2013-08-06":{"count":1,"totalToDate":1263},"2013-08-07":{"count":0,"totalToDate":1263},"2013-08-08":{"count":3,"totalToDate":1266},"2013-08-09":{"count":0,"totalToDate":1266},"2013-08-10":{"count":0,"totalToDate":1266},"2013-08-11":{"count":0,"totalToDate":1266},"2013-08-12":{"count":2,"totalToDate":1268},"2013-08-13":{"count":1,"totalToDate":1269},"2013-08-14":{"count":4,"totalToDate":1273},"2013-08-15":{"count":2,"totalToDate":1275},"2013-08-16":{"count":2,"totalToDate":1277},"2013-08-17":{"count":0,"totalToDate":1277},"2013-08-18":{"count":0,"totalToDate":1277},"2013-08-19":{"count":0,"totalToDate":1277},"2013-08-20":{"count":0,"totalToDate":1277},"2013-08-21":{"count":4,"totalToDate":1281},"2013-08-22":{"count":0,"totalToDate":1281},"2013-08-23":{"count":1,"totalToDate":1282},"2013-08-24":{"count":0,"totalToDate":1282},"2013-08-25":{"count":0,"totalToDate":1282},"2013-08-26":{"count":2,"totalToDate":1284},"2013-08-27":{"count":0,"totalToDate":1284},"2013-08-28":{"count":1,"totalToDate":1285},"2013-08-29":{"count":0,"totalToDate":1285},"2013-08-30":{"count":0,"totalToDate":1285},"2013-08-31":{"count":0,"totalToDate":1285},"2013-09-01":{"count":0,"totalToDate":1285},"2013-09-02":{"count":0,"totalToDate":1285},"2013-09-03":{"count":0,"totalToDate":1285},"2013-09-04":{"count":0,"totalToDate":1285},"2013-09-05":{"count":0,"totalToDate":1285},"2013-09-06":{"count":0,"totalToDate":1285},"2013-09-07":{"count":0,"totalToDate":1285},"2013-09-08":{"count":2,"totalToDate":1287},"2013-09-09":{"count":0,"totalToDate":1287},"2013-09-10":{"count":0,"totalToDate":1287},"2013-09-11":{"count":0,"totalToDate":1287},"2013-09-12":{"count":2,"totalToDate":1289},"2013-09-13":{"count":1,"totalToDate":1290},"2013-09-14":{"count":0,"totalToDate":1290},"2013-09-15":{"count":0,"totalToDate":1290},"2013-09-16":{"count":0,"totalToDate":1290},"2013-09-17":{"count":4,"totalToDate":1294},"2013-09-18":{"count":1,"totalToDate":1295},"2013-09-19":{"count":2,"totalToDate":1297},"2013-09-20":{"count":2,"totalToDate":1299},"2013-09-21":{"count":0,"totalToDate":1299},"2013-09-22":{"count":0,"totalToDate":1299},"2013-09-23":{"count":0,"totalToDate":1299},"2013-09-24":{"count":1,"totalToDate":1300},"2013-09-25":{"count":1,"totalToDate":1301},"2013-09-26":{"count":0,"totalToDate":1301},"2013-09-27":{"count":0,"totalToDate":1301},"2013-09-28":{"count":0,"totalToDate":1301},"2013-09-29":{"count":0,"totalToDate":1301},"2013-09-30":{"count":0,"totalToDate":1301},"2013-10-01":{"count":3,"totalToDate":1304},"2013-10-02":{"count":3,"totalToDate":1307},"2013-10-03":{"count":4,"totalToDate":1311},"2013-10-04":{"count":1,"totalToDate":1312},"2013-10-05":{"count":0,"totalToDate":1312},"2013-10-06":{"count":1,"totalToDate":1313},"2013-10-07":{"count":0,"totalToDate":1313},"2013-10-08":{"count":0,"totalToDate":1313},"2013-10-09":{"count":0,"totalToDate":1313},"2013-10-10":{"count":2,"totalToDate":1315},"2013-10-11":{"count":6,"totalToDate":1321},"2013-10-12":{"count":0,"totalToDate":1321},"2013-10-13":{"count":0,"totalToDate":1321},"2013-10-14":{"count":1,"totalToDate":1322},"2013-10-15":{"count":0,"totalToDate":1322},"2013-10-16":{"count":2,"totalToDate":1324},"2013-10-17":{"count":2,"totalToDate":1326},"2013-10-18":{"count":1,"totalToDate":1327},"2013-10-19":{"count":1,"totalToDate":1328},"2013-10-20":{"count":1,"totalToDate":1329},"2013-10-21":{"count":0,"totalToDate":1329},"2013-10-22":{"count":6,"totalToDate":1335},"2013-10-23":{"count":2,"totalToDate":1337},"2013-10-24":{"count":2,"totalToDate":1339},"2013-10-25":{"count":2,"totalToDate":1341},"2013-10-26":{"count":0,"totalToDate":1341},"2013-10-27":{"count":1,"totalToDate":1342},"2013-10-28":{"count":2,"totalToDate":1344},"2013-10-29":{"count":1,"totalToDate":1345},"2013-10-30":{"count":3,"totalToDate":1348},"2013-10-31":{"count":2,"totalToDate":1350},"2013-11-01":{"count":0,"totalToDate":1350},"2013-11-02":{"count":0,"totalToDate":1350},"2013-11-03":{"count":0,"totalToDate":1350},"2013-11-04":{"count":1,"totalToDate":1351},"2013-11-05":{"count":0,"totalToDate":1351},"2013-11-06":{"count":1,"totalToDate":1352},"2013-11-07":{"count":7,"totalToDate":1359},"2013-11-08":{"count":5,"totalToDate":1364},"2013-11-09":{"count":0,"totalToDate":1364},"2013-11-10":{"count":0,"totalToDate":1364},"2013-11-11":{"count":2,"totalToDate":1366},"2013-11-12":{"count":4,"totalToDate":1370},"2013-11-13":{"count":2,"totalToDate":1372},"2013-11-14":{"count":3,"totalToDate":1375},"2013-11-15":{"count":6,"totalToDate":1381},"2013-11-16":{"count":0,"totalToDate":1381},"2013-11-17":{"count":0,"totalToDate":1381},"2013-11-18":{"count":5,"totalToDate":1386},"2013-11-19":{"count":6,"totalToDate":1392},"2013-11-20":{"count":4,"totalToDate":1396},"2013-11-21":{"count":4,"totalToDate":1400},"2013-11-22":{"count":4,"totalToDate":1404},"2013-11-23":{"count":2,"totalToDate":1406},"2013-11-24":{"count":2,"totalToDate":1408},"2013-11-25":{"count":2,"totalToDate":1410},"2013-11-26":{"count":0,"totalToDate":1410},"2013-11-27":{"count":0,"totalToDate":1410},"2013-11-28":{"count":0,"totalToDate":1410},"2013-11-29":{"count":0,"totalToDate":1410},"2013-11-30":{"count":0,"totalToDate":1410},"2013-12-01":{"count":6,"totalToDate":1416},"2013-12-02":{"count":2,"totalToDate":1418},"2013-12-03":{"count":5,"totalToDate":1423},"2013-12-04":{"count":5,"totalToDate":1428},"2013-12-05":{"count":2,"totalToDate":1430},"2013-12-06":{"count":2,"totalToDate":1432},"2013-12-07":{"count":2,"totalToDate":1434},"2013-12-08":{"count":0,"totalToDate":1434},"2013-12-09":{"count":3,"totalToDate":1437},"2013-12-10":{"count":2,"totalToDate":1439},"2013-12-11":{"count":1,"totalToDate":1440},"2013-12-12":{"count":1,"totalToDate":1441},"2013-12-13":{"count":0,"totalToDate":1441},"2013-12-14":{"count":1,"totalToDate":1442},"2013-12-15":{"count":0,"totalToDate":1442},"2013-12-16":{"count":0,"totalToDate":1442},"2013-12-17":{"count":3,"totalToDate":1445},"2013-12-18":{"count":3,"totalToDate":1448},"2013-12-19":{"count":0,"totalToDate":1448},"2013-12-20":{"count":3,"totalToDate":1451},"2013-12-21":{"count":0,"totalToDate":1451},"2013-12-22":{"count":0,"totalToDate":1451},"2013-12-23":{"count":0,"totalToDate":1451},"2013-12-24":{"count":0,"totalToDate":1451},"2013-12-25":{"count":0,"totalToDate":1451},"2013-12-26":{"count":1,"totalToDate":1452},"2013-12-27":{"count":2,"totalToDate":1454},"2013-12-28":{"count":4,"totalToDate":1458},"2013-12-29":{"count":3,"totalToDate":1461},"2013-12-30":{"count":2,"totalToDate":1463},"2013-12-31":{"count":0,"totalToDate":1463},"2014-01-01":{"count":1,"totalToDate":1464},"2014-01-02":{"count":1,"totalToDate":1465},"2014-01-03":{"count":6,"totalToDate":1471},"2014-01-04":{"count":4,"totalToDate":1475},"2014-01-05":{"count":0,"totalToDate":1475},"2014-01-06":{"count":2,"totalToDate":1477},"2014-01-07":{"count":5,"totalToDate":1482},"2014-01-08":{"count":4,"totalToDate":1486},"2014-01-09":{"count":1,"totalToDate":1487},"2014-01-10":{"count":3,"totalToDate":1490},"2014-01-11":{"count":0,"totalToDate":1490},"2014-01-12":{"count":0,"totalToDate":1490},"2014-01-13":{"count":0,"totalToDate":1490},"2014-01-14":{"count":0,"totalToDate":1490},"2014-01-15":{"count":1,"totalToDate":1491},"2014-01-16":{"count":0,"totalToDate":1491},"2014-01-17":{"count":0,"totalToDate":1491},"2014-01-18":{"count":0,"totalToDate":1491},"2014-01-19":{"count":1,"totalToDate":1492},"2014-01-20":{"count":2,"totalToDate":1494},"2014-01-21":{"count":6,"totalToDate":1500},"2014-01-22":{"count":0,"totalToDate":1500},"2014-01-23":{"count":5,"totalToDate":1505},"2014-01-24":{"count":3,"totalToDate":1508},"2014-01-25":{"count":0,"totalToDate":1508},"2014-01-26":{"count":2,"totalToDate":1510},"2014-01-27":{"count":5,"totalToDate":1515},"2014-01-28":{"count":2,"totalToDate":1517},"2014-01-29":{"count":2,"totalToDate":1519},"2014-01-30":{"count":2,"totalToDate":1521},"2014-01-31":{"count":1,"totalToDate":1522},"2014-02-01":{"count":1,"totalToDate":1523},"2014-02-02":{"count":2,"totalToDate":1525},"2014-02-03":{"count":6,"totalToDate":1531},"2014-02-04":{"count":9,"totalToDate":1540},"2014-02-05":{"count":2,"totalToDate":1542},"2014-02-06":{"count":0,"totalToDate":1542},"2014-02-07":{"count":3,"totalToDate":1545},"2014-02-08":{"count":0,"totalToDate":1545},"2014-02-09":{"count":1,"totalToDate":1546},"2014-02-10":{"count":7,"totalToDate":1553},"2014-02-11":{"count":2,"totalToDate":1555},"2014-02-12":{"count":2,"totalToDate":1557},"2014-02-13":{"count":4,"totalToDate":1561},"2014-02-14":{"count":6,"totalToDate":1567},"2014-02-15":{"count":2,"totalToDate":1569},"2014-02-16":{"count":0,"totalToDate":1569},"2014-02-17":{"count":2,"totalToDate":1571},"2014-02-18":{"count":8,"totalToDate":1579},"2014-02-19":{"count":7,"totalToDate":1586},"2014-02-20":{"count":0,"totalToDate":1586},"2014-02-21":{"count":1,"totalToDate":1587},"2014-02-22":{"count":0,"totalToDate":1587},"2014-02-23":{"count":0,"totalToDate":1587},"2014-02-24":{"count":2,"totalToDate":1589},"2014-02-25":{"count":2,"totalToDate":1591},"2014-02-26":{"count":6,"totalToDate":1597},"2014-02-27":{"count":37,"totalToDate":1634},"2014-02-28":{"count":0,"totalToDate":1634},"2014-03-01":{"count":0,"totalToDate":1634},"2014-03-02":{"count":34,"totalToDate":1668},"2014-03-03":{"count":34,"totalToDate":1702},"2014-03-04":{"count":6,"totalToDate":1708},"2014-03-05":{"count":2,"totalToDate":1710},"2014-03-06":{"count":6,"totalToDate":1716},"2014-03-07":{"count":0,"totalToDate":1716},"2014-03-08":{"count":0,"totalToDate":1716},"2014-03-09":{"count":0,"totalToDate":1716},"2014-03-10":{"count":0,"totalToDate":1716},"2014-03-11":{"count":6,"totalToDate":1722},"2014-03-12":{"count":4,"totalToDate":1726},"2014-03-13":{"count":4,"totalToDate":1730},"2014-03-14":{"count":25,"totalToDate":1755},"2014-03-15":{"count":0,"totalToDate":1755},"2014-03-16":{"count":1,"totalToDate":1756},"2014-03-17":{"count":4,"totalToDate":1760},"2014-03-18":{"count":7,"totalToDate":1767},"2014-03-19":{"count":4,"totalToDate":1771},"2014-03-20":{"count":7,"totalToDate":1778},"2014-03-21":{"count":3,"totalToDate":1781},"2014-03-22":{"count":0,"totalToDate":1781},"2014-03-23":{"count":0,"totalToDate":1781},"2014-03-24":{"count":2,"totalToDate":1783},"2014-03-25":{"count":3,"totalToDate":1786},"2014-03-26":{"count":5,"totalToDate":1791},"2014-03-27":{"count":1,"totalToDate":1792},"2014-03-28":{"count":2,"totalToDate":1794},"2014-03-29":{"count":0,"totalToDate":1794},"2014-03-30":{"count":0,"totalToDate":1794},"2014-03-31":{"count":4,"totalToDate":1798},"2014-04-01":{"count":3,"totalToDate":1801},"2014-04-02":{"count":3,"totalToDate":1804},"2014-04-03":{"count":3,"totalToDate":1807},"2014-04-04":{"count":2,"totalToDate":1809},"2014-04-05":{"count":0,"totalToDate":1809},"2014-04-06":{"count":0,"totalToDate":1809},"2014-04-07":{"count":1,"totalToDate":1810},"2014-04-08":{"count":2,"totalToDate":1812},"2014-04-09":{"count":0,"totalToDate":1812},"2014-04-10":{"count":2,"totalToDate":1814},"2014-04-11":{"count":1,"totalToDate":1815},"2014-04-12":{"count":0,"totalToDate":1815},"2014-04-13":{"count":3,"totalToDate":1818},"2014-04-14":{"count":0,"totalToDate":1818},"2014-04-15":{"count":1,"totalToDate":1819},"2014-04-16":{"count":1,"totalToDate":1820},"2014-04-17":{"count":4,"totalToDate":1824},"2014-04-18":{"count":6,"totalToDate":1830},"2014-04-19":{"count":3,"totalToDate":1833},"2014-04-20":{"count":2,"totalToDate":1835},"2014-04-21":{"count":7,"totalToDate":1842},"2014-04-22":{"count":0,"totalToDate":1842},"2014-04-23":{"count":0,"totalToDate":1842},"2014-04-24":{"count":1,"totalToDate":1843},"2014-04-25":{"count":1,"totalToDate":1844},"2014-04-26":{"count":0,"totalToDate":1844},"2014-04-27":{"count":0,"totalToDate":1844},"2014-04-28":{"count":0,"totalToDate":1844},"2014-04-29":{"count":0,"totalToDate":1844},"2014-04-30":{"count":1,"totalToDate":1845},"2014-05-01":{"count":0,"totalToDate":1845},"2014-05-02":{"count":0,"totalToDate":1845},"2014-05-03":{"count":0,"totalToDate":1845},"2014-05-04":{"count":1,"totalToDate":1846},"2014-05-05":{"count":2,"totalToDate":1848},"2014-05-06":{"count":0,"totalToDate":1848},"2014-05-07":{"count":2,"totalToDate":1850},"2014-05-08":{"count":0,"totalToDate":1850},"2014-05-09":{"count":0,"totalToDate":1850},"2014-05-10":{"count":1,"totalToDate":1851},"2014-05-11":{"count":0,"totalToDate":1851},"2014-05-12":{"count":5,"totalToDate":1856},"2014-05-13":{"count":1,"totalToDate":1857},"2014-05-14":{"count":1,"totalToDate":1858},"2014-05-15":{"count":1,"totalToDate":1859},"2014-05-16":{"count":1,"totalToDate":1860},"2014-05-17":{"count":0,"totalToDate":1860},"2014-05-18":{"count":2,"totalToDate":1862},"2014-05-19":{"count":2,"totalToDate":1864},"2014-05-20":{"count":13,"totalToDate":1877},"2014-05-21":{"count":4,"totalToDate":1881},"2014-05-22":{"count":5,"totalToDate":1886},"2014-05-23":{"count":20,"totalToDate":1906},"2014-05-24":{"count":2,"totalToDate":1908},"2014-05-25":{"count":0,"totalToDate":1908},"2014-05-26":{"count":5,"totalToDate":1913},"2014-05-27":{"count":5,"totalToDate":1918},"2014-05-28":{"count":2,"totalToDate":1920},"2014-05-29":{"count":4,"totalToDate":1924},"2014-05-30":{"count":2,"totalToDate":1926},"2014-05-31":{"count":1,"totalToDate":1927},"2014-06-01":{"count":1,"totalToDate":1928},"2014-06-02":{"count":1,"totalToDate":1929},"2014-06-03":{"count":0,"totalToDate":1929},"2014-06-04":{"count":1,"totalToDate":1930},"2014-06-05":{"count":0,"totalToDate":1930},"2014-06-06":{"count":0,"totalToDate":1930},"2014-06-07":{"count":1,"totalToDate":1931},"2014-06-08":{"count":0,"totalToDate":1931},"2014-06-09":{"count":0,"totalToDate":1931},"2014-06-10":{"count":2,"totalToDate":1933},"2014-06-11":{"count":6,"totalToDate":1939},"2014-06-12":{"count":8,"totalToDate":1947},"2014-06-13":{"count":0,"totalToDate":1947},"2014-06-14":{"count":0,"totalToDate":1947},"2014-06-15":{"count":0,"totalToDate":1947},"2014-06-16":{"count":7,"totalToDate":1954},"2014-06-17":{"count":3,"totalToDate":1957},"2014-06-18":{"count":0,"totalToDate":1957},"2014-06-19":{"count":0,"totalToDate":1957},"2014-06-20":{"count":0,"totalToDate":1957},"2014-06-21":{"count":0,"totalToDate":1957},"2014-06-22":{"count":0,"totalToDate":1957},"2014-06-23":{"count":5,"totalToDate":1962},"2014-06-24":{"count":1,"totalToDate":1963},"2014-06-25":{"count":1,"totalToDate":1964},"2014-06-26":{"count":0,"totalToDate":1964},"2014-06-27":{"count":0,"totalToDate":1964},"2014-06-28":{"count":0,"totalToDate":1964},"2014-06-29":{"count":1,"totalToDate":1965},"2014-06-30":{"count":50,"totalToDate":2015},"2014-07-01":{"count":2,"totalToDate":2017},"2014-07-02":{"count":6,"totalToDate":2023},"2014-07-03":{"count":17,"totalToDate":2040},"2014-07-04":{"count":0,"totalToDate":2040},"2014-07-05":{"count":0,"totalToDate":2040},"2014-07-06":{"count":0,"totalToDate":2040},"2014-07-07":{"count":0,"totalToDate":2040},"2014-07-08":{"count":4,"totalToDate":2044},"2014-07-09":{"count":6,"totalToDate":2050},"2014-07-10":{"count":7,"totalToDate":2057},"2014-07-11":{"count":1,"totalToDate":2058},"2014-07-12":{"count":0,"totalToDate":2058},"2014-07-13":{"count":0,"totalToDate":2058},"2014-07-14":{"count":4,"totalToDate":2062},"2014-07-15":{"count":5,"totalToDate":2067},"2014-07-16":{"count":2,"totalToDate":2069},"2014-07-17":{"count":7,"totalToDate":2076},"2014-07-18":{"count":1,"totalToDate":2077},"2014-07-19":{"count":0,"totalToDate":2077},"2014-07-20":{"count":0,"totalToDate":2077},"2014-07-21":{"count":4,"totalToDate":2081},"2014-07-22":{"count":2,"totalToDate":2083},"2014-07-23":{"count":3,"totalToDate":2086},"2014-07-24":{"count":3,"totalToDate":2089},"2014-07-25":{"count":1,"totalToDate":2090},"2014-07-26":{"count":0,"totalToDate":2090},"2014-07-27":{"count":0,"totalToDate":2090},"2014-07-28":{"count":0,"totalToDate":2090},"2014-07-29":{"count":2,"totalToDate":2092},"2014-07-30":{"count":1,"totalToDate":2093},"2014-07-31":{"count":2,"totalToDate":2095},"2014-08-01":{"count":0,"totalToDate":2095},"2014-08-02":{"count":0,"totalToDate":2095},"2014-08-03":{"count":0,"totalToDate":2095},"2014-08-04":{"count":0,"totalToDate":2095},"2014-08-05":{"count":0,"totalToDate":2095},"2014-08-06":{"count":0,"totalToDate":2095},"2014-08-07":{"count":0,"totalToDate":2095},"2014-08-08":{"count":0,"totalToDate":2095},"2014-08-09":{"count":3,"totalToDate":2098},"2014-08-10":{"count":0,"totalToDate":2098},"2014-08-11":{"count":6,"totalToDate":2104},"2014-08-12":{"count":7,"totalToDate":2111},"2014-08-13":{"count":12,"totalToDate":2123},"2014-08-14":{"count":6,"totalToDate":2129},"2014-08-15":{"count":1,"totalToDate":2130},"2014-08-16":{"count":2,"totalToDate":2132},"2014-08-17":{"count":0,"totalToDate":2132},"2014-08-18":{"count":6,"totalToDate":2138},"2014-08-19":{"count":0,"totalToDate":2138},"2014-08-20":{"count":0,"totalToDate":2138},"2014-08-21":{"count":0,"totalToDate":2138},"2014-08-22":{"count":3,"totalToDate":2141},"2014-08-23":{"count":2,"totalToDate":2143},"2014-08-24":{"count":0,"totalToDate":2143},"2014-08-25":{"count":0,"totalToDate":2143},"2014-08-26":{"count":0,"totalToDate":2143},"2014-08-27":{"count":16,"totalToDate":2159},"2014-08-28":{"count":128,"totalToDate":2287},"2014-08-29":{"count":50,"totalToDate":2337},"2014-08-30":{"count":8,"totalToDate":2345},"2014-08-31":{"count":0,"totalToDate":2345},"2014-09-01":{"count":16,"totalToDate":2361},"2014-09-02":{"count":12,"totalToDate":2373},"2014-09-03":{"count":1,"totalToDate":2374},"2014-09-04":{"count":0,"totalToDate":2374},"2014-09-05":{"count":2,"totalToDate":2376},"2014-09-06":{"count":0,"totalToDate":2376},"2014-09-07":{"count":1,"totalToDate":2377},"2014-09-08":{"count":4,"totalToDate":2381},"2014-09-09":{"count":11,"totalToDate":2392},"2014-09-10":{"count":0,"totalToDate":2392},"2014-09-11":{"count":0,"totalToDate":2392},"2014-09-12":{"count":0,"totalToDate":2392},"2014-09-13":{"count":5,"totalToDate":2397},"2014-09-14":{"count":1,"totalToDate":2398},"2014-09-15":{"count":3,"totalToDate":2401},"2014-09-16":{"count":2,"totalToDate":2403},"2014-09-17":{"count":12,"totalToDate":2415},"2014-09-18":{"count":2,"totalToDate":2417},"2014-09-19":{"count":0,"totalToDate":2417},"2014-09-20":{"count":0,"totalToDate":2417},"2014-09-21":{"count":0,"totalToDate":2417},"2014-09-22":{"count":10,"totalToDate":2427},"2014-09-23":{"count":2,"totalToDate":2429},"2014-09-24":{"count":8,"totalToDate":2437},"2014-09-25":{"count":6,"totalToDate":2443},"2014-09-26":{"count":0,"totalToDate":2443},"2014-09-27":{"count":0,"totalToDate":2443},"2014-09-28":{"count":7,"totalToDate":2450},"2014-09-29":{"count":1,"totalToDate":2451},"2014-09-30":{"count":5,"totalToDate":2456},"2014-10-01":{"count":6,"totalToDate":2462},"2014-10-02":{"count":4,"totalToDate":2466},"2014-10-03":{"count":0,"totalToDate":2466},"2014-10-04":{"count":0,"totalToDate":2466},"2014-10-05":{"count":0,"totalToDate":2466},"2014-10-06":{"count":3,"totalToDate":2469},"2014-10-07":{"count":3,"totalToDate":2472},"2014-10-08":{"count":10,"totalToDate":2482},"2014-10-09":{"count":2,"totalToDate":2484},"2014-10-10":{"count":7,"totalToDate":2491},"2014-10-11":{"count":0,"totalToDate":2491},"2014-10-12":{"count":0,"totalToDate":2491},"2014-10-13":{"count":3,"totalToDate":2494},"2014-10-14":{"count":6,"totalToDate":2500},"2014-10-15":{"count":14,"totalToDate":2514},"2014-10-16":{"count":4,"totalToDate":2518},"2014-10-17":{"count":1,"totalToDate":2519},"2014-10-18":{"count":7,"totalToDate":2526},"2014-10-19":{"count":0,"totalToDate":2526},"2014-10-20":{"count":5,"totalToDate":2531},"2014-10-21":{"count":1,"totalToDate":2532},"2014-10-22":{"count":5,"totalToDate":2537},"2014-10-23":{"count":1,"totalToDate":2538},"2014-10-24":{"count":0,"totalToDate":2538},"2014-10-25":{"count":0,"totalToDate":2538},"2014-10-26":{"count":0,"totalToDate":2538},"2014-10-27":{"count":6,"totalToDate":2544},"2014-10-28":{"count":4,"totalToDate":2548},"2014-10-29":{"count":2,"totalToDate":2550},"2014-10-30":{"count":5,"totalToDate":2555},"2014-10-31":{"count":5,"totalToDate":2560},"2014-11-01":{"count":2,"totalToDate":2562},"2014-11-02":{"count":0,"totalToDate":2562},"2014-11-03":{"count":10,"totalToDate":2572},"2014-11-04":{"count":11,"totalToDate":2583},"2014-11-05":{"count":50,"totalToDate":2633},"2014-11-06":{"count":4,"totalToDate":2637},"2014-11-07":{"count":0,"totalToDate":2637},"2014-11-08":{"count":0,"totalToDate":2637},"2014-11-09":{"count":0,"totalToDate":2637},"2014-11-10":{"count":3,"totalToDate":2640},"2014-11-11":{"count":7,"totalToDate":2647},"2014-11-12":{"count":5,"totalToDate":2652},"2014-11-13":{"count":8,"totalToDate":2660},"2014-11-14":{"count":0,"totalToDate":2660},"2014-11-15":{"count":0,"totalToDate":2660},"2014-11-16":{"count":2,"totalToDate":2662},"2014-11-17":{"count":4,"totalToDate":2666},"2014-11-18":{"count":1,"totalToDate":2667},"2014-11-19":{"count":1,"totalToDate":2668},"2014-11-20":{"count":0,"totalToDate":2668},"2014-11-21":{"count":0,"totalToDate":2668},"2014-11-22":{"count":0,"totalToDate":2668},"2014-11-23":{"count":0,"totalToDate":2668},"2014-11-24":{"count":1,"totalToDate":2669},"2014-11-25":{"count":4,"totalToDate":2673},"2014-11-26":{"count":3,"totalToDate":2676},"2014-11-27":{"count":1,"totalToDate":2677},"2014-11-28":{"count":2,"totalToDate":2679},"2014-11-29":{"count":1,"totalToDate":2680},"2014-11-30":{"count":4,"totalToDate":2684},"2014-12-01":{"count":55,"totalToDate":2739},"2014-12-02":{"count":3,"totalToDate":2742},"2014-12-03":{"count":0,"totalToDate":2742},"2014-12-04":{"count":83,"totalToDate":2825},"2014-12-05":{"count":3,"totalToDate":2828},"2014-12-06":{"count":18,"totalToDate":2846},"2014-12-07":{"count":0,"totalToDate":2846},"2014-12-08":{"count":4,"totalToDate":2850},"2014-12-09":{"count":3,"totalToDate":2853},"2014-12-10":{"count":3,"totalToDate":2856},"2014-12-11":{"count":4,"totalToDate":2860},"2014-12-12":{"count":3,"totalToDate":2863},"2014-12-13":{"count":0,"totalToDate":2863},"2014-12-14":{"count":15,"totalToDate":2878},"2014-12-15":{"count":9,"totalToDate":2887},"2014-12-16":{"count":3,"totalToDate":2890},"2014-12-17":{"count":4,"totalToDate":2894},"2014-12-18":{"count":1,"totalToDate":2895},"2014-12-19":{"count":1,"totalToDate":2896},"2014-12-20":{"count":0,"totalToDate":2896},"2014-12-21":{"count":1,"totalToDate":2897},"2014-12-22":{"count":4,"totalToDate":2901},"2014-12-23":{"count":3,"totalToDate":2904},"2014-12-24":{"count":0,"totalToDate":2904},"2014-12-25":{"count":66,"totalToDate":2970},"2014-12-26":{"count":2,"totalToDate":2972},"2014-12-27":{"count":2,"totalToDate":2974},"2014-12-28":{"count":2,"totalToDate":2976},"2014-12-29":{"count":3,"totalToDate":2979},"2014-12-30":{"count":5,"totalToDate":2984},"2014-12-31":{"count":7,"totalToDate":2991},"2015-01-01":{"count":0,"totalToDate":2991},"2015-01-02":{"count":8,"totalToDate":2999},"2015-01-03":{"count":0,"totalToDate":2999},"2015-01-04":{"count":3,"totalToDate":3002},"2015-01-05":{"count":3,"totalToDate":3005},"2015-01-06":{"count":9,"totalToDate":3014},"2015-01-07":{"count":7,"totalToDate":3021},"2015-01-08":{"count":5,"totalToDate":3026},"2015-01-09":{"count":2,"totalToDate":3028},"2015-01-10":{"count":1,"totalToDate":3029},"2015-01-11":{"count":2,"totalToDate":3031},"2015-01-12":{"count":6,"totalToDate":3037},"2015-01-13":{"count":11,"totalToDate":3048},"2015-01-14":{"count":2,"totalToDate":3050},"2015-01-15":{"count":17,"totalToDate":3067},"2015-01-16":{"count":11,"totalToDate":3078},"2015-01-17":{"count":4,"totalToDate":3082},"2015-01-18":{"count":0,"totalToDate":3082},"2015-01-19":{"count":0,"totalToDate":3082},"2015-01-20":{"count":22,"totalToDate":3104},"2015-01-21":{"count":9,"totalToDate":3113},"2015-01-22":{"count":9,"totalToDate":3122},"2015-01-23":{"count":6,"totalToDate":3128},"2015-01-24":{"count":4,"totalToDate":3132},"2015-01-25":{"count":0,"totalToDate":3132},"2015-01-26":{"count":5,"totalToDate":3137},"2015-01-27":{"count":8,"totalToDate":3145},"2015-01-28":{"count":9,"totalToDate":3154},"2015-01-29":{"count":3,"totalToDate":3157},"2015-01-30":{"count":5,"totalToDate":3162},"2015-01-31":{"count":2,"totalToDate":3164},"2015-02-01":{"count":0,"totalToDate":3164},"2015-02-02":{"count":4,"totalToDate":3168},"2015-02-03":{"count":18,"totalToDate":3186},"2015-02-04":{"count":5,"totalToDate":3191},"2015-02-05":{"count":0,"totalToDate":3191},"2015-02-06":{"count":4,"totalToDate":3195},"2015-02-07":{"count":2,"totalToDate":3197},"2015-02-08":{"count":6,"totalToDate":3203},"2015-02-09":{"count":8,"totalToDate":3211},"2015-02-10":{"count":2,"totalToDate":3213},"2015-02-11":{"count":4,"totalToDate":3217},"2015-02-12":{"count":2,"totalToDate":3219},"2015-02-13":{"count":0,"totalToDate":3219},"2015-02-14":{"count":0,"totalToDate":3219},"2015-02-15":{"count":0,"totalToDate":3219},"2015-02-16":{"count":5,"totalToDate":3224},"2015-02-17":{"count":4,"totalToDate":3228},"2015-02-18":{"count":0,"totalToDate":3228},"2015-02-19":{"count":4,"totalToDate":3232},"2015-02-20":{"count":1,"totalToDate":3233},"2015-02-21":{"count":2,"totalToDate":3235},"2015-02-22":{"count":10,"totalToDate":3245},"2015-02-23":{"count":4,"totalToDate":3249},"2015-02-24":{"count":2,"totalToDate":3251},"2015-02-25":{"count":5,"totalToDate":3256},"2015-02-26":{"count":6,"totalToDate":3262},"2015-02-27":{"count":4,"totalToDate":3266},"2015-02-28":{"count":0,"totalToDate":3266},"2015-03-01":{"count":1,"totalToDate":3267},"2015-03-02":{"count":7,"totalToDate":3274},"2015-03-03":{"count":9,"totalToDate":3283},"2015-03-04":{"count":19,"totalToDate":3302},"2015-03-05":{"count":9,"totalToDate":3311},"2015-03-06":{"count":12,"totalToDate":3323},"2015-03-07":{"count":6,"totalToDate":3329},"2015-03-08":{"count":8,"totalToDate":3337},"2015-03-09":{"count":6,"totalToDate":3343},"2015-03-10":{"count":9,"totalToDate":3352},"2015-03-11":{"count":11,"totalToDate":3363},"2015-03-12":{"count":4,"totalToDate":3367},"2015-03-13":{"count":2,"totalToDate":3369},"2015-03-14":{"count":2,"totalToDate":3371},"2015-03-15":{"count":6,"totalToDate":3377},"2015-03-16":{"count":12,"totalToDate":3389},"2015-03-17":{"count":3,"totalToDate":3392},"2015-03-18":{"count":6,"totalToDate":3398},"2015-03-19":{"count":10,"totalToDate":3408},"2015-03-20":{"count":3,"totalToDate":3411},"2015-03-21":{"count":1,"totalToDate":3412},"2015-03-22":{"count":4,"totalToDate":3416},"2015-03-23":{"count":6,"totalToDate":3422},"2015-03-24":{"count":5,"totalToDate":3427},"2015-03-25":{"count":6,"totalToDate":3433},"2015-03-26":{"count":0,"totalToDate":3433},"2015-03-27":{"count":6,"totalToDate":3439},"2015-03-28":{"count":4,"totalToDate":3443},"2015-03-29":{"count":0,"totalToDate":3443},"2015-03-30":{"count":0,"totalToDate":3443},"2015-03-31":{"count":0,"totalToDate":3443},"2015-04-01":{"count":0,"totalToDate":3443},"2015-04-02":{"count":2,"totalToDate":3445},"2015-04-03":{"count":0,"totalToDate":3445},"2015-04-04":{"count":1,"totalToDate":3446},"2015-04-05":{"count":2,"totalToDate":3448},"2015-04-06":{"count":3,"totalToDate":3451},"2015-04-07":{"count":3,"totalToDate":3454},"2015-04-08":{"count":5,"totalToDate":3459},"2015-04-09":{"count":3,"totalToDate":3462},"2015-04-10":{"count":6,"totalToDate":3468},"2015-04-11":{"count":1,"totalToDate":3469},"2015-04-12":{"count":3,"totalToDate":3472},"2015-04-13":{"count":1,"totalToDate":3473},"2015-04-14":{"count":2,"totalToDate":3475},"2015-04-15":{"count":3,"totalToDate":3478},"2015-04-16":{"count":3,"totalToDate":3481},"2015-04-17":{"count":1,"totalToDate":3482},"2015-04-18":{"count":1,"totalToDate":3483},"2015-04-19":{"count":0,"totalToDate":3483},"2015-04-20":{"count":0,"totalToDate":3483},"2015-04-21":{"count":1,"totalToDate":3484},"2015-04-22":{"count":3,"totalToDate":3487},"2015-04-23":{"count":11,"totalToDate":3498},"2015-04-24":{"count":11,"totalToDate":3509},"2015-04-25":{"count":6,"totalToDate":3515},"2015-04-26":{"count":0,"totalToDate":3515},"2015-04-27":{"count":2,"totalToDate":3517},"2015-04-28":{"count":2,"totalToDate":3519},"2015-04-29":{"count":0,"totalToDate":3519},"2015-04-30":{"count":3,"totalToDate":3522},"2015-05-01":{"count":4,"totalToDate":3526},"2015-05-02":{"count":1,"totalToDate":3527},"2015-05-03":{"count":1,"totalToDate":3528},"2015-05-04":{"count":4,"totalToDate":3532},"2015-05-05":{"count":3,"totalToDate":3535},"2015-05-06":{"count":5,"totalToDate":3540},"2015-05-07":{"count":5,"totalToDate":3545},"2015-05-08":{"count":0,"totalToDate":3545},"2015-05-09":{"count":0,"totalToDate":3545},"2015-05-10":{"count":0,"totalToDate":3545},"2015-05-11":{"count":1,"totalToDate":3546},"2015-05-12":{"count":16,"totalToDate":3562},"2015-05-13":{"count":7,"totalToDate":3569},"2015-05-14":{"count":3,"totalToDate":3572},"2015-05-15":{"count":0,"totalToDate":3572},"2015-05-16":{"count":0,"totalToDate":3572},"2015-05-17":{"count":0,"totalToDate":3572},"2015-05-18":{"count":0,"totalToDate":3572},"2015-05-19":{"count":2,"totalToDate":3574},"2015-05-20":{"count":4,"totalToDate":3578},"2015-05-21":{"count":2,"totalToDate":3580},"2015-05-22":{"count":1,"totalToDate":3581},"2015-05-23":{"count":2,"totalToDate":3583},"2015-05-24":{"count":1,"totalToDate":3584},"2015-05-25":{"count":5,"totalToDate":3589},"2015-05-26":{"count":6,"totalToDate":3595},"2015-05-27":{"count":81,"totalToDate":3676},"2015-05-28":{"count":3,"totalToDate":3679},"2015-05-29":{"count":0,"totalToDate":3679},"2015-05-30":{"count":13,"totalToDate":3692},"2015-05-31":{"count":0,"totalToDate":3692},"2015-06-01":{"count":3,"totalToDate":3695},"2015-06-02":{"count":2,"totalToDate":3697},"2015-06-03":{"count":1,"totalToDate":3698},"2015-06-04":{"count":2,"totalToDate":3700},"2015-06-05":{"count":3,"totalToDate":3703},"2015-06-06":{"count":1,"totalToDate":3704},"2015-06-07":{"count":2,"totalToDate":3706},"2015-06-08":{"count":3,"totalToDate":3709},"2015-06-09":{"count":4,"totalToDate":3713},"2015-06-10":{"count":6,"totalToDate":3719},"2015-06-11":{"count":3,"totalToDate":3722},"2015-06-12":{"count":0,"totalToDate":3722},"2015-06-13":{"count":3,"totalToDate":3725},"2015-06-14":{"count":0,"totalToDate":3725},"2015-06-15":{"count":7,"totalToDate":3732},"2015-06-16":{"count":1,"totalToDate":3733},"2015-06-17":{"count":2,"totalToDate":3735},"2015-06-18":{"count":2,"totalToDate":3737},"2015-06-19":{"count":7,"totalToDate":3744},"2015-06-20":{"count":0,"totalToDate":3744},"2015-06-21":{"count":3,"totalToDate":3747},"2015-06-22":{"count":0,"totalToDate":3747},"2015-06-23":{"count":6,"totalToDate":3753},"2015-06-24":{"count":7,"totalToDate":3760},"2015-06-25":{"count":1,"totalToDate":3761},"2015-06-26":{"count":4,"totalToDate":3765},"2015-06-27":{"count":6,"totalToDate":3771},"2015-06-28":{"count":6,"totalToDate":3777},"2015-06-29":{"count":9,"totalToDate":3786},"2015-06-30":{"count":3,"totalToDate":3789},"2015-07-01":{"count":3,"totalToDate":3792},"2015-07-02":{"count":1,"totalToDate":3793},"2015-07-03":{"count":2,"totalToDate":3795},"2015-07-04":{"count":3,"totalToDate":3798},"2015-07-05":{"count":2,"totalToDate":3800},"2015-07-06":{"count":5,"totalToDate":3805},"2015-07-07":{"count":4,"totalToDate":3809},"2015-07-08":{"count":1,"totalToDate":3810},"2015-07-09":{"count":3,"totalToDate":3813},"2015-07-10":{"count":8,"totalToDate":3821},"2015-07-11":{"count":9,"totalToDate":3830},"2015-07-12":{"count":0,"totalToDate":3830},"2015-07-13":{"count":7,"totalToDate":3837},"2015-07-14":{"count":5,"totalToDate":3842},"2015-07-15":{"count":1,"totalToDate":3843},"2015-07-16":{"count":1,"totalToDate":3844},"2015-07-17":{"count":1,"totalToDate":3845},"2015-07-18":{"count":2,"totalToDate":3847},"2015-07-19":{"count":1,"totalToDate":3848},"2015-07-20":{"count":2,"totalToDate":3850},"2015-07-21":{"count":5,"totalToDate":3855},"2015-07-22":{"count":4,"totalToDate":3859},"2015-07-23":{"count":4,"totalToDate":3863},"2015-07-24":{"count":4,"totalToDate":3867},"2015-07-25":{"count":7,"totalToDate":3874},"2015-07-26":{"count":5,"totalToDate":3879},"2015-07-27":{"count":4,"totalToDate":3883},"2015-07-28":{"count":2,"totalToDate":3885},"2015-07-29":{"count":4,"totalToDate":3889},"2015-07-30":{"count":0,"totalToDate":3889},"2015-07-31":{"count":0,"totalToDate":3889},"2015-08-01":{"count":0,"totalToDate":3889},"2015-08-02":{"count":6,"totalToDate":3895},"2015-08-03":{"count":2,"totalToDate":3897},"2015-08-04":{"count":7,"totalToDate":3904},"2015-08-05":{"count":7,"totalToDate":3911},"2015-08-06":{"count":4,"totalToDate":3915},"2015-08-07":{"count":0,"totalToDate":3915},"2015-08-08":{"count":3,"totalToDate":3918},"2015-08-09":{"count":1,"totalToDate":3919},"2015-08-10":{"count":1,"totalToDate":3920},"2015-08-11":{"count":1,"totalToDate":3921},"2015-08-12":{"count":2,"totalToDate":3923},"2015-08-13":{"count":0,"totalToDate":3923},"2015-08-14":{"count":0,"totalToDate":3923},"2015-08-15":{"count":5,"totalToDate":3928},"2015-08-16":{"count":2,"totalToDate":3930},"2015-08-17":{"count":8,"totalToDate":3938},"2015-08-18":{"count":3,"totalToDate":3941},"2015-08-19":{"count":9,"totalToDate":3950},"2015-08-20":{"count":0,"totalToDate":3950},"2015-08-21":{"count":3,"totalToDate":3953},"2015-08-22":{"count":7,"totalToDate":3960},"2015-08-23":{"count":2,"totalToDate":3962},"2015-08-24":{"count":5,"totalToDate":3967},"2015-08-25":{"count":2,"totalToDate":3969},"2015-08-26":{"count":7,"totalToDate":3976},"2015-08-27":{"count":99,"totalToDate":4075},"2015-08-28":{"count":96,"totalToDate":4171},"2015-08-29":{"count":312,"totalToDate":4483},"2015-08-30":{"count":0,"totalToDate":4483},"2015-08-31":{"count":245,"totalToDate":4728},"2015-09-01":{"count":0,"totalToDate":4728},"2015-09-02":{"count":26,"totalToDate":4754},"2015-09-03":{"count":7,"totalToDate":4761},"2015-09-04":{"count":4,"totalToDate":4765},"2015-09-05":{"count":2,"totalToDate":4767},"2015-09-06":{"count":3,"totalToDate":4770},"2015-09-07":{"count":3,"totalToDate":4773},"2015-09-08":{"count":0,"totalToDate":4773},"2015-09-09":{"count":31,"totalToDate":4804},"2015-09-10":{"count":4,"totalToDate":4808},"2015-09-11":{"count":9,"totalToDate":4817},"2015-09-12":{"count":11,"totalToDate":4828},"2015-09-13":{"count":2,"totalToDate":4830},"2015-09-14":{"count":13,"totalToDate":4843},"2015-09-15":{"count":4,"totalToDate":4847},"2015-09-16":{"count":12,"totalToDate":4859},"2015-09-17":{"count":19,"totalToDate":4878},"2015-09-18":{"count":23,"totalToDate":4901},"2015-09-19":{"count":1,"totalToDate":4902},"2015-09-20":{"count":0,"totalToDate":4902},"2015-09-21":{"count":41,"totalToDate":4943},"2015-09-22":{"count":8,"totalToDate":4951},"2015-09-23":{"count":16,"totalToDate":4967},"2015-09-24":{"count":6,"totalToDate":4973},"2015-09-25":{"count":0,"totalToDate":4973},"2015-09-26":{"count":8,"totalToDate":4981},"2015-09-27":{"count":11,"totalToDate":4992},"2015-09-28":{"count":4,"totalToDate":4996},"2015-09-29":{"count":4,"totalToDate":5000},"2015-09-30":{"count":4,"totalToDate":5004},"2015-10-01":{"count":5,"totalToDate":5009},"2015-10-02":{"count":6,"totalToDate":5015},"2015-10-03":{"count":2,"totalToDate":5017},"2015-10-04":{"count":1,"totalToDate":5018},"2015-10-05":{"count":8,"totalToDate":5026},"2015-10-06":{"count":3,"totalToDate":5029},"2015-10-07":{"count":3,"totalToDate":5032},"2015-10-08":{"count":5,"totalToDate":5037},"2015-10-09":{"count":5,"totalToDate":5042},"2015-10-10":{"count":2,"totalToDate":5044},"2015-10-11":{"count":3,"totalToDate":5047},"2015-10-12":{"count":6,"totalToDate":5053},"2015-10-13":{"count":2,"totalToDate":5055},"2015-10-14":{"count":3,"totalToDate":5058},"2015-10-15":{"count":6,"totalToDate":5064},"2015-10-16":{"count":9,"totalToDate":5073},"2015-10-17":{"count":6,"totalToDate":5079},"2015-10-18":{"count":8,"totalToDate":5087},"2015-10-19":{"count":8,"totalToDate":5095},"2015-10-20":{"count":6,"totalToDate":5101},"2015-10-21":{"count":5,"totalToDate":5106},"2015-10-22":{"count":5,"totalToDate":5111},"2015-10-23":{"count":3,"totalToDate":5114},"2015-10-24":{"count":0,"totalToDate":5114},"2015-10-25":{"count":0,"totalToDate":5114},"2015-10-26":{"count":7,"totalToDate":5121},"2015-10-27":{"count":2,"totalToDate":5123},"2015-10-28":{"count":1,"totalToDate":5124},"2015-10-29":{"count":0,"totalToDate":5124},"2015-10-30":{"count":0,"totalToDate":5124},"2015-10-31":{"count":0,"totalToDate":5124},"2015-11-01":{"count":1,"totalToDate":5125},"2015-11-02":{"count":5,"totalToDate":5130},"2015-11-03":{"count":0,"totalToDate":5130},"2015-11-04":{"count":0,"totalToDate":5130},"2015-11-05":{"count":0,"totalToDate":5130},"2015-11-06":{"count":4,"totalToDate":5134},"2015-11-07":{"count":1,"totalToDate":5135},"2015-11-08":{"count":3,"totalToDate":5138},"2015-11-09":{"count":1,"totalToDate":5139},"2015-11-10":{"count":2,"totalToDate":5141},"2015-11-11":{"count":7,"totalToDate":5148},"2015-11-12":{"count":0,"totalToDate":5148},"2015-11-13":{"count":1,"totalToDate":5149},"2015-11-14":{"count":0,"totalToDate":5149},"2015-11-15":{"count":0,"totalToDate":5149},"2015-11-16":{"count":3,"totalToDate":5152},"2015-11-17":{"count":2,"totalToDate":5154},"2015-11-18":{"count":7,"totalToDate":5161},"2015-11-19":{"count":5,"totalToDate":5166},"2015-11-20":{"count":2,"totalToDate":5168},"2015-11-21":{"count":2,"totalToDate":5170},"2015-11-22":{"count":5,"totalToDate":5175},"2015-11-23":{"count":0,"totalToDate":5175},"2015-11-24":{"count":4,"totalToDate":5179},"2015-11-25":{"count":3,"totalToDate":5182},"2015-11-26":{"count":5,"totalToDate":5187},"2015-11-27":{"count":0,"totalToDate":5187},"2015-11-28":{"count":1,"totalToDate":5188},"2015-11-29":{"count":9,"totalToDate":5197},"2015-11-30":{"count":8,"totalToDate":5205},"2015-12-01":{"count":1,"totalToDate":5206},"2015-12-02":{"count":0,"totalToDate":5206},"2015-12-03":{"count":3,"totalToDate":5209},"2015-12-04":{"count":1,"totalToDate":5210},"2015-12-05":{"count":3,"totalToDate":5213},"2015-12-06":{"count":1,"totalToDate":5214},"2015-12-07":{"count":2,"totalToDate":5216},"2015-12-08":{"count":1,"totalToDate":5217},"2015-12-09":{"count":3,"totalToDate":5220},"2015-12-10":{"count":6,"totalToDate":5226},"2015-12-11":{"count":5,"totalToDate":5231},"2015-12-12":{"count":6,"totalToDate":5237},"2015-12-13":{"count":6,"totalToDate":5243},"2015-12-14":{"count":4,"totalToDate":5247},"2015-12-15":{"count":4,"totalToDate":5251},"2015-12-16":{"count":4,"totalToDate":5255},"2015-12-17":{"count":7,"totalToDate":5262},"2015-12-18":{"count":4,"totalToDate":5266},"2015-12-19":{"count":0,"totalToDate":5266},"2015-12-20":{"count":4,"totalToDate":5270},"2015-12-21":{"count":8,"totalToDate":5278},"2015-12-22":{"count":9,"totalToDate":5287},"2015-12-23":{"count":0,"totalToDate":5287},"2015-12-24":{"count":4,"totalToDate":5291},"2015-12-25":{"count":1,"totalToDate":5292},"2015-12-26":{"count":1,"totalToDate":5293},"2015-12-27":{"count":4,"totalToDate":5297},"2015-12-28":{"count":2,"totalToDate":5299},"2015-12-29":{"count":5,"totalToDate":5304},"2015-12-30":{"count":14,"totalToDate":5318},"2015-12-31":{"count":7,"totalToDate":5325},"2016-01-01":{"count":6,"totalToDate":5331},"2016-01-02":{"count":2,"totalToDate":5333},"2016-01-03":{"count":1,"totalToDate":5334},"2016-01-04":{"count":10,"totalToDate":5344},"2016-01-05":{"count":11,"totalToDate":5355},"2016-01-06":{"count":11,"totalToDate":5366},"2016-01-07":{"count":5,"totalToDate":5371},"2016-01-08":{"count":6,"totalToDate":5377},"2016-01-09":{"count":2,"totalToDate":5379},"2016-01-10":{"count":34,"totalToDate":5413},"2016-01-11":{"count":7,"totalToDate":5420},"2016-01-12":{"count":1,"totalToDate":5421},"2016-01-13":{"count":5,"totalToDate":5426},"2016-01-14":{"count":1,"totalToDate":5427},"2016-01-15":{"count":3,"totalToDate":5430},"2016-01-16":{"count":1,"totalToDate":5431},"2016-01-17":{"count":6,"totalToDate":5437},"2016-01-18":{"count":4,"totalToDate":5441},"2016-01-19":{"count":4,"totalToDate":5445},"2016-01-20":{"count":4,"totalToDate":5449},"2016-01-21":{"count":8,"totalToDate":5457},"2016-01-22":{"count":5,"totalToDate":5462},"2016-01-23":{"count":0,"totalToDate":5462},"2016-01-24":{"count":0,"totalToDate":5462},"2016-01-25":{"count":4,"totalToDate":5466},"2016-01-26":{"count":8,"totalToDate":5474},"2016-01-27":{"count":2,"totalToDate":5476},"2016-01-28":{"count":13,"totalToDate":5489},"2016-01-29":{"count":8,"totalToDate":5497},"2016-01-30":{"count":7,"totalToDate":5504},"2016-01-31":{"count":0,"totalToDate":5504},"2016-02-01":{"count":5,"totalToDate":5509},"2016-02-02":{"count":6,"totalToDate":5515},"2016-02-03":{"count":2,"totalToDate":5517},"2016-02-04":{"count":8,"totalToDate":5525},"2016-02-05":{"count":3,"totalToDate":5528},"2016-02-06":{"count":1,"totalToDate":5529},"2016-02-07":{"count":5,"totalToDate":5534},"2016-02-08":{"count":5,"totalToDate":5539},"2016-02-09":{"count":13,"totalToDate":5552},"2016-02-10":{"count":1,"totalToDate":5553},"2016-02-11":{"count":10,"totalToDate":5563},"2016-02-12":{"count":10,"totalToDate":5573},"2016-02-13":{"count":1,"totalToDate":5574},"2016-02-14":{"count":2,"totalToDate":5576},"2016-02-15":{"count":10,"totalToDate":5586},"2016-02-16":{"count":9,"totalToDate":5595},"2016-02-17":{"count":8,"totalToDate":5603},"2016-02-18":{"count":4,"totalToDate":5607},"2016-02-19":{"count":5,"totalToDate":5612},"2016-02-20":{"count":0,"totalToDate":5612},"2016-02-21":{"count":0,"totalToDate":5612},"2016-02-22":{"count":3,"totalToDate":5615},"2016-02-23":{"count":1,"totalToDate":5616},"2016-02-24":{"count":4,"totalToDate":5620},"2016-02-25":{"count":6,"totalToDate":5626},"2016-02-26":{"count":14,"totalToDate":5640},"2016-02-27":{"count":12,"totalToDate":5652},"2016-02-28":{"count":5,"totalToDate":5657},"2016-02-29":{"count":20,"totalToDate":5677},"2016-03-01":{"count":20,"totalToDate":5697},"2016-03-02":{"count":16,"totalToDate":5713},"2016-03-03":{"count":8,"totalToDate":5721},"2016-03-04":{"count":1,"totalToDate":5722},"2016-03-05":{"count":1,"totalToDate":5723},"2016-03-06":{"count":2,"totalToDate":5725},"2016-03-07":{"count":1,"totalToDate":5726},"2016-03-08":{"count":0,"totalToDate":5726},"2016-03-09":{"count":10,"totalToDate":5736},"2016-03-10":{"count":15,"totalToDate":5751},"2016-03-11":{"count":7,"totalToDate":5758},"2016-03-12":{"count":5,"totalToDate":5763},"2016-03-13":{"count":0,"totalToDate":5763},"2016-03-14":{"count":0,"totalToDate":5763},"2016-03-15":{"count":0,"totalToDate":5763},"2016-03-16":{"count":14,"totalToDate":5777},"2016-03-17":{"count":4,"totalToDate":5781},"2016-03-18":{"count":7,"totalToDate":5788},"2016-03-19":{"count":0,"totalToDate":5788},"2016-03-20":{"count":0,"totalToDate":5788},"2016-03-21":{"count":1,"totalToDate":5789},"2016-03-22":{"count":0,"totalToDate":5789},"2016-03-23":{"count":17,"totalToDate":5806},"2016-03-24":{"count":10,"totalToDate":5816},"2016-03-25":{"count":3,"totalToDate":5819},"2016-03-26":{"count":0,"totalToDate":5819},"2016-03-27":{"count":0,"totalToDate":5819},"2016-03-28":{"count":0,"totalToDate":5819},"2016-03-29":{"count":0,"totalToDate":5819},"2016-03-30":{"count":7,"totalToDate":5826},"2016-03-31":{"count":4,"totalToDate":5830},"2016-04-01":{"count":1,"totalToDate":5831},"2016-04-02":{"count":2,"totalToDate":5833},"2016-04-03":{"count":8,"totalToDate":5841},"2016-04-04":{"count":14,"totalToDate":5855},"2016-04-05":{"count":1,"totalToDate":5856},"2016-04-06":{"count":7,"totalToDate":5863},"2016-04-07":{"count":8,"totalToDate":5871},"2016-04-08":{"count":7,"totalToDate":5878},"2016-04-09":{"count":5,"totalToDate":5883},"2016-04-10":{"count":4,"totalToDate":5887},"2016-04-11":{"count":13,"totalToDate":5900},"2016-04-12":{"count":8,"totalToDate":5908},"2016-04-13":{"count":26,"totalToDate":5934},"2016-04-14":{"count":9,"totalToDate":5943},"2016-04-15":{"count":6,"totalToDate":5949},"2016-04-16":{"count":13,"totalToDate":5962},"2016-04-17":{"count":0,"totalToDate":5962},"2016-04-18":{"count":8,"totalToDate":5970},"2016-04-19":{"count":1,"totalToDate":5971},"2016-04-20":{"count":0,"totalToDate":5971},"2016-04-21":{"count":0,"totalToDate":5971},"2016-04-22":{"count":4,"totalToDate":5975},"2016-04-23":{"count":0,"totalToDate":5975},"2016-04-24":{"count":0,"totalToDate":5975},"2016-04-25":{"count":1,"totalToDate":5976},"2016-04-26":{"count":0,"totalToDate":5976},"2016-04-27":{"count":0,"totalToDate":5976},"2016-04-28":{"count":3,"totalToDate":5979},"2016-04-29":{"count":3,"totalToDate":5982},"2016-04-30":{"count":0,"totalToDate":5982},"2016-05-01":{"count":0,"totalToDate":5982},"2016-05-02":{"count":5,"totalToDate":5987},"2016-05-03":{"count":12,"totalToDate":5999},"2016-05-04":{"count":5,"totalToDate":6004},"2016-05-05":{"count":2,"totalToDate":6006},"2016-05-06":{"count":0,"totalToDate":6006},"2016-05-07":{"count":0,"totalToDate":6006},"2016-05-08":{"count":1,"totalToDate":6007},"2016-05-09":{"count":14,"totalToDate":6021},"2016-05-10":{"count":3,"totalToDate":6024},"2016-05-11":{"count":3,"totalToDate":6027},"2016-05-12":{"count":13,"totalToDate":6040},"2016-05-13":{"count":11,"totalToDate":6051},"2016-05-14":{"count":0,"totalToDate":6051},"2016-05-15":{"count":0,"totalToDate":6051},"2016-05-16":{"count":5,"totalToDate":6056},"2016-05-17":{"count":0,"totalToDate":6056},"2016-05-18":{"count":5,"totalToDate":6061},"2016-05-19":{"count":4,"totalToDate":6065},"2016-05-20":{"count":15,"totalToDate":6080},"2016-05-21":{"count":6,"totalToDate":6086},"2016-05-22":{"count":7,"totalToDate":6093},"2016-05-23":{"count":5,"totalToDate":6098},"2016-05-24":{"count":14,"totalToDate":6112},"2016-05-25":{"count":16,"totalToDate":6128},"2016-05-26":{"count":23,"totalToDate":6151},"2016-05-27":{"count":5,"totalToDate":6156},"2016-05-28":{"count":2,"totalToDate":6158},"2016-05-29":{"count":0,"totalToDate":6158},"2016-05-30":{"count":2,"totalToDate":6160},"2016-05-31":{"count":9,"totalToDate":6169},"2016-06-01":{"count":17,"totalToDate":6186},"2016-06-02":{"count":0,"totalToDate":6186},"2016-06-03":{"count":5,"totalToDate":6191},"2016-06-04":{"count":1,"totalToDate":6192},"2016-06-05":{"count":0,"totalToDate":6192},"2016-06-06":{"count":9,"totalToDate":6201},"2016-06-07":{"count":10,"totalToDate":6211},"2016-06-08":{"count":6,"totalToDate":6217},"2016-06-09":{"count":7,"totalToDate":6224},"2016-06-10":{"count":3,"totalToDate":6227},"2016-06-11":{"count":1,"totalToDate":6228},"2016-06-12":{"count":1,"totalToDate":6229},"2016-06-13":{"count":18,"totalToDate":6247},"2016-06-14":{"count":0,"totalToDate":6247},"2016-06-15":{"count":2,"totalToDate":6249},"2016-06-16":{"count":7,"totalToDate":6256},"2016-06-17":{"count":15,"totalToDate":6271},"2016-06-18":{"count":10,"totalToDate":6281},"2016-06-19":{"count":2,"totalToDate":6283},"2016-06-20":{"count":9,"totalToDate":6292},"2016-06-21":{"count":1,"totalToDate":6293},"2016-06-22":{"count":10,"totalToDate":6303},"2016-06-23":{"count":16,"totalToDate":6319},"2016-06-24":{"count":9,"totalToDate":6328},"2016-06-25":{"count":15,"totalToDate":6343},"2016-06-26":{"count":6,"totalToDate":6349},"2016-06-27":{"count":6,"totalToDate":6355},"2016-06-28":{"count":4,"totalToDate":6359},"2016-06-29":{"count":6,"totalToDate":6365},"2016-06-30":{"count":10,"totalToDate":6375},"2016-07-01":{"count":23,"totalToDate":6398},"2016-07-02":{"count":1,"totalToDate":6399},"2016-07-03":{"count":23,"totalToDate":6422},"2016-07-04":{"count":0,"totalToDate":6422},"2016-07-05":{"count":7,"totalToDate":6429},"2016-07-06":{"count":16,"totalToDate":6445},"2016-07-07":{"count":8,"totalToDate":6453},"2016-07-08":{"count":27,"totalToDate":6480},"2016-07-09":{"count":9,"totalToDate":6489},"2016-07-10":{"count":5,"totalToDate":6494},"2016-07-11":{"count":5,"totalToDate":6499},"2016-07-12":{"count":5,"totalToDate":6504},"2016-07-13":{"count":3,"totalToDate":6507},"2016-07-14":{"count":25,"totalToDate":6532},"2016-07-15":{"count":1,"totalToDate":6533},"2016-07-16":{"count":2,"totalToDate":6535},"2016-07-17":{"count":3,"totalToDate":6538},"2016-07-18":{"count":6,"totalToDate":6544},"2016-07-19":{"count":4,"totalToDate":6548},"2016-07-20":{"count":0,"totalToDate":6548},"2016-07-21":{"count":8,"totalToDate":6556},"2016-07-22":{"count":5,"totalToDate":6561},"2016-07-23":{"count":0,"totalToDate":6561},"2016-07-24":{"count":2,"totalToDate":6563},"2016-07-25":{"count":2,"totalToDate":6565},"2016-07-26":{"count":7,"totalToDate":6572},"2016-07-27":{"count":11,"totalToDate":6583},"2016-07-28":{"count":8,"totalToDate":6591},"2016-07-29":{"count":2,"totalToDate":6593},"2016-07-30":{"count":1,"totalToDate":6594},"2016-07-31":{"count":1,"totalToDate":6595},"2016-08-01":{"count":18,"totalToDate":6613},"2016-08-02":{"count":1,"totalToDate":6614},"2016-08-03":{"count":1,"totalToDate":6615},"2016-08-04":{"count":0,"totalToDate":6615},"2016-08-05":{"count":0,"totalToDate":6615},"2016-08-06":{"count":0,"totalToDate":6615},"2016-08-07":{"count":0,"totalToDate":6615},"2016-08-08":{"count":0,"totalToDate":6615},"2016-08-09":{"count":0,"totalToDate":6615},"2016-08-10":{"count":1,"totalToDate":6616},"2016-08-11":{"count":0,"totalToDate":6616},"2016-08-12":{"count":4,"totalToDate":6620},"2016-08-13":{"count":0,"totalToDate":6620},"2016-08-14":{"count":0,"totalToDate":6620},"2016-08-15":{"count":2,"totalToDate":6622},"2016-08-16":{"count":9,"totalToDate":6631},"2016-08-17":{"count":2,"totalToDate":6633},"2016-08-18":{"count":6,"totalToDate":6639},"2016-08-19":{"count":7,"totalToDate":6646},"2016-08-20":{"count":4,"totalToDate":6650},"2016-08-21":{"count":4,"totalToDate":6654},"2016-08-22":{"count":10,"totalToDate":6664},"2016-08-23":{"count":13,"totalToDate":6677},"2016-08-24":{"count":4,"totalToDate":6681},"2016-08-25":{"count":7,"totalToDate":6688},"2016-08-26":{"count":0,"totalToDate":6688},"2016-08-27":{"count":9,"totalToDate":6697},"2016-08-28":{"count":4,"totalToDate":6701},"2016-08-29":{"count":10,"totalToDate":6711},"2016-08-30":{"count":5,"totalToDate":6716},"2016-08-31":{"count":6,"totalToDate":6722},"2016-09-01":{"count":13,"totalToDate":6735},"2016-09-02":{"count":7,"totalToDate":6742},"2016-09-03":{"count":0,"totalToDate":6742},"2016-09-04":{"count":18,"totalToDate":6760},"2016-09-05":{"count":8,"totalToDate":6768},"2016-09-06":{"count":13,"totalToDate":6781},"2016-09-07":{"count":3,"totalToDate":6784},"2016-09-08":{"count":10,"totalToDate":6794},"2016-09-09":{"count":7,"totalToDate":6801},"2016-09-10":{"count":2,"totalToDate":6803},"2016-09-11":{"count":0,"totalToDate":6803},"2016-09-12":{"count":1,"totalToDate":6804},"2016-09-13":{"count":2,"totalToDate":6806},"2016-09-14":{"count":8,"totalToDate":6814},"2016-09-15":{"count":3,"totalToDate":6817},"2016-09-16":{"count":7,"totalToDate":6824},"2016-09-17":{"count":0,"totalToDate":6824},"2016-09-18":{"count":1,"totalToDate":6825},"2016-09-19":{"count":0,"totalToDate":6825},"2016-09-20":{"count":14,"totalToDate":6839},"2016-09-21":{"count":1,"totalToDate":6840},"2016-09-22":{"count":7,"totalToDate":6847},"2016-09-23":{"count":2,"totalToDate":6849},"2016-09-24":{"count":0,"totalToDate":6849},"2016-09-25":{"count":2,"totalToDate":6851},"2016-09-26":{"count":2,"totalToDate":6853},"2016-09-27":{"count":1,"totalToDate":6854},"2016-09-28":{"count":5,"totalToDate":6859},"2016-09-29":{"count":0,"totalToDate":6859},"2016-09-30":{"count":0,"totalToDate":6859},"2016-10-01":{"count":0,"totalToDate":6859},"2016-10-02":{"count":0,"totalToDate":6859},"2016-10-03":{"count":5,"totalToDate":6864},"2016-10-04":{"count":0,"totalToDate":6864},"2016-10-05":{"count":32,"totalToDate":6896},"2016-10-06":{"count":2,"totalToDate":6898},"2016-10-07":{"count":8,"totalToDate":6906},"2016-10-08":{"count":0,"totalToDate":6906},"2016-10-09":{"count":1,"totalToDate":6907},"2016-10-10":{"count":10,"totalToDate":6917},"2016-10-11":{"count":7,"totalToDate":6924},"2016-10-12":{"count":1,"totalToDate":6925},"2016-10-13":{"count":1,"totalToDate":6926},"2016-10-14":{"count":3,"totalToDate":6929},"2016-10-15":{"count":0,"totalToDate":6929},"2016-10-16":{"count":0,"totalToDate":6929},"2016-10-17":{"count":0,"totalToDate":6929},"2016-10-18":{"count":16,"totalToDate":6945},"2016-10-19":{"count":3,"totalToDate":6948},"2016-10-20":{"count":10,"totalToDate":6958},"2016-10-21":{"count":5,"totalToDate":6963},"2016-10-22":{"count":0,"totalToDate":6963},"2016-10-23":{"count":0,"totalToDate":6963},"2016-10-24":{"count":1,"totalToDate":6964},"2016-10-25":{"count":1,"totalToDate":6965},"2016-10-26":{"count":2,"totalToDate":6967},"2016-10-27":{"count":2,"totalToDate":6969},"2016-10-28":{"count":2,"totalToDate":6971},"2016-10-29":{"count":0,"totalToDate":6971},"2016-10-30":{"count":2,"totalToDate":6973},"2016-10-31":{"count":3,"totalToDate":6976},"2016-11-01":{"count":1,"totalToDate":6977},"2016-11-02":{"count":4,"totalToDate":6981},"2016-11-03":{"count":10,"totalToDate":6991},"2016-11-04":{"count":0,"totalToDate":6991},"2016-11-05":{"count":0,"totalToDate":6991},"2016-11-06":{"count":0,"totalToDate":6991},"2016-11-07":{"count":4,"totalToDate":6995},"2016-11-08":{"count":6,"totalToDate":7001},"2016-11-09":{"count":2,"totalToDate":7003},"2016-11-10":{"count":5,"totalToDate":7008},"2016-11-11":{"count":5,"totalToDate":7013},"2016-11-12":{"count":0,"totalToDate":7013},"2016-11-13":{"count":1,"totalToDate":7014},"2016-11-14":{"count":0,"totalToDate":7014},"2016-11-15":{"count":6,"totalToDate":7020},"2016-11-16":{"count":5,"totalToDate":7025},"2016-11-17":{"count":0,"totalToDate":7025},"2016-11-18":{"count":0,"totalToDate":7025},"2016-11-19":{"count":0,"totalToDate":7025},"2016-11-20":{"count":1,"totalToDate":7026},"2016-11-21":{"count":15,"totalToDate":7041},"2016-11-22":{"count":0,"totalToDate":7041},"2016-11-23":{"count":0,"totalToDate":7041},"2016-11-24":{"count":0,"totalToDate":7041},"2016-11-25":{"count":0,"totalToDate":7041},"2016-11-26":{"count":0,"totalToDate":7041},"2016-11-27":{"count":1,"totalToDate":7042},"2016-11-28":{"count":1,"totalToDate":7043},"2016-11-29":{"count":0,"totalToDate":7043},"2016-11-30":{"count":0,"totalToDate":7043},"2016-12-01":{"count":17,"totalToDate":7060},"2016-12-02":{"count":0,"totalToDate":7060},"2016-12-03":{"count":4,"totalToDate":7064},"2016-12-04":{"count":0,"totalToDate":7064},"2016-12-05":{"count":2,"totalToDate":7066},"2016-12-06":{"count":0,"totalToDate":7066},"2016-12-07":{"count":2,"totalToDate":7068},"2016-12-08":{"count":3,"totalToDate":7071},"2016-12-09":{"count":0,"totalToDate":7071},"2016-12-10":{"count":0,"totalToDate":7071},"2016-12-11":{"count":0,"totalToDate":7071},"2016-12-12":{"count":3,"totalToDate":7074},"2016-12-13":{"count":0,"totalToDate":7074},"2016-12-14":{"count":1,"totalToDate":7075},"2016-12-15":{"count":67,"totalToDate":7142},"2016-12-16":{"count":3,"totalToDate":7145},"2016-12-17":{"count":0,"totalToDate":7145},"2016-12-18":{"count":4,"totalToDate":7149},"2016-12-19":{"count":9,"totalToDate":7158},"2016-12-20":{"count":6,"totalToDate":7164},"2016-12-21":{"count":6,"totalToDate":7170},"2016-12-22":{"count":0,"totalToDate":7170},"2016-12-23":{"count":1,"totalToDate":7171},"2016-12-24":{"count":0,"totalToDate":7171},"2016-12-25":{"count":0,"totalToDate":7171},"2016-12-26":{"count":0,"totalToDate":7171},"2016-12-27":{"count":3,"totalToDate":7174},"2016-12-28":{"count":1,"totalToDate":7175},"2016-12-29":{"count":6,"totalToDate":7181},"2016-12-30":{"count":51,"totalToDate":7232},"2016-12-31":{"count":0,"totalToDate":7232},"2017-01-01":{"count":0,"totalToDate":7232},"2017-01-02":{"count":0,"totalToDate":7232},"2017-01-03":{"count":0,"totalToDate":7232},"2017-01-04":{"count":7,"totalToDate":7239},"2017-01-05":{"count":1,"totalToDate":7240},"2017-01-06":{"count":2,"totalToDate":7242},"2017-01-07":{"count":0,"totalToDate":7242},"2017-01-08":{"count":0,"totalToDate":7242},"2017-01-09":{"count":4,"totalToDate":7246},"2017-01-10":{"count":0,"totalToDate":7246},"2017-01-11":{"count":3,"totalToDate":7249},"2017-01-12":{"count":2,"totalToDate":7251},"2017-01-13":{"count":15,"totalToDate":7266},"2017-01-14":{"count":0,"totalToDate":7266},"2017-01-15":{"count":0,"totalToDate":7266},"2017-01-16":{"count":2,"totalToDate":7268},"2017-01-17":{"count":3,"totalToDate":7271},"2017-01-18":{"count":16,"totalToDate":7287},"2017-01-19":{"count":13,"totalToDate":7300},"2017-01-20":{"count":0,"totalToDate":7300},"2017-01-21":{"count":1,"totalToDate":7301},"2017-01-22":{"count":2,"totalToDate":7303},"2017-01-23":{"count":6,"totalToDate":7309},"2017-01-24":{"count":2,"totalToDate":7311},"2017-01-25":{"count":12,"totalToDate":7323},"2017-01-26":{"count":8,"totalToDate":7331},"2017-01-27":{"count":0,"totalToDate":7331},"2017-01-28":{"count":0,"totalToDate":7331},"2017-01-29":{"count":0,"totalToDate":7331},"2017-01-30":{"count":0,"totalToDate":7331},"2017-01-31":{"count":9,"totalToDate":7340},"2017-02-01":{"count":2,"totalToDate":7342},"2017-02-02":{"count":12,"totalToDate":7354},"2017-02-03":{"count":6,"totalToDate":7360},"2017-02-04":{"count":1,"totalToDate":7361},"2017-02-05":{"count":0,"totalToDate":7361},"2017-02-06":{"count":1,"totalToDate":7362},"2017-02-07":{"count":2,"totalToDate":7364},"2017-02-08":{"count":1,"totalToDate":7365},"2017-02-09":{"count":10,"totalToDate":7375},"2017-02-10":{"count":1,"totalToDate":7376},"2017-02-11":{"count":0,"totalToDate":7376},"2017-02-12":{"count":5,"totalToDate":7381},"2017-02-13":{"count":0,"totalToDate":7381},"2017-02-14":{"count":0,"totalToDate":7381},"2017-02-15":{"count":0,"totalToDate":7381},"2017-02-16":{"count":7,"totalToDate":7388},"2017-02-17":{"count":3,"totalToDate":7391},"2017-02-18":{"count":0,"totalToDate":7391},"2017-02-19":{"count":0,"totalToDate":7391},"2017-02-20":{"count":10,"totalToDate":7401},"2017-02-21":{"count":3,"totalToDate":7404},"2017-02-22":{"count":1,"totalToDate":7405},"2017-02-23":{"count":16,"totalToDate":7421},"2017-02-24":{"count":0,"totalToDate":7421},"2017-02-25":{"count":7,"totalToDate":7428},"2017-02-26":{"count":0,"totalToDate":7428},"2017-02-27":{"count":9,"totalToDate":7437},"2017-02-28":{"count":1,"totalToDate":7438},"2017-03-01":{"count":6,"totalToDate":7444},"2017-03-02":{"count":27,"totalToDate":7471},"2017-03-03":{"count":6,"totalToDate":7477},"2017-03-04":{"count":0,"totalToDate":7477},"2017-03-05":{"count":1,"totalToDate":7478},"2017-03-06":{"count":0,"totalToDate":7478},"2017-03-07":{"count":0,"totalToDate":7478},"2017-03-08":{"count":1,"totalToDate":7479},"2017-03-09":{"count":0,"totalToDate":7479},"2017-03-10":{"count":0,"totalToDate":7479},"2017-03-11":{"count":0,"totalToDate":7479},"2017-03-12":{"count":0,"totalToDate":7479},"2017-03-13":{"count":6,"totalToDate":7485},"2017-03-14":{"count":2,"totalToDate":7487},"2017-03-15":{"count":2,"totalToDate":7489},"2017-03-16":{"count":0,"totalToDate":7489},"2017-03-17":{"count":0,"totalToDate":7489},"2017-03-18":{"count":7,"totalToDate":7496},"2017-03-19":{"count":0,"totalToDate":7496},"2017-03-20":{"count":6,"totalToDate":7502},"2017-03-21":{"count":0,"totalToDate":7502},"2017-03-22":{"count":2,"totalToDate":7504},"2017-03-23":{"count":3,"totalToDate":7507},"2017-03-24":{"count":1,"totalToDate":7508},"2017-03-25":{"count":0,"totalToDate":7508},"2017-03-26":{"count":0,"totalToDate":7508},"2017-03-27":{"count":7,"totalToDate":7515},"2017-03-28":{"count":0,"totalToDate":7515},"2017-03-29":{"count":12,"totalToDate":7527},"2017-03-30":{"count":0,"totalToDate":7527},"2017-03-31":{"count":2,"totalToDate":7529},"2017-04-01":{"count":1,"totalToDate":7530},"2017-04-02":{"count":6,"totalToDate":7536},"2017-04-03":{"count":4,"totalToDate":7540},"2017-04-04":{"count":0,"totalToDate":7540},"2017-04-05":{"count":0,"totalToDate":7540},"2017-04-06":{"count":0,"totalToDate":7540},"2017-04-07":{"count":4,"totalToDate":7544},"2017-04-08":{"count":5,"totalToDate":7549},"2017-04-09":{"count":4,"totalToDate":7553},"2017-04-10":{"count":0,"totalToDate":7553},"2017-04-11":{"count":6,"totalToDate":7559},"2017-04-12":{"count":2,"totalToDate":7561},"2017-04-13":{"count":1,"totalToDate":7562},"2017-04-14":{"count":0,"totalToDate":7562},"2017-04-15":{"count":0,"totalToDate":7562},"2017-04-16":{"count":0,"totalToDate":7562},"2017-04-17":{"count":0,"totalToDate":7562},"2017-04-18":{"count":3,"totalToDate":7565},"2017-04-19":{"count":13,"totalToDate":7578},"2017-04-20":{"count":0,"totalToDate":7578},"2017-04-21":{"count":7,"totalToDate":7585},"2017-04-22":{"count":0,"totalToDate":7585},"2017-04-23":{"count":0,"totalToDate":7585},"2017-04-24":{"count":0,"totalToDate":7585},"2017-04-25":{"count":0,"totalToDate":7585},"2017-04-26":{"count":0,"totalToDate":7585},"2017-04-27":{"count":4,"totalToDate":7589},"2017-04-28":{"count":4,"totalToDate":7593},"2017-04-29":{"count":0,"totalToDate":7593},"2017-04-30":{"count":0,"totalToDate":7593},"2017-05-01":{"count":0,"totalToDate":7593},"2017-05-02":{"count":0,"totalToDate":7593},"2017-05-03":{"count":1,"totalToDate":7594},"2017-05-04":{"count":5,"totalToDate":7599},"2017-05-05":{"count":15,"totalToDate":7614},"2017-05-06":{"count":0,"totalToDate":7614},"2017-05-07":{"count":0,"totalToDate":7614},"2017-05-08":{"count":1,"totalToDate":7615},"2017-05-09":{"count":0,"totalToDate":7615},"2017-05-10":{"count":11,"totalToDate":7626},"2017-05-11":{"count":0,"totalToDate":7626},"2017-05-12":{"count":3,"totalToDate":7629},"2017-05-13":{"count":0,"totalToDate":7629},"2017-05-14":{"count":2,"totalToDate":7631},"2017-05-15":{"count":6,"totalToDate":7637},"2017-05-16":{"count":9,"totalToDate":7646},"2017-05-17":{"count":6,"totalToDate":7652},"2017-05-18":{"count":0,"totalToDate":7652},"2017-05-19":{"count":0,"totalToDate":7652},"2017-05-20":{"count":0,"totalToDate":7652},"2017-05-21":{"count":0,"totalToDate":7652},"2017-05-22":{"count":3,"totalToDate":7655},"2017-05-23":{"count":0,"totalToDate":7655},"2017-05-24":{"count":4,"totalToDate":7659},"2017-05-25":{"count":7,"totalToDate":7666},"2017-05-26":{"count":9,"totalToDate":7675},"2017-05-27":{"count":0,"totalToDate":7675},"2017-05-28":{"count":0,"totalToDate":7675},"2017-05-29":{"count":14,"totalToDate":7689},"2017-05-30":{"count":8,"totalToDate":7697},"2017-05-31":{"count":1,"totalToDate":7698},"2017-06-01":{"count":5,"totalToDate":7703},"2017-06-02":{"count":0,"totalToDate":7703},"2017-06-03":{"count":0,"totalToDate":7703},"2017-06-04":{"count":1,"totalToDate":7704},"2017-06-05":{"count":1,"totalToDate":7705},"2017-06-06":{"count":0,"totalToDate":7705},"2017-06-07":{"count":1,"totalToDate":7706},"2017-06-08":{"count":3,"totalToDate":7709},"2017-06-09":{"count":1,"totalToDate":7710},"2017-06-10":{"count":0,"totalToDate":7710},"2017-06-11":{"count":1,"totalToDate":7711},"2017-06-12":{"count":5,"totalToDate":7716},"2017-06-13":{"count":0,"totalToDate":7716},"2017-06-14":{"count":6,"totalToDate":7722},"2017-06-15":{"count":3,"totalToDate":7725},"2017-06-16":{"count":0,"totalToDate":7725},"2017-06-17":{"count":3,"totalToDate":7728},"2017-06-18":{"count":0,"totalToDate":7728},"2017-06-19":{"count":3,"totalToDate":7731},"2017-06-20":{"count":1,"totalToDate":7732},"2017-06-21":{"count":3,"totalToDate":7735},"2017-06-22":{"count":7,"totalToDate":7742},"2017-06-23":{"count":9,"totalToDate":7751},"2017-06-24":{"count":7,"totalToDate":7758},"2017-06-25":{"count":1,"totalToDate":7759},"2017-06-26":{"count":9,"totalToDate":7768},"2017-06-27":{"count":8,"totalToDate":7776},"2017-06-28":{"count":8,"totalToDate":7784},"2017-06-29":{"count":8,"totalToDate":7792},"2017-06-30":{"count":16,"totalToDate":7808},"2017-07-01":{"count":1,"totalToDate":7809},"2017-07-02":{"count":0,"totalToDate":7809},"2017-07-03":{"count":5,"totalToDate":7814},"2017-07-04":{"count":0,"totalToDate":7814},"2017-07-05":{"count":1,"totalToDate":7815},"2017-07-06":{"count":9,"totalToDate":7824},"2017-07-07":{"count":8,"totalToDate":7832},"2017-07-08":{"count":6,"totalToDate":7838},"2017-07-09":{"count":18,"totalToDate":7856},"2017-07-10":{"count":20,"totalToDate":7876},"2017-07-11":{"count":8,"totalToDate":7884},"2017-07-12":{"count":5,"totalToDate":7889},"2017-07-13":{"count":0,"totalToDate":7889},"2017-07-14":{"count":0,"totalToDate":7889},"2017-07-15":{"count":0,"totalToDate":7889},"2017-07-16":{"count":1,"totalToDate":7890},"2017-07-17":{"count":0,"totalToDate":7890},"2017-07-18":{"count":2,"totalToDate":7892},"2017-07-19":{"count":0,"totalToDate":7892},"2017-07-20":{"count":1,"totalToDate":7893},"2017-07-21":{"count":0,"totalToDate":7893},"2017-07-22":{"count":0,"totalToDate":7893},"2017-07-23":{"count":0,"totalToDate":7893},"2017-07-24":{"count":1,"totalToDate":7894},"2017-07-25":{"count":0,"totalToDate":7894},"2017-07-26":{"count":19,"totalToDate":7913},"2017-07-27":{"count":9,"totalToDate":7922},"2017-07-28":{"count":2,"totalToDate":7924},"2017-07-29":{"count":1,"totalToDate":7925},"2017-07-30":{"count":1,"totalToDate":7926},"2017-07-31":{"count":18,"totalToDate":7944},"2017-08-01":{"count":1,"totalToDate":7945},"2017-08-02":{"count":1,"totalToDate":7946},"2017-08-03":{"count":1,"totalToDate":7947},"2017-08-04":{"count":2,"totalToDate":7949},"2017-08-05":{"count":0,"totalToDate":7949},"2017-08-06":{"count":0,"totalToDate":7949},"2017-08-07":{"count":27,"totalToDate":7976},"2017-08-08":{"count":0,"totalToDate":7976},"2017-08-09":{"count":0,"totalToDate":7976},"2017-08-10":{"count":14,"totalToDate":7990},"2017-08-11":{"count":5,"totalToDate":7995},"2017-08-12":{"count":0,"totalToDate":7995},"2017-08-13":{"count":3,"totalToDate":7998},"2017-08-14":{"count":23,"totalToDate":8021},"2017-08-15":{"count":7,"totalToDate":8028},"2017-08-16":{"count":17,"totalToDate":8045},"2017-08-17":{"count":6,"totalToDate":8051},"2017-08-18":{"count":2,"totalToDate":8053},"2017-08-19":{"count":5,"totalToDate":8058},"2017-08-20":{"count":30,"totalToDate":8088},"2017-08-21":{"count":0,"totalToDate":8088},"2017-08-22":{"count":1,"totalToDate":8089},"2017-08-23":{"count":11,"totalToDate":8100},"2017-08-24":{"count":5,"totalToDate":8105},"2017-08-25":{"count":20,"totalToDate":8125},"2017-08-26":{"count":9,"totalToDate":8134},"2017-08-27":{"count":13,"totalToDate":8147},"2017-08-28":{"count":3,"totalToDate":8150},"2017-08-29":{"count":4,"totalToDate":8154},"2017-08-30":{"count":13,"totalToDate":8167},"2017-08-31":{"count":20,"totalToDate":8187},"2017-09-01":{"count":1,"totalToDate":8188},"2017-09-02":{"count":20,"totalToDate":8208},"2017-09-03":{"count":2,"totalToDate":8210},"2017-09-04":{"count":2,"totalToDate":8212},"2017-09-05":{"count":2,"totalToDate":8214},"2017-09-06":{"count":6,"totalToDate":8220},"2017-09-07":{"count":4,"totalToDate":8224},"2017-09-08":{"count":2,"totalToDate":8226},"2017-09-09":{"count":10,"totalToDate":8236},"2017-09-10":{"count":4,"totalToDate":8240},"2017-09-11":{"count":15,"totalToDate":8255},"2017-09-12":{"count":0,"totalToDate":8255},"2017-09-13":{"count":14,"totalToDate":8269},"2017-09-14":{"count":27,"totalToDate":8296},"2017-09-15":{"count":4,"totalToDate":8300},"2017-09-16":{"count":0,"totalToDate":8300},"2017-09-17":{"count":0,"totalToDate":8300},"2017-09-18":{"count":6,"totalToDate":8306},"2017-09-19":{"count":4,"totalToDate":8310},"2017-09-20":{"count":0,"totalToDate":8310},"2017-09-21":{"count":1,"totalToDate":8311},"2017-09-22":{"count":6,"totalToDate":8317},"2017-09-23":{"count":2,"totalToDate":8319},"2017-09-24":{"count":19,"totalToDate":8338},"2017-09-25":{"count":8,"totalToDate":8346},"2017-09-26":{"count":0,"totalToDate":8346},"2017-09-27":{"count":1,"totalToDate":8347},"2017-09-28":{"count":7,"totalToDate":8354},"2017-09-29":{"count":14,"totalToDate":8368},"2017-09-30":{"count":0,"totalToDate":8368},"2017-10-01":{"count":11,"totalToDate":8379},"2017-10-02":{"count":9,"totalToDate":8388},"2017-10-03":{"count":0,"totalToDate":8388},"2017-10-04":{"count":2,"totalToDate":8390},"2017-10-05":{"count":2,"totalToDate":8392},"2017-10-06":{"count":11,"totalToDate":8403},"2017-10-07":{"count":4,"totalToDate":8407},"2017-10-08":{"count":0,"totalToDate":8407},"2017-10-09":{"count":15,"totalToDate":8422},"2017-10-10":{"count":0,"totalToDate":8422},"2017-10-11":{"count":7,"totalToDate":8429},"2017-10-12":{"count":30,"totalToDate":8459},"2017-10-13":{"count":8,"totalToDate":8467},"2017-10-14":{"count":0,"totalToDate":8467},"2017-10-15":{"count":0,"totalToDate":8467},"2017-10-16":{"count":2,"totalToDate":8469},"2017-10-17":{"count":7,"totalToDate":8476},"2017-10-18":{"count":9,"totalToDate":8485},"2017-10-19":{"count":4,"totalToDate":8489},"2017-10-20":{"count":10,"totalToDate":8499},"2017-10-21":{"count":6,"totalToDate":8505},"2017-10-22":{"count":0,"totalToDate":8505},"2017-10-23":{"count":4,"totalToDate":8509},"2017-10-24":{"count":1,"totalToDate":8510},"2017-10-25":{"count":3,"totalToDate":8513},"2017-10-26":{"count":5,"totalToDate":8518},"2017-10-27":{"count":7,"totalToDate":8525},"2017-10-28":{"count":0,"totalToDate":8525},"2017-10-29":{"count":5,"totalToDate":8530},"2017-10-30":{"count":15,"totalToDate":8545},"2017-10-31":{"count":2,"totalToDate":8547},"2017-11-01":{"count":24,"totalToDate":8571},"2017-11-02":{"count":9,"totalToDate":8580},"2017-11-03":{"count":15,"totalToDate":8595},"2017-11-04":{"count":0,"totalToDate":8595},"2017-11-05":{"count":0,"totalToDate":8595},"2017-11-06":{"count":11,"totalToDate":8606},"2017-11-07":{"count":1,"totalToDate":8607},"2017-11-08":{"count":3,"totalToDate":8610},"2017-11-09":{"count":16,"totalToDate":8626},"2017-11-10":{"count":13,"totalToDate":8639},"2017-11-11":{"count":0,"totalToDate":8639},"2017-11-12":{"count":1,"totalToDate":8640},"2017-11-13":{"count":17,"totalToDate":8657},"2017-11-14":{"count":6,"totalToDate":8663},"2017-11-15":{"count":35,"totalToDate":8698},"2017-11-16":{"count":5,"totalToDate":8703},"2017-11-17":{"count":6,"totalToDate":8709},"2017-11-18":{"count":0,"totalToDate":8709},"2017-11-19":{"count":0,"totalToDate":8709},"2017-11-20":{"count":5,"totalToDate":8714},"2017-11-21":{"count":14,"totalToDate":8728},"2017-11-22":{"count":0,"totalToDate":8728},"2017-11-23":{"count":0,"totalToDate":8728},"2017-11-24":{"count":0,"totalToDate":8728},"2017-11-25":{"count":0,"totalToDate":8728},"2017-11-26":{"count":2,"totalToDate":8730},"2017-11-27":{"count":2,"totalToDate":8732},"2017-11-28":{"count":3,"totalToDate":8735},"2017-11-29":{"count":13,"totalToDate":8748},"2017-11-30":{"count":1,"totalToDate":8749},"2017-12-01":{"count":0,"totalToDate":8749},"2017-12-02":{"count":0,"totalToDate":8749},"2017-12-03":{"count":1,"totalToDate":8750},"2017-12-04":{"count":23,"totalToDate":8773},"2017-12-05":{"count":0,"totalToDate":8773},"2017-12-06":{"count":4,"totalToDate":8777},"2017-12-07":{"count":9,"totalToDate":8786},"2017-12-08":{"count":2,"totalToDate":8788},"2017-12-09":{"count":19,"totalToDate":8807},"2017-12-10":{"count":0,"totalToDate":8807},"2017-12-11":{"count":7,"totalToDate":8814},"2017-12-12":{"count":2,"totalToDate":8816},"2017-12-13":{"count":7,"totalToDate":8823},"2017-12-14":{"count":26,"totalToDate":8849},"2017-12-15":{"count":14,"totalToDate":8863},"2017-12-16":{"count":0,"totalToDate":8863},"2017-12-17":{"count":0,"totalToDate":8863},"2017-12-18":{"count":0,"totalToDate":8863},"2017-12-19":{"count":0,"totalToDate":8863},"2017-12-20":{"count":5,"totalToDate":8868},"2017-12-21":{"count":18,"totalToDate":8886},"2017-12-22":{"count":0,"totalToDate":8886},"2017-12-23":{"count":0,"totalToDate":8886},"2017-12-24":{"count":0,"totalToDate":8886},"2017-12-25":{"count":0,"totalToDate":8886},"2017-12-26":{"count":0,"totalToDate":8886},"2017-12-27":{"count":5,"totalToDate":8891},"2017-12-28":{"count":10,"totalToDate":8901},"2017-12-29":{"count":0,"totalToDate":8901},"2017-12-30":{"count":21,"totalToDate":8922},"2018-01-01":{"count":2,"totalToDate":8924},"2018-01-02":{"count":3,"totalToDate":8927},"2018-01-03":{"count":11,"totalToDate":8938},"2018-01-04":{"count":10,"totalToDate":8948},"2018-01-05":{"count":4,"totalToDate":8952},"2018-01-06":{"count":1,"totalToDate":8953},"2018-01-07":{"count":1,"totalToDate":8954},"2018-01-08":{"count":8,"totalToDate":8962},"2018-01-09":{"count":0,"totalToDate":8962},"2018-01-10":{"count":15,"totalToDate":8977},"2018-01-11":{"count":7,"totalToDate":8984},"2018-01-12":{"count":2,"totalToDate":8986},"2018-01-13":{"count":0,"totalToDate":8986},"2018-01-14":{"count":1,"totalToDate":8987},"2018-01-15":{"count":4,"totalToDate":8991},"2018-01-16":{"count":1,"totalToDate":8992},"2018-01-17":{"count":7,"totalToDate":8999},"2018-01-18":{"count":1,"totalToDate":9000},"2018-01-19":{"count":9,"totalToDate":9009},"2018-01-20":{"count":0,"totalToDate":9009},"2018-01-21":{"count":0,"totalToDate":9009},"2018-01-22":{"count":20,"totalToDate":9029},"2018-01-23":{"count":9,"totalToDate":9038},"2018-01-24":{"count":0,"totalToDate":9038},"2018-01-25":{"count":5,"totalToDate":9043},"2018-01-26":{"count":0,"totalToDate":9043},"2018-01-27":{"count":1,"totalToDate":9044},"2018-01-28":{"count":61,"totalToDate":9105},"2018-01-29":{"count":1,"totalToDate":9106},"2018-01-30":{"count":2,"totalToDate":9108},"2018-01-31":{"count":16,"totalToDate":9124},"2018-02-01":{"count":14,"totalToDate":9138},"2018-02-02":{"count":17,"totalToDate":9155},"2018-02-03":{"count":3,"totalToDate":9158},"2018-02-04":{"count":1,"totalToDate":9159},"2018-02-05":{"count":15,"totalToDate":9174},"2018-02-06":{"count":4,"totalToDate":9178},"2018-02-07":{"count":21,"totalToDate":9199},"2018-02-08":{"count":26,"totalToDate":9225},"2018-02-09":{"count":8,"totalToDate":9233},"2018-02-10":{"count":0,"totalToDate":9233},"2018-02-11":{"count":6,"totalToDate":9239},"2018-02-12":{"count":25,"totalToDate":9264},"2018-02-13":{"count":0,"totalToDate":9264},"2018-02-14":{"count":3,"totalToDate":9267},"2018-02-15":{"count":2,"totalToDate":9269},"2018-02-16":{"count":11,"totalToDate":9280},"2018-02-17":{"count":1,"totalToDate":9281},"2018-02-18":{"count":1,"totalToDate":9282},"2018-02-19":{"count":1,"totalToDate":9283},"2018-02-20":{"count":22,"totalToDate":9305},"2018-02-21":{"count":3,"totalToDate":9308},"2018-02-22":{"count":1,"totalToDate":9309},"2018-02-23":{"count":5,"totalToDate":9314},"2018-02-24":{"count":0,"totalToDate":9314},"2018-02-25":{"count":16,"totalToDate":9330},"2018-02-26":{"count":10,"totalToDate":9340},"2018-02-27":{"count":1,"totalToDate":9341},"2018-02-28":{"count":3,"totalToDate":9344},"2018-03-01":{"count":13,"totalToDate":9357},"2018-03-02":{"count":1,"totalToDate":9358},"2018-03-03":{"count":1,"totalToDate":9359},"2018-03-04":{"count":13,"totalToDate":9372},"2018-03-05":{"count":5,"totalToDate":9377},"2018-03-06":{"count":8,"totalToDate":9385},"2018-03-07":{"count":0,"totalToDate":9385},"2018-03-08":{"count":8,"totalToDate":9393},"2018-03-09":{"count":20,"totalToDate":9413},"2018-03-10":{"count":4,"totalToDate":9417},"2018-03-11":{"count":0,"totalToDate":9417},"2018-03-12":{"count":5,"totalToDate":9422},"2018-03-13":{"count":11,"totalToDate":9433},"2018-03-14":{"count":12,"totalToDate":9445},"2018-03-15":{"count":12,"totalToDate":9457},"2018-03-16":{"count":7,"totalToDate":9464},"2018-03-17":{"count":1,"totalToDate":9465},"2018-03-18":{"count":4,"totalToDate":9469},"2018-03-19":{"count":6,"totalToDate":9475},"2018-03-20":{"count":10,"totalToDate":9485},"2018-03-21":{"count":16,"totalToDate":9501},"2018-03-22":{"count":7,"totalToDate":9508},"2018-03-23":{"count":0,"totalToDate":9508},"2018-03-24":{"count":13,"totalToDate":9521},"2018-03-25":{"count":4,"totalToDate":9525},"2018-03-26":{"count":19,"totalToDate":9544},"2018-03-27":{"count":3,"totalToDate":9547},"2018-03-28":{"count":10,"totalToDate":9557},"2018-03-29":{"count":10,"totalToDate":9567},"2018-03-30":{"count":2,"totalToDate":9569},"2018-03-31":{"count":12,"totalToDate":9581},"2018-04-01":{"count":0,"totalToDate":9581},"2018-04-02":{"count":13,"totalToDate":9594},"2018-04-03":{"count":7,"totalToDate":9601},"2018-04-04":{"count":9,"totalToDate":9610},"2018-04-05":{"count":20,"totalToDate":9630},"2018-04-06":{"count":11,"totalToDate":9641},"2018-04-07":{"count":2,"totalToDate":9643},"2018-04-08":{"count":0,"totalToDate":9643},"2018-04-09":{"count":1,"totalToDate":9644},"2018-04-10":{"count":0,"totalToDate":9644},"2018-04-11":{"count":12,"totalToDate":9656},"2018-04-12":{"count":10,"totalToDate":9666},"2018-04-13":{"count":1,"totalToDate":9667},"2018-04-14":{"count":0,"totalToDate":9667},"2018-04-15":{"count":0,"totalToDate":9667},"2018-04-16":{"count":32,"totalToDate":9699},"2018-04-17":{"count":7,"totalToDate":9706},"2018-04-18":{"count":42,"totalToDate":9748},"2018-04-19":{"count":29,"totalToDate":9777},"2018-04-20":{"count":3,"totalToDate":9780},"2018-04-21":{"count":0,"totalToDate":9780},"2018-04-22":{"count":0,"totalToDate":9780},"2018-04-23":{"count":4,"totalToDate":9784},"2018-04-24":{"count":3,"totalToDate":9787},"2018-04-25":{"count":3,"totalToDate":9790},"2018-04-26":{"count":2,"totalToDate":9792},"2018-04-27":{"count":2,"totalToDate":9794},"2018-04-28":{"count":0,"totalToDate":9794},"2018-04-29":{"count":2,"totalToDate":9796},"2018-04-30":{"count":18,"totalToDate":9814},"2018-05-01":{"count":2,"totalToDate":9816},"2018-05-02":{"count":5,"totalToDate":9821},"2018-05-03":{"count":15,"totalToDate":9836},"2018-05-04":{"count":11,"totalToDate":9847},"2018-05-05":{"count":2,"totalToDate":9849},"2018-05-06":{"count":4,"totalToDate":9853},"2018-05-07":{"count":15,"totalToDate":9868},"2018-05-08":{"count":1,"totalToDate":9869},"2018-05-09":{"count":22,"totalToDate":9891},"2018-05-10":{"count":3,"totalToDate":9894},"2018-05-11":{"count":0,"totalToDate":9894},"2018-05-12":{"count":0,"totalToDate":9894},"2018-05-13":{"count":0,"totalToDate":9894},"2018-05-14":{"count":17,"totalToDate":9911},"2018-05-15":{"count":0,"totalToDate":9911},"2018-05-16":{"count":19,"totalToDate":9930},"2018-05-17":{"count":2,"totalToDate":9932},"2018-05-18":{"count":7,"totalToDate":9939},"2018-05-19":{"count":0,"totalToDate":9939},"2018-05-20":{"count":3,"totalToDate":9942},"2018-05-21":{"count":5,"totalToDate":9947},"2018-05-22":{"count":1,"totalToDate":9948},"2018-05-23":{"count":8,"totalToDate":9956},"2018-05-24":{"count":8,"totalToDate":9964},"2018-05-25":{"count":12,"totalToDate":9976},"2018-05-26":{"count":1,"totalToDate":9977},"2018-05-27":{"count":4,"totalToDate":9981},"2018-05-28":{"count":0,"totalToDate":9981},"2018-05-29":{"count":0,"totalToDate":9981},"2018-05-30":{"count":14,"totalToDate":9995},"2018-05-31":{"count":14,"totalToDate":10009},"2018-06-01":{"count":0,"totalToDate":10009},"2018-06-02":{"count":1,"totalToDate":10010},"2018-06-03":{"count":0,"totalToDate":10010},"2018-06-04":{"count":3,"totalToDate":10013},"2018-06-05":{"count":1,"totalToDate":10014},"2018-06-06":{"count":5,"totalToDate":10019},"2018-06-07":{"count":10,"totalToDate":10029},"2018-06-08":{"count":8,"totalToDate":10037},"2018-06-09":{"count":35,"totalToDate":10072},"2018-06-10":{"count":9,"totalToDate":10081},"2018-06-11":{"count":22,"totalToDate":10103},"2018-06-12":{"count":5,"totalToDate":10108},"2018-06-13":{"count":10,"totalToDate":10118},"2018-06-14":{"count":20,"totalToDate":10138},"2018-06-15":{"count":10,"totalToDate":10148},"2018-06-16":{"count":3,"totalToDate":10151},"2018-06-17":{"count":1,"totalToDate":10152},"2018-06-18":{"count":13,"totalToDate":10165},"2018-06-19":{"count":5,"totalToDate":10170},"2018-06-20":{"count":1,"totalToDate":10171},"2018-06-21":{"count":2,"totalToDate":10173},"2018-06-22":{"count":1,"totalToDate":10174},"2018-06-23":{"count":0,"totalToDate":10174},"2018-06-24":{"count":0,"totalToDate":10174},"2018-06-25":{"count":8,"totalToDate":10182},"2018-06-26":{"count":0,"totalToDate":10182},"2018-06-27":{"count":11,"totalToDate":10193},"2018-06-28":{"count":11,"totalToDate":10204},"2018-06-29":{"count":8,"totalToDate":10212},"2018-06-30":{"count":0,"totalToDate":10212},"2018-07-01":{"count":0,"totalToDate":10212},"2018-07-02":{"count":3,"totalToDate":10215},"2018-07-03":{"count":1,"totalToDate":10216},"2018-07-04":{"count":0,"totalToDate":10216},"2018-07-05":{"count":8,"totalToDate":10224},"2018-07-06":{"count":1,"totalToDate":10225},"2018-07-07":{"count":0,"totalToDate":10225},"2018-07-08":{"count":0,"totalToDate":10225},"2018-07-09":{"count":11,"totalToDate":10236},"2018-07-10":{"count":3,"totalToDate":10239},"2018-07-11":{"count":2,"totalToDate":10241},"2018-07-12":{"count":11,"totalToDate":10252},"2018-07-13":{"count":16,"totalToDate":10268},"2018-07-14":{"count":12,"totalToDate":10280},"2018-07-15":{"count":4,"totalToDate":10284},"2018-07-16":{"count":16,"totalToDate":10300},"2018-07-17":{"count":3,"totalToDate":10303},"2018-07-18":{"count":0,"totalToDate":10303},"2018-07-19":{"count":5,"totalToDate":10308},"2018-07-20":{"count":7,"totalToDate":10315},"2018-07-21":{"count":0,"totalToDate":10315},"2018-07-22":{"count":12,"totalToDate":10327},"2018-07-23":{"count":13,"totalToDate":10340},"2018-07-24":{"count":4,"totalToDate":10344},"2018-07-25":{"count":2,"totalToDate":10346},"2018-07-26":{"count":5,"totalToDate":10351},"2018-07-27":{"count":8,"totalToDate":10359},"2018-07-28":{"count":7,"totalToDate":10366},"2018-07-29":{"count":7,"totalToDate":10373},"2018-07-30":{"count":15,"totalToDate":10388},"2018-07-31":{"count":5,"totalToDate":10393},"2018-08-01":{"count":11,"totalToDate":10404},"2018-08-02":{"count":11,"totalToDate":10415},"2018-08-03":{"count":6,"totalToDate":10421},"2018-08-04":{"count":9,"totalToDate":10430},"2018-08-05":{"count":12,"totalToDate":10442},"2018-08-06":{"count":11,"totalToDate":10453},"2018-08-07":{"count":4,"totalToDate":10457},"2018-08-08":{"count":9,"totalToDate":10466},"2018-08-09":{"count":3,"totalToDate":10469},"2018-08-10":{"count":3,"totalToDate":10472},"2018-08-11":{"count":2,"totalToDate":10474},"2018-08-12":{"count":1,"totalToDate":10475},"2018-08-13":{"count":36,"totalToDate":10511},"2018-08-14":{"count":0,"totalToDate":10511},"2018-08-15":{"count":4,"totalToDate":10515},"2018-08-16":{"count":0,"totalToDate":10515},"2018-08-17":{"count":12,"totalToDate":10527},"2018-08-18":{"count":4,"totalToDate":10531},"2018-08-19":{"count":18,"totalToDate":10549},"2018-08-20":{"count":17,"totalToDate":10566},"2018-08-21":{"count":0,"totalToDate":10566},"2018-08-22":{"count":11,"totalToDate":10577},"2018-08-23":{"count":7,"totalToDate":10584},"2018-08-24":{"count":4,"totalToDate":10588},"2018-08-25":{"count":17,"totalToDate":10605},"2018-08-26":{"count":1,"totalToDate":10606},"2018-08-27":{"count":1,"totalToDate":10607},"2018-08-28":{"count":2,"totalToDate":10609},"2018-08-29":{"count":4,"totalToDate":10613},"2018-08-30":{"count":1,"totalToDate":10614},"2018-08-31":{"count":17,"totalToDate":10631},"2018-09-01":{"count":1,"totalToDate":10632},"2018-09-02":{"count":11,"totalToDate":10643},"2018-09-03":{"count":9,"totalToDate":10652},"2018-09-04":{"count":2,"totalToDate":10654},"2018-09-05":{"count":5,"totalToDate":10659},"2018-09-06":{"count":6,"totalToDate":10665},"2018-09-07":{"count":1,"totalToDate":10666},"2018-09-08":{"count":1,"totalToDate":10667},"2018-09-09":{"count":5,"totalToDate":10672},"2018-09-10":{"count":10,"totalToDate":10682},"2018-09-11":{"count":2,"totalToDate":10684},"2018-09-12":{"count":13,"totalToDate":10697},"2018-09-13":{"count":14,"totalToDate":10711},"2018-09-14":{"count":5,"totalToDate":10716},"2018-09-15":{"count":20,"totalToDate":10736},"2018-09-16":{"count":6,"totalToDate":10742},"2018-09-17":{"count":0,"totalToDate":10742},"2018-09-18":{"count":1,"totalToDate":10743},"2018-09-19":{"count":25,"totalToDate":10768},"2018-09-20":{"count":1,"totalToDate":10769},"2018-09-21":{"count":1,"totalToDate":10770},"2018-09-22":{"count":13,"totalToDate":10783},"2018-09-23":{"count":5,"totalToDate":10788},"2018-09-24":{"count":1,"totalToDate":10789},"2018-09-25":{"count":4,"totalToDate":10793},"2018-09-26":{"count":2,"totalToDate":10795},"2018-09-27":{"count":4,"totalToDate":10799},"2018-09-28":{"count":25,"totalToDate":10824},"2018-09-29":{"count":1,"totalToDate":10825},"2018-09-30":{"count":0,"totalToDate":10825},"2018-10-01":{"count":11,"totalToDate":10836},"2018-10-02":{"count":5,"totalToDate":10841},"2018-10-03":{"count":3,"totalToDate":10844},"2018-10-04":{"count":24,"totalToDate":10868},"2018-10-05":{"count":48,"totalToDate":10916},"2018-10-06":{"count":5,"totalToDate":10921},"2018-10-07":{"count":0,"totalToDate":10921},"2018-10-08":{"count":21,"totalToDate":10942},"2018-10-09":{"count":2,"totalToDate":10944},"2018-10-10":{"count":6,"totalToDate":10950},"2018-10-11":{"count":1,"totalToDate":10951},"2018-10-12":{"count":0,"totalToDate":10951},"2018-10-13":{"count":0,"totalToDate":10951},"2018-10-14":{"count":0,"totalToDate":10951},"2018-10-15":{"count":8,"totalToDate":10959},"2018-10-16":{"count":0,"totalToDate":10959},"2018-10-17":{"count":9,"totalToDate":10968},"2018-10-18":{"count":9,"totalToDate":10977},"2018-10-19":{"count":17,"totalToDate":10994},"2018-10-20":{"count":6,"totalToDate":11000},"2018-10-21":{"count":1,"totalToDate":11001},"2018-10-22":{"count":29,"totalToDate":11030},"2018-10-23":{"count":3,"totalToDate":11033},"2018-10-24":{"count":4,"totalToDate":11037},"2018-10-25":{"count":20,"totalToDate":11057},"2018-10-26":{"count":2,"totalToDate":11059},"2018-10-27":{"count":0,"totalToDate":11059},"2018-10-28":{"count":0,"totalToDate":11059},"2018-10-29":{"count":1,"totalToDate":11060},"2018-10-30":{"count":4,"totalToDate":11064},"2018-10-31":{"count":3,"totalToDate":11067},"2018-11-01":{"count":5,"totalToDate":11072},"2018-11-02":{"count":3,"totalToDate":11075},"2018-11-03":{"count":0,"totalToDate":11075}},"summary":{"commitCount":11075,"dayCount":3619,"firstDate":"2008-12-06","lastDate":"2018-11-03"}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.c15428c4.js.map