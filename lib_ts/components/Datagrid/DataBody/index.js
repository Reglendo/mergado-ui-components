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
    render() {
        const { sortable, sortableProps, style, addClass } = this.props;
        if (sortable) {
            return (React.createElement(Sortable, Object.assign({ tag: "tbody" }, sortableProps), this.props.children));
        }
        else {
            return (React.createElement("tbody", null, this.props.children));
        }
    }
}
DataBody.defaultProps = {
    sortable: false,
    sortableProps: {},
    addClass: "",
    style: {},
};
exports.default = DataBody;
//# sourceMappingURL=index.js.map