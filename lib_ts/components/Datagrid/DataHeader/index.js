"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const DataCell_1 = require("../DataCell");
const Checkbox_1 = require("components/Forms/Checkbox");
class DataHeader extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__row";
    }
    render() {
        const { actions, style, addClass } = this.props;
        return (React.createElement("thead", null,
            React.createElement("tr", { className: `${this.name} ${this.name}--header ${addClass}`, style: style },
                actions.length > 0 &&
                    React.createElement(DataCell_1.default, { type: "header", style: { width: "1%" } },
                        React.createElement(Checkbox_1.default, { input: { onChange: this.props.checkAll, checked: this.props.checkedAll } })),
                this.props.children)));
    }
}
DataHeader.defaultProps = {
    addClass: "",
    style: {},
    actions: [],
    checkAll: () => { },
    checkedAll: false,
};
exports.default = DataHeader;
//# sourceMappingURL=index.js.map