/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 207);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(167);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process==='undefined' || !process.env || process.env.NODE_ENV!=='production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev && parent) { prev = parent.firstElementChild; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["c" /* render */])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) { callback.call(component, renderContainer); }
	return component;
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["c" /* render */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		if (children == null) { return []; }
		return ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(
		element.nodeName || element.type,
		elementProps,
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["d" /* cloneElement */].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) { a.class = a.className; }
	Object.defineProperty(a, 'className', classNameDescriptor);
}


var classNameDescriptor = {
	configurable: true,
	get: function() { return this.class; },
	set: function(v) { this.class = v; }
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i=1, obj = (void 0); i<arguments.length; i++) {
		if ((obj = arguments$1[i])) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && component.base || component;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1 && (typeof c[0]==='string' || typeof c[0]==='function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["e" /* Component */].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["e" /* Component */](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130)


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const prefix = "muk-";
/* harmony export (immutable) */ __webpack_exports__["a"] = prefix;

const form = prefix + "form";
/* harmony export (immutable) */ __webpack_exports__["b"] = form;



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = routerWarning;
exports._resetWarned = _resetWarned;

var _warning = __webpack_require__(206);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function routerWarning(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
}

function _resetWarned() {
  warned = {};
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



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
  if (process.env.NODE_ENV !== 'production') {
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_dom_only_props__ = __webpack_require__(11);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




const defaultFieldProps = {
    group: {
        className: "",
        style: {},
        bigLabel: false,
    },
    input: {
        className: "",
        name: "",
        value: "",
        checked: false,
        onBlur: (value) => { },
        onChange: (value) => { },
        onDragStart: (value) => { },
        onDrop: (value) => { },
        onFocus: (value) => { },
        onKeyDown: (value) => { },
        onKeyUp: (value) => { },
        onClick: (value) => { },
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: "",
    },
    labels: {
        main: "",
        invalid: "",
        title: "",
        placeholder: "",
    },
};
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultFieldProps;

const BigLabel = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("h3")({
    paddingLeft: "10px",
    borderLeft: "5px solid hsla(43,44%,75%,.5)",
    fontSize: "1.2em",
    margin: "10px 0",
});
const LabelComponent = ({ children, name, bigLabel, className = "" }) => {
    if (children === "" || children === null) {
        return null;
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: `${name}__label ${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__label ${className}` }, bigLabel ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](BigLabel, null, children) : children));
};
const FieldLabel = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(LabelComponent)({
    display: "inline-block",
    height: "25px",
    " .muk-popup-hint": {
        verticalAlign: "middle",
    },
}, (props) => {
    const theme = props.theme;
    return {
        fontSize: theme.form_label_text_size,
        fontWeight: theme.form_label_text_weight,
    };
});
/* unused harmony export FieldLabel */

const FieldErrorComponent = (_a) => {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) &&
        props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `${props.className}` }, props.meta.error || props.labels.invalid));
    }
    else {
        return null;
    }
};
const FieldError = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(FieldErrorComponent)({
    color: "white",
    fontSize: "12px",
    zIndex: 1,
    padding: "1px 5px",
    position: "absolute",
    top: "100%",
}, (props) => {
    const theme = props.theme;
    return {
        left: theme.radius,
        background: theme.red,
    };
});
/* unused harmony export FieldError */

const FieldComponent = (props) => {
    const { meta, input, labels, group } = props, others = __rest(props, ["meta", "input", "labels", "group"]);
    const isInvalid = props.meta.invalid && (props.meta.dirty || props.meta.touched);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_dom_only_props__["a" /* default */])(group), { className: `${props.name ? props.name : ""}
                        ${props.className ? props.className : ""}
                        ${props.disabled ? props.name + `--disabled` : ""}
                        ${props.required ? props.name + `--required` : ""}
                        ${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__group
                        `, title: props.labels.title, style: props.style }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FieldError, Object.assign({}, props, { className: `${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__validation` })),
        (props.label || others.label || labels.main) &&
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FieldLabel, { name: props.name, bigLabel: group.bigLabel }, props.label ? props.label : (others.label ? others.label : labels.main)),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `\
                    ${isInvalid ? `${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__group--invalid` : ""}\
                ` }, props.children)));
};
FieldComponent.defaultProps = defaultFieldProps;
const Field = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(FieldComponent)({
    position: "relative",
}, (props) => {
    const theme = props.theme;
    let styles = {};
    if ((props.input && props.input.name)) {
        styles = {
            marginBottom: "30px",
            paddingRight: "10px",
        };
    }
    return Object.assign({}, styles, { "& .muk-form__group--invalid": {
            borderRadius: `${parseInt(theme.radius, 10) + 2}px`,
            border: `1px solid ${theme.red}`,
        } });
});
/* harmony export (immutable) */ __webpack_exports__["a"] = Field;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


const Div = (_a) => {
    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CssDiv, Object.assign({ className: className }, props), children);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Div;

const CssDiv = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});
const Span = (_a) => {
    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CssSpan, Object.assign({ className: className }, props), children);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Span;

const CssSpan = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("span")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});
const Ul = (_a) => {
    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CssUl, Object.assign({ className: className }, props), children);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Ul;

const CssUl = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("ul")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(121);
var convert = __webpack_require__(111);

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidChild(object) {
  return object == null || _react2.default.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */
function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2.default.Children.forEach(children, function (element) {
    if (_react2.default.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */
function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const htmlAttrs = [
    "accept", "acceptCharset", "accessKey", "action", "allowFullScreen", "allowTransparency", "alt",
    "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge",
    "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable",
    "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir",
    "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod",
    "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang",
    "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label",
    "lang", "list", "loop", "low", "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media",
    "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "nonce", "open",
    "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel",
    "required", "reversed", "role", "rowSpan", "rows", "sandbox", "scope", "scoped", "scrolling", "seamless",
    "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step",
    "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "width", "wmode", "wrap",
    "about", "datatype", "inlist", "prefix", "property", "resource", "typeof", "vocab",
    "autoCapitalize", "autoCorrect", "color", "itemProp", "itemScope", "itemType", "itemRef", "itemID",
    "security", "unselectable", "results", "autoSave", "onClick",
];
const domOnlyProps = (obj) => {
    const result = {};
    for (const type in obj) {
        if (htmlAttrs.indexOf(type) > -1) {
            result[type] = obj[type];
        }
        else if (type.indexOf("data") === 0 || type.indexOf("aria") === 0) {
            result[type] = obj[type];
        }
    }
    return result;
};
/* harmony default export */ __webpack_exports__["a"] = (domOnlyProps);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.extractPath = extractPath;
exports.parsePath = parsePath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
exports.falsy = falsy;

var _react = __webpack_require__(0);

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var arrayOf = _react.PropTypes.arrayOf;
var oneOfType = _react.PropTypes.oneOfType;
var element = _react.PropTypes.element;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;
function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = exports.history = shape({
  listen: func.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired
});

var component = exports.component = oneOfType([func, string]);
var components = exports.components = oneOfType([component, object]);
var route = exports.route = oneOfType([object, element]);
var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconEye__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reglendo_mergado_ui_icons_lib_icons_IconClose__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reglendo_mergado_ui_icons_lib_icons_IconEyeSlash__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Forms_Field__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Forms_Button__ = __webpack_require__(18);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};










class TextInput extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this._inputRef = null;
        this.name = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* prefix */] + "input-text";
        this.state = {
            passwordVisible: false,
        };
    }
    render() {
        const { type, meta, input } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const inputProps = this.props.input;
        if (type === "file") {
            delete inputProps.value;
        }
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Forms_Field__["a" /* Field */], Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { position: "relative" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledInput, Object.assign({}, props, inputProps, { placeholder: this.props.labels.placeholder, ref: "input", type: type === "search" || (type === "password" && this.state.passwordVisible)
                        ? "text" : props.type, "aria-invalid": isInvalid ? 1 : 0, className: `${this.name}__input \
                                ${__WEBPACK_IMPORTED_MODULE_7__config__["b" /* form */]}__input--text \
                                ${__WEBPACK_IMPORTED_MODULE_7__config__["b" /* form */]}__input--${type} \
                                ${inputProps.className} \
                                ` })),
                type === "password" && this.state.passwordVisible === false &&
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ButtonEye, { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconEye__["a" /* default */], null), type: "void", color: "nocolor", size: "tiny", onClick: () => this.setState({ passwordVisible: true }) }),
                type === "password" && this.state.passwordVisible === true &&
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ButtonEye, { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__reglendo_mergado_ui_icons_lib_icons_IconEyeSlash__["a" /* default */], null), type: "void", color: "nocolor", size: "tiny", onClick: () => this.setState({ passwordVisible: false }) }),
                type === "search" &&
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ButtonClose, { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__reglendo_mergado_ui_icons_lib_icons_IconClose__["a" /* default */], null), type: "void", color: "nocolor", size: "tiny", onClick: () => {
                            const input = this.refs.input;
                            this.props.onClear && this.props.onClear();
                            if (input) {
                                input.getDOMNode().value = "";
                            }
                            inputProps.value = "";
                            this.props.change ? this.props.change(inputProps.name, "") : true;
                        } }))));
    }
}
TextInput.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_8__components_Forms_Field__["b" /* defaultFieldProps */], { type: "text" });
const styles = {
    fontSize: "14px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    display: "block",
    textAlign: "left",
    outline: "none",
    padding: "0 10px",
    color: "#333",
    lineHeight: "40px",
    transition: "border-color 0.2s",
    willChange: "border-color",
    width: "100%",
};
/* harmony export (immutable) */ __webpack_exports__["b"] = styles;

const stylesProps = (props) => {
    const theme = props.theme;
    let type = {};
    if (props.type === "file") {
        type = {
            lineHeight: "initial",
            padding: "8px",
            height: "auto",
        };
    }
    let disabled = {};
    if (props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: __WEBPACK_IMPORTED_MODULE_3_color__(theme.grey).fade(0.5).string(),
        };
    }
    return Object.assign({}, type, disabled, { height: props.height ? props.height + "px" : "40px", border: props["aria-invalid"] ? theme.input_border_error : theme.input_border, borderRadius: theme.radius, ":active": {
            border: `${theme.input_border_active} !important`,
        }, ":focus": {
            border: `${theme.input_border_active} !important`,
        } });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = stylesProps;

const StyledInput = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("input")(styles, stylesProps);
const ButtonEye = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_9__components_Forms_Button__["a" /* default */])({
    right: "5px",
    bottom: "8px",
    position: "absolute",
});
const ButtonClose = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_9__components_Forms_Button__["a" /* default */])({
    right: "5px",
    bottom: "8px",
    position: "absolute",
});
/* harmony default export */ __webpack_exports__["a"] = (TextInput);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Indicates that navigation was caused by a call to history.push.
 */


exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = Object.create(null);

function compilePattern(pattern) {
  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 *  The function calls callback(error, matched) when finished.
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */
function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }

  var _compilePattern2 = compilePattern(pattern);

  var regexpSource = _compilePattern2.regexpSource;
  var paramNames = _compilePattern2.paramNames;
  var tokens = _compilePattern2.tokens;


  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  }

  // Special-case patterns like '*' for catch-all routes.
  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    }

    // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.
    remainingPathname = '/' + remainingPathname;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: match.slice(1).map(function (v) {
      return v && decodeURIComponent(v);
    })
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var match = matchPattern(pattern, pathname);
  if (!match) {
    return null;
  }

  var paramNames = match.paramNames;
  var paramValues = match.paramValues;

  var params = {};

  paramNames.forEach(function (paramName, index) {
    params[paramName] = paramValues[index];
  });

  return params;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */
function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern);

  var tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0;

  var token = void 0,
      paramName = void 0,
      paramValue = void 0;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenCount += 1;
    } else if (token === ')') {
      parenCount -= 1;
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

      if (paramValue != null) pathname += encodeURIComponent(paramValue);
    } else {
      pathname += token;
    }
  }

  return pathname.replace(/\/+/g, '/');
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button__ = __webpack_require__(88);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





class Button extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "button";
    }
    render() {
        const { meta, input, labels, group } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        if (props.type !== "submit") {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__button__["a" /* UniversalButton */], Object.assign({}, this.props, { name: this.name }));
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledField, Object.assign({ className: `${this.name}--${props.color}
                                        ${!labels.main ? this.name + `--notext` : ``}
                                        ${props.size ? this.name + `--` + props.size : ``}
                                        ${this.name}--${props.type}
                                        ${props.disabled ? this.name + `--disabled` : ``}
                ` }, this.props, { name: this.name, label: "", labels: Object.assign({}, labels, { main: "" }), style: Object.assign({ marginBottom: 0 }, group.style) }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__button__["a" /* UniversalButton */], Object.assign({}, this.props, { name: this.name }))));
    }
}
Button.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__["b" /* defaultFieldProps */], { type: "button", icon: null, color: "blue", disabled: false, size: "", secondary: false });
const StyledField = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__["a" /* Field */])({
    display: "inline-block",
    verticalAlign: "top",
});
/* harmony default export */ __webpack_exports__["a"] = (Button);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_mergado_ui_icons_lib_icons_IconCheck__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__ = __webpack_require__(6);






class Checkbox extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* prefix */] + "input-checkbox";
    }
    renderLabel() {
        const { input, labels } = this.props;
        const label = this.props.label ? this.props.label : labels.main;
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, { className: `${isInvalid ? `${__WEBPACK_IMPORTED_MODULE_4__config__["b" /* form */]}__group--invalid` : ""}` },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { position: "relative", display: "inline-block", verticalAlign: "middle" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Input, Object.assign({ checked: input.value }, input, { type: "checkbox", className: `${this.name}__item ${input.className}`, style: { display: "none" } })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledInput, { label: label, className: "muk-checkbox-input" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__reglendo_mergado_ui_icons_lib_icons_IconCheck__["a" /* default */], { size: 14, style: { position: "absolute" } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Layout__["c" /* Span */], { fontSize: "16px", fontWeight: "normal" },
                label && " ",
                label));
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledField, Object.assign({}, this.props, { style: Object.assign({ margin: 0, padding: 0 }, this.props.style), label: this.renderLabel() }));
    }
}
Checkbox.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["b" /* defaultFieldProps */], { halfway: false });
const Label = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("div")({
    cursor: "pointer",
}, (props) => {
    const theme = props.theme;
    return {
        ":hover .muk-checkbox-input": {
            borderColor: theme.blue,
        },
    };
});
const StyledField = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["a" /* Field */])({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
    " svg": {},
});
const Input = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("input")({
    ":checked + span + span.muk-icon--check": {
        display: "inline-block",
    },
}, (props) => {
    return {
        ":checked + span": {
            borderColor: `${props.theme.blue}`,
            background: `${props.theme.blue}`,
        },
    };
});
const StyledInput = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("span")({
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    transition: "border-color 0.2s",
    " + span.muk-icon--check": {
        display: "none",
        position: "absolute",
        left: "2px",
        top: "-5px",
    },
    " + span.muk-icon--check path": {
        fill: "white !important",
    },
}, (props) => {
    return {
        marginRight: props.label ? "5px" : "0px",
        borderRadius: `${props.theme.radius}`,
        border: `1px solid ${props.theme.decoration}`,
        ":hover": {
            borderColor: `${props.theme.blue}`,
        },
    };
});
/* harmony default export */ __webpack_exports__["a"] = (Checkbox);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    return "_" + Math.random().toString(36).substr(2, 9);
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(140);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(r, g, b) {
  return [
    _convert(r),
    _convert(g),
    _convert(b)
  ].join('');

  function _convert(num) {
    var hex = num.toString(16);
    return hex.length===1 ? '0'+hex : hex;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _queryString = __webpack_require__(171);

var _runTransitionHook = __webpack_require__(34);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = __webpack_require__(12);

var _deprecate = __webpack_require__(33);

var _deprecate2 = _interopRequireDefault(_deprecate);

var SEARCH_BASE_KEY = '$searchBase';

function defaultStringifyQuery(query) {
  return _queryString.stringify(query).replace(/%20/g, '+');
}

var defaultParseQueryString = _queryString.parse;

function isNestedObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
  }return false;
}

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
function useQueries(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);

    var stringifyQuery = options.stringifyQuery;
    var parseQueryString = options.parseQueryString;

    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    function addQuery(location) {
      if (location.query == null) {
        var search = location.search;

        location.query = parseQueryString(search.substring(1));
        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
      }

      // TODO: Instead of all the book-keeping here, this should just strip the
      // stringified query from the search.

      return location;
    }

    function appendQuery(location, query) {
      var _extends2;

      var searchBaseSpec = location[SEARCH_BASE_KEY];
      var queryString = query ? stringifyQuery(query) : '';
      if (!searchBaseSpec && !queryString) {
        return location;
      }

      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var searchBase = undefined;
      if (searchBaseSpec && location.search === searchBaseSpec.search) {
        searchBase = searchBaseSpec.searchBase;
      } else {
        searchBase = location.search || '';
      }

      var search = searchBase;
      if (queryString) {
        search += (search ? '&' : '?') + queryString;
      }

      return _extends({}, location, (_extends2 = {
        search: search
      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
    }

    // Override all read methods with query-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addQuery(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addQuery(location));
      });
    }

    // Override all write methods with query-aware versions.
    function push(location) {
      history.push(appendQuery(location, location.query));
    }

    function replace(location) {
      history.replace(appendQuery(location, location.query));
    }

    function createPath(location, query) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

      return history.createPath(appendQuery(location, query || location.query));
    }

    function createHref(location, query) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

      return history.createHref(appendQuery(location, query || location.query));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
      if (location.query) {
        fullLocation.query = location.query;
      }
      return addQuery(fullLocation);
    }

    // deprecated
    function pushState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path, { query: query }));
    }

    // deprecated
    function replaceState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path, { query: query }));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useQueries;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(65),
    now = __webpack_require__(165),
    toNumber = __webpack_require__(166);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _deprecateObjectProperties = __webpack_require__(27);

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _getRouteParams = __webpack_require__(194);

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _RouteUtils = __webpack_require__(10);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var array = _React$PropTypes.array;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */

var RouterContext = _react2.default.createClass({
  displayName: 'RouterContext',


  propTypes: {
    history: object,
    router: object.isRequired,
    location: object.isRequired,
    routes: array.isRequired,
    params: object.isRequired,
    components: array.isRequired,
    createElement: func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2.default.createElement
    };
  },


  childContextTypes: {
    history: object,
    location: object.isRequired,
    router: object.isRequired
  },

  getChildContext: function getChildContext() {
    var _props = this.props;
    var router = _props.router;
    var history = _props.history;
    var location = _props.location;

    if (!router) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

      router = _extends({}, history, {
        setRouteLeaveHook: history.listenBeforeLeavingRoute
      });
      delete router.listenBeforeLeavingRoute;
    }

    if (process.env.NODE_ENV !== 'production') {
      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
    }

    return { history: history, location: location, router: router };
  },
  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },
  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var history = _props2.history;
    var location = _props2.location;
    var routes = _props2.routes;
    var params = _props2.params;
    var components = _props2.components;

    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = (0, _getRouteParams2.default)(route, params);
        var props = {
          history: history,
          location: location,
          params: params,
          route: route,
          routeParams: routeParams,
          routes: routes
        };

        if ((0, _RouteUtils.isReactChildren)(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
          }
        }

        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
          var elements = {};

          for (var key in components) {
            if (Object.prototype.hasOwnProperty.call(components, key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

    return element;
  }
});

exports.default = RouterContext;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.canUseMembrane = undefined;

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseMembrane = exports.canUseMembrane = false;

// No-op by default.
var deprecateObjectProperties = function deprecateObjectProperties(object) {
  return object;
};

if (process.env.NODE_ENV !== 'production') {
  try {
    if (Object.defineProperty({}, 'x', {
      get: function get() {
        return true;
      }
    }).x) {
      exports.canUseMembrane = canUseMembrane = true;
    }
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

  if (canUseMembrane) {
    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
      // Wrap the deprecated object in a membrane to warn on property access.
      var membrane = {};

      var _loop = function _loop(prop) {
        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
          return 'continue';
        }

        if (typeof object[prop] === 'function') {
          // Can't use fat arrow here because of use of arguments below.
          membrane[prop] = function () {
            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
            return object[prop].apply(object, arguments);
          };
          return 'continue';
        }

        // These properties are non-enumerable to prevent React dev tools from
        // seeing them and causing spurious warnings when accessing them. In
        // principle this could be done with a proxy, but support for the
        // ownKeys trap on proxies is not universal, even among browsers that
        // otherwise support proxies.
        Object.defineProperty(membrane, prop, {
          get: function get() {
            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
            return object[prop];
          }
        });
      };

      for (var prop in object) {
        var _ret = _loop(prop);

        if (_ret === 'continue') continue;
      }

      return membrane;
    };
  }
}

exports.default = deprecateObjectProperties;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(3);




class DataCell extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* prefix */] + "datagrid__cell";
    }
    render() {
        const { style, type, addClass, onClick, className } = this.props;
        return (type === "header")
            ?
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Th, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(this.props), { className: `${this.name} ${className} ${this.name}--header ${addClass}`, style: style, onClick: onClick }), this.props.children)
            :
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Td, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(this.props), { className: `${this.name} ${addClass} ${className} `, style: style, onClick: onClick }), this.props.children);
    }
}
DataCell.defaultProps = {
    addClass: "",
    style: null,
    type: "cell",
    className: "",
};
const Cell = {
    textAlign: "left",
    fontWeight: "normal",
    "& .muk-form__group": {
        margin: 0,
    },
    "& .muk-form__label": {
        padding: 0,
    },
    "& .muk-button__item": {
        padding: "0 5px",
        verticalAlign: "middle",
        height: "auto",
        lineHeight: "initial",
    },
};
const Td = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("td")(Cell, (props) => {
    return {
        padding: props.theme.table_cell_padding,
        borderBottom: props.theme.table_border_horizontal,
        borderRight: props.theme.table_border_vertical,
        fontSize: props.theme.table_cell_text_size,
        " a, a:visited, a:hover, a:active": {
            color: props.theme.text,
        }
    };
});
const Th = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("th")(Object.assign({}, Cell, { borderColor: "transparent", whiteSpace: "nowrap", color: "#fff", fontWeight: "bold" }), (props) => {
    return {
        padding: props.theme.table_cell_padding,
        borderBottom: props.theme.table_border_horizontal,
        fontSize: props.theme.table_header_text_size,
        textTransform: props.theme.table_header_text_transform,
    };
});
/* harmony default export */ __webpack_exports__["a"] = (DataCell);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
module.exports = function(h, s, v) {
  var s = s/100, v = v/100;
  var rgb = [];

  var c = v * s;
  var hh = h/60;
  var x = c * (1 - Math.abs(hh%2-1));
  var m = v - c;

  switch(parseInt(hh, 10)) {
    case 0:
      rgb = [c, x, 0];
    break;

    case 1:
      rgb = [x, c, 0];
    break;

    case 2:
      rgb = [0, c, x];
    break;

    case 3:
      rgb = [0, x, c];
    break;

    case 4:
      rgb = [x, 0, c];
    break;

    case 5:
      rgb = [c, 0, x];
    break;
  }

  return {
    r: Math.round(255*(rgb[0]+m)),
    g: Math.round(255*(rgb[1]+m)),
    b: Math.round(255*(rgb[2]+m))
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



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

if (process.env.NODE_ENV !== 'production') {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
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
  module.exports = __webpack_require__(170)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(169)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;
function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = void 0;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(Array.prototype.slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];

  if (length === 0) return callback(null, values);

  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;

      isDone = ++doneCount === length;

      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

var _react = __webpack_require__(0);

var _deprecateObjectProperties = __webpack_require__(27);

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _InternalPropTypes = __webpack_require__(13);

var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;
var routerShape = exports.routerShape = shape({
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  setRouteLeaveHook: func.isRequired,
  isActive: func.isRequired
});

var locationShape = exports.locationShape = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  state: object,
  action: string.isRequired,
  key: string
});

// Deprecated stuff below:

var falsy = exports.falsy = InternalPropTypes.falsy;
var history = exports.history = InternalPropTypes.history;
var location = exports.location = locationShape;
var component = exports.component = InternalPropTypes.component;
var components = exports.components = InternalPropTypes.components;
var route = exports.route = InternalPropTypes.route;
var routes = exports.routes = InternalPropTypes.routes;
var router = exports.router = routerShape;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var deprecatePropType = function deprecatePropType(propType, message) {
      return function () {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
        return propType.apply(undefined, arguments);
      };
    };

    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
    };

    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
    };

    exports.falsy = falsy = deprecateInternalPropType(falsy);
    exports.history = history = deprecateInternalPropType(history);
    exports.component = component = deprecateInternalPropType(component);
    exports.components = components = deprecateInternalPropType(components);
    exports.route = route = deprecateInternalPropType(route);
    exports.routes = routes = deprecateInternalPropType(routes);

    exports.location = location = deprecateRenamedPropType(location, 'location');
    exports.router = router = deprecateRenamedPropType(router, 'router');
  })();
}

