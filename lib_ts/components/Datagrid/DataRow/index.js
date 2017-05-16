"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class DataRow extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__row";
    }
    render() {
        const { style, addClass, inactive, dataId } = this.props;
        return (React.createElement("tr", { className: `${this.name} ${inactive && this.name + `--inactive`} ${addClass}`, "data-id": dataId, style: style }, this.props.children));
    }
}
DataRow.defaultProps = {
    addClass: '',
    style: {},
    inactive: false,
    dataId: ""
};
exports.default = DataRow;
//# sourceMappingURL=index.js.map