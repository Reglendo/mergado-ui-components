"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class FormComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.form = config_1.prefix + "form";
        this.name = config_1.prefix + "form-component";
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
    }
    renderLabel(inputId, inputClass, props) {
        return (React.createElement("div", null));
    }
    renderInput(inputId, inputClass, props) {
        return (React.createElement("div", null));
    }
    render() {
        const { disabled, required, addClass, style, input, id, meta } = this.props;
        const inputId = id ? id : `${this.props.meta.form}-${input.name}`;
        const addProps = Object.assign({}, this.props.addProps);
        delete addProps.addClass;
        return (React.createElement("div", { className: `${this.name}
                             ${disabled && this.name + `--` + disabled}
                             ${required && this.name + `--` + required}
                             ${addClass ? addClass : ``}
                             ${this.form}__group
                             ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ""}
                         `, title: this.props.labels.title, style: style },
            this.renderInvalid(),
            React.createElement("label", { className: `${this.name}__label ${this.form}__label` }, this.renderLabel(inputId, addClass, addProps)),
            this.renderInput(inputId, addClass, addProps)));
    }
}
FormComponent.defaultProps = {
    disabled: false,
    required: false,
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
        main: null,
        invalid: "Invalid input",
        title: "",
    },
};
exports.FormComponent = FormComponent;
//# sourceMappingURL=form_component.js.map