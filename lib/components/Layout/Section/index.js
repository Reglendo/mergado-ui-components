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
import Grid from "../Grid";
import GridCell from "../GridCell";
const Section = (props) => {
    const name = "muk-section";
    const { children, header, prefix, suffix, className } = props, p = __rest(props, ["children", "header", "prefix", "suffix", "className"]);
    if (children === "" || children === null) {
        return null;
    }
    const pref = prefix && React.createElement(CssPrefix, { className: "m-prefix", row: "1" }, props.prefix);
    const suff = suffix && React.createElement(CssSuffix, { className: "m-suffix", row: "1" }, props.suffix);
    return (React.createElement(CssSection, Object.assign({ className: `${name} ${className || ""}` }, p),
        header &&
            React.createElement(CssHeader, { className: "m-header" },
                React.createElement(Grid, { className: "m-header-wrap", cols: "auto 1fr auto" },
                    pref,
                    React.createElement(GridCell, { className: "m-header-content", row: "1" }, header),
                    suff)),
        children));
};
const CssPrefix = css(GridCell)({
    margin: "-10px",
    padding: "10px",
    marginRight: "15px",
    paddingRight: "15px",
    borderRight: "1px solid #ccc",
    justifySelf: "left",
});
const CssSuffix = css(GridCell)({
    float: "right",
    margin: "-10px",
    padding: "10px",
    marginLeft: "15px",
    paddingLeft: "15px",
    borderLeft: "1px solid #ccc",
    justifySelf: "right",
});
const CssHeader = css(GridCell)({
    fontWeight: "normal",
    fontSize: "15px",
    height: "63px",
}, (props) => {
    return {
        padding: `${props.theme.section_padding}`,
        margin: `-${props.theme.section_padding}!important`,
        marginBottom: "20px !important",
        background: props.theme.decoration_background,
        borderBottom: props.theme.section_border,
        borderRadius: `${props.theme.radius} ${props.theme.radius} 0 0`,
    };
});
const CssSection = css("section")({
    marginBottom: "20px",
}, (props) => {
    return {
        background: props.theme.background,
        color: props.theme.text,
        borderRadius: props.theme.radius,
        border: props.theme.section_border,
        padding: props.theme.section_padding,
    };
});
export default Section;
