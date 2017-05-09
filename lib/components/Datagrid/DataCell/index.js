"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("../../../config");
class DataCell extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "datagrid__cell";
    }
    render() {
        const { style, type, addClass, onClick } = this.props;
        if (type === 'cell') {
            return (React.createElement("td", { className: `${this.name} ${addClass}`, style: style, onClick: onClick }, this.props.children));
        }
        else {
            return (React.createElement("th", { className: `${this.name} ${this.name}--header ${addClass}`, style: style, onClick: onClick }, this.props.children));
        }
    }
}
DataCell.defaultProps = {
    addClass: '',
    style: {},
    type: 'cell',
    onClick: () => { }
};
exports.default = DataCell;
//# sourceMappingURL=index.js.map