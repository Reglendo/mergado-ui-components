"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Input_1 = require("components/Forms/Input");
class TextInput extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-text";
        this.form = config_1.prefix + "form";
    }
    render() {
        const { id, type, meta, input, addClass } = this.props;
        const inputId = id ? id : `${meta.form}-${input.name}`;
        const addProps = Object.assign({}, this.props.addProps);
        delete addProps.addClass;
        const props = this.props;
        const inputProps = this.props.input;
        if (type === "file") {
            delete inputProps.value;
        }
        return (React.createElement(Input_1.Input, Object.assign({ name: this.name }, props),
            React.createElement(Input_1.InputError, Object.assign({}, props)),
            React.createElement(Input_1.InputLabel, { name: this.name }, this.props.labels.main),
            React.createElement("input", Object.assign({ id: inputId, type: type, placeholder: this.props.labels.placeholder, ref: "input" }, this.props.input, inputProps, { className: `${this.name}__input ${this.form}__input--text ${this.form}__input--${type}
                                ${meta.invalid && (meta.dirty || meta.touched) ? "invalid" : ""}
                                ${this.props.addProps ? this.props.addProps.addClass : ""}` }))));
    }
}
TextInput.defaultProps = {
    type: "text",
    style: null,
    addClass: "",
    id: "",
    input: {
        checked: false,
        name: "",
        onBlur: (value) => {
        },
        onChange: (value) => {
        },
        onDragStart: (value) => {
        },
        onDrop: (value) => {
        },
        onFocus: (value) => {
        },
        value: "",
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: "",
    },
    labels: {
        main: "",
        placeholder: "",
        invalid: "",
        title: "",
    },
};
exports.default = TextInput;
//# sourceMappingURL=index.js.map