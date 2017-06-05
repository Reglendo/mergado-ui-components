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
<<<<<<< HEAD
    renderLabel() {
        return this.props.labels.main;
    }
    renderInput(className, props) {
        const { type, meta, input } = this.props;
=======
    render() {
        const { id, type, meta, input, addClass } = this.props;
        const inputId = id ? id : `${meta.form}-${input.name}`;
        const addProps = Object.assign({}, this.props.addProps);
        delete addProps.addClass;
        const props = this.props;
>>>>>>> master
        const inputProps = this.props.input;
        if (type === "file") {
            delete inputProps.value;
        }
<<<<<<< HEAD
        return (React.createElement("input", Object.assign({}, input, props, { placeholder: this.props.labels.placeholder, ref: "input", className: `${this.name}__input \
${this.form}__input--text \
${this.form}__input--${type} \
${className}` })));
=======
        return (React.createElement(Input_1.Input, Object.assign({ name: this.name }, props),
            React.createElement(Input_1.InputError, Object.assign({}, props)),
            React.createElement(Input_1.InputLabel, { name: this.name }, this.props.labels.main),
            React.createElement("input", Object.assign({ id: inputId, type: type, placeholder: this.props.labels.placeholder, ref: "input" }, this.props.input, inputProps, { className: `${this.name}__input ${this.form}__input--text ${this.form}__input--${type}
                                ${meta.invalid && (meta.dirty || meta.touched) ? "invalid" : ""}
                                ${this.props.addProps ? this.props.addProps.addClass : ""}` }))));
>>>>>>> master
    }
}
TextInput.defaultProps = Object.assign({}, MUK.defaultProps, { type: "text" });
exports.default = TextInput;
//# sourceMappingURL=index.js.map