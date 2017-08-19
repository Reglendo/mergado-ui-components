"use strict";

var _templateObject = _taggedTemplateLiteral(["\n    display: block;\n    padding: 6px 10px 4px 2px;\n"], ["\n    display: block;\n    padding: 6px 10px 4px 2px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: white;\n    font-size: 12px;\n    z-index: 1;\n    padding: 1px 5px;\n    position: absolute;\n    top: 100%;\n    left: 0px;\n"], ["\n    background: ", ";\n    color: white;\n    font-size: 12px;\n    z-index: 1;\n    padding: 1px 5px;\n    position: absolute;\n    top: 100%;\n    left: 0px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    padding: 2px;\n    margin-bottom: 10px;\n    .", "__group--invalid {\n        margin: -2px;\n        border: 2px solid transparent;\n        border-color: ", "\n    }\n"], ["\n    position: relative;\n    padding: 2px;\n    margin-bottom: 10px;\n    .", "__group--invalid {\n        margin: -2px;\n        border: 2px solid transparent;\n        border-color: ", "\n    }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var dom_only_props_1 = require("../../../helpers/dom-only-props");
var styled_components_1 = require("styled-components");
var style = require("../../../styled");
exports.defaultFieldProps = {
    group: {
        className: "",
        style: {},
        bigLabel: false
    },
    input: {
        className: "",
        name: "",
        value: "",
        checked: false,
        onBlur: function onBlur(value) {},
        onChange: function onChange(value) {},
        onDragStart: function onDragStart(value) {},
        onDrop: function onDrop(value) {},
        onFocus: function onFocus(value) {},
        onKeyDown: function onKeyDown(value) {},
        onKeyUp: function onKeyUp(value) {},
        onClick: function onClick(value) {}
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
        warning: ""
    },
    labels: {
        main: "",
        invalid: "",
        title: "",
        placeholder: ""
    }
};
var LabelComponent = function LabelComponent(_ref) {
    var children = _ref.children,
        name = _ref.name;

    if (children === "" || children === null) {
        return null;
    }
    return React.createElement("label", { className: name + "__label " + config_1.form + "__label" }, children);
};
exports.FieldLabel = styled_components_1.default(LabelComponent)(_templateObject);
var FieldErrorComponent = function FieldErrorComponent(_a) {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) && props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return React.createElement("div", { className: "" + props.className }, props.meta.error || props.labels.invalid);
    } else {
        return null;
    }
};
exports.FieldError = styled_components_1.default(FieldErrorComponent)(_templateObject2, style.RED);
var FieldComponent = function FieldComponent(props) {
    var meta = props.meta,
        input = props.input,
        labels = props.labels,
        group = props.group,
        others = __rest(props, ["meta", "input", "labels", "group"]);

    var isInvalid = props.meta.invalid && (props.meta.dirty || props.meta.touched);
    return React.createElement("div", Object.assign({}, dom_only_props_1.default(props), { className: (props.name ? props.name : "") + "\n                        " + (props.className ? props.className : "") + "\n                        " + (props.disabled ? props.name + "--disabled" : "") + "\n                        " + (props.required ? props.name + "--required" : "") + "\n                        " + config_1.form + "__group\n                        ", title: props.labels.title, style: props.style }), React.createElement(exports.FieldError, Object.assign({}, props, { className: config_1.form + "__validation}" })), React.createElement(exports.FieldLabel, { name: props.name }, props.label ? props.label : others.label ? others.label : labels.main), React.createElement("div", { className: "                    " + (isInvalid ? config_1.form + "__group--invalid" : "") + "                " }, props.children));
};
FieldComponent.defaultProps = exports.defaultFieldProps;
exports.Field = styled_components_1.default(FieldComponent)(_templateObject3, config_1.form, function (props) {
    return props.meta && props.meta.invalid && (props.meta.dirty || props.meta.touched) ? style.RED : "transparent";
});
//# sourceMappingURL=index.js.map