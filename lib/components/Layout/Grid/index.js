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
const Grid = (props) => {
    const { children, style, className } = props, p = __rest(props, ["children", "style", "className"]);
    return (React.createElement(CssGrid, Object.assign({ className: `muk-grid ${className || ""}`, s: style }, p), children));
};
const CssGrid = css("div")({}, (props) => {
    return Object.assign({ display: props.inline ? "inline-grid" : "grid", gridTemplateColumns: props.cols ? props.cols : "auto", gridTemplateRows: props.rows ? props.rows : "auto", gridGap: `${props.rowgap ? props.rowgap : props.gap} ${props.colgap ? props.colgap : props.gap}`, justifyItems: props.align ? props.align : "stretch", alignItems: props.valign ? props.valign : "stretch", gridAutoFlow: props.autoFlow ? props.autoFlow : "row" }, props.style);
});
CssGrid.propTypes = {
    s: PropTypes.any,
    inline: PropTypes.any,
    cols: PropTypes.string,
    rows: PropTypes.string,
    rowgap: PropTypes.string,
    colgap: PropTypes.string,
    gap: PropTypes.string,
    align: PropTypes.string,
    valign: PropTypes.string,
    autoFlow: PropTypes.string,
};
export default Grid;
