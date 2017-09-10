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
const react_router_1 = require("react-router");
const dom_only_props_1 = require("../../../helpers/dom-only-props");
exports.Href = (_a) => {
    var { icon, label, link, name, title, className, children } = _a, props = __rest(_a, ["icon", "label", "link", "name", "title", "className", "children"]);
    return React.createElement("a", Object.assign({}, dom_only_props_1.default(props), { href: link, className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label,
        children);
};
exports.Button = (_a) => {
    var { name, icon, label, title, className, input, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "input", "children"]);
    return (React.createElement("button", Object.assign({}, input, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label,
        children));
};
exports.Link = (_a) => {
    var { name, icon, label, title, className, link, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "link", "children"]);
    return React.createElement(react_router_1.Link, Object.assign({}, dom_only_props_1.default(props), { to: link, className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label,
        children);
};
exports.Submit = (_a) => {
    var { name, label, title, className, input, children } = _a, props = __rest(_a, ["name", "label", "title", "className", "input", "children"]);
    return React.createElement("input", Object.assign({ type: "submit" }, input, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, value: label, title: title }));
};
exports.Void = (_a) => {
    var { name, icon, label, title, className, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "children"]);
    return React.createElement("span", Object.assign({}, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label,
        children);
};
//# sourceMappingURL=types.js.map