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
export const Href = (_a) => {
    var { icon, label, link, name, title, style, meta, labels, group, className, children } = _a, props = __rest(_a, ["icon", "label", "link", "name", "title", "style", "meta", "labels", "group", "className", "children"]);
    return React.createElement("a", Object.assign({ className: `muk-button ${className ? className : ""}` }, props, { href: link, title: title }),
        icon,
        icon && " ",
        label,
        children);
};
export const Button = (_a) => {
    var { name, icon, label, title, className, style, labels, group, meta, input, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "style", "labels", "group", "meta", "input", "children"]);
    return (React.createElement("button", Object.assign({}, input, props, { title: title }),
        icon,
        icon && " ",
        label,
        children));
};
export const Submit = (_a) => {
    var { name, label, title, className, style, input, children, group, meta, labels } = _a, props = __rest(_a, ["name", "label", "title", "className", "style", "input", "children", "group", "meta", "labels"]);
    return React.createElement("input", Object.assign({ className: `muk-button ${className ? className : ""}`, type: "submit" }, input, props, { value: label, title: title }));
};
export const Void = (_a) => {
    var { name, icon, label, title, className, style, labels, group, meta, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "style", "labels", "group", "meta", "children"]);
    return React.createElement("span", Object.assign({ className: `muk-button ${className ? className : ""}` }, props, { title: title }),
        icon,
        icon && " ",
        label,
        children);
};
