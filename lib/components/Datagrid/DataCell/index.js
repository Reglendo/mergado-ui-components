import * as React from "react";
import cxs from "cxs/component";
import domOnlyProps from "../../../helpers/dom-only-props";
import { prefix } from "../../../config";
class DataCell extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "datagrid__cell";
    }
    render() {
        const { style, type, addClass, onClick, className } = this.props;
        return (type === "header")
            ?
                React.createElement(Th, Object.assign({}, domOnlyProps(this.props), { className: `${this.name} ${className} ${this.name}--header ${addClass}`, style: style, onClick: onClick }), this.props.children)
            :
                React.createElement(Td, Object.assign({}, domOnlyProps(this.props), { className: `${this.name} ${addClass} ${className} `, style: style, onClick: onClick }), this.props.children);
    }
}
DataCell.defaultProps = {
    addClass: "",
    style: null,
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
        lineHeight: "initial",
    },
};
const Td = cxs("td")(Cell, (props) => {
    return {
        padding: props.theme.table_cell_padding,
        borderBottom: props.theme.table_border_horizontal,
        borderRight: props.theme.table_border_vertical,
        fontSize: props.theme.table_cell_text_size,
    };
});
const Th = cxs("th")(Object.assign({}, Cell, { borderColor: "transparent", whiteSpace: "nowrap", color: "#fff", fontWeight: "bold" }), (props) => {
    return {
        padding: props.theme.table_cell_padding,
        borderBottom: props.theme.table_border_horizontal,
        fontSize: props.theme.table_header_text_size,
        textTransform: props.theme.table_header_text_transform,
    };
});
export default DataCell;
