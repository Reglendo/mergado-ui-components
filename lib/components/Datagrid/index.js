"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("../../config");
const Sortable = require("react-sortablejs");
class Datagrid extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid";
    }
    render() {
        const { rows, header, sortable, sortableProps, addClass, style } = this.props;
        let className = `${this.name} ${this.props.addClass}`;
        return (React.createElement("table", { className: className, style: style },
            header,
            sortable ? React.createElement(Sortable, Object.assign({ tag: "tbody" }, sortableProps), rows) : React.createElement("tbody", null, rows)));
    }
}
Datagrid.defaultProps = {
    style: {},
    addClass: '',
    rows: [],
    header: [],
    sortable: false,
    sortableProps: {},
};
exports.default = Datagrid;
//# sourceMappingURL=index.js.map