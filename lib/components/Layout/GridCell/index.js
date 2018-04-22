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
const GridCell = (props) => {
    const { children, style, className } = props, p = __rest(props, ["children", "style", "className"]);
    return (React.createElement(GridCellStyle, Object.assign({ className: `muk-gridcell ${className || ""}`, s: style }, p), children));
};
const GridCellStyle = css("div")({}, (props) => {
    return Object.assign({ gridColumn: props.col ? props.col : "auto auto", gridRow: props.row ? props.row : "auto auto", gridArea: props.name ? props.name : null, justifySelf: props.align ? props.align : "stretch", alignSelf: props.valign ? props.valign : "stretch" }, props.style);
});
GridCellStyle.propTypes = {
    col: PropTypes.string,
    row: PropTypes.string,
    name: PropTypes.string,
    align: PropTypes.string,
    valign: PropTypes.string,
    autoFlow: PropTypes.string,
    s: PropTypes.any,
};
export default GridCell;
