"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const MUK = require("components/Forms/input");
class TextInput extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-text";
    }
    renderLabel() {
        return this.props.labels.main;
    }
    renderInput(className, props) {
        const { type, meta, input } = this.props;
        const inputProps = this.props.input;
        if (type === "file") {
            delete inputProps.value;
        }
        return (React.createElement("input", Object.assign({}, input, { placeholder: this.props.labels.placeholder, ref: "input", className: `${this.name}__input \
${this.form}__input--text \
${this.form}__input--${type} \
${className}` })));
    }
}
TextInput.defaultProps = Object.assign({}, MUK.defaultProps, { type: "text" });
exports.default = TextInput;
//# sourceMappingURL=index.js.map