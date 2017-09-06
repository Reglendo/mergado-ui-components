"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("../../../config");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../styled/theme");
const Cell = styled_components_1.default.td `
    padding: ${theme_1.default.table_cell_padding};
    text-align: left;
    border-bottom: ${theme_1.default.table_border_horizontal};
    border-right: ${theme_1.default.table_border_vertical};
    font-weight: normal;
    font-size: ${theme_1.default.table_cell_text_size};
    .muk-form__group {
        margin: 0;
    }
    .muk-form__label {
        padding: 0;
    }
    .muk-button__item {
        padding: 0 5px;
        vertical-align: middle;
        height: auto;
        line-height: initial;
    }
`;
const Header = Cell.withComponent("th").extend `
    border-color: transparent;
    white-space: nowrap;
    color: #fff;
    font-weight: bold;
    font-size: ${theme_1.default.table_header_text_size};
    text-transform: ${theme_1.default.table_header_text_transform};
`;
class DataCell extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__cell";
    }
    render() {
        const { style, type, addClass, onClick } = this.props;
        return (type === "header")
            ?
                React.createElement(Header, { className: `${this.name} ${this.name}--header ${addClass}`, style: style, onClick: onClick }, this.props.children)
            :
                React.createElement(Cell, { className: `${this.name} ${addClass}`, style: style, onClick: onClick }, this.props.children);
    }
}
DataCell.defaultProps = {
    addClass: "",
    style: null,
    type: "cell",
};
exports.default = DataCell;
//# sourceMappingURL=index.js.map