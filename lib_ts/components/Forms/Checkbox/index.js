"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const MUK = require("components/Forms/input");
class Checkbox extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-checkbox";
    }
    renderLabel(className, props) {
        const { input, labels } = this.props;
        return React.createElement("span", null,
            React.createElement("input", Object.assign({}, props, { type: "checkbox", className: `${this.name}__item ${className ? className : ""}`, defaultChecked: input ? !!input.value : false })),
            "\u00A0",
            labels ? labels.main : "");
    }
}
Checkbox.defaultProps = {};
exports.default = Checkbox;
//# sourceMappingURL=index.js.map