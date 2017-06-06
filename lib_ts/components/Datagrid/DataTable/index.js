"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Button_1 = require("components/Forms/Button");
const Input_1 = require("components/Forms/Input");
const unique_id_1 = require("helpers/unique_id");
class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "datagrid";
        this.state = {
            checkedAll: false,
            selectedRows: [],
        };
    }
    handleCheckAll() {
        if (this.state.checkedAll) {
            this.setState({
                selectedRows: [],
                checkedAll: false,
            });
        }
        else {
            const selected = [];
            for (const checkbox of document.querySelectorAll(".bulk-action-item")) {
                const item = checkbox;
                selected.push(parseInt(item.getAttribute("data-id"), 10));
            }
            this.setState({
                selectedRows: selected,
                checkedAll: true,
            });
        }
    }
    handleSelectRow(id) {
        const selected = this.state.selectedRows;
        const index = selected.indexOf(id);
        index === -1 ? selected.push(id) : selected.splice(index, 1);
        this.setState({
            selectedRows: selected,
        });
    }
    renderChildren() {
        const children = this.props.children;
        return children.map(obj => {
            return React.cloneElement(obj, Object.assign({}, obj.props, { key: unique_id_1.default(), actions: this.props.bulkActions, checkedAll: this.state.checkedAll, checkAll: this.handleCheckAll.bind(this), labels: this.props.labels, selectRow: this.handleSelectRow.bind(this), selected: this.state.selectedRows }));
        });
    }
    renderBulkActionbar() {
        const { labels } = this.props;
        return (React.createElement("div", { className: `${this.name}__actions_bar` },
            React.createElement(Input_1.InputLabel, { name: "actionbar" }, labels.actionsBar),
            React.createElement("div", { className: `${this.name}__actions_icons` }, this.renderBulkActions())));
    }
    renderBulkActions() {
        const disabled = this.state.selectedRows.length === 0;
        return this.props.bulkActions.map(obj => {
            return (React.createElement(Button_1.default, { onClick: obj.action, key: obj.type, icon: obj.icon, disabled: disabled, color: "nocolor", size: "tiny" }));
        });
    }
    render() {
        const { addClass, style } = this.props;
        const className = `${this.name}__table ${this.props.addClass}`;
        return (React.createElement("div", { className: `${this.name}` },
            this.props.bulkActions.length > 0 && this.renderBulkActionbar(),
            React.createElement("table", { className: className, style: style }, this.renderChildren())));
    }
}
DataTable.defaultProps = {
    bulkActions: [],
    style: {},
    addClass: "",
    labels: {
        actionsBar: "",
        actionsHeader: "",
    },
};
exports.default = DataTable;
//# sourceMappingURL=index.js.map