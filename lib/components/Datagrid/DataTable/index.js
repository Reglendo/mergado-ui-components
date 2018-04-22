var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import cxs from "@reglendo/cxs/component";
import { Div } from "../../../components/Layout/Div";
import { prefix } from "../../../config";
import TextInput from "../../../components/Forms/TextInput";
import Checkbox from "../../../components/Forms/Checkbox";
import domOnlyProps from "../../../helpers/dom-only-props";
import Grid from "../../../components/Layout/Grid";
import GridCell from "../../../components/Layout/GridCell";
class DataTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.name = prefix + "datatable";
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
        return (React.createElement(Div, { className: `m-filters`, marginBottom: "10px", verticalAlign: "middle" },
            React.createElement(Grid, { cols: "auto auto" },
                React.createElement(GridCell, null, this.renderFilters()),
                React.createElement(GridCell, null, this.renderButtons()))));
    }
    renderButtons() {
        return this.props.buttons.map(obj => {
            return React.createElement(Div, { className: "m-buttons", textAlign: "right", verticalAlign: "bottom" }, obj);
        });
    }
    renderFilters() {
        return this.props.filters.map(obj => {
            switch (obj.type) {
                case "text":
                    return (React.createElement(CssMTextFilter, { className: "m-text-filter", type: "search", onClear: () => obj.action({ currentTarget: { value: "" } }), input: { onKeyUp: (evt) => { obj.action(evt); }, value: obj.value }, labels: { placeholder: obj.label }, key: "text" }));
                case "checkbox":
                    return (React.createElement(CssMCheckboxFilter, { className: "m-checkbox-filter", input: { onChange: (evt) => { obj.action(evt); }, value: obj.value }, labels: { main: obj.label }, key: "checkbox" }));
            }
        });
    }
    render() {
        const _a = this.props, { className, style } = _a, props = __rest(_a, ["className", "style"]);
        return (React.createElement(Div, { className: `${this.name} ${className || ""}` },
            React.createElement(Div, { className: "m-filters-wrapper", whiteSpace: "nowrap" }, this.props.filters.length > 0 && this.renderFiltersBar()),
            React.createElement(CssTable, Object.assign({ className: `m-table`, s: style }, domOnlyProps(props)), this.props.children && this.renderChildren(this.props.children))));
    }
}
DataTable.defaultProps = {
    bulkActions: [],
    filters: [],
    buttons: [],
    style: {},
    className: "",
    labels: {
        actionsBar: "",
    },
};
const CssTable = cxs("table")({
    width: "100%",
    " .sortable-ghost": {
        opacity: 0.1,
    },
}, (props) => {
    return Object.assign({ borderBottom: "5px solid #333" }, props.s);
});
const CssMTextFilter = cxs(TextInput)({
    paddingRight: "20px",
    display: "inline-block",
    width: "70%",
    marginBottom: 0,
});
const CssMCheckboxFilter = cxs(Checkbox)({
    whiteSpace: "nowrap",
    display: "inline-block",
});
export default DataTable;