var defaultExport = {
  falsy: falsy,
  history: history,
  location: location,
  component: component,
  components: components,
  route: route,
  // For some reason, routes was never here.
  router: router
};

if (process.env.NODE_ENV !== 'production') {
  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
}

exports.default = defaultExport;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createTransitionManager;

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _computeChangedRoutes2 = __webpack_require__(192);

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = __webpack_require__(189);

var _isActive2 = __webpack_require__(196);

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = __webpack_require__(193);

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = __webpack_require__(198);

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasAnyProperties(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
  }return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)
  function isActive(location) {
    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    var indexOnly = void 0;
    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
      indexOnly = deprecatedIndexOnly || false;
    } else {
      location = history.createLocation(location);
      indexOnly = indexOnlyOrDeprecatedQuery;
    }

    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
  }

  var partialNextState = void 0;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, { location: location }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
    var changeRoutes = _computeChangedRoutes.changeRoutes;
    var enterRoutes = _computeChangedRoutes.enterRoutes;


    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

    // Tear down confirmation hooks for left routes
    leaveRoutes.filter(function (route) {
      return enterRoutes.indexOf(route) === -1;
    }).forEach(removeListenBeforeHooksForRoute);

    // change and enter hooks are run in series
    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
    });

    function finishEnterHooks(error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      // TODO: Fetch components after state is updated.
      (0, _getComponents2.default)(nextState, function (error, components) {
        if (error) {
          callback(error);
        } else {
          // TODO: Make match a pure function and have some other API
          // for "match and update state".
          callback(null, null, state = _extends({}, nextState, { components: components }));
        }
      });
    }

    function handleErrorOrRedirect(error, redirectInfo) {
      if (error) callback(error);else callback(null, redirectInfo);
    }
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = Object.create(null);

  function getRouteHooksForRoutes(routes) {
    return routes.reduce(function (hooks, route) {
      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
      return hooks;
    }, []);
  }

  function transitionHook(location, callback) {
    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      }

      // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.
      partialNextState = _extends({}, nextState, { location: location });

      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

      var result = void 0;
      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }

  /* istanbul ignore next: untestable with Karma */
  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);

      var message = void 0;
      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = void 0,
      unlistenBeforeUnload = void 0;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route, false);
    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }

  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and can return either a prompt message (string) to show the user,
   * to make sure they want to leave the page; or `false`, to prevent the transition.
   * Any other return value will have no effect.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */
  function listenBeforeLeavingRoute(route, hook) {
    // TODO: Warn if they register for a route that isn't currently
    // active. They're probably doing something wrong, like re-creating
    // route objects on every location change.
    var routeID = getRouteID(route);
    var hooks = RouteHooks[routeID];

    if (!hooks) {
      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

      RouteHooks[routeID] = [hook];

      if (thereWereNoRouteHooks) {
        // setup transition & beforeunload hooks
        unlistenBefore = history.listenBefore(transitionHook);

        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
      }
    } else {
      if (hooks.indexOf(hook) === -1) {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

        hooks.push(hook);
      }
    }

    return function () {
      var hooks = RouteHooks[routeID];

      if (hooks) {
        var newHooks = hooks.filter(function (item) {
          return item !== hook;
        });

        if (newHooks.length === 0) {
          removeListenBeforeHooksForRoute(route);
        } else {
          RouteHooks[routeID] = newHooks;
        }
      }
    };
  }

  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */
  function listen(listener) {
    // TODO: Only use a single history listener. Otherwise we'll
    // end up with multiple concurrent calls to match.
    return history.listen(function (location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.replace(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
          }
        });
      }
    });
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}

//export default useRoutes

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_TextInput__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Checkbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_dom_only_props__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_Grid__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_GridCell__ = __webpack_require__(43);









class DataTable extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* prefix */] + "datagrid";
        this.state = {
            selectedAll: false,
            selectedRows: [],
        };
    }
    handleSelectAll() {
        if (this.state.selectedAll) {
            this.setState({
                selectedRows: [],
                selectedAll: false,
            });
        }
        else {
            const selected = [];
            for (const checkbox of document.querySelectorAll(".bulk-action-item")) {
                const item = checkbox;
                selected.push(parseInt(item.getAttribute("data-id"), 10));
            }
            this.setState({
                selectedRows: selected,
                selectedAll: true,
            });
        }
    }
    handleSelectRow(id) {
        const selected = this.state.selectedRows;
        const index = selected.indexOf(id);
        index === -1 ? selected.push(id) : selected.splice(index, 1);
        this.setState({
            selectedRows: selected,
        });
    }
    renderChildren(children) {
        return children.map(obj => {
            return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](obj, Object.assign({}, obj.props, { actions: this.props.bulkActions, labels: this.props.labels, selectedAll: this.state.selectedAll, handleSelectAll: this.handleSelectAll.bind(this), handleSelectRow: this.handleSelectRow.bind(this), selectedRows: this.state.selectedRows }));
        });
    }
    renderFiltersBar() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { marginBottom: "10px", verticalAlign: "middle", className: `${this.name}__filters_bar` },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_Layout_Grid__["a" /* default */], { cols: "auto auto" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Layout_GridCell__["a" /* default */], null, this.renderFilters()),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Layout_GridCell__["a" /* default */], null, this.renderButtons()))));
    }
    renderButtons() {
        return this.props.buttons.map(obj => {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { textAlign: "right", verticalAlign: "bottom" } }, obj);
        });
    }
    renderFilters() {
        return this.props.filters.map(obj => {
            switch (obj.type) {
                case "text":
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TextFilter, { type: "search", onClear: () => obj.action({ currentTarget: { value: "" } }), input: { onKeyUp: (evt) => { obj.action(evt); }, value: obj.value }, labels: { placeholder: obj.label }, key: "text" }));
                case "checkbox":
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CheckboxFilter, { input: { onChange: (evt) => { obj.action(evt); }, value: obj.value }, labels: { main: obj.label }, key: "checkbox" }));
            }
        });
    }
    render() {
        const { addClass, className, style } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `${this.name}` },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { whiteSpace: "nowrap" } }, this.props.filters.length > 0 && this.renderFiltersBar()),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Table, Object.assign({ className: `${this.name}__table ${addClass} ${className}`, style: style }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_dom_only_props__["a" /* default */])(this.props)), this.props.children && this.renderChildren(this.props.children))));
    }
}
DataTable.defaultProps = {
    bulkActions: [],
    filters: [],
    buttons: [],
    style: {},
    addClass: "",
    className: "",
    labels: {
        actionsBar: "",
    },
};
const Table = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("table")({
    width: "100%",
    " .sortable-ghost": {
        opacity: 0.1,
    },
}, (props) => {
    return {
        borderLeft: props.theme.table_border_vertical,
    };
});
const TextFilter = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_4__components_Forms_TextInput__["a" /* default */])({
    paddingRight: "20px",
    display: "inline-block",
    width: "70%",
});
const CheckboxFilter = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_5__components_Forms_Checkbox__["a" /* default */])({
    whiteSpace: "nowrap",
    display: "inline-block",
});
/* harmony default export */ __webpack_exports__["a"] = (DataTable);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Forms_Field__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input__ = __webpack_require__(94);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




class Radio extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* prefix */] + "input-radio";
    }
    renderInputs() {
        const { input, meta, labels, bigButtons, hideInput } = this.props;
        return this.props.items.map((obj) => {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__input__["a" /* default */], { name: this.name, label: obj.label, value: obj.value, key: obj.value, checked: obj.value == input.value, onChange: input.onChange, bigButtons: bigButtons, hideInput: hideInput }));
        });
    }
    render() {
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Forms_Field__["a" /* Field */], Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "table", width: this.props.bigButtons ? "100%" : "auto", tableLayout: "fixed" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "table-row" } }, this.renderInputs()))));
    }
}
Radio.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_2__components_Forms_Field__["b" /* defaultFieldProps */], { bigButtons: false, items: [] });
/* harmony default export */ __webpack_exports__["a"] = (Radio);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);


const Grid = (props) => {
    const { children } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](GridStyle, Object.assign({}, props), children));
};
const GridStyle = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({}, (props) => {
    return {
        display: props.inline ? "inline-grid" : "grid",
        gridTemplateColumns: props.cols ? props.cols : "auto",
        gridTemplateRows: props.rows ? props.rows : "auto",
        gridGap: `${props.rowgap ? props.rowgap : props.gap} ${props.colgap ? props.colgap : props.gap}`,
        justifyItems: props.align ? props.align : "stretch",
        alignItems: props.valign ? props.valign : "stretch",
        gridAutoFlow: props.autoFlow ? props.autoFlow : "row",
    };
});
/* harmony default export */ __webpack_exports__["a"] = (Grid);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);


const GridCell = (props) => {
    const { children } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](GridCellStyle, Object.assign({}, props), children));
};
const GridCellStyle = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({}, (props) => {
    return {
        gridColumn: props.col ? props.col : "auto auto",
        gridRow: props.row ? props.row : "auto auto",
        gridArea: props.name ? props.name : null,
        justifySelf: props.align ? props.align : "stretch",
        alignSelf: props.valign ? props.valign : "stretch",
    };
});
/* harmony default export */ __webpack_exports__["a"] = (GridCell);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__ = __webpack_require__(11);



const Header = (props) => {
    const { children, type } = props;
    if (children === "" || children === null) {
        return null;
    }
    if (type === "1") {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](H1, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props)), children));
    }
    if (type === "2") {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](H2, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props)), children));
    }
    if (type === "3") {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](H3, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props)), children));
    }
    if (type === "4") {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](H4, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props)), children));
    }
    if (type === "5") {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](H5, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props)), children));
    }
};
const H1 = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("h1")({
    fontSize: "28px",
    lineHeight: "40px",
    margin: "40px 0 0 0",
    fontWeight: 700,
});
const H2 = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("h2")({
    fontSize: "24px",
    lineHeight: "32px",
    margin: "32px 0 0 0",
    fontWeight: 700,
});
const H3 = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("h3")({
    fontSize: "20px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 700,
});
const H4 = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("h4")({
    fontSize: "17px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 700,
});
const H5 = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("h5")({
    fontSize: "14px",
    lineHeight: "20px",
    margin: "20px 0 0 0",
    fontWeight: 700,
});
/* harmony default export */ __webpack_exports__["a"] = (Header);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);



class LittleStatus extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "little_status";
    }
    render() {
        const className = `${this.name} ${this.name}--${this.props.type}`;
        const classIndikator = `${this.name}__indikator tooltip`;
        const classText = `${this.name}__text`;
        const text = this.props.text ?
            (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Text, { className: classText },
                " ",
                this.props.text))
            :
                this.props.children;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Wrapper, { className: className, style: this.props.style },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Indikator, { type: this.props.type, className: classIndikator, title: this.props.title }),
            text));
    }
}
LittleStatus.defaultProps = {
    title: "",
    type: "success",
    text: "",
    style: {},
};
const Wrapper = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("span")({
    verticalAlign: "middle",
});
const Indikator = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("span")({
    width: "8px",
    height: "8px",
    borderRadius: "100%",
    borderBottom: "none",
    verticalAlign: "middle",
    display: "inline-block",
    margin: "0 2px",
}, (props) => {
    return {
        boxShadow: props.type === "info" ? "0px 0px 1px 0px rgba(0,0,0,0.5)" : "none",
        backgroundColor: props.theme[props.type],
    };
});
const Text = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("span")({
    verticalAlign: "middle",
    "a:hover": {
        textDecoration: "none",
    },
});
/* harmony default export */ __webpack_exports__["a"] = (LittleStatus);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_unique_id__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Forms_Button__ = __webpack_require__(18);





class Toast extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "toast";
        this.state = {
            visible: true,
            paused: false,
            secondsLeft: props.timeout / 1000,
        };
    }
    componentDidMount() {
        if (this.props.isPaused() !== true && this.props.timeout > 0) {
            this.countdown = setInterval(this.timer.bind(this), 1000);
        }
    }
    timer() {
        const { secondsLeft } = this.state;
        if (secondsLeft <= 1) {
            this.removeToast();
            clearInterval(this.countdown);
        }
        else {
            if (secondsLeft <= 2) {
                this.hideToast();
            }
            this.setState({
                secondsLeft: secondsLeft > 0 ? secondsLeft - 1 : secondsLeft,
            });
        }
    }
    hideToast() {
        this.setState({
            visible: false,
            paused: true,
            secondsLeft: 1,
        });
    }
    componentWillUnmount() {
        clearInterval(this.countdown);
    }
    removeToast() {
        this.refs.wrapper.style.display = "none";
    }
    onClose(evt) {
        evt.preventDefault();
        if (this.props.onClose(this.props.id) === true) {
            this.hideToast();
            this.countdown = setInterval(this.timer.bind(this), 500);
        }
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: "wrapper" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Wrapper, { type: this.props.type, style: this.props.style, hidden: !this.state.visible, className: `${this.name}__wrapper ${this.state.visible ? "" : this.name + "--hidden"}` },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Icon, { className: `${this.name}__icon` }, this.props.icon),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Content, { className: `${this.name}__content` }, this.props.text ?
                    this.props.text.replace("%seconds%", this.state.secondsLeft + "s")
                    :
                        this.props.children),
                this.props.closeable &&
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CloseButton, { type: this.props.type },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Forms_Button__["a" /* default */], { className: `${this.name}__button`, color: "nocolor", size: "tiny", type: "void", toastType: this.props.type, onClick: evt => this.onClose(evt) }, "\u00D7")))));
    }
}
Toast.defaultProps = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_unique_id__["a" /* default */])(),
    text: "",
    type: "info",
    icon: null,
    isPaused: () => { return false; },
    onClose: () => { return true; },
    timeout: 0,
    closeable: true,
    style: {},
};
const Wrapper = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    width: "100%",
    display: "table",
    margin: "10px 0",
    boxShadow: "rgba(0, 0, 0, 0.5) 1px 1px 4px 0px",
    transition: "opacity 0.5s",
    transform: "translate3d(0,0,0)",
    willChange: "opacity",
    border: "0px solid transparent",
}, (props) => {
    const type = props.type ? props.type : "info";
    return {
        borderRadius: props.theme.radius,
        opacity: props.hidden ? 0 : 1,
        background: props.theme[type],
        color: (type === "info" || type === "inactive" || type === "message")
            ? "#333" : "white",
    };
});
const Icon = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    width: "20px",
    padding: "0 10px",
    display: "table-cell",
    verticalAlign: "middle",
});
const Content = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    padding: "20px 0px",
    boxSizing: "border-box",
    fontSize: "16px",
    textAlign: "left",
    display: "table-cell",
    verticalAlign: "middle",
});
const CloseButton = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    padding: "5px 6px 0 10px",
    width: "20px",
    textAlign: "right",
    verticalAlign: "top",
    display: "table-cell",
    opacity: 0.8,
}, (props) => {
    const type = props.type ? props.type : "info";
    return {
        "& .muk-button__item": {
            fontSize: "18px",
            color: (type === "info" || type === "inactive" || type === "message")
                ? "#333 !important" : "white !important",
        },
    };
});
/* harmony default export */ __webpack_exports__["a"] = (Toast);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function blacklist (src) {
  var copy = {}
  var filter = arguments[1]

  if (typeof filter === 'string') {
    filter = {}
    for (var i = 1; i < arguments.length; i++) {
      filter[arguments[i]] = true
    }
  }

  for (var key in src) {
    // blacklist?
    if (filter[key]) continue

    copy[key] = src[key]
  }

  return copy
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(52);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
module.exports = function(r, g, b) {
  var h, s, v;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var delta = max - min;

  // hue
  if(delta === 0) {
    h = 0;
  } else if(r === max) {
    h = ((g-b)/delta) % 6;
  } else if(g === max) {
    h = (b-r)/delta + 2;
  } else if(b === max) {
    h = (r-g)/delta + 4;
  }

  h = Math.round(h*60);
  if(h < 0) h += 360;

  // saturation
  s = Math.round((max === 0 ? 0 : (delta/max)) * 100);

  // value
  v = Math.round(max/255*100);

  return {
    h: h,
    s: s,
    v: v
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function(r, g, b, a) {
  return 'rgba('+
    [r, g, b, a/100].join(',')+')';
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelCaseProperty;
var dashRegex = /-([a-z])/g;
var msRegex = /^Ms/g;

function camelCaseProperty(property) {
  return property.replace(dashRegex, function (match) {
    return match[1].toUpperCase();
  }).replace(msRegex, 'ms');
}
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cssifyDeclaration;

var _hyphenateProperty = __webpack_require__(21);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cssifyDeclaration(property, value) {
  return (0, _hyphenateProperty2.default)(property) + ':' + value;
}
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unprefixProperty;
var prefixRegex = /^(ms|Webkit|Moz|O)/;

function unprefixProperty(property) {
  var propertyWithoutPrefix = property.replace(prefixRegex, '');
  return propertyWithoutPrefix.charAt(0).toLowerCase() + propertyWithoutPrefix.slice(1);
}
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(30);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */


exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    if (state == null) {
      window.sessionStorage.removeItem(createKey(key));
    } else {
      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
    }
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = __webpack_require__(23);

var _DOMUtils = __webpack_require__(32);

var _createHistory = __webpack_require__(60);

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = __webpack_require__(16);

var _PathUtils = __webpack_require__(12);

var _ExecutionEnvironment = __webpack_require__(23);

var _DOMUtils = __webpack_require__(32);

var _DOMStateStorage = __webpack_require__(57);

var _createDOMHistory = __webpack_require__(58);

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function ensureSlash() {
  var path = _DOMUtils.getHashPath();

  if (isAbsolutePath(path)) return true;

  _DOMUtils.replaceHashPath('/' + path);

  return false;
}

function addQueryStringValueToPath(path, key, value) {
  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
}

function stripQueryStringValueFromPath(path, key) {
  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
}

function getQueryStringValueFromPath(path, key) {
  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
  return match && match[1];
}

var DefaultQueryKey = '_k';

function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

  var queryKey = options.queryKey;

  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

  function getCurrentLocation() {
    var path = _DOMUtils.getHashPath();

    var key = undefined,
        state = undefined;
    if (queryKey) {
      key = getQueryStringValueFromPath(path, queryKey);
      path = stripQueryStringValueFromPath(path, queryKey);

      if (key) {
        state = _DOMStateStorage.readState(key);
      } else {
        state = null;
        key = history.createKey();
        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
      }
    } else {
      key = state = null;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startHashChangeListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function hashChangeListener() {
      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

      transitionTo(getCurrentLocation());
    }

    ensureSlash();
    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    var path = (basename || '') + pathname + search;

    if (queryKey) {
      path = addQueryStringValueToPath(path, queryKey, key);
      _DOMStateStorage.saveState(key, state);
    } else {
      // Drop key and state.
      location.key = location.state = null;
    }

    var currentHash = _DOMUtils.getHashPath();

    if (action === _Actions.PUSH) {
      if (currentHash !== path) {
        window.location.hash = path;
      } else {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
      }
    } else if (currentHash !== path) {
      // REPLACE
      _DOMUtils.replaceHashPath(path);
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopHashChangeListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function push(location) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.push(location);
  }

  function replace(location) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replace(location);
  }

  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

  function go(n) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

    history.go(n);
  }

  function createHref(path) {
    return '#' + history.createHref(path);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopHashChangeListener();
  }

  // deprecated
  function pushState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.pushState(state, path);
  }

  // deprecated
  function replaceState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replaceState(state, path);
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    push: push,
    replace: replace,
    go: go,
    createHref: createHref,

    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
    pushState: pushState, // deprecated - warning is in createHistory
    replaceState: replaceState // deprecated - warning is in createHistory
  });
}

exports['default'] = createHashHistory;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _deepEqual = __webpack_require__(132);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _PathUtils = __webpack_require__(12);

var _AsyncUtils = __webpack_require__(135);

var _Actions = __webpack_require__(16);

var _createLocation2 = __webpack_require__(137);

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = __webpack_require__(34);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = __webpack_require__(33);

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var getUserConfirmation = options.getUserConfirmation;
  var keyLength = options.keyLength;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _ExecutionEnvironment = __webpack_require__(23);

var _PathUtils = __webpack_require__(12);

var _runTransitionHook = __webpack_require__(34);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = __webpack_require__(33);

var _deprecate2 = _interopRequireDefault(_deprecate);

function useBasename(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);

    var basename = options.basename;

    var checkedBaseHref = false;

    function checkBaseHref() {
      if (checkedBaseHref) {
        return;
      }

      // Automatically use the value of <base href> in HTML
      // documents as basename if it's not explicitly given.
      if (basename == null && _ExecutionEnvironment.canUseDOM) {
        var base = document.getElementsByTagName('base')[0];
        var baseHref = base && base.getAttribute('href');

        if (baseHref != null) {
          basename = baseHref;

          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
        }
      }

      checkedBaseHref = true;
    }

    function addBasename(location) {
      checkBaseHref();

      if (basename && location.basename == null) {
        if (location.pathname.indexOf(basename) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    }

    function prependBasename(location) {
      checkBaseHref();

      if (!basename) return location;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var pname = location.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, location, {
        pathname: pathname
      });
    }

    // Override all read methods with basename-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addBasename(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addBasename(location));
      });
    }

    // Override all write methods with basename-aware versions.
    function push(location) {
      history.push(prependBasename(location));
    }

    function replace(location) {
      history.replace(prependBasename(location));
    }

    function createPath(location) {
      return history.createPath(prependBasename(location));
    }

    function createHref(location) {
      return history.createHref(prependBasename(location));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    }

    // deprecated
    function pushState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path));
    }

    // deprecated
    function replaceState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useBasename;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(64);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(160);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


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


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _PropTypes = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _React$PropTypes = _react2.default.PropTypes;
var bool = _React$PropTypes.bool;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;
var oneOfType = _React$PropTypes.oneOfType;


function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
function isEmptyObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
  }return true;
}

function createLocationDescriptor(to, _ref) {
  var query = _ref.query;
  var hash = _ref.hash;
  var state = _ref.state;

  if (query || hash || state) {
    return { pathname: to, query: query, hash: hash, state: state };
  }

  return to;
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets the value of its
 * activeClassName prop.
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 *
 * Links may pass along location state and/or query string parameters
 * in the state/query props, respectively.
 *
 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
 */
var Link = _react2.default.createClass({
  displayName: 'Link',


  contextTypes: {
    router: _PropTypes.routerShape
  },

  propTypes: {
    to: oneOfType([string, object]),
    query: object,
    hash: string,
    state: object,
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    onClick: func,
    target: string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      style: {}
    };
  },
  handleClick: function handleClick(event) {
    if (this.props.onClick) this.props.onClick(event);

    if (event.defaultPrevented) return;

    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target) return;

    event.preventDefault();

    var _props = this.props;
    var to = _props.to;
    var query = _props.query;
    var hash = _props.hash;
    var state = _props.state;

    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

    this.context.router.push(location);
  },
  render: function render() {
    var _props2 = this.props;
    var to = _props2.to;
    var query = _props2.query;
    var hash = _props2.hash;
    var state = _props2.state;
    var activeClassName = _props2.activeClassName;
    var activeStyle = _props2.activeStyle;
    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

    // Ignore if rendered outside the context of router, simplifies unit testing.
    var router = this.context.router;


    if (router) {
      // If user does not specify a `to` prop, return an empty anchor tag.
      if (to == null) {
        return _react2.default.createElement('a', props);
      }

      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
      props.href = router.createHref(location);

      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
        if (router.isActive(location, onlyActiveOnIndex)) {
          if (activeClassName) {
            if (props.className) {
              props.className += ' ' + activeClassName;
            } else {
              props.className = activeClassName;
            }
          }

          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
        }
      }
    }

    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
  }
});

exports.default = Link;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = __webpack_require__(10);

var _PatternUtils = __webpack_require__(17);

var _InternalPropTypes = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * A <Redirect> is used to declare another URL path a client should
 * be sent to when they request a given URL.
 *
 * Redirects are placed alongside routes in the route configuration
 * and are traversed in the same manner.
 */

