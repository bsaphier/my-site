/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxThunk = __webpack_require__(7);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _redux = __webpack_require__(8);
	
	var _reactReduxWebaudio = __webpack_require__(29);
	
	var _reactRedux = __webpack_require__(83);
	
	var _reactDom = __webpack_require__(98);
	
	var _Main = __webpack_require__(108);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _rootReducer = __webpack_require__(132);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_rootReducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_reactReduxWebaudio.RRWAEngine, null),
	    _react2.default.createElement(_Main2.default, null)
	  )
	), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(2);
	} else {
	  module.exports = require('./cjs/react.development.js');
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function e(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}function t(e,t){}function n(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||R}function r(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||R}function o(){}function u(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||R}function l(e){return void 0!==e.ref}function i(e){return void 0!==e.key}function c(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function a(e){return(""+e).replace(B,"$&/")}function f(e,t,n,r){if(Y.length){var o=Y.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function p(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,Y.length<W&&Y.push(e)}function s(e,t,n,r){var o=typeof e;if("undefined"!==o&&"boolean"!==o||(e=null),null===e||"string"===o||"number"===o||"object"===o&&e.$$typeof===D)return n(r,e,""===t?K+d(e,0):t),1;var u,l,i=0,c=""===t?K:t+M;if(Array.isArray(e))for(var a=0;a<e.length;a++)u=e[a],l=c+d(u,a),i+=s(u,l,n,r);else{var f=T&&e[T]||e[L];if("function"==typeof f)for(var p,y=f.call(e),m=0;!(p=y.next()).done;)u=p.value,l=c+d(u,m++),i+=s(u,l,n,r);else if("object"===o){var h=""+e;C("31","[object Object]"===h?"object with keys {"+Object.keys(e).join(", ")+"}":h,"")}}return i}function y(e,t,n){return null==e?0:s(e,"",t,n)}function d(e,t){return"object"==typeof e&&null!==e&&null!=e.key?c(e.key):t.toString(36)}function m(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function h(e,t,n){if(null==e)return e;var r=f(null,null,t,n);y(e,m,r),p(r)}function v(e,t,n){var r=e.result,o=e.keyPrefix,u=e.func,l=e.context,i=u.call(l,t,e.count++);Array.isArray(i)?b(i,r,n,j.thatReturnsArgument):null!=i&&(N.isValidElement(i)&&(i=N.cloneAndReplaceKey(i,o+(!i.key||t&&t.key===i.key?"":a(i.key)+"/")+n)),r.push(i))}function b(e,t,n,r,o){var u="";null!=n&&(u=a(n)+"/");var l=f(t,u,r,o);y(e,v,l),p(l)}function _(e,t,n){if(null==e)return e;var r=[];return b(e,r,null,t,n),r}function E(e,t){return y(e,j.thatReturnsNull,null)}function S(e){var t=[];return b(e,t,null,j.thatReturnsArgument),t}function k(e){return N.isValidElement(e)||C("143"),e}var A=__webpack_require__(3),g=__webpack_require__(4);__webpack_require__(5);var j=__webpack_require__(6),C=e,P={isMounted:function(e){return!1},enqueueForceUpdate:function(e,n,r){t(e,"forceUpdate")},enqueueReplaceState:function(e,n,r,o){t(e,"replaceState")},enqueueSetState:function(e,n,r,o){t(e,"setState")}},R=P;n.prototype.isReactComponent={},n.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&C("85"),this.updater.enqueueSetState(this,e,t,"setState")},n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=n.prototype;var x=r.prototype=new o;x.constructor=r,A(x,n.prototype),x.isPureReactComponent=!0;var w=u.prototype=new o;w.constructor=u,A(w,n.prototype),w.unstable_isAsyncReactComponent=!0,w.render=function(){return this.props.children};var O={Component:n,PureComponent:r,AsyncComponent:u},q={current:null},U=q,$=Object.prototype.hasOwnProperty,F="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V={key:!0,ref:!0,__self:!0,__source:!0},I=function(e,t,n,r,o,u,l){return{$$typeof:F,type:e,key:t,ref:n,props:l,_owner:u}};I.createElement=function(e,t,n){var r,o={},u=null,c=null,a=null,f=null;if(null!=t){l(t)&&(c=t.ref),i(t)&&(u=""+t.key),a=void 0===t.__self?null:t.__self,f=void 0===t.__source?null:t.__source;for(r in t)$.call(t,r)&&!V.hasOwnProperty(r)&&(o[r]=t[r])}var p=arguments.length-2;if(1===p)o.children=n;else if(p>1){for(var s=Array(p),y=0;y<p;y++)s[y]=arguments[y+2];o.children=s}if(e&&e.defaultProps){var d=e.defaultProps;for(r in d)void 0===o[r]&&(o[r]=d[r])}return I(e,u,c,a,f,U.current,o)},I.createFactory=function(e){var t=I.createElement.bind(null,e);return t.type=e,t},I.cloneAndReplaceKey=function(e,t){return I(e.type,t,e.ref,e._self,e._source,e._owner,e.props)},I.cloneElement=function(e,t,n){var r,o=A({},e.props),u=e.key,c=e.ref,a=e._self,f=e._source,p=e._owner;if(null!=t){l(t)&&(c=t.ref,p=U.current),i(t)&&(u=""+t.key);var s;e.type&&e.type.defaultProps&&(s=e.type.defaultProps);for(r in t)$.call(t,r)&&!V.hasOwnProperty(r)&&(void 0===t[r]&&void 0!==s?o[r]=s[r]:o[r]=t[r])}var y=arguments.length-2;if(1===y)o.children=n;else if(y>1){for(var d=Array(y),m=0;m<y;m++)d[m]=arguments[m+2];o.children=d}return I(e.type,u,c,a,f,p,o)},I.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===F};var N=I,T="function"==typeof Symbol&&Symbol.iterator,L="@@iterator",D="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,K=".",M=":",B=/\/+/g,W=10,Y=[],z={forEach:h,map:_,count:E,toArray:S},G=z,H="16.0.0-beta.2",J=k,Q=N.createElement,X=N.createFactory,Z=N.cloneElement,ee={Children:{map:G.map,forEach:G.forEach,count:G.count,toArray:G.toArray,only:J},Component:O.Component,PureComponent:O.PureComponent,unstable_AsyncComponent:O.AsyncComponent,createElement:Q,cloneElement:Z,isValidElement:N.isValidElement,createFactory:X,version:H,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:U}},te=ee;module.exports=te;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (false) {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }
	
	        return next(action);
	      };
	    };
	  };
	}
	
	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;
	
	exports['default'] = thunk;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(9);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(24);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(26);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(27);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(28);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(25);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(10);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(20);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(11),
	    getPrototype = __webpack_require__(17),
	    isObjectLike = __webpack_require__(19);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(12),
	    getRawTag = __webpack_require__(15),
	    objectToString = __webpack_require__(16);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(13);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(14);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(12);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(18);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(23);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(22)(module)))

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(9);
	
	var _isPlainObject = __webpack_require__(10);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(25);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (false) {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(28);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(30);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t(__webpack_require__(31),__webpack_require__(57)):"function"==typeof define&&define.amd?define(["react","react-redux"],t):"object"==typeof exports?exports.reactReduxWebaudio=t(require("react"),require("react-redux")):e.reactReduxWebaudio=t(e.react,e["react-redux"])}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.emit=t.clearEvtQueue=void 0;var r=n(1);t.clearEvtQueue=function(){return{type:r.CLEAR_EVT_QUEUE}},t.emit=function(e){return{type:r.QUEUE_EVENT,event:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.QUEUE_EVENT="QUEUE_EVENT",t.CLEAR_EVT_QUEUE="CLEAR_EVT_QUEUE",t.CREATE="CREATE",t.OSC="OSC",t.GAIN="GAIN"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),i=n(3),c=r(i),a=n(4),f=r(a);e.exports={RRWAEngine:f.default,actionCreators:u,webAudioReducer:c.default}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u={nodes:{},events:[]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n={nodes:e.nodes,events:[].concat(r(e.events))};switch(t.type){case o.CREATE:n.nodes[t.id]={type:t.nodeType};break;case o.QUEUE_EVENT:Array.isArray(t.event)?t.event.forEach(function(t,r){n.events.push({key:e.events.length+r,event:t})}):n.events.push({key:e.events.length,event:t.event});break;case o.CLEAR_EVT_QUEUE:n.events=[]}return n};t.default=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.RRWA=t.mapDispatch=t.mapState=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(5),f=n(6),s=n(0),l=window.AudioContext||window.webkitAudioContext,p=t.mapState=function(e){var t=e.webAudioReducer;return c({},t)},d=t.mapDispatch=function(e){return{clearQ:function(){return e((0,s.clearEvtQueue)())}}},v=t.RRWA=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getCurrTime=n.getCurrTime.bind(n),n}return u(t,e),i(t,[{key:"componentWillMount",value:function(){l&&(this.audioContext=new l)}},{key:"componentWillUnmount",value:function(){this.audioContext.close()}},{key:"componentWillReceiveProps",value:function(e){e.events.length&&(e.events.forEach(this.processEvent.bind(this)),e.clearQ())}},{key:"shouldComponentUpdate",value:function(e){return e.events.length>0}},{key:"processEvent",value:function(e){(0,e.event)(this.audioContext,this.getCurrTime())}},{key:"getCurrTime",value:function(){return this.audioContext.currentTime}},{key:"render",value:function(){return null}}]),t}(a.Component);t.default=(0,f.connect)(p,d)(v)},function(t,n){t.exports=e},function(e,n){e.exports=t}])});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(32);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(3);
	
	var ReactBaseClasses = __webpack_require__(33);
	var ReactChildren = __webpack_require__(39);
	var ReactDOMFactories = __webpack_require__(47);
	var ReactElement = __webpack_require__(41);
	var ReactPropTypes = __webpack_require__(48);
	var ReactVersion = __webpack_require__(53);
	
	var createReactClass = __webpack_require__(54);
	var onlyChild = __webpack_require__(56);
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	
	if (false) {
	  var lowPriorityWarning = require('./lowPriorityWarning');
	  var canDefineProperty = require('./canDefineProperty');
	  var ReactElementValidator = require('./ReactElementValidator');
	  var didWarnPropTypesDeprecated = false;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}
	
	var __spread = _assign;
	var createMixin = function (mixin) {
	  return mixin;
	};
	
	if (false) {
	  var warnedForSpread = false;
	  var warnedForCreateMixin = false;
	  __spread = function () {
	    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
	    warnedForSpread = true;
	    return _assign.apply(null, arguments);
	  };
	
	  createMixin = function (mixin) {
	    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
	    warnedForCreateMixin = true;
	    return mixin;
	  };
	}
	
	var React = {
	  // Modern
	
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },
	
	  Component: ReactBaseClasses.Component,
	  PureComponent: ReactBaseClasses.PureComponent,
	
	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,
	
	  // Classic
	
	  PropTypes: ReactPropTypes,
	  createClass: createReactClass,
	  createFactory: createFactory,
	  createMixin: createMixin,
	
	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,
	
	  version: ReactVersion,
	
	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};
	
	if (false) {
	  var warnedForCreateClass = false;
	  if (canDefineProperty) {
	    Object.defineProperty(React, 'PropTypes', {
	      get: function () {
	        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
	        didWarnPropTypesDeprecated = true;
	        return ReactPropTypes;
	      }
	    });
	
	    Object.defineProperty(React, 'createClass', {
	      get: function () {
	        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
	        warnedForCreateClass = true;
	        return createReactClass;
	      }
	    });
	  }
	
	  // React.DOM factories are deprecated. Wrap these methods so that
	  // invocations of the React.DOM namespace and alert users to switch
	  // to the `react-dom-factories` package.
	  React.DOM = {};
	  var warnedForFactories = false;
	  Object.keys(ReactDOMFactories).forEach(function (factory) {
	    React.DOM[factory] = function () {
	      if (!warnedForFactories) {
	        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
	        warnedForFactories = true;
	      }
	      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
	    };
	  });
	}
	
	module.exports = React;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(34),
	    _assign = __webpack_require__(3);
	
	var ReactNoopUpdateQueue = __webpack_require__(35);
	
	var canDefineProperty = __webpack_require__(37);
	var emptyObject = __webpack_require__(4);
	var invariant = __webpack_require__(5);
	var lowPriorityWarning = __webpack_require__(38);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ?  false ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (false) {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;
	
	module.exports = {
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */
	
	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;
	
	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;
	
	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }
	
	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
	
	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame
	
	  throw error;
	}
	
	module.exports = reactProdInvariant;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var warning = __webpack_require__(36);
	
	function warnNoop(publicInstance, callerName) {
	  if (false) {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};
	
	module.exports = ReactNoopUpdateQueue;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(6);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (false) {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var canDefineProperty = false;
	if (false) {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	module.exports = canDefineProperty;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var lowPriorityWarning = function () {};
	
	if (false) {
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = lowPriorityWarning;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(40);
	var ReactElement = __webpack_require__(41);
	
	var emptyFunction = __webpack_require__(6);
	var traverseAllChildren = __webpack_require__(44);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};
	
	module.exports = ReactChildren;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(34);
	
	var invariant = __webpack_require__(5);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ?  false ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};
	
	module.exports = PooledClass;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(3);
	
	var ReactCurrentOwner = __webpack_require__(42);
	
	var warning = __webpack_require__(36);
	var canDefineProperty = __webpack_require__(37);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	var REACT_ELEMENT_TYPE = __webpack_require__(43);
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown, specialPropRefWarningShown;
	
	function hasValidRef(config) {
	  if (false) {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}
	
	function hasValidKey(config) {
	  if (false) {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}
	
	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	       false ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}
	
	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	       false ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}
	
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  if (false) {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (false) {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (false) {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	};
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;
	
	  // Original props are copied
	  var props = _assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	
	module.exports = ReactElement;

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};
	
	module.exports = ReactCurrentOwner;

/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	module.exports = REACT_ELEMENT_TYPE;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(34);
	
	var ReactCurrentOwner = __webpack_require__(42);
	var REACT_ELEMENT_TYPE = __webpack_require__(43);
	
	var getIteratorFn = __webpack_require__(45);
	var invariant = __webpack_require__(5);
	var KeyEscapeUtils = __webpack_require__(46);
	var warning = __webpack_require__(36);
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (false) {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (false) {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ?  false ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	module.exports = traverseAllChildren;

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/* global Symbol */
	
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	
	module.exports = getIteratorFn;

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
	
	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}
	
	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};
	
	module.exports = KeyEscapeUtils;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(41);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (false) {
	  var ReactElementValidator = require('./ReactElementValidator');
	  createDOMFactory = ReactElementValidator.createFactory;
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),
	
	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};
	
	module.exports = ReactDOMFactories;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _require = __webpack_require__(41),
	    isValidElement = _require.isValidElement;
	
	var factory = __webpack_require__(49);
	
	module.exports = factory(isValidElement);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	// React 15.5 references this module, and assumes PropTypes are still callable in production.
	// Therefore we re-export development-only version with all the PropTypes checks here.
	// However if one is migrating to the `prop-types` npm library, they will go through the
	// `index.js` entry point, and it will branch depending on the environment.
	var factory = __webpack_require__(50);
	module.exports = function(isValidElement) {
	  // It is still allowed in 15.5.
	  var throwOnDirectAccess = false;
	  return factory(isValidElement, throwOnDirectAccess);
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(5);
	var warning = __webpack_require__(36);
	
	var ReactPropTypesSecret = __webpack_require__(51);
	var checkPropTypes = __webpack_require__(52);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (false) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (false) {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       false ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       false ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (false) {
	  var invariant = require('fbjs/lib/invariant');
	  var warning = require('fbjs/lib/warning');
	  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (false) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	module.exports = '15.6.1';

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _require = __webpack_require__(33),
	    Component = _require.Component;
	
	var _require2 = __webpack_require__(41),
	    isValidElement = _require2.isValidElement;
	
	var ReactNoopUpdateQueue = __webpack_require__(35);
	var factory = __webpack_require__(55);
	
	module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(3);
	
	var emptyObject = __webpack_require__(4);
	var _invariant = __webpack_require__(5);
	
	if (false) {
	  var warning = require('fbjs/lib/warning');
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (false) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (false) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (false) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (false) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (false) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (false) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (false) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (false) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (false) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (false) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (false) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';
	
	var _prodInvariant = __webpack_require__(34);
	
	var ReactElement = __webpack_require__(41);
	
	var invariant = __webpack_require__(5);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ?  false ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}
	
	module.exports = onlyChild;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(58);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connectAdvanced = __webpack_require__(63);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _connect = __webpack_require__(67);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Provider = _Provider2.default;
	exports.createProvider = _Provider.createProvider;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createProvider = createProvider;
	
	var _react = __webpack_require__(31);
	
	var _propTypes = __webpack_require__(59);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PropTypes = __webpack_require__(61);
	
	var _warning = __webpack_require__(62);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	function createProvider() {
	  var _Provider$childContex;
	
	  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
	  var subKey = arguments[1];
	
	  var subscriptionKey = subKey || storeKey + 'Subscription';
	
	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);
	
	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;
	
	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };
	
	    function Provider(props, context) {
	      _classCallCheck(this, Provider);
	
	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	      _this[storeKey] = props.store;
	      return _this;
	    }
	
	    Provider.prototype.render = function render() {
	      return _react.Children.only(this.props.children);
	    };
	
	    return Provider;
	  }(_react.Component);
	
	  if (false) {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }
	
	  Provider.propTypes = {
	    store: _PropTypes.storeShape.isRequired,
	    children: _propTypes2.default.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
	  Provider.displayName = 'Provider';
	
	  return Provider;
	}
	
	exports.default = createProvider();

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(60)();
	}


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(5);
	var ReactPropTypesSecret = __webpack_require__(51);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;
	
	var _propTypes = __webpack_require__(59);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
	  trySubscribe: _propTypes2.default.func.isRequired,
	  tryUnsubscribe: _propTypes2.default.func.isRequired,
	  notifyNestedSubs: _propTypes2.default.func.isRequired,
	  isSubscribed: _propTypes2.default.func.isRequired
	});
	
	var storeShape = exports.storeShape = _propTypes2.default.shape({
	  subscribe: _propTypes2.default.func.isRequired,
	  dispatch: _propTypes2.default.func.isRequired,
	  getState: _propTypes2.default.func.isRequired
	});

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = connectAdvanced;
	
	var _hoistNonReactStatics = __webpack_require__(64);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(65);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(31);
	
	var _Subscription = __webpack_require__(66);
	
	var _Subscription2 = _interopRequireDefault(_Subscription);
	
	var _PropTypes = __webpack_require__(61);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };
	
	  return selector;
	}
	
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);
	
	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;
	
	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
	
	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));
	
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	
	    var displayName = getDisplayName(wrappedComponentName);
	
	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
	
	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
	
	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }
	
	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;
	
	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;
	
	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };
	
	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };
	
	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };
	
	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;
	
	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));
	
	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };
	
	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);
	
	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };
	
	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };
	
	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };
	
	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;
	
	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;
	
	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();
	
	          if (this.subscription) this.subscription.tryUnsubscribe();
	          this.initSubscription();
	          if (shouldHandleStateChanges) this.subscription.trySubscribe();
	        }
	      };
	    }
	
	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	
	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};
	
	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];
	
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}
	
	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);
	
	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }
	
	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };
	
	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };
	
	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };
	
	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
	
	      this.listeners = createListenerCollection();
	    }
	  };
	
	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };
	
	  return Subscription;
	}();
	
	exports.default = Subscription;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createConnect = createConnect;
	
	var _connectAdvanced = __webpack_require__(63);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _shallowEqual = __webpack_require__(68);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _mapDispatchToProps = __webpack_require__(69);
	
	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);
	
	var _mapStateToProps = __webpack_require__(79);
	
	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);
	
	var _mergeProps = __webpack_require__(80);
	
	var _mergeProps2 = _interopRequireDefault(_mergeProps);
	
	var _selectorFactory = __webpack_require__(81);
	
	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:
	
	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.
	
	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.
	
	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */
	
	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }
	
	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}
	
	function strictEqual(a, b) {
	  return a === b;
	}
	
	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);
	
	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	
	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',
	
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },
	
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	
	    }, extraOptions));
	  };
	}
	
	exports.default = createConnect();

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) return false;
	
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
	
	var _redux = __webpack_require__(70);
	
	var _wrapMapToProps = __webpack_require__(77);
	
	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}
	
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	
	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(71);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(72);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(74);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(75);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(76);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(73);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(10);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(20);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	
	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(71);
	
	var _isPlainObject = __webpack_require__(10);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(73);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var unexpectedKeyCache = void 0;
	  if (false) {
	    unexpectedKeyCache = {};
	  }
	
	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	
	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(76);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
	
	var _verifyPlainObject = __webpack_require__(78);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);
	
	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}
	
	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}
	
	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;
	
	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };
	
	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;
	
	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);
	
	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }
	
	      if (false) (0, _verifyPlainObject2.default)(props, displayName, methodName);
	
	      return props;
	    };
	
	    return proxy;
	  };
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifyPlainObject;
	
	var _isPlainObject = __webpack_require__(10);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(62);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
	
	var _wrapMapToProps = __webpack_require__(77);
	
	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}
	
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}
	
	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
	
	var _verifyPlainObject = __webpack_require__(78);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}
	
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	
	    var hasRunOnce = false;
	    var mergedProps = void 0;
	
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	
	        if (false) (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }
	
	      return mergedProps;
	    };
	  };
	}
	
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	
	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;
	
	var _verifySubselectors = __webpack_require__(82);
	
	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	
	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;
	
	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }
	
	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	    return mergedProps;
	  }
	
	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }
	
	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}
	
	// TODO: Add more comments
	
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.
	
	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);
	
	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);
	
	  if (false) {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }
	
	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifySubselectors;
	
	var _warning = __webpack_require__(62);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}
	
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(84);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connectAdvanced = __webpack_require__(87);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _connect = __webpack_require__(89);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Provider = _Provider2.default;
	exports.createProvider = _Provider.createProvider;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createProvider = createProvider;
	
	var _react = __webpack_require__(1);
	
	var _propTypes = __webpack_require__(59);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PropTypes = __webpack_require__(85);
	
	var _warning = __webpack_require__(86);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	function createProvider() {
	  var _Provider$childContex;
	
	  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
	  var subKey = arguments[1];
	
	  var subscriptionKey = subKey || storeKey + 'Subscription';
	
	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);
	
	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;
	
	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };
	
	    function Provider(props, context) {
	      _classCallCheck(this, Provider);
	
	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	      _this[storeKey] = props.store;
	      return _this;
	    }
	
	    Provider.prototype.render = function render() {
	      return _react.Children.only(this.props.children);
	    };
	
	    return Provider;
	  }(_react.Component);
	
	  if (false) {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }
	
	  Provider.propTypes = {
	    store: _PropTypes.storeShape.isRequired,
	    children: _propTypes2.default.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
	  Provider.displayName = 'Provider';
	
	  return Provider;
	}
	
	exports.default = createProvider();

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;
	
	var _propTypes = __webpack_require__(59);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
	  trySubscribe: _propTypes2.default.func.isRequired,
	  tryUnsubscribe: _propTypes2.default.func.isRequired,
	  notifyNestedSubs: _propTypes2.default.func.isRequired,
	  isSubscribed: _propTypes2.default.func.isRequired
	});
	
	var storeShape = exports.storeShape = _propTypes2.default.shape({
	  subscribe: _propTypes2.default.func.isRequired,
	  dispatch: _propTypes2.default.func.isRequired,
	  getState: _propTypes2.default.func.isRequired
	});

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = connectAdvanced;
	
	var _hoistNonReactStatics = __webpack_require__(64);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(65);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _Subscription = __webpack_require__(88);
	
	var _Subscription2 = _interopRequireDefault(_Subscription);
	
	var _PropTypes = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };
	
	  return selector;
	}
	
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);
	
	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;
	
	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
	
	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));
	
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	
	    var displayName = getDisplayName(wrappedComponentName);
	
	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
	
	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
	
	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }
	
	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;
	
	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;
	
	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };
	
	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };
	
	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };
	
	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;
	
	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));
	
	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };
	
	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);
	
	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };
	
	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };
	
	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };
	
	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;
	
	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;
	
	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();
	
	          if (this.subscription) this.subscription.tryUnsubscribe();
	          this.initSubscription();
	          if (shouldHandleStateChanges) this.subscription.trySubscribe();
	        }
	      };
	    }
	
	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	
	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};
	
	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];
	
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}
	
	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);
	
	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }
	
	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };
	
	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };
	
	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };
	
	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
	
	      this.listeners = createListenerCollection();
	    }
	  };
	
	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };
	
	  return Subscription;
	}();
	
	exports.default = Subscription;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createConnect = createConnect;
	
	var _connectAdvanced = __webpack_require__(87);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _shallowEqual = __webpack_require__(90);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _mapDispatchToProps = __webpack_require__(91);
	
	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);
	
	var _mapStateToProps = __webpack_require__(94);
	
	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);
	
	var _mergeProps = __webpack_require__(95);
	
	var _mergeProps2 = _interopRequireDefault(_mergeProps);
	
	var _selectorFactory = __webpack_require__(96);
	
	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:
	
	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.
	
	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.
	
	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */
	
	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }
	
	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}
	
	function strictEqual(a, b) {
	  return a === b;
	}
	
	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);
	
	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	
	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',
	
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },
	
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	
	    }, extraOptions));
	  };
	}
	
	exports.default = createConnect();

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) return false;
	
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
	
	var _redux = __webpack_require__(8);
	
	var _wrapMapToProps = __webpack_require__(92);
	
	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}
	
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	
	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
	
	var _verifyPlainObject = __webpack_require__(93);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);
	
	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}
	
	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}
	
	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;
	
	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };
	
	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;
	
	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);
	
	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }
	
	      if (false) (0, _verifyPlainObject2.default)(props, displayName, methodName);
	
	      return props;
	    };
	
	    return proxy;
	  };
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifyPlainObject;
	
	var _isPlainObject = __webpack_require__(10);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(86);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
	
	var _wrapMapToProps = __webpack_require__(92);
	
	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}
	
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}
	
	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
	
	var _verifyPlainObject = __webpack_require__(93);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}
	
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	
	    var hasRunOnce = false;
	    var mergedProps = void 0;
	
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	
	        if (false) (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }
	
	      return mergedProps;
	    };
	  };
	}
	
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	
	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;
	
	var _verifySubselectors = __webpack_require__(97);
	
	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	
	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;
	
	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }
	
	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	    return mergedProps;
	  }
	
	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }
	
	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}
	
	// TODO: Add more comments
	
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.
	
	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);
	
	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);
	
	  if (false) {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }
	
	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifySubselectors;
	
	var _warning = __webpack_require__(86);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}
	
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(99);
	} else {
	  module.exports = require('./cjs/react-dom.development.js');
	}


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function e(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}function t(){if(Fn)for(var e in In){var t=In[e],r=Fn.indexOf(e);if(r>-1||On("96",e),!Mn.plugins[r]){t.extractEvents||On("97",e),Mn.plugins[r]=t;var o=t.eventTypes;for(var a in o)n(o[a],t,a)||On("98",a,e)}}}function n(e,t,n){Mn.eventNameDispatchConfigs.hasOwnProperty(n)&&On("99",n),Mn.eventNameDispatchConfigs[n]=e;var o=e.phasedRegistrationNames;if(o){for(var a in o)if(o.hasOwnProperty(a)){var i=o[a];r(i,t,n)}return!0}return!!e.registrationName&&(r(e.registrationName,t,n),!0)}function r(e,t,n){Mn.registrationNameModules[e]&&On("100",e),Mn.registrationNameModules[e]=t,Mn.registrationNameDependencies[e]=t.eventTypes[n].dependencies}function o(e,t){return(e&t)===t}function a(e,t){return e.nodeType===nr&&e.getAttribute(or)===""+t||e.nodeType===rr&&e.nodeValue===" react-text: "+t+" "||e.nodeType===rr&&e.nodeValue===" react-empty: "+t+" "}function i(e){for(var t;t=e._renderedComponent;)e=t;return e}function l(e,t){var n=i(e);n._hostNode=t,t[lr]=n}function u(e,t){t[lr]=e}function s(e){var t=e._hostNode;t&&(delete t[lr],e._hostNode=null)}function c(e,t){if(!(e._flags&ar.hasCachedChildNodes)){var n=e._renderedChildren,r=t.firstChild;e:for(var o in n)if(n.hasOwnProperty(o)){var u=n[o],s=i(u)._domID;if(0!==s){for(;null!==r;r=r.nextSibling)if(a(r,s)){l(u,r);continue e}On("32",s)}}e._flags|=ar.hasCachedChildNodes}}function p(e){if(e[lr])return e[lr];for(var t=[];!e[lr];){if(t.push(e),!e.parentNode)return null;e=e.parentNode}var n,r=e[lr];if(r.tag===er||r.tag===tr)return r;for(;e&&(r=e[lr]);e=t.pop())n=r,t.length&&c(r,e);return n}function d(e){var t=e[lr];return t?t.tag===er||t.tag===tr?t:t._hostNode===e?t:null:(t=p(e),null!=t&&t._hostNode===e?t:null)}function f(e){if(e.tag===er||e.tag===tr)return e.stateNode;if(void 0===e._hostNode&&On("33"),e._hostNode)return e._hostNode;for(var t=[];!e._hostNode;)t.push(e),e._hostParent||On("34"),e=e._hostParent;for(;t.length;e=t.pop())c(e,e._hostNode);return e._hostNode}function h(e){return e[ur]||null}function g(e,t){e[ur]=t}function m(e){if("function"==typeof e.getName){return e.getName()}if("number"==typeof e.tag){var t=e,n=t.type;if("string"==typeof n)return n;if("function"==typeof n)return n.displayName||n.name}return null}function v(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if((t.effectTag&Pr)!==kr)return Tr;for(;t.return;)if(t=t.return,(t.effectTag&Pr)!==kr)return Tr}return t.tag===br?xr:wr}function y(e){v(e)!==xr&&On("188")}function b(e){var t=e.alternate;if(!t){var n=v(e);return n===wr&&On("188"),n===Tr?null:e}for(var r=e,o=t;;){var a=r.return,i=a?a.alternate:null;if(!a||!i)break;if(a.child===i.child){for(var l=a.child;l;){if(l===r)return y(a),e;if(l===o)return y(a),t;l=l.sibling}On("188")}if(r.return!==o.return)r=a,o=i;else{for(var u=!1,s=a.child;s;){if(s===r){u=!0,r=a,o=i;break}if(s===o){u=!0,o=a,r=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===r){u=!0,r=i,o=a;break}if(s===o){u=!0,o=i,r=a;break}s=s.sibling}u||On("189")}}r.alternate!==o&&On("190")}return r.tag!==br&&On("188"),r.stateNode.current===r?e:t}function C(e){return"topMouseUp"===e||"topTouchEnd"===e||"topTouchCancel"===e}function E(e){return"topMouseMove"===e||"topTouchMove"===e}function k(e){return"topMouseDown"===e||"topTouchStart"===e}function P(e,t,n,r){var o=e.type||"unknown-event";e.currentTarget=Hr.getNodeFromInstance(r),Rr.invokeGuardedCallbackAndCatchFirstError(o,n,void 0,e),e.currentTarget=null}function T(e,t){var n=e._dispatchListeners,r=e._dispatchInstances;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)P(e,t,n[o],r[o]);else n&&P(e,t,n,r);e._dispatchListeners=null,e._dispatchInstances=null}function x(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function w(e){var t=x(e);return e._dispatchInstances=null,e._dispatchListeners=null,t}function N(e){var t=e._dispatchListeners,n=e._dispatchInstances;Array.isArray(t)&&On("103"),e.currentTarget=t?Hr.getNodeFromInstance(n):null;var r=t?t(e):null;return e.currentTarget=null,e._dispatchListeners=null,e._dispatchInstances=null,r}function S(e){return!!e._dispatchListeners}function _(e){var t=Wr.getInstanceFromNode(e);if(t){if("number"==typeof t.tag){Vr&&"function"==typeof Vr.restoreControlledState||On("194");var n=Wr.getFiberCurrentPropsFromNode(t.stateNode);return void Vr.restoreControlledState(t.stateNode,t.type,n)}"function"!=typeof t.restoreControlledState&&On("195"),t.restoreControlledState()}}function O(e,t){return Qr(e,t)}function F(e,t){return Yr(O,e,t)}function I(e,t){if($r)return F(e,t);$r=!0;try{return F(e,t)}finally{$r=!1,qr.restoreStateIfNeeded()}}function M(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===Jr?t.parentNode:t}function A(e){if("number"==typeof e.tag){for(;e.return;)e=e.return;return e.tag!==to?null:e.stateNode.containerInfo}for(;e._hostParent;)e=e._hostParent;return cr.getNodeFromInstance(e).parentNode}function D(e,t,n){this.topLevelType=e,this.nativeEvent=t,this.targetInst=n,this.ancestors=[]}function R(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=A(n);if(!r)break;e.ancestors.push(n),n=cr.getClosestInstanceFromNode(r)}while(n);for(var o=0;o<e.ancestors.length;o++)t=e.ancestors[o],no._handleTopLevel(e.topLevelType,t,e.nativeEvent,eo(e.nativeEvent))}function U(e,t){return null==t&&On("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function L(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}function H(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}function W(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":return!(!n.disabled||!H(t));default:return!1}}function V(e){po.enqueueEvents(e),po.processEventQueue(!1)}function B(e,t){if(!Pn.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var o=document.createElement("div");o.setAttribute(n,"return;"),r="function"==typeof o[n]}return!r&&go&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}function j(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}function z(e){if(yo[e])return yo[e];if(!vo[e])return e;var t=vo[e];for(var n in t)if(t.hasOwnProperty(n)&&n in bo)return yo[e]=t[n];return""}function K(e){return Object.prototype.hasOwnProperty.call(e,No)||(e[No]=wo++,xo[e[No]]={}),xo[e[No]]}function q(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}function Y(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ho.hasOwnProperty(e)&&Ho[e]?(""+t).trim():t+"px"}function Q(e){return!!$o.hasOwnProperty(e)||!Qo.hasOwnProperty(e)&&(Yo.test(e)?($o[e]=!0,!0):(Qo[e]=!0,!1))}function $(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&t<1||e.hasOverloadedBooleanValue&&!1===t}function X(){return null}function G(){return null}function Z(){Zo.getCurrentStack=null,Jo.current=null,Jo.phase=null}function J(e,t){Zo.getCurrentStack=G,Jo.current=e,Jo.phase=t}function ee(e){return"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}function te(e,t){var n=t.name;if("radio"===t.type&&null!=n){for(var r=e;r.parentNode;)r=r.parentNode;for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),a=0;a<o.length;a++){var i=o[a];if(i!==e&&i.form===e.form){var l=cr.getFiberCurrentPropsFromNode(i);l||On("90"),ta.updateWrapper(i,l)}}}}function ne(e){var t="";return kn.Children.forEach(e,function(e){null!=e&&("string"!=typeof e&&"number"!=typeof e||(t+=e))}),t}function re(e,t,n){var r=e.options;if(t){for(var o=n,a={},i=0;i<o.length;i++)a["$"+o[i]]=!0;for(var l=0;l<r.length;l++){var u=a.hasOwnProperty("$"+r[l].value);r[l].selected!==u&&(r[l].selected=u)}}else{for(var s=""+n,c=0;c<r.length;c++)if(r[c].value===s)return void(r[c].selected=!0);r.length&&(r[0].selected=!0)}}function oe(e){return""}function ae(e,t,n){t&&(ha[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&On("137",e,oe(n)),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&On("60"),"object"==typeof t.dangerouslySetInnerHTML&&ga in t.dangerouslySetInnerHTML||On("61")),null!=t.style&&"object"!=typeof t.style&&On("62",oe(n)))}function ie(e){var t=e.type,n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===t||"radio"===t)}function le(e){return e._valueTracker}function ue(e){e._valueTracker=null}function se(e){var t="";return e?t=ie(e)?e.checked?"true":"false":e.value:t}function ce(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"function"==typeof n.get&&"function"==typeof n.set){Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:!0,get:function(){return n.get.call(this)},set:function(e){r=""+e,n.set.call(this,e)}});return{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){ue(e),delete e[t]}}}}function pe(e,t){return e.indexOf("-")>=0||null!=t.is}function de(e){var t=""+e,n=xa.exec(t);if(!n)return t;var r,o="",a=0,i=0;for(a=n.index;a<t.length;a++){switch(t.charCodeAt(a)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#x27;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}i!==a&&(o+=t.substring(i,a)),i=a+1,o+=r}return i!==a?o+t.substring(i,a):o}function fe(e){return"boolean"==typeof e||"number"==typeof e?""+e:de(e)}function he(e,t){var n=e.nodeType===Fa||e.nodeType===Ia,r=n?e:e.ownerDocument;Ma(t,r)}function ge(e){e.onclick=Tn}function me(e,t){switch(t){case"iframe":case"object":_o.trapBubbledEvent("topLoad","load",e);break;case"video":case"audio":for(var n in ja)ja.hasOwnProperty(n)&&_o.trapBubbledEvent(n,ja[n],e);break;case"source":_o.trapBubbledEvent("topError","error",e);break;case"img":case"image":_o.trapBubbledEvent("topError","error",e),_o.trapBubbledEvent("topLoad","load",e);break;case"form":_o.trapBubbledEvent("topReset","reset",e),_o.trapBubbledEvent("topSubmit","submit",e);break;case"input":case"select":case"textarea":_o.trapBubbledEvent("topInvalid","invalid",e);break;case"details":_o.trapBubbledEvent("topToggle","toggle",e)}}function ve(e,t,n,r){for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];if(o===La)zo.setValueForStyles(e,a);else if(o===Da){var i=a?a[Ha]:void 0;null!=i&&Ta(e,i)}else o===Ua?"string"==typeof a?_a(e,a):"number"==typeof a&&_a(e,""+a):o===Ra||(Aa.hasOwnProperty(o)?a&&he(t,o):r?Go.setValueForAttribute(e,o,a):(Qn.properties[o]||Qn.isCustomAttribute(o))&&null!=a&&Go.setValueForProperty(e,o,a))}}function ye(e,t,n,r){for(var o=0;o<t.length;o+=2){var a=t[o],i=t[o+1];a===La?zo.setValueForStyles(e,i):a===Da?Ta(e,i):a===Ua?_a(e,i):r?null!=i?Go.setValueForAttribute(e,a,i):Go.deleteValueForAttribute(e,a):(Qn.properties[a]||Qn.isCustomAttribute(a))&&(null!=i?Go.setValueForProperty(e,a,i):Go.deleteValueForProperty(e,a))}}function be(e){switch(e){case"svg":return Va;case"math":return Ba;default:return Wa}}function Ce(e,t){return e!==di&&e!==pi||t!==di&&t!==pi?e===ci&&t!==ci?-255:e!==ci&&t===ci?255:e-t:0}function Ee(){return{first:null,last:null,hasForceUpdate:!1,callbackList:null}}function ke(e){return{priorityLevel:e.priorityLevel,partialState:e.partialState,callback:e.callback,isReplace:e.isReplace,isForced:e.isForced,isTopLevelUnmount:e.isTopLevelUnmount,next:null}}function Pe(e,t,n,r){null!==n?n.next=t:(t.next=e.first,e.first=t),null!==r?t.next=r:e.last=t}function Te(e,t){var n=t.priorityLevel,r=null,o=null;if(null!==e.last&&Ce(e.last.priorityLevel,n)<=0)r=e.last;else for(o=e.first;null!==o&&Ce(o.priorityLevel,n)<=0;)r=o,o=o.next;return r}function xe(e){var t=e.alternate,n=e.updateQueue;null===n&&(n=e.updateQueue=Ee());var r=void 0;return null!==t?null===(r=t.updateQueue)&&(r=t.updateQueue=Ee()):r=null,[n,r!==n?r:null]}function we(e,t){var n=xe(e),r=n[0],o=n[1],a=Te(r,t),i=null!==a?a.next:r.first;if(null===o)return Pe(r,t,a,i),null;var l=Te(o,t),u=null!==l?l.next:o.first;if(Pe(r,t,a,i),i===u&&null!==i||a===l&&null!==a)return null===l&&(o.first=t),null===u&&(o.last=null),null;var s=ke(t);return Pe(o,s,l,u),s}function Ne(e,t,n,r){we(e,{priorityLevel:r,partialState:t,callback:n,isReplace:!1,isForced:!1,isTopLevelUnmount:!1,next:null})}function Se(e,t,n,r){we(e,{priorityLevel:r,partialState:t,callback:n,isReplace:!0,isForced:!1,isTopLevelUnmount:!1,next:null})}function _e(e,t,n){we(e,{priorityLevel:n,partialState:null,callback:t,isReplace:!1,isForced:!0,isTopLevelUnmount:!1,next:null})}function Oe(e){var t=e.updateQueue;return null===t?ci:e.tag!==fi&&e.tag!==hi?ci:null!==t.first?t.first.priorityLevel:ci}function Fe(e,t,n,r){var o=null===t.element,a={priorityLevel:r,partialState:t,callback:n,isReplace:!1,isForced:!1,isTopLevelUnmount:o,next:null},i=we(e,a);if(o){var l=xe(e),u=l[0],s=l[1];null!==u&&null!==a.next&&(a.next=null,u.last=a),null!==s&&null!==i&&null!==i.next&&(i.next=null,s.last=a)}}function Ie(e,t,n,r){var o=e.partialState;if("function"==typeof o){return o.call(t,n,r)}return o}function Me(e,t,n,r,o,a,i){if(null!==e&&e.updateQueue===n){var l=n;n=t.updateQueue={first:l.first,last:l.last,callbackList:null,hasForceUpdate:!1}}for(var u=n.callbackList,s=n.hasForceUpdate,c=o,p=!0,d=n.first;null!==d&&Ce(d.priorityLevel,i)<=0;){n.first=d.next,null===n.first&&(n.last=null);var f=void 0;d.isReplace?(c=Ie(d,r,c,a),p=!0):(f=Ie(d,r,c,a))&&(c=p?bn({},c,f):bn(c,f),p=!1),d.isForced&&(s=!0),null===d.callback||d.isTopLevelUnmount&&null!==d.next||(u=null!==u?u:[],u.push(d.callback),t.effectTag|=si),d=d.next}return n.callbackList=u,n.hasForceUpdate=s,null!==n.first||null!==u||s||(t.updateQueue=null),c}function Ae(e,t,n){var r=t.callbackList;if(null!==r){t.callbackList=null;for(var o=0;o<r.length;o++){var a=r[o];"function"!=typeof a&&On("191",a),a.call(n)}}}function De(e){return Le(e)?Wi:Li.current}function Re(e,t,n){var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}function Ue(e){return e.tag===Mi&&null!=e.type.contextTypes}function Le(e){return e.tag===Mi&&null!=e.type.childContextTypes}function He(e){Le(e)&&(Ri(Hi,e),Ri(Li,e))}function We(e,t,n){var r=e.stateNode,o=e.type.childContextTypes;if("function"!=typeof r.getChildContext)return t;var a=void 0;a=r.getChildContext();for(var i in a)i in o||On("108",mr(e)||"Unknown",i);return Fi({},t,a)}function Ve(e){return!(!e.prototype||!e.prototype.isReactComponent)}function Be(e,t,n,r){var o=void 0;if("function"==typeof e)o=Ve(e)?hl(rl,t,n):hl(nl,t,n),o.type=e;else if("string"==typeof e)o=hl(al,t,n),o.type=e;else if("object"==typeof e&&null!==e&&"number"==typeof e.tag)o=e;else{On("130",null==e?e:typeof e,"")}return o}function je(e){switch(e.tag){case Fl:case Il:case Ml:case Al:var t=e._debugOwner,n=e._debugSource,r=mr(e),o=null;return t&&(o=mr(t)),Ol(r,n,o);default:return""}}function ze(e){var t="",n=e;do{t+=je(n),n=n.return}while(n);return t}function Ke(e){if(!1!==Ul(e)){var t=e.error;null!==t&&"string"==typeof t.message&&"string"==typeof t.name&&"string"==typeof t.stack&&(t.message,t.name,t.stack),console.error("React caught an error thrown by one of your components.\n\n"+t.stack)}}function qe(e){if(null===e||void 0===e)return null;var t=ku&&e[ku]||e[Pu];return"function"==typeof t?t:null}function Ye(e,t){var n=t.ref;if(null!==n&&"function"!=typeof n){if(t._owner){var r=t._owner,o=void 0;if(r)if("number"==typeof r.tag){var a=r;a.tag!==fu&&On("110"),o=a.stateNode}else o=r.getPublicInstance();o||On("147",n);var i=""+n;if(null!==e&&null!==e.ref&&e.ref._stringRef===i)return e.ref;var l=function(e){var t=o.refs===xn?o.refs={}:o.refs;null===e?delete t[i]:t[i]=e};return l._stringRef=i,l}"string"!=typeof n&&On("148"),t._owner||On("149",n)}return n}function Qe(e,t){if("textarea"!==e.type){On("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}}function $e(e,t){function n(n,r){if(t){if(!e){if(null===r.alternate)return;r=r.alternate}var o=n.lastEffect;null!==o?(o.nextEffect=r,n.lastEffect=r):n.firstEffect=n.lastEffect=r,r.nextEffect=null,r.effectTag=Eu}}function r(e,r){if(!t)return null;for(var o=r;null!==o;)n(e,o),o=o.sibling;return null}function o(e,t){for(var n=new Map,r=t;null!==r;)null!==r.key?n.set(r.key,r):n.set(r.index,r),r=r.sibling;return n}function a(t,n){if(e){var r=ou(t,n);return r.index=0,r.sibling=null,r}return t.pendingWorkPriority=n,t.effectTag=bu,t.index=0,t.sibling=null,t}function i(e,n,r){if(e.index=r,!t)return n;var o=e.alternate;if(null!==o){var a=o.index;return a<n?(e.effectTag=Cu,n):a}return e.effectTag=Cu,n}function l(e){return t&&null===e.alternate&&(e.effectTag=Cu),e}function u(e,t,n,r){if(null===t||t.tag!==hu){var o=lu(n,e.internalContextTag,r);return o.return=e,o}var i=a(t,r);return i.pendingProps=n,i.return=e,i}function s(e,t,n,r){if(null===t||t.type!==n.type){var o=au(n,e.internalContextTag,r);return o.ref=Ye(t,n),o.return=e,o}var i=a(t,r);return i.ref=Ye(t,n),i.pendingProps=n.props,i.return=e,i}function c(e,t,n,r){if(null===t||t.tag!==mu){var o=uu(n,e.internalContextTag,r);return o.return=e,o}var i=a(t,r);return i.pendingProps=n,i.return=e,i}function p(e,t,n,r){if(null===t||t.tag!==vu){var o=su(n,e.internalContextTag,r);return o.type=n.value,o.return=e,o}var i=a(t,r);return i.type=n.value,i.return=e,i}function d(e,t,n,r){if(null===t||t.tag!==gu||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation){var o=cu(n,e.internalContextTag,r);return o.return=e,o}var i=a(t,r);return i.pendingProps=n.children||[],i.return=e,i}function f(e,t,n,r){if(null===t||t.tag!==yu){var o=iu(n,e.internalContextTag,r);return o.return=e,o}var i=a(t,r);return i.pendingProps=n,i.return=e,i}function h(e,t,n){if("string"==typeof t||"number"==typeof t){var r=lu(""+t,e.internalContextTag,n);return r.return=e,r}if("object"==typeof t&&null!==t){switch(t.$$typeof){case Tu:var o=au(t,e.internalContextTag,n);return o.ref=Ye(null,t),o.return=e,o;case tu:var a=uu(t,e.internalContextTag,n);return a.return=e,a;case nu:var i=su(t,e.internalContextTag,n);return i.type=t.value,i.return=e,i;case ru:var l=cu(t,e.internalContextTag,n);return l.return=e,l}if(pu(t)||qe(t)){var u=iu(t,e.internalContextTag,n);return u.return=e,u}Qe(e,t)}return null}function g(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==o?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case Tu:return n.key===o?s(e,t,n,r):null;case tu:return n.key===o?c(e,t,n,r):null;case nu:return null===o?p(e,t,n,r):null;case ru:return n.key===o?d(e,t,n,r):null}if(pu(n)||qe(n))return null!==o?null:f(e,t,n,r);Qe(e,n)}return null}function m(e,t,n,r,o){if("string"==typeof r||"number"==typeof r){return u(t,e.get(n)||null,""+r,o)}if("object"==typeof r&&null!==r){switch(r.$$typeof){case Tu:return s(t,e.get(null===r.key?n:r.key)||null,r,o);case tu:return c(t,e.get(null===r.key?n:r.key)||null,r,o);case nu:return p(t,e.get(n)||null,r,o);case ru:return d(t,e.get(null===r.key?n:r.key)||null,r,o)}if(pu(r)||qe(r)){return f(t,e.get(n)||null,r,o)}Qe(t,r)}return null}function v(e,a,l,u){for(var s=null,c=null,p=a,d=0,f=0,v=null;null!==p&&f<l.length;f++){p.index>f?(v=p,p=null):v=p.sibling;var y=g(e,p,l[f],u);if(null===y){null===p&&(p=v);break}t&&p&&null===y.alternate&&n(e,p),d=i(y,d,f),null===c?s=y:c.sibling=y,c=y,p=v}if(f===l.length)return r(e,p),s;if(null===p){for(;f<l.length;f++){var b=h(e,l[f],u);b&&(d=i(b,d,f),null===c?s=b:c.sibling=b,c=b)}return s}for(var C=o(e,p);f<l.length;f++){var E=m(C,e,f,l[f],u);E&&(t&&null!==E.alternate&&C.delete(null===E.key?f:E.key),d=i(E,d,f),null===c?s=E:c.sibling=E,c=E)}return t&&C.forEach(function(t){return n(e,t)}),s}function y(e,a,l,u){var s=qe(l);"function"!=typeof s&&On("150");var c=s.call(l);null==c&&On("151");for(var p=null,d=null,f=a,v=0,y=0,b=null,C=c.next();null!==f&&!C.done;y++,C=c.next()){f.index>y?(b=f,f=null):b=f.sibling;var E=g(e,f,C.value,u);if(null===E){f||(f=b);break}t&&f&&null===E.alternate&&n(e,f),v=i(E,v,y),null===d?p=E:d.sibling=E,d=E,f=b}if(C.done)return r(e,f),p;if(null===f){for(;!C.done;y++,C=c.next()){var k=h(e,C.value,u);null!==k&&(v=i(k,v,y),null===d?p=k:d.sibling=k,d=k)}return p}for(var P=o(e,f);!C.done;y++,C=c.next()){var T=m(P,e,y,C.value,u);null!==T&&(t&&null!==T.alternate&&P.delete(null===T.key?y:T.key),v=i(T,v,y),null===d?p=T:d.sibling=T,d=T)}return t&&P.forEach(function(t){return n(e,t)}),p}function b(e,t,n,o){if(null!==t&&t.tag===hu){r(e,t.sibling);var i=a(t,o);return i.pendingProps=n,i.return=e,i}r(e,t);var l=lu(n,e.internalContextTag,o);return l.return=e,l}function C(e,t,o,i){for(var l=o.key,u=t;null!==u;){if(u.key===l){if(u.type===o.type){r(e,u.sibling);var s=a(u,i);return s.ref=Ye(u,o),s.pendingProps=o.props,s.return=e,s}r(e,u);break}n(e,u),u=u.sibling}var c=au(o,e.internalContextTag,i);return c.ref=Ye(t,o),c.return=e,c}function E(e,t,o,i){for(var l=o.key,u=t;null!==u;){if(u.key===l){if(u.tag===mu){r(e,u.sibling);var s=a(u,i);return s.pendingProps=o,s.return=e,s}r(e,u);break}n(e,u),u=u.sibling}var c=uu(o,e.internalContextTag,i);return c.return=e,c}function k(e,t,n,o){var i=t;if(null!==i){if(i.tag===vu){r(e,i.sibling);var l=a(i,o);return l.type=n.value,l.return=e,l}r(e,i)}var u=su(n,e.internalContextTag,o);return u.type=n.value,u.return=e,u}function P(e,t,o,i){for(var l=o.key,u=t;null!==u;){if(u.key===l){if(u.tag===gu&&u.stateNode.containerInfo===o.containerInfo&&u.stateNode.implementation===o.implementation){r(e,u.sibling);var s=a(u,i);return s.pendingProps=o.children||[],s.return=e,s}r(e,u);break}n(e,u),u=u.sibling}var c=cu(o,e.internalContextTag,i);return c.return=e,c}function T(e,t,n,o){var a=Fo.disableNewFiberFeatures,i="object"==typeof n&&null!==n;if(i)if(a)switch(n.$$typeof){case Tu:return l(C(e,t,n,o));case ru:return l(P(e,t,n,o))}else switch(n.$$typeof){case Tu:return l(C(e,t,n,o));case tu:return l(E(e,t,n,o));case nu:return l(k(e,t,n,o));case ru:return l(P(e,t,n,o))}if(a)switch(e.tag){case fu:var u=e.type;null!==n&&!1!==n&&On("109",u.displayName||u.name||"Component");break;case du:var s=e.type;null!==n&&!1!==n&&On("105",s.displayName||s.name||"Component")}if("string"==typeof n||"number"==typeof n)return l(b(e,t,""+n,o));if(pu(n))return v(e,t,n,o);if(qe(n))return y(e,t,n,o);if(i&&Qe(e,n),!a&&void 0===n)switch(e.tag){case fu:case du:var c=e.type;On("152",c.displayName||c.name||"Component")}return r(e,t)}return T}function Xe(e){if(!e)return xn;var t=dr.get(e);return"number"==typeof t.tag?tp(t):t._processChildContext(t._context)}function Ge(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ze(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function Je(e,t){for(var n=Ge(e),r=0,o=0;n;){if(n.nodeType===dp){if(o=r+n.textContent.length,r<=t&&o>=t)return{node:n,offset:t-r};r=o}n=Ge(Ze(n))}}function et(){return!hp&&Pn.canUseDOM&&(hp="textContent"in document.documentElement?"textContent":"innerText"),hp}function tt(e,t,n,r){return e===n&&t===r}function nt(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,r=t.anchorOffset,o=t.focusNode,a=t.focusOffset,i=t.getRangeAt(0);try{i.startContainer.nodeType,i.endContainer.nodeType}catch(e){return null}var l=tt(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),u=l?0:i.toString().length,s=i.cloneRange();s.selectNodeContents(e),s.setEnd(i.startContainer,i.startOffset);var c=tt(s.startContainer,s.startOffset,s.endContainer,s.endOffset),p=c?0:s.toString().length,d=p+u,f=document.createRange();f.setStart(n,r),f.setEnd(o,a);var h=f.collapsed;return{start:h?d:p,end:h?p:d}}function rt(e,t){if(window.getSelection){var n=window.getSelection(),r=e[gp()].length,o=Math.min(t.start,r),a=void 0===t.end?o:Math.min(t.end,r);if(!n.extend&&o>a){var i=a;a=o,o=i}var l=fp(e,o),u=fp(e,a);if(l&&u){var s=document.createRange();s.setStart(l.node,l.offset),n.removeAllRanges(),o>a?(n.addRange(s),n.extend(u.node,u.offset)):(s.setEnd(u.node,u.offset),n.addRange(s))}}}function ot(e){return Nn(document.documentElement,e)}function at(e){if(void 0!==e._hostParent)return e._hostParent;if("number"==typeof e.tag){do{e=e.return}while(e&&e.tag!==Np);if(e)return e}return null}function it(e,t){for(var n=0,r=e;r;r=at(r))n++;for(var o=0,a=t;a;a=at(a))o++;for(;n-o>0;)e=at(e),n--;for(;o-n>0;)t=at(t),o--;for(var i=n;i--;){if(e===t||e===t.alternate)return e;e=at(e),t=at(t)}return null}function lt(e,t){for(;t;){if(e===t||e===t.alternate)return!0;t=at(t)}return!1}function ut(e){return at(e)}function st(e,t,n){for(var r=[];e;)r.push(e),e=at(e);var o;for(o=r.length;o-- >0;)t(r[o],"captured",n);for(o=0;o<r.length;o++)t(r[o],"bubbled",n)}function ct(e,t,n,r,o){for(var a=e&&t?it(e,t):null,i=[];e&&e!==a;)i.push(e),e=at(e);for(var l=[];t&&t!==a;)l.push(t),t=at(t);var u;for(u=0;u<i.length;u++)n(i[u],"bubbled",r);for(u=l.length;u-- >0;)n(l[u],"captured",o)}function pt(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return _p(e,r)}function dt(e,t,n){var r=pt(e,n,t);r&&(n._dispatchListeners=oo(n._dispatchListeners,r),n._dispatchInstances=oo(n._dispatchInstances,e))}function ft(e){e&&e.dispatchConfig.phasedRegistrationNames&&Sp.traverseTwoPhase(e._targetInst,dt,e)}function ht(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst,n=t?Sp.getParentInstance(t):null;Sp.traverseTwoPhase(n,dt,e)}}function gt(e,t,n){if(e&&n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=_p(e,r);o&&(n._dispatchListeners=oo(n._dispatchListeners,o),n._dispatchInstances=oo(n._dispatchInstances,e))}}function mt(e){e&&e.dispatchConfig.registrationName&&gt(e._targetInst,null,e)}function vt(e){ao(e,ft)}function yt(e){ao(e,ht)}function bt(e,t,n,r){Sp.traverseEnterLeave(n,r,gt,e,t)}function Ct(e){ao(e,mt)}function Et(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}function kt(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n;var o=this.constructor.Interface;for(var a in o)if(o.hasOwnProperty(a)){var i=o[a];i?this[a]=i(n):"target"===a?this.target=r:this[a]=n[a]}var l=null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue;return this.isDefaultPrevented=l?Tn.thatReturnsTrue:Tn.thatReturnsFalse,this.isPropagationStopped=Tn.thatReturnsFalse,this}function Pt(e,t,n,r){return Dp.call(this,e,t,n,r)}function Tt(e,t,n,r){return Dp.call(this,e,t,n,r)}function xt(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function wt(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function Nt(e){switch(e){case"topCompositionStart":return Qp.compositionStart;case"topCompositionEnd":return Qp.compositionEnd;case"topCompositionUpdate":return Qp.compositionUpdate}}function St(e,t){return"topKeyDown"===e&&t.keyCode===Vp}function _t(e,t){switch(e){case"topKeyUp":return-1!==Wp.indexOf(t.keyCode);case"topKeyDown":return t.keyCode!==Vp;case"topKeyPress":case"topMouseDown":case"topBlur":return!0;default:return!1}}function Ot(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function Ft(e,t,n,r){var o,a;if(Bp?o=Nt(e):Xp?_t(e,n)&&(o=Qp.compositionEnd):St(e,n)&&(o=Qp.compositionStart),!o)return null;Kp&&(Xp||o!==Qp.compositionStart?o===Qp.compositionEnd&&Xp&&(a=Xp.getData()):Xp=Ip.getPooled(r));var i=Up.getPooled(o,t,n,r);if(a)i.data=a;else{var l=Ot(n);null!==l&&(i.data=l)}return Fp.accumulateTwoPhaseDispatches(i),i}function It(e,t){switch(e){case"topCompositionEnd":return Ot(t);case"topKeyPress":return t.which!==qp?null:($p=!0,Yp);case"topTextInput":var n=t.data;return n===Yp&&$p?null:n;default:return null}}function Mt(e,t){if(Xp){if("topCompositionEnd"===e||!Bp&&_t(e,t)){var n=Xp.getData();return Ip.release(Xp),Xp=null,n}return null}switch(e){case"topPaste":return null;case"topKeyPress":if(!wt(t)){if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"topCompositionEnd":return Kp?null:t.data;default:return null}}function At(e,t,n,r){var o;if(!(o=zp?It(e,n):Mt(e,n)))return null;var a=Hp.getPooled(Qp.beforeInput,t,n,r);return a.data=o,Fp.accumulateTwoPhaseDispatches(a),a}function Dt(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Jp[e.type]:"textarea"===t}function Rt(e,t,n){var r=Dp.getPooled(td.change,e,t,n);return r.type="change",qr.enqueueStateRestore(n),Fp.accumulateTwoPhaseDispatches(r),r}function Ut(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function Lt(e){var t=Rt(rd,e,eo(e));Zr.batchedUpdates(Ht,t)}function Ht(e){po.enqueueEvents(e),po.processEventQueue(!1)}function Wt(e){var t=cr.getNodeFromInstance(e);if(ya.updateValueIfChanged(t))return e}function Vt(e,t){if("topChange"===e)return t}function Bt(e,t){nd=e,rd=t,nd.attachEvent("onpropertychange",zt)}function jt(){nd&&(nd.detachEvent("onpropertychange",zt),nd=null,rd=null)}function zt(e){"value"===e.propertyName&&Wt(rd)&&Lt(e)}function Kt(e,t,n){"topFocus"===e?(jt(),Bt(t,n)):"topBlur"===e&&jt()}function qt(e,t){if("topSelectionChange"===e||"topKeyUp"===e||"topKeyDown"===e)return Wt(rd)}function Yt(e){var t=e.nodeName;return t&&"input"===t.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function Qt(e,t){if("topClick"===e)return Wt(t)}function $t(e,t){if("topInput"===e||"topChange"===e)return Wt(t)}function Xt(e,t){if(null!=e){var n=e._wrapperState||t._wrapperState;if(n&&n.controlled&&"number"===t.type){var r=""+t.value;t.getAttribute("value")!==r&&t.setAttribute("value",r)}}}function Gt(e,t,n,r){return Dp.call(this,e,t,n,r)}function Zt(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=pd[e];return!!r&&!!n[r]}function Jt(e){return Zt}function en(e,t,n,r){return cd.call(this,e,t,n,r)}function tn(e){if("selectionStart"in e&&Cp.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}}function nn(e,t){if(Td||null==Ed||Ed!==_n())return null;var n=tn(Ed);if(!Pd||!wn(Pd,n)){Pd=n;var r=Dp.getPooled(Cd.select,kd,e,t);return r.type="select",r.target=Ed,Fp.accumulateTwoPhaseDispatches(r),r}return null}function rn(e,t,n,r){return Dp.call(this,e,t,n,r)}function on(e,t,n,r){return Dp.call(this,e,t,n,r)}function an(e,t,n,r){return cd.call(this,e,t,n,r)}function ln(e){var t,n=e.keyCode;return"charCode"in e?0===(t=e.charCode)&&13===n&&(t=13):t=n,t>=32||13===t?t:0}function un(e){if(e.key){var t=Dd[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=Ad(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?Rd[e.keyCode]||"Unidentified":""}function sn(e,t,n,r){return cd.call(this,e,t,n,r)}function cn(e,t,n,r){return hd.call(this,e,t,n,r)}function pn(e,t,n,r){return cd.call(this,e,t,n,r)}function dn(e,t,n,r){return Dp.call(this,e,t,n,r)}function fn(e,t,n,r){return hd.call(this,e,t,n,r)}function hn(e){return!(!e||e.nodeType!==hf&&e.nodeType!==vf&&e.nodeType!==yf&&(e.nodeType!==mf||" react-mount-point-unstable "!==e.nodeValue))}function gn(e){return e?e.nodeType===vf?e.documentElement:e.firstChild:null}function mn(e){var t=gn(e);return!(!t||t.nodeType!==hf||!t.hasAttribute(bf))}function vn(e,t){switch(e){case"button":case"input":case"select":case"textarea":
	return!!t.autoFocus}return!1}function yn(e,t,n,r){Cn(hn(n),"Target container is not a DOM element.");var o=n._reactRootContainer;if(o)Df.updateContainer(t,o,e,r);else{if(!mn(n))for(var a=void 0;a=n.lastChild;)n.removeChild(a);var i=Df.createContainer(n);o=n._reactRootContainer=i,Df.unbatchedUpdates(function(){Df.updateContainer(t,i,e,r)})}return Df.getPublicRootInstance(o)}var bn=__webpack_require__(3),Cn=__webpack_require__(5),En=__webpack_require__(100),kn=__webpack_require__(1),Pn=__webpack_require__(101),Tn=__webpack_require__(6),xn=__webpack_require__(4),wn=__webpack_require__(102),Nn=__webpack_require__(103),Sn=__webpack_require__(106),_n=__webpack_require__(107),On=e,Fn=null,In={},Mn={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},possibleRegistrationNames:null,injectEventPluginOrder:function(e){Fn&&On("101"),Fn=Array.prototype.slice.call(e),t()},injectEventPluginsByName:function(e){var n=!1;for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];In.hasOwnProperty(r)&&In[r]===o||(In[r]&&On("102",r),In[r]=o,n=!0)}n&&t()}},An=Mn,Dn=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},Rn=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},Un=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},Ln=function(e,t,n,r){var o=this;if(o.instancePool.length){var a=o.instancePool.pop();return o.call(a,e,t,n,r),a}return new o(e,t,n,r)},Hn=function(e){var t=this;e instanceof t||On("25"),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},Wn=10,Vn=Dn,Bn=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||Vn,n.poolSize||(n.poolSize=Wn),n.release=Hn,n},jn={addPoolingTo:Bn,oneArgumentPooler:Dn,twoArgumentPooler:Rn,threeArgumentPooler:Un,fourArgumentPooler:Ln},zn=jn,Kn={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,injectDOMPropertyConfig:function(e){var t=Kn,n=e.Properties||{},r=e.DOMAttributeNamespaces||{},a=e.DOMAttributeNames||{},i=e.DOMPropertyNames||{},l=e.DOMMutationMethods||{};e.isCustomAttribute&&Yn._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var u in n){Yn.properties.hasOwnProperty(u)&&On("48",u);var s=u.toLowerCase(),c=n[u],p={attributeName:s,attributeNamespace:null,propertyName:u,mutationMethod:null,mustUseProperty:o(c,t.MUST_USE_PROPERTY),hasBooleanValue:o(c,t.HAS_BOOLEAN_VALUE),hasNumericValue:o(c,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:o(c,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:o(c,t.HAS_OVERLOADED_BOOLEAN_VALUE)};if(p.hasBooleanValue+p.hasNumericValue+p.hasOverloadedBooleanValue<=1||On("50",u),a.hasOwnProperty(u)){var d=a[u];p.attributeName=d}r.hasOwnProperty(u)&&(p.attributeNamespace=r[u]),i.hasOwnProperty(u)&&(p.propertyName=i[u]),l.hasOwnProperty(u)&&(p.mutationMethod=l[u]),Yn.properties[u]=p}}},qn=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Yn={ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:qn,ATTRIBUTE_NAME_CHAR:qn+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",properties:{},getPossibleStandardName:null,_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<Yn._isCustomAttributeFunctions.length;t++){if((0,Yn._isCustomAttributeFunctions[t])(e))return!0}return!1},injection:Kn},Qn=Yn,$n={hasCachedChildNodes:1},Xn=$n,Gn={IndeterminateComponent:0,FunctionalComponent:1,ClassComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,CoroutineComponent:7,CoroutineHandlerPhase:8,YieldComponent:9,Fragment:10},Zn={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_FRAGMENT_NODE:11},Jn=Zn,er=Gn.HostComponent,tr=Gn.HostText,nr=Jn.ELEMENT_NODE,rr=Jn.COMMENT_NODE,or=Qn.ID_ATTRIBUTE_NAME,ar=Xn,ir=Math.random().toString(36).slice(2),lr="__reactInternalInstance$"+ir,ur="__reactEventHandlers$"+ir,sr={getClosestInstanceFromNode:p,getInstanceFromNode:d,getNodeFromInstance:f,precacheChildNodes:c,precacheNode:l,uncacheNode:s,precacheFiberNode:u,getFiberCurrentPropsFromNode:h,updateFiberProps:g},cr=sr,pr={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}},dr=pr,fr=kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr={ReactCurrentOwner:fr.ReactCurrentOwner},gr=hr,mr=m,vr={NoEffect:0,PerformedWork:1,Placement:2,Update:4,PlacementAndUpdate:6,Deletion:8,ContentReset:16,Callback:32,Err:64,Ref:128},yr=Gn.HostComponent,br=Gn.HostRoot,Cr=Gn.HostPortal,Er=Gn.HostText,kr=vr.NoEffect,Pr=vr.Placement,Tr=1,xr=2,wr=3,Nr=function(e){return v(e)===xr},Sr=function(e){var t=dr.get(e);return!!t&&v(t)===xr},_r=b,Or=function(e){var t=b(e);if(!t)return null;for(var n=t;;){if(n.tag===yr||n.tag===Er)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}return null},Fr=function(e){var t=b(e);if(!t)return null;for(var n=t;;){if(n.tag===yr||n.tag===Er)return n;if(n.child&&n.tag!==Cr)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}return null},Ir={isFiberMounted:Nr,isMounted:Sr,findCurrentFiberUsingSlowPath:_r,findCurrentHostFiber:Or,findCurrentHostFiberWithNoPortals:Fr},Mr={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(e){"function"!=typeof e.invokeGuardedCallback&&On("197"),Ar=e.invokeGuardedCallback}},invokeGuardedCallback:function(e,t,n,r,o,a,i,l,u){Ar.apply(Mr,arguments)},invokeGuardedCallbackAndCatchFirstError:function(e,t,n,r,o,a,i,l,u){if(Mr.invokeGuardedCallback.apply(this,arguments),Mr.hasCaughtError()){var s=Mr.clearCaughtError();Mr._hasRethrowError||(Mr._hasRethrowError=!0,Mr._rethrowError=s)}},rethrowCaughtError:function(){return Dr.apply(Mr,arguments)},hasCaughtError:function(){return Mr._hasCaughtError},clearCaughtError:function(){if(Mr._hasCaughtError){var e=Mr._caughtError;return Mr._caughtError=null,Mr._hasCaughtError=!1,e}On("198")}},Ar=function(e,t,n,r,o,a,i,l,u){Mr._hasCaughtError=!1,Mr._caughtError=null;var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){Mr._caughtError=e,Mr._hasCaughtError=!0}},Dr=function(){if(Mr._hasRethrowError){var e=Mr._rethrowError;throw Mr._rethrowError=null,Mr._hasRethrowError=!1,e}},Rr=Mr,Ur,Lr={injectComponentTree:function(e){Ur=e}},Hr={isEndish:C,isMoveish:E,isStartish:k,executeDirectDispatch:N,executeDispatchesInOrder:T,executeDispatchesInOrderStopAtTrue:w,hasDispatches:S,getFiberCurrentPropsFromNode:function(e){return Ur.getFiberCurrentPropsFromNode(e)},getInstanceFromNode:function(e){return Ur.getInstanceFromNode(e)},getNodeFromInstance:function(e){return Ur.getNodeFromInstance(e)},injection:Lr},Wr=Hr,Vr=null,Br={injectFiberControlledHostComponent:function(e){Vr=e}},jr=null,zr=null,Kr={injection:Br,enqueueStateRestore:function(e){jr?zr?zr.push(e):zr=[e]:jr=e},restoreStateIfNeeded:function(){if(jr){var e=jr,t=zr;if(jr=null,zr=null,_(e),t)for(var n=0;n<t.length;n++)_(t[n])}}},qr=Kr,Yr=function(e,t,n,r,o,a){return e(t,n,r,o,a)},Qr=function(e,t){return e(t)},$r=!1,Xr={injectStackBatchedUpdates:function(e){Yr=e},injectFiberBatchedUpdates:function(e){Qr=e}},Gr={batchedUpdates:I,injection:Xr},Zr=Gr,Jr=Jn.TEXT_NODE,eo=M,to=Gn.HostRoot;bn(D.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.targetInst=null,this.ancestors.length=0}}),zn.addPoolingTo(D,zn.threeArgumentPooler);var no={_enabled:!0,_handleTopLevel:null,setHandleTopLevel:function(e){no._handleTopLevel=e},setEnabled:function(e){no._enabled=!!e},isEnabled:function(){return no._enabled},trapBubbledEvent:function(e,t,n){return n?En.listen(n,t,no.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){return n?En.capture(n,t,no.dispatchEvent.bind(null,e)):null},dispatchEvent:function(e,t){if(no._enabled){var n=eo(t),r=cr.getClosestInstanceFromNode(n);null===r||"number"!=typeof r.tag||Ir.isFiberMounted(r)||(r=null);var o=D.getPooled(e,t,r);try{Zr.batchedUpdates(R,o)}finally{D.release(o)}}}},ro=no,oo=U,ao=L,io=null,lo=function(e,t){e&&(Wr.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e))},uo=function(e){return lo(e,!0)},so=function(e){return lo(e,!1)},co={injection:{injectEventPluginOrder:An.injectEventPluginOrder,injectEventPluginsByName:An.injectEventPluginsByName},getListener:function(e,t){var n;if("number"==typeof e.tag){var r=e.stateNode;if(!r)return null;var o=Wr.getFiberCurrentPropsFromNode(r);if(!o)return null;if(n=o[t],W(t,e.type,o))return null}else{var a=e._currentElement;if("string"==typeof a||"number"==typeof a)return null;if(!e._rootNodeID)return null;var i=a.props;if(n=i[t],W(t,a.type,i))return null}return n&&"function"!=typeof n&&On("94",t,typeof n),n},extractEvents:function(e,t,n,r){for(var o,a=An.plugins,i=0;i<a.length;i++){var l=a[i];if(l){var u=l.extractEvents(e,t,n,r);u&&(o=oo(o,u))}}return o},enqueueEvents:function(e){e&&(io=oo(io,e))},processEventQueue:function(e){var t=io;io=null,e?ao(t,uo):ao(t,so),io&&On("95"),Rr.rethrowCaughtError()}},po=co,fo={handleTopLevel:function(e,t,n,r){V(po.extractEvents(e,t,n,r))}},ho=fo,go;Pn.canUseDOM&&(go=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var mo=B,vo={animationend:j("Animation","AnimationEnd"),animationiteration:j("Animation","AnimationIteration"),animationstart:j("Animation","AnimationStart"),transitionend:j("Transition","TransitionEnd")},yo={},bo={};Pn.canUseDOM&&(bo=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);var Co=z,Eo={topAbort:"abort",topAnimationEnd:Co("animationend")||"animationend",topAnimationIteration:Co("animationiteration")||"animationiteration",topAnimationStart:Co("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:Co("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},ko={topLevelTypes:Eo},Po=ko,To=Po.topLevelTypes,xo={},wo=0,No="_reactListenersID"+(""+Math.random()).slice(2),So=bn({},ho,{setEnabled:function(e){ro&&ro.setEnabled(e)},isEnabled:function(){return!(!ro||!ro.isEnabled())},listenTo:function(e,t){for(var n=t,r=K(n),o=An.registrationNameDependencies[e],a=0;a<o.length;a++){var i=o[a];r.hasOwnProperty(i)&&r[i]||("topWheel"===i?mo("wheel")?ro.trapBubbledEvent("topWheel","wheel",n):mo("mousewheel")?ro.trapBubbledEvent("topWheel","mousewheel",n):ro.trapBubbledEvent("topWheel","DOMMouseScroll",n):"topScroll"===i?ro.trapCapturedEvent("topScroll","scroll",n):"topFocus"===i||"topBlur"===i?(ro.trapCapturedEvent("topFocus","focus",n),ro.trapCapturedEvent("topBlur","blur",n),r.topBlur=!0,r.topFocus=!0):"topCancel"===i?(mo("cancel",!0)&&ro.trapCapturedEvent("topCancel","cancel",n),r.topCancel=!0):"topClose"===i?(mo("close",!0)&&ro.trapCapturedEvent("topClose","close",n),r.topClose=!0):To.hasOwnProperty(i)&&ro.trapBubbledEvent(i,To[i],n),r[i]=!0)}},isListeningToAllDependencies:function(e,t){for(var n=K(t),r=An.registrationNameDependencies[e],o=0;o<r.length;o++){var a=r[o];if(!n.hasOwnProperty(a)||!n[a])return!1}return!0},trapBubbledEvent:function(e,t,n){return ro.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return ro.trapCapturedEvent(e,t,n)}}),_o=So,Oo={disableNewFiberFeatures:!1,enableAsyncSubtreeAPI:!1},Fo=Oo,Io={fiberAsyncScheduling:!1,useFiber:!0},Mo=Io,Ao={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Do=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(e){Do.forEach(function(t){Ao[q(t,e)]=Ao[e]})});var Ro={background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},Uo={isUnitlessNumber:Ao,shorthandPropertyExpansions:Ro},Lo=Uo,Ho=Lo.isUnitlessNumber,Wo=Y,Vo=!1;if(Pn.canUseDOM){var Bo=document.createElement("div").style;try{Bo.font=""}catch(e){Vo=!0}}var jo={createDangerousStringForStyles:function(e){},setValueForStyles:function(e,t,n){var r=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=0===o.indexOf("--"),i=Wo(o,t[o],a);if("float"===o&&(o="cssFloat"),a)r.setProperty(o,i);else if(i)r[o]=i;else{var l=Vo&&Lo.shorthandPropertyExpansions[o];if(l)for(var u in l)r[u]="";else r[o]=""}}}},zo=jo,Ko={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},qo=Ko,Yo=new RegExp("^["+Qn.ATTRIBUTE_NAME_START_CHAR+"]["+Qn.ATTRIBUTE_NAME_CHAR+"]*$"),Qo={},$o={},Xo={setAttributeForID:function(e,t){e.setAttribute(Qn.ID_ATTRIBUTE_NAME,t)},setAttributeForRoot:function(e){e.setAttribute(Qn.ROOT_ATTRIBUTE_NAME,"")},getValueForProperty:function(e,t,n){},getValueForAttribute:function(e,t,n){},setValueForProperty:function(e,t,n){var r=Qn.properties.hasOwnProperty(t)?Qn.properties[t]:null;if(r){var o=r.mutationMethod;if(o)o(e,n);else{if($(r,n))return void Xo.deleteValueForProperty(e,t);if(r.mustUseProperty)e[r.propertyName]=n;else{var a=r.attributeName,i=r.attributeNamespace;i?e.setAttributeNS(i,a,""+n):r.hasBooleanValue||r.hasOverloadedBooleanValue&&!0===n?e.setAttribute(a,""):e.setAttribute(a,""+n)}}}else if(Qn.isCustomAttribute(t))return void Xo.setValueForAttribute(e,t,n)},setValueForAttribute:function(e,t,n){Q(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForAttribute:function(e,t){e.removeAttribute(t)},deleteValueForProperty:function(e,t){var n=Qn.properties.hasOwnProperty(t)?Qn.properties[t]:null;if(n){var r=n.mutationMethod;if(r)r(e,void 0);else if(n.mustUseProperty){var o=n.propertyName;n.hasBooleanValue?e[o]=!1:e[o]=""}else e.removeAttribute(n.attributeName)}else Qn.isCustomAttribute(t)&&e.removeAttribute(t)}},Go=Xo,Zo=gr.ReactDebugCurrentFrame,Jo={current:null,phase:null,resetCurrentFiber:Z,setCurrentFiber:J,getCurrentFiberOwnerName:X,getCurrentFiberStackAddendum:G},ea=Jo,ta={getHostProps:function(e,t){var n=e,r=t.value,o=t.checked;return bn({type:void 0,step:void 0,min:void 0,max:void 0},t,{defaultChecked:void 0,defaultValue:void 0,value:null!=r?r:n._wrapperState.initialValue,checked:null!=o?o:n._wrapperState.initialChecked})},initWrapperState:function(e,t){var n=t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:null!=t.value?t.value:n,controlled:ee(t)}},updateWrapper:function(e,t){var n=e,r=t.checked;null!=r&&Go.setValueForProperty(n,"checked",r||!1);var o=t.value;if(null!=o)if(0===o&&""===n.value)n.value="0";else if("number"===t.type){var a=parseFloat(n.value)||0;(o!=a||o==a&&n.value!=o)&&(n.value=""+o)}else n.value!==""+o&&(n.value=""+o);else null==t.value&&null!=t.defaultValue&&n.defaultValue!==""+t.defaultValue&&(n.defaultValue=""+t.defaultValue),null==t.checked&&null!=t.defaultChecked&&(n.defaultChecked=!!t.defaultChecked)},postMountWrapper:function(e,t){var n=e;switch(t.type){case"submit":case"reset":break;case"color":case"date":case"datetime":case"datetime-local":case"month":case"time":case"week":n.value="",n.value=n.defaultValue;break;default:n.value=n.value}var r=n.name;""!==r&&(n.name=""),n.defaultChecked=!n.defaultChecked,n.defaultChecked=!n.defaultChecked,""!==r&&(n.name=r)},restoreControlledState:function(e,t){var n=e;ta.updateWrapper(n,t),te(n,t)}},na=ta,ra={validateProps:function(e,t){},postMountWrapper:function(e,t){null!=t.value&&e.setAttribute("value",t.value)},getHostProps:function(e,t){var n=bn({children:void 0},t),r=ne(t.children);return r&&(n.children=r),n}},oa=ra,aa=!1,ia={getHostProps:function(e,t){return bn({},t,{value:void 0})},initWrapperState:function(e,t){var n=e,r=t.value;n._wrapperState={initialValue:null!=r?r:t.defaultValue,wasMultiple:!!t.multiple},void 0===t.value||void 0===t.defaultValue||aa||(aa=!0)},postMountWrapper:function(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;null!=r?re(n,!!t.multiple,r):null!=t.defaultValue&&re(n,!!t.multiple,t.defaultValue)},postUpdateWrapper:function(e,t){var n=e;n._wrapperState.initialValue=void 0;var r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var o=t.value;null!=o?re(n,!!t.multiple,o):r!==!!t.multiple&&(null!=t.defaultValue?re(n,!!t.multiple,t.defaultValue):re(n,!!t.multiple,t.multiple?[]:""))},restoreControlledState:function(e,t){var n=e,r=t.value;null!=r&&re(n,!!t.multiple,r)}},la=ia,ua={getHostProps:function(e,t){var n=e;return null!=t.dangerouslySetInnerHTML&&On("91"),bn({},t,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})},initWrapperState:function(e,t){var n=e,r=t.value,o=r;if(null==r){var a=t.defaultValue,i=t.children;null!=i&&(null!=a&&On("92"),Array.isArray(i)&&(i.length<=1||On("93"),i=i[0]),a=""+i),null==a&&(a=""),o=a}n._wrapperState={initialValue:""+o}},updateWrapper:function(e,t){var n=e,r=t.value;if(null!=r){var o=""+r;o!==n.value&&(n.value=o),null==t.defaultValue&&(n.defaultValue=o)}null!=t.defaultValue&&(n.defaultValue=t.defaultValue)},postMountWrapper:function(e,t){var n=e,r=n.textContent;r===n._wrapperState.initialValue&&(n.value=r)},restoreControlledState:function(e,t){ua.updateWrapper(e,t)}},sa=ua,ca={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},pa=ca,da=bn||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa=da({menuitem:!0},pa),ha=fa,ga="__html",ma=ae,va={_getTrackerFromNode:le,track:function(e){le(e)||(e._valueTracker=ce(e))},updateValueIfChanged:function(e){if(!e)return!1;var t=le(e);if(!t)return!0;var n=t.getValue(),r=se(e);return r!==n&&(t.setValue(r),!0)},stopTracking:function(e){var t=le(e);t&&t.stopTracking()}},ya=va,ba=pe,Ca=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e},Ea=Ca,ka,Pa=Ea(function(e,t){if(e.namespaceURI!==qo.svg||"innerHTML"in e)e.innerHTML=t;else{ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+t+"</svg>";for(var n=ka.firstChild;n.firstChild;)e.appendChild(n.firstChild)}}),Ta=Pa,xa=/["'&<>]/,wa=fe,Na=Jn.TEXT_NODE,Sa=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===Na)return void(n.nodeValue=t)}e.textContent=t};Pn.canUseDOM&&("textContent"in document.documentElement||(Sa=function(e,t){if(e.nodeType===Na)return void(e.nodeValue=t);Ta(e,wa(t))}));var _a=Sa,Oa=ea.getCurrentFiberOwnerName,Fa=Jn.DOCUMENT_NODE,Ia=Jn.DOCUMENT_FRAGMENT_NODE,Ma=_o.listenTo,Aa=An.registrationNameModules,Da="dangerouslySetInnerHTML",Ra="suppressContentEditableWarning",Ua="children",La="style",Ha="__html",Wa=qo.html,Va=qo.svg,Ba=qo.mathml,ja={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},za={getChildNamespace:function(e,t){return null==e||e===Wa?be(t):e===Va&&"foreignObject"===t?Wa:e},createElement:function(e,t,n,r){var o,a=n.nodeType===Fa?n:n.ownerDocument,i=r;if(i===Wa&&(i=be(e)),i===Wa)if("script"===e){var l=a.createElement("div");l.innerHTML="<script><\/script>";var u=l.firstChild;o=l.removeChild(u)}else o=t.is?a.createElement(e,{is:t.is}):a.createElement(e);else o=a.createElementNS(i,e);return o},setInitialProperties:function(e,t,n,r){var o,a=ba(t,n);switch(t){case"audio":case"form":case"iframe":case"img":case"image":case"link":case"object":case"source":case"video":case"details":me(e,t),o=n;break;case"input":na.initWrapperState(e,n),o=na.getHostProps(e,n),me(e,t),he(r,"onChange");break;case"option":oa.validateProps(e,n),o=oa.getHostProps(e,n);break;case"select":la.initWrapperState(e,n),o=la.getHostProps(e,n),me(e,t),he(r,"onChange");break;case"textarea":sa.initWrapperState(e,n),o=sa.getHostProps(e,n),me(e,t),he(r,"onChange");break;default:o=n}switch(ma(t,o,Oa),ve(e,r,o,a),t){case"input":ya.track(e),na.postMountWrapper(e,n);break;case"textarea":ya.track(e),sa.postMountWrapper(e,n);break;case"option":oa.postMountWrapper(e,n);break;case"select":la.postMountWrapper(e,n);break;default:"function"==typeof o.onClick&&ge(e)}},diffProperties:function(e,t,n,r,o){var a,i,l=null;switch(t){case"input":a=na.getHostProps(e,n),i=na.getHostProps(e,r),l=[];break;case"option":a=oa.getHostProps(e,n),i=oa.getHostProps(e,r),l=[];break;case"select":a=la.getHostProps(e,n),i=la.getHostProps(e,r),l=[];break;case"textarea":a=sa.getHostProps(e,n),i=sa.getHostProps(e,r),l=[];break;default:a=n,i=r,"function"!=typeof a.onClick&&"function"==typeof i.onClick&&ge(e)}ma(t,i,Oa);var u,s,c=null;for(u in a)if(!i.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if(u===La){var p=a[u];for(s in p)p.hasOwnProperty(s)&&(c||(c={}),c[s]="")}else u===Da||u===Ua||u===Ra||(Aa.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in i){var d=i[u],f=null!=a?a[u]:void 0;if(i.hasOwnProperty(u)&&d!==f&&(null!=d||null!=f))if(u===La)if(f){for(s in f)!f.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(c||(c={}),c[s]="");for(s in d)d.hasOwnProperty(s)&&f[s]!==d[s]&&(c||(c={}),c[s]=d[s])}else c||(l||(l=[]),l.push(u,c)),c=d;else if(u===Da){var h=d?d[Ha]:void 0,g=f?f[Ha]:void 0;null!=h&&g!==h&&(l=l||[]).push(u,""+h)}else u===Ua?f===d||"string"!=typeof d&&"number"!=typeof d||(l=l||[]).push(u,""+d):u===Ra||(Aa.hasOwnProperty(u)?(d&&he(o,u),l||f===d||(l=[])):(l=l||[]).push(u,d))}return c&&(l=l||[]).push(La,c),l},updateProperties:function(e,t,n,r,o){switch(ye(e,t,ba(n,r),ba(n,o)),n){case"input":na.updateWrapper(e,o),ya.updateValueIfChanged(e);break;case"textarea":sa.updateWrapper(e,o);break;case"select":la.postUpdateWrapper(e,o)}},diffHydratedProperties:function(e,t,n,r){switch(t){case"audio":case"form":case"iframe":case"img":case"image":case"link":case"object":case"source":case"video":case"details":me(e,t);break;case"input":na.initWrapperState(e,n),me(e,t),he(r,"onChange");break;case"option":oa.validateProps(e,n);break;case"select":la.initWrapperState(e,n),me(e,t),he(r,"onChange");break;case"textarea":sa.initWrapperState(e,n),me(e,t),he(r,"onChange")}ma(t,n,Oa);var o=null;for(var a in n)if(n.hasOwnProperty(a)){var i=n[a];a===Ua?"string"==typeof i?e.textContent!==i&&(o=[Ua,i]):"number"==typeof i&&e.textContent!==""+i&&(o=[Ua,""+i]):Aa.hasOwnProperty(a)&&i&&he(r,a)}switch(t){case"input":ya.track(e),na.postMountWrapper(e,n);break;case"textarea":ya.track(e),sa.postMountWrapper(e,n);break;case"select":case"option":break;default:"function"==typeof n.onClick&&ge(e)}return o},diffHydratedText:function(e,t){return e.nodeValue!==t},warnForDeletedHydratableElement:function(e,t){},warnForDeletedHydratableText:function(e,t){},warnForInsertedHydratedElement:function(e,t,n){},warnForInsertedHydratedText:function(e,t){},restoreControlledState:function(e,t,n){switch(t){case"input":return void na.restoreControlledState(e,n);case"textarea":return void sa.restoreControlledState(e,n);case"select":return void la.restoreControlledState(e,n)}}},Ka=za,qa=void 0,Ya=void 0;if(Pn.canUseDOM)if("function"!=typeof requestAnimationFrame)On("192");else if("function"!=typeof requestIdleCallback){var Qa=null,$a=null,Xa=!1,Ga=!1,Za=0,Ja=33,ei=33,ti={timeRemaining:"object"==typeof performance&&"function"==typeof performance.now?function(){return Za-performance.now()}:function(){return Za-Date.now()}},ni="__reactIdleCallback$"+Math.random().toString(36).slice(2),ri=function(e){if(e.source===window&&e.data===ni){Xa=!1;var t=$a;$a=null,t&&t(ti)}};window.addEventListener("message",ri,!1);var oi=function(e){Ga=!1;var t=e-Za+ei;t<ei&&Ja<ei?(t<8&&(t=8),ei=t<Ja?Ja:t):Ja=t,Za=e+ei,Xa||(Xa=!0,window.postMessage(ni,"*"));var n=Qa;Qa=null,n&&n(e)};qa=function(e){return Qa=e,Ga||(Ga=!0,requestAnimationFrame(oi)),0},Ya=function(e){return $a=e,Ga||(Ga=!0,requestAnimationFrame(oi)),0}}else qa=requestAnimationFrame,Ya=requestIdleCallback;else qa=function(e){return setTimeout(e,16),0},Ya=function(e){return setTimeout(function(){e({timeRemaining:function(){return 1/0}})}),0};var ai=qa,ii=Ya,li={rAF:ai,rIC:ii},ui={NoWork:0,SynchronousPriority:1,TaskPriority:2,HighPriority:3,LowPriority:4,OffscreenPriority:5},si=vr.Callback,ci=ui.NoWork,pi=ui.SynchronousPriority,di=ui.TaskPriority,fi=Gn.ClassComponent,hi=Gn.HostRoot,gi=Ne,mi=Se,vi=_e,yi=Oe,bi=Fe,Ci=Me,Ei=Ae,ki={addUpdate:gi,addReplaceUpdate:mi,addForceUpdate:vi,getUpdatePriority:yi,addTopLevelUpdate:bi,beginUpdateQueue:Ci,commitCallbacks:Ei},Pi=[],Ti=-1,xi=function(e){return{current:e}},wi=function(){return-1===Ti},Ni=function(e,t){Ti<0||(e.current=Pi[Ti],Pi[Ti]=null,Ti--)},Si=function(e,t,n){Ti++,Pi[Ti]=e.current,e.current=t},_i=function(){for(;Ti>-1;)Pi[Ti]=null,Ti--},Oi={createCursor:xi,isEmpty:wi,pop:Ni,push:Si,reset:_i},Fi=bn||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii=Ir.isFiberMounted,Mi=Gn.ClassComponent,Ai=Gn.HostRoot,Di=Oi.createCursor,Ri=Oi.pop,Ui=Oi.push,Li=Di(xn),Hi=Di(!1),Wi=xn,Vi=De,Bi=Re,ji=function(e,t){var n=e.type,r=n.contextTypes;if(!r)return xn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={};for(var i in r)a[i]=t[i];return o&&Re(e,t,a),a},zi=function(){return Hi.current},Ki=Ue,qi=Le,Yi=He,Qi=function(e,t,n){null!=Li.cursor&&On("168"),Ui(Li,t,e),Ui(Hi,n,e)},$i=We,Xi=function(e){if(!Le(e))return!1;var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||xn;return Wi=Li.current,Ui(Li,n,e),Ui(Hi,!1,e),!0},Gi=function(e){var t=e.stateNode;t||On("169");var n=We(e,Wi,!0);t.__reactInternalMemoizedMergedChildContext=n,Ri(Hi,e),Ri(Li,e),Ui(Li,n,e),Ui(Hi,!0,e)},Zi=function(){Wi=xn,Li.current=xn,Hi.current=!1},Ji=function(e){Ii(e)&&e.tag===Mi||On("170");for(var t=e;t.tag!==Ai;){if(Le(t))return t.stateNode.__reactInternalMemoizedMergedChildContext;var n=t.return;n||On("171"),t=n}return t.stateNode.context},el={getUnmaskedContext:Vi,cacheContext:Bi,getMaskedContext:ji,hasContextChanged:zi,isContextConsumer:Ki,isContextProvider:qi,popContextProvider:Yi,pushTopLevelContextObject:Qi,processChildContext:$i,pushContextProvider:Xi,invalidateContextProvider:Gi,resetContext:Zi,findCurrentUnmaskedContext:Ji},tl={NoContext:0,AsyncUpdates:1},nl=Gn.IndeterminateComponent,rl=Gn.ClassComponent,ol=Gn.HostRoot,al=Gn.HostComponent,il=Gn.HostText,ll=Gn.HostPortal,ul=Gn.CoroutineComponent,sl=Gn.YieldComponent,cl=Gn.Fragment,pl=ui.NoWork,dl=tl.NoContext,fl=vr.NoEffect,hl=function(e,t,n){return{tag:e,key:t,type:null,stateNode:null,return:null,child:null,sibling:null,index:0,ref:null,pendingProps:null,memoizedProps:null,updateQueue:null,memoizedState:null,internalContextTag:n,effectTag:fl,nextEffect:null,firstEffect:null,lastEffect:null,pendingWorkPriority:pl,alternate:null}},gl=function(e,t){var n=e.alternate;return null===n?(n=hl(e.tag,e.key,e.internalContextTag),n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.effectTag=pl,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.pendingWorkPriority=t,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n},ml=function(){return hl(ol,null,dl)},vl=function(e,t,n){var r=Be(e.type,e.key,t,null);return r.pendingProps=e.props,r.pendingWorkPriority=n,r},yl=function(e,t,n){var r=hl(cl,null,t);return r.pendingProps=e,r.pendingWorkPriority=n,r},bl=function(e,t,n){var r=hl(il,null,t);return r.pendingProps=e,r.pendingWorkPriority=n,r},Cl=Be,El=function(){var e=hl(al,null,dl);return e.type="DELETED",e},kl=function(e,t,n){var r=hl(ul,e.key,t);return r.type=e.handler,r.pendingProps=e,r.pendingWorkPriority=n,r},Pl=function(e,t,n){return hl(sl,null,t)},Tl=function(e,t,n){var r=hl(ll,e.key,t);return r.pendingProps=e.children||[],r.pendingWorkPriority=n,r.stateNode={containerInfo:e.containerInfo,implementation:e.implementation},r},xl=function(e,t){return e!==pl&&(t===pl||t>e)?e:t},wl={createWorkInProgress:gl,createHostRootFiber:ml,createFiberFromElement:vl,createFiberFromFragment:yl,createFiberFromText:bl,createFiberFromElementType:Cl,createFiberFromHostInstanceForDeletion:El,createFiberFromCoroutine:kl,createFiberFromYield:Pl,createFiberFromPortal:Tl,largerPriority:xl},Nl=wl.createHostRootFiber,Sl=function(e){var t=Nl(),n={current:t,containerInfo:e,isScheduled:!1,nextScheduledRoot:null,context:null,pendingContext:null};return t.stateNode=n,n},_l={createFiberRoot:Sl},Ol=function(e,t,n){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")
	},Fl=Gn.IndeterminateComponent,Il=Gn.FunctionalComponent,Ml=Gn.ClassComponent,Al=Gn.HostComponent,Dl={getStackAddendumByWorkInProgressFiber:ze},Rl=function(e){return!0},Ul=Rl,Ll={injectDialog:function(e){Ul!==Rl&&On("172"),"function"!=typeof e&&On("173"),Ul=e}},Hl=Ke,Wl={injection:Ll,logCapturedError:Hl},Vl,Bl;"function"==typeof Symbol&&Symbol.for?(Vl=Symbol.for("react.coroutine"),Bl=Symbol.for("react.yield")):(Vl=60104,Bl=60105);var jl=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Vl,key:null==r?null:""+r,children:e,handler:t,props:n}},zl=function(e){return{$$typeof:Bl,value:e}},Kl=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Vl},ql=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Bl},Yl=Bl,Ql=Vl,$l={createCoroutine:jl,createYield:zl,isCoroutine:Kl,isYield:ql,REACT_YIELD_TYPE:Yl,REACT_COROUTINE_TYPE:Ql},Xl="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.portal")||60106,Gl=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Xl,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}},Zl=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Xl},Jl=Xl,eu={createPortal:Gl,isPortal:Zl,REACT_PORTAL_TYPE:Jl},tu=$l.REACT_COROUTINE_TYPE,nu=$l.REACT_YIELD_TYPE,ru=eu.REACT_PORTAL_TYPE,ou=wl.createWorkInProgress,au=wl.createFiberFromElement,iu=wl.createFiberFromFragment,lu=wl.createFiberFromText,uu=wl.createFiberFromCoroutine,su=wl.createFiberFromYield,cu=wl.createFiberFromPortal,pu=Array.isArray,du=Gn.FunctionalComponent,fu=Gn.ClassComponent,hu=Gn.HostText,gu=Gn.HostPortal,mu=Gn.CoroutineComponent,vu=Gn.YieldComponent,yu=Gn.Fragment,bu=vr.NoEffect,Cu=vr.Placement,Eu=vr.Deletion,ku="function"==typeof Symbol&&Symbol.iterator,Pu="@@iterator",Tu="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,xu=$e(!0,!0),wu=$e(!1,!0),Nu=$e(!1,!1),Su=function(e,t){if(null!==e&&t.child!==e.child&&On("153"),null!==t.child){var n=t.child,r=ou(n,n.pendingWorkPriority);for(r.pendingProps=n.pendingProps,t.child=r,r.return=t;null!==n.sibling;)n=n.sibling,r=r.sibling=ou(n,n.pendingWorkPriority),r.pendingProps=n.pendingProps,r.return=t;r.sibling=null}},_u={reconcileChildFibers:xu,reconcileChildFibersInPlace:wu,mountChildFibersInPlace:Nu,cloneChildFibers:Su},Ou=vr.Update,Fu=tl.AsyncUpdates,Iu=el.cacheContext,Mu=el.getMaskedContext,Au=el.getUnmaskedContext,Du=el.isContextConsumer,Ru=ki.addUpdate,Uu=ki.addReplaceUpdate,Lu=ki.addForceUpdate,Hu=ki.beginUpdateQueue,Wu=el,Vu=Wu.hasContextChanged,Bu=Ir.isMounted,ju=function(e,t,n,r){function o(e,t,n,r,o,a){if(null===t||null!==e.updateQueue&&e.updateQueue.hasForceUpdate)return!0;var i=e.stateNode,l=e.type;if("function"==typeof i.shouldComponentUpdate){return i.shouldComponentUpdate(n,o,a)}return!l.prototype||!l.prototype.isPureReactComponent||(!wn(t,n)||!wn(r,o))}function a(e,t){t.props=e.memoizedProps,t.state=e.memoizedState}function i(e,t){t.updater=d,e.stateNode=t,dr.set(t,e)}function l(e,t){var n=e.type,r=Au(e),o=Du(e),a=o?Mu(e,r):xn,l=new n(t,a);return i(e,l),o&&Iu(e,r,a),l}function u(e,t){var n=t.state;t.componentWillMount(),n!==t.state&&d.enqueueReplaceState(t,t.state,null)}function s(e,t,n,r){var o=t.state;t.componentWillReceiveProps(n,r),t.state!==o&&d.enqueueReplaceState(t,t.state,null)}function c(e,t){var n=e.alternate,r=e.stateNode,o=r.state||null,a=e.pendingProps;a||On("158");var i=Au(e);if(r.props=a,r.state=o,r.refs=xn,r.context=Mu(e,i),Fo.enableAsyncSubtreeAPI&&null!=e.type&&null!=e.type.prototype&&!0===e.type.prototype.unstable_isAsyncReactComponent&&(e.internalContextTag|=Fu),"function"==typeof r.componentWillMount){u(e,r);var l=e.updateQueue;null!==l&&(r.state=Hu(n,e,l,r,o,a,t))}"function"==typeof r.componentDidMount&&(e.effectTag|=Ou)}function p(e,t,i){var l=t.stateNode;a(t,l);var u=t.memoizedProps,c=t.pendingProps;c||null==(c=u)&&On("159");var p=l.context,d=Au(t),f=Mu(t,d);"function"!=typeof l.componentWillReceiveProps||u===c&&p===f||s(t,l,c,f);var h=t.memoizedState,g=void 0;if(g=null!==t.updateQueue?Hu(e,t,t.updateQueue,l,h,c,i):h,!(u!==c||h!==g||Vu()||null!==t.updateQueue&&t.updateQueue.hasForceUpdate))return"function"==typeof l.componentDidUpdate&&(u===e.memoizedProps&&h===e.memoizedState||(t.effectTag|=Ou)),!1;var m=o(t,u,c,h,g,f);return m?("function"==typeof l.componentWillUpdate&&l.componentWillUpdate(c,g,f),"function"==typeof l.componentDidUpdate&&(t.effectTag|=Ou)):("function"==typeof l.componentDidUpdate&&(u===e.memoizedProps&&h===e.memoizedState||(t.effectTag|=Ou)),n(t,c),r(t,g)),l.props=c,l.state=g,l.context=f,m}var d={isMounted:Bu,enqueueSetState:function(n,r,o){var a=dr.get(n),i=t(a,!1);o=void 0===o?null:o,Ru(a,r,o,i),e(a,i)},enqueueReplaceState:function(n,r,o){var a=dr.get(n),i=t(a,!1);o=void 0===o?null:o,Uu(a,r,o,i),e(a,i)},enqueueForceUpdate:function(n,r){var o=dr.get(n),a=t(o,!1);r=void 0===r?null:r,Lu(o,r,a),e(o,a)}};return{adoptClassInstance:i,constructClassInstance:l,mountClassInstance:c,updateClassInstance:p}},zu=_u.mountChildFibersInPlace,Ku=_u.reconcileChildFibers,qu=_u.reconcileChildFibersInPlace,Yu=_u.cloneChildFibers,Qu=ki.beginUpdateQueue,$u=el.getMaskedContext,Xu=el.getUnmaskedContext,Gu=el.hasContextChanged,Zu=el.pushContextProvider,Ju=el.pushTopLevelContextObject,es=el.invalidateContextProvider,ts=Gn.IndeterminateComponent,ns=Gn.FunctionalComponent,rs=Gn.ClassComponent,os=Gn.HostRoot,as=Gn.HostComponent,is=Gn.HostText,ls=Gn.HostPortal,us=Gn.CoroutineComponent,ss=Gn.CoroutineHandlerPhase,cs=Gn.YieldComponent,ps=Gn.Fragment,ds=ui.NoWork,fs=ui.OffscreenPriority,hs=vr.PerformedWork,gs=vr.Placement,ms=vr.ContentReset,vs=vr.Err,ys=vr.Ref,bs=gr.ReactCurrentOwner,Cs=function(e,t,n,r,o){function a(e,t,n){i(e,t,n,t.pendingWorkPriority)}function i(e,t,n,r){null===e?t.child=zu(t,t.child,n,r):e.child===t.child?t.child=Ku(t,t.child,n,r):t.child=qu(t,t.child,n,r)}function l(e,t){var n=t.pendingProps;if(Gu())null===n&&(n=t.memoizedProps);else if(null===n||t.memoizedProps===n)return y(e,t);return a(e,t,n),C(t,n),t.child}function u(e,t){var n=t.ref;null===n||e&&e.ref===n||(t.effectTag|=ys)}function s(e,t){var n=t.type,r=t.pendingProps,o=t.memoizedProps;if(Gu())null===r&&(r=o);else{if(null===r||o===r)return y(e,t);if("function"==typeof n.shouldComponentUpdate&&!n.shouldComponentUpdate(o,r))return C(t,r),y(e,t)}var i,l=Xu(t),u=$u(t,l);return i=n(r,u),t.effectTag|=hs,a(e,t,i),C(t,r),t.child}function c(e,t,n){var r=Zu(t),o=void 0;return null===e?t.stateNode?On("153"):(A(t,t.pendingProps),D(t,n),o=!0):o=R(e,t,n),p(e,t,o,r)}function p(e,t,n,r){if(u(e,t),!n)return y(e,t);var o=t.stateNode;bs.current=t;var i=void 0;return i=o.render(),t.effectTag|=hs,a(e,t,i),E(t,o.state),C(t,o.props),r&&es(t),t.child}function d(e,t,n){var r=t.stateNode;r.pendingContext?Ju(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Ju(t,r.context,!1),S(t,r.containerInfo);var o=t.updateQueue;if(null!==o){var i=t.memoizedState,l=Qu(e,t,o,null,i,null,n);if(i===l)return O(),y(e,t);var u=l.element;return null!==e&&null!==e.child||!_(t)?(O(),a(e,t,u)):(t.effectTag|=gs,t.child=zu(t,t.child,u,n)),E(t,l),t.child}return O(),y(e,t)}function f(e,t,n){N(t),null===e&&F(t);var r=t.type,o=t.memoizedProps,i=t.pendingProps;null===i&&null===(i=o)&&On("154");var l=null!==e?e.memoizedProps:null;if(Gu());else if(null===i||o===i)return y(e,t);var s=i.children;return T(r,i)?s=null:l&&T(r,l)&&(t.effectTag|=ms),u(e,t),n!==fs&&!x&&w(r,i)?(t.pendingWorkPriority=fs,null):(a(e,t,s),C(t,i),t.child)}function h(e,t){null===e&&F(t);var n=t.pendingProps;return null===n&&(n=t.memoizedProps),C(t,n),null}function g(e,t,n){null!==e&&On("155");var r,o=t.type,i=t.pendingProps,l=Xu(t),u=$u(t,l);if(r=o(i,u),t.effectTag|=hs,"object"==typeof r&&null!==r&&"function"==typeof r.render){t.tag=rs;var s=Zu(t);return M(t,r),D(t,n),p(e,t,!0,s)}return t.tag=ns,a(e,t,r),C(t,i),t.child}function m(e,t){var n=t.pendingProps;Gu()?null===n&&null===(n=e&&e.memoizedProps)&&On("154"):null!==n&&t.memoizedProps!==n||(n=t.memoizedProps);var r=n.children,o=t.pendingWorkPriority;return null===e?t.stateNode=zu(t,t.stateNode,r,o):e.child===t.child?t.stateNode=Ku(t,t.stateNode,r,o):t.stateNode=qu(t,t.stateNode,r,o),C(t,n),t.stateNode}function v(e,t){S(t,t.stateNode.containerInfo);var n=t.pendingWorkPriority,r=t.pendingProps;if(Gu())null===r&&null==(r=e&&e.memoizedProps)&&On("154");else if(null===r||t.memoizedProps===r)return y(e,t);return null===e?(t.child=qu(t,t.child,r,n),C(t,r)):(a(e,t,r),C(t,r)),t.child}function y(e,t){return Yu(e,t),t.child}function b(e,t){switch(t.tag){case rs:Zu(t);break;case ls:S(t,t.stateNode.containerInfo)}return null}function C(e,t){e.memoizedProps=t}function E(e,t){e.memoizedState=t}function k(e,t,n){if(t.pendingWorkPriority===ds||t.pendingWorkPriority>n)return b(e,t);switch(t.tag){case ts:return g(e,t,n);case ns:return s(e,t);case rs:return c(e,t,n);case os:return d(e,t,n);case as:return f(e,t,n);case is:return h(e,t);case ss:t.tag=us;case us:return m(e,t);case cs:return null;case ls:return v(e,t);case ps:return l(e,t);default:On("156")}}function P(e,t,n){switch(t.tag){case rs:Zu(t);break;case os:var r=t.stateNode;S(t,r.containerInfo);break;default:On("157")}if(t.effectTag|=vs,null===e?t.child=null:t.child!==e.child&&(t.child=e.child),t.pendingWorkPriority===ds||t.pendingWorkPriority>n)return b(e,t);t.firstEffect=null,t.lastEffect=null;if(i(e,t,null,n),t.tag===rs){var o=t.stateNode;t.memoizedProps=o.props,t.memoizedState=o.state}return t.child}var T=e.shouldSetTextContent,x=e.useSyncScheduling,w=e.shouldDeprioritizeSubtree,N=t.pushHostContext,S=t.pushHostContainer,_=n.enterHydrationState,O=n.resetHydrationState,F=n.tryToClaimNextHydratableInstance,I=ju(r,o,C,E),M=I.adoptClassInstance,A=I.constructClassInstance,D=I.mountClassInstance,R=I.updateClassInstance;return{beginWork:k,beginFailedWork:P}},Es=_u.reconcileChildFibers,ks=el.popContextProvider,Ps=Gn.IndeterminateComponent,Ts=Gn.FunctionalComponent,xs=Gn.ClassComponent,ws=Gn.HostRoot,Ns=Gn.HostComponent,Ss=Gn.HostText,_s=Gn.HostPortal,Os=Gn.CoroutineComponent,Fs=Gn.CoroutineHandlerPhase,Is=Gn.YieldComponent,Ms=Gn.Fragment,As=vr.Placement,Ds=vr.Ref,Rs=vr.Update,Us=ui.OffscreenPriority,Ls=function(e,t,n){function r(e){e.effectTag|=Rs}function o(e){e.effectTag|=Ds}function a(e,t){var n=t.stateNode;for(n&&(n.return=t);null!==n;){if(n.tag===Ns||n.tag===Ss||n.tag===_s)On("164");else if(n.tag===Is)e.push(n.type);else if(null!==n.child){n.child.return=n,n=n.child;continue}for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function i(e,t){var n=t.memoizedProps;n||On("165"),t.tag=Fs;var r=[];a(r,t);var o=n.handler,i=n.props,l=o(i,r),u=null!==e?e.child:null,s=t.pendingWorkPriority;return t.child=Es(t,u,l,s),t.child}function l(e,t){for(var n=t.child;null!==n;){if(n.tag===Ns||n.tag===Ss)p(e,n.stateNode);else if(n.tag===_s);else if(null!==n.child){n=n.child;continue}if(n===t)return;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n=n.sibling}}function u(e,t,n){var a=t.pendingProps;switch(null===a?a=t.memoizedProps:t.pendingWorkPriority===Us&&n!==Us||(t.pendingProps=null),t.tag){case Ts:return null;case xs:return ks(t),null;case ws:var u=t.stateNode;return u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),null!==e&&null!==e.child||(C(t),t.effectTag&=~As),null;case Ns:g(t);var p=h(),E=t.type;if(null!==e&&null!=t.stateNode){var k=e.memoizedProps,P=t.stateNode,T=m(),x=f(P,E,k,a,p,T);t.updateQueue=x,x&&r(t),e.ref!==t.ref&&o(t)}else{if(!a)return null===t.stateNode&&On("166"),null;var w=m();if(C(t))y(t,p)&&r(t);else{var N=s(E,a,p,w,t);l(N,t),d(N,E,a,p)&&r(t),t.stateNode=N}null!==t.ref&&o(t)}return null;case Ss:var S=a;if(e&&null!=t.stateNode){e.memoizedProps!==S&&r(t)}else{if("string"!=typeof S)return null===t.stateNode&&On("166"),null;var _=h(),O=m();C(t)?b(t)&&r(t):t.stateNode=c(S,_,O,t)}return null;case Os:return i(e,t);case Fs:return t.tag=Os,null;case Is:case Ms:return null;case _s:return r(t),v(t),null;case Ps:On("167");default:On("156")}}var s=e.createInstance,c=e.createTextInstance,p=e.appendInitialChild,d=e.finalizeInitialChildren,f=e.prepareUpdate,h=t.getRootHostContainer,g=t.popHostContext,m=t.getHostContext,v=t.popHostContainer,y=n.prepareToHydrateHostInstance,b=n.prepareToHydrateHostTextInstance,C=n.popHydrationState;return{completeWork:u}},Hs=null,Ws=null,Vs=null,Bs=null;if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&__REACT_DEVTOOLS_GLOBAL_HOOK__.supportsFiber){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__.inject,zs=__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot,Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberUnmount;Ws=function(e){Hs=js(e)},Vs=function(e){if(null!=Hs)try{zs(Hs,e)}catch(e){}},Bs=function(e){if(null!=Hs)try{Ks(Hs,e)}catch(e){}}}var qs=Ws,Ys=Vs,Qs=Bs,$s={injectInternals:qs,onCommitRoot:Ys,onCommitUnmount:Qs},Xs=Gn.ClassComponent,Gs=Gn.HostRoot,Zs=Gn.HostComponent,Js=Gn.HostText,ec=Gn.HostPortal,tc=Gn.CoroutineComponent,nc=ki.commitCallbacks,rc=$s.onCommitUnmount,oc=vr.Placement,ac=vr.Update,ic=vr.Callback,lc=vr.ContentReset,uc=function(e,t){function n(e,n){try{n.componentWillUnmount()}catch(n){t(e,n)}}function r(e){var n=e.ref;if(null!==n){try{n(null)}catch(n){t(e,n)}}}function o(e){for(var t=e.return;null!==t;){if(a(t))return t;t=t.return}On("160")}function a(e){return e.tag===Zs||e.tag===Gs||e.tag===ec}function i(e){var t=e;e:for(;;){for(;null===t.sibling;){if(null===t.return||a(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==Zs&&t.tag!==Js;){if(t.effectTag&oc)continue e;if(null===t.child||t.tag===ec)continue e;t.child.return=t,t=t.child}if(!(t.effectTag&oc))return t.stateNode}}function l(e){var t=o(e),n=void 0,r=void 0;switch(t.tag){case Zs:n=t.stateNode,r=!1;break;case Gs:case ec:n=t.stateNode.containerInfo,r=!0;break;default:On("161")}t.effectTag&lc&&(y(n),t.effectTag&=~lc);for(var a=i(e),l=e;;){if(l.tag===Zs||l.tag===Js)a?r?P(n,l.stateNode,a):k(n,l.stateNode,a):r?E(n,l.stateNode):C(n,l.stateNode);else if(l.tag===ec);else if(null!==l.child){l.child.return=l,l=l.child;continue}if(l===e)return;for(;null===l.sibling;){if(null===l.return||l.return===e)return;l=l.return}l.sibling.return=l.return,l=l.sibling}}function u(e){for(var t=e;;)if(p(t),null===t.child||t.tag===ec){if(t===e)return;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}else t.child.return=t,t=t.child}function s(e){for(var t=e,n=!1,r=void 0,o=void 0;;){if(!n){var a=t.return;e:for(;;){switch(null===a&&On("160"),a.tag){case Zs:r=a.stateNode,o=!1;break e;case Gs:case ec:r=a.stateNode.containerInfo,o=!0;break e}a=a.return}n=!0}if(t.tag===Zs||t.tag===Js)u(t),o?x(r,t.stateNode):T(r,t.stateNode);else if(t.tag===ec){if(r=t.stateNode.containerInfo,null!==t.child){t.child.return=t,t=t.child;continue}}else if(p(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)return;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return,t.tag===ec&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}function c(e){s(e),e.return=null,e.child=null,e.alternate&&(e.alternate.child=null,e.alternate.return=null)}function p(e){switch("function"==typeof rc&&rc(e),e.tag){case Xs:r(e);var t=e.stateNode;return void("function"==typeof t.componentWillUnmount&&n(e,t));case Zs:return void r(e);case tc:return void u(e.stateNode);case ec:return void s(e)}}function d(e,t){switch(t.tag){case Xs:return;case Zs:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,o=null!==e?e.memoizedProps:r,a=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&v(n,i,a,o,r,t)}return;case Js:null===t.stateNode&&On("162");var l=t.stateNode,u=t.memoizedProps,s=null!==e?e.memoizedProps:u;return void b(l,s,u);case Gs:case ec:return;default:On("163")}}function f(e,t){switch(t.tag){case Xs:var n=t.stateNode;if(t.effectTag&ac)if(null===e)n.componentDidMount();else{var r=e.memoizedProps,o=e.memoizedState;n.componentDidUpdate(r,o)}return void(t.effectTag&ic&&null!==t.updateQueue&&nc(t,t.updateQueue,n));case Gs:var a=t.updateQueue;if(null!==a){var i=t.child&&t.child.stateNode;nc(t,a,i)}return;case Zs:var l=t.stateNode;if(null===e&&t.effectTag&ac){var u=t.type,s=t.memoizedProps;m(l,u,s,t)}return;case Js:case ec:return;default:On("163")}}function h(e){var t=e.ref;if(null!==t){var n=e.stateNode;switch(e.tag){case Zs:t(w(n));break;default:t(n)}}}function g(e){var t=e.ref;null!==t&&t(null)}var m=e.commitMount,v=e.commitUpdate,y=e.resetTextContent,b=e.commitTextUpdate,C=e.appendChild,E=e.appendChildToContainer,k=e.insertBefore,P=e.insertInContainerBefore,T=e.removeChild,x=e.removeChildFromContainer,w=e.getPublicInstance;return{commitPlacement:l,commitDeletion:c,commitWork:d,commitLifeCycles:f,commitAttachRef:h,commitDetachRef:g}},sc=Oi.createCursor,cc=Oi.pop,pc=Oi.push,dc={},fc=function(e){function t(e){return e===dc&&On("174"),e}function n(){return t(f.current)}function r(e,t){pc(f,t,e);var n=c(t);pc(d,e,e),pc(p,n,e)}function o(e){cc(p,e),cc(d,e),cc(f,e)}function a(){return t(p.current)}function i(e){var n=t(f.current),r=t(p.current),o=s(r,e.type,n);r!==o&&(pc(d,e,e),pc(p,o,e))}function l(e){d.current===e&&(cc(p,e),cc(d,e))}function u(){p.current=dc,f.current=dc}var s=e.getChildHostContext,c=e.getRootHostContext,p=sc(dc),d=sc(dc),f=sc(dc);return{getHostContext:a,getRootHostContainer:n,popHostContainer:o,popHostContext:l,pushHostContainer:r,pushHostContext:i,resetHostContainer:u}},hc=Gn.HostComponent,gc=Gn.HostText,mc=Gn.HostRoot,vc=vr.Deletion,yc=vr.Placement,bc=wl.createFiberFromHostInstanceForDeletion,Cc=function(e){function t(e){var t=e.stateNode.containerInfo;return k=g(t),E=e,P=!0,!0}function n(e,t){var n=bc();n.stateNode=t,n.return=e,n.effectTag=vc,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function r(e,t){t.effectTag|=yc}function o(e,t){switch(e.tag){case hc:var n=e.type,r=e.pendingProps;return d(t,n,r);case gc:var o=e.pendingProps;return f(t,o);default:return!1}}function a(e){if(P){var t=k;if(!t)return r(E,e),P=!1,void(E=e);if(!o(e,t)){if(!(t=h(t))||!o(e,t))return r(E,e),P=!1,void(E=e);n(E,k)}e.stateNode=t,E=e,k=g(t)}}function i(e,t){var n=e.stateNode,r=m(n,e.type,e.memoizedProps,t,e);return e.updateQueue=r,null!==r}function l(e){var t=e.stateNode;return v(t,e.memoizedProps,e)}function u(e){for(var t=e.return;null!==t&&t.tag!==hc&&t.tag!==mc;)t=t.return;E=t}function s(e){if(e!==E)return!1;if(!P)return u(e),P=!0,!1;var t=e.type;if(e.tag!==hc||"head"!==t&&"body"!==t&&!p(t,e.memoizedProps))for(var r=k;r;)n(e,r),r=h(r);return u(e),k=E?h(e.stateNode):null,!0}function c(){E=null,k=null,P=!1}var p=e.shouldSetTextContent,d=e.canHydrateInstance,f=e.canHydrateTextInstance,h=e.getNextHydratableSibling,g=e.getFirstHydratableChild,m=e.hydrateInstance,v=e.hydrateTextInstance,y=e.didNotHydrateInstance,b=e.didNotFindHydratableInstance,C=e.didNotFindHydratableTextInstance;if(!(d&&f&&h&&g&&m&&v&&y&&b&&C))return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){On("175")},prepareToHydrateHostTextInstance:function(){On("176")},popHydrationState:function(e){return!1}};var E=null,k=null,P=!1;return{enterHydrationState:t,resetHydrationState:c,tryToClaimNextHydratableInstance:a,prepareToHydrateHostInstance:i,prepareToHydrateHostTextInstance:l,popHydrationState:s}},Ec=el.popContextProvider,kc=Oi.reset,Pc=Dl.getStackAddendumByWorkInProgressFiber,Tc=Wl.logCapturedError,xc=gr.ReactCurrentOwner,wc=wl.createWorkInProgress,Nc=wl.largerPriority,Sc=$s.onCommitRoot,_c=ui.NoWork,Oc=ui.SynchronousPriority,Fc=ui.TaskPriority,Ic=ui.HighPriority,Mc=ui.LowPriority,Ac=ui.OffscreenPriority,Dc=tl.AsyncUpdates,Rc=vr.PerformedWork,Uc=vr.Placement,Lc=vr.Update,Hc=vr.PlacementAndUpdate,Wc=vr.Deletion,Vc=vr.ContentReset,Bc=vr.Callback,jc=vr.Err,zc=vr.Ref,Kc=Gn.HostRoot,qc=Gn.HostComponent,Yc=Gn.HostPortal,Qc=Gn.ClassComponent,$c=ki.getUpdatePriority,Xc=el,Gc=Xc.resetContext,Zc,Jc=1,ep=function(e){function t(){kc(),Gc(),M()}function n(){for(;null!==ae&&ae.current.pendingWorkPriority===_c;){ae.isScheduled=!1;var e=ae.nextScheduledRoot;if(ae.nextScheduledRoot=null,ae===ie)return ae=null,ie=null,ne=_c,null;ae=e}for(var n=ae,r=null,o=_c;null!==n;)n.current.pendingWorkPriority!==_c&&(o===_c||o>n.current.pendingWorkPriority)&&(o=n.current.pendingWorkPriority,r=n),n=n.nextScheduledRoot;if(null!==r)return ne=o,t(),void(te=wc(r.current,o));ne=_c,te=null}function r(){for(;null!==re;){var t=re.effectTag;if(t&Vc&&e.resetTextContent(re.stateNode),t&zc){var n=re.alternate;null!==n&&K(n)}switch(t&~(Bc|jc|Vc|zc|Rc)){case Uc:W(re),re.effectTag&=~Uc;break;case Hc:W(re),re.effectTag&=~Uc;var r=re.alternate;B(r,re);break;case Lc:var o=re.alternate;B(o,re);break;case Wc:he=!0,V(re),he=!1}re=re.nextEffect}}function o(){for(;null!==re;){var e=re.effectTag;if(e&(Lc|Bc)){var t=re.alternate;j(t,re)}e&zc&&z(re),e&jc&&y(re);var n=re.nextEffect;re.nextEffect=null,re=n}}function a(e){fe=!0,oe=null;var t=e.stateNode;t.current===e&&On("177"),ne!==Oc&&ne!==Fc||me++,xc.current=null;var a=void 0;for(e.effectTag>Rc?null!==e.lastEffect?(e.lastEffect.nextEffect=e,a=e.firstEffect):a=e:a=e.firstEffect,Q(),re=a;null!==re;){var i=!1,l=void 0;try{r()}catch(e){i=!0,l=e}i&&(null===re&&On("178"),g(re,l),null!==re&&(re=re.nextEffect))}for($(),t.current=e,re=a;null!==re;){var u=!1,s=void 0;try{o()}catch(e){u=!0,s=e}u&&(null===re&&On("178"),g(re,s),null!==re&&(re=re.nextEffect))}fe=!1,"function"==typeof Sc&&Sc(e.stateNode),ce&&(ce.forEach(P),ce=null),n()}function i(e,t){if(!(e.pendingWorkPriority!==_c&&e.pendingWorkPriority>t)){for(var n=$c(e),r=e.child;null!==r;)n=Nc(n,r.pendingWorkPriority),r=r.sibling;e.pendingWorkPriority=n}}function l(e){for(;;){var t=e.alternate,n=L(t,e,ne),r=e.return,o=e.sibling;if(i(e,ne),null!==n)return n;if(null!==r){null===r.firstEffect&&(r.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==r.lastEffect&&(r.lastEffect.nextEffect=e.firstEffect),r.lastEffect=e.lastEffect);e.effectTag>Rc&&(null!==r.lastEffect?r.lastEffect.nextEffect=e:r.firstEffect=e,r.lastEffect=e)}if(null!==o)return o;if(null===r)return oe=e,null;e=r}return null}function u(e){var t=e.alternate,n=D(t,e,ne);return null===n&&(n=l(e)),xc.current=null,n}function s(e){var t=e.alternate,n=R(t,e,ne);return null===n&&(n=l(e)),xc.current=null,n}function c(e){h(Ac,e)}function p(){if(null!==ue&&ue.size>0)for(;null!==te;)if(null===(te=m(te)?s(te):u(te))){if(null===oe&&On("179"),X=Fc,a(oe),X=ne,null===ue||0===ue.size)break;ne!==Fc&&On("180")}}function d(e,t){if(null!==oe?(X=Fc,a(oe),p()):null===te&&n(),!(ne===_c||ne>e)){X=ne;e:for(;;){if(ne<=Fc)for(;null!==te&&!(null===(te=u(te))&&(null===oe&&On("179"),X=Fc,a(oe),X=ne,p(),ne===_c||ne>e||ne>Fc)););else if(null!==t)for(;null!==te&&!Z;)if(t.timeRemaining()>Jc){if(null===(te=u(te)))if(null===oe&&On("179"),t.timeRemaining()>Jc){if(X=Fc,a(oe),X=ne,p(),ne===_c||ne>e||ne<Ic)break}else Z=!0}else Z=!0;switch(ne){case Oc:case Fc:if(ne<=e)continue e;break e;case Ic:case Mc:case Ac:if(null===t)break e;if(!Z&&ne<=e)continue e;break e;case _c:break e;default:On("181")}}}}function f(e,t,n,r){b(e,t),te=s(t),d(n,r)}function h(e,t){G&&On("182"),G=!0,me=0;var n=X,r=!1,o=null;try{d(e,t)}catch(e){r=!0,o=e}for(;r;){if(de){pe=o;break}var a=te;if(null!==a){var i=g(a,o);if(null===i&&On("183"),!de){r=!1,o=null;try{f(a,i,e,t),o=null}catch(e){r=!0,o=e;continue}break}}else de=!0}X=n,null!==t&&(le=!1),ne>Fc&&!le&&(q(c),le=!0);var l=pe;if(G=!1,Z=!1,de=!1,pe=null,ue=null,se=null,null!==l)throw l}function g(e,t){xc.current=null;var n=null,r=!1,o=!1,a=null;if(e.tag===Kc)n=e,v(e)&&(de=!0);else for(var i=e.return;null!==i&&null===n;){if(i.tag===Qc){var l=i.stateNode;"function"==typeof l.componentDidCatch&&(r=!0,a=mr(i),n=i,o=!0)}else i.tag===Kc&&(n=i);if(v(i)){if(he)return null;if(null!==ce&&(ce.has(i)||null!==i.alternate&&ce.has(i.alternate)))return null;n=null,o=!1}i=i.return}if(null!==n){null===se&&(se=new Set),se.add(n);var u=Pc(e),s=mr(e);return null===ue&&(ue=new Map),ue.set(n,{componentName:s,componentStack:u,error:t,errorBoundary:r?n.stateNode:null,errorBoundaryFound:r,errorBoundaryName:a,willRetry:o}),fe?(null===ce&&(ce=new Set),ce.add(n)):P(n),n}return null===pe&&(pe=t),null}function m(e){return null!==ue&&(ue.has(e)||null!==e.alternate&&ue.has(e.alternate))}function v(e){return null!==se&&(se.has(e)||null!==e.alternate&&se.has(e.alternate))}function y(e){var t=void 0;null!==ue&&(t=ue.get(e),ue.delete(e),null==t&&null!==e.alternate&&(e=e.alternate,t=ue.get(e),ue.delete(e))),null==t&&On("184");var n=t.error;try{Tc(t)}catch(e){console.error(e)}switch(e.tag){case Qc:var r=e.stateNode,o={componentStack:t.componentStack};return void r.componentDidCatch(n,o);case Kc:return void(null===pe&&(pe=n));default:On("157")}}function b(e,t){for(var n=e;null!==n;){switch(n.tag){case Qc:Ec(n);break;case qc:I(n);break;case Kc:case Yc:F(n)}if(n===t||n.alternate===t)break;n=n.return}}function C(e,t){t!==_c&&(e.isScheduled||(e.isScheduled=!0,ie?(ie.nextScheduledRoot=e,ie=e):(ae=e,ie=e)))}function E(e,t){me>ge&&(de=!0,On("185")),!G&&t<=ne&&(te=null);for(var n=e,r=!0;null!==n&&r;){if(r=!1,(n.pendingWorkPriority===_c||n.pendingWorkPriority>t)&&(r=!0,n.pendingWorkPriority=t),null!==n.alternate&&(n.alternate.pendingWorkPriority===_c||n.alternate.pendingWorkPriority>t)&&(r=!0,n.alternate.pendingWorkPriority=t),null===n.return){if(n.tag!==Kc)return;if(C(n.stateNode,t),!G)switch(t){case Oc:ee?h(Oc,null):h(Fc,null);break;case Fc:J||On("186");break;default:le||(q(c),le=!0)}}n=n.return}}function k(e,t){var n=X;return n===_c&&(n=!Y||e.internalContextTag&Dc||t?Mc:Oc),n===Oc&&(G||J)?Fc:n}function P(e){E(e,Fc)}function T(e,t){var n=X;X=e;try{t()}finally{X=n}}function x(e,t){var n=J;J=!0;try{return e(t)}finally{J=n,G||J||h(Fc,null)}}function w(e){var t=ee,n=J;ee=J,J=!1;try{return e()}finally{J=n,ee=t}}function N(e){var t=J,n=X;J=!0,X=Oc;try{return e()}finally{J=t,X=n,G&&On("187"),h(Fc,null)}}function S(e){var t=X;X=Mc;try{return e()}finally{X=t}}var _=fc(e),O=Cc(e),F=_.popHostContainer,I=_.popHostContext,M=_.resetHostContainer,A=Cs(e,_,O,E,k),D=A.beginWork,R=A.beginFailedWork,U=Ls(e,_,O),L=U.completeWork,H=uc(e,g),W=H.commitPlacement,V=H.commitDeletion,B=H.commitWork,j=H.commitLifeCycles,z=H.commitAttachRef,K=H.commitDetachRef,q=e.scheduleDeferredCallback,Y=e.useSyncScheduling,Q=e.prepareForCommit,$=e.resetAfterCommit,X=_c,G=!1,Z=!1,J=!1,ee=!1,te=null,ne=_c,re=null,oe=null,ae=null,ie=null,le=!1,ue=null,se=null,ce=null,pe=null,de=!1,fe=!1,he=!1,ge=1e3,me=0;return{scheduleUpdate:E,getPriorityContext:k,performWithPriority:T,batchedUpdates:x,unbatchedUpdates:w,flushSync:N,deferredUpdates:S}},tp=function(e){On("196")};Xe._injectFiber=function(e){tp=e};var np=Xe,rp=ki.addTopLevelUpdate,op=el.findCurrentUnmaskedContext,ap=el.isContextProvider,ip=el.processChildContext,lp=_l.createFiberRoot,up=Gn.HostComponent,sp=Ir.findCurrentHostFiber,cp=Ir.findCurrentHostFiberWithNoPortals;np._injectFiber(function(e){var t=op(e);return ap(e)?ip(e,t,!1):t});var pp=function(e){function t(e,t,n){var r=Fo.enableAsyncSubtreeAPI&&null!=t&&null!=t.type&&null!=t.type.prototype&&!0===t.type.prototype.unstable_isAsyncReactComponent,i=a(e,r),l={element:t};n=void 0===n?null:n,rp(e,l,n,i),o(e,i)}var n=e.getPublicInstance,r=ep(e),o=r.scheduleUpdate,a=r.getPriorityContext,i=r.performWithPriority,l=r.batchedUpdates,u=r.unbatchedUpdates,s=r.flushSync,c=r.deferredUpdates;return{createContainer:function(e){return lp(e)},updateContainer:function(e,n,r,o){var a=n.current,i=np(r);null===n.context?n.context=i:n.pendingContext=i,t(a,e,o)},performWithPriority:i,batchedUpdates:l,unbatchedUpdates:u,deferredUpdates:c,flushSync:s,getPublicRootInstance:function(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case up:return n(t.child.stateNode);default:return t.child.stateNode}},findHostInstance:function(e){var t=sp(e);return null===t?null:t.stateNode},findHostInstanceWithNoPortals:function(e){var t=cp(e);return null===t?null:t.stateNode}}},dp=Jn.TEXT_NODE,fp=Je,hp=null,gp=et,mp={getOffsets:nt,setOffsets:rt},vp=mp,yp=Jn.ELEMENT_NODE,bp={hasSelectionCapabilities:function(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)},getSelectionInformation:function(){var e=_n();return{focusedElem:e,selectionRange:bp.hasSelectionCapabilities(e)?bp.getSelection(e):null}},restoreSelection:function(e){var t=_n(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&ot(n)){bp.hasSelectionCapabilities(n)&&bp.setSelection(n,r);for(var o=[],a=n;a=a.parentNode;)a.nodeType===yp&&o.push({element:a,left:a.scrollLeft,top:a.scrollTop});Sn(n);for(var i=0;i<o.length;i++){var l=o[i];l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}},getSelection:function(e){return("selectionStart"in e?{start:e.selectionStart,end:e.selectionEnd}:vp.getOffsets(e))||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;void 0===r&&(r=n),"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):vp.setOffsets(e,t)}},Cp=bp,Ep="16.0.0-beta.2",kp=Jn.ELEMENT_NODE,Pp=function(e){Cn(!1,"Missing injection for fiber findDOMNode")},Tp=function(e){Cn(!1,"Missing injection for stack findDOMNode")},xp=function(e){if(null==e)return null;if(e.nodeType===kp)return e;var t=dr.get(e);if(t)return"number"==typeof t.tag?Pp(t):Tp(t);"function"==typeof e.render?On("188"):Cn(!1,"Element appears to be neither ReactComponent nor DOMNode. Keys: %s",Object.keys(e))};xp._injectFiber=function(e){Pp=e},xp._injectStack=function(e){Tp=e};var wp=xp,Np=Gn.HostComponent,Sp={isAncestor:lt,getLowestCommonAncestor:it,getParentInstance:ut,traverseTwoPhase:st,traverseEnterLeave:ct},_p=po.getListener,Op={accumulateTwoPhaseDispatches:vt,accumulateTwoPhaseDispatchesSkipTarget:yt,accumulateDirectDispatches:Ct,accumulateEnterLeaveDispatches:bt},Fp=Op;bn(Et.prototype,{destructor:function(){this._root=null,this._startText=null,this._fallbackText=null},getText:function(){return"value"in this._root?this._root.value:this._root[gp()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);var l=t>1?1-t:void 0;return this._fallbackText=o.slice(e,l),this._fallbackText}}),zn.addPoolingTo(Et);var Ip=Et,Mp=["dispatchConfig","_targetInst","nativeEvent","isDefaultPrevented","isPropagationStopped","_dispatchListeners","_dispatchInstances"],Ap={type:null,target:null,currentTarget:Tn.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};bn(kt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Tn.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Tn.thatReturnsTrue)},persist:function(){this.isPersistent=Tn.thatReturnsTrue},isPersistent:Tn.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;for(var n=0;n<Mp.length;n++)this[Mp[n]]=null}}),kt.Interface=Ap,kt.augmentClass=function(e,t){var n=this,r=function(){};r.prototype=n.prototype;var o=new r;bn(o,e.prototype),e.prototype=o,e.prototype.constructor=e,e.Interface=bn({},n.Interface,t),e.augmentClass=n.augmentClass,zn.addPoolingTo(e,zn.fourArgumentPooler)},zn.addPoolingTo(kt,zn.fourArgumentPooler);var Dp=kt,Rp={data:null};Dp.augmentClass(Pt,Rp);var Up=Pt,Lp={data:null};Dp.augmentClass(Tt,Lp);var Hp=Tt,Wp=[9,13,27,32],Vp=229,Bp=Pn.canUseDOM&&"CompositionEvent"in window,jp=null;Pn.canUseDOM&&"documentMode"in document&&(jp=document.documentMode)
	;var zp=Pn.canUseDOM&&"TextEvent"in window&&!jp&&!xt(),Kp=Pn.canUseDOM&&(!Bp||jp&&jp>8&&jp<=11),qp=32,Yp=String.fromCharCode(qp),Qp={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:["topBlur","topCompositionEnd","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:["topBlur","topCompositionStart","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:["topBlur","topCompositionUpdate","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]}},$p=!1,Xp=null,Gp={eventTypes:Qp,extractEvents:function(e,t,n,r){return[Ft(e,t,n,r),At(e,t,n,r)]}},Zp=Gp,Jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},ed=Dt,td={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:["topBlur","topChange","topClick","topFocus","topInput","topKeyDown","topKeyUp","topSelectionChange"]}},nd=null,rd=null,od=!1;Pn.canUseDOM&&(od=mo("input")&&(!document.documentMode||document.documentMode>9));var ad={eventTypes:td,_isInputEventSupported:od,extractEvents:function(e,t,n,r){var o,a,i=t?cr.getNodeFromInstance(t):window;if(Ut(i)?o=Vt:ed(i)?od?o=$t:(o=qt,a=Kt):Yt(i)&&(o=Qt),o){var l=o(e,t);if(l){return Rt(l,n,r)}}a&&a(e,i,t),"topBlur"===e&&Xt(t,i)}},id=ad,ld=["ResponderEventPlugin","SimpleEventPlugin","TapEventPlugin","EnterLeaveEventPlugin","ChangeEventPlugin","SelectEventPlugin","BeforeInputEventPlugin"],ud=ld,sd={view:function(e){if(e.view)return e.view;var t=eo(e);if(t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};Dp.augmentClass(Gt,sd);var cd=Gt,pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},dd=Jt,fd={screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:dd,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)}};cd.augmentClass(en,fd);var hd=en,gd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},md={eventTypes:gd,extractEvents:function(e,t,n,r){if("topMouseOver"===e&&(n.relatedTarget||n.fromElement))return null;if("topMouseOut"!==e&&"topMouseOver"!==e)return null;var o;if(r.window===r)o=r;else{var a=r.ownerDocument;o=a?a.defaultView||a.parentWindow:window}var i,l;if("topMouseOut"===e){i=t;var u=n.relatedTarget||n.toElement;l=u?cr.getClosestInstanceFromNode(u):null}else i=null,l=t;if(i===l)return null;var s=null==i?o:cr.getNodeFromInstance(i),c=null==l?o:cr.getNodeFromInstance(l),p=hd.getPooled(gd.mouseLeave,i,n,r);p.type="mouseleave",p.target=s,p.relatedTarget=c;var d=hd.getPooled(gd.mouseEnter,l,n,r);return d.type="mouseenter",d.target=c,d.relatedTarget=s,Fp.accumulateEnterLeaveDispatches(p,d,i,l),[p,d]}},vd=md,yd=Jn.DOCUMENT_NODE,bd=Pn.canUseDOM&&"documentMode"in document&&document.documentMode<=11,Cd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:["topBlur","topContextMenu","topFocus","topKeyDown","topKeyUp","topMouseDown","topMouseUp","topSelectionChange"]}},Ed=null,kd=null,Pd=null,Td=!1,xd=_o.isListeningToAllDependencies,wd={eventTypes:Cd,extractEvents:function(e,t,n,r){var o=r.window===r?r.document:r.nodeType===yd?r:r.ownerDocument;if(!o||!xd("onSelect",o))return null;var a=t?cr.getNodeFromInstance(t):window;switch(e){case"topFocus":(ed(a)||"true"===a.contentEditable)&&(Ed=a,kd=t,Pd=null);break;case"topBlur":Ed=null,kd=null,Pd=null;break;case"topMouseDown":Td=!0;break;case"topContextMenu":case"topMouseUp":return Td=!1,nn(n,r);case"topSelectionChange":if(bd)break;case"topKeyDown":case"topKeyUp":return nn(n,r)}return null}},Nd=wd,Sd={animationName:null,elapsedTime:null,pseudoElement:null};Dp.augmentClass(rn,Sd);var _d=rn,Od={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};Dp.augmentClass(on,Od);var Fd=on,Id={relatedTarget:null};cd.augmentClass(an,Id);var Md=an,Ad=ln,Dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ud=un,Ld={key:Ud,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:dd,charCode:function(e){return"keypress"===e.type?Ad(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ad(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};cd.augmentClass(sn,Ld);var Hd=sn,Wd={dataTransfer:null};hd.augmentClass(cn,Wd);var Vd=cn,Bd={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:dd};cd.augmentClass(pn,Bd);var jd=pn,zd={propertyName:null,elapsedTime:null,pseudoElement:null};Dp.augmentClass(dn,zd);var Kd=dn,qd={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};hd.augmentClass(fn,qd);var Yd=fn,Qd={},$d={};["abort","animationEnd","animationIteration","animationStart","blur","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","doubleClick","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","focus","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","progress","rateChange","reset","scroll","seeked","seeking","stalled","submit","suspend","timeUpdate","toggle","touchCancel","touchEnd","touchMove","touchStart","transitionEnd","volumeChange","waiting","wheel"].forEach(function(e){var t=e[0].toUpperCase()+e.slice(1),n="on"+t,r="top"+t,o={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[r]};Qd[e]=o,$d[r]=o});var Xd={eventTypes:Qd,extractEvents:function(e,t,n,r){var o=$d[e];if(!o)return null;var a;switch(e){case"topAbort":case"topCancel":case"topCanPlay":case"topCanPlayThrough":case"topClose":case"topDurationChange":case"topEmptied":case"topEncrypted":case"topEnded":case"topError":case"topInput":case"topInvalid":case"topLoad":case"topLoadedData":case"topLoadedMetadata":case"topLoadStart":case"topPause":case"topPlay":case"topPlaying":case"topProgress":case"topRateChange":case"topReset":case"topSeeked":case"topSeeking":case"topStalled":case"topSubmit":case"topSuspend":case"topTimeUpdate":case"topToggle":case"topVolumeChange":case"topWaiting":a=Dp;break;case"topKeyPress":if(0===Ad(n))return null;case"topKeyDown":case"topKeyUp":a=Hd;break;case"topBlur":case"topFocus":a=Md;break;case"topClick":if(2===n.button)return null;case"topDoubleClick":case"topMouseDown":case"topMouseMove":case"topMouseUp":case"topMouseOut":case"topMouseOver":case"topContextMenu":a=hd;break;case"topDrag":case"topDragEnd":case"topDragEnter":case"topDragExit":case"topDragLeave":case"topDragOver":case"topDragStart":case"topDrop":a=Vd;break;case"topTouchCancel":case"topTouchEnd":case"topTouchMove":case"topTouchStart":a=jd;break;case"topAnimationEnd":case"topAnimationIteration":case"topAnimationStart":a=_d;break;case"topTransitionEnd":a=Kd;break;case"topScroll":a=cd;break;case"topWheel":a=Yd;break;case"topCopy":case"topCut":case"topPaste":a=Fd}a||On("86",e);var i=a.getPooled(o,t,n,r);return Fp.accumulateTwoPhaseDispatches(i),i}},Gd=Xd;ro.setHandleTopLevel(_o.handleTopLevel),po.injection.injectEventPluginOrder(ud),Wr.injection.injectComponentTree(cr),po.injection.injectEventPluginsByName({SimpleEventPlugin:Gd,EnterLeaveEventPlugin:vd,ChangeEventPlugin:id,SelectEventPlugin:Nd,BeforeInputEventPlugin:Zp});var Zd={Properties:{"aria-current":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},DOMAttributeNames:{},DOMPropertyNames:{}},Jd=Zd,ef=Qn.injection.MUST_USE_PROPERTY,tf=Qn.injection.HAS_BOOLEAN_VALUE,nf=Qn.injection.HAS_NUMERIC_VALUE,rf=Qn.injection.HAS_POSITIVE_NUMERIC_VALUE,of=Qn.injection.HAS_OVERLOADED_BOOLEAN_VALUE,af={isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Qn.ATTRIBUTE_NAME_CHAR+"]*$")),Properties:{accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:tf,allowTransparency:0,alt:0,as:0,async:tf,autoComplete:0,autoPlay:tf,capture:tf,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:ef|tf,cite:0,classID:0,className:0,cols:rf,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:tf,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:tf,defer:tf,dir:0,disabled:tf,download:of,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:tf,formTarget:0,frameBorder:0,headers:0,height:0,hidden:tf,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:tf,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:ef|tf,muted:ef|tf,name:0,nonce:0,noValidate:tf,open:tf,optimum:0,pattern:0,placeholder:0,playsInline:tf,poster:0,preload:0,profile:0,radioGroup:0,readOnly:tf,referrerPolicy:0,rel:0,required:tf,reversed:tf,role:0,rows:rf,rowSpan:nf,sandbox:0,scope:0,scoped:tf,scrolling:0,seamless:tf,selected:ef|tf,shape:0,size:rf,sizes:0,slot:0,span:rf,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:nf,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:tf,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");"number"!==e.type||!1===e.hasAttribute("value")?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&e.setAttribute("value",""+t)}}},lf=af,uf={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},sf={accentHeight:"accent-height",accumulate:0,additive:0,alignmentBaseline:"alignment-baseline",allowReorder:"allowReorder",alphabetic:0,amplitude:0,arabicForm:"arabic-form",ascent:0,attributeName:"attributeName",attributeType:"attributeType",autoReverse:"autoReverse",azimuth:0,baseFrequency:"baseFrequency",baseProfile:"baseProfile",baselineShift:"baseline-shift",bbox:0,begin:0,bias:0,by:0,calcMode:"calcMode",capHeight:"cap-height",clip:0,clipPath:"clip-path",clipRule:"clip-rule",clipPathUnits:"clipPathUnits",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",contentScriptType:"contentScriptType",contentStyleType:"contentStyleType",cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:"diffuseConstant",direction:0,display:0,divisor:0,dominantBaseline:"dominant-baseline",dur:0,dx:0,dy:0,edgeMode:"edgeMode",elevation:0,enableBackground:"enable-background",end:0,exponent:0,externalResourcesRequired:"externalResourcesRequired",fill:0,fillOpacity:"fill-opacity",fillRule:"fill-rule",filter:0,filterRes:"filterRes",filterUnits:"filterUnits",floodColor:"flood-color",floodOpacity:"flood-opacity",focusable:0,fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",glyphRef:"glyphRef",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",hanging:0,horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",ideographic:0,imageRendering:"image-rendering",in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:"kernelMatrix",kernelUnitLength:"kernelUnitLength",kerning:0,keyPoints:"keyPoints",keySplines:"keySplines",keyTimes:"keyTimes",lengthAdjust:"lengthAdjust",letterSpacing:"letter-spacing",lightingColor:"lighting-color",limitingConeAngle:"limitingConeAngle",local:0,markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",markerHeight:"markerHeight",markerUnits:"markerUnits",markerWidth:"markerWidth",mask:0,maskContentUnits:"maskContentUnits",maskUnits:"maskUnits",mathematical:0,mode:0,numOctaves:"numOctaves",offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pathLength:"pathLength",patternContentUnits:"patternContentUnits",patternTransform:"patternTransform",patternUnits:"patternUnits",pointerEvents:"pointer-events",points:0,pointsAtX:"pointsAtX",pointsAtY:"pointsAtY",pointsAtZ:"pointsAtZ",preserveAlpha:"preserveAlpha",preserveAspectRatio:"preserveAspectRatio",primitiveUnits:"primitiveUnits",r:0,radius:0,refX:"refX",refY:"refY",renderingIntent:"rendering-intent",repeatCount:"repeatCount",repeatDur:"repeatDur",requiredExtensions:"requiredExtensions",requiredFeatures:"requiredFeatures",restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:"shape-rendering",slope:0,spacing:0,specularConstant:"specularConstant",specularExponent:"specularExponent",speed:0,spreadMethod:"spreadMethod",startOffset:"startOffset",stdDeviation:"stdDeviation",stemh:0,stemv:0,stitchTiles:"stitchTiles",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",string:0,stroke:0,strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",surfaceScale:"surfaceScale",systemLanguage:"systemLanguage",tableValues:"tableValues",targetX:"targetX",targetY:"targetY",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",textLength:"textLength",to:0,transform:0,u1:0,u2:0,underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicode:0,unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",values:0,vectorEffect:"vector-effect",version:0,vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",viewBox:"viewBox",viewTarget:"viewTarget",visibility:0,widths:0,wordSpacing:"word-spacing",writingMode:"writing-mode",x:0,xHeight:"x-height",x1:0,x2:0,xChannelSelector:"xChannelSelector",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlns:0,xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space",y:0,y1:0,y2:0,yChannelSelector:"yChannelSelector",z:0,zoomAndPan:"zoomAndPan"},cf={Properties:{},DOMAttributeNamespaces:{xlinkActuate:uf.xlink,xlinkArcrole:uf.xlink,xlinkHref:uf.xlink,xlinkRole:uf.xlink,xlinkShow:uf.xlink,xlinkTitle:uf.xlink,xlinkType:uf.xlink,xmlBase:uf.xml,xmlLang:uf.xml,xmlSpace:uf.xml},DOMAttributeNames:{}};Object.keys(sf).forEach(function(e){cf.Properties[e]=0,sf[e]&&(cf.DOMAttributeNames[e]=sf[e])});var pf=cf;Qn.injection.injectDOMPropertyConfig(Jd),Qn.injection.injectDOMPropertyConfig(lf),Qn.injection.injectDOMPropertyConfig(pf);var df=kn.isValidElement,ff=$s.injectInternals,hf=Jn.ELEMENT_NODE,gf=Jn.TEXT_NODE,mf=Jn.COMMENT_NODE,vf=Jn.DOCUMENT_NODE,yf=Jn.DOCUMENT_FRAGMENT_NODE,bf=Qn.ID_ATTRIBUTE_NAME,Cf=Ka.createElement,Ef=Ka.getChildNamespace,kf=Ka.setInitialProperties,Pf=Ka.diffProperties,Tf=Ka.updateProperties,xf=Ka.diffHydratedProperties,wf=Ka.diffHydratedText,Nf=Ka.warnForDeletedHydratableElement,Sf=Ka.warnForDeletedHydratableText,_f=Ka.warnForInsertedHydratedElement,Of=Ka.warnForInsertedHydratedText,Ff=cr.precacheFiberNode,If=cr.updateFiberProps;qr.injection.injectFiberControlledHostComponent(Ka),wp._injectFiber(function(e){return Df.findHostInstance(e)});var Mf=null,Af=null,Df=pp({getRootHostContext:function(e){var t=void 0,n=void 0;if(e.nodeType===vf){t="#document";var r=e.documentElement;n=r?r.namespaceURI:Ef(null,"")}else{var o=e.nodeType===mf?e.parentNode:e,a=o.namespaceURI||null;t=o.tagName,n=Ef(a,t)}return n},getChildHostContext:function(e,t){return Ef(e,t)},getPublicInstance:function(e){return e},prepareForCommit:function(){Mf=_o.isEnabled(),Af=Cp.getSelectionInformation(),_o.setEnabled(!1)},resetAfterCommit:function(){Cp.restoreSelection(Af),Af=null,_o.setEnabled(Mf),Mf=null},createInstance:function(e,t,n,r,o){var a=void 0;a=r;var i=Cf(e,t,n,a);return Ff(o,i),If(i,t),i},appendInitialChild:function(e,t){e.appendChild(t)},finalizeInitialChildren:function(e,t,n,r){return kf(e,t,n,r),vn(t,n)},prepareUpdate:function(e,t,n,r,o,a){return Pf(e,t,n,r,o)},commitMount:function(e,t,n,r){e.focus()},commitUpdate:function(e,t,n,r,o,a){If(e,o),Tf(e,t,n,r,o)},shouldSetTextContent:function(e,t){return"textarea"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html},resetTextContent:function(e){e.textContent=""},shouldDeprioritizeSubtree:function(e,t){return!!t.hidden},createTextInstance:function(e,t,n,r){var o=document.createTextNode(e);return Ff(r,o),o},commitTextUpdate:function(e,t,n){e.nodeValue=n},appendChild:function(e,t){e.appendChild(t)},appendChildToContainer:function(e,t){e.nodeType===mf?e.parentNode.insertBefore(t,e):e.appendChild(t)},insertBefore:function(e,t,n){e.insertBefore(t,n)},insertInContainerBefore:function(e,t,n){e.nodeType===mf?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},removeChildFromContainer:function(e,t){e.nodeType===mf?e.parentNode.removeChild(t):e.removeChild(t)},canHydrateInstance:function(e,t,n){return e.nodeType===hf&&t===e.nodeName.toLowerCase()},canHydrateTextInstance:function(e,t){return""!==t&&e.nodeType===gf},getNextHydratableSibling:function(e){for(var t=e.nextSibling;t&&t.nodeType!==hf&&t.nodeType!==gf;)t=t.nextSibling;return t},getFirstHydratableChild:function(e){for(var t=e.firstChild;t&&t.nodeType!==hf&&t.nodeType!==gf;)t=t.nextSibling;return t},hydrateInstance:function(e,t,n,r,o){return Ff(o,e),If(e,n),xf(e,t,n,r)},hydrateTextInstance:function(e,t,n){return Ff(n,e),wf(e,t)},didNotHydrateInstance:function(e,t){1===t.nodeType?Nf(e,t):Sf(e,t)},didNotFindHydratableInstance:function(e,t,n){_f(e,t,n)},didNotFindHydratableTextInstance:function(e,t){Of(e,t)},scheduleDeferredCallback:li.rIC,useSyncScheduling:!Mo.fiberAsyncScheduling});Zr.injection.injectFiberBatchedUpdates(Df.batchedUpdates);var Rf={render:function(e,t,n){return Fo.disableNewFiberFeatures&&(df(e)||("string"==typeof e?Cn(!1,"ReactDOM.render(): Invalid component element. Instead of passing a string like 'div', pass React.createElement('div') or <div />."):"function"==typeof e?Cn(!1,"ReactDOM.render(): Invalid component element. Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />."):null!=e&&void 0!==e.props?Cn(!1,"ReactDOM.render(): Invalid component element. This may be caused by unintentionally loading two independent copies of React."):Cn(!1,"ReactDOM.render(): Invalid component element."))),yn(null,e,t,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){return null!=e&&dr.has(e)||On("38"),yn(e,t,n,r)},unmountComponentAtNode:function(e){return hn(e)||On("40"),!!e._reactRootContainer&&(Df.unbatchedUpdates(function(){yn(null,null,e,function(){e._reactRootContainer=null})}),!0)},findDOMNode:wp,unstable_createPortal:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return eu.createPortal(e,t,null,n)},unstable_batchedUpdates:Zr.batchedUpdates,unstable_deferredUpdates:Df.deferredUpdates,flushSync:Df.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:po,EventPluginRegistry:An,EventPropagators:Fp,ReactControlledComponent:qr,ReactDOMComponentTree:cr,ReactDOMEventListener:ro}};"function"==typeof ff&&ff({findFiberByHostInstance:cr.getClosestInstanceFromNode,findHostInstanceByFiber:Df.findHostInstance,bundleType:0,version:Ep});var Uf=Rf;module.exports=Uf;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @typechecks
	 */
	
	var emptyFunction = __webpack_require__(6);
	
	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },
	
	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (false) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },
	
	  registerDefault: function registerDefault() {}
	};
	
	module.exports = EventListener;

