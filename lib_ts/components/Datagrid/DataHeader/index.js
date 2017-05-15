"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class DataHeader extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__row";
    }
    render() {
        const { cells, style, addClass } = this.props;
        return (React.createElement("thead", null,
            React.createElement("tr", { className: `${this.name} ${this.name}--header ${addClass}`, style: style }, cells)));
    }
}
DataHeader.defaultProps = {
    cells: [],
    addClass: '',
    style: {},
};
exports.default = DataHeader;
//# sourceMappingURL=index.js.map