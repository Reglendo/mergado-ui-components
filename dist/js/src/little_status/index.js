"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = LittleStatus;
//# sourceMappingURL=index.js.map