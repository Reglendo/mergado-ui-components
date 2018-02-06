import * as React from "react";
import { prefix } from "../../../config";
import * as Sortable from "react-sortablejs";
export class DataBody extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "datagrid__body";
    }
    renderChildren() {
        const children = !Array.isArray(this.props.children) ? [this.props.children] : this.props.children;
        return children.map(obj => {
            return React.cloneElement(obj, {
                actions: this.props.actions,
                handleSelectRow: this.props.handleSelectRow,
                selectedRows: this.props.selectedRows,
            });
        });
    }
    render() {
        const { sortable, sortableProps, style, addClass, className } = this.props;
        if (sortable) {
            return (React.createElement(Sortable, Object.assign({ tag: "tbody" }, sortableProps), this.props.children && this.renderChildren()));
        }
        else {
            return (React.createElement("tbody", { className: className }, this.props.children && this.renderChildren()));
        }
    }
}
DataBody.defaultProps = {
    sortable: false,
    sortableProps: {},
    addClass: "",
    className: "",
    style: {},
    actions: [],
};
