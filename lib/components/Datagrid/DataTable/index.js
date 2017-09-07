"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const config_1 = require("../../../config");
const TextInput_1 = require("../../../components/Forms/TextInput");
const Checkbox_1 = require("../../../components/Forms/Checkbox");
const dom_only_props_1 = require("../../../helpers/dom-only-props");
const theme_1 = require("../../../styled/theme");
/* <style> */
const Wrapper = styled_components_1.default.div `
`;
const Table = styled_components_1.default.table `
    width: 100%;
    .sortable-ghost {
      opacity: 0.1;
    }
    border-left: ${theme_1.default.table_border_vertical};
`;
const Filters = styled_components_1.default.div `
    display: inline-block;
    vertical-align: bottom;
    position: relative;
    .muk-form__group {
        padding: 0;
    }
`;
const TextFilter = styled_components_1.default(TextInput_1.default) `
    &.muk-form__group {
        padding-right: 20px;
    }
`;
const CheckboxFilter = styled_components_1.default(Checkbox_1.default) `
    &.muk-form__group {
        padding-top: 20px;
        padding-left: 20px;
    }
    white-space: nowrap;
`;
exports.Actions = styled_components_1.default.div `
    display: inline-block;
    vertical-align: bottom;
`;
exports.ActionsIcons = styled_components_1.default.div `
    display: inline-block;
    vertical-align: bottom;

    white-space: nowrap;
    position: relative;
    .muk-button {
        padding: 0px
    }
    .muk-button__item {
        padding: 0 5px;
        vertical-align: middle;
        height: auto;
        line-height: 12px;
    }
    path {
        fill: white !important;
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
    renderFiltersBar() {
        return (React.createElement(Filters, { className: `${this.name}__filters_bar muk-11-12` },
            React.createElement("div", { className: "muk-grid--table" },
                React.createElement("div", null, this.renderFilters()))));
    }
    renderFilters() {
        return this.props.filters.map(obj => {
            switch (obj.type) {
                case "text":
                    return (React.createElement(TextFilter, { type: "search", input: { onChange: (evt) => { obj.action(evt); } }, labels: { main: obj.label }, key: "text" }));
                case "checkbox":
                    return (React.createElement(CheckboxFilter, { input: { onChange: (evt) => { obj.action(evt); } }, labels: { main: obj.label }, key: "checkbox" }));
            }
        });
    }
    render() {
        const { addClass, style } = this.props;
        const className = `${this.name}__table ${this.props.addClass}`;
        return (React.createElement(Wrapper, { className: `${this.name}` },
            React.createElement("div", { style: { whiteSpace: "nowrap" } }, this.props.filters.length > 0 && this.renderFiltersBar()),
            React.createElement(Table, Object.assign({ className: className, style: style }, dom_only_props_1.default(this.props)), this.props.children && this.renderChildren(this.props.children))));
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