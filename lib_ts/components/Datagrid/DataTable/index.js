"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Button_1 = require("components/Forms/Button");
const TextInput_1 = require("components/Forms/TextInput");
const Checkbox_1 = require("components/Forms/Checkbox");
const Input_1 = require("components/Forms/Input");
const unique_id_1 = require("helpers/unique_id");
const styled_components_1 = require("styled-components");
const dom_only_props_1 = require("helpers/dom-only-props");
/* <style> */
const Wrapper = styled_components_1.default.div `
`;
const Table = styled_components_1.default.table `
    width: 100%;
    .sortable-ghost {
      opacity: 0.1;
    }
`;
const Filters = styled_components_1.default.div `
    vertical-align: middle;
    padding-left: 40px;
    position: relative;
    &:before {
        display: inline-block;
        content: " ";
        border-left: 3px solid #dbcba3;
        height: 40px;
        vertical-align: bottom;
        margin-top: 23px;
        width: 10px;
        position: absolute;
        bottom: 0;
        left: 18px;
    }
`;
const TextFilter = styled_components_1.default(TextInput_1.default) `
    padding-right: 20px;
`;
const CheckboxFilter = styled_components_1.default(Checkbox_1.default) `
    padding-top: 20px !important;
    padding-right: 20px;
    white-space: nowrap;
`;
const Actions = styled_components_1.default.div `
`;
const ActionsIcons = styled_components_1.default.div `
    background: white;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    white-space: nowrap;
    background-color: #fff;
    border: 1px solid #dbcba3;
    .muk-button__item {
        height: 42px !important;
    }
    svg {
        width: 18px !important;
        height: 18px !important;
    }
`;
/* </style> */
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
    renderChildren(children) {
        return children.map(obj => {
            return React.cloneElement(obj, Object.assign({}, obj.props, { actions: this.props.bulkActions, labels: this.props.labels, selectedAll: this.state.selectedAll, handleSelectAll: this.handleSelectAll.bind(this), handleSelectRow: this.handleSelectRow.bind(this), selectedRows: this.state.selectedRows }));
        });
    }
    renderBulkActionbar() {
        const { labels } = this.props;
        return (React.createElement(Actions, { className: `${this.name}__actions_bar muk-1-12` },
            React.createElement(Input_1.InputLabel, { name: "actionbar" }, labels.actionsBar),
            React.createElement(ActionsIcons, { className: `${this.name}__actions_icons` }, this.renderBulkActions())));
    }
    renderBulkActions() {
        const disabled = !this.state.selectedRows || this.state.selectedRows.length === 0;
        return this.props.bulkActions.map(obj => {
            return (React.createElement(Button_1.default, { onClick: obj.action, key: obj.type, icon: obj.icon, disabled: disabled, color: "nocolor", size: "tiny" }));
        });
    }
    renderFiltersBar() {
        return (React.createElement(Filters, { className: `${this.name}__filters_bar muk-11-12` },
            React.createElement("div", { className: "muk-grid--table" },
                React.createElement("div", null, this.renderFilters()))));
    }
    renderFilters() {
        return this.props.filters.map(obj => {
            switch (obj.type) {
                case "text":
                    return (React.createElement(TextFilter, { input: { onChange: (evt) => { obj.action(evt); } }, labels: { main: obj.label }, key: "text" }));
                case "checkbox":
                    return (React.createElement(CheckboxFilter, { input: { onChange: (evt) => { obj.action(evt); } }, labels: { main: obj.label }, key: "checkbox" }));
            }
        });
    }
    render() {
        const { addClass, style } = this.props;
        const className = `${this.name}__table ${this.props.addClass}`;
        return (React.createElement(Wrapper, { className: `${this.name}` },
            React.createElement("div", { className: "muk-grid--table" },
                React.createElement("div", null,
                    this.props.bulkActions.length > 0 && this.renderBulkActionbar(),
                    this.props.filters.length > 0 && this.renderFiltersBar())),
            React.createElement(Table, Object.assign({ className: className, style: style }, dom_only_props_1.default(this.props)), this.renderChildren())));
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