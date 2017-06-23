"use strict";

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
exports.Input = function (_a) {
    var addProps = __rest(_a.group, []),
        props = __rest(_a, ["group"]);
    return React.createElement("div", Object.assign({}, dom_only_props_1.default(addProps), { className: props.name + " " + (props.disabled ? props.name + "--disabled" : "") + " " + (props.required ? props.name + "--required" : "") + " " + (addProps.className ? addProps.className : "") + " " + config_1.form + "__group " + (props.meta.invalid && (props.meta.dirty || props.meta.touched) ? config_1.form + "__group--invalid" : ""), title: props.labels.title, style: props.style }), props.children);
};
exports.InputLabel = function (_ref) {
    var children = _ref.children,
        name = _ref.name;

    if (children === "") {
        return null;
    }
    return React.createElement("label", { className: name + "__label " + config_1.form + "__label" }, children);
};
exports.InputError = function (_a) {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) && props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return React.createElement("div", { className: config_1.form + "__validation" }, props.meta.error || props.labels.invalid);
    } else {
        return null;
    }
};
//# sourceMappingURL=index.js.map