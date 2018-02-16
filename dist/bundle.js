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
/******/ 	return __webpack_require__(__webpack_require__.s = 202);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(168);
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66)


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const prefix = "muk-";
/* harmony export (immutable) */ __webpack_exports__["a"] = prefix;

const form = prefix + "form";
/* harmony export (immutable) */ __webpack_exports__["b"] = form;



/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(114);
var convert = __webpack_require__(104);

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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_dom_only_props__ = __webpack_require__(8);
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

const BigLabel = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("h3")({
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
const FieldLabel = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(LabelComponent)({
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
    if (props.meta.error) {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `${props.className}` }, props.meta.error));
    }
    else {
        return null;
    }
};
const FieldError = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(FieldErrorComponent)({
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
    const isInvalid = !!props.meta.error || props.meta.invalid;
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
const Field = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(FieldComponent)({
    position: "relative",
}, (props) => {
    const theme = props.theme;
    let styles = {};
    if ((props.input && props.input.name) || props.name) {
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
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

const CssDiv = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});
const Span = (_a) => {
    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CssSpan, Object.assign({ className: className }, props), children);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Span;

const CssSpan = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("span")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});
const Ul = (_a) => {
    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CssUl, Object.assign({ className: className }, props), children);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Ul;

const CssUl = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("ul")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/* harmony default export */ __webpack_exports__["default"] = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Select; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input_containers_InputContainer__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Input_components_Input__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Input_components_TextArea__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Input_components_Select__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Input_ducks_Input__ = __webpack_require__(52);
/* unused harmony reexport Reducer */






var Input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Input_containers_InputContainer__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__Input_components_Input__["a" /* default */]);
var TextArea = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Input_containers_InputContainer__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__Input_components_TextArea__["a" /* default */]);
var Select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Input_containers_InputContainer__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__Input_components_Select__["a" /* default */]);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconEye__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reglendo_mergado_ui_icons_lib_icons_IconClose__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reglendo_mergado_ui_icons_lib_icons_IconEyeSlash__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_light_form_dist_es__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Forms_Button__ = __webpack_require__(12);
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
        this.name = __WEBPACK_IMPORTED_MODULE_8__config__["a" /* prefix */] + "input-text";
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
        const Element = props.name ? StyledLightInput : StyledInput;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__components_Forms_Field__["a" /* Field */], Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { position: "relative" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Element, Object.assign({}, props, (!props.name && inputProps), { placeholder: this.props.labels.placeholder, ref: "input", type: type === "search" || (type === "password" && this.state.passwordVisible)
                        ? "text" : props.type, "aria-invalid": isInvalid ? 1 : 0, className: `${this.name}__input \
                                ${__WEBPACK_IMPORTED_MODULE_8__config__["b" /* form */]}__input--text \
                                ${__WEBPACK_IMPORTED_MODULE_8__config__["b" /* form */]}__input--${type} \
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
TextInput.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_9__components_Forms_Field__["b" /* defaultFieldProps */], { type: "text" });
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

const StyledInput = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("input")(styles, stylesProps);
const StyledLightInput = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_7_light_form_dist_es__["b" /* Input */])(styles, stylesProps);
const ButtonEye = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_10__components_Forms_Button__["a" /* default */])({
    right: "5px",
    bottom: "8px",
    position: "absolute",
});
const ButtonClose = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_10__components_Forms_Button__["a" /* default */])({
    right: "5px",
    bottom: "8px",
    position: "absolute",
});
/* harmony default export */ __webpack_exports__["a"] = (TextInput);


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button__ = __webpack_require__(81);
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
/* unused harmony export Button */

Button.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__["b" /* defaultFieldProps */], { type: "button", icon: null, color: "blue", disabled: false, size: "", secondary: false });
const StyledField = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__["a" /* Field */])({
    display: "inline-block",
    verticalAlign: "top",
});
/* harmony default export */ __webpack_exports__["a"] = (Button);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_mergado_ui_icons_lib_icons_IconCheck__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_light_form_dist_es__ = __webpack_require__(9);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







class Checkbox extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* prefix */] + "input-checkbox";
    }
    renderLabel() {
        const _a = this.props, { input, labels } = _a, props = __rest(_a, ["input", "labels"]);
        const label = this.props.label ? this.props.label : labels.main;
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        const Element = props.name ? StyledLightInput : Input;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, { className: `${isInvalid ? `${__WEBPACK_IMPORTED_MODULE_4__config__["b" /* form */]}__group--invalid` : ""}` },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { position: "relative", display: "inline-block", verticalAlign: "middle" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Element, Object.assign({}, props, (!props.name && { checked: input.value }), (!props.name && input), { type: "checkbox", className: `${this.name}__item ${input.className}`, style: { display: "none" } })),
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
const Label = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()("div")({
    cursor: "pointer",
}, (props) => {
    const theme = props.theme;
    return {
        ":hover .muk-checkbox-input": {
            borderColor: theme.blue,
        },
    };
});
const StyledField = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["a" /* Field */])({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
    " svg": {},
});
const styles = {
    ":checked + span + span.muk-icon--check": {
        display: "inline-block",
    },
};
const stylesProps = (props) => {
    return {
        ":checked + span": {
            borderColor: `${props.theme.blue}`,
            background: `${props.theme.blue}`,
        },
    };
};
const Input = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()("input")(styles, stylesProps);
const StyledLightInput = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_6_light_form_dist_es__["b" /* Input */])(styles, stylesProps);
const StyledInput = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()("span")({
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
        top: "-3px",
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    return "_" + Math.random().toString(36).substr(2, 9);
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(124);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),
/* 16 */
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
  module.exports = __webpack_require__(171)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(170)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);




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
    },
};
const Td = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("td")(Cell, (props) => {
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
const Th = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("th")(Object.assign({}, Cell, { borderColor: "transparent", whiteSpace: "nowrap", color: "#fff", fontWeight: "bold" }), (props) => {
    return {
        padding: props.theme.table_cell_padding,
        borderBottom: props.theme.table_border_horizontal,
        fontSize: props.theme.table_header_text_size,
        textTransform: props.theme.table_header_text_transform,
    };
});
/* harmony default export */ __webpack_exports__["a"] = (DataCell);


/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
  module.exports = __webpack_require__(151)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(150)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(159);




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
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(57),
    now = __webpack_require__(166),
    toNumber = __webpack_require__(167);

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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
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

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_TextInput__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Checkbox__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_dom_only_props__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_Grid__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_GridCell__ = __webpack_require__(35);









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
        const ch = !Array.isArray(children) ? [children] : children;
        if (Array.isArray(ch)) {
            return ch.map(obj => {
                return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](obj, Object.assign({}, obj.props, { actions: this.props.bulkActions, labels: this.props.labels, selectedAll: this.state.selectedAll, handleSelectAll: this.handleSelectAll.bind(this), handleSelectRow: this.handleSelectRow.bind(this), selectedRows: this.state.selectedRows }));
            });
        }
        else {
            return false;
        }
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
const Table = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("table")({
    width: "100%",
    " .sortable-ghost": {
        opacity: 0.1,
    },
}, (props) => {
    return {
        borderLeft: props.theme.table_border_vertical,
    };
});
const TextFilter = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_4__components_Forms_TextInput__["a" /* default */])({
    paddingRight: "20px",
    display: "inline-block",
    width: "70%",
});
const CheckboxFilter = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_5__components_Forms_Checkbox__["a" /* default */])({
    whiteSpace: "nowrap",
    display: "inline-block",
});
/* harmony default export */ __webpack_exports__["a"] = (DataTable);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input__ = __webpack_require__(87);
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
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__input__["a" /* default */], { name: this.props.name, label: obj.label, value: obj.value, key: obj.value, checked: obj.value == input.value, onChange: input.onChange, bigButtons: bigButtons, hideInput: hideInput }));
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);


const Grid = (props) => {
    const { children } = props;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](GridStyle, Object.assign({}, props), children));
};
const GridStyle = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({}, (props) => {
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);


const GridCell = (props) => {
    const { children } = props;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](GridCellStyle, Object.assign({}, props), children));
};
const GridCellStyle = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({}, (props) => {
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__ = __webpack_require__(8);



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
const H1 = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("h1")({
    fontSize: "28px",
    lineHeight: "40px",
    margin: "40px 0 0 0",
    fontWeight: 700,
});
const H2 = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("h2")({
    fontSize: "24px",
    lineHeight: "32px",
    margin: "32px 0 0 0",
    fontWeight: 700,
});
const H3 = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("h3")({
    fontSize: "20px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 700,
});
const H4 = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("h4")({
    fontSize: "17px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 700,
});
const H5 = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("h5")({
    fontSize: "14px",
    lineHeight: "20px",
    margin: "20px 0 0 0",
    fontWeight: 700,
});
/* harmony default export */ __webpack_exports__["a"] = (Header);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);



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
const Wrapper = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("span")({
    verticalAlign: "middle",
});
const Indikator = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("span")({
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
const Text = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("span")({
    verticalAlign: "middle",
    "a:hover": {
        textDecoration: "none",
    },
});
/* harmony default export */ __webpack_exports__["a"] = (LittleStatus);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_unique_id__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Forms_Button__ = __webpack_require__(12);





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
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Content, { className: `${this.name}__content` }, this.props.text && typeof this.props.text == "string" ?
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
const Wrapper = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
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
const Icon = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    width: "20px",
    padding: "0 10px",
    display: "table-cell",
    verticalAlign: "middle",
});
const Content = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    padding: "20px 0px",
    boxSizing: "border-box",
    fontSize: "16px",
    textAlign: "left",
    display: "table-cell",
    verticalAlign: "middle",
});
const CloseButton = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color__ = __webpack_require__(4);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = colors;

const theme = Object.assign({}, colors, { warning: colors.orange, error: colors.red, success: colors.green, info: "white", inactive: colors.grey, message: colors.yellow, radius: "0px", selected_background: __WEBPACK_IMPORTED_MODULE_0_color__(colors.yellow).string(), hover_background: __WEBPACK_IMPORTED_MODULE_0_color__(colors.yellow).fade(0.5).string(), section_border: "none", section_padding: "0", form_label_text_size: "14px", form_label_text_weight: "normal", input_border: "1px solid " + colors.decoration, input_border_active: "1px solid " + colors.decoration, input_border_error: "1px solid " + colors.decoration, button_text_transform: "uppercase", button_text_size: "14px", button_text_weight: "bold", table_border_vertical: "1px dotted " + colors.decoration, table_border_horizontal: "1px solid " + colors.decoration, table_header_text_size: "13px", table_header_text_transform: "none", table_cell_padding: "6px 10px", table_cell_text_size: "14px", nav_background: colors.decoration, nav_link_color: colors.text, nav_link_background: "transparent", nav_link_background_active: colors.decoration, nav_link_border: "none" });
/* harmony default export */ __webpack_exports__["b"] = (theme);


/***/ }),
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(45);

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
/* 43 */
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
/* 44 */
/***/ (function(module, exports) {

module.exports = function(r, g, b, a) {
  return 'rgba('+
    [r, g, b, a/100].join(',')+')';
};

/***/ }),
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cssifyDeclaration;

var _hyphenateProperty = __webpack_require__(15);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cssifyDeclaration(property, value) {
  return (0, _hyphenateProperty2.default)(property) + ':' + value;
}
module.exports = exports['default'];

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Set a value by a dot path.
 * @param obj The object to evaluate.
 * @param prop The path to be set.
 * @param val The value to set.
 */
function set(obj, prop, value) {
	prop = typeof prop === 'number' ? propToArray(prop.toString()) : typeof prop === 'string' ? propToArray(prop) : prop;

	var setPropImmutableRec = function(obj, prop, value, i) {
		var clone, head = prop[i];

		if (prop.length > i) {
			if (Array.isArray(obj)) {
				head = getArrayIndex(head, obj);
				clone = obj.slice();
			} else {
				clone = Object.assign({}, obj);
			}
			clone[head] = setPropImmutableRec(obj[head] !== undefined ? obj[head] : {}, prop, value, i + 1);
			return clone;
		}

		return typeof value === 'function' ? value(obj) : value;
	};

	return setPropImmutableRec(obj, prop, value, 0);
}

/**
 * Get a value by a dot path.
 * @param obj The object to evaluate.
 * @param prop The path to value that should be returned.
 */
function get(obj, prop, value) {
	prop = typeof prop === 'number' ? propToArray(prop.toString()) : typeof prop === 'string' ? propToArray(prop) : prop;

	for (var i = 0; i < prop.length; i++) {
		if (typeof obj !== 'object') {
			return value;
		}
		var head = prop[i];
		if (Array.isArray(obj) && head === '$end') {
			head = obj.length - 1;
		}
		obj = obj[head];
	}

	return obj;
}

/**
 * Delete a property by a dot path.
 * If target container is an object, the property is deleted.
 * If target container is an array, the index is deleted.
 * If target container is undefined, nothing is deleted.
 * @param obj The object to evaluate.
 * @param prop The path to the property or index that should be deleted.
 */
function _delete(obj, prop) {
	prop = typeof prop === 'number' ? propToArray(prop.toString()) : typeof prop === 'string' ? propToArray(prop) : prop;

	var deletePropImmutableRec = function(obj, prop, i) {
		var clone, head = prop[i];

		if (typeof obj !== 'object' ||
			!Array.isArray(obj) && obj[head] === undefined) {

			return obj;
		}

		if (prop.length - 1 > i) {
			if (Array.isArray(obj)) {
				head = getArrayIndex(head, obj);
				clone = obj.slice();
			} else {
				clone = Object.assign({}, obj);
			}

			clone[head] = deletePropImmutableRec(obj[head], prop, i + 1);
			return clone;
		}

		if (Array.isArray(obj)) {
			head = getArrayIndex(head, obj);
			clone = [].concat(obj.slice(0, head), obj.slice(head + 1));
		} else {
			clone = Object.assign({}, obj);
			delete clone[head];
		}

		return clone;
	};

	return deletePropImmutableRec(obj, prop, 0);
}

/**
 * Toggles a value.  The target value is evaluated using Boolean(currentValue).  The result will always be a JSON boolean.
 * Be careful with strings as target value, as "true" and "false" will toggle to false, but "0" will toggle to true.
 * Here is what Javascript considers false:  0, -0, null, false, NaN, undefined, and the empty string ("")
 * @param obj The object to evaluate.
 * @param prop The path to the value.
 */
function toggle(obj, prop) {
	var curVal = get(obj, prop);
	return set(obj, prop, !Boolean(curVal));
}

/**
 * Merges a value.  The target value must be an object, array, null, or undefined.
 * If target is an object, Object.assign({}, target, param) is used.
 * If target an array, target.concat(param) is used.
 * If target is null or undefined, the value is simply set.
 * @param obj The object to evaluate.
 * @param prop The path to the value.
 * @param val The value to merge into the target value.
 */
function merge(obj, prop, val) {
	var curVal = get(obj, prop);
	if (typeof curVal === 'object') {
		if (Array.isArray(curVal)){
			return set(obj, prop, curVal.concat(val));
		} else if (curVal === null){
			return set(obj, prop, val);
		}
		else {
			var merged = Object.assign({}, curVal, val);
			return set(obj, prop, merged);
		}
	} else if (typeof curVal === 'undefined'){
		return set(obj, prop, val);
	}
	else {
		return obj;
	}
}

function getArrayIndex(head, obj) {
	if (head === '$end') {
		head = Math.max(obj.length - 1, 0);
	}
	if (!/^\+?\d+$/.test(head)) {
		throw new Error('Array index \'' + head + '\' has to be an integer');
	}
	return parseInt(head);
}

function propToArray(prop) {
	return prop.split('.').reduce(function (ret, el, index, list) {
		var last = index > 0 && list[index - 1];
		if (last && /(?:^|[^\\])\\$/.test(last)) {
			ret.pop();
			ret.push(last.slice(0, -1) + '.' + el);
		} else {
			ret.push(el);
		}
		return ret;
	}, []);
}

module.exports = {
	set: set,
	get: get,
	delete: _delete,
	toggle: toggle,
	merge: merge
};


/***/ }),
/* 50 */
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



var emptyFunction = __webpack_require__(21);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 51 */
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBoundType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dot_prop_immutable__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dot_prop_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dot_prop_immutable__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
var INIT_FORM = 'INIT_FORM';
var changeField = function changeField(type, name, value) {
    return {
        type: type,
        name: name,
        value: value
    };
};

var createBoundType = function createBoundType(namespace) {
    return UPDATE_INPUT_VALUE + '.' + namespace;
};

/* unused harmony default export */ var _unused_webpack_default_export = (function (namespace, defaultState, onStateChange, actionHandlers) {
    return function () {
        var _extends2;

        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState || {};
        var action = arguments[1];

        var boundType = createBoundType(namespace);

        var reducer = _extends((_extends2 = {}, _defineProperty(_extends2, INIT_FORM, function (state, action) {
            if (namespace === action.payload.form) {
                return action.payload.data;
            }
            return state;
        }), _defineProperty(_extends2, boundType, function () {
            var fieldPathWithoutNamespace = action.name.replace(namespace + '.', '');
            var newState = __WEBPACK_IMPORTED_MODULE_0_dot_prop_immutable___default.a.set(state, fieldPathWithoutNamespace, action.value);
            return onStateChange && onStateChange(newState) || newState;
        }), _extends2), actionHandlers);

        return reducer[action.type] ? reducer[action.type](state, action) : state;
    };
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(23);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
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
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(158);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(56);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(161);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 57 */
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(60);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

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

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

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
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
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
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

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
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
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

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(61);


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

      if (process.env.NODE_ENV !== 'production') __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(31);



function verifyPlainObject(value, displayName, methodName) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
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

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
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
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
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
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
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
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
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

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Forms_Button__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Forms_Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Forms_Checkbox__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_1__components_Forms_Checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Forms_CheckboxContainer__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxContainer", function() { return __WEBPACK_IMPORTED_MODULE_2__components_Forms_CheckboxContainer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_ColorPicker__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return __WEBPACK_IMPORTED_MODULE_3__components_Forms_ColorPicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_Autocomplete__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return __WEBPACK_IMPORTED_MODULE_4__components_Forms_Autocomplete__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Radio__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_5__components_Forms_Radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Forms_Range__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return __WEBPACK_IMPORTED_MODULE_6__components_Forms_Range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Forms_Select__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_7__components_Forms_Select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Forms_TextInput__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return __WEBPACK_IMPORTED_MODULE_8__components_Forms_TextInput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Forms_Textarea__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return __WEBPACK_IMPORTED_MODULE_9__components_Forms_Textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_LittleStatus__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LittleStatus", function() { return __WEBPACK_IMPORTED_MODULE_10__components_LittleStatus__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Paginator__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return __WEBPACK_IMPORTED_MODULE_11__components_Paginator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Placeholder__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return __WEBPACK_IMPORTED_MODULE_12__components_Placeholder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_PopupHint__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PopupHint", function() { return __WEBPACK_IMPORTED_MODULE_13__components_PopupHint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Spinner__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_14__components_Spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Toasts__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toasts", function() { return __WEBPACK_IMPORTED_MODULE_15__components_Toasts__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Toast__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_16__components_Toast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Nav__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TopNav", function() { return __WEBPACK_IMPORTED_MODULE_17__components_Nav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_NavLink__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_18__components_NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_WizardNav__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WizardNav", function() { return __WEBPACK_IMPORTED_MODULE_19__components_WizardNav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_WizardStep__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return __WEBPACK_IMPORTED_MODULE_20__components_WizardStep__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Datagrid_DataTable__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return __WEBPACK_IMPORTED_MODULE_21__components_Datagrid_DataTable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Datagrid", function() { return __WEBPACK_IMPORTED_MODULE_21__components_Datagrid_DataTable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_Datagrid_DataRow__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataRow", function() { return __WEBPACK_IMPORTED_MODULE_22__components_Datagrid_DataRow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_Datagrid_DataCell__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataCell", function() { return __WEBPACK_IMPORTED_MODULE_23__components_Datagrid_DataCell__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_Datagrid_DataHeader__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataHeader", function() { return __WEBPACK_IMPORTED_MODULE_24__components_Datagrid_DataHeader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_Datagrid_DataBody__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataBody", function() { return __WEBPACK_IMPORTED_MODULE_25__components_Datagrid_DataBody__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_Layout_Fieldset__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return __WEBPACK_IMPORTED_MODULE_26__components_Layout_Fieldset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_Layout_Header__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return __WEBPACK_IMPORTED_MODULE_27__components_Layout_Header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_Layout_Section__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return __WEBPACK_IMPORTED_MODULE_28__components_Layout_Section__["a"]; });
































/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var h = __webpack_require__(0).createElement;
var PropTypes = __webpack_require__(16);
var cxs = __webpack_require__(67);
var PureComponent = __webpack_require__(0).PureComponent;
var shallowCompare = __webpack_require__(7).default;

module.exports = function (C) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var Comp = function (_PureComponent) {
      _inherits(Comp, _PureComponent);

      function Comp() {
        _classCallCheck(this, Comp);

        return _possibleConstructorReturn(this, (Comp.__proto__ || Object.getPrototypeOf(Comp)).apply(this, arguments));
      }

      _createClass(Comp, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          return shallowCompare(this, nextProps, nextState);
        }
      }, {
        key: 'render',
        value: function render() {
          var props = this.props;
          var context = this.context;
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
        }
      }]);

      return Comp;
    }(PureComponent);

    Comp.contextTypes = {
      theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    };

    return Comp;
  };
};

module.exports.css = cxs.css;
module.exports.reset = cxs.reset;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _static = __webpack_require__(126);

var _static2 = _interopRequireDefault(_static);

var _cssInJsUtils = __webpack_require__(117);

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
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shallow_compare__ = __webpack_require__(7);


class IconCheck extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    shouldComponentUpdate(nextProps) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_shallow_compare__["default"])(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--check ${p.addClass} ${p.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M37.3 12.6q0 .9-.6 1.6L17.5 33.3q-.6.7-1.5.7t-1.6-.7L3.3 22.2q-.6-.6-.6-1.5t.6-1.5l3.1-3q.6-.7 1.5-.7t1.5.7l6.6 6.5L30.6 8.1q.6-.6 1.5-.6t1.5.6l3.1 3q.6.6.6 1.5z" }))),
            !p.textFirst && textEl));
    }
}
IconCheck.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
/* harmony default export */ __webpack_exports__["a"] = (IconCheck);
//# sourceMappingURL=IconCheck.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shallow_compare__ = __webpack_require__(7);


class IconChevronDown extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    shouldComponentUpdate(nextProps) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_shallow_compare__["default"])(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--chevron-down ${p.addClass} ${p.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M37.6 18L21 34.6q-.4.4-1 .4t-1-.4L2.4 18q-.4-.4-.4-1t.4-1l3.7-3.7q.5-.4 1-.4t1 .4L20 24.2l11.9-11.9q.4-.4 1-.4t1 .4l3.7 3.7q.4.4.4 1t-.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconChevronDown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
/* harmony default export */ __webpack_exports__["a"] = (IconChevronDown);
//# sourceMappingURL=IconChevronDown.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shallow_compare__ = __webpack_require__(7);


class IconClose extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    shouldComponentUpdate(nextProps) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_shallow_compare__["default"])(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--close ${p.addClass} ${p.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M33.5 29.5q0 .9-.7 1.5l-3 3.1q-.6.6-1.5.6t-1.5-.6l-6.6-6.6-6.5 6.6q-.7.6-1.6.6t-1.5-.6l-3-3.1q-.6-.6-.6-1.5t.6-1.5l6.5-6.6-6.5-6.5q-.6-.7-.6-1.6t.6-1.5l3-3q.6-.6 1.5-.6t1.6.6l6.5 6.6 6.6-6.6q.6-.6 1.5-.6t1.5.6l3.1 3q.6.7.6 1.5t-.6 1.6l-6.6 6.5 6.6 6.6q.6.6.6 1.5z" }))),
            !p.textFirst && textEl));
    }
}
IconClose.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
/* harmony default export */ __webpack_exports__["a"] = (IconClose);
//# sourceMappingURL=IconClose.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shallow_compare__ = __webpack_require__(7);


class IconEye extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    shouldComponentUpdate(nextProps) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_shallow_compare__["default"])(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--eye ${p.addClass} ${p.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M37.1 21.4q-3.3-5.2-8.5-7.8 1.4 2.3 1.4 5 0 4.1-2.9 7t-7.1 3-7.1-3-2.9-7q0-2.7 1.4-5.1-5.1 2.7-8.5 7.9 2.9 4.6 7.4 7.3t9.7 2.7 9.7-2.7 7.4-7.3zm-16-8.5q0-.5-.3-.8t-.8-.3q-2.8 0-4.8 2t-2 4.8q0 .4.3.7t.8.3.7-.3.4-.7q0-2 1.3-3.3t3.3-1.4q.4 0 .8-.3t.3-.7zM40 21.4q0 .8-.4 1.6-3.2 5.1-8.4 8.2T20 34.3 8.8 31.2.4 23q-.4-.8-.4-1.6t.4-1.5q3.2-5.1 8.4-8.2T20 8.6t11.1 3.1 8.5 8.2q.4.8.4 1.5z" }))),
            !p.textFirst && textEl));
    }
}
IconEye.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
/* harmony default export */ __webpack_exports__["a"] = (IconEye);
//# sourceMappingURL=IconEye.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shallow_compare__ = __webpack_require__(7);


class IconEyeSlash extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    shouldComponentUpdate(nextProps) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_shallow_compare__["default"])(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--eye-slash ${p.addClass} ${p.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M12.4 29.8l1.7-3.1q-1.9-1.5-3-3.6T10 18.6q0-2.7 1.4-5-5.2 2.6-8.5 7.8 3.7 5.8 9.5 8.4zm8.7-16.9q0-.5-.3-.8t-.8-.3q-2.8 0-4.8 2t-2 4.8q0 .4.3.7t.8.3.7-.3.4-.7q0-1.9 1.3-3.3t3.3-1.4q.4 0 .8-.3t.3-.7zm8.1-4.3v.2q-2.4 4.2-7.1 12.6t-7 12.7l-1.1 2q-.2.3-.7.3-.2 0-2.9-1.5-.4-.3-.4-.7 0-.2 1-1.9-3.2-1.5-5.9-3.9T.4 23q-.4-.7-.4-1.6t.4-1.5q3.5-5.3 8.5-8.3t11.1-3q2 0 4 .4l1.2-2.2q.2-.4.6-.4.2 0 .4.2t.7.3.8.4.7.4.4.3q.4.2.4.6zm.8 10q0 3.1-1.8 5.6t-4.6 3.7l6.2-11.2q.2 1 .2 1.9zm10 2.8q0 .8-.4 1.6-.9 1.4-2.5 3.2-3.3 3.8-7.7 6T20 34.3l1.7-3q4.7-.4 8.7-3t6.7-6.9q-2.5-4-6.3-6.5l1.5-2.5q2.1 1.4 4 3.4t3.3 4.1q.4.7.4 1.5z" }))),
            !p.textFirst && textEl));
    }
}
IconEyeSlash.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
/* harmony default export */ __webpack_exports__["a"] = (IconEyeSlash);
//# sourceMappingURL=IconEyeSlash.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shallow_compare__ = __webpack_require__(7);


class IconHintHelp extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    shouldComponentUpdate(nextProps) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_shallow_compare__["default"])(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--hint-help ${p.addClass} ${p.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M20 0C8.955 0 0 8.955 0 20s8.955 20 20 20 20-8.955 20-20S31.045 0 20 0zm0 35.11a2.575 2.575 0 1 1 0-5.15 2.575 2.575 0 0 1 0 5.15zm4.54-12.295c-1.05.577-2.04 1.72-2.04 2.185a2.501 2.501 0 0 1-5 0c0-3.175 2.91-5.62 4.63-6.565C24.66 17.04 25 15.52 25 14.22c0-3.672-3.132-4.22-5-4.22-2.408 0-5 1.58-5 5.052a2.5 2.5 0 0 1-5 0C10 8.522 15.153 5 20 5c4.978 0 10 2.85 10 9.22 0 3.707-1.835 6.602-5.46 8.595z" }))),
            !p.textFirst && textEl));
    }
}
IconHintHelp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
/* harmony default export */ __webpack_exports__["a"] = (IconHintHelp);
//# sourceMappingURL=IconHintHelp.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shallow_compare__ = __webpack_require__(7);


class IconHintInfo extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    shouldComponentUpdate(nextProps) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_shallow_compare__["default"])(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--hint-info ${p.addClass} ${p.className}`;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm3.826 5.568c.605 0 1.115.208 1.512.614.394.404.594.922.594 1.539a3.078 3.078 0 0 1-.836 2.127c-.564.62-1.218.933-1.94.933a1.98 1.98 0 0 1-1.488-.629c-.392-.41-.59-.945-.59-1.593 0-.82.27-1.529.8-2.106.542-.587 1.195-.885 1.948-.885zM22.2 12.691c.603 0 1.084.144 1.428.428.362.3.555.723.555 1.223 0 .323-.164 1.297-1.57 6.006-1.67 5.604-2.516 9.015-2.516 10.136a.528.528 0 0 0 .09.323.39.39 0 0 0 .05.06c.442-.087 2.692-1.08 4.674-2.017a.403.403 0 0 1 .504.136v.002a.403.403 0 0 1-.057.52c-2.23 2.1-3.822 3.412-4.865 4.008-1.077.616-1.95.916-2.668.916-.673 0-1.218-.222-1.623-.657-.398-.425-.6-1.009-.6-1.734 0-2.056 1.182-6.883 3.612-14.754.1-.327.148-.616.148-.861a.41.41 0 0 0-.006-.076h-.021c-.241 0-.537.108-.877.322-.415.26-3.266 1.426-3.834 1.658a.403.403 0 0 1-.45-.642c1.616-1.78 3.119-3.07 4.466-3.83 1.39-.785 2.555-1.167 3.56-1.167z" }))),
            !p.textFirst && textEl));
    }
}
IconHintInfo.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
/* harmony default export */ __webpack_exports__["a"] = (IconHintInfo);
//# sourceMappingURL=IconHintInfo.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mergadoColors = {
    left: "#7fba2c",
    bottom: "#007b20",
    right: "#00a9b8",
    top: "transparent",
};
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
/* harmony export (immutable) */ __webpack_exports__["a"] = animation;



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const animation = {
    "@keyframes rotate": {
        "0%": {
            transform: "rotate(0deg)",
        },
        "100%": {
            transform: "rotate(360deg)",
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = animation;



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sortablejs__ = __webpack_require__(191);
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
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataCell__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Checkbox__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Forms_Button__ = __webpack_require__(12);







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
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Header, { className: `${this.name} ${this.name}--header ${addClass} ${className}`, selected: selectedRows && selectedRows.length > 0, style: style },
                actions.length > 0 &&
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__DataCell__["a" /* default */], { type: "header", style: { width: "1%" } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_Forms_Checkbox__["a" /* default */], { input: { onChange: this.props.handleSelectAll, checked: this.props.selectedAll } })),
                kids,
                selectedRows && selectedRows.length > 0 ?
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
const ActionsIcons = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()("div")({
    whiteSpace: "nowrap",
    " path": {
        fill: "white!important",
    },
});
/* unused harmony export ActionsIcons */

const Header = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()("tr")((props) => {
    return {
        background: props.selected ? props.theme.blue : "#333",
    };
});
/* harmony default export */ __webpack_exports__["a"] = (DataHeader);


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataCell__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_Checkbox__ = __webpack_require__(13);





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
const Tr = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("tr")({}, (props) => {
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
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_TextInput__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_unique_id__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__ = __webpack_require__(5);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};






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
        const node = document.getElementById("autocomplete-input");
        const rect = node.getBoundingClientRect();
        const glob = global;
        const computedStyle = glob
            .getComputedStyle(node);
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
        const el = document.getElementById("autocomplete-input");
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
        const _a = this.props, { labels, meta, input } = _a, props = __rest(_a, ["labels", "meta", "input"]);
        const inputProps = Object.assign({}, this.props.input, {
            onFocus: this.composeEventHandlers(this.handleInputFocus.bind(this), input.onFocus),
            onBlur: this.handleInputBlur.bind(this),
            onChange: this.handleChange.bind(this),
            onKeyDown: this.composeEventHandlers(this.handleKeyDown.bind(this), input.onKeyDown),
            onKeyUp: this.composeEventHandlers(this.handleKeyUp.bind(this), input.onKeyUp),
            onClick: this.composeEventHandlers(this.handleInputClick.bind(this), input.onClick),
        });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["a" /* Field */], { label: "" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Forms_TextInput__["a" /* default */], Object.assign({}, props, { id: "autocomplete-input", labels: labels, meta: meta, input: inputProps })),
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
        return (item.value.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.text);
    } });
