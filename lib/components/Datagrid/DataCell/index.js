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
import cxs from "@reglendo/cxs/component";
import { prefix } from "../../../config";
class DataCell extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.name = prefix + "datagrid__cell";
    }
    render() {
        const _a = this.props, { style, type, addClass, onClick, className } = _a, props = __rest(_a, ["style", "type", "addClass", "onClick", "className"]);
        return (type === "header")
            ?
                React.createElement(Th, Object.assign({}, props, { className: `${this.name} ${className} ${this.name}--header ${addClass}`, s: style, onClick: onClick }), this.props.children)
            :
                React.createElement(Td, Object.assign({}, props, { className: `${this.name} ${addClass} ${className} `, s: style, onClick: onClick }), this.props.children);
    }
}
DataCell.defaultProps = {
    addClass: "",
    style: {},
    type: "cell",
    className: "",
};
const Cell = {
    textAlign: "left",
    fontWeight: "normal",
    "& .muk-form__group": {
        margin: 0,
    },
    "& .muk-form__label": {
        padding: 0,
    },
    "& .muk-button__item": {
        padding: "0 5px",
        verticalAlign: "middle",
        height: "auto",
    },
};
const Td = cxs("td")(Cell, (props) => {
    return Object.assign({ padding: props.theme.table_cell_padding, borderTop: props.theme.table_border_horizontal, borderRight: props.theme.table_border_vertical, fontSize: props.theme.table_cell_text_size, " a, a:visited, a:hover, a:active": {
            color: props.theme.text,
        }, "&:first-child": {
            borderLeft: props.theme.table_border_vertical,
        } }, props.s);
});
const Th = cxs("th")(Object.assign({}, Cell, { borderColor: "transparent", whiteSpace: "nowrap", color: "#fff", fontWeight: "bold" }), (props) => {
    return Object.assign({ padding: props.theme.table_cell_padding, fontSize: props.theme.table_header_text_size, textTransform: props.theme.table_header_text_transform }, props.s);
});
export default DataCell;
