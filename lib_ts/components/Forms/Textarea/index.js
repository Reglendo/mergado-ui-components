"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Input_1 = require("components/Forms/Input");
class Textarea extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "textarea";
        this.form = config_1.prefix + "form";
    }
    render() {
        const { id, meta, input } = this.props;
        const inputId = `${meta.form}-${input.name}`;
        const addProps = Object.assign({}, this.props.addProps);
        delete addProps.addClass;
        const props = this.props;
        return (React.createElement(Input_1.Input, Object.assign({ name: this.name }, props),
            React.createElement(Input_1.InputError, Object.assign({}, props)),
            React.createElement(Input_1.InputLabel, { name: this.name }, this.props.labels.main),
            React.createElement("textarea", Object.assign({ className: `${this.name}__input ${this.form}__input--text ${this.form}__input--textarea
                                ${meta.invalid && (meta.dirty || meta.touched) ? "invalid" : ""}`, id: id ? id : inputId, placeholder: this.props.labels.placeholder }, input, addProps), input.value)));
    }
}
Textarea.defaultProps = {
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
        main: "Text",
        placeholder: "Fill out here...",
        invalid: "Invalid input",
        title: "",
    },
};
exports.default = Textarea;
//# sourceMappingURL=index.js.map