const Menu = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.95)",
    padding: 0,
    fontSize: "90%",
    position: "absolute",
    top: "100% !important",
    left: "2px !important",
    margin: "1px 0",
    overflow: "auto",
    maxHeight: "250px",
    zIndex: 1000,
    marginTop: "5px",
}, props => {
    const theme = props.theme;
    return {
        border: `1px solid ${theme.decoration}`,
        borderRadius: theme.radius,
    };
});
const MenuItem = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types__ = __webpack_require__(82);
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
    else if (type === "submit") {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__types__["c" /* Submit */], Object.assign({}, others, { name: name, title: labels.title, input: input, label: others.label ? others.label : labels.main }));
    }
    else if (type === "void") {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__types__["d" /* Void */], Object.assign({}, others, { name: name, icon: icon, title: labels.title, children: children, label: others.label ? others.label : labels.main }));
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null);
    }
};
const UniversalButton = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(UniversalButtonComponent)({
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
        top: "auto",
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
                fill: props.keepColors ? "keep" : (props.theme.blue + "!important"),
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
                    fill: props.keepColors ? "keep" : ((props.color === "decoration" ? props.theme.blue : c) + "!important"),
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
                    fill: props.keepColors ? "keep" : ((props.color === "decoration" ? props.theme.blue : "white") + "!important"),
                },
            };
        }
    }
    return Object.assign({}, size, disabled, color, { borderRadius: props.theme.radius, textTransform: props.theme.button_text_transform, fontWeight: props.theme.button_text_weight, fontSize: props.size === "tiny" ? "13px" : props.theme.button_text_size });
});
/* harmony export (immutable) */ __webpack_exports__["a"] = UniversalButton;



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_dom_only_props__ = __webpack_require__(8);
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
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_only_props__["a" /* default */])(props), { href: link, className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Href;

const Button = (_a) => {
    var { name, icon, label, title, className, styleClass, input, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "styleClass", "input", "children"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", Object.assign({}, input, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_only_props__["a" /* default */])(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children));
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Button;

const Submit = (_a) => {
    var { name, label, title, className, styleClass, input, children } = _a, props = __rest(_a, ["name", "label", "title", "className", "styleClass", "input", "children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", Object.assign({ type: "submit" }, input, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_only_props__["a" /* default */])(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, value: label, title: title }));
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Submit;

const Void = (_a) => {
    var { name, icon, label, title, className, styleClass, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "styleClass", "children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_only_props__["a" /* default */])(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = Void;



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_TextInput__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce__ = __webpack_require__(28);
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
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__list__["a" /* QueryList */], { className: `${this.name}__list ${isInvalid ? `${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__group--invalid` : ""}`, name: this.props.name, height: height, activeFirst: props.activeFirst, options: options, value: this.props.input.value ? this.props.input.value : [], input: this.props.input, singleChoice: this.props.singleChoice, showInput: this.props.showInput, labels: labels, meta: meta })));
    }
}
CheckboxContainer.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__components_Forms_Field__["b" /* defaultFieldProps */], { availableQueries: [], singleChoice: false, withoutFilter: false, height: 300, showInput: false, activeFirst: true, labels: {
        main: "",
        allProducts: "All products",
        placeholder: "",
        invalid: "",
    } });
const StyledField = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_4__components_Forms_Field__["a" /* Field */])({
    " > .muk-form__group--invalid": {
        border: "none !important",
    },
});
/* harmony default export */ __webpack_exports__["a"] = (CheckboxContainer);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Forms_Radio__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_Checkbox__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_LittleStatus__ = __webpack_require__(37);
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
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", null,
            showInput &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, singleChoice ?
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Forms_Radio__["a" /* default */], { items: [
                            { value: option.id, label: "" }
                        ], input: {
                            value: checked ? option.id : null,
                            onChange: onClick,
                        }, name: name, key: "input", style: { display: showInput ? "inline-block" : "none", } })
                    :
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Forms_Checkbox__["a" /* default */], { name: name + "." + option.id, key: "input", style: { display: showInput ? "inline-block" : "none", paddingRight: "5px" } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](QueryItemLabel, { name: name, option: option, allProducts: labels.allProducts, showInput: showInput }))));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = QueryItem;

