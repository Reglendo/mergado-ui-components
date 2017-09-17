import * as React from "react";
import glamorous from "glamorous";
import { prefix } from "../../../config";
class DataCell extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.name = prefix + "datagrid__cell";
    }
    render() {
        const { style, type, addClass, onClick } = this.props;
        return (type === "header")
            ?
                React.createElement(Th, { className: `${this.name} ${this.name}--header ${addClass}`, style: style, onClick: onClick }, this.props.children)
            :
                React.createElement(Td, { className: `${this.name} ${addClass}`, style: style, onClick: onClick }, this.props.children);
    }
}
DataCell.defaultProps = {
    addClass: "",
    style: null,
    type: "cell",
};
const Td = glamorous.td({
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
}, (props) => {
    return {
        padding: props.theme.table_cell_padding,
        borderBottom: props.theme.table_border_horizontal,
        borderRight: props.theme.table_border_vertical,
        fontSize: props.theme.table_cell_text_size,
    };
});
const Th = glamorous(Td)({
    borderColor: "transparent",
    whiteSpace: "nowrap",
    color: "#fff",
    fontWeight: "bold",
}, (props) => {
    return {
        fontSize: props.theme.table_header_text_size,
        textTransform: props.theme.table_header_text_transform,
    };
}).withComponent("th");
export default DataCell;
