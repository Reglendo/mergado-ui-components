"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Sortable = require("react-sortablejs");
class DataBody extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__body";
    }
    renderChildren() {
        const children = this.props.children;
        return children.map(obj => {
            return React.cloneElement(obj, {
                actions: this.props.actions,
                handleSelectRow: this.props.handleSelectRow,
                selectedRows: this.props.selectedRows,
            });
        });
    }
    render() {
        const { sortable, sortableProps, style, addClass } = this.props;
        if (sortable) {
            return (React.createElement(Sortable, Object.assign({ tag: "tbody" }, sortableProps), this.props.children && this.renderChildren()));
        }
        else {
            return (React.createElement("tbody", null, this.props.children && this.renderChildren()));
        }
    }
}
DataBody.defaultProps = {
    sortable: false,
    sortableProps: {},
    addClass: "",
    style: {},
    actions: [],
};
exports.default = DataBody;
//# sourceMappingURL=index.js.map