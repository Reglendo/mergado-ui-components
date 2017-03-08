"use strict";
const React = require("react");
class LittleStatus extends React.Component {
    render() {
        return (React.createElement("span", { className: `lite-status tooltip ${this.props.type}`, title: this.props.title }));
    }
}
LittleStatus.defaultProps = {
    title: "",
    type: "ok"
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LittleStatus;
//# sourceMappingURL=index.js.map