/***/ },
/* 101 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var isTextNode = __webpack_require__(104);
	
	/*eslint-disable no-bitwise */
	
	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}
	
	module.exports = containsNode;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var isNode = __webpack_require__(105);
	
	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}
	
	module.exports = isTextNode;

/***/ },
/* 105 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}
	
	module.exports = isNode;

/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * @param {DOMElement} node input/textarea to focus
	 */
	
	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}
	
	module.exports = focusNode;

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	/* eslint-disable fb-www/typeof-undefined */
	
	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}
	
	module.exports = getActiveElement;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(83);
	
	var _reactMotion = __webpack_require__(109);
	
	var _reactReduxWebaudio = __webpack_require__(29);
	
	__webpack_require__(125);
	
	var _IconButton = __webpack_require__(129);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _hoverSpinHOC = __webpack_require__(131);
	
	var _hoverSpinHOC2 = _interopRequireDefault(_hoverSpinHOC);
	
	var _styles = __webpack_require__(130);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PRODUCTION = void 0;
	if (true) {
	    PRODUCTION = true;
	}
	if (false) {
	    PRODUCTION = false;
	}
	
	/********************* AUDIO STUFFS *********************/
	/**~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~**/
	var ROOT_IN_HZ = 440;
	
	var BLUES_STEPS = [1, 6 / 5, 4 / 3, 45 / 32, 3 / 2, 9 / 5, 2];
	/**~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~**/
	
	var SineDing = function () {
	    function SineDing(context) {
	        _classCallCheck(this, SineDing);
	
	        this.context = context;
	    }
	
	    _createClass(SineDing, [{
	        key: 'setup',
	        value: function setup() {
	            this.oscillator = this.context.createOscillator();
	            this.oscillator.type = 'sine';
	
	            this.filter = this.context.createBiquadFilter();
	            this.filter.frequency.value = 3520;
	            this.filter.type = 'bandpass';
	            this.filter.Q.value = 0.8;
	
	            this.gainNode = this.context.createGain();
	
	            this.oscillator.connect(this.filter);
	            this.filter.connect(this.gainNode);
	            this.gainNode.connect(this.context.destination);
	        }
	    }, {
	        key: 'play',
	        value: function play(value) {
	            this.setup();
	            this.oscillator.frequency.value = value;
	            this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
	            this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);
	            this.oscillator.start(this.context.currentTime);
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + 0.5);
	        }
	    }, {
	        key: 'kill',
	        value: function kill() {
	            this.oscillator.stop(this.context.currentTime + 0.5);
	            for (var i in this) {
	                if (this.hasOwnProperty(i)) {
	                    this[i] = undefined;
	                } else if (this.prototype.hasOwnProperty(i)) {
	                    this.prototype[i] = undefined;
	                }
	            }
	        }
	    }]);
	
	    return SineDing;
	}();
	
	var scaleFactory = function scaleFactory(scale, tonic) {
	    return scale.map(function (step, idx) {
	        return {
	            step: idx + 1,
	            noteInHz: tonic * step
	        };
	    });
	};
	
	var soundEvent = function soundEvent(_ref) {
	    var noteInHz = _ref.noteInHz;
	    return function (aCtx) {
	        var sound = new SineDing(aCtx);
	        sound.play(noteInHz);
	        sound.stop();
	        sound.kill();
	        sound = undefined;
	    };
	};
	
	/********************************************************/
	
	var SocialButton = (0, _hoverSpinHOC2.default)(_IconButton2.default);
	
	var socialMedia = [{
	    name: 'Github',
	    icon: 'github-circled',
	    url: 'https://www.github.com/bsaphier'
	}, {
	    name: 'LinkedIn',
	    icon: 'linkedin',
	    url: 'https://www.linkedin.com/in/bsaphier'
	}, {
	    name: 'Stack Overflow',
	    icon: 'stackoverflow',
	    url: 'http://stackoverflow.com/story/bsaphier'
	}, {
	    name: 'Angel List',
	    icon: 'angellist',
	    url: 'https://angel.co/bsaphier'
	}];
	
	var motion = {
	    initial: {
	        top: -50,
	        letterSpacing0: 21,
	        letterSpacing1: 13,
	        letterSpacing2: 8,
	        letterSpacing3: 5,
	        letterSpacing4: 3,
	        letterSpacing5: 2,
	        letterSpacing6: 1,
	        letterSpacing7: 1
	    },
	    exit: {
	        top: (0, _reactMotion.spring)(-50, _reactMotion.presets.stiff),
	        letterSpacing0: (0, _reactMotion.spring)(1, _reactMotion.presets.wobbly),
	        letterSpacing1: (0, _reactMotion.spring)(1, _reactMotion.presets.wobbly),
	        letterSpacing2: (0, _reactMotion.spring)(1, _reactMotion.presets.wobbly),
	        letterSpacing3: (0, _reactMotion.spring)(1, _reactMotion.presets.wobbly),
	        letterSpacing4: (0, _reactMotion.spring)(1, _reactMotion.presets.wobbly),
	        letterSpacing5: (0, _reactMotion.spring)(1, _reactMotion.presets.wobbly),
	        letterSpacing6: (0, _reactMotion.spring)(1, _reactMotion.presets.wobbly),
	        letterSpacing7: (0, _reactMotion.spring)(1, _reactMotion.presets.wobbly)
	    },
	    enter: {
	        top: (0, _reactMotion.spring)(45, _reactMotion.presets.stiff),
	        letterSpacing0: (0, _reactMotion.spring)(-0.055, _reactMotion.presets.wobbly),
	        letterSpacing1: (0, _reactMotion.spring)(0.175, _reactMotion.presets.gentle),
	        letterSpacing2: (0, _reactMotion.spring)(-0.06, _reactMotion.presets.wobbly),
	        letterSpacing3: (0, _reactMotion.spring)(-0.08, _reactMotion.presets.gentle),
	        letterSpacing4: (0, _reactMotion.spring)(-0.048, _reactMotion.presets.gentle),
	        letterSpacing5: (0, _reactMotion.spring)(-0.1, _reactMotion.presets.gentle),
	        letterSpacing6: (0, _reactMotion.spring)(-0.091, _reactMotion.presets.gentle),
	        letterSpacing7: (0, _reactMotion.spring)(-0.1, _reactMotion.presets.gentle)
	    }
	};
	
	var Block = function Block(_ref2) {
	    var children = _ref2.children,
	        style = _ref2.style;
	    return _react2.default.createElement(
	        'div',
	        { className: 'block', style: _extends({}, _styles.styles.block, style) },
	        children
	    );
	};
	
	var Title = function Title(_ref3) {
	    var id = _ref3.id,
	        note = _ref3.note,
	        hover = _ref3.hover,
	        leave = _ref3.leave,
	        style = _ref3.style,
	        children = _ref3.children;
	    return _react2.default.createElement(
	        'div',
	        {
	            style: _styles.styles.title,
	            onTouchStart: hover ? function () {
	                hover(id, note);
	            } : null,
	            onTouchMove: leave ? function (evt) {
	                evt.preventDefault();
	                leave(id);
	            } : null,
	            onTouchCancel: leave ? function (evt) {
	                evt.preventDefault();
	                leave(id);
	            } : null,
	            onTouchEnd: leave ? function (evt) {
	                evt.preventDefault();
	                leave(id);
	            } : null,
	            onMouseOver: hover ? function () {
	                return hover(id, note);
	            } : null,
	            onMouseLeave: leave ? function () {
	                return leave(id);
	            } : null
	        },
	        _react2.default.createElement(
	            'span',
	            { style: _extends({}, _styles.styles.text, style) },
	            children
	        )
	    );
	};
	
	var Banner = function (_Component) {
	    _inherits(Banner, _Component);
	
	    function Banner(props) {
	        _classCallCheck(this, Banner);
	
	        var _this = _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).call(this, props));
	
	        _this.state = {
	            enter: false,
	            motion: motion.initial,
	            musicScale: scaleFactory(BLUES_STEPS, ROOT_IN_HZ)
	        };
	        _this.leave = _this.leave.bind(_this);
	        _this.hover = _this.hover.bind(_this);
	        _this.enterAnimate = _this.enterAnimate.bind(_this);
	        return _this;
	    }
	
	    _createClass(Banner, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (!this.state.enter) {
	                this.enterAnimate();
	            }
	        }
	    }, {
	        key: 'enterAnimate',
	        value: function enterAnimate() {
	            var nextState = {
	                motion: {
	                    top: (0, _reactMotion.spring)(45, _reactMotion.presets.stiff),
	                    letterSpacing0: (0, _reactMotion.spring)(-0.055, _reactMotion.presets.gentle),
	                    letterSpacing1: (0, _reactMotion.spring)(0.175, _reactMotion.presets.gentle),
	                    letterSpacing2: (0, _reactMotion.spring)(-0.06, _reactMotion.presets.wobbly),
	                    letterSpacing3: (0, _reactMotion.spring)(-0.08, _reactMotion.presets.gentle),
	                    letterSpacing4: (0, _reactMotion.spring)(-0.048, _reactMotion.presets.gentle),
	                    letterSpacing5: (0, _reactMotion.spring)(-0.1, _reactMotion.presets.gentle),
	                    letterSpacing6: (0, _reactMotion.spring)(-0.091, _reactMotion.presets.gentle),
	                    letterSpacing7: (0, _reactMotion.spring)(-0.1, _reactMotion.presets.gentle)
	                }
	            };
	            this.setState(_extends({ enter: true }, nextState));
	        }
	    }, {
	        key: 'hover',
	        value: function hover(id, note) {
	            this.setState({ motion: _extends({}, motion.enter, _defineProperty({}, id, motion.exit[id])) });
	            this.props.playSound(note);
	        }
	    }, {
	        key: 'leave',
	        value: function leave(id) {
	            this.setState({ motion: _extends({}, motion.enter, _defineProperty({}, id, motion.enter[id])) });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var socialButtons = socialMedia.map(function (link) {
	                return _react2.default.createElement(SocialButton, {
	                    url: link.url,
	                    key: link.name,
	                    name: link.name,
	                    icon: link.icon,
	                    color: [255, 68, 62],
	                    initialColor: [45, 45, 45],
	                    style: _styles.styles.socialButton
	                });
	            });
	
	            return _react2.default.createElement(
	                'main',
	                { style: _styles.styles.main },
	                _react2.default.createElement(
	                    'section',
	                    { style: _styles.styles.window },
	                    /* For Development */
	                    !PRODUCTION && _react2.default.createElement(
	                        'div',
	                        { style: { position: 'absolute', color: '#ffffff', fontSize: '1rem' } },
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'isiPhone: ' + (navigator.userAgent.toLowerCase().indexOf('iphone') > -1)
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'innerHeight: ' + window.innerHeight
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'innerWidth: ' + window.innerWidth
	                        )
	                    )
	                    /* For Development */,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'banner', style: _styles.styles.banner },
	                        _react2.default.createElement(
	                            _reactMotion.Motion,
	                            { style: this.state.motion },
	                            function (interpStyle) {
	                                return _react2.default.createElement(
	                                    'div',
	                                    { id: 'cell', style: _extends({}, _styles.styles.cell, { top: interpStyle.top + '%' }) },
	                                    _react2.default.createElement(
	                                        Title,
	                                        {
	                                            hover: _this2.hover,
	                                            leave: _this2.leave,
	                                            id: 'letterSpacing0',
	                                            note: _this2.state.musicScale[0],
	                                            style: {
	                                                fontWeight: 500,
	                                                fontSize: 'calc(2 * 4.275em)',
	                                                lineHeight: '0.7em',
	                                                paddingTop: '0.06em',
	                                                paddingRight: '0.1em',
	                                                paddingLeft: '0.05em',
	                                                letterSpacing: interpStyle.letterSpacing0 + 'em'
	                                            } },
	                                        'Hello'
	                                    ),
	                                    _react2.default.createElement(
	                                        Title,
	                                        {
	                                            hover: _this2.hover,
	                                            leave: _this2.leave,
	                                            id: 'letterSpacing1',
	                                            note: _this2.state.musicScale[2],
	                                            style: {
	                                                fontWeight: 100,
	                                                fontSize: 'calc(2 * 1.6em)',
	                                                lineHeight: '0.8em',
	                                                paddingTop: '0.06em',
	                                                paddingLeft: '0.15em',
	                                                letterSpacing: interpStyle.letterSpacing1 + 'em'
	                                            } },
	                                        'My name is'
	                                    ),
	                                    _react2.default.createElement(
	                                        Title,
	                                        {
	                                            hover: _this2.hover,
	                                            leave: _this2.leave,
	                                            id: 'letterSpacing2',
	                                            note: _this2.state.musicScale[1],
	                                            style: {
	                                                fontWeight: 900,
	                                                fontSize: 'calc(2 * 6.89em)',
	                                                lineHeight: '0.7em',
	                                                paddingTop: '0.03em',
	                                                paddingRight: '0.06em',
	                                                paddingBottom: '0.01em',
	                                                letterSpacing: interpStyle.letterSpacing2 + 'em'
	                                            } },
	                                        _react2.default.createElement(
	                                            'b',
	                                            { style: { letterSpacing: interpStyle.letterSpacing2 - 0.035 + 'em' } },
	                                            'B'
	                                        ),
	                                        'en'
	                                    ),
	                                    _react2.default.createElement(
	                                        Title,
	                                        {
	                                            hover: _this2.hover,
	                                            leave: _this2.leave,
	                                            id: 'letterSpacing3',
	                                            note: _this2.state.musicScale[2],
	                                            style: {
	                                                fontWeight: 100,
	                                                fontSize: 'calc(2 * 3.5em)',
	                                                fontStyle: 'italic',
	                                                lineHeight: '0.8em',
	                                                paddingRight: '0.1em',
	                                                letterSpacing: interpStyle.letterSpacing3 + 'em'
	                                            } },
	                                        'Saphier'
	                                    ),
	                                    _react2.default.createElement(
	                                        Title,
	                                        {
	                                            hover: _this2.hover,
	                                            leave: _this2.leave,
	                                            id: 'letterSpacing4',
	                                            note: _this2.state.musicScale[3],
	                                            style: {
	                                                fontWeight: 900,
	                                                fontSize: 'calc(2 * 1em)',
	                                                lineHeight: '0.9em',
	                                                wordSpacing: '-0.05em',
	                                                paddingTop: '0.07em',
	                                                paddingRight: '0.103em',
	                                                letterSpacing: interpStyle.letterSpacing4 + 'em'
	                                            } },
	                                        'I\'m a software engineer'
	                                    ),
	                                    _react2.default.createElement(
	                                        Title,
	                                        {
	                                            hover: _this2.hover,
	                                            leave: _this2.leave,
	                                            id: 'letterSpacing5',
	                                            note: _this2.state.musicScale[4],
	                                            style: {
	                                                fontWeight: 100,
	                                                fontSize: 'calc(2 * 1.91em)',
	                                                lineHeight: '0.9em',
	                                                paddingRight: '0.175em',
	                                                letterSpacing: interpStyle.letterSpacing5 + 'em'
	                                            } },
	                                        'Exploring the'
	                                    ),
	                                    _react2.default.createElement(
	                                        Title,
	                                        {
	                                            hover: _this2.hover,
	                                            leave: _this2.leave,
	                                            id: 'letterSpacing6',
	                                            note: _this2.state.musicScale[5],
	                                            style: {
	                                                fontWeight: 400,
	                                                fontSize: 'calc(2 * 1.3em)',
	                                                lineHeight: '0.7em',
	                                                paddingTop: '0.08em',
	                                                paddingRight: '0.13em',
	                                                paddingBottom: '0.03em',
	                                                letterSpacing: interpStyle.letterSpacing6 + 'em'
	                                            } },
	                                        'crossover between'
	                                    ),
	                                    _react2.default.createElement(
	                                        Title,
	                                        {
	                                            hover: _this2.hover,
	                                            leave: _this2.leave,
	                                            id: 'letterSpacing7',
	                                            note: _this2.state.musicScale[6],
	                                            style: {
	                                                fontWeight: 100,
	                                                fontSize: 'calc(2 * 2em)',
	                                                lineHeight: '1em',
	                                                paddingRight: '0.2em',
	                                                letterSpacing: interpStyle.letterSpacing7 + 'em'
	                                            } },
	                                        'Sound & Code'
	                                    )
	                                );
	                            }
	                        ),
	                        _react2.default.createElement(
	                            Block,
	                            null,
	                            socialButtons
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'footer', style: _styles.styles.footer },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '. . . And I\'m still working on my website'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Banner;
	}(_react.Component);
	
	/********************* Thunk-Action *********************/
	
	var _playSound = function _playSound(note) {
	    return function (dispatch) {
	        var sineDing = soundEvent(note);
	        dispatch(_reactReduxWebaudio.actionCreators.emit(sineDing));
	    };
	};
	
	/********************************************************/
	
	var mapStateToProps = function mapStateToProps(state) {
	    return state;
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        playSound: function playSound(note) {
	            return dispatch(_playSound(note));
	        }
	    };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Banner);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(110);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(119);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(120);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(122);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(123);
	
	exports.presets = _interopRequire(_presets);
	
	var _stripStyle = __webpack_require__(112);
	
	exports.stripStyle = _interopRequire(_stripStyle);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(124);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(111);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(112);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(113);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(114);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(116);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(118);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(59);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	var Motion = (function (_React$Component) {
	  _inherits(Motion, _React$Component);
	
	  _createClass(Motion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
	      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      onRest: _propTypes2['default'].func
	    },
	    enumerable: true
	  }]);
	
	  function Motion(props) {
	    var _this = this;
	
	    _classCallCheck(this, Motion);
	
	    _React$Component.call(this, props);
	    this.wasAnimating = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyle = null;
	
	    this.clearUnreadPropStyle = function (destStyle) {
	      var dirty = false;
	      var _state = _this.state;
	      var currentStyle = _state.currentStyle;
	      var currentVelocity = _state.currentVelocity;
	      var lastIdealStyle = _state.lastIdealStyle;
	      var lastIdealVelocity = _state.lastIdealVelocity;
	
	      for (var key in destStyle) {
	        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	          continue;
	        }
	
	        var styleValue = destStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyle = _extends({}, currentStyle);
	            currentVelocity = _extends({}, currentVelocity);
	            lastIdealStyle = _extends({}, lastIdealStyle);
	            lastIdealVelocity = _extends({}, lastIdealVelocity);
	          }
	
	          currentStyle[key] = styleValue;
	          currentVelocity[key] = 0;
	          lastIdealStyle[key] = styleValue;
	          lastIdealVelocity[key] = 0;
	        }
	      }
	
	      if (dirty) {
	        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // check if we need to animate in the first place
	        var propsStyle = _this.props.style;
	        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	          if (_this.wasAnimating && _this.props.onRest) {
	            _this.props.onRest();
	          }
	
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.wasAnimating = false;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        _this.wasAnimating = true;
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	
	        for (var key in propsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	            continue;
	          }
	
	          var styleValue = propsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	            for (var i = 0; i < framesToCatchUp; i++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyle: newCurrentStyle,
	          currentVelocity: newCurrentVelocity,
	          lastIdealStyle: newLastIdealStyle,
	          lastIdealVelocity: newLastIdealVelocity
	        });
	
	        _this.unreadPropStyle = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  Motion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;
	
	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  };
	
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	
	  Motion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }
	
	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  Motion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return Motion;
	})(_react2['default'].Component);
	
	exports['default'] = Motion;
	module.exports = exports['default'];
	
	// after checking for unreadPropStyle != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ },
