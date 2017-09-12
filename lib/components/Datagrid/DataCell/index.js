"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const config_1 = require("../../../config");
class DataCell extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__cell";
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
const Td = glamorous_1.default.td({
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
const Th = glamorous_1.default(Td)({
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
exports.default = DataCell;
//# sourceMappingURL=index.js.map