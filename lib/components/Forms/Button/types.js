var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import domOnlyProps from "../../../helpers/dom-only-props";
export const Href = (_a) => {
    var { icon, label, link, name, title, style, styleClass, className, children } = _a, props = __rest(_a, ["icon", "label", "link", "name", "title", "style", "styleClass", "className", "children"]);
    return React.createElement("a", Object.assign({}, domOnlyProps(props), { href: link, className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children);
};
export const Button = (_a) => {
    var { name, icon, label, title, className, style, styleClass, input, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "style", "styleClass", "input", "children"]);
    return (React.createElement("button", Object.assign({}, input, domOnlyProps(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children));
};
export const Submit = (_a) => {
    var { name, label, title, className, style, styleClass, input, children } = _a, props = __rest(_a, ["name", "label", "title", "className", "style", "styleClass", "input", "children"]);
    return React.createElement("input", Object.assign({ type: "submit" }, input, domOnlyProps(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, value: label, title: title }));
};
export const Void = (_a) => {
    var { name, icon, label, title, className, style, styleClass, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "style", "styleClass", "children"]);
    return React.createElement("span", Object.assign({}, domOnlyProps(props), { className: `${name}__item ${className ? className : ""} ${styleClass}`, title: title }),
        icon,
        icon && " ",
        label,
        children);
};
