"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Sortable = require("react-sortablejs");
const DataRow_1 = require("../DataRow");
class DataBody extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__body";
    }
    renderChildren() {
        const children = this.props.children;
        return children.map(obj => {
            if (obj.type.name === "DataRow") {
                return React.createElement(DataRow_1.default, Object.assign({}, obj.props, { checkedAll: this.props.checkedAll, actions: this.props.actions }));
            }
            else {
                return obj;
            }
        });
    }
    render() {
        const { sortable, sortableProps, style, addClass } = this.props;
        if (sortable) {
            return (React.createElement(Sortable, Object.assign({ tag: "tbody" }, sortableProps), this.renderChildren()));
        }
        else {
            return (React.createElement("tbody", null, this.renderChildren()));
        }
    }
}
DataBody.defaultProps = {
    sortable: false,
    sortableProps: {},
    addClass: "",
    style: {},
    actions: [],
    checkedAll: false,
};
exports.default = DataBody;
//# sourceMappingURL=index.js.map