var Redirect = _react2.default.createClass({
  displayName: 'Redirect',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

      if (route.from) route.path = route.from;

      route.onEnter = function (nextState, replace) {
        var location = nextState.location;
        var params = nextState.params;


        var pathname = void 0;
        if (route.to.charAt(0) === '/') {
          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
        } else if (!route.to) {
          pathname = location.pathname;
        } else {
          var routeIndex = nextState.routes.indexOf(route);
          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
        }

        replace({
          pathname: pathname,
          query: route.query || location.query,
          state: route.state || location.state
        });
      };

      return route;
    },
    getRoutePattern: function getRoutePattern(routes, routeIndex) {
      var parentPattern = '';

      for (var i = routeIndex; i >= 0; i--) {
        var route = routes[i];
        var pattern = route.path || '';

        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

        if (pattern.indexOf('/') === 0) break;
      }

      return '/' + parentPattern;
    }
  },

  propTypes: {
    path: string,
    from: string, // Alias for path
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _InternalPropTypes.falsy,
    children: _InternalPropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Redirect;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createRouterObject = createRouterObject;
exports.createRoutingHistory = createRoutingHistory;

var _deprecateObjectProperties = __webpack_require__(27);

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRouterObject(history, transitionManager) {
  return _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });
}

// deprecated
function createRoutingHistory(history, transitionManager) {
  history = _extends({}, history, transitionManager);

  if (process.env.NODE_ENV !== 'production') {
    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
  }

  return history;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createMemoryHistory;

var _useQueries = __webpack_require__(24);

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(61);

var _useBasename2 = _interopRequireDefault(_useBasename);

var _createMemoryHistory = __webpack_require__(138);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMemoryHistory(options) {
  // signatures and type checking differ between `useRoutes` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = (0, _createMemoryHistory2.default)(options);
  var createHistory = function createHistory() {
    return memoryHistory;
  };
  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
  history.__v2_compatible__ = true;
  return history;
}
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (createHistory) {
  var history = void 0;
  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
  return history;
};

var _useRouterHistory = __webpack_require__(74);

var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

var _RouteUtils = __webpack_require__(10);

Object.defineProperty(exports, 'createRoutes', {
  enumerable: true,
  get: function get() {
    return _RouteUtils.createRoutes;
  }
});

var _PropTypes2 = __webpack_require__(38);

Object.defineProperty(exports, 'locationShape', {
  enumerable: true,
  get: function get() {
    return _PropTypes2.locationShape;
  }
});
Object.defineProperty(exports, 'routerShape', {
  enumerable: true,
  get: function get() {
    return _PropTypes2.routerShape;
  }
});

var _PatternUtils = __webpack_require__(17);

Object.defineProperty(exports, 'formatPattern', {
  enumerable: true,
  get: function get() {
    return _PatternUtils.formatPattern;
  }
});

var _Router2 = __webpack_require__(187);

var _Router3 = _interopRequireDefault(_Router2);

var _Link2 = __webpack_require__(67);

var _Link3 = _interopRequireDefault(_Link2);

var _IndexLink2 = __webpack_require__(181);

var _IndexLink3 = _interopRequireDefault(_IndexLink2);

var _withRouter2 = __webpack_require__(200);

var _withRouter3 = _interopRequireDefault(_withRouter2);

var _IndexRedirect2 = __webpack_require__(182);

var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

var _IndexRoute2 = __webpack_require__(183);

var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

var _Redirect2 = __webpack_require__(68);

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(185);

var _Route3 = _interopRequireDefault(_Route2);

var _History2 = __webpack_require__(180);

var _History3 = _interopRequireDefault(_History2);

var _Lifecycle2 = __webpack_require__(184);

var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

var _RouteContext2 = __webpack_require__(186);

var _RouteContext3 = _interopRequireDefault(_RouteContext2);

var _useRoutes2 = __webpack_require__(199);

var _useRoutes3 = _interopRequireDefault(_useRoutes2);

var _RouterContext2 = __webpack_require__(26);

var _RouterContext3 = _interopRequireDefault(_RouterContext2);

var _RoutingContext2 = __webpack_require__(188);

var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

var _PropTypes3 = _interopRequireDefault(_PropTypes2);

var _match2 = __webpack_require__(197);

var _match3 = _interopRequireDefault(_match2);

var _useRouterHistory2 = __webpack_require__(74);

var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

var _applyRouterMiddleware2 = __webpack_require__(190);

var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

var _browserHistory2 = __webpack_require__(191);

var _browserHistory3 = _interopRequireDefault(_browserHistory2);

var _hashHistory2 = __webpack_require__(195);

var _hashHistory3 = _interopRequireDefault(_hashHistory2);

var _createMemoryHistory2 = __webpack_require__(70);

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Router = _Router3.default; /* components */

exports.Link = _Link3.default;
exports.IndexLink = _IndexLink3.default;
exports.withRouter = _withRouter3.default;

/* components (configuration) */

exports.IndexRedirect = _IndexRedirect3.default;
exports.IndexRoute = _IndexRoute3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;

/* mixins */

exports.History = _History3.default;
exports.Lifecycle = _Lifecycle3.default;
exports.RouteContext = _RouteContext3.default;

/* utils */

exports.useRoutes = _useRoutes3.default;
exports.RouterContext = _RouterContext3.default;
exports.RoutingContext = _RoutingContext3.default;
exports.PropTypes = _PropTypes3.default;
exports.match = _match3.default;
exports.useRouterHistory = _useRouterHistory3.default;
exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

/* histories */

exports.browserHistory = _browserHistory3.default;
exports.hashHistory = _hashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = makeStateWithLocation;

var _deprecateObjectProperties = __webpack_require__(27);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeStateWithLocation(state, location) {
  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
    var stateWithLocation = _extends({}, state);

    // I don't use deprecateObjectProperties here because I want to keep the
    // same code path between development and production, in that we just
    // assign extra properties to the copy of the state object in both cases.

    var _loop = function _loop(prop) {
      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
        return 'continue';
      }

      Object.defineProperty(stateWithLocation, prop, {
        get: function get() {
          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
          return location[prop];
        }
      });
    };

    for (var prop in location) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }

    return stateWithLocation;
  }

  return _extends({}, state, location);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = useRouterHistory;

var _useQueries = __webpack_require__(24);

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(61);

var _useBasename2 = _interopRequireDefault(_useBasename);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useRouterHistory(createHistory) {
  return function (options) {
    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
    history.__v2_compatible__ = true;
    return history;
  };
}
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Forms_Button__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Forms_Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Forms_Checkbox__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_1__components_Forms_Checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Forms_CheckboxContainer__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxContainer", function() { return __WEBPACK_IMPORTED_MODULE_2__components_Forms_CheckboxContainer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_ColorPicker__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return __WEBPACK_IMPORTED_MODULE_3__components_Forms_ColorPicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_Autocomplete__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return __WEBPACK_IMPORTED_MODULE_4__components_Forms_Autocomplete__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Radio__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_5__components_Forms_Radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Forms_Range__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return __WEBPACK_IMPORTED_MODULE_6__components_Forms_Range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Forms_Select__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_7__components_Forms_Select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Forms_TextInput__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return __WEBPACK_IMPORTED_MODULE_8__components_Forms_TextInput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Forms_Textarea__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return __WEBPACK_IMPORTED_MODULE_9__components_Forms_Textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_LittleStatus__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LittleStatus", function() { return __WEBPACK_IMPORTED_MODULE_10__components_LittleStatus__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Paginator__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return __WEBPACK_IMPORTED_MODULE_11__components_Paginator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Placeholder__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return __WEBPACK_IMPORTED_MODULE_12__components_Placeholder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_PopupHint__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PopupHint", function() { return __WEBPACK_IMPORTED_MODULE_13__components_PopupHint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Spinner__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_14__components_Spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Toasts__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toasts", function() { return __WEBPACK_IMPORTED_MODULE_15__components_Toasts__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Toast__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_16__components_Toast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Nav__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TopNav", function() { return __WEBPACK_IMPORTED_MODULE_17__components_Nav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_NavLink__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_18__components_NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_WizardNav__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WizardNav", function() { return __WEBPACK_IMPORTED_MODULE_19__components_WizardNav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_WizardStep__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return __WEBPACK_IMPORTED_MODULE_20__components_WizardStep__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Datagrid_DataTable__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return __WEBPACK_IMPORTED_MODULE_21__components_Datagrid_DataTable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Datagrid", function() { return __WEBPACK_IMPORTED_MODULE_21__components_Datagrid_DataTable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_Datagrid_DataRow__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataRow", function() { return __WEBPACK_IMPORTED_MODULE_22__components_Datagrid_DataRow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_Datagrid_DataCell__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataCell", function() { return __WEBPACK_IMPORTED_MODULE_23__components_Datagrid_DataCell__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_Datagrid_DataHeader__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataHeader", function() { return __WEBPACK_IMPORTED_MODULE_24__components_Datagrid_DataHeader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_Datagrid_DataBody__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataBody", function() { return __WEBPACK_IMPORTED_MODULE_25__components_Datagrid_DataBody__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_Layout_Fieldset__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return __WEBPACK_IMPORTED_MODULE_26__components_Layout_Fieldset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_Layout_Header__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return __WEBPACK_IMPORTED_MODULE_27__components_Layout_Header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_Layout_Section__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return __WEBPACK_IMPORTED_MODULE_28__components_Layout_Section__["a"]; });
































/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);

class IconCheck extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--check ${this.props.addClass} ${this.props.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M37.3 12.6q0 .9-.6 1.6L17.5 33.3q-.6.7-1.5.7t-1.6-.7L3.3 22.2q-.6-.6-.6-1.5t.6-1.5l3.1-3q.6-.7 1.5-.7t1.5.7l6.6 6.5L30.6 8.1q.6-.6 1.5-.6t1.5.6l3.1 3q.6.6.6 1.5z" }))),
            this.props.text && !this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCheck.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
/* harmony default export */ __webpack_exports__["a"] = (IconCheck);
//# sourceMappingURL=IconCheck.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);

class IconChevronDown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--chevron-down ${this.props.addClass} ${this.props.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M37.6 18L21 34.6q-.4.4-1 .4t-1-.4L2.4 18q-.4-.4-.4-1t.4-1l3.7-3.7q.5-.4 1-.4t1 .4L20 24.2l11.9-11.9q.4-.4 1-.4t1 .4l3.7 3.7q.4.4.4 1t-.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconChevronDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
/* harmony default export */ __webpack_exports__["a"] = (IconChevronDown);
//# sourceMappingURL=IconChevronDown.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);

class IconClose extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--close ${this.props.addClass} ${this.props.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M33.5 29.5q0 .9-.7 1.5l-3 3.1q-.6.6-1.5.6t-1.5-.6l-6.6-6.6-6.5 6.6q-.7.6-1.6.6t-1.5-.6l-3-3.1q-.6-.6-.6-1.5t.6-1.5l6.5-6.6-6.5-6.5q-.6-.7-.6-1.6t.6-1.5l3-3q.6-.6 1.5-.6t1.6.6l6.5 6.6 6.6-6.6q.6-.6 1.5-.6t1.5.6l3.1 3q.6.7.6 1.5t-.6 1.6l-6.6 6.5 6.6 6.6q.6.6.6 1.5z" }))),
            this.props.text && !this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconClose.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
/* harmony default export */ __webpack_exports__["a"] = (IconClose);
//# sourceMappingURL=IconClose.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);

class IconEye extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--eye ${this.props.addClass} ${this.props.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M37.1 21.4q-3.3-5.2-8.5-7.8 1.4 2.3 1.4 5 0 4.1-2.9 7t-7.1 3-7.1-3-2.9-7q0-2.7 1.4-5.1-5.1 2.7-8.5 7.9 2.9 4.6 7.4 7.3t9.7 2.7 9.7-2.7 7.4-7.3zm-16-8.5q0-.5-.3-.8t-.8-.3q-2.8 0-4.8 2t-2 4.8q0 .4.3.7t.8.3.7-.3.4-.7q0-2 1.3-3.3t3.3-1.4q.4 0 .8-.3t.3-.7zM40 21.4q0 .8-.4 1.6-3.2 5.1-8.4 8.2T20 34.3 8.8 31.2.4 23q-.4-.8-.4-1.6t.4-1.5q3.2-5.1 8.4-8.2T20 8.6t11.1 3.1 8.5 8.2q.4.8.4 1.5z" }))),
            this.props.text && !this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEye.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
/* harmony default export */ __webpack_exports__["a"] = (IconEye);
//# sourceMappingURL=IconEye.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);

class IconEyeSlash extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--eye-slash ${this.props.addClass} ${this.props.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M12.4 29.8l1.7-3.1q-1.9-1.5-3-3.6T10 18.6q0-2.7 1.4-5-5.2 2.6-8.5 7.8 3.7 5.8 9.5 8.4zm8.7-16.9q0-.5-.3-.8t-.8-.3q-2.8 0-4.8 2t-2 4.8q0 .4.3.7t.8.3.7-.3.4-.7q0-1.9 1.3-3.3t3.3-1.4q.4 0 .8-.3t.3-.7zm8.1-4.3v.2q-2.4 4.2-7.1 12.6t-7 12.7l-1.1 2q-.2.3-.7.3-.2 0-2.9-1.5-.4-.3-.4-.7 0-.2 1-1.9-3.2-1.5-5.9-3.9T.4 23q-.4-.7-.4-1.6t.4-1.5q3.5-5.3 8.5-8.3t11.1-3q2 0 4 .4l1.2-2.2q.2-.4.6-.4.2 0 .4.2t.7.3.8.4.7.4.4.3q.4.2.4.6zm.8 10q0 3.1-1.8 5.6t-4.6 3.7l6.2-11.2q.2 1 .2 1.9zm10 2.8q0 .8-.4 1.6-.9 1.4-2.5 3.2-3.3 3.8-7.7 6T20 34.3l1.7-3q4.7-.4 8.7-3t6.7-6.9q-2.5-4-6.3-6.5l1.5-2.5q2.1 1.4 4 3.4t3.3 4.1q.4.7.4 1.5z" }))),
            this.props.text && !this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEyeSlash.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
/* harmony default export */ __webpack_exports__["a"] = (IconEyeSlash);
//# sourceMappingURL=IconEyeSlash.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);

class IconHintHelp extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--hint-help ${this.props.addClass} ${this.props.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M20 0C8.955 0 0 8.955 0 20s8.955 20 20 20 20-8.955 20-20S31.045 0 20 0zm0 35.11a2.575 2.575 0 1 1 0-5.15 2.575 2.575 0 0 1 0 5.15zm4.54-12.295c-1.05.577-2.04 1.72-2.04 2.185a2.501 2.501 0 0 1-5 0c0-3.175 2.91-5.62 4.63-6.565C24.66 17.04 25 15.52 25 14.22c0-3.672-3.132-4.22-5-4.22-2.408 0-5 1.58-5 5.052a2.5 2.5 0 0 1-5 0C10 8.522 15.153 5 20 5c4.978 0 10 2.85 10 9.22 0 3.707-1.835 6.602-5.46 8.595z" }))),
            this.props.text && !this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconHintHelp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
/* harmony default export */ __webpack_exports__["a"] = (IconHintHelp);
//# sourceMappingURL=IconHintHelp.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);

class IconHintInfo extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--hint-info ${this.props.addClass} ${this.props.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm3.826 5.568c.605 0 1.115.208 1.512.614.394.404.594.922.594 1.539a3.078 3.078 0 0 1-.836 2.127c-.564.62-1.218.933-1.94.933a1.98 1.98 0 0 1-1.488-.629c-.392-.41-.59-.945-.59-1.593 0-.82.27-1.529.8-2.106.542-.587 1.195-.885 1.948-.885zM22.2 12.691c.603 0 1.084.144 1.428.428.362.3.555.723.555 1.223 0 .323-.164 1.297-1.57 6.006-1.67 5.604-2.516 9.015-2.516 10.136a.528.528 0 0 0 .09.323.39.39 0 0 0 .05.06c.442-.087 2.692-1.08 4.674-2.017a.403.403 0 0 1 .504.136v.002a.403.403 0 0 1-.057.52c-2.23 2.1-3.822 3.412-4.865 4.008-1.077.616-1.95.916-2.668.916-.673 0-1.218-.222-1.623-.657-.398-.425-.6-1.009-.6-1.734 0-2.056 1.182-6.883 3.612-14.754.1-.327.148-.616.148-.861a.41.41 0 0 0-.006-.076h-.021c-.241 0-.537.108-.877.322-.415.26-3.266 1.426-3.834 1.658a.403.403 0 0 1-.45-.642c1.616-1.78 3.119-3.07 4.466-3.83 1.39-.785 2.555-1.167 3.56-1.167z" }))),
            this.props.text && !this.props.textFirst &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconHintInfo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
/* harmony default export */ __webpack_exports__["a"] = (IconHintInfo);
//# sourceMappingURL=IconHintInfo.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sortablejs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_sortablejs__);



class DataBody extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* prefix */] + "datagrid__body";
    }
    renderChildren() {
        const children = !Array.isArray(this.props.children) ? [this.props.children] : this.props.children;
        return children.map(obj => {
            return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](obj, {
                actions: this.props.actions,
                handleSelectRow: this.props.handleSelectRow,
                selectedRows: this.props.selectedRows,
            });
        });
    }
    render() {
        const { sortable, sortableProps, style, addClass, className } = this.props;
        if (sortable) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_sortablejs__, Object.assign({ tag: "tbody" }, sortableProps), this.props.children && this.renderChildren()));
        }
        else {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", { className: className }, this.props.children && this.renderChildren()));
        }
    }
}
DataBody.defaultProps = {
    sortable: false,
    sortableProps: {},
    addClass: "",
    className: "",
    style: {},
    actions: [],
};
/* harmony default export */ __webpack_exports__["a"] = (DataBody);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataCell__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Checkbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Forms_Button__ = __webpack_require__(18);







class DataHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* prefix */] + "datagrid__row";
    }
    renderBulkActions() {
        return this.props.actions.map(obj => {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__components_Forms_Button__["a" /* default */], { onClick: obj.action, key: obj.type, icon: obj.icon, color: "nocolor", size: "small" }));
        });
    }
    render() {
        const { actions, addClass, className, selectedRows, style } = this.props;
        const kids = [...this.props.children];
        const lastKid = kids.pop();
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Header, { className: `${this.name} ${this.name}--header ${addClass} ${className}`, selected: selectedRows.length > 0, style: style },
                actions.length > 0 &&
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__DataCell__["a" /* default */], { type: "header", style: { width: "1%" } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_Forms_Checkbox__["a" /* default */], { input: { onChange: this.props.handleSelectAll, checked: this.props.selectedAll } })),
                kids,
                selectedRows.length > 0 ?
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__DataCell__["a" /* default */], { type: "header" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* Div */], { display: "inline-block", verticalAlign: "bottom", className: `${this.name}__actions_bar` },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ActionsIcons, { className: `${this.name}__actions_icons` }, this.renderBulkActions())))
                    :
                        lastKid)));
    }
}
DataHeader.defaultProps = {
    addClass: "",
    className: "",
    style: {},
    actions: [],
    handleSelectAll: () => { },
    selectedAll: false,
};
const ActionsIcons = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("div")({
    whiteSpace: "nowrap",
    " path": {
        fill: "white!important",
    },
});
/* unused harmony export ActionsIcons */

const Header = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("tr")((props) => {
    return {
        background: props.selected ? props.theme.blue : "#333",
    };
});
/* harmony default export */ __webpack_exports__["a"] = (DataHeader);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataCell__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_Checkbox__ = __webpack_require__(19);





class DataRow extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "datagrid__row";
    }
    render() {
        const { style, addClass, inactive, dataId, actions, selectedRows, className } = this.props;
        const isSelected = selectedRows ? selectedRows.indexOf(dataId) > -1 : false;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Tr, { className: `${this.name} ${inactive && this.name + `--inactive`} ${addClass} ${className}`, disabled: inactive, selected: isSelected, "data-id": dataId, style: style },
            actions.length > 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__DataCell__["a" /* default */], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_Forms_Checkbox__["a" /* default */], { input: { "onChange": evt => this.props.handleSelectRow(dataId),
                            "checked": this.props.selectedRows.indexOf(dataId) !== -1,
                            "data-id": dataId,
                            "className": "bulk-action-item",
                        } })),
            this.props.children));
    }
}
DataRow.defaultProps = {
    addClass: "",
    className: "",
    style: {},
    inactive: false,
    dataId: "",
    actions: [],
    selectedRows: [],
};
const Tr = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("tr")({}, (props) => {
    return {
        background: props.selected ? props.theme.selected_background : "#fff",
        ":hover td": {
            background: props.theme.hover_background,
        },
        color: props.disabled ? "#ccc" : "initial",
        " *, path": {
            color: props.disabled && "#ccc !important",
            fill: props.disabled && "#ccc !important",
        },
        " .muk-icon--pause *": {
            color: props.theme.blue + "!important",
            fill: props.theme.blue + "!important",
        },
        "& .muk-icon--play *": {
            color: props.theme.blue + "!important",
            fill: props.theme.blue + "!important",
        },
    };
});
/* harmony default export */ __webpack_exports__["a"] = (DataRow);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_TextInput__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_unique_id__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__ = __webpack_require__(6);






