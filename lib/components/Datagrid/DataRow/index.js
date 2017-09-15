"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const config_1 = require("../../../config");
const DataCell_1 = require("../DataCell");
const Checkbox_1 = require("../../../components/Forms/Checkbox");
class DataRow extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__row";
    }
    render() {
        const { style, addClass, inactive, dataId, actions, selectedRows } = this.props;
        const isSelected = selectedRows ? selectedRows.indexOf(dataId) > -1 : false;
        return (React.createElement(Tr, { className: `${this.name} ${inactive && this.name + `--inactive`} ${addClass}`, disabled: inactive, selected: isSelected, "data-id": dataId, style: style },
            actions.length > 0 &&
                React.createElement(DataCell_1.default, null,
                    React.createElement(Checkbox_1.default, { input: { "onChange": evt => this.props.handleSelectRow(dataId),
                            "checked": this.props.selectedRows.indexOf(dataId) !== -1,
                            "data-id": dataId,
                            "className": "bulk-action-item",
                        } })),
            this.props.children));
    }
}
DataRow.defaultProps = {
    addClass: "",
    style: {},
    inactive: false,
    dataId: "",
    actions: [],
    selectedRows: [],
};
const Tr = glamorous_1.default.tr({}, (props) => {
    return {
        background: props.selected ? props.theme.selected_background : "#fff",
        ":hover td": {
            background: props.theme.hover_background,
        },
        color: props.disabled ? "#ccc" : "#000"
    };
});
exports.default = DataRow;
//# sourceMappingURL=index.js.map