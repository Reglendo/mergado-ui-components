"use strict";

var _templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    margin-bottom: 10px;\n    border: 2px solid;\n    border-color: ", "\n    & > * {\n        border-color: ", "\n    }\n"], ["\n    position: relative;\n    margin-bottom: 10px;\n    border: 2px solid;\n    border-color: ", "\n    & > * {\n        border-color: ", "\n    }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    display: block;\n    padding: 6px 10px 4px 2px;\n"], ["\n    display: block;\n    padding: 6px 10px 4px 2px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: white;\n    font-size: 12px;\n    z-index: 1;\n    padding: 1px 5px;\n    position: absolute;\n    top: 100%;\n    left: -2px;\n"], ["\n    background: ", ";\n    color: white;\n    font-size: 12px;\n    z-index: 1;\n    padding: 1px 5px;\n    position: absolute;\n    top: 100%;\n    left: -2px;\n"]);

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
var StyledInput = styled_components_1.default.div(_templateObject, function (props) {
    return props["data-invalid"] ? style.RED : "transparent";
}, function (props) {
    return props["data-invalid"] ? style.RED : "transparent";
});
var StyledLabel = styled_components_1.default.label(_templateObject2);
var StyledError = styled_components_1.default.div(_templateObject3, style.RED);
exports.Input = function (_a) {
    var addProps = __rest(_a.group, []),
        props = __rest(_a, ["group"]);
    return React.createElement(StyledInput, Object.assign({}, dom_only_props_1.default(addProps), { "data-invalid": props.meta.invalid && (props.meta.dirty || props.meta.touched), className: props.name + " " + props.className + " " + (props.disabled ? props.name + "--disabled" : "") + " " + (props.required ? props.name + "--required" : "") + " " + config_1.form + "__group " + (props.meta.invalid && (props.meta.dirty || props.meta.touched) ? config_1.form + "__group--invalid" : ""), title: props.labels.title, style: props.style }), props.children);
};
exports.InputLabel = function (_ref) {
    var children = _ref.children,
        name = _ref.name;

    if (children === "" || children === null) {
        return null;
    }
    return React.createElement(StyledLabel, { className: name + "__label " + config_1.form + "__label" }, children);
};
exports.InputError = function (_a) {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) && props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return React.createElement(StyledError, { className: config_1.form + "__validation" }, props.meta.error || props.labels.invalid);
    } else {
        return null;
    }
};
//# sourceMappingURL=index.js.map