/* 111 */
/***/ function(module, exports) {

	
	
	// currently used to initiate the velocity style object to 0
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapToZero;
	
	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports) {

	
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var reusedTuple = [0, 0];
	
	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}
	
	module.exports = exports["default"];
	// array reference around.

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ },
/* 115 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(117)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ },
/* 118 */
/***/ function(module, exports) {

	
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;
	
	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(111);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(112);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(113);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(114);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(116);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(118);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(59);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var StaggeredMotion = (function (_React$Component) {
	  _inherits(StaggeredMotion, _React$Component);
	
	  _createClass(StaggeredMotion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
	      styles: _propTypes2['default'].func.isRequired,
	      children: _propTypes2['default'].func.isRequired
	    },
	    enumerable: true
	  }]);
	
	  function StaggeredMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, StaggeredMotion);
	
	    _React$Component.call(this, props);
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _state = _this.state;
	      var currentStyles = _state.currentStyles;
	      var currentVelocities = _state.currentVelocities;
	      var lastIdealStyles = _state.lastIdealStyles;
	      var lastIdealVelocities = _state.lastIdealVelocities;
	
	      var someDirty = false;
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i];
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              someDirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	          }
	        }
	      }
	
	      if (someDirty) {
	        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        var destStyles = _this.props.styles(_this.state.lastIdealStyles);
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyles = [];
	        var newLastIdealVelocities = [];
	        var newCurrentStyles = [];
	        var newCurrentVelocities = [];
	
	        for (var i = 0; i < destStyles.length; i++) {
	          var destStyle = destStyles[i];
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in destStyle) {
	            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	              continue;
	            }
	
	            var styleValue = destStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  StaggeredMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	
	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  };
	
	  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  StaggeredMotion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return StaggeredMotion;
	})(_react2['default'].Component);
	
	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400
	
	// after checking for unreadPropStyles != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(111);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(112);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(113);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(121);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(114);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(116);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(118);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(59);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}
	
	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }
	
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }
	
	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// core key merging logic
	
	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key
	
	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });
	
	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;
	
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }
	
	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}
	
	var TransitionMotion = (function (_React$Component) {
	  _inherits(TransitionMotion, _React$Component);
	
	  _createClass(TransitionMotion, null, [{
	    key: 'propTypes',
	    value: {
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
	      })),
	      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
	      }))]).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      willEnter: _propTypes2['default'].func,
	      willLeave: _propTypes2['default'].func,
	      didLeave: _propTypes2['default'].func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    },
	    enumerable: true
	  }]);
	
	  function TransitionMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, TransitionMotion);
	
	    _React$Component.call(this, props);
	    this.unmounting = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	      var mergedPropsStyles = _mergeAndSync[0];
	      var currentStyles = _mergeAndSync[1];
	      var currentVelocities = _mergeAndSync[2];
	      var lastIdealStyles = _mergeAndSync[3];
	      var lastIdealVelocities = _mergeAndSync[4];
	
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i].style;
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	              mergedPropsStyles[i] = {
	                key: mergedPropsStyles[i].key,
	                data: mergedPropsStyles[i].data,
	                style: _extends({}, mergedPropsStyles[i].style)
	              };
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	            mergedPropsStyles[i].style[key] = styleValue;
	          }
	        }
	      }
	
	      // unlike the other 2 components, we can't detect staleness and optionally
	      // opt out of setState here. each style object's data might contain new
	      // stuff we're not/cannot compare
	      _this.setState({
	        currentStyles: currentStyles,
	        currentVelocities: currentVelocities,
	        mergedPropsStyles: mergedPropsStyles,
	        lastIdealStyles: lastIdealStyles,
	        lastIdealVelocities: lastIdealVelocities
	      });
	    };
	
	    this.startAnimationIfNecessary = function () {
	      if (_this.unmounting) {
	        return;
	      }
	
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // https://github.com/chenglou/react-motion/pull/420
	        // > if execution passes the conditional if (this.unmounting), then
	        // executes async defaultRaf and after that component unmounts and after
	        // that the callback of defaultRaf is called, then setState will be called
	        // on unmounted component.
	        if (_this.unmounting) {
	          return;
	        }
	
	        var propStyles = _this.props.styles;
	        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	        var newMergedPropsStyles = _mergeAndSync2[0];
	        var newCurrentStyles = _mergeAndSync2[1];
	        var newCurrentVelocities = _mergeAndSync2[2];
	        var newLastIdealStyles = _mergeAndSync2[3];
	        var newLastIdealVelocities = _mergeAndSync2[4];
	
	        for (var i = 0; i < newMergedPropsStyles.length; i++) {
	          var newMergedPropsStyle = newMergedPropsStyles[i].style;
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in newMergedPropsStyle) {
	            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	              continue;
	            }
	
	            var styleValue = newMergedPropsStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = newLastIdealStyles[i][key];
	              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities,
	          mergedPropsStyles: newMergedPropsStyles
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  TransitionMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;
	
	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;
	
	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });
	
	    var _mergeAndSync3 = mergeAndSync(
	    // Because this is an old-style createReactClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);
	
	    var mergedPropsStyles = _mergeAndSync3[0];
	    var currentStyles = _mergeAndSync3[1];
	    var currentVelocities = _mergeAndSync3[2];
	    var lastIdealStyles = _mergeAndSync3[3];
	    var lastIdealVelocities = _mergeAndSync3[4];
	    // oldLastIdealVelocities really
	
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  };
	
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	
	  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }
	
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  TransitionMotion.prototype.render = function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return TransitionMotion;
	})(_react2['default'].Component);
	
	exports['default'] = TransitionMotion;
	module.exports = exports['default'];
	
	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function
	
	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400

