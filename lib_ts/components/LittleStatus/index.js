"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class LittleStatus extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "little_status";
    }
    render() {
        const className = `${this.name} ${this.name}--${this.props.type}`;
        const classIndikator = `${this.name}__indikator tooltip`;
        const classText = `${this.name}__text`;
        const text = this.props.text ? (React.createElement("span", { className: classText },
            " ",
            this.props.text)) : this.props.children;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("span", { className: classIndikator, title: this.props.title }),
            text));
    }
}
LittleStatus.defaultProps = {
    title: "",
    type: "success",
    text: "",
    style: {},
};
exports.default = LittleStatus;
//# sourceMappingURL=index.js.map