class Autocomplete extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "autocomplete";
        this.performAutoCompleteOnUpdate = true;
        this.performAutoCompleteOnKeyUp = true;
        this.ignoreBlur = false;
        this._inputRef = null;
        this.state = {
            value: props.value ? props.value : "",
            isOpen: false,
            highlightedIndex: null,
            menuLeft: 0,
            menuTop: 0,
            menuWidth: 0,
        };
    }
    componentWillReceiveProps(nextProps) {
        const props = this.props;
        const state = this.state;
        if (props.items !== nextProps.items ||
            state.highlightedIndex >= nextProps.items.length) {
            this.setState({ highlightedIndex: null });
        }
    }
    isOpen() {
        return "open" in this.props ? this.props.open : this.state.isOpen;
    }
    componentDidMount() {
        if (this.isOpen()) {
            this.setMenuPositions();
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if ((this.state.isOpen && !prevState.isOpen) || ("open" in this.props && this.props.open && !prevProps.open)) {
            this.setMenuPositions();
        }
        if (this.isOpen() && this.performAutoCompleteOnUpdate) {
            this.performAutoCompleteOnUpdate = false;
            this.maybeAutoCompleteText();
        }
        if (prevState.isOpen !== this.state.isOpen) {
            this
                .props
                .onMenuVisibilityChange(this.state.isOpen);
        }
    }
    setMenuPositions() {
        const node = this._inputRef;
        const rect = node.base.getBoundingClientRect();
        const glob = global;
        const computedStyle = glob
            .getComputedStyle(node.base);
        const marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
        const marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
        const marginRight = parseInt(computedStyle.marginRight, 10) || 0;
        this.setState({
            menuTop: rect.bottom + marginBottom,
            menuLeft: rect.left + marginLeft,
            menuWidth: rect.width + marginLeft + marginRight - 10,
        });
    }
    maybeAutoCompleteText() {
        if (!this.props.autoHighlight || this.state.value === "") {
            return;
        }
        const { highlightedIndex } = this.state;
        const items = this.getFilteredItems();
        if (items.length === 0) {
            return;
        }
        const matchedItem = highlightedIndex !== null
            ? items[highlightedIndex]
            : items[0];
        const itemValue = this
            .props
            .getItemValue(matchedItem);
        const itemValueDoesMatch = (itemValue.toLowerCase().indexOf(this.state.value.toLowerCase()) === 0);
        if (itemValueDoesMatch && highlightedIndex === null) {
            this.setState({ highlightedIndex: 0 });
        }
    }
    getFilteredItems() {
        let items = this.props.items;
        if (this.props.shouldItemRender) {
            items = items.filter((item) => (this.props.shouldItemRender(item, this.state.value)));
        }
        if (this.props.sortItems) {
            items.sort((a, b) => (this.props.sortItems(a, b, this.state.value)));
        }
        return items;
    }
    onSelect(value, item) {
        this.setState({ value });
        this.setIgnoreBlur(false);
        this.props.input.onChange(value);
    }
    handleChange(event) {
        this.performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: null, value: event.target.value });
        this.props.input.onChange(event);
    }
    handleKeyUp() {
        if (this.performAutoCompleteOnKeyUp) {
            this.performAutoCompleteOnKeyUp = false;
            this.maybeAutoCompleteText();
        }
    }
    handleKeyDown(event) {
        if (event.key === "ArrowDown") {
            this.handleArrowDown(event);
        }
        else if (event.key === "ArrowUp") {
            this.handleArrowUp(event);
        }
        else if (event.key === "Enter") {
            this.handleEnter(event);
        }
        else if (event.key === "Escape") {
            this.handleEscape();
        }
        else if (!this.isOpen()) {
            this.setState({ isOpen: true });
        }
    }
    handleArrowDown(event) {
        event.preventDefault();
        const itemsLength = this
            .getFilteredItems()
            .length;
        if (!itemsLength) {
            return;
        }
        const { highlightedIndex } = this.state;
        const index = (highlightedIndex === null || highlightedIndex === itemsLength - 1)
            ? 0
            : highlightedIndex + 1;
        this.performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: index, isOpen: true });
    }
    handleArrowUp(event) {
        event.preventDefault();
        const itemsLength = this
            .getFilteredItems()
            .length;
        if (!itemsLength) {
            return;
        }
        const { highlightedIndex } = this.state;
        const index = (highlightedIndex === 0 || highlightedIndex === null)
            ? itemsLength - 1
            : highlightedIndex - 1;
        this.performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: index, isOpen: true });
    }
    handleEnter(event) {
        if (!this.isOpen()) {
            return;
        }
        else if (this.state.highlightedIndex === null) {
            this.setState({
                isOpen: false,
            }, () => {
            });
        }
        else {
            event.preventDefault();
            const item = this.getFilteredItems()[this.state.highlightedIndex];
            const value = this
                .props
                .getItemValue(item);
            this.setState({
                isOpen: false,
                highlightedIndex: null,
            }, () => {
                this.onSelect(value, item);
            });
        }
    }
    handleEscape() {
        this.setState({ highlightedIndex: null, isOpen: false });
    }
    handleInputBlur() {
        if (this.ignoreBlur) {
            return;
        }
        this.setState({ isOpen: false, highlightedIndex: null });
    }
    handleInputFocus() {
        if (this.ignoreBlur) {
            this.setIgnoreBlur(false);
            return;
        }
        this.setState({ isOpen: true });
    }
    isInputFocused() {
        const el = this._inputRef.base;
        return el.ownerDocument && (el === el.ownerDocument.activeElement);
    }
    handleInputClick() {
        if (this.isInputFocused() && !this.isOpen()) {
            this.setState({ isOpen: true });
        }
    }
    composeEventHandlers(internal, external) {
        return external
            ? e => { internal(e); external(e); }
            : internal;
    }
    highlightItemFromMouse(index) {
        this.setState({ highlightedIndex: index });
    }
    selectItemFromMouse(item) {
        const value = this
            .props
            .getItemValue(item);
        this.setState({
            isOpen: false,
            highlightedIndex: null,
        }, () => {
            this.onSelect(value, item);
        });
    }
    setIgnoreBlur(ignore) {
        this.ignoreBlur = ignore;
    }
    renderMenu() {
        const items = this
            .getFilteredItems()
            .map((item, index) => {
            const element = this
                .props
                .renderItem(item, this.state.highlightedIndex === index, { cursor: "default" });
            return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](element, {
                onMouseDown: () => this.selectItemFromMouse(item),
                onMouseEnter: () => this.highlightItemFromMouse(index),
                onClick: () => { this.selectItemFromMouse(item); },
                ref: e => this.refs[`item-${index}`] = e,
            });
        });
        const style = {
            left: this.state.menuLeft,
            top: this.state.menuTop,
            minWidth: this.state.menuWidth,
        };
        const menu = this
            .props
            .renderMenu(items, this.state.value, style);
        return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](menu, {
            ref: e => this.refs.menu = e,
        });
    }
    render() {
        const open = this.isOpen();
        const { labels, meta, input } = this.props;
        const inputProps = Object.assign({}, this.props.input, {
            onFocus: this.composeEventHandlers(this.handleInputFocus.bind(this), input.onFocus),
            onBlur: this.handleInputBlur.bind(this),
            onChange: this.handleChange.bind(this),
            onKeyDown: this.composeEventHandlers(this.handleKeyDown.bind(this), input.onKeyDown),
            onKeyUp: this.composeEventHandlers(this.handleKeyUp.bind(this), input.onKeyUp),
            onClick: this.composeEventHandlers(this.handleInputClick.bind(this), input.onClick),
        });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["a" /* Field */], { label: "" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Forms_TextInput__["a" /* default */], { innerRef: r => (this._inputRef = r), type: "search", labels: labels, meta: meta, input: inputProps }),
            open && this.renderMenu()));
    }
}
Autocomplete.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["b" /* defaultFieldProps */], { items: [], renderMenu: (items, value, style) => {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Menu, { className: `${__WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "autocomplete"}__menu`, style: Object.assign({}, style), children: items });
    }, onMenuVisibilityChange: () => { }, renderItem: (item, highlighted, style) => {
        let className = `${__WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "autocomplete"}__item `;
        className += highlighted ? className + `${__WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "autocomplete"}__item--selected` : "";
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MenuItem, { key: `${item.value}-${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_unique_id__["a" /* default */])()}`, selected: highlighted, className: `${className}` }, item.text);
    }, getItemValue: (item) => {
        return item.text;
    }, shouldItemRender: (item, value) => {
        return (item.value.toLowerCase().indexOf(value.toLowerCase()) > -1);
    } });
const Menu = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.95)",
    padding: 0,
    fontSize: "90%",
    position: "absolute",
    top: "100% !important",
    left: "2px !important",
    margin: "1px 0",
    overflow: "auto",
    maxHeight: "50vh",
    zIndex: 1000,
    marginTop: "5px",
}, props => {
    const theme = props.theme;
    return {
        border: `1px solid ${theme.decoration}`,
        borderRadius: theme.radius,
    };
});
const MenuItem = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    padding: "9px 10px",
    fontSize: "12px",
    cursor: "pointer",
    transition: "border-color 0.2s",
    borderRadius: 0,
}, props => {
    const p = props;
    const theme = props.theme;
    if (p.selected) {
        return {
            background: theme.selected_background,
        };
    }
    else {
        return {
            background: "transparent",
        };
    }
});
/* harmony default export */ __webpack_exports__["a"] = (Autocomplete);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(75)))

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types__ = __webpack_require__(89);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




const UniversalButtonComponent = (_a) => {
    var props = __rest(_a, []);
    const { name, type, link, labels, icon, input, to, children } = props, others = __rest(props, ["name", "type", "link", "labels", "icon", "input", "to", "children"]);
    if (type === "href") {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__types__["a" /* Href */], Object.assign({}, others, { name: name, title: labels.title, link: to ? to : link, icon: icon, children: children, label: others.label ? others.label : labels.main }));
    }
    else if (type === "button") {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__types__["b" /* Button */], Object.assign({}, others, { name: name, title: labels.title, icon: icon, input: input, children: children, label: others.label ? others.label : labels.main }));
    }
    else if (type === "link") {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__types__["c" /* Link */], Object.assign({}, others, { name: name, title: labels.title, icon: icon, children: children, link: to ? to : link, label: others.label ? others.label : labels.main }));
    }
    else if (type === "submit") {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__types__["d" /* Submit */], Object.assign({}, others, { name: name, title: labels.title, input: input, label: others.label ? others.label : labels.main }));
    }
    else if (type === "void") {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__types__["e" /* Void */], Object.assign({}, others, { name: name, icon: icon, title: labels.title, children: children, label: others.label ? others.label : labels.main }));
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null);
    }
};
const UniversalButton = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(UniversalButtonComponent)({
    boxSizing: "border-box",
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    userSelect: "none",
    padding: "12px 25px",
    lineHeight: "1.5em",
    borderWidth: "1px",
    borderStyle: "solid",
    ":hover": {
        textDecoration: "none",
    },
    ":last-child": {
        marginRight: 0,
    },
    " .muk-icon": {
        margin: "0 0 0 0",
        position: "relative",
        top: "-3px",
        verticalAlign: "middle",
    },
    " .muk-icon svg": {
        verticalAlign: "middle",
    },
    " .muk-popup_hint": {
        verticalAlign: "middle !important",
    },
    " a": {
        color: "white",
    },
}, props => {
    let size = {};
    if (props.size === "tiny") {
        size = {
            padding: "2px 2px",
            fontSize: "13px",
        };
    }
    else if (props.size === "small") {
        size = {
            padding: "8px 15px",
        };
    }
    let disabled = {};
    if (props.disabled) {
        disabled = {
            opacity: 0.5,
            cursor: "default",
            pointerEvents: "none",
        };
    }
    let color = {};
    if (props.color === "nocolor") {
        color = {
            background: "transparent",
            padding: "0 2px",
            borderColor: "transparent",
            color: props.theme.blue,
            ":active,:focus": {
                borderColor: "transparent",
                outline: "none",
                background: "rgba(200,200,200,0.2)",
            },
            " path": {
                fill: props.theme.blue + "!important",
            },
        };
    }
    else {
        let c = props.theme[props.color === "gray" ? "grey" : props.color];
        if (c === props.theme.grey) {
            c = __WEBPACK_IMPORTED_MODULE_2_color__(c).darken(0.2).string();
        }
        if (props.secondary) {
            color = {
                backgroundColor: "white",
                borderColor: c,
                color: props.color === "decoration" ? props.theme.blue : c,
                ":hover": {
                    backgroundColor: __WEBPACK_IMPORTED_MODULE_2_color__(c).fade(0.8).string(),
                    borderColor: __WEBPACK_IMPORTED_MODULE_2_color__(c).string(),
                },
                ":active,:focus": {
                    background: __WEBPACK_IMPORTED_MODULE_2_color__(c).fade(0.2).string(),
                    borderColor: __WEBPACK_IMPORTED_MODULE_2_color__(c).fade(0.2).string(),
                    color: "white",
                },
                " path": {
                    fill: (props.color === "decoration" ? props.theme.blue : c) + "!important",
                },
            };
        }
        else {
            color = {
                backgroundColor: c,
                borderColor: c,
                color: props.color === "decoration" ? props.theme.blue : "white",
                ":hover": {
                    backgroundColor: __WEBPACK_IMPORTED_MODULE_2_color__(c).darken(0.1).string(),
                    borderColor: __WEBPACK_IMPORTED_MODULE_2_color__(c).darken(0.1).string(),
                },
                ":active,:focus": {
                    background: __WEBPACK_IMPORTED_MODULE_2_color__(c).darken(0.2).string(),
                    borderColor: __WEBPACK_IMPORTED_MODULE_2_color__(c).darken(0.2).string(),
                },
                " path": {
                    fill: (props.color === "decoration" ? props.theme.blue : "white") + "!important",
                },
            };
        }
    }
    return Object.assign({}, size, disabled, color, { borderRadius: props.theme.radius, textTransform: props.theme.button_text_transform, fontWeight: props.theme.button_text_weight, fontSize: props.size === "tiny" ? "13px" : props.theme.button_text_size });
});
/* harmony export (immutable) */ __webpack_exports__["a"] = UniversalButton;



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__ = __webpack_require__(11);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



const Href = (_a) => {
    var { icon, label, link, name, title, styleClass, className, children } = _a, props = __rest(_a, ["icon", "label", "link", "name", "title", "styleClass", "className", "children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props), { href: link, className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Href;

const Button = (_a) => {
    var { name, icon, label, title, className, styleClass, input, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "styleClass", "input", "children"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", Object.assign({}, input, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children));
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Button;

const Link = (_a) => {
    var { name, icon, label, title, className, styleClass, link, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "styleClass", "link", "children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props), { to: link, className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Link;

const Submit = (_a) => {
    var { name, label, title, className, styleClass, input, children } = _a, props = __rest(_a, ["name", "label", "title", "className", "styleClass", "input", "children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", Object.assign({ type: "submit" }, input, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, value: label, title: title }));
};
/* harmony export (immutable) */ __webpack_exports__["d"] = Submit;

const Void = (_a) => {
    var { name, icon, label, title, className, styleClass, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "styleClass", "children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = Void;



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_TextInput__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_Field__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_debounce__);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







class CheckboxContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "checkbox_container";
        this.state = {
            filter: "",
        };
        this.handleFilter = __WEBPACK_IMPORTED_MODULE_6_lodash_debounce___default()(this.handleFilter.bind(this), 150);
    }
    renderFilter() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Forms_TextInput__["a" /* default */], { className: `${this.name}__filter_input`, type: "search", onClear: () => this.setState({ filter: "" }), style: { marginBottom: "5px" }, input: { value: this.state.filter,
                onKeyUp: this.handleFilter }, labels: { placeholder: this.props.labels.placeholder, main: "" } }));
    }
    handleFilter(evt) {
        this.setState({ filter: evt.target.value });
    }
    render() {
        const { withoutFilter, height, labels, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const options = this.props.availableQueries
            .filter((option) => {
            const regex = new RegExp(this.state.filter, "i");
            return option.subheader || regex.test(option.name);
        });
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledField, Object.assign({}, props, { labels: labels, className: `${this.name}__queries` }),
            withoutFilter === false && this.renderFilter(),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__list__["a" /* QueryList */], { className: `${this.name}__list ${isInvalid ? `${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__group--invalid` : ""}`, name: this.name, height: height, activeFirst: props.activeFirst, options: options, value: this.props.input.value ? this.props.input.value : [], input: this.props.input, singleChoice: this.props.singleChoice, showInput: this.props.showInput, labels: labels, meta: meta })));
    }
}
CheckboxContainer.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__components_Forms_Field__["b" /* defaultFieldProps */], { availableQueries: [], singleChoice: false, withoutFilter: false, height: 300, showInput: false, activeFirst: true, labels: {
        main: "",
        allProducts: "All products",
        placeholder: "",
        invalid: "",
    } });
const StyledField = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_4__components_Forms_Field__["a" /* Field */])({
    " > .muk-form__group--invalid": {
        border: "none !important",
    },
});
/* harmony default export */ __webpack_exports__["a"] = (CheckboxContainer);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_Radio__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_Checkbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_LittleStatus__ = __webpack_require__(45);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};






const QueryItem = (_a) => {
    var { name, option, index, onClick, checked, labels, className, singleChoice, showInput } = _a, props = __rest(_a, ["name", "option", "index", "onClick", "checked", "labels", "className", "singleChoice", "showInput"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Li, { className: `${name}__item ${index >= 0 ? `${name}__item--active` : ""}
                        ${option.disabled ? `${name}__item--disabled` : ""}
                        ${className}
            `, "data-subheader": option.subheader, disabled: option.disabled, checked: checked, key: option.id, "data-link": option.link !== undefined, onClick: !option.subheader && onClick },
        showInput &&
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, singleChoice ?
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Forms_Radio__["a" /* default */], { items: [
                        { value: option.id, label: "" }
                    ], input: {
                        value: checked ? option.id : null,
                        onChange: onClick,
                    }, key: "input", style: { display: showInput ? "inline-block" : "none", pointerEvents: "none" } })
                :
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_Forms_Checkbox__["a" /* default */], { input: {
                            checked: checked,
                            onChange: onClick,
                        }, key: "input", style: { display: showInput ? "inline-block" : "none", pointerEvents: "none", paddingRight: "5px" } })),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](QueryItemLabel, { name: name, option: option, allProducts: labels.allProducts, showInput: showInput })));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = QueryItem;

const QueryItemLabel = (_a) => {
    var { name, option, allProducts, className, showInput } = _a, props = __rest(_a, ["name", "option", "allProducts", "className", "showInput"]);
    let label = (option.name === "♥ALLPRODUCTS♥" ? allProducts : option.name);
    if (option.link !== undefined) {
        label = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: option.link }, label);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, { className: `${name}__label ${className}`, key: "label", disabled: option.disabled },
        label,
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Count, { className: `${name}__count` }, typeof option.product_count !== "undefined" ? `(${option.product_count})` : ""),
        option.active !== undefined &&
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_LittleStatus__["a" /* default */], { style: { float: showInput ? "right" : "left" }, type: option.active ? "success" : "inactive" })));
};
/* unused harmony export QueryItemLabel */

const Li = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("li")({
    display: "table",
    background: "white",
    fontWeight: "normal",
    width: "100%",
    padding: "10px",
    "& span.muk-icon--check": {
        top: "-2px !important",
    }
}, (props) => {
    let checked = {};
    if (props.checked) {
        checked = {
            background: props.theme.selected_background,
        };
    }
    let disabled = {};
    if (props.disabled) {
        disabled = {
            cursor: "default",
            ":hover": {
                background: "white",
            },
        };
    }
    let subheader = {};
    if (props["data-subheader"]) {
        subheader = {
            background: props.theme.decoration,
            color: "white",
            padding: "5px",
            fontWeight: "bold",
            pointerEvents: "none",
        };
    }
    return Object.assign({ cursor: props["data-link"] ? "default" : "pointer", ":hover": {
            background: props.theme.hover_background,
        } }, checked, disabled, subheader);
});
/* unused harmony export Li */

const Label = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("label")({
    cursor: "pointer",
    margin: "0 5px",
    " a": {
        verticalAlign: "middle",
    },
}, (props) => {
    return props.disabled ?
        {
            cursor: "default",
            fontStyle: "italic",
            color: "#888",
        }
        : {};
});
const Count = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("span")({
    color: "#888",
    fontSize: "0.8em",
});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item__ = __webpack_require__(91);




function sortOptions(queries) {
    if (!queries) {
        return;
    }
    return (a, b) => {
        const activeA = queries.indexOf(a.id) >= 0;
        const activeB = queries.indexOf(b.id) >= 0;
        if (activeA < activeB) {
            return 1;
        }
        if (activeA > activeB) {
            return -1;
        }
        return 0;
    };
}
const renderOptions = (name, options, value, input, singleChoice, showInput, labels) => {
    let allProductsOption = null;
    options.map((option, key) => {
        if (option.name === "♥ALLPRODUCTS♥") {
            allProductsOption = option.id;
        }
    });
    return options
        .map(option => {
        const index = value.indexOf(option.id);
        const handler = () => {
            let selected = [...value];
            if (index < 0) {
                if (allProductsOption !== null && value.indexOf(allProductsOption) > -1) {
                    selected.splice(value.indexOf(allProductsOption), 1);
                }
                selected = singleChoice ? [option.id] : selected.concat(option.id);
            }
            else {
                selected.splice(index, 1);
            }
            input.onChange(selected);
        };
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__item__["a" /* QueryItem */], { name: name, option: option, index: index, onClick: handler, checked: value.indexOf(option.id) > -1, singleChoice: singleChoice, showInput: showInput, labels: labels, key: option.id + option.name });
    });
};
const QueryList = ({ name, className, options, value, input, height, singleChoice, showInput, activeFirst, labels, meta }) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](List, { className: `${name}__list ${className}`, height: height }, renderOptions(name, meta.initial && activeFirst ? options.sort(sortOptions(meta.initial)) : options, value, input, singleChoice, showInput, labels)));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = QueryList;

const List = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("ul")({
    listStyle: "none",
    margin: 0,
    padding: 0,
    border: "1px solid #dbcba3",
    overflow: "auto",
    background: "rgb(255,255,255)",
    height: "auto",
}, (props) => {
    return {
        maxHeight: props.height === "auto" ? props.height : props.height + "px",
        borderRadius: props.theme.radius,
        " li + li": {
            borderTop: `1px solid ${__WEBPACK_IMPORTED_MODULE_2_color__(props.theme.decoration).fade(0.8)}`,
        },
    };
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_color__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_input_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__ = __webpack_require__(6);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};






class ColorPicker extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* prefix */] + "colorpicker";
        const color = (typeof props.color == 'string' || props.color instanceof String)
            ? props.color
            : `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`;
        this.state = {
            displayColorPicker: false,
            color,
        };
        this.handleChanged = __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default()(this.handleChanged.bind(this), 200);
    }
    handleChanged(evt) {
        this.setState({ color: evt });
        return this.props.input.onChange(evt);
    }
    render() {
        const { color } = this.state;
        const { input, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const background = `${color}`;
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledField, Object.assign({}, props, { name: this.name, "aria-invalid": isInvalid ? 1 : 0 }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", Object.assign({}, input, { type: "hidden", value: background })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_input_color__, { value: color, defaultValue: "#345678", onChange: this.handleChanged }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("style", null, style)));
    }
}
ColorPicker.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["b" /* defaultFieldProps */], { color: "#000000" });
const StyledField = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["a" /* Field */])({
    display: "inline-block",
    width: "100%",
    " .muk-form__group--invalid": {
        fontSize: "0",
    },
    " .m-input-color": {
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "40px",
        padding: "5px",
        backgroundColor: "#ffffff",
        userSelect: "none",
        transition: "border-color 0.2s",
        willChange: "border-color",
    },
}, props => {
    const theme = props.theme;
    return {
        " .m-input-color": {
            borderRadius: theme.radius,
            borderColor: theme.decoration,
            border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
        },
        " .m-input-color:focus": {
            border: `${theme.input_border_active} !important`,
        },
        " .m-input-color:active": {
            border: `${theme.input_border_active} !important`,
        },
        " .muk-form__group--invalid .muk-colorpicker__colorbox": {
            borderColor: `${theme.red} !important`,
        },
    };
});
const ColorBox = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("div")({
    cursor: "pointer",
    background: "white",
    padding: "5px",
}, props => {
    const theme = props.theme;
    return {
        border: `1px solid ${theme.decoration}`,
        borderRadius: theme.radius,
    };
});
const Popover = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("div")({
    position: "absolute",
    zIndex: 200,
});
const Cover = __WEBPACK_IMPORTED_MODULE_2_cxs_component___default()("div")({
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
});
const style = `
.f-no-select {
  user-select: none;
}
.m-input-color.color-picker-open:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: 10px;
  top: 17px;
  border-color: transparent;
  border-style: solid;
  border-bottom-color: #f5f5f5;
  border-width: 10px;
  content: " ";
}
.m-input-color .remove {
  display: none;
}
.m-input-color .css-color {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.m-input-color .slider {
  background: none;
  border-radius: 0;
}
.m-input-color .value {
  display: none;
}
.m-input-color .slider-x {
  position: relative;
  width: 190px;
  height: 12px;
  background-color: #ccc;
  user-select: none;
  -webkit-user-select: none;
  border: 1px solid #aaa;
}
.m-input-color .slider-x .handle {
  position: absolute;
}
.m-input-color .slider-x .handle:after {
  position: absolute;
  top: -1px;
  left: -3px;
  width: 5px;
  height: 12px;
  border: 1px solid #aaa;
  border-radius: 0;
  background-color: #eee;
  content: '';
}
.m-input-color .slider-xy {
  position: relative;
  width: 100%;
  height: 100%;
}
.m-input-color .slider-xy .handle {
  position: absolute;
}
.m-input-color .slider-xy .handle:after {
  position: relative;
  display: block;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  border-radius: 50%;
  content: '';
}
.m-color-picker {
  position: absolute;
  top: 37px;
  left: 0px !important;
  width: 252px;
  height: 340px;
  padding: 10px;
  background-color: #f5f5f5;
  z-index: 9999;
}
.m-color-picker .selector {
  position: relative;
  width: 230px;
  height: 230px;
}
.m-color-picker .gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.m-color-picker .white {
  background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}
.m-color-picker .dark {
  background: linear-gradient(to bottom, transparent 0%, #000000 100%);
}
.m-color-picker .sliders {
  position: relative;
  margin-top: 10px;
}
.m-color-picker .hue {
  margin-bottom: 5px;
  background: linear-gradient(to left, #FF0000 0%, #FF0099 10%, #CD00FF 20%, #3200FF 30%, #0066FF 40%, #00FFFD 50%, #00FF66 60%, #35FF00 70%, #CDFF00 80%, #FF9900 90%, #FF0000 100%);
}
.m-color-picker .color {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
}
.m-color-picker .inputs {
  margin: 10px 0 0 0;
}
.m-color-picker .input {
  width: 30px;
  margin-right: 10px;
  float: left;
  text-align: center;
}
.m-color-picker .input:last-child {
  margin-right: 0;
  margin-left: 6px;
}
.m-color-picker .input .label {
  font-size: 13px;
  font-weight: normal;
  color: #000;
}
.m-color-picker .input .value {
  display: block;
  width: 100%;
  font-size: 12px;
  padding: 4px;
  line-height: 14px;
  border: 1px solid #ccc;
}
.m-color-picker .hex {
  width: 70px;
}
.m-input-number {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 3px;
  font-size: 12px;
}
.m-input-number input {
  width: 100%;
  padding: 4px;
  line-height: 14px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  outline: 0;
}
.m-input-number input:focus {
  border: 1px solid #3498db;
}
.m-input-number .control {
  position: absolute;
  display: none;
  top: 1px;
  right: 1px;
  bottom: 0;
  color: #ccc;
  background-color: #eee;
  width: 16px;
  height: 24px;
  font-size: 7px;
  text-align: center;
  box-sizing: border-box;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}
.m-input-number .control-hide {
  display: none !important;
}
.m-input-number:hover .control {
  display: block;
}
.m-input-number .up,
.m-input-number .down {
  display: block;
  height: 12px;
  box-sizing: border-box;
  padding-top: 2px;
}
`;
/* harmony default export */ __webpack_exports__["a"] = (ColorPicker);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Forms_Button__ = __webpack_require__(18);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



