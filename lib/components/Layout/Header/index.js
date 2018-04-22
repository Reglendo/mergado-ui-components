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
const Header = (props) => {
    const name = "muk-header";
    const { children, type, className, style } = props, p = __rest(props, ["children", "type", "className", "style"]);
    if (children === "" || children === null) {
        return null;
    }
    if (type === "1") {
        return (React.createElement(CssH1, Object.assign({}, p, { s: style, className: `muk-header m-h1 ${className}` }), children));
    }
    if (type === "2") {
        return (React.createElement(CssH2, Object.assign({}, p, { s: style, className: `muk-header m-h2 ${className}` }), children));
    }
    if (type === "3") {
        return (React.createElement(CssH3, Object.assign({}, p, { s: style, className: `muk-header m-h3 ${className}` }), children));
    }
    if (type === "4") {
        return (React.createElement(CssH4, Object.assign({}, p, { s: style, className: `muk-header m-h4 ${className}` }), children));
    }
    if (type === "5") {
        return (React.createElement(CssH5, Object.assign({}, p, { s: style, className: `muk-header m-h5 ${className}` }), children));
    }
};
const CssH1 = css("h1")({
    fontSize: "28px",
    lineHeight: "40px",
    margin: "40px 0 0 0",
    fontWeight: 700,
});
const CssH2 = css("h2")({
    fontSize: "24px",
    lineHeight: "32px",
    margin: "32px 0 0 0",
    fontWeight: 700,
});
const CssH3 = css("h3")({
    fontSize: "20px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 700,
});
const CssH4 = css("h4")({
    fontSize: "17px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 700,
});
const CssH5 = css("h5")({
    fontSize: "14px",
    lineHeight: "20px",
    margin: "20px 0 0 0",
    fontWeight: 700,
});
CssH1.propTypes = {
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    s: PropTypes.any,
};
CssH2.propTypes = CssH1.propTypes;
CssH3.propTypes = CssH1.propTypes;
CssH4.propTypes = CssH1.propTypes;
CssH5.propTypes = CssH1.propTypes;
export default Header;
