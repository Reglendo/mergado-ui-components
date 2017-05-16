"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class DataTable extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid";
    }
    render() {
        const { addClass, style } = this.props;
        let className = `${this.name} ${this.props.addClass}`;
        return (React.createElement("table", { className: className, style: style }, this.props.children));
    }
}
DataTable.defaultProps = {
    style: {},
    addClass: ''
};
exports.default = DataTable;
//# sourceMappingURL=index.js.map