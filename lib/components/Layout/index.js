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
import css from "@reglendo/cxs/component";
export const Div = (_a) => {
    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);
    return React.createElement(CssDiv, Object.assign({ className: className }, props), children);
};
const CssDiv = css("div")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});
export const Span = (_a) => {
    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);
    return React.createElement(CssSpan, Object.assign({ className: className }, props), children);
};
const CssSpan = css("span")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});
export const Ul = (_a) => {
    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);
    return React.createElement(CssUl, Object.assign({ className: className }, props), children);
};
const CssUl = css("ul")((props) => {
    const { className, theme, children } = props, style = __rest(props, ["className", "theme", "children"]);
    return style;
});