const QueryItemLabel = (_a) => {
    var { name, option, allProducts, className, showInput } = _a, props = __rest(_a, ["name", "option", "allProducts", "className", "showInput"]);
    let label = (option.name === "♥ALLPRODUCTS♥" ? allProducts : option.name);
    if (option.link !== undefined) {
        label = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: option.link }, label);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, { className: `${name}__label ${className}`, key: "label", disabled: option.disabled },
        label,
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Count, { className: `${name}__count` }, typeof option.product_count !== "undefined" ? `(${option.product_count})` : ""),
        option.active !== undefined &&
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_LittleStatus__["a" /* default */], { style: { float: showInput ? "right" : "left" }, type: option.active ? "success" : "inactive" })));
};
/* unused harmony export QueryItemLabel */

const Li = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("li")({
    display: "table",
    background: "white",
    fontWeight: "normal",
    width: "100%",
    " > label": {
        padding: "10px",
        display: "block",
        cursor: "pointer",
    },
    "& span.muk-icon--check": {
        top: "-1px !important",
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
            " > label": {
                cursor: "default",
            },
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

const Label = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("span")({
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
const Count = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("span")({
    color: "#888",
    fontSize: "0.8em",
});


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item__ = __webpack_require__(84);




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
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__item__["a" /* QueryItem */], { name: name, option: option, index: index, onClick: handler, checked: value.indexOf(option.id) > -1, singleChoice: singleChoice, value: value, showInput: showInput, labels: labels, key: option.id + option.name });
    });
};
const QueryList = ({ name, className, options, value, input, height, singleChoice, showInput, activeFirst, labels, meta }) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](List, { className: `${name}__list ${className}`, height: height }, renderOptions(name, meta.initial && activeFirst ? options.sort(sortOptions(meta.initial)) : options, value, input, singleChoice, showInput, labels)));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = QueryList;

