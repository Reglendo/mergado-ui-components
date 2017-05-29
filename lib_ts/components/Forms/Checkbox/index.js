"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class Checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-checkbox";
        this.form = config_1.prefix + "form";
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
    }
    render() {
        const { disabled, required, addClass, style, input, id, meta, labels } = this.props;
        const inputId = `${this.props.meta.form}-${input.name}`;
        const addProps = Object.assign({}, this.props.addProps);
        delete addProps.addClass;
        return (React.createElement("div", { className: `${this.name} ${disabled && this.name + `--` + disabled}
                             ${required && this.name + `--` + required} ${addClass ? addClass : ``}
                             ${this.form}__group
                             ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ""}
                         `, title: labels.title, style: style },
            this.renderInvalid(),
            React.createElement("label", { className: `${this.name}__label ${this.form}__label ${this.form}__input` },
                React.createElement("input", Object.assign({ className: `${this.name}__item`, id: id ? id : inputId, type: "checkbox", required: !!required, disabled: !!disabled }, this.props.input, addProps)),
                " ",
                this.props.labels.main)));
    }
}
Checkbox.defaultProps = {
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
exports.default = Checkbox;
//# sourceMappingURL=index.js.map