const RadioInput = (_a) => {
    var { name, value, checked, label, onChange, bigButtons, hideInput } = _a, props = __rest(_a, ["name", "value", "checked", "label", "onChange", "bigButtons", "hideInput"]);
    if (bigButtons) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](BigLabel, { className: `${name}__item ${props.className}`, key: value },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Forms_Button__["a" /* default */], { secondary: checked ? false : true, style: { display: "block" }, color: checked ? "blue" : "decoration", type: "void", input: { onClick: () => false } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Input, { value: value, checked: checked, onChange: onChange, type: "radio", className: `${this.name}__item`, style: { display: "none" }, "data-big": bigButtons }),
                !hideInput ?
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledInput, null),
                        "\u00A0")
                    :
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { verticalAlign: "middle" } }, label)));
    }
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, { className: `${name}__item ${props.className}`, key: value },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Input, { value: value, checked: checked, onChange: onChange, type: "radio", className: `${this.name}__item`, style: { display: "none" }, "data-big": bigButtons }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledInput, null),
            "\u00A0",
            label));
};
const Label = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("label")({
    cursor: "pointer",
    display: "block",
    padding: "5px 0",
}, (props) => {
    const theme = props.theme;
    return {
        ":hover span span": {
            borderColor: theme.blue,
        },
    };
});
const BigLabel = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("label")({
    display: "table-cell",
    marginRight: "5px",
    " .muk-button__item": {
        borderRadius: 0,
        margin: "0 0 0 -1px",
    },
    " span span": {
        fontWeight: "normal",
    },
}, (props) => {
    const theme = props.theme;
    return {
        ":hover span span": {
            borderColor: `${theme.blue}`,
        },
        ":first-of-type .muk-button__item": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .muk-button__item": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        },
    };
});
const Input = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("input")({}, (props) => {
    if (props["data-big"]) {
        return {
            ":checked + span span": {
                border: `6px solid white`,
            },
        };
    }
    else {
        return {
            ":checked + span span": {
                border: `6px solid ${props.theme.blue}`,
            },
        };
    }
});
const StyledInput = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("span")({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "text-top !important",
    transition: "border-color 0.2s",
    borderRadius: "100%",
    ":focus": {
        outline: "none",
    },
    ":active": {
        outline: "none",
    },
}, (props) => {
    if (props["data-big"]) {
        return {
            border: `1px solid ${props.theme.decoration}`,
        };
    }
    else {
        return {
            border: `1px solid ${props.theme.decoration}`,
        };
    }
});
/* harmony default export */ __webpack_exports__["a"] = (RadioInput);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Forms_TextInput__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_Grid__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_GridCell__ = __webpack_require__(43);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};









class Range extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* prefix */] + "input-range";
        this.state = {
            value: props.input.value ?
                props.input.value : props.default !== null ?
                props.default : (props.max - props.min) / 2 + props.min,
        };
        this.handleChange = __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default()(this.handleChange.bind(this), 200);
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.input.value !== this.props.input.value) {
            this.handleChange({ target: { value: nextProps.input.value } });
        }
    }
    handleChange(evt) {
        this.setState({ value: evt.target.value });
        return this.props.input.onChange(evt.target.value);
    }
    render() {
        const { labels, meta, input } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const value = this.state.value;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledField, Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_Layout_Grid__["a" /* default */], { cols: "100px auto" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Layout_GridCell__["a" /* default */], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__components_Forms_TextInput__["a" /* default */], { type: "number", max: this.props.max, min: this.props.min, step: this.props.step, input: {
                            value,
                            onChange: this.handleChange,
                        } })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Layout_GridCell__["a" /* default */], { style: { padding: "5px 0 5px 10px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Input, Object.assign({}, input, { className: `${this.name}__item
                                        ${__WEBPACK_IMPORTED_MODULE_4__config__["b" /* form */]}__input--text ${__WEBPACK_IMPORTED_MODULE_4__config__["b" /* form */]}__input--range`, type: "range", max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, value: value }))))));
    }
}
Range.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["b" /* defaultFieldProps */], { max: 50, min: 0, step: 1, default: null });
const StyledField = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["a" /* Field */])({
    " input[type=range]": {
        appearance: "none",
        width: "100%",
        margin: "5.5px 0",
    },
    " input[type=range]:focus": {
        outline: "none",
    },
}, (props) => {
    const thumbColor = props.theme.blue;
    const sliderColor = __WEBPACK_IMPORTED_MODULE_2_color__(props.theme.decoration).fade(0.5).string();
    const slider = {
        width: "100%",
        height: "6px",
        cursor: "pointer",
        background: "white",
        borderRadius: "10px",
        border: `1px solid ${sliderColor}`,
    };
    const thumb = {
        border: `8px solid ${__WEBPACK_IMPORTED_MODULE_2_color__(thumbColor).fade(0.2).string()}`,
        height: "25px",
        width: "25px",
        borderRadius: "100%",
        background: "#ffffff",
        cursor: "pointer",
        appearance: "none",
        marginTop: "-11px",
        transition: "border-color 0.3s",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
    };
    return {
        " input[type=range]::-webkit-slider-runnable-track": slider,
        " input[type=range]::-webkit-slider-thumb": thumb,
        " input[type=range]:hover::-webkit-slider-thumb": {
            borderColor: thumbColor,
        },
        " input[type=range]::-moz-range-track": Object.assign({}, slider),
        " input[type=range]::-moz-range-thumb": {
            height: "10px",
            width: "10px",
        },
        " input[type=range]:hover::-moz-range-thumb": {
            borderColor: thumbColor,
        },
    };
});
const Input = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("input")({
    padding: 0,
    border: "none",
    background: "transparent",
    appearance: "none",
});
/* harmony default export */ __webpack_exports__["a"] = (Range);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconChevronDown__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_unique_id__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Forms_Field__ = __webpack_require__(6);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};








class Select extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* prefix */] + "select";
    }
    renderOptions() {
        return this.props.options.map(option => {
            if (__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"](option)) {
                if (option.key) {
                    return option;
                }
                else {
                    const object = Object;
                    return object.assign({}, option, { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_unique_id__["a" /* default */])() });
                }
            }
            else {
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: option.value, key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_unique_id__["a" /* default */])() }, option.title));
            }
        });
    }
    render() {
        const { meta, input, labels } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_Forms_Field__["a" /* Field */], Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { position: "relative" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledSelect, Object.assign({}, input, { className: `${this.name}__item ${this.props.className}`, "aria-invalid": isInvalid ? 1 : 0 }), this.renderOptions()),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconChevronDown__["a" /* default */], { size: 10, style: { opacity: 0.6, position: "absolute", bottom: "9px",
                        right: "10px", pointerEvents: "none" } }))));
    }
}
Select.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_7__components_Forms_Field__["b" /* defaultFieldProps */], { options: [], size: 0 });
const StyledSelect = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("select")({
    boxSizing: "border-box",
    width: "100%",
    height: "40px",
    lineHeight: "40px",
    outline: "none",
    display: "inline-block",
    margin: "0",
    background: "white",
    color: "#333333",
    verticalAlign: "middle",
    padding: "0 10px",
    borderWidth: "1px",
    borderStyle: "solid",
    appearance: "none",
    transition: "border-color 0.2s",
    willChange: "border-color",
    ":focus": {
        outline: "none",
        border: "none",
    },
    ":active": {
        outline: "none",
        border: "none",
    },
    "::-ms-expand": {
        display: "none",
    },
    "::-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #000",
    },
}, (props) => {
    const theme = props.theme;
    let disabled = {};
    if (props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: __WEBPACK_IMPORTED_MODULE_3_color__(theme.grey).fade(0.5).string(),
        };
    }
    return Object.assign({ borderRadius: theme.radius, border: props["aria-invalid"] ? theme.input_border_error : theme.input_border, ":active": {
            border: theme.input_border_active,
        }, ":focus": {
            border: theme.input_border_active,
        } }, disabled);
});
/* harmony default export */ __webpack_exports__["a"] = (Select);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextInput__ = __webpack_require__(14);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





const StyledTextarea = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("textarea")(__WEBPACK_IMPORTED_MODULE_4__TextInput__["b" /* styles */], __WEBPACK_IMPORTED_MODULE_4__TextInput__["c" /* stylesProps */]);
class Textarea extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "textarea";
    }
    render() {
        const { input, labels, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__["a" /* Field */], Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledTextarea, Object.assign({}, input, { height: this.props.height, "aria-invalid": isInvalid ? 1 : 0, className: `${this.name}__input
                                ${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__input--text
                                ${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__input--textarea
                    `, placeholder: labels.placeholder }), input.value)));
    }
}
Textarea.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__["b" /* defaultFieldProps */], { height: 100 });
/* harmony default export */ __webpack_exports__["a"] = (Textarea);


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_dom_only_props__ = __webpack_require__(11);




const Fieldset = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FFieldset, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_dom_only_props__["a" /* default */])(props)),
        header && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], { type: "3" }, header),
        children));
};
const FFieldset = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("fieldset")({
    padding: 0,
    margin: 0,
});
/* harmony default export */ __webpack_exports__["a"] = (Fieldset);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__ = __webpack_require__(11);



const Section = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
    const prefix = props.prefix ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Prefix, null, props.prefix) : "";
    const suffix = props.suffix ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Suffix, null, props.suffix) : "";
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](SSection, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__["a" /* default */])(props)),
        header &&
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Header, null,
                prefix,
                header,
                suffix),
        children));
};
const Prefix = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    float: "left",
    margin: "-10px",
    padding: "10px",
    marginRight: "15px",
    paddingRight: "15px",
    borderRight: "1px solid #ccc",
});
const Suffix = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    float: "right",
    margin: "-10px",
    padding: "10px",
    marginLeft: "15px",
    paddingLeft: "15px",
    borderLeft: "1px solid #ccc",
});
const Header = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("h3")({
    fontWeight: "normal",
    fontSize: "15px",
    height: "63px",
}, (props) => {
    return {
        padding: `${props.theme.section_padding}`,
        margin: `-${props.theme.section_padding}!important`,
        marginBottom: "20px !important",
        background: props.theme.decoration_background,
        borderBottom: props.theme.section_border,
        borderRadius: `${props.theme.radius} ${props.theme.radius} 0 0`,
    };
});
const SSection = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("section")({
    marginBottom: "20px",
}, (props) => {
    return {
        background: props.theme.background,
        color: props.theme.text,
        borderRadius: props.theme.radius,
        border: props.theme.section_border,
        padding: props.theme.section_padding,
    };
});
/* harmony default export */ __webpack_exports__["a"] = (Section);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);



class Nav extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "top_nav";
    }
    renderLinks() {
        const { links } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: `${this.name}__list muk-helper-clearfix` }, links.length > 0 ? links : this.props.children));
    }
    render() {
        const className = `${this.name} ${this.props.addClass} ${this.props.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, { className: className, style: this.props.style },
            this.props.logo &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Logo, null, this.props.logo),
            this.renderLinks()));
    }
}
Nav.defaultProps = {
    links: [],
    style: {},
    addClass: "",
    className: "",
};
const Logo = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
});
const Component = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("nav")({
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
});
/* harmony default export */ __webpack_exports__["a"] = (Nav);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(3);




class NavLink extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* prefix */] + "top_nav__item";
    }
    render() {
        const { link, active } = this.props;
        let className = `${this.name}`;
        if (active) {
            className += ` ${this.name}--active`;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Link, { className: `${className}`, selected: this.props.active, style: this.props.style }, link));
    }
}
NavLink.defaultProps = {
    active: false,
    link: (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" })),
    style: {},
};
const Link = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("li")({
    float: "left",
    marginRight: "1em",
    listStyleType: "none",
    marginBottom: "-1px",
    "& a": {
        padding: "5px 10px 7px 10px",
        display: "inline-block",
        cursor: "pointer",
        transition: "border-color 0.3s",
    },
    "& a:active, & a:focus, & a:visited, & a:hover": {
        textDecoration: "none",
        outline: "none",
    },
}, (props) => {
    return {
        "& a": {
            background: props.selected ? props.theme.nav_link_background_active : props.theme.nav_link_background,
            borderBottom: props.theme.nav_link_border,
            borderBottomColor: props.selected ? props.theme.nav_link_color : "transparent",
            color: props.selected ? props.theme.text : __WEBPACK_IMPORTED_MODULE_2_color__(props.theme.text).fade(0.3).string(),
        },
        "& a:visited": {
            color: props.selected ? props.theme.text : __WEBPACK_IMPORTED_MODULE_2_color__(props.theme.text).fade(0.3).string(),
        },
        "& a:hover, & a:focus, & a:active": {
            color: props.theme.text,
        },
    };
});
/* harmony default export */ __webpack_exports__["a"] = (NavLink);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_unique_id__ = __webpack_require__(20);





class Paginator extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* prefix */] + "paginator";
        this.state = {
            id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_unique_id__["a" /* default */])(),
            current: 2,
        };
    }
    renderButton(label, page, clickable, active = false) {
        const key = `${this.state.id}-${label}-${page}`;
        const classLink = `${this.name}__item link-class`;
        let classDisabled = `${this.name}__item ${this.name}__item--disabled`;
        if (active) {
            classDisabled = `${this.name}__item ${this.name}__item--active`;
        }
        if (clickable) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Button, { className: classLink, href: "#", onClick: (evt) => { this.pageClicked(evt, page); }, key: key }, label);
        }
        else if (active) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Active, { className: classDisabled, key: key }, label);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Disabled, { className: classDisabled, key: key }, label);
        }
    }
    renderMainButtons() {
        const buttons = [];
        let range;
        if (this.props.maxLinks % 2 === 0) {
            range = (this.props.maxLinks - 2) / 2;
        }
        else {
            range = (this.props.maxLinks - 1) / 2;
        }
        let topLimit = this.props.currentPage + range;
        let bottomLimit = this.props.currentPage - range;
        if (topLimit > this.props.lastPage) {
            const diff = topLimit - this.props.lastPage;
            topLimit -= diff;
            bottomLimit -= diff;
        }
        if (bottomLimit < 1) {
            const diff = Math.abs(1 - bottomLimit);
            topLimit += diff;
            bottomLimit += diff;
        }
        if (topLimit > this.props.lastPage) {
            topLimit = this.props.lastPage;
        }
        for (let i = bottomLimit; i <= topLimit; i++) {
            const button = this.renderButton(i, i, i !== this.props.currentPage, i === this.props.currentPage);
            buttons.push(button);
        }
        return buttons;
    }
    renderPreviousButton() {
        return this.renderButton(this.props.labelPrevious, this.props.currentPage - 1, this.props.currentPage !== 1);
    }
    renderNextButton() {
        return this.renderButton(this.props.labelNext, this.props.currentPage + 1, this.props.currentPage !== this.props.lastPage);
    }
    renderFirstButton() {
        return this.renderButton(this.props.labelFirst, 1, this.props.currentPage !== 1);
    }
    renderLastButton() {
        return this.renderButton(this.props.labelLast, this.props.lastPage, this.props.currentPage !== this.props.lastPage);
    }
    pageClicked(evt, pageNumber) {
        evt.preventDefault();
        this.props.onPageChange(pageNumber);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { margin: "10px 0", textAlign: "center", className: this.name, "data-active": this.props.currentPage, style: this.props.style },
            this.props.showFirstAndLast && this.renderFirstButton(),
            this.props.showPrevAndNext && this.renderPreviousButton(),
            this.renderMainButtons(),
            this.props.showPrevAndNext && this.renderNextButton(),
            this.props.showFirstAndLast && this.renderLastButton()));
    }
}
Paginator.defaultProps = {
    currentPage: 1,
    onPageChange: () => {
    },
    firstPage: 1,
    lastPage: 1,
    showPrevAndNext: true,
    showFirstAndLast: false,
    labelLast: "« Last",
    labelFirst: "First »",
    labelNext: "Next",
    labelPrevious: "Previous",
    maxLinks: 5,
    style: {},
};
const Button = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("a")({
    boxSizing: "border-box",
    display: "inline-block",
    height: "42px",
    minWidth: "42px",
    lineHeight: "40px",
    padding: "0px 10px 0 10px",
    textDecoration: "none",
    margin: "0 2px",
    border: `1px solid transparent`,
    fontWeight: "bold",
    ":active": {
        textDecoration: "none",
    },
    ":visited": {
        textDecoration: "none",
    },
    ":focus": {
        textDecoration: "none",
    },
}, (props) => {
    return {
        "&": {
            borderRadius: props.theme.radius,
            color: props.theme.blue,
        },
        ":hover": {
            background: props.theme.blue,
            color: "white",
            textDecoration: "none",
        },
    };
});
const Disabled = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(Button)({
    display: "inline-block",
    opacity: 0.2,
    color: "black",
    pointerEvents: "none",
    ":hover": {
        background: "initial",
        color: "black",
    },
});
const Active = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(Button)({
    opacity: 1,
    color: "black !important",
}, (props) => {
    return {
        background: props.theme.decoration_background,
        border: `1px solid ${props.theme.decoration} !important`,
        ":hover": {
            background: props.theme.decoration_background,
            border: `1px solid ${props.theme.decoration}`,
            color: "black !important",
            textDecoration: "none",
        },
    };
});
/* harmony default export */ __webpack_exports__["a"] = (Paginator);


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(3);





class Placeholder extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* prefix */] + "placeholder";
    }
    render() {
        const { addClass, style, width, height } = this.props;
        const className = `${this.name} ${addClass ? addClass : ""}`;
        const object = Object;
        const styles = object.assign({}, { paddingBottom: `${(height * 100 / width)}%` }, style);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { position: "relative", className: className, style: styles },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Shadow, { className: `${this.name}__shadow` },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { display: "table", width: "100%", height: "100%", className: `${this.name}__wrapper` },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Container, { className: `${this.name}__container` }, this.props.children)))));
    }
}
Placeholder.defaultProps = {
    width: 100,
    height: 100,
    style: {},
    addClass: "",
};
const Shadow = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
    border: "1px solid white",
}, (props) => {
    return {
        background: __WEBPACK_IMPORTED_MODULE_3_color__(props.theme.decoration).fade(0.8).string(),
        borderColor: __WEBPACK_IMPORTED_MODULE_3_color__(props.theme.decoration).fade(0.2).string(),
    };
});
const Container = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
});
/* harmony default export */ __webpack_exports__["a"] = (Placeholder);


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);



class Bubble extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "popup_hint__bubble";
    }
    componentDidMount() {
        this.popup = document.createElement("span");
        this.popup.className = `${this.name}__wrapper`;
        this.popup.ref = "bubble";
        document.getElementById("app").appendChild(this.popup);
        this._renderLayer();
    }
    componentDidUpdate() {
        this._renderLayer();
    }
    componentWillUnmount() {
        if (this.popup) {
            try {
                __WEBPACK_IMPORTED_MODULE_1_react_dom__["unmountComponentAtNode"](this.popup);
                document.getElementById("app").removeChild(this.popup);
            }
            catch (e) {
            }
        }
    }
    _renderLayer() {
        __WEBPACK_IMPORTED_MODULE_1_react_dom__["render"]((__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, this.props.children)), this.popup);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Bubble);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconHintInfo__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reglendo_mergado_ui_icons_lib_icons_IconHintHelp__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styled_themes_default__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Bubble__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_debounce__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_debounce__);










class PopupHint extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* prefix */] + "popup_hint";
        this.state = {
            expanded: false,
        };
        this.collapse = __WEBPACK_IMPORTED_MODULE_9_lodash_debounce___default()(this.collapse.bind(this), 200);
        this.expand = __WEBPACK_IMPORTED_MODULE_9_lodash_debounce___default()(this.expand.bind(this), 100);
    }
    expand(event) {
        event.preventDefault();
        this.setState({ expanded: true });
    }
    collapse() {
        const hint = this.refs.hint;
        this.fadeOut(this.refs.hint, () => {
            this.setState({ expanded: false });
            hint.style.display = "none";
        });
    }
    componentDidMount() {
        this.styleElements();
    }
    componentDidUpdate(prevProps, prevState) {
        this.styleElements();
    }
    getWindowWidth() {
        if (window.innerWidth) {
            return window.innerWidth;
        }
        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        }
        if (document.body) {
            return document.body.clientWidth;
        }
        return 0;
    }
    styleElements() {
        const buttonPosition = this.getPosition(this.refs.button);
        const windowWidth = this.getWindowWidth();
        const widthLeft = buttonPosition.left;
        const windowRight = windowWidth - buttonPosition.left;
        const renderLeft = widthLeft > windowWidth / 2;
        this.styleHint(buttonPosition, renderLeft);
    }
    styleArrow(left, right) {
        const arrow = this.refs.arrow;
        arrow.style.left = left;
        arrow.style.right = right;
    }
    styleHint(buttonPosition, renderLeft) {
        const hint = this.refs.hint;
        hint.style.opacity = `0`;
        hint.style.display = "block";
        hint.style.pointerEvents = "none";
        let newX;
        let arrowLeft;
        let arrowRight;
        if (renderLeft) {
            newX = buttonPosition.left - hint.offsetWidth + 30;
            arrowLeft = "";
            arrowRight = 11 + "px";
        }
        else {
            newX = (buttonPosition.left - 10) > 0 ? (buttonPosition.left - 10) : 0;
            arrowLeft = buttonPosition.left - newX + "px";
            arrowRight = "";
        }
        if (hint.style.top === `${buttonPosition.top - hint.offsetHeight}px` &&
            hint.style.left === `${newX}px`) {
            if (this.state.expanded) {
                this.styleArrow(arrowLeft, arrowRight);
                this.fadeIn(this.refs.hint);
                this.refs.hint.focus();
            }
        }
        else {
            hint.style.top = `${buttonPosition.top - hint.offsetHeight}px`;
            hint.style.left = `${newX}px`;
            if (this.state.expanded) {
                this.styleArrow(arrowLeft, arrowRight);
                this.fadeIn(this.refs.hint);
                this.refs.hint.focus();
            }
        }
    }
    fadeOut(el, callback) {
        const hint = this.refs.hint;
        if (!el) {
            return;
        }
        el.style.opacity = 1;
        (function fade() {
            el.style.opacity -= .1;
            if (el.style.opacity < 0) {
                callback();
            }
            else {
                requestAnimationFrame(fade);
            }
        })();
    }
    fadeIn(el, display = null) {
        el.style.opacity = 0;
        el.style.display = "block";
        (function fade() {
            let val = parseFloat(el.style.opacity);
            val += 1;
            if (!(val > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }
    getPosition(element) {
        let top = 8;
        let left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top,
            left,
        };
    }
    getArrowPosition(buttonPosition) {
        return {
            top: buttonPosition.top - 15 / 2,
            left: buttonPosition.left - 21 / 2,
        };
    }
    render() {
        const object = Object;
        const style = object.assign({
            display: this.state.expanded ? "" : "none",
            position: "absolute",
            zIndex: 10000,
            outline: "none",
            maxWidth: "600px",
        }, this.props.style);
        const hint = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__Bubble__["a" /* default */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: "hint", className: `${this.name}__bubble`, style: style, tabIndex: 0, onBlur: this.state.expanded ? this.collapse : () => { } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { position: "relative", padding: "0 0 10px 0", className: `${this.name}__innerwrapper` },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](HintContent, { className: `${this.name}__content` }, this.props.children),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: "arrow", style: {
                            width: "12px",
                            height: "12px",
                            position: "absolute",
                            display: "inline-block",
                            zIndex: 1000,
                            bottom: "9px"
                        } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](HintArrow, { className: `${this.name}__arrow` }))))));
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { cursor: this.props.hover ? "normal" : "pointer", verticalAlign: "text-bottom", display: "inline-block", className: this.name, style: Object.assign({}, this.props.style) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: "button", className: `${this.name}__trigger ${this.state.expanded ? "active" : ""}`, onMouseDown: this.state.expanded ? () => { } : this.expand, onMouseEnter: !this.props.hover || this.state.expanded ? () => { } : this.expand, onMouseLeave: this.props.hover && this.state.expanded ? this.collapse : () => { }, onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                } },
                this.props.hint ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconHintInfo__["a" /* default */], { size: 16 }) : null,
                this.props.help ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__reglendo_mergado_ui_icons_lib_icons_IconHintHelp__["a" /* default */], { size: 16 }) : null,
                this.props.icon ? this.props.icon : null),
            hint));
    }
}
PopupHint.defaultProps = {
    icon: null,
    style: {},
    hint: false,
    help: false,
    hover: false,
};
const fontFamily = "Arial, Helvetica, Verdana, Sans-serif";
const HintArrow = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    display: "inline-block",
    width: "12px",
    height: "12px",
    background: __WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["a" /* default */].yellow,
    transform: "rotate(45deg)",
    zIndex: 11,
    borderRight: "1px solid " + __WEBPACK_IMPORTED_MODULE_3_color__(__WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["a" /* default */].yellow).darken(0.3).string(),
    borderBottom: "1px solid " + __WEBPACK_IMPORTED_MODULE_3_color__(__WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["a" /* default */].yellow).darken(0.3).string(),
});
const HintContent = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({
    fontFamily: fontFamily,
    maxHeight: "200px",
    padding: "10px",
    textAlign: "left",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    zIndex: 10,
    background: __WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["a" /* default */].yellow,
    border: "1px solid black",
    boxShadow: "3px 3px 12px -3px rgba(0,0,0,0.25)",
    borderColor: __WEBPACK_IMPORTED_MODULE_3_color__(__WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["a" /* default */].yellow).darken(0.3).string(),
    borderRadius: "2px"
});
/* harmony default export */ __webpack_exports__["a"] = (PopupHint);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(3);