const List = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("ul")({
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
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_color__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_input_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_light_form_dist_es__ = __webpack_require__(9);
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
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_light_form_dist_es__["b" /* Input */], Object.assign({}, props, (!props.name && input), { type: "hidden", value: background })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_input_color__, { value: color, defaultValue: "#345678", onChange: this.handleChanged }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("style", null, style)));
    }
}
ColorPicker.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["b" /* defaultFieldProps */], { color: "#000000" });
const StyledField = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_5__components_Forms_Field__["a" /* Field */])({
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
const ColorBox = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()("div")({
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
const Popover = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()("div")({
    position: "absolute",
    zIndex: 200,
});
const Cover = __WEBPACK_IMPORTED_MODULE_2__reglendo_cxs_component___default()("div")({
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
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Forms_Button__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_light_form_dist_es__ = __webpack_require__(9);
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
    const Element = name ? StyledLightInput : Input;
    if (bigButtons) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](BigLabel, { className: `${name}__item ${props.className}`, key: value },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Element, { name: name, value: value, type: "radio", className: `${this.name}__item`, style: { display: "none" }, "data-big": true }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Forms_Button__["a" /* default */], { secondary: true, style: { display: "block" }, type: "void", input: { onClick: () => false } },
                !hideInput ?
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { verticalAlign: "middle" } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledInput, { className: "muk-checkbox-input" }),
                        "\u00A0")
                    :
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { verticalAlign: "middle" } }, label)));
    }
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, { className: `${name}__item ${props.className}`, key: value },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Element, { name: name, value: value, type: "radio", className: `${this.name}__item`, style: { display: "none" }, "data-big": false }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "muk-button__item" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledInput, { className: "muk-checkbox-input" }),
            "\u00A0",
            label));
};
const Label = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("label")({
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
const BigLabel = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("label")({
    display: "table-cell",
    marginRight: "5px",
    verticalAlign: "top",
    " .muk-popup_hint__trigger": {
        lineHeight: "16px",
    },
    " .muk-button__item": {
        borderRadius: 0,
        margin: "0 0 0 -1px",
        lineHeight: "16px",
        padding: "16px",
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
const styledProps = (props) => {
    const styledInput = {};
    if (props["data-big"]) {
        return {
            "&:checked + .muk-button__item .muk-checkbox-input": {
                border: `6px solid white`,
            },
            "&:checked + .muk-button__item": {
                background: props.theme.blue,
                color: "white",
            },
            "&:checked + .muk-button__item *": {
                color: "white !importat",
                fill: "white !important",
            },
        };
    }
    else {
        return {
            "&:checked + .muk-button__item .muk-checkbox-input": {
                border: `6px solid` + props.theme.blue,
            },
        };
    }
};
const Input = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("input")(styledProps);
const StyledLightInput = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_3_light_form_dist_es__["b" /* Input */])(styledProps);
const StyledInput = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("span")({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "middle !important",
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
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_light_form_dist_es__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Forms_TextInput__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_Grid__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Layout_GridCell__ = __webpack_require__(35);
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
        this.name = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* prefix */] + "input-range";
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
        const Element = props.name ? StyledLightInput : StyledInput;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledField, Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Layout_Grid__["a" /* default */], { cols: "100px auto" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__components_Layout_GridCell__["a" /* default */], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_Forms_TextInput__["a" /* default */], { name: props.name, type: "number", max: this.props.max, min: this.props.min, step: this.props.step, value: this.props.value })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__components_Layout_GridCell__["a" /* default */], { style: { padding: "5px 0 5px 10px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Element, Object.assign({}, (!props.name && input), { name: props.name, className: `${this.name}__item
                                        ${__WEBPACK_IMPORTED_MODULE_5__config__["b" /* form */]}__input--text ${__WEBPACK_IMPORTED_MODULE_5__config__["b" /* form */]}__input--range`, type: "range", max: this.props.max, min: this.props.min, step: this.props.step }))))));
    }
}
Range.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_6__components_Forms_Field__["b" /* defaultFieldProps */], { max: 50, min: 0, step: 1, default: null });
const StyledField = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_6__components_Forms_Field__["a" /* Field */])({
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
const styles = {
    padding: 0,
    border: "none",
    background: "transparent",
    appearance: "none",
};
const StyledInput = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("input")(styles);
const StyledLightInput = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_4_light_form_dist_es__["b" /* Input */])(styles);
/* harmony default export */ __webpack_exports__["a"] = (Range);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconChevronDown__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_unique_id__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_light_form_dist_es__ = __webpack_require__(9);
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
        const Element = props.name ? StyledLightSelect : StyledSelect;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_Forms_Field__["a" /* Field */], Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { position: "relative" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Element, Object.assign({}, props, (!props.name && input), { className: `${this.name}__item ${this.props.className}`, "aria-invalid": isInvalid ? 1 : 0 }), children ? children : this.renderOptions()),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconChevronDown__["a" /* default */], { size: 10, style: { opacity: 0.6, position: "absolute", bottom: "9px",
                        right: "10px", pointerEvents: "none" } }))));
    }
}
Select.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_7__components_Forms_Field__["b" /* defaultFieldProps */], { options: [], size: 0 });
const styles = {
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
};
const stylesProps = (props) => {
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
};
const StyledSelect = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("select")(styles, stylesProps);
const StyledLightSelect = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_8_light_form_dist_es__["c" /* Select */])(styles, stylesProps);
/* harmony default export */ __webpack_exports__["a"] = (Select);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextInput__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_light_form_dist_es__ = __webpack_require__(9);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};






const StyledTextarea = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("textarea")(__WEBPACK_IMPORTED_MODULE_4__TextInput__["b" /* styles */], __WEBPACK_IMPORTED_MODULE_4__TextInput__["c" /* stylesProps */]);
const StyledLightTextarea = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(__WEBPACK_IMPORTED_MODULE_5_light_form_dist_es__["a" /* TextArea */])(__WEBPACK_IMPORTED_MODULE_4__TextInput__["b" /* styles */], __WEBPACK_IMPORTED_MODULE_4__TextInput__["c" /* stylesProps */]);
class Textarea extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.name = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* prefix */] + "textarea";
    }
    render() {
        const { input, labels, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        const Element = props.name ? StyledLightTextarea : StyledTextarea;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__["a" /* Field */], Object.assign({}, props, { name: this.name }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Element, Object.assign({}, props, (!props.name && input), { height: this.props.height, "aria-invalid": isInvalid ? 1 : 0, className: `${this.name}__input
                                ${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__input--text
                                ${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* form */]}__input--textarea
                    `, placeholder: labels.placeholder }), input.value)));
    }
}
Textarea.defaultProps = Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__components_Forms_Field__["b" /* defaultFieldProps */], { height: 100 });
/* harmony default export */ __webpack_exports__["a"] = (Textarea);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_dom_only_props__ = __webpack_require__(8);




const Fieldset = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FFieldset, Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_dom_only_props__["a" /* default */])(props)),
        header && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], { type: "3" }, header),
        children));
};
const FFieldset = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("fieldset")({
    padding: 0,
    margin: 0,
});
/* harmony default export */ __webpack_exports__["a"] = (Fieldset);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_only_props__ = __webpack_require__(8);



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
const Prefix = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    float: "left",
    margin: "-10px",
    padding: "10px",
    marginRight: "15px",
    paddingRight: "15px",
    borderRight: "1px solid #ccc",
});
const Suffix = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    float: "right",
    margin: "-10px",
    padding: "10px",
    marginLeft: "15px",
    paddingLeft: "15px",
    borderLeft: "1px solid #ccc",
});
const Header = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("h3")({
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
const SSection = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("section")({
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
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);



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
const Logo = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
});
const Component = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("nav")({
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
});
/* harmony default export */ __webpack_exports__["a"] = (Nav);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);




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
const Link = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("li")({
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
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_unique_id__ = __webpack_require__(14);





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
const Button = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("a")({
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
const Disabled = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(Button)({
    display: "inline-block",
    opacity: 0.2,
    color: "black",
    pointerEvents: "none",
    ":hover": {
        background: "initial",
        color: "black",
    },
});
const Active = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(Button)({
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
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(2);





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
const Shadow = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
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
const Container = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
});
/* harmony default export */ __webpack_exports__["a"] = (Placeholder);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);



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
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reglendo_mergado_ui_icons_lib_icons_IconHintInfo__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reglendo_mergado_ui_icons_lib_icons_IconHintHelp__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styled_themes_default__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Bubble__ = __webpack_require__(97);









class PopupHint extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.name = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* prefix */] + "popup_hint";
        this.state = {
            expanded: false,
        };
        this.collapse = this.collapse.bind(this);
        this.expand = this.expand.bind(this);
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
            newX = buttonPosition.left - hint.offsetWidth + 14;
            arrowLeft = "";
            arrowRight = 0 + "px";
        }
        else {
            newX = (buttonPosition.left - 2) > 0 ? (buttonPosition.left - 8) : 0;
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
        let top = 10;
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
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](HintContent, { hover: this.props.hover, className: `${this.name}__content`, id: `${this.name}__content` }, this.props.children),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: "arrow", style: {
                            width: "12px",
                            height: "12px",
                            position: "absolute",
                            display: "inline-block",
                            zIndex: 1000,
                            bottom: "11px"
                        } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](HintArrow, { hover: this.props.hover, className: `${this.name}__arrow` }))))));
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { cursor: "help", verticalAlign: "text-bottom", display: "inline-block", className: this.name, style: Object.assign({}, this.props.style) },
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
const HintArrow = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    display: "inline-block",
    width: "8px",
    height: "8px",
    transform: "rotate(45deg)",
    zIndex: 11,
    borderRight: "1px solid " + __WEBPACK_IMPORTED_MODULE_3_color__(__WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["b" /* default */].yellow).darken(0.3).string(),
    borderBottom: "1px solid " + __WEBPACK_IMPORTED_MODULE_3_color__(__WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["b" /* default */].yellow).darken(0.3).string(),
}, (props) => ({
    background: props.hover ? "rgba(50,50,50,1)" : __WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["b" /* default */].yellow,
    borderColor: props.hover ? "rgba(0,0,0,0.9)!important" : __WEBPACK_IMPORTED_MODULE_3_color__(__WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["b" /* default */].yellow).darken(0.3).string(),
}));
const HintContent = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({
    fontFamily: fontFamily,
    maxHeight: "200px",
    textAlign: "left",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    zIndex: 10,
    border: "1px solid black",
    boxShadow: "3px 3px 12px -3px rgba(0,0,0,0.25)",
    borderColor: __WEBPACK_IMPORTED_MODULE_3_color__(__WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["b" /* default */].yellow).darken(0.3).string(),
    borderRadius: "3px"
}, (props) => ({
    fontSize: props.hover ? "13px" : "16px",
    background: props.hover ? "rgba(50,50,50,1)" : __WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["b" /* default */].yellow,
    borderColor: props.hover ? "rgba(0,0,0,0.9) !important" : __WEBPACK_IMPORTED_MODULE_3_color__(__WEBPACK_IMPORTED_MODULE_6__styled_themes_default__["b" /* default */].yellow).darken(0.3).string(),
    padding: props.hover ? "2px 10px" : "10px",
    color: props.hover ? "white" : "#333",
}));
/* harmony default export */ __webpack_exports__["a"] = (PopupHint);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Animations_Pulse__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Animations_Rotate__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_themes_ryzlink__ = __webpack_require__(103);








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
        const containerStyle = { width: size, height: type === "bubbles" ? size / 1.5 : size };
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Div */], { display: "inline-block", overflow: "hidden", className: `${this.name} ${this.name}--${this.props.type}`, style: containerStyle },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](AnimatedWrapper, Object.assign({}, this.props, { className: `${this.name}__wrapper` }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `${this.name}__content` }))));
    }
}
Spinner.defaultProps = {
    type: "default",
    size: 30,
    loaded: false,
    color: __WEBPACK_IMPORTED_MODULE_7__styled_themes_ryzlink__["a" /* default */].decoration,
    style: {},
    speed: 1,
};
const mergadoColors = {
    left: "#7fba2c",
    bottom: "#007b20",
    right: "#00a9b8",
    top: "transparent",
};
const Wrapper = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("div")({}, (props) => {
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
    else if (props.type === "bubbles") {
        type = {
            borderRadius: "50%",
            position: "relative",
            textIndent: "-9999em",
            color: props.color ? props.color : props.theme.decoration,
            width: `${props.size / 3 - 2}px`,
            height: `${props.size / 3 - 2}px`,
            margin: "0 auto",
            borderWidth: 0,
            ":before,:after": {
                content: " ",
                display: "inline-block",
                color: props.color ? props.color : props.theme.decoration,
                position: "absolute",
                borderRadius: "50%",
                top: "0",
                height: `${props.size / 3 - 2}px`,
                width: `${props.size / 3 - 2}px`,
            },
            ":before": {
                left: `-${props.size / 3}px`,
            },
            ":after": {
                left: `${props.size / 3}px`,
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
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__components_Animations_Pulse__["a" /* animation */], { animation: `pulse 10s infinite linear` });
    }
    else if (props.type === "bubbles") {
        return {
            "@keyframes bubbles": {
                "0%, 80%, 100%": {
                    boxShadow: `0 ${props.size / 3}px 0 -${props.size / 5}px`,
                },
                "40%": {
                    boxShadow: `0 ${props.size / 3}px 0 0`,
                },
            },
            animationDelay: "-0.16s",
            "&,:before,:after": {
                animation: `bubbles 1.8s infinite ease-in-out`,
                animationFillMode: "both",
                transform: "translateZ(0)",
                willChange: "box-shadow",
            },
            ":before": {
                animationDelay: "-0.32s",
            },
            ":after": {
                animationDelay: "0s",
            },
        };
    }
    else {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_6__components_Animations_Rotate__["a" /* animation */], { willChange: "transform", transform: "translateZ(0)", animation: `rotate 1.2s infinite linear` });
    }
};
const AnimatedWrapper = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()(Wrapper)(animations);
/* harmony default export */ __webpack_exports__["a"] = (Spinner);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Toast__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_unique_id__ = __webpack_require__(14);




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
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);




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
const Nav = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("nav")({
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
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);



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
const Item = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("li")({
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
const Link = __WEBPACK_IMPORTED_MODULE_1__reglendo_cxs_component___default()("a")({
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
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default__ = __webpack_require__(39);


const colors = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__default__["a" /* colors */], { blue: "#009ba9", green: "#69A120", red: "#EA4E4B", grey: "#ccc", yellow: "#ffec88", orange: "#FF9500", background: "white", decoration: "#dbcba3", decoration_background: "#FAF7F1" });
const theme = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__default__["b" /* default */], colors, { warning: colors.orange, error: colors.red, success: colors.green, info: colors.decoration_background, inactive: colors.grey, message: colors.yellow, radius: "5px", selected_background: __WEBPACK_IMPORTED_MODULE_0_color__(colors.blue).fade(0.8).string(), hover_background: __WEBPACK_IMPORTED_MODULE_0_color__(colors.blue).fade(0.95).string(), section_border: "1px solid #dcd8ca", section_padding: "20px", form_label_text_size: "13px", form_label_text_weight: "600", input_border: "1px solid " + colors.decoration, input_border_active: "1px solid " + colors.blue, input_border_error: "1px solid " + colors.red, button_text_transform: "none", button_text_size: "16px", button_text_weight: "bold", table_border_vertical: "1px solid #dbcba3", table_border_horizontal: "1px solid #dbcba3", table_header_text_size: "11px", table_header_text_transform: "uppercase", table_cell_padding: "12px 8px 8px 8px", table_cell_text_size: "15px", nav_background: "transparent", nav_link_color: colors.blue, nav_link_background: "transparent", nav_link_background_active: "transparent", nav_link_border: `5px solid ${colors.blue}` });
/* harmony default export */ __webpack_exports__["a"] = (theme);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(42);
var route = __webpack_require__(105);

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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(42);

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
/* 106 */
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// based on component/color-parser

var hsl2rgb = __webpack_require__(110);
var colors = __webpack_require__(106);

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
/* 108 */
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
/* 109 */
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var hsl2hsv = __webpack_require__(109);
var hsv2rgb = __webpack_require__(20);

module.exports = function(h, s, l) {
  var hsv = hsl2hsv(h, s, l);
  return hsv2rgb(hsv.h, hsv.s, hsv.v);
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var hsv2rgb = __webpack_require__(20);
var rgb2hex = __webpack_require__(17);

module.exports = function(h, s, v) {
  var rgb = hsv2rgb(h, s, v);
  return rgb2hex(rgb.r, rgb.g, rgb.b);
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var rgba2rgb = __webpack_require__(113);
var rgb2hex = __webpack_require__(17);

module.exports = function(r, g, b, a) {
  var rgb = rgba2rgb(r, g, b, a);
  return rgb2hex(rgb.r, rgb.g, rgb.b);
};


/***/ }),
/* 113 */
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(45);
var swizzle = __webpack_require__(196);

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
/* 115 */
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cssifyObject;

var _cssifyDeclaration = __webpack_require__(47);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignStyle = __webpack_require__(115);

var _assignStyle2 = _interopRequireDefault(_assignStyle);

var _camelCaseProperty = __webpack_require__(46);

var _camelCaseProperty2 = _interopRequireDefault(_camelCaseProperty);

var _cssifyDeclaration = __webpack_require__(47);

var _cssifyDeclaration2 = _interopRequireDefault(_cssifyDeclaration);

var _cssifyObject = __webpack_require__(116);

var _cssifyObject2 = _interopRequireDefault(_cssifyObject);

var _hyphenateProperty = __webpack_require__(15);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedProperty = __webpack_require__(118);

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

var _isPrefixedValue = __webpack_require__(11);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _isUnitlessProperty = __webpack_require__(119);

var _isUnitlessProperty2 = _interopRequireDefault(_isUnitlessProperty);

var _normalizeProperty = __webpack_require__(120);

var _normalizeProperty2 = _interopRequireDefault(_normalizeProperty);

var _resolveArrayValue = __webpack_require__(121);

var _resolveArrayValue2 = _interopRequireDefault(_resolveArrayValue);

var _unprefixProperty = __webpack_require__(48);

var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

var _unprefixValue = __webpack_require__(122);

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
/* 118 */
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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUnitlessProperty;

var _hyphenateProperty = __webpack_require__(15);

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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeProperty;

var _camelCaseProperty = __webpack_require__(46);

var _camelCaseProperty2 = _interopRequireDefault(_camelCaseProperty);

var _unprefixProperty = __webpack_require__(48);

var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeProperty(property) {
  return (0, _unprefixProperty2.default)((0, _camelCaseProperty2.default)(property));
}
module.exports = exports['default'];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveArrayValue;

var _hyphenateProperty = __webpack_require__(15);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveArrayValue(property, value) {
  var hyphenatedProperty = (0, _hyphenateProperty2.default)(property);

  return value.join(';' + hyphenatedProperty + ':');
}
module.exports = exports['default'];

/***/ }),
/* 122 */
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
/* 123 */
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
/* 124 */
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(140);

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(141);

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(138);

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(139);

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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = __webpack_require__(125);

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _staticData = __webpack_require__(137);

var _staticData2 = _interopRequireDefault(_staticData);

var _cursor = __webpack_require__(128);

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__(127);

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__(129);

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__(130);

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__(131);

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(132);

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__(133);

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__(134);

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__(135);

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(136);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

exports.default = (0, _createPrefixer2.default)({
  prefixMap: _staticData2.default.prefixMap,
  plugins: plugins
});
module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(11);

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
/* 128 */
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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(11);

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
/* 130 */
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
/* 131 */
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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(11);

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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(11);

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
/* 134 */
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
/* 135 */
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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(15);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(11);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(51);

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
/* 137 */
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
/* 138 */
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
/* 139 */
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(51);

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
/* 141 */
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
/* 142 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 143 */
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
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var Input = function Input(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", props);
};

Input.propTypes = {
    name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

Input.defaultProps = {
    type: 'text'
};

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Select = function Select(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    "select",
    props,
    children
  );
};

Select.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var TextArea = function TextArea(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("textarea", props);
};

TextArea.propTypes = {
    name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dot_prop_immutable__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dot_prop_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dot_prop_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ducks_Input__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InputContainer_proptypes__ = __webpack_require__(148);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var getFieldNamespace = function getFieldNamespace(nameProp) {
    return nameProp.split('.')[0];
};

var InputContainer = function InputContainer(component) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["a" /* connect */])(function (state) {
        return state;
    }, function (dispatch) {
        return {
            dispatch: dispatch
        };
    }, function (state, dispatch, own) {
        var _onChange = function _onChange(event) {
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

            var namespace = getFieldNamespace(own.name);
            var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ducks_Input__["a" /* createBoundType */])(namespace);
            return dispatch.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ducks_Input__["b" /* changeField */])(type, own.name, value));
        };

        var value = own.type === "radio" && own.value !== null ? own.value : own.name && __WEBPACK_IMPORTED_MODULE_1_dot_prop_immutable___default.a.get(state, own.name) !== undefined ? __WEBPACK_IMPORTED_MODULE_1_dot_prop_immutable___default.a.get(state, own.name) : '';

        return _extends({}, own, {
            value: value,
            checked: own.type === "radio" && own.value == __WEBPACK_IMPORTED_MODULE_1_dot_prop_immutable___default.a.get(state, own.name) || own.type === "checkbox" && __WEBPACK_IMPORTED_MODULE_1_dot_prop_immutable___default.a.get(state, own.name),
            onChange: function onChange(event) {
                var processedEvent = own.onChange ? own.onChange(event) : event;
                return processedEvent && _onChange(processedEvent);
            }
        });
    })(component);
};

InputContainer.propTypes = __WEBPACK_IMPORTED_MODULE_3__InputContainer_proptypes__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (InputContainer);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var errorMessage = function errorMessage(propName, componentName, customMessage) {
  return 'Invalid property \'' + propName + '\' supplied to \'' + componentName + '\'. ' + customMessage;
};

var validateNameProp = function validateNameProp(props, propName, componentName) {
  if (typeof props[propName] !== 'string') {
    return new Error(errorMessage(propName, componentName, 'Value must be a valid string.'));
  }

  if (!/.+\..+/.test(props[propName])) {
    return new Error(errorMessage(propName, componentName, 'Value must contain a dot-delimited namespace. (eg. name="customer.firstname")'));
  }
};

var validateOnChangeProp = function validateOnChangeProp(props, propName, componentName) {
  if (typeof props[propName] !== 'function') {
    return new Error(errorMessage(propName, componentName, 'Value must be a function.'));
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: validateNameProp,
  onChange: validateOnChangeProp
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(24);
  var warning = __webpack_require__(53);
  var ReactPropTypesSecret = __webpack_require__(26);
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
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(23);
var invariant = __webpack_require__(24);
var ReactPropTypesSecret = __webpack_require__(26);

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
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(23);
var invariant = __webpack_require__(24);
var warning = __webpack_require__(53);
var assign = __webpack_require__(29);

var ReactPropTypesSecret = __webpack_require__(26);
var checkPropTypes = __webpack_require__(149);

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
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
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
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
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

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(156);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

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
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(157);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(54);


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
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

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

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(153);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(55),
    getRawTag = __webpack_require__(162),
    objectToString = __webpack_require__(163);

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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(55);

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
/* 163 */
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
/* 164 */
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(160),
    isObjectLike = __webpack_require__(164);

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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(56);

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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(57),
    isSymbol = __webpack_require__(165);

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
/* 168 */
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
/* 169 */
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
  var invariant = __webpack_require__(22);
  var warning = __webpack_require__(50);
  var ReactPropTypesSecret = __webpack_require__(30);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 170 */
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



var emptyFunction = __webpack_require__(21);
var invariant = __webpack_require__(22);
var ReactPropTypesSecret = __webpack_require__(30);

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
/* 171 */
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



var emptyFunction = __webpack_require__(21);
var invariant = __webpack_require__(22);
var warning = __webpack_require__(50);

var ReactPropTypesSecret = __webpack_require__(30);
var checkPropTypes = __webpack_require__(169);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var objectAssign = __webpack_require__(29);
var InputSlider = __webpack_require__(179);
var InputNumber = __webpack_require__(177);

var rgb2hsv = __webpack_require__(43);
var hsv2hex = __webpack_require__(111);
var hsv2rgb = __webpack_require__(20);
var rgb2hex = __webpack_require__(17);
var hex2rgb = __webpack_require__(108);
var rgba = __webpack_require__(44);

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


var cx = __webpack_require__(41);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var assign = __webpack_require__(29);
var cssColor = __webpack_require__(107);
var rgbaColor = __webpack_require__(44);
var rgb2hsv = __webpack_require__(43);
var rgb2hex = __webpack_require__(17);
var rgba2hex = __webpack_require__(112);

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

var blacklist = __webpack_require__(40);
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

var cx = __webpack_require__(41);
var blacklist = __webpack_require__(40);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export createProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(31);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
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
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
  Provider.displayName = 'Provider';

  return Provider;
}

/* unused harmony default export */ var _unused_webpack_default_export = (createProvider());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(185);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
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

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(59);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function (dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* bindActionCreators */])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(59);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(61);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



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

        if (process.env.NODE_ENV !== 'production') __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
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

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(186);
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

  if (process.env.NODE_ENV !== 'production') {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(31);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(181);
/* unused harmony reexport Provider */
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
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



/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
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

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; /* eslint consistent-return: 0 */


var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(0);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _sortablejs = __webpack_require__(197);

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
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Sortable = __webpack_require__(190);

var _Sortable2 = _interopRequireDefault(_Sortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Sortable2.default;

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(62);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



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
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
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

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(64);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
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
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
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

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
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

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(64);
/* unused harmony reexport createStore */
/* unused harmony reexport combineReducers */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* unused harmony reexport applyMiddleware */
/* unused harmony reexport compose */







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(143);

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
/* 197 */
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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(199);


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(200);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18), __webpack_require__(201)(module)))

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 201 */
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
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map