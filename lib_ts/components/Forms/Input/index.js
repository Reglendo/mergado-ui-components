"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
exports.Input = (_a) => {
    var props = __rest(_a, []);
    return (React.createElement("div", { className: `${props.name}
                     ${props.disabled ? this.name + `--` + props.disabled : ""}
                     ${props.required ? this.name + `--` + props.required : ""}
                     ${props.addClass ? props.addClass : ``}
                     ${config_1.form}__group
                     ${props.meta.invalid && (props.meta.dirty || props.meta.touched) ? `${config_1.form}__group--invalid` : ""}
                 `, title: props.labels.title, style: props.style }, props.children));
};
exports.InputLabel = ({ children, name }) => {
    if (children === "") {
        return null;
    }
    return (React.createElement("label", { className: `${name}__label ${config_1.form}__label ${config_1.form}__input` }, children));
};
exports.InputError = (_a) => {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) &&
        props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return (React.createElement("div", { className: `${config_1.form}__validation` }, props.meta.error || props.labels.invalid));
    }
    else {
        return null;
    }
};
//# sourceMappingURL=index.js.map