/***/ },
/* 121 */
/***/ function(module, exports) {

	
	
	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?
	
	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous
	
	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a
	
	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	
	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster
	
	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }
	
	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }
	
	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];
	
	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev
	
	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }
	
	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}
	
	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(123);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = reorderKeys;
	
	var hasWarned = false;
	
	function reorderKeys() {
	  if (false) {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports
	
	
	// module
	exports.push([module.id, "@keyframes hueShift {\n  0% {\n    -webkit-filter: hue-rotate(180deg); }\n  50% {\n    -webkit-filter: hue-rotate(0deg); }\n  100% {\n    -webkit-filter: hue-rotate(180deg); }\n  0% {\n    -moz-filter: hue-rotate(180deg); }\n  50% {\n    -moz-filter: hue-rotate(0deg); }\n  100% {\n    -moz-filter: hue-rotate(180deg); }\n  0% {\n    -ms-filter: hue-rotate(180deg); }\n  50% {\n    -ms-filter: hue-rotate(0deg); }\n  100% {\n    -ms-filter: hue-rotate(180deg); } }\n\n@media screen and (max-width: 499px) {\n  html {\n    font-size: 8px; } }\n\n@media screen and (max-width: 499px) and (max-height: 309px) {\n  html {\n    font-size: 4px; } }\n\n@media screen and (max-width: 899px) and (min-width: 500px) {\n  html {\n    font-size: 12px; } }\n\n@media screen and (max-width: 899px) and (min-width: 500px) and (max-height: 450px) {\n  html {\n    font-size: 8px; } }\n\n@media screen and (max-width: 1299px) and (min-width: 900px) {\n  html {\n    font-size: 15px; } }\n\n@media screen and (max-width: 1299px) and (min-width: 900px) and (max-height: 675px) {\n  html {\n    font-size: 10px; } }\n\n@media screen and (min-width: 1300px) {\n  html {\n    font-size: 16px; } }\n\n@media screen and (min-width: 1300px) and (max-height: 699px) {\n  html {\n    font-size: 12px; } }\n\n@media only screen and (min-device-width: 299px) and (max-device-width: 749px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n  html {\n    font-size: 24px; } }\n\n@media only screen and (min-device-width: 299px) and (max-device-width: 749px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {\n  html {\n    font-size: 10px; } }\n\nbody {\n  background: #2d2d2d;\n  -webkit-animation: hueShift 29s infinite linear;\n  animation: hueShift 29s infinite linear; }\n\na {\n  text-decoration: none; }\n\n.block {\n  right: 50%;\n  top: 85%;\n  font-size: 100%;\n  justify-content: space-between; }\n  @media screen and (max-width: 499px) {\n    .block {\n      top: 20px;\n      right: 20px;\n      height: 80%;\n      flex-direction: column; } }\n  @media screen and (max-width: 499px) and (max-height: 309px) {\n    .block {\n      top: 0px;\n      font-size: 200%; } }\n  @media screen and (max-width: 899px) and (min-width: 500px) {\n    .block {\n      top: 20px;\n      right: 40px;\n      height: 62%;\n      font-size: 162%;\n      flex-direction: column; } }\n  @media screen and (max-width: 899px) and (min-width: 500px) and (max-height: 450px) {\n    .block {\n      top: 10px; } }\n  @media screen and (max-width: 1299px) and (min-width: 900px) {\n    .block {\n      width: 339px;\n      transform: translate(50%, 0); } }\n  @media screen and (max-width: 1299px) and (min-width: 900px) and (max-height: 675px) {\n    .block {\n      width: auto;\n      top: 20px;\n      right: 40px;\n      height: 62%;\n      flex-direction: column;\n      transform: none;\n      font-size: 162%; } }\n  @media screen and (min-width: 1300px) {\n    .block {\n      width: 362px;\n      transform: translate(50%, 0); } }\n  @media screen and (min-width: 1300px) and (max-height: 699px) {\n    .block {\n      top: 40px;\n      right: 40px;\n      height: 62%;\n      width: auto;\n      transform: none;\n      font-size: 162%;\n      flex-direction: column; } }\n  @media only screen and (min-device-width: 299px) and (max-device-width: 749px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n    .block {\n      top: 80px;\n      width: 555px;\n      font-size: 150%;\n      transform: translate(50%, 0); } }\n\n.footer {\n  bottom: 1rem; }\n  @media screen and (max-width: 499px) {\n    .footer {\n      right: 20px;\n      bottom: 20px;\n      width: auto !important;\n      font-size: 200%; } }\n  @media screen and (max-width: 499px) and (max-height: 309px) {\n    .footer {\n      bottom: 10px; } }\n  @media screen and (max-width: 899px) and (min-width: 500px) {\n    .footer {\n      right: 40px;\n      bottom: 2rem;\n      width: auto !important;\n      font-size: 125%; } }\n  @media screen and (max-width: 899px) and (min-width: 500px) and (max-height: 450px) {\n    .footer {\n      font-size: 150%; } }\n  @media screen and (max-width: 1299px) and (min-width: 900px) and (max-height: 675px) {\n    .footer {\n      right: 40px;\n      width: auto !important;\n      font-size: 150%; } }\n  @media screen and (min-width: 1300px) and (max-height: 699px) {\n    .footer {\n      right: 40px;\n      width: auto !important;\n      font-size: 125%; } }\n  @media only screen and (min-device-width: 299px) and (max-device-width: 749px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n    .footer {\n      bottom: 2rem;\n      font-size: 120%;\n      letter-spacing: -0.02rem; } }\n", ""]);
	
	// exports


/***/ },
/* 127 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(130);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IconButton = function IconButton(_ref) {
	    var url = _ref.url,
	        name = _ref.name,
	        icon = _ref.icon,
	        style = _ref.style,
	        target = _ref.target;
	
	    var iconStyle = _extends({}, _styles.styles.iconStyle, style);
	    return _react2.default.createElement(
	        'a',
	        {
	            className: 'icon-button',
	            title: name,
	            href: url || null,
	            target: target || '_blank' },
	        _react2.default.createElement('i', { className: 'icon-' + icon, style: iconStyle })
	    );
	};
	
	exports.default = IconButton;

/***/ },
/* 130 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var styles = exports.styles = {
	    window: {
	        width: '100vw',
	        height: '100vh',
	        overflow: 'hidden'
	    },
	    main: {
	        display: 'inline-block',
	        fontFamily: '"Roboto", sans-serif'
	    },
	    banner: {
	        position: 'relative',
	        background: 'none',
	        textAlign: 'center',
	        color: 'rgba(255, 68, 62, 1)',
	        width: '100%',
	        height: '100%',
	        paddingTop: 0
	    },
	    block: {
	        display: 'flex',
	        overflow: 'hidden',
	        position: 'absolute'
	    },
	    cell: {
	        position: 'absolute',
	        left: '50%',
	        willChange: 'transform',
	        WebkitTransform: 'translate(-50%, -50%)',
	        MozTransform: 'translate(-50%, -50%)',
	        MsTransform: 'translate(-50%, -50%)',
	        OTransform: 'translate(-50%, -50%)',
	        transform: 'translate(-50%, -50%)'
	    },
	    title: {
	        display: 'flex',
	        textAlign: 'justify',
	        textTransform: 'uppercase',
	        touchAction: 'none'
	    },
	    text: {
	        margin: '0 auto',
	        display: 'inline-block',
	        whiteSpace: 'pre',
	        background: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',
	        WebkitTextFillColor: 'transparent',
	        MozTextFillColor: 'transparent',
	        MsTextFillColor: 'transparent',
	        OTextFillColor: 'transparent',
	        WebkitBackgroundClip: 'text',
	        MozBackgroundClip: 'text',
	        MsBackgroundClip: 'text',
	        OBackgroundClip: 'text',
	        backgroundClip: 'text'
	    },
	    socialButton: {
	        borderRadius: '9px',
	        boxShadow: '-1px 8px 13px -3px rgba(0, 0, 0, 0.2)'
	    },
	    footer: {
	        width: '100%',
	        // margin: '3rem auto',
	        fontWeight: '900',
	        position: 'absolute',
	        textTransform: 'uppercase',
	        textShadow: '-1px 2px 3px rgba(0, 0, 0, 0.62)',
	        color: 'rgba(255, 68, 62, 0.8)'
	    },
	    /* hoverSpinHOC */
	    content: {
	        display: 'inline-block'
	    },
	    /* IconButton */
	    iconStyle: {
	        width: '1.5em',
	        height: '1.5em',
	        lineHeight: '1.5em',
	        borderRadius: '50%',
	        color: 'rgb(255, 255, 255)',
	        background: 'rgba(45, 45, 45, 1)',
	        /* -~- styling & comments from the fontello.com package -~- */
	        fontFamily: 'fontello',
	        fontStyle: 'normal',
	        fontWeight: 'normal',
	        speak: 'none',
	        display: 'block',
	        textDecoration: 'inherit',
	        textAlign: 'center',
	        fontVariant: 'normal',
	        textTransform: 'none',
	        fontSize: '200%',
	        WebkitFontSmoothing: 'antialiased',
	        MozOsxFontSmoothing: 'grayscale'
	    }
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(109);
	
	var _styles = __webpack_require__(130);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//utility func for rgb values from floats
	var int = function int(float) {
	    return parseInt(float, 10);
	};
	
	// the hoverSpin HOC takes two props: initialColor & hoverColor
	// which are arrays of RGB values. If hoverColor is a nested array the
	// color is rendered as a gradient –– only the first two arrays are used
	var hoverSpin = function hoverSpin(Component) {
	    return function (_React$Component) {
	        _inherits(HoverSpin, _React$Component);
	
	        function HoverSpin(props) {
	            _classCallCheck(this, HoverSpin);
	
	            var _this = _possibleConstructorReturn(this, (HoverSpin.__proto__ || Object.getPrototypeOf(HoverSpin)).call(this, props));
	
	            var _props$initialColor = _slicedToArray(props.initialColor, 3),
	                red = _props$initialColor[0],
	                green = _props$initialColor[1],
	                blue = _props$initialColor[2];
	
	            var _props$color = _slicedToArray(props.color, 3),
	                iconRed = _props$color[0],
	                iconGreen = _props$color[1],
	                iconBlue = _props$color[2];
	
	            _this.state = {
	                red: red,
	                blue: blue,
	                green: green,
	                iconRed: iconRed,
	                iconGreen: iconGreen,
	                iconBlue: iconBlue,
	                degree: 0
	            };
	            _this.hover = _this.hover.bind(_this);
	            _this.leave = _this.leave.bind(_this);
	            return _this;
	        }
	
	        _createClass(HoverSpin, [{
	            key: 'hover',
	            value: function hover() {
	                var _props$initialColor2 = _slicedToArray(this.props.initialColor, 3),
	                    red = _props$initialColor2[0],
	                    green = _props$initialColor2[1],
	                    blue = _props$initialColor2[2];
	
	                var _props$color2 = _slicedToArray(this.props.color, 3),
	                    iconRed = _props$color2[0],
	                    iconGreen = _props$color2[1],
	                    iconBlue = _props$color2[2];
	
	                this.setState({
	                    red: (0, _reactMotion.spring)(iconRed),
	                    iconRed: (0, _reactMotion.spring)(red),
	                    green: (0, _reactMotion.spring)(iconGreen),
	                    iconGreen: (0, _reactMotion.spring)(green),
	                    blue: (0, _reactMotion.spring)(iconBlue),
	                    iconBlue: (0, _reactMotion.spring)(blue),
	                    degree: (0, _reactMotion.spring)(360, _reactMotion.presets.wobbly)
	                });
	            }
	        }, {
	            key: 'leave',
	            value: function leave() {
	                var _props$initialColor3 = _slicedToArray(this.props.initialColor, 3),
	                    red = _props$initialColor3[0],
	                    green = _props$initialColor3[1],
	                    blue = _props$initialColor3[2];
	
	                var _props$color3 = _slicedToArray(this.props.color, 3),
	                    iconRed = _props$color3[0],
	                    iconGreen = _props$color3[1],
	                    iconBlue = _props$color3[2];
	
	                this.setState({
	                    red: (0, _reactMotion.spring)(red),
	                    iconRed: (0, _reactMotion.spring)(iconRed),
	                    green: (0, _reactMotion.spring)(green),
	                    iconGreen: (0, _reactMotion.spring)(iconGreen),
	                    blue: (0, _reactMotion.spring)(blue),
	                    iconBlue: (0, _reactMotion.spring)(iconBlue),
	                    degree: (0, _reactMotion.spring)(0, _reactMotion.presets.wobbly)
	                });
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                var _this2 = this;
	
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'hoverSpinHOC', style: _styles.styles.content },
	                    _react2.default.createElement(
	                        _reactMotion.Motion,
	                        { style: this.state },
	                        function (_ref) {
	                            var red = _ref.red,
	                                blue = _ref.blue,
	                                green = _ref.green,
	                                degree = _ref.degree,
	                                iconRed = _ref.iconRed,
	                                iconBlue = _ref.iconBlue,
	                                iconGreen = _ref.iconGreen;
	                            return _react2.default.createElement(
	                                'div',
	                                {
	                                    onTouchMove: _this2.hover,
	                                    onTouchEnd: _this2.leave,
	                                    onMouseOver: _this2.hover,
	                                    onMouseOut: _this2.leave,
	                                    style: {
	                                        touchAction: 'none',
	                                        MozTransform: 'rotateY(' + degree + 'deg)',
	                                        WebkitTransform: 'rotateY(' + degree + 'deg)',
	                                        transform: 'rotateY(' + degree + 'deg)'
	                                    } },
	                                _react2.default.createElement(Component, _extends({}, _this2.props, {
	                                    style: _extends({}, _this2.props.style, {
	                                        background: 'rgb(' + int(red) + ', ' + int(green) + ', ' + int(blue) + ')',
	                                        color: 'rgb(' + int(iconRed) + ', ' + int(iconGreen) + ', ' + int(iconBlue) + ')',
	                                        border: '2px solid rgb(' + int(iconRed) + ', ' + int(iconGreen) + ', ' + int(iconBlue) + ')'
	                                    }) }))
	                            );
	                        }
	                    )
	                );
	            }
	        }]);
	
	        return HoverSpin;
	    }(_react2.default.Component);
	};
	
	exports.default = hoverSpin;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(8);
	
	var _reactReduxWebaudio = __webpack_require__(29);
	
	exports.default = (0, _redux.combineReducers)({ webAudioReducer: _reactReduxWebaudio.webAudioReducer });

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map