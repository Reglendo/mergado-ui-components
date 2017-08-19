"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const styled_components_1 = require("styled-components");
const Cell = styled_components_1.default.td `
    padding: 8px 10px;
    text-align: left;
    border-bottom: 1px solid #dbcba3;
    font-weight: normal;
    border-right: #dbcba3 1px dotted;
    font-size: 13px;
    .muk-form__group {
        margin: 0;
    }
    .muk-form__label {
        padding: 0;
    }
`;
const Header = Cell.withComponent("th").extend `
    background: #333;
    padding: 0 10px;
    border-color: transparent;
    font-weight: bold;
    white-space: nowrap;
    height: 30px;
    line-height: 30px;
    color: #fff;
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