class Spinner extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* prefix */] + "spinner";
        this.state = {
            loaded: false,
        };
    }
    updateState(props) {
        let loaded = this.state.loaded;
        if (props.loaded) {
            loaded = !!props.loaded;
        }
        this.setState({
            loaded,
        });
    }
    componentDidMount() {
        this.updateState(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps);
    }
    render() {
        if (this.state.loaded) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { opacity: 1 } }, this.props.children));
        }
        const { size, type, color, speed } = this.props;
        const containerStyle = { width: size, height: size };
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { display: "inline-block", overflow: "hidden", className: `${this.name} ${this.name}--${this.props.type}`, style: containerStyle },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](AnimatedWrapper, Object.assign({}, this.props, { className: `${this.name}__wrapper` }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `${this.name}__content`, style: { opacity: 0 } }, this.props.children))));
    }
}
Spinner.defaultProps = {
    type: "default",
    size: 30,
    loaded: false,
    color: "white",
    style: {},
    speed: 1,
};
const mergadoColors = {
    left: "#7fba2c",
    bottom: "#007b20",
    right: "#00a9b8",
    top: "transparent",
};
const Wrapper = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("div")({}, (props) => {
    let type = {};
    let color = {};
    if (props.type === "mergado") {
        type = {
            borderWidth: (props.size / 2) + "px",
            boxSizing: "border-box",
            borderStyle: "solid",
            borderColor: `${mergadoColors.top} ${mergadoColors.left} ${mergadoColors.right} ${mergadoColors.bottom}`,
            position: "relative",
            ".muk-spinner__content": {
                maxWidth: 0,
                maxHeight: 0,
                overflow: "hidden",
            },
        };
    }
    else {
        if (props.color === "black") {
            color = { borderColor: `rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)` };
        }
        else if (props.color === "green") {
            color = { borderColor: `rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)` };
        }
        else if (props.color === "blue") {
            color = { borderColor: `rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)` };
        }
        else {
            color = { borderColor: `
                                        ${__WEBPACK_IMPORTED_MODULE_3_color__(props.theme.decoration).fade(1).string()} 
                                        ${__WEBPACK_IMPORTED_MODULE_3_color__(props.theme.decoration).fade(0.8).string()} 
                                        ${__WEBPACK_IMPORTED_MODULE_3_color__(props.theme.decoration).fade(0.6).string()} 
                                        ${__WEBPACK_IMPORTED_MODULE_3_color__(props.theme.decoration).fade(0.4).string()}
                                        ` };
        }
        type = {
            borderStyle: props.type === "default" ? "solid" : props.type,
            borderWidth: (props.type === "dashed" || props.type === "dotted") ? "0.1em" : "0.2em",
            display: "inline-block",
            margin: "0px",
            boxSizing: "border-box",
            position: "relative",
            transform: "translate3d(0,0,0)",
            willChange: "transform",
            verticalAlign: "top",
        };
    }
    return Object.assign({ width: props.size + "px", height: props.size + "px", fontSize: props.size + "px", borderRadius: "100%" }, type, color);
});
const animations = props => {
    if (props.type === "mergado") {
        const animation = {
            "@keyframes pulse": {
                "0%:": {
                    borderColor: `${mergadoColors.top} ${mergadoColors.right} ${mergadoColors.bottom} ${mergadoColors.left}`
                },
                "25%": {
                    borderColor: `${mergadoColors.bottom} ${mergadoColors.left} ${mergadoColors.top} ${mergadoColors.right}`
                },
                "50%": {
                    borderColor: `${mergadoColors.right} ${mergadoColors.top} ${mergadoColors.left} ${mergadoColors.bottom}`
                },
                "75%": {
                    borderColor: `${mergadoColors.left} ${mergadoColors.bottom} ${mergadoColors.right} ${mergadoColors.top}`
                },
                "100%": {
                    borderColor: `${mergadoColors.top} ${mergadoColors.right} ${mergadoColors.bottom} ${mergadoColors.left}`
                }
            }
        };
        return Object.assign({}, animation, { animation: `pulse 10s infinite linear` });
    }
    else {
        const animation = {
            "@keyframes spin": {
                "0%": {
                    transform: "rotate(0deg)",
                },
                "100%": {
                    transform: "rotate(360deg)",
                }
            }
        };
        return Object.assign({}, animation, { animation: `spin 1.2s infinite linear` });
    }
};
const AnimatedWrapper = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()(Wrapper)(animations);
/* harmony default export */ __webpack_exports__["a"] = (Spinner);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Toast__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_unique_id__ = __webpack_require__(20);




class Toasts extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* prefix */] + "toasts-container";
        this.state = {
            toasts: [],
        };
    }
    isPaused() {
        return this.props.paused;
    }
    renderToasts() {
        return this.props.toasts.map((toast) => {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_unique_id__["a" /* default */])(), className: `${this.name}__item` },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Toast__["a" /* default */], Object.assign({ isPaused: this.isPaused.bind(this) }, toast.props))));
        });
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `${this.name}`, style: this.props.style },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `${this.name}__wrapper` }, this.renderToasts())));
    }
}
Toasts.defaultProps = {
    toasts: [],
    paused: false,
    style: {},
};
/* harmony default export */ __webpack_exports__["a"] = (Toasts);


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(3);




