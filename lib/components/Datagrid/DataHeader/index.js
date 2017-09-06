"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const config_1 = require("../../../config");
const DataCell_1 = require("../DataCell");
const Checkbox_1 = require("../../../components/Forms/Checkbox");
const Button_1 = require("../../../components/Forms/Button");
const DataTable_1 = require("../DataTable");
const theme_1 = require("../../../styled/theme");
const Header = styled_components_1.default.tr `
    background: ${props => props.selected ? theme_1.default.blue : "#333"};
`;
class DataHeader extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__row";
    }
    renderBulkActions() {
        return this.props.actions.map(obj => {
            return (React.createElement(Button_1.default, { onClick: obj.action, key: obj.type, icon: obj.icon, color: "nocolor", size: "small" }));
        });
    }
    render() {
        const { actions, addClass, selectedRows, style } = this.props;
        const kids = this.props.children;
        const lastKid = kids.pop();
        return (React.createElement("thead", null,
            React.createElement(Header, { className: `${this.name} ${this.name}--header ${addClass}`, selected: selectedRows.length > 0, style: style },
                actions.length > 0 &&
                    React.createElement(DataCell_1.default, { type: "header", style: { width: "1%" } },
                        React.createElement(Checkbox_1.default, { input: { onChange: this.props.handleSelectAll, checked: this.props.selectedAll } })),
                kids,
                selectedRows.length > 0 ?
                    React.createElement(DataCell_1.default, { type: "header" },
                        React.createElement(DataTable_1.Actions, { className: `${this.name}__actions_bar` },
                            React.createElement(DataTable_1.ActionsIcons, { className: `${this.name}__actions_icons` }, this.renderBulkActions())))
                    :
                        lastKid)));
    }
}
DataHeader.defaultProps = {
    addClass: "",
    style: {},
    actions: [],
    handleSelectAll: () => { },
    selectedAll: false,
};
exports.default = DataHeader;
//# sourceMappingURL=index.js.map