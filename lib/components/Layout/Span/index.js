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
import PropTypes from "prop-types";
export const Span = (p) => {
    const { children, style, className, props } = p, others = __rest(p, ["children", "style", "className", "props"]);
    return React.createElement(CssSpan, Object.assign({ className: `muk-span ${className}` }, props, { s: Object.assign({}, others, style) }), children);
};
const CssSpan = css("span")((props) => {
    const { className, theme, children, s } = props, style = __rest(props, ["className", "theme", "children", "s"]);
    return Object.assign({}, s, style);
});
CssSpan.propTypes = {
    s: PropTypes.any,
    style: PropTypes.any,
};
export default Span;
