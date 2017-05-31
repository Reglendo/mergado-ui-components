"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Input_1 = require("components/Forms/Input");
class Radio extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-checkbox";
        this.form = config_1.prefix + "form";
    }
    render() {
        const { disabled, required, addClass, style, input, id, meta } = this.props;
        const inputId = `${this.props.meta.form}-${input.name}`;
        const addProps = Object.assign({}, this.props.addProps);
        delete addProps.addClass;
        const props = this.props;
        return (React.createElement(Input_1.Input, Object.assign({ name: this.name }, props),
            React.createElement(Input_1.InputError, Object.assign({}, props)),
            React.createElement(Input_1.InputLabel, { name: this.name },
                React.createElement("input", Object.assign({ className: `${this.name}__item`, id: id ? id : inputId, type: "radio", required: !!required, disabled: !!disabled }, this.props.input, addProps)),
                "\u00A0",
                this.props.labels.main)));
    }
}
Radio.defaultProps = {
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
exports.default = Radio;
//# sourceMappingURL=index.js.map