import * as React from "react";
import cxs from "@reglendo/cxs/component";
import { Div } from "../../../components/Layout";
import { prefix } from "../../../config";
import TextInput from "../../../components/Forms/TextInput";
import Checkbox from "../../../components/Forms/Checkbox";
import domOnlyProps from "../../../helpers/dom-only-props";
import Grid from "../../../components/Layout/Grid";
import GridCell from "../../../components/Layout/GridCell";
class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "datagrid";
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
        const ch = !Array.isArray(children) ? [children] : children;
        if (Array.isArray(ch)) {
            return ch.map(obj => {
                return React.cloneElement(obj, Object.assign({}, obj.props, { actions: this.props.bulkActions, labels: this.props.labels, selectedAll: this.state.selectedAll, handleSelectAll: this.handleSelectAll.bind(this), handleSelectRow: this.handleSelectRow.bind(this), selectedRows: this.state.selectedRows }));
            });
        }
        else {
            return false;
        }
    }
    renderFiltersBar() {
        return (React.createElement(Div, { marginBottom: "10px", verticalAlign: "middle", className: `${this.name}__filters_bar` },
            React.createElement(Grid, { cols: "auto auto" },
                React.createElement(GridCell, null, this.renderFilters()),
                React.createElement(GridCell, null, this.renderButtons()))));
    }
    renderButtons() {
        return this.props.buttons.map(obj => {
            return React.createElement("div", { style: { textAlign: "right", verticalAlign: "bottom" } }, obj);
        });
    }
    renderFilters() {
        return this.props.filters.map(obj => {
            switch (obj.type) {
                case "text":
                    return (React.createElement(TextFilter, { type: "search", onClear: () => obj.action({ currentTarget: { value: "" } }), input: { onKeyUp: (evt) => { obj.action(evt); }, value: obj.value }, labels: { placeholder: obj.label }, key: "text" }));
                case "checkbox":
                    return (React.createElement(CheckboxFilter, { input: { onChange: (evt) => { obj.action(evt); }, value: obj.value }, labels: { main: obj.label }, key: "checkbox" }));
            }
        });
    }
    render() {
        const { addClass, className, style } = this.props;
        return (React.createElement("div", { className: `${this.name}` },
            React.createElement("div", { style: { whiteSpace: "nowrap" } }, this.props.filters.length > 0 && this.renderFiltersBar()),
            React.createElement(Table, Object.assign({ className: `${this.name}__table ${addClass} ${className}`, style: style }, domOnlyProps(this.props)), this.props.children && this.renderChildren(this.props.children))));
    }
}
DataTable.defaultProps = {
    bulkActions: [],
    filters: [],
    buttons: [],
    style: {},
    addClass: "",
    className: "",
    labels: {
        actionsBar: "",
    },
};
const Table = cxs("table")({
    width: "100%",
    " .sortable-ghost": {
        opacity: 0.1,
    },
}, (props) => {
    return {
        borderLeft: props.theme.table_border_vertical,
    };
});
const TextFilter = cxs(TextInput)({
    paddingRight: "20px",
    display: "inline-block",
    width: "70%",
});
const CheckboxFilter = cxs(Checkbox)({
    whiteSpace: "nowrap",
    display: "inline-block",
});
export default DataTable;
