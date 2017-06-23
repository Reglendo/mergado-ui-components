"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Button_1 = require("components/Forms/Button");
const TextInput_1 = require("components/Forms/TextInput");
const Checkbox_1 = require("components/Forms/Checkbox");
const Input_1 = require("components/Forms/Input");
const unique_id_1 = require("helpers/unique_id");
class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "datagrid";
        this.state = {
            selectedAll: false,
            selectedRows: [],
        };
    }
    handleSelectAll() {
        if (this.state.selectedAll) {
            this.setState({
                selectedRows: [],
                selectedAll: false,
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
                selectedAll: true,
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
            return React.cloneElement(obj, Object.assign({}, obj.props, { key: unique_id_1.default(), actions: this.props.bulkActions, labels: this.props.labels, selectedAll: this.state.selectedAll, handleSelectAll: this.handleSelectAll.bind(this), handleSelectRow: this.handleSelectRow.bind(this), selectedRows: this.state.selectedRows }));
        });
    }
    renderBulkActionbar() {
        const { labels } = this.props;
        return (React.createElement("div", { className: `${this.name}__actions_bar muk-1-12` },
            React.createElement(Input_1.InputLabel, { name: "actionbar" }, labels.actionsBar),
            React.createElement("div", { className: `${this.name}__actions_icons` }, this.renderBulkActions())));
    }
    renderBulkActions() {
        const disabled = this.state.selectedRows.length === 0;
        return this.props.bulkActions.map(obj => {
            return (React.createElement(Button_1.default, { onClick: obj.action, key: obj.type, icon: obj.icon, disabled: disabled, color: "nocolor", size: "tiny" }));
        });
    }
    renderFiltersBar() {
        return (React.createElement("div", { className: `${this.name}__filters_bar muk-11-12` },
            React.createElement("div", { className: "muk-grid--table" },
                React.createElement("div", null, this.renderFilters()))));
    }
    renderFilters() {
        return this.props.filters.map(obj => {
            switch (obj.type) {
                case "text":
                    return (React.createElement(TextInput_1.default, { input: { onChange: (evt) => { obj.action(evt); } }, labels: { main: obj.label }, key: "text" }));
                case "checkbox":
                    return (React.createElement(Checkbox_1.default, { input: { onChange: (evt) => { obj.action(evt); } }, labels: { main: obj.label }, key: "checkbox" }));
            }
        });
    }
    render() {
        const { addClass, style } = this.props;
        const className = `${this.name}__table ${this.props.addClass}`;
        return (React.createElement("div", { className: `${this.name}` },
            React.createElement("div", { className: "muk-grid--table" },
                React.createElement("div", null,
                    this.props.bulkActions.length > 0 && this.renderBulkActionbar(),
                    this.props.filters.length > 0 && this.renderFiltersBar())),
            React.createElement("table", { className: className, style: style }, this.renderChildren())));
    }
}
DataTable.defaultProps = {
    bulkActions: [],
    filters: [],
    style: {},
    addClass: "",
    labels: {
        actionsBar: "",
    },
};
exports.default = DataTable;
//# sourceMappingURL=index.js.map