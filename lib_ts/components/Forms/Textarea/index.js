"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const MUK = require("components/Forms/input");
class Textarea extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "textarea";
    }
    renderLabel() {
        return this.props.labels.main;
    }
    renderInput(className, props) {
        const { input, labels } = this.props;
        return (React.createElement("textarea", Object.assign({}, input, { className: `${this.name}__input
                            ${this.form}__input--text
                            ${this.form}__input--textarea
                            ${className}
                `, placeholder: labels.placeholder }), input.value));
    }
}
Textarea.defaultProps = Object.assign({}, MUK.defaultProps);
exports.default = Textarea;
//# sourceMappingURL=index.js.map