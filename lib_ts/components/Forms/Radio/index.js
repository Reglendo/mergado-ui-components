"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const MUK = require("components/Forms/input");
class Radio extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-checkbox";
    }
    renderLabel(className, props) {
        const { input, meta, labels } = this.props;
        return (React.createElement("span", null,
            React.createElement("input", Object.assign({}, input, { className: `${this.name}__item ${className}`, type: "radio" })),
            "\u00A0",
            this.props.labels.main));
    }
}
Radio.defaultProps = Object.assign({}, MUK.defaultProps);
exports.default = Radio;
//# sourceMappingURL=index.js.map