class WizardNav extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* prefix */] + "wizard_nav";
    }
    renderLinks() {
        const { links } = this.props;
        const classList = `${this.name}__list`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["b" /* Ul */], { listStyle: "none", padding: "0", margin: "0", position: "relative", overflow: "hidden", className: classList }, links));
    }
    render() {
        const className = `${this.name}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Nav, { className: className, style: this.props.style }, this.renderLinks()));
    }
}
WizardNav.defaultProps = {
    links: [],
    style: {},
};
const Nav = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("nav")({
    padding: "0",
    margin: "20px 0",
    listStyle: "none",
}, (props) => {
    return {
        borderRadius: props.theme.radius,
        backgroundColor: props.theme.grey,
    };
});
/* harmony default export */ __webpack_exports__["a"] = (WizardNav);


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);



class WizardStep extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "wizard_nav__item";
    }
    render() {
        const { link, active, style, onClick } = this.props;
        let className = `${this.name}`;
        if (active) {
            className += ` ${this.name}--active`;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { className: `${className}`, style: style, title: " ", selected: active },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Link, { className: `${this.name}__step`, onClick: onClick }, link)));
    }
}
WizardStep.defaultProps = {
    active: false,
    link: "",
    style: {},
    onClick: () => { },
};
const Item = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("li")({
    display: "inline-block",
    margin: 0,
    padding: 0,
    ":first-of-type .muk-wizard_nav__item__step": {
        marginLeft: "20px",
    },
    "&:after": {
        content: "attr(title)",
        display: "inline-block",
        width: "32px",
        height: "32px",
        transform: "rotate(-45deg)",
        verticalAlign: "middle",
        borderWidth: "0 3px 3px 0",
        marginRight: "-14px",
        marginLeft: "-14px",
        clipCath: "polygon(100% 0, 100% 50%, 100% 100%, 0 100%)",
        position: "relative",
        zIndex: 1,
    },
}, (props) => {
    return {
        background: props.selected ? props.theme.blue : "transparent",
        ":after": {
            borderColor: props.theme.grey,
            background: props.selected ? props.theme.blue : props.theme.grey,
        },
        ":first-of-type": {
            borderRadius: props.theme.radius,
        },
    };
});
const Link = __WEBPACK_IMPORTED_MODULE_1_cxs_component___default()("a")({
    fontSize: "13px",
    display: "inline-block",
    height: "36px",
    lineHeight: "36px",
    color: "#fff",
    marginLeft: "35px",
    minWidth: "60px",
    position: "relative",
    zIndex: 2,
    ":hover": {
        textDecoration: "none",
        color: "#fff",
    },
    ":focus": {
        textDecoration: "none",
        color: "#fff",
    },
    ":active": {
        textDecoration: "none",
        color: "#fff",
    }
});
/* harmony default export */ __webpack_exports__["a"] = (WizardStep);


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_color__);

const colors = {
    blue: "#009ba9",
    green: "#69A120",
    red: "#EA4E4B",
    grey: "#ccc",
    yellow: "#FFEC88",
    orange: "#FF9500",
    text: "#333",
    background: "transparent",
    decoration: "#dbcba3",
    decoration_background: "white",
};
/* unused harmony export colors */

const theme = Object.assign({}, colors, { warning: colors.orange, error: colors.red, success: colors.green, info: "white", inactive: colors.grey, message: colors.yellow, radius: "0px", selected_background: __WEBPACK_IMPORTED_MODULE_0_color__(colors.yellow).string(), hover_background: __WEBPACK_IMPORTED_MODULE_0_color__(colors.yellow).fade(0.5).string(), section_border: "none", section_padding: "0", form_label_text_size: "14px", form_label_text_weight: "normal", input_border: "1px solid " + colors.decoration, input_border_active: "1px solid " + colors.decoration, input_border_error: "1px solid " + colors.decoration, button_text_transform: "uppercase", button_text_size: "14px", button_text_weight: "bold", table_border_vertical: "1px dotted " + colors.decoration, table_border_horizontal: "1px solid " + colors.decoration, table_header_text_size: "13px", table_header_text_transform: "none", table_cell_padding: "6px 10px", table_cell_text_size: "14px", nav_background: colors.decoration, nav_link_color: colors.text, nav_link_background: "transparent", nav_link_background_active: colors.decoration, nav_link_border: "none" });
/* harmony default export */ __webpack_exports__["a"] = (theme);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(49);
var route = __webpack_require__(112);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(49);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

// https://jsperf.com/object-keys-vs-for-in-with-closure/3
var models = Object.keys(conversions);

function buildGraph() {
	var graph = {};

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 132, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 255, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 203],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [119, 128, 144],
  slategrey: [119, 128, 144],
  snow: [255, 255, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 5]
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// based on component/color-parser

var hsl2rgb = __webpack_require__(117);
var colors = __webpack_require__(113);

function parse(str) {
  return named(str)
    || hex3(str)
    || hex6(str)
    || rgb(str)
    || rgba(str)
    || hsl(str)
    || hsla(str);
}

function named(str) {
  var c = colors[str.toLowerCase()];
  if(!c) return;
  return {
    r: c[0],
    g: c[1],
    b: c[2],
    a: 100
  };
}

function rgb(str) {
  if (0 == str.indexOf('rgb(')) {
    str = str.match(/rgb\(([^)]+)\)/)[1];
    var parts = str.split(/ *, */).map(Number);
    return {
      r: parts[0],
      g: parts[1],
      b: parts[2],
      a: 100
    };
  }
}

function rgba(str) {
  if(str.indexOf('rgba(') === 0) {
    str = str.match(/rgba\(([^)]+)\)/)[1];
    var parts = str.split(/ *, */).map(Number);

    return {
      r: parts[0],
      g: parts[1],
      b: parts[2],
      a: parts[3] * 100
    };
  }
}

function hex6(str) {
  if('#' === str[0] && 7 === str.length) {
    return {
      r: parseInt(str.slice(1, 3), 16),
      g: parseInt(str.slice(3, 5), 16),
      b: parseInt(str.slice(5, 7), 16),
      a: 100
    };
  }
}

function hex3(str) {
  if('#' === str[0] && 4 === str.length) {
    return {
      r: parseInt(str[1] + str[1], 16),
      g: parseInt(str[2] + str[2], 16),
      b: parseInt(str[3] + str[3], 16),
      a: 100
    };
  }
}

function hsl(str) {
  if(str.indexOf('hsl(') === 0) {
    str = str.match(/hsl\(([^)]+)\)/)[1];
    var parts = str.split(/ *, */);

    var h = parseInt(parts[0], 10);
    var s = parseInt(parts[1], 10);
    var l = parseInt(parts[2], 10);

    var rgba = hsl2rgb(h, s, l);
    rgba.a = 100;

    return rgba;
  }
}

function hsla(str) {
  if(str.indexOf('hsla(') === 0) {
    str = str.match(/hsla\(([^)]+)\)/)[1];
    var parts = str.split(/ *, */);

    var h = parseInt(parts[0], 10);
    var s = parseInt(parts[1], 10);
    var l = parseInt(parts[2], 10);
    var a = parseInt(parts[3] * 100, 10);

    var rgba = hsl2rgb(h, s, l);
    rgba.a = a;

    return rgba;
  }
}

module.exports = parse;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function(hex) {
  if(hex[0] === '#') hex = hex.substr(1);

  if(hex.length === 6) {
    return {
      r: parseInt(hex.substr(0, 2), 16),
      g: parseInt(hex.substr(2, 2), 16),
      b: parseInt(hex.substr(4, 2), 16)
    };
  } else if(hex.length === 3) {
    return {
      r: parseInt(hex[0]+hex[0], 16),
      g: parseInt(hex[1]+hex[1], 16),
      b: parseInt(hex[2]+hex[2], 16)
    };
  }
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function(h, s, l) {
  s *= ((l < 50) ? l : (100 - l)) / 100;

  console.log('s', s);

  return {
    h: h,
    s: 2 * s / (l+s) * 100,
    v: l + s
  };
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var hsl2hsv = __webpack_require__(116);
var hsv2rgb = __webpack_require__(29);

module.exports = function(h, s, l) {
  var hsv = hsl2hsv(h, s, l);
  return hsv2rgb(hsv.h, hsv.s, hsv.v);
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var hsv2rgb = __webpack_require__(29);
var rgb2hex = __webpack_require__(22);

module.exports = function(h, s, v) {
  var rgb = hsv2rgb(h, s, v);
  return rgb2hex(rgb.r, rgb.g, rgb.b);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var rgba2rgb = __webpack_require__(120);
var rgb2hex = __webpack_require__(22);

module.exports = function(r, g, b, a) {
  var rgb = rgba2rgb(r, g, b, a);
  return rgb2hex(rgb.r, rgb.g, rgb.b);
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending
module.exports = function(r, g, b, a) {
  a = a / 100;

  return {
    r: parseInt((1 - a) * 255 + a * r, 10),
    g: parseInt((1 - a) * 255 + a * g, 10),
    b: parseInt((1 - a) * 255 + a * b, 10)
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(52);
var swizzle = __webpack_require__(203);

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = assignStyle;
function assignStyle(base) {
  for (var _len = arguments.length, extendingStyles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extendingStyles[_key - 1] = arguments[_key];
  }

  for (var i = 0, len = extendingStyles.length; i < len; ++i) {
    var style = extendingStyles[i];

    for (var property in style) {
      var value = style[property];
      var baseValue = base[property];

      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !Array.isArray(value)) {
        base[property] = assignStyle({}, baseValue, value);
        continue;
      }

      base[property] = value;
    }
  }

  return base;
}
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cssifyObject;

var _cssifyDeclaration = __webpack_require__(54);

var _cssifyDeclaration2 = _interopRequireDefault(_cssifyDeclaration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cssifyObject(style) {
  var css = '';

  for (var property in style) {
    var value = style[property];
    if (typeof value !== 'string' && typeof value !== 'number') {
      continue;
    }

    // prevents the semicolon after
    // the last rule declaration
    if (css) {
      css += ';';
    }

    css += (0, _cssifyDeclaration2.default)(property, value);
  }

  return css;
}
module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignStyle = __webpack_require__(122);

var _assignStyle2 = _interopRequireDefault(_assignStyle);

var _camelCaseProperty = __webpack_require__(53);

var _camelCaseProperty2 = _interopRequireDefault(_camelCaseProperty);

var _cssifyDeclaration = __webpack_require__(54);

var _cssifyDeclaration2 = _interopRequireDefault(_cssifyDeclaration);

var _cssifyObject = __webpack_require__(123);

var _cssifyObject2 = _interopRequireDefault(_cssifyObject);

var _hyphenateProperty = __webpack_require__(21);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedProperty = __webpack_require__(125);

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

var _isPrefixedValue = __webpack_require__(15);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _isUnitlessProperty = __webpack_require__(126);

var _isUnitlessProperty2 = _interopRequireDefault(_isUnitlessProperty);

var _normalizeProperty = __webpack_require__(127);

var _normalizeProperty2 = _interopRequireDefault(_normalizeProperty);

var _resolveArrayValue = __webpack_require__(128);

var _resolveArrayValue2 = _interopRequireDefault(_resolveArrayValue);

var _unprefixProperty = __webpack_require__(55);

var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

var _unprefixValue = __webpack_require__(129);

var _unprefixValue2 = _interopRequireDefault(_unprefixValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  assignStyle: _assignStyle2.default,
  camelCaseProperty: _camelCaseProperty2.default,
  cssifyDeclaration: _cssifyDeclaration2.default,
  cssifyObject: _cssifyObject2.default,
  hyphenateProperty: _hyphenateProperty2.default,
  isPrefixedProperty: _isPrefixedProperty2.default,
  isPrefixedValue: _isPrefixedValue2.default,
  isUnitlessProperty: _isUnitlessProperty2.default,
  normalizeProperty: _normalizeProperty2.default,
  resolveArrayValue: _resolveArrayValue2.default,
  unprefixProperty: _unprefixProperty2.default,
  unprefixValue: _unprefixValue2.default
};
module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedProperty;
var regex = /^(Webkit|Moz|O|ms)/;

function isPrefixedProperty(property) {
  return regex.test(property);
}
module.exports = exports["default"];

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUnitlessProperty;

var _hyphenateProperty = __webpack_require__(21);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unitlessProperties = {
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};


var prefixedUnitlessProperties = ['animationIterationCount', 'boxFlex', 'boxFlexGroup', 'boxOrdinalGroup', 'columnCount', 'flex', 'flexGrow', 'flexPositive', 'flexShrink', 'flexNegative', 'flexOrder', 'gridRow', 'gridColumn', 'order', 'lineClamp'];

var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

function getPrefixedProperty(prefix, property) {
  return prefix + property.charAt(0).toUpperCase() + property.slice(1);
}

// add all prefixed properties to the unitless properties
for (var i = 0, len = prefixedUnitlessProperties.length; i < len; ++i) {
  var property = prefixedUnitlessProperties[i];
  unitlessProperties[property] = true;

  for (var j = 0, jLen = prefixes.length; j < jLen; ++j) {
    unitlessProperties[getPrefixedProperty(prefixes[j], property)] = true;
  }
}

// add all hypenated properties as well
for (var _property in unitlessProperties) {
  unitlessProperties[(0, _hyphenateProperty2.default)(_property)] = true;
}

function isUnitlessProperty(property) {
  return unitlessProperties.hasOwnProperty(property);
}
module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeProperty;

var _camelCaseProperty = __webpack_require__(53);

var _camelCaseProperty2 = _interopRequireDefault(_camelCaseProperty);

var _unprefixProperty = __webpack_require__(55);

var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeProperty(property) {
  return (0, _unprefixProperty2.default)((0, _camelCaseProperty2.default)(property));
}
module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveArrayValue;

var _hyphenateProperty = __webpack_require__(21);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveArrayValue(property, value) {
  var hyphenatedProperty = (0, _hyphenateProperty2.default)(property);

  return value.join(';' + hyphenatedProperty + ':');
}
module.exports = exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unprefixValue;
var prefixRegex = /(-ms-|-webkit-|-moz-|-o-)/g;

function unprefixValue(value) {
  if (typeof value === 'string') {
    return value.replace(prefixRegex, '');
  }

  return value;
}
module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var h = __webpack_require__(0).createElement;
var PropTypes = __webpack_require__(35);
var cxs = __webpack_require__(131);

module.exports = function (C) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var Comp = function Comp(props) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var stylePropKeys = Object.keys(Comp.propTypes || {});
      var styleProps = Object.assign({ theme: context.theme || {} }, props);

      var next = {};
      for (var key in props) {
        if (stylePropKeys.includes(key)) continue;
        next[key] = props[key];
      }
      next.className = [next.className].concat(_toConsumableArray(args.map(function (a) {
        return typeof a === 'function' ? a(styleProps) : a;
      }).filter(function (s) {
        return s !== null;
      }).map(function (s) {
        return cxs(s);
      }))).join(' ').trim();

      return h(C, next);
    };

    Comp.contextTypes = {
      theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    };

    return Comp;
  };
};

module.exports.css = cxs.css;
module.exports.reset = cxs.reset;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _static = __webpack_require__(142);

var _static2 = _interopRequireDefault(_static);

var _cssInJsUtils = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cache = {};
var rules = [];
var prefix = '#app ';
var insert = function insert(rule) {
  return rules.push(rule);
};
var hyph = function hyph(s) {
  return s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase();
};
var mx = function mx(rule, media) {
  return media ? media + '{' + rule + '}' : rule;
};
var qts = function qts(prop, val) {
  return prop === "content" && val.substring(0, 4) !== "attr" ? '"' + val + '"' : val;
};
var rx = function rx(cn, prop, val) {
  return cn.replace("!", "") + '{' + hyph(prop) + ':' + qts(prop, val) + '}';
};
var noAnd = function noAnd(s) {
  return s.replace(/&/g, '');
};
var multi = function multi(cn, child) {
  var r = [];
  child.split(',').forEach(function (o) {
    r.push((cn === '' ? '' : prefix + '.' + cn) + o);
  });
  return r.join(',');
};
var anim = function anim(obj) {
  return Object.keys(obj).map(function (key) {
    if (typeof obj[key] === 'string') {
      return hyph(key) + ': ' + obj[key] + ';';
    } else {
      return key + ' {' + anim(obj[key]) + '}';
    }
  }).join(' ');
};
var parse = function parse(obj) {
  var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var media = arguments[2];
  var prep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;


  return Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === null) return '';

    if (Array.isArray(val)) {
      val = (0, _cssInJsUtils.resolveArrayValue)(key, val);
    } else if (typeof val === 'object') {
      if (/^@keyframes/.test(key)) {
        insert(key + '{' + anim(val) + '}');
        return;
      } else {
        var m2 = /^@/.test(key) ? key : null;
        var c2 = m2 ? child : child + key;
        return parse(val, c2, m2 || media);
      }
    }
    var _key = key + val + child + media;
    if (cache[_key]) return cache[_key];
    var className = child[0] === "!" ? "" : 'x' + rules.length.toString(36);

    insert(mx(rx(multi(className, noAnd(child)), key, val), media));
    cache[_key] = className;
    return className;
  }).join(' ');
};
module.exports = function () {
  for (var _len = arguments.length, styles = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  return styles.map(function (style) {
    var prefixedStyle = (0, _static2.default)(style);
    return parse(prefixedStyle);
  }).join(' ').trim();
};
module.exports.css = function () {
  return rules.sort().join('');
};

module.exports.reset = function () {
  cache = {};
  while (rules.length) {
    rules.pop();
  }
};

if (typeof document !== 'undefined') {
  var sheet = document.head.appendChild(document.createElement('style')).sheet;
  insert = function insert(rule) {
    rules.push(rule);
    try {
      sheet.insertRule(rule, sheet.cssRules.length);
    } catch (e) {}
  };
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(134);
var isArguments = __webpack_require__(133);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 133 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 134 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _slice = Array.prototype.slice;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = undefined;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(_slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = __webpack_require__(16);

var _PathUtils = __webpack_require__(12);

var _ExecutionEnvironment = __webpack_require__(23);

var _DOMUtils = __webpack_require__(32);

var _DOMStateStorage = __webpack_require__(57);

var _createDOMHistory = __webpack_require__(58);

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    try {
      historyState = historyState || window.history.state || {};
    } catch (e) {
      historyState = {};
    }

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _Actions = __webpack_require__(16);

var _PathUtils = __webpack_require__(12);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _PathUtils.parsePath(location);

  if (typeof action === 'object') {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _PathUtils = __webpack_require__(12);

var _Actions = __webpack_require__(16);

var _createHistory = __webpack_require__(60);

var _createHistory2 = _interopRequireDefault(_createHistory);

function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
}

function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var history = _createHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: saveState,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    var key = history.createKey();

    if (typeof entry === 'string') return { pathname: entry, key: key };

    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
  }

  var storage = createStateStorage(entries);

  function saveState(key, state) {
    storage[key] = state;
  }

  function readState(key) {
    return storage[key];
  }

  function getCurrentLocation() {
    var entry = entries[current];
    var basename = entry.basename;
    var pathname = entry.pathname;
    var search = entry.search;

    var path = (basename || '') + pathname + (search || '');

    var key = undefined,
        state = undefined;
    if (entry.key) {
      key = entry.key;
      state = readState(key);
    } else {
      key = history.createKey();
      state = null;
      entry.key = key;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  }

  function go(n) {
    if (n) {
      if (!canGo(n)) {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
        return;
      }

      current += n;

      var currentLocation = getCurrentLocation();

      // change action to POP
      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
    }
  }

  function finishTransition(location) {
    switch (location.action) {
      case _Actions.PUSH:
        current += 1;

        // if we are not on the top of stack
        // remove rest and push new
        if (current < entries.length) entries.splice(current);

        entries.push(location);
        saveState(location.key, location.state);
        break;
      case _Actions.REPLACE:
        entries[current] = location;
        saveState(location.key, location.state);
        break;
    }
  }

  return history;
}

exports['default'] = createMemoryHistory;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


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


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(156);

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(157);

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(154);

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(155);

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = __webpack_require__(141);

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _staticData = __webpack_require__(153);

var _staticData2 = _interopRequireDefault(_staticData);

var _cursor = __webpack_require__(144);

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__(143);

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__(145);

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__(146);

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__(147);

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(148);

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__(149);

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__(150);

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__(151);

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(152);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

exports.default = (0, _createPrefixer2.default)({
  prefixMap: _staticData2.default.prefixMap,
  plugins: plugins
});
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(15);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(15);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(15);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(15);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(21);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(15);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(62);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(62);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(63),
    getRawTag = __webpack_require__(161),
    objectToString = __webpack_require__(162);

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


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(63);

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


/***/ }),
/* 162 */
/***/ (function(module, exports) {

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


/***/ }),
/* 163 */
/***/ (function(module, exports) {

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


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(159),
    isObjectLike = __webpack_require__(163);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(64);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(65),
    isSymbol = __webpack_require__(164);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return h; });
/* unused harmony export createElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return render; });
/* unused harmony export rerender */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/** JSX/hyperscript reviver
*	Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *	@see http://jasonformat.com/wtf-is-jsx
 *	@public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/** Copy own-properties from `props` onto `obj`.
 *	@returns obj
 *	@private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/** Call a function asynchronously, as soon as possible.
 *	@param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
	return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/** Check if two nodes are equivalent.
 *	@param {Element} node
 *	@param {VNode} vnode
 *	@private
 */
function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

/** Check if an Element has a given normalized name.
*	@param {Element} node
*	@param {String} nodeName
 */
function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};


/* unused harmony default export */ var _unused_webpack_default_export = (preact);
//# sourceMappingURL=preact.esm.js.map


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(31);
  var warning = __webpack_require__(56);
  var ReactPropTypesSecret = __webpack_require__(36);
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
  if (process.env.NODE_ENV !== 'production') {
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(30);
var invariant = __webpack_require__(31);
var ReactPropTypesSecret = __webpack_require__(36);

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


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(30);
var invariant = __webpack_require__(31);
var warning = __webpack_require__(56);

var ReactPropTypesSecret = __webpack_require__(36);
var checkPropTypes = __webpack_require__(168);

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
    if (process.env.NODE_ENV !== 'production') {
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
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
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
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
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
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(205);

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	if (typeof str !== 'string') {
		return {};
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return {};
	}

	return str.split('&').reduce(function (ret, param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (!ret.hasOwnProperty(key)) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}

		return ret;
	}, {});
};

exports.stringify = function (obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return key;
		}

		if (Array.isArray(val)) {
			return val.slice().sort().map(function (val2) {
				return strictUriEncode(key) + '=' + strictUriEncode(val2);
			}).join('&');
		}

		return strictUriEncode(key) + '=' + strictUriEncode(val);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var objectAssign = __webpack_require__(66);
var InputSlider = __webpack_require__(179);
var InputNumber = __webpack_require__(177);

var rgb2hsv = __webpack_require__(50);
var hsv2hex = __webpack_require__(118);
var hsv2rgb = __webpack_require__(29);
var rgb2hex = __webpack_require__(22);
var hex2rgb = __webpack_require__(115);
var rgba = __webpack_require__(51);

var KEY_ENTER = 13;

module.exports = React.createClass({
  displayName: 'ColorPicker',

  getInitialState: function getInitialState() {
    return {
      hex: this.props.color.hex,
      hsvMode: false
    };
  },
  render: function render() {
    var color = this.props.color;
    var r = color.r,
        g = color.g,
        b = color.b;
    var h = color.h,
        s = color.s,
        v = color.v;
    var a = color.a,
        hex = color.hex;

    var rgbaBackground = rgba(r, g, b, a);
    var opacityGradient = 'linear-gradient(to right, ' + rgba(r, g, b, 0) + ', ' + rgba(r, g, b, 100) + ')';
    var hueBackground = '#' + hsv2hex(h, 100, 100);

    return React.createElement(
      'div',
      { className: 'm-color-picker', style: { left: this.props.left }, onClick: this._onClick },
      React.createElement(
        'div',
        { className: 'selector',
          style: { backgroundColor: hueBackground } },
        React.createElement('div', { className: 'gradient white' }),
        React.createElement('div', { className: 'gradient dark' }),
        React.createElement(InputSlider, {
          className: 'slider slider-xy',
          axis: 'xy',
          x: s, xmax: 100,
          y: 100 - v, ymax: 100,
          onChange: this._onSVChange
        })
      ),
      React.createElement(
        'div',
        { className: 'sliders' },
        React.createElement(InputSlider, {
          className: 'slider slider-x hue',
          axis: 'x', x: h, xmax: 359,
          onChange: this._onHueChange
        }),
        React.createElement(InputSlider, {
          className: 'slider slider-x opacity',
          axis: 'x', x: a, xmax: 100,
          style: { background: opacityGradient },
          onChange: this._onAlphaChange
        }),
        React.createElement('div', { className: 'color', style: { backgroundColor: rgbaBackground } })
      ),
      React.createElement(
        'div',
        { className: 'inputs' },
        React.createElement(
          'div',
          { className: 'input hex' },
          React.createElement('input', { type: 'text', className: 'value', value: this.state.hex,
            onChange: this._onHexChange, onKeyUp: this._onHexKeyUp }),
          React.createElement(
            'span',
            { className: 'label' },
            'Hex'
          )
        ),
        !this.state.hsvMode ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'input r' },
            React.createElement(InputNumber, {
              className: 'value', value: r,
              onChange: this.changeRGB.bind(null, 'r') }),
            React.createElement(
              'span',
              { className: 'label' },
              'R'
            )
          ),
          React.createElement(
            'div',
            { className: 'input g' },
            React.createElement(InputNumber, {
              className: 'value', value: g,
              onChange: this.changeRGB.bind(null, 'g') }),
            React.createElement(
              'span',
              { className: 'label' },
              'G'
            )
          ),
          React.createElement(
            'div',
            { className: 'input b' },
            React.createElement(InputNumber, {
              className: 'value', value: b,
              onChange: this.changeRGB.bind(null, 'b') }),
            React.createElement(
              'span',
              { className: 'label' },
              'B'
            )
          )
        ) : React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'input h' },
            React.createElement(InputNumber, {
              className: 'value', value: h,
              onChange: this.changeHSV.bind(null, 'h') }),
            React.createElement(
              'span',
              { className: 'label' },
              'H'
            )
          ),
          React.createElement(
            'div',
            { className: 'input s' },
            React.createElement(InputNumber, {
              className: 'value', value: s,
              onChange: this.changeHSV.bind(null, 's') }),
            React.createElement(
              'span',
              { className: 'label' },
              'S'
            )
          ),
          React.createElement(
            'div',
            { className: 'input v' },
            React.createElement(InputNumber, {
              className: 'value', value: v,
              onChange: this.changeHSV.bind(null, 'v') }),
            React.createElement(
              'span',
              { className: 'label' },
              'V'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'input a' },
          React.createElement(InputNumber, {
            className: 'value', value: a,
            onChange: this.changeAlpha }),
          React.createElement(
            'span',
            { className: 'label' },
            'A'
          )
        )
      )
    );
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var hex = nextProps.color.hex;
    this.setState({
      hex: hex
    });
  },
  changeHSV: function changeHSV(p, val) {
    if (this.props.onChange) {
      var j = p;if (typeof j === 'string') {
        j = {};j[p] = val;
      }
      var color = this.props.color;
      var rgb = hsv2rgb(j.h || color.h, j.s || color.s, j.v || color.v);
      var hex = rgb2hex(rgb.r, rgb.g, rgb.b);
      this.props.onChange(objectAssign(color, j, rgb, { hex: hex }));
    }
  },
  changeRGB: function changeRGB(p, val) {
    if (this.props.onChange) {
      var j = p;if (typeof j === 'string') {
        j = {};j[p] = val;
      }

      var color = this.props.color;
      var rgb = [j.r !== void 0 ? j.r : color.r, j.g !== void 0 ? j.g : color.g, j.b !== void 0 ? j.b : color.b];

      var hsv = rgb2hsv.apply(null, rgb);
      var hex = rgb2hex.apply(null, rgb);

      this.props.onChange(objectAssign(color, j, hsv, { hex: hex }));
    }
  },
  changeAlpha: function changeAlpha(a) {
    if (this.props.onChange) {
      if (a <= 100 && a >= 0) {
        this.props.onChange(objectAssign(this.props.color, { a: a }));
      }
    }
  },
  _onSVChange: function _onSVChange(pos) {
    this.changeHSV({
      s: pos.x,
      v: 100 - pos.y
    });
  },
  _onHueChange: function _onHueChange(pos) {
    this.changeHSV({
      h: pos.x
    });
  },
  _onAlphaChange: function _onAlphaChange(pos) {
    this.changeHSV({
      a: parseInt(pos.x, 10)
    });
  },
  _onHexChange: function _onHexChange(e) {
    this.setState({
      hex: e.target.value.trim()
    });
  },
  _onHexKeyUp: function _onHexKeyUp(e) {
    if (e.keyCode === KEY_ENTER) {
      var hex = e.target.value.trim();
      var rgb = hex2rgb(hex);
      this.changeRGB(objectAssign(rgb, { hex: hex }));
    }
  },
  _onClick: function _onClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cx = __webpack_require__(48);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var assign = __webpack_require__(66);
var cssColor = __webpack_require__(114);
var rgbaColor = __webpack_require__(51);
var rgb2hsv = __webpack_require__(50);
var rgb2hex = __webpack_require__(22);
var rgba2hex = __webpack_require__(119);

var ColorPicker = __webpack_require__(172);

var KEY_ENTER = 13;

module.exports = React.createClass({
  displayName: 'InputColor',

  propTypes: {
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      defaultValue: '#000000'
    };
  },
  getInitialState: function getInitialState() {
    var cssColor = this.props.value;

    return {
      color: this.getColor(this.props.value),
      colorPicker: false,
      colorPickerPosition: 0
    };
  },
  getColor: function getColor(color) {
    color = color || this.props.defaultValue;

    var rgba = cssColor(color);
    var r = rgba.r,
        g = rgba.g,
        b = rgba.b,
        a = rgba.a;
    var hsv = rgb2hsv(r, g, b);

    return assign(hsv, {
      r: r,
      g: g,
      b: b,
      a: a,
      hex: rgb2hex(r, g, b)
    });
  },
  getRgbaBackground: function getRgbaBackground() {
    var color = this.state.color;
    var r = color.r;
    var g = color.g;
    var b = color.b;
    var a = color.a;
    return rgbaColor(r, g, b, a);
  },
  render: function render() {
    var color = this.state.color;
    var rgbaBackground = this.getRgbaBackground();

    return React.createElement(
      'span',
      { className: cx('m-input-color', {
          'color-picker-open': this.state.colorPicker
        }) },
      React.createElement('span', {
        className: 'css-color',
        style: { background: rgbaBackground },
        onClick: this._onClick
      }),
      React.createElement(
        'span',
        {
          className: 'remove',
          onClick: this.handleClickRemove },
        '×'
      ),
      this.state.colorPicker ? React.createElement(ColorPicker, {
        left: this.state.colorPickerPosition,
        color: this.state.color,
        onChange: this._onChange }) : null
    );
  },
  componentDidMount: function componentDidMount() {
    document.addEventListener('click', this.closeColorPicker, false);
  },
  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('click', this.closeColorPicker);
  },
  closeColorPicker: function closeColorPicker() {
    this.setState({ colorPicker: false });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var cssColor = nextProps.value;

    // anti-pattern, maybe
    if (!this._updated) {
      this.setState({
        color: this.getColor(cssColor)
      });
    } else {
      this._updated = false;
    }
  },
  change: function change(cssColor) {
    if (this.props.onChange) {
      this.props.onChange(cssColor);
    }
  },
  _onChange: function _onChange(color) {
    this.setState({
      cssColor: '#' + color.hex,
      color: color
    });

    this._updated = true;
    this.change('#' + rgba2hex(color.r, color.g, color.b, color.a));
  },
  _onClick: function _onClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    var dom = ReactDOM.findDOMNode(this);
    var rect = dom.getBoundingClientRect();
    var ww = window.innerWidth;

    var left = -105;
    if (rect.right + 105 > ww) {
      left = -210 + ww - rect.right;
    } else if (rect.left - 105 < 0) {
      left = -rect.left;
    }

    this.setState({
      colorPicker: !this.state.colorPicker,
      colorPickerPosition: left
    });
  },
  handleClickRemove: function handleClickRemove(e) {
    this.change('');
  }
});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var blacklist = __webpack_require__(47);
var React = __webpack_require__(0);
var parseNumber = __webpack_require__(176);

var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_ENTER = 13;

var InputNumber = function (_React$Component) {
  _inherits(InputNumber, _React$Component);

  function InputNumber(props) {
    _classCallCheck(this, InputNumber);

    var _this = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

    _this.state = {
      value: _this.parse(props.value)
    };
    return _this;
  }

  _createClass(InputNumber, [{
    key: 'parse',
    value: function parse(val) {
      return parseNumber(val, this.props.step, this.props.max, this.props.min);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: this.parse(nextProps.value)
      });
    }
  }, {
    key: 'change',
    value: function change(value) {
      if (this.props.onChange) {
        this.props.onChange(this.parse(value));
      }
    }
  }, {
    key: 'up',
    value: function up() {
      this.change(this.state.value + this.props.step);
    }
  }, {
    key: 'down',
    value: function down() {
      this.change(this.state.value - this.props.step);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      switch (e.keyCode) {
        case KEY_UP:
          e.preventDefault();
          this.up();
          break;
        case KEY_DOWN:
          e.preventDefault();
          this.down();
          break;
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === KEY_ENTER) {
        this.change(this.state.value);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = blacklist(this.props, 'step', 'min', 'max', 'onKeyUp', 'onKeyDown', 'onChange');
      var value = this.state.value;


      return React.createElement('input', _extends({}, props, {
        type: 'text',
        value: value,
        onKeyUp: function onKeyUp(e) {
          return _this2.handleKeyUp(e);
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.handleKeyDown(e);
        },
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        }
      }));
    }
  }]);

  return InputNumber;
}(React.Component);

InputNumber.defaultProps = {
  step: 1
};

module.exports = InputNumber;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value, step, max, min) {
  if (value === '') return '';
  if (value) {
    value = parseFloat(value);
    if (isNaN(value)) return '';
  }

  if (typeof max === 'number' && value > max) return max;
  if (typeof min === 'number' && value < min) return min;

  if (step) {
    var p = (step.toString().split('.')[1] || []).length;
    if (p) return parseFloat(value.toFixed(p));
  }

  return value;
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var cx = __webpack_require__(48);
var blacklist = __webpack_require__(47);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'InputSlider',

  propTypes: {
    axis: React.PropTypes.string,
    x: React.PropTypes.number,
    xmax: React.PropTypes.number,
    xmin: React.PropTypes.number,
    y: React.PropTypes.number,
    ymax: React.PropTypes.number,
    ymin: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      axis: 'x',
      xmin: 0,
      ymin: 0
    };
  },
  render: function render() {
    var axis = this.props.axis;
    var props = blacklist(this.props, 'axis', 'x', 'y', 'xmin', 'xmax', 'ymin', 'ymax', 'onChange', 'onDragEnd', 'className', 'onClick');
    var pos = this.getPosition();
    var valueStyle = {};
    if (axis === 'x') valueStyle.width = pos.left;
    if (axis === 'y') valueStyle.height = pos.top;

    props.className = cx('u-slider', 'u-slider-' + axis, this.props.className);

    return React.createElement(
      'div',
      _extends({}, props, { onClick: this.handleClick }),
      React.createElement('div', {
        className: 'value',
        style: valueStyle }),
      React.createElement('div', {
        className: 'handle',
        ref: 'handle',
        onTouchStart: this.handleMouseDown,
        onMouseDown: this.handleMouseDown,
        onClick: function onClick(e) {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        },
        style: pos })
    );
  },
  getClientPosition: function getClientPosition(e) {
    var touches = e.touches;
    if (touches && touches.length) {
      var finger = touches[0];
      return {
        x: finger.clientX,
        y: finger.clientY
      };
    }

    return {
      x: e.clientX,
      y: e.clientY
    };
  },
  getPosition: function getPosition() {
    var top = (this.props.y - this.props.ymin) / (this.props.ymax - this.props.ymin) * 100;
    var left = (this.props.x - this.props.xmin) / (this.props.xmax - this.props.xmin) * 100;

    if (top > 100) top = 100;
    if (top < 0) top = 0;
    if (this.props.axis === 'x') top = 0;
    top += '%';

    if (left > 100) left = 100;
    if (left < 0) left = 0;
    if (this.props.axis === 'y') left = 0;
    left += '%';

    return { top: top, left: left };
  },
  change: function change(pos, dragEnd) {
    if (!this.props.onChange) return;

    var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var left = pos.left;
    var top = pos.top;
    var axis = this.props.axis;

    if (left < 0) left = 0;
    if (left > width) left = width;
    if (top < 0) top = 0;
    if (top > height) top = height;

    var x = 0;
    var y = 0;
    if (axis === 'x' || axis === 'xy') {
      x = left / width * (this.props.xmax - this.props.xmin) + this.props.xmin;
    }
    if (axis === 'y' || axis === 'xy') {
      y = top / height * (this.props.ymax - this.props.ymin) + this.props.ymin;
    }

    this.props.onChange({ x: x, y: y });
  },
  handleMouseDown: function handleMouseDown(e) {
    e.preventDefault();
    var dom = this.refs.handle;
    var clientPos = this.getClientPosition(e);

    this.start = {
      x: dom.offsetLeft,
      y: dom.offsetTop
    };

    this.offset = {
      x: clientPos.x,
      y: clientPos.y
    };

    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleDragEnd);

    document.addEventListener('touchmove', this.handleDrag);
    document.addEventListener('touchend', this.handleDragEnd);
    document.addEventListener('touchcancel', this.handleDragEnd);
  },
  getPos: function getPos(e) {
    var clientPos = this.getClientPosition(e);
    var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    var posX = clientPos.x + this.start.x - this.offset.x;
    var posY = clientPos.y + this.start.y - this.offset.y;

    return {
      left: posX,
      top: posY
    };
  },
  handleDrag: function handleDrag(e) {
    e.preventDefault();
    this.change(this.getPos(e));
  },
  handleDragEnd: function handleDragEnd(e) {
    e.preventDefault();
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragEnd);

    document.removeEventListener('touchmove', this.handleDrag);
    document.removeEventListener('touchend', this.handleDragEnd);
    document.removeEventListener('touchcancel', this.handleDragEnd);

    if (this.props.onDragEnd) {
      this.props.onDragEnd();
    }
  },
  handleClick: function handleClick(e) {
    var clientPos = this.getClientPosition(e);
    var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

    this.change({
      left: clientPos.x - rect.left,
      top: clientPos.y - rect.top
    }, true);
  }
});

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(178);


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _InternalPropTypes = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A mixin that adds the "history" instance variable to components.
 */
var History = {

  contextTypes: {
    history: _InternalPropTypes.history
  },

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
    this.history = this.context.history;
  }
};

exports.default = History;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(67);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = _react2.default.createClass({
  displayName: 'IndexLink',
  render: function render() {
    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
  }
});

exports.default = IndexLink;
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _Redirect = __webpack_require__(68);

var _Redirect2 = _interopRequireDefault(_Redirect);

var _InternalPropTypes = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */

var IndexRedirect = _react2.default.createClass({
  displayName: 'IndexRedirect',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _InternalPropTypes.falsy,
    children: _InternalPropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRedirect;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = __webpack_require__(10);

var _InternalPropTypes = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react2.default.PropTypes.func;

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */

var IndexRoute = _react2.default.createClass({
  displayName: 'IndexRoute',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    path: _InternalPropTypes.falsy,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRoute;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react2.default.PropTypes.object;

/**
 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
 * component that may be used to cancel a transition or prompt the user
 * for confirmation.
 *
 * On standard transitions, routerWillLeave receives a single argument: the
 * location we're transitioning to. To cancel the transition, return false.
 * To prompt the user for confirmation, return a prompt message (string).
 *
 * During the beforeunload event (assuming you're using the useBeforeUnload
 * history enhancer), routerWillLeave does not receive a location object
 * because it isn't possible for us to know the location we're transitioning
 * to. In this case routerWillLeave must return a prompt message to prevent
 * the user from closing the window/tab.
 */

var Lifecycle = {

  contextTypes: {
    history: object.isRequired,
    // Nested children receive the route as context, either
    // set by the route component using the RouteContext mixin
    // or by some other ancestor.
    route: object
  },

  propTypes: {
    // Route components receive the route object as a prop.
    route: object
  },

  componentDidMount: function componentDidMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

    var route = this.props.route || this.context.route;

    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
  }
};

exports.default = Lifecycle;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = __webpack_require__(10);

var _InternalPropTypes = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;

/**
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is
 * requested, the tree is searched depth-first to find a route whose
 * path matches the URL.  When one is found, all routes in the tree
 * that lead to it are considered "active" and their components are
 * rendered into the DOM, nested in the same order as in the tree.
 */

var Route = _react2.default.createClass({
  displayName: 'Route',


  statics: {
    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
  },

  propTypes: {
    path: string,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Route;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react2.default.PropTypes.object;

/**
 * The RouteContext mixin provides a convenient way for route
 * components to set the route in context. This is needed for
 * routes that render elements that want to use the Lifecycle
 * mixin to prevent transitions.
 */

var RouteContext = {

  propTypes: {
    route: object.isRequired
  },

  childContextTypes: {
    route: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      route: this.props.route
    };
  },
  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
  }
};

exports.default = RouteContext;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createHashHistory = __webpack_require__(59);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _useQueries = __webpack_require__(24);

var _useQueries2 = _interopRequireDefault(_useQueries);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createTransitionManager = __webpack_require__(39);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _InternalPropTypes = __webpack_require__(13);

var _RouterContext = __webpack_require__(26);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _RouteUtils = __webpack_require__(10);

var _RouterUtils = __webpack_require__(69);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function isDeprecatedHistory(history) {
  return !history || !history.__v2_compatible__;
}

/* istanbul ignore next: sanity check */
function isUnsupportedHistory(history) {
  // v3 histories expose getCurrentLocation, but aren't currently supported.
  return history && history.getCurrentLocation;
}

var _React$PropTypes = _react2.default.PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <Router> is a high-level API for automatically setting up
 * a router that renders a <RouterContext> with all the props
 * it needs each time the URL changes.
 */

var Router = _react2.default.createClass({
  displayName: 'Router',


  propTypes: {
    history: object,
    children: _InternalPropTypes.routes,
    routes: _InternalPropTypes.routes, // alias for children
    render: func,
    createElement: func,
    onError: func,
    onUpdate: func,

    // Deprecated:
    parseQueryString: func,
    stringifyQuery: func,

    // PRIVATE: For client-side rehydration of server match.
    matchContext: object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      render: function render(props) {
        return _react2.default.createElement(_RouterContext2.default, props);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      location: null,
      routes: null,
      params: null,
      components: null
    };
  },
  handleError: function handleError(error) {
    if (this.props.onError) {
      this.props.onError.call(this, error);
    } else {
      // Throw errors by default so we don't silently swallow them!
      throw error; // This error probably occurred in getChildRoutes or getComponents.
    }
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    var _props = this.props;
    var parseQueryString = _props.parseQueryString;
    var stringifyQuery = _props.stringifyQuery;

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

    var _createRouterObjects = this.createRouterObjects();

    var history = _createRouterObjects.history;
    var transitionManager = _createRouterObjects.transitionManager;
    var router = _createRouterObjects.router;


    this._unlisten = transitionManager.listen(function (error, state) {
      if (error) {
        _this.handleError(error);
      } else {
        _this.setState(state, _this.props.onUpdate);
      }
    });

    this.history = history;
    this.router = router;
  },
  createRouterObjects: function createRouterObjects() {
    var matchContext = this.props.matchContext;

    if (matchContext) {
      return matchContext;
    }

    var history = this.props.history;
    var _props2 = this.props;
    var routes = _props2.routes;
    var children = _props2.children;


    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

    if (isDeprecatedHistory(history)) {
      history = this.wrapDeprecatedHistory(history);
    }

    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

    return { history: routingHistory, transitionManager: transitionManager, router: router };
  },
  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
    var _props3 = this.props;
    var parseQueryString = _props3.parseQueryString;
    var stringifyQuery = _props3.stringifyQuery;


    var createHistory = void 0;
    if (history) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
      createHistory = function createHistory() {
        return history;
      };
    } else {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
      createHistory = _createHashHistory2.default;
    }

    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
  },


  /* istanbul ignore next: sanity check */
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlisten) this._unlisten();
  },
  render: function render() {
    var _state = this.state;
    var location = _state.location;
    var routes = _state.routes;
    var params = _state.params;
    var components = _state.components;
    var _props4 = this.props;
    var createElement = _props4.createElement;
    var render = _props4.render;

    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

    if (location == null) return null; // Async match

    // Only forward non-Router-specific props to routing context, as those are
    // the only ones that might be custom routing context props.
    Object.keys(Router.propTypes).forEach(function (propType) {
      return delete props[propType];
    });

    return render(_extends({}, props, {
      history: this.history,
      router: this.router,
      location: location,
      routes: routes,
      params: params,
      components: components,
      createElement: createElement
    }));
  }
});

exports.default = Router;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RouterContext = __webpack_require__(26);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoutingContext = _react2.default.createClass({
  displayName: 'RoutingContext',
  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
  },
  render: function render() {
    return _react2.default.createElement(_RouterContext2.default, this.props);
  }
});

exports.default = RoutingContext;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.runEnterHooks = runEnterHooks;
exports.runChangeHooks = runChangeHooks;
exports.runLeaveHooks = runLeaveHooks;

var _AsyncUtils = __webpack_require__(37);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTransitionHook(hook, route, asyncArity) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    hook.apply(route, args);

    if (hook.length < asyncArity) {
      var callback = args[args.length - 1];
      // Assume hook executes synchronously and
      // automatically call the callback.
      callback();
    }
  };
}

function getEnterHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

    return hooks;
  }, []);
}

function getChangeHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
    return hooks;
  }, []);
}

function runTransitionHooks(length, iter, callback) {
  if (!length) {
    callback();
    return;
  }

  var redirectInfo = void 0;
  function replace(location, deprecatedPathname, deprecatedQuery) {
    if (deprecatedPathname) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
      redirectInfo = {
        pathname: deprecatedPathname,
        query: deprecatedQuery,
        state: location
      };

      return;
    }

    redirectInfo = location;
  }

  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
    iter(index, replace, function (error) {
      if (error || redirectInfo) {
        done(error, redirectInfo); // No need to continue.
      } else {
        next();
      }
    });
  }, callback);
}

/**
 * Runs all onEnter hooks in the given array of routes in order
 * with onEnter(nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */
function runEnterHooks(routes, nextState, callback) {
  var hooks = getEnterHooks(routes);
  return runTransitionHooks(hooks.length, function (index, replace, next) {
    hooks[index](nextState, replace, next);
  }, callback);
}

/**
 * Runs all onChange hooks in the given array of routes in order
 * with onChange(prevState, nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */
function runChangeHooks(routes, state, nextState, callback) {
  var hooks = getChangeHooks(routes);
  return runTransitionHooks(hooks.length, function (index, replace, next) {
    hooks[index](state, nextState, replace, next);
  }, callback);
}

/**
 * Runs all onLeave hooks in the given array of routes in order.
 */
function runLeaveHooks(routes, prevState) {
  for (var i = 0, len = routes.length; i < len; ++i) {
    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RouterContext = __webpack_require__(26);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  if (process.env.NODE_ENV !== 'production') {
    middlewares.forEach(function (middleware, index) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
    });
  }

  var withContext = middlewares.map(function (middleware) {
    return middleware.renderRouterContext;
  }).filter(Boolean);
  var withComponent = middlewares.map(function (middleware) {
    return middleware.renderRouteComponent;
  }).filter(Boolean);

  var makeCreateElement = function makeCreateElement() {
    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
    return function (Component, props) {
      return withComponent.reduceRight(function (previous, renderRouteComponent) {
        return renderRouteComponent(previous, props);
      }, baseCreateElement(Component, props));
    };
  };

  return function (renderProps) {
    return withContext.reduceRight(function (previous, renderRouterContext) {
      return renderRouterContext(previous, renderProps);
    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
      createElement: makeCreateElement(renderProps.createElement)
    })));
  };
};

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createBrowserHistory = __webpack_require__(136);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createRouterHistory = __webpack_require__(71);

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
module.exports = exports['default'];

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PatternUtils = __webpack_require__(17);

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;

  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}

/**
 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 *
 * changeRoutes are any routes that didn't leave or enter during
 * the transition.
 */
function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;

  var leaveRoutes = void 0,
      changeRoutes = void 0,
      enterRoutes = void 0;
  if (prevRoutes) {
    (function () {
      var parentIsLeaving = false;
      leaveRoutes = prevRoutes.filter(function (route) {
        if (parentIsLeaving) {
          return true;
        } else {
          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
          if (isLeaving) parentIsLeaving = true;
          return isLeaving;
        }
      });

      // onLeave hooks start at the leaf route.
      leaveRoutes.reverse();

      enterRoutes = [];
      changeRoutes = [];

      nextRoutes.forEach(function (route) {
        var isNew = prevRoutes.indexOf(route) === -1;
        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
      });
    })();
  } else {
    leaveRoutes = [];
    changeRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    changeRoutes: changeRoutes,
    enterRoutes: enterRoutes
  };
}

exports.default = computeChangedRoutes;
module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(37);

var _makeStateWithLocation = __webpack_require__(73);

var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
    return;
  }

  var getComponent = route.getComponent || route.getComponents;
  if (!getComponent) {
    callback();
    return;
  }

  var location = nextState.location;

  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

  getComponent.call(route, nextStateWithLocation, callback);
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */
function getComponents(nextState, callback) {
  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback);
  }, callback);
}

exports.default = getComponents;
module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PatternUtils = __webpack_require__(17);

/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */
function getRouteParams(route, params) {
  var routeParams = {};

  if (!route.path) return routeParams;

  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      routeParams[p] = params[p];
    }
  });

  return routeParams;
}

exports.default = getRouteParams;
module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createHashHistory = __webpack_require__(59);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _createRouterHistory = __webpack_require__(71);

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = isActive;

var _PatternUtils = __webpack_require__(17);

function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
}

/**
 * Returns true if the current pathname matches the supplied one, net of
 * leading and trailing slash normalization. This is sufficient for an
 * indexOnly route match.
 */
function pathIsActive(pathname, currentPathname) {
  // Normalize leading slash for consistency. Leading slash on pathname has
  // already been normalized in isActive. See caveat there.
  if (currentPathname.charAt(0) !== '/') {
    currentPathname = '/' + currentPathname;
  }

  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
  // `/foo` as active, but in this case, we would already have failed the
  // match.
  if (pathname.charAt(pathname.length - 1) !== '/') {
    pathname += '/';
  }
  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
    currentPathname += '/';
  }

  return currentPathname === pathname;
}

/**
 * Returns true if the given pathname matches the active routes and params.
 */
function routeIsActive(pathname, routes, params) {
  var remainingPathname = pathname,
      paramNames = [],
      paramValues = [];

  // for...of would work here but it's probably slower post-transpilation.
  for (var i = 0, len = routes.length; i < len; ++i) {
    var route = routes[i];
    var pattern = route.path || '';

    if (pattern.charAt(0) === '/') {
      remainingPathname = pathname;
      paramNames = [];
      paramValues = [];
    }

    if (remainingPathname !== null && pattern) {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }

      if (remainingPathname === '') {
        // We have an exact match on the route. Just check that all the params
        // match.
        // FIXME: This doesn't work on repeated params.
        return paramNames.every(function (paramName, index) {
          return String(paramValues[index]) === String(params[paramName]);
        });
      }
    }
  }

  return false;
}

/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */
function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  return deepEqual(query, activeQuery);
}

/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */
function isActive(_ref, indexOnly, currentLocation, routes, params) {
  var pathname = _ref.pathname;
  var query = _ref.query;

  if (currentLocation == null) return false;

  // TODO: This is a bit ugly. It keeps around support for treating pathnames
  // without preceding slashes as absolute paths, but possibly also works
  // around the same quirks with basenames as in matchRoutes.
  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }

  if (!pathIsActive(pathname, currentLocation.pathname)) {
    // The path check is necessary and sufficient for indexOnly, but otherwise
    // we still need to check the routes.
    if (indexOnly || !routeIsActive(pathname, routes, params)) {
      return false;
    }
  }

  return queryIsActive(query, currentLocation.query);
}
module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Actions = __webpack_require__(16);

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _createMemoryHistory = __webpack_require__(70);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _createTransitionManager = __webpack_require__(39);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _RouteUtils = __webpack_require__(10);

var _RouterUtils = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */
function match(_ref, callback) {
  var history = _ref.history;
  var routes = _ref.routes;
  var location = _ref.location;

  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

  history = history ? history : (0, _createMemoryHistory2.default)(options);
  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

  var unlisten = void 0;

  if (location) {
    // Allow match({ location: '/the/path', ... })
    location = history.createLocation(location);
  } else {
    // Pick up the location from the history via synchronous history.listen
    // call if needed.
    unlisten = history.listen(function (historyLocation) {
      location = historyLocation;
    });
  }

  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

  transitionManager.match(location, function (error, redirectLocation, nextState) {
    callback(error, redirectLocation && router.createLocation(redirectLocation, _Actions.REPLACE), nextState && _extends({}, nextState, {
      history: history,
      router: router,
      matchContext: { history: history, transitionManager: transitionManager, router: router }
    }));

    // Defer removing the listener to here to prevent DOM histories from having
    // to unwind DOM event listeners unnecessarily, in case callback renders a
    // <Router> and attaches another history listener.
    if (unlisten) {
      unlisten();
    }
  });
}

exports.default = match;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = matchRoutes;

var _AsyncUtils = __webpack_require__(37);

var _makeStateWithLocation = __webpack_require__(73);

var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

var _PatternUtils = __webpack_require__(17);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _RouteUtils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChildRoutes(route, location, paramNames, paramValues, callback) {
  if (route.childRoutes) {
    return [null, route.childRoutes];
  }
  if (!route.getChildRoutes) {
    return [];
  }

  var sync = true,
      result = void 0;

  var partialNextState = {
    location: location,
    params: createParams(paramNames, paramValues)
  };

  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
    if (sync) {
      result = [error, childRoutes];
      return;
    }

    callback(error, childRoutes);
  });

  sync = false;
  return result; // Might be undefined.
}

function getIndexRoute(route, location, paramNames, paramValues, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    var partialNextState = {
      location: location,
      params: createParams(paramNames, paramValues)
    };

    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    });
  } else if (route.childRoutes) {
    (function () {
      var pathless = route.childRoutes.filter(function (childRoute) {
        return !childRoute.path;
      });

      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
          if (error || indexRoute) {
            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
            done(error, routes);
          } else {
            next();
          }
        });
      }, function (err, routes) {
        callback(null, routes);
      });
    })();
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduce(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].push(paramValue);
    } else if (paramName in params) {
      params[paramName] = [params[paramName], paramValue];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
  var pattern = route.path || '';

  if (pattern.charAt(0) === '/') {
    remainingPathname = location.pathname;
    paramNames = [];
    paramValues = [];
  }

  // Only try to match the path if the route actually has a pattern, and if
  // we're not just searching for potential nested absolute paths.
  if (remainingPathname !== null && pattern) {
    try {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }
    } catch (error) {
      callback(error);
    }

    // By assumption, pattern is non-empty here, which is the prerequisite for
    // actually terminating a match.
    if (remainingPathname === '') {
      var _ret2 = function () {
        var match = {
          routes: [route],
          params: createParams(paramNames, paramValues)
        };

        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
          if (error) {
            callback(error);
          } else {
            if (Array.isArray(indexRoute)) {
              var _match$routes;

              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
                return !route.path;
              }), 'Index routes should not have paths') : void 0;
              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
            } else if (indexRoute) {
              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
              match.routes.push(indexRoute);
            }

            callback(null, match);
          }
        });

        return {
          v: void 0
        };
      }();

      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
    }
  }

  if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, remainingPathname, paramNames, paramValues);
      } else {
        callback();
      }
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */
function matchRoutes(routes, location, callback, remainingPathname) {
  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

  if (remainingPathname === undefined) {
    // TODO: This is a little bit ugly, but it works around a quirk in history
    // that strips the leading slash from pathnames when using basenames with
    // trailing slashes.
    if (location.pathname.charAt(0) !== '/') {
      location = _extends({}, location, {
        pathname: '/' + location.pathname
      });
    }
    remainingPathname = location.pathname;
  }

  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _useQueries = __webpack_require__(24);

var _useQueries2 = _interopRequireDefault(_useQueries);

var _createTransitionManager = __webpack_require__(39);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _routerWarning = __webpack_require__(4);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know about routing.
 *
 * Enhances history objects with the following methods:
 *
 * - listen((error, nextState) => {})
 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
 * - match(location, (error, redirectLocation, nextState) => {})
 * - isActive(pathname, query, indexOnly=false)
 */
function useRoutes(createHistory) {
  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

  return function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var routes = _ref.routes;

    var options = _objectWithoutProperties(_ref, ['routes']);

    var history = (0, _useQueries2.default)(createHistory)(options);
    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
    return _extends({}, history, transitionManager);
  };
}

exports.default = useRoutes;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withRouter;

var _invariant = __webpack_require__(5);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(139);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _PropTypes = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withRouter(WrappedComponent, options) {
  var withRef = options && options.withRef;

  var WithRouter = _react2.default.createClass({
    displayName: 'WithRouter',

    contextTypes: { router: _PropTypes.routerShape },
    propTypes: { router: _PropTypes.routerShape },

    getWrappedInstance: function getWrappedInstance() {
      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

      return this.wrappedInstance;
    },
    render: function render() {
      var _this = this;

      var router = this.props.router || this.context.router;
      var props = _extends({}, this.props, { router: router });

      if (withRef) {
        props.ref = function (c) {
          _this.wrappedInstance = c;
        };
      }

      return _react2.default.createElement(WrappedComponent, props);
    }
  });

  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
  WithRouter.WrappedComponent = WrappedComponent;

  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; /* eslint consistent-return: 0 */


var _propTypes = __webpack_require__(35);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(0);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _sortablejs = __webpack_require__(204);

var _sortablejs2 = _interopRequireDefault(_sortablejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = {
    nextSibling: null,
    activeComponent: null
};

var Sortable = (_temp2 = _class = function (_Component) {
    _inherits(Sortable, _Component);

    function Sortable() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Sortable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sortable.__proto__ || Object.getPrototypeOf(Sortable)).call.apply(_ref, [this].concat(args))), _this), _this.sortable = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Sortable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var options = _extends({}, this.props.options);

            ['onChoose', 'onStart', 'onEnd', 'onAdd', 'onUpdate', 'onSort', 'onRemove', 'onFilter', 'onMove', 'onClone'].forEach(function (name) {
                var eventHandler = options[name];

                options[name] = function () {
                    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        params[_key2] = arguments[_key2];
                    }

                    var evt = params[0];


                    if (name === 'onChoose') {
                        store.nextSibling = evt.item.nextElementSibling;
                        store.activeComponent = _this2;
                    } else if ((name === 'onAdd' || name === 'onUpdate') && _this2.props.onChange) {
                        var items = _this2.sortable.toArray();
                        var remote = store.activeComponent;
                        var remoteItems = remote.sortable.toArray();

                        var referenceNode = store.nextSibling && store.nextSibling.parentNode !== null ? store.nextSibling : null;
                        evt.from.insertBefore(evt.item, referenceNode);
                        if (remote !== _this2) {
                            var remoteOptions = remote.props.options || {};

                            if (_typeof(remoteOptions.group) === 'object' && remoteOptions.group.pull === 'clone') {
                                // Remove the node with the same data-reactid
                                evt.item.parentNode.removeChild(evt.item);
                            }

                            remote.props.onChange && remote.props.onChange(remoteItems, remote.sortable, evt);
                        }

                        _this2.props.onChange && _this2.props.onChange(items, _this2.sortable, evt);
                    }

                    if (evt.type === 'move') {
                        var _evt = params[0],
                            originalEvent = params[1];

                        var canMove = eventHandler ? eventHandler(_evt, originalEvent) : true;
                        return canMove;
                    }

                    setTimeout(function () {
                        eventHandler && eventHandler(evt);
                    }, 0);
                };
            });

            this.sortable = _sortablejs2.default.create(_reactDom2.default.findDOMNode(this), options);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.sortable) {
                this.sortable.destroy();
                this.sortable = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                Component = _props.tag,
                props = _objectWithoutProperties(_props, ['tag']);

            delete props.options;
            delete props.onChange;

            return _react2.default.createElement(Component, props);
        }
    }]);

    return Sortable;
}(_react.Component), _class.propTypes = {
    options: _propTypes2.default.object,
    onChange: _propTypes2.default.func,
    tag: _propTypes2.default.string,
    style: _propTypes2.default.object
}, _class.defaultProps = {
    options: {},
    tag: 'div',
    style: {}
}, _temp2);
exports.default = Sortable;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Sortable = __webpack_require__(201);

var _Sortable2 = _interopRequireDefault(_Sortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Sortable2.default;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(158);

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window == "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		R_SPACE = /\s+/g,
		R_FLOAT = /left|right|inline/,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = false,

		supportDraggable = !!('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/Trident.*rv[ :]?11\./)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],
		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var _this = rootEl[expando],
					el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollOffsetX,
					scrollOffsetY
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							scrollOffsetY = vy ? vy * speed : 0;
							scrollOffsetX = vx ? vx * speed : 0;

							if ('function' === typeof(scrollCustomFn)) {
								return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
							}

							if (el === win) {
								win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
							} else {
								el.scrollTop += scrollOffsetY;
								el.scrollLeft += scrollOffsetX;
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				if (value === void 0 || value === true) {
					value = group.name;
				}

				if (typeof value === 'function') {
					return value;
				} else {
					return function (to, from) {
						var fromGroup = from.options.group.name;

						return pull
							? value
							: value && (value.join
								? value.indexOf(fromGroup) > -1
								: (fromGroup == value)
							);
					};
				}
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		}
	;


	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0}
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);
		_on(el, 'pointerdown', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && evt.path[0] || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (type === 'mousedown' && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}


			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, startIndex);
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'transform';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, oldIndex);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);
				_on(ownerDocument, 'pointercancel', _this._onDrop);
				_on(ownerDocument, 'selectstart', _this);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
					_on(ownerDocument, 'pointermove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}


			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
			_off(ownerDocument, 'pointermove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					setTimeout(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.ghostClass, true);
				_toggleClass(dragEl, options.dragClass, false);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY),
					parent = target,
					i = touchDragOverListeners.length;

				if (parent) {
					do {
						if (parent[expando]) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var dataTransfer = evt.dataTransfer,
				options = this.options;

			this._offUpEvents();

			if (activeGroup.checkPull(this, this, dragEl, evt)) {
				cloneEl = _clone(dragEl);

				cloneEl.draggable = false;
				cloneEl.style['will-change'] = '';

				_css(cloneEl, 'display', 'none');
				_toggleClass(cloneEl, this.options.chosenClass, false);

				rootEl.insertBefore(cloneEl, dragEl);
				_dispatchEvent(this, rootEl, 'clone', dragEl);
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', this._onTouchMove);
					_on(document, 'touchend', this._onDrop);
					_on(document, 'touchcancel', this._onDrop);
					_on(document, 'pointermove', this._onTouchMove);
					_on(document, 'pointerup', this._onDrop);
				} else {
					// Old brwoser
					_on(document, 'mousemove', this._onTouchMove);
					_on(document, 'mouseup', this._onDrop);
				}

				this._loopId = setInterval(this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(this, dataTransfer, dragEl);
				}

				_on(document, 'drop', this);
				setTimeout(this._dragStarted, 0);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				isMovingBetweenSortable = false,
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			if (dragEl.animated) {
				return;
			}

			moved = true;

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();

				if (putSortable !== this) {
					putSortable = this;
					isMovingBetweenSortable = true;
				}

				if (revert) {
					_cloneHide(activeSortable, true);
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (_ghostIsLast(el, evt))
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = el.lastElementChild;
					}

					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(activeSortable, isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}

					targetRect = target.getBoundingClientRect();

					var width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						after = false
					;

					if (floating) {
						var elTop = dragEl.offsetTop,
							tgTop = target.offsetTop;

						if (elTop === tgTop) {
							after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
						}
						else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
							after = (evt.clientY - targetRect.top) / height > 0.5;
						} else {
							after = tgTop > elTop;
						}
						} else if (!isMovingBetweenSortable) {
						after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
					}

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(activeSortable, isOwner);

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				if (prevRect.nodeType === 1) {
					prevRect = prevRect.getBoundingClientRect();
				}

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'pointercancel', this._onDrop);
			_off(ownerDocument, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, rootEl, oldIndex);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, rootEl, oldIndex, newIndex);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

			}

			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =

			tapEvt =
			touchEvt =

			moved =
			newIndex =

			lastEl =
			lastCSS =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});
			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragover':
				case 'dragenter':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(sortable, state) {
		if (sortable.lastPullMode !== 'clone') {
			state = true;
		}

		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');

			if (!state) {
				if (cloneEl.state) {
					if (sortable.options.group.revertClone) {
						rootEl.insertBefore(cloneEl, nextEl);
						sortable._animate(dragEl, cloneEl);
					} else {
						rootEl.insertBefore(cloneEl, dragEl);
					}
				}
			}

			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector)) {
					return el;
				}
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		var parent = el.host;

		return (parent && parent.nodeType) ? parent : el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, fromEl, startIndex, newIndex) {
		sortable = (sortable || rootEl[expando]);

		var evt = document.createEvent('Event'),
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();
		evt.willInsertAfter = willInsertAfter;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
			rect = lastEl.getBoundingClientRect();

		// 5 — min delta
		// abs — нельзя добавлять, а то глюки при наведении сверху
		return (evt.clientY - (rect.top + rect.height) > 5) ||
			(evt.clientX - (rect.left + rect.width) > 5);
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			return (
				(tag === '' || el.nodeName.toUpperCase() == tag) &&
				(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
			);
		}

		return false;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		return $
			? $(el).clone(true)[0]
			: (Polymer && Polymer.dom
				? Polymer.dom(el).cloneNode(true)
				: el.cloneNode(true)
			);
	}

	function _saveInputCheckedState(root) {
		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	// Fixed #973: 
	_on(document, 'touchmove', function (evt) {
		if (Sortable.active) {
			evt.preventDefault();
		}
	});

	try {
		window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
			get: function () {
				captureMode = {
					capture: false,
					passive: false
				};
			}
		}));
	} catch (err) {}

	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.6.0';
	return Sortable;
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map