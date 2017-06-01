"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const unique_id_1 = require("helpers/unique_id");
const Input_1 = require("components/Forms/Input");
class Select extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "select";
        this.form = config_1.prefix + "form";
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
    }
    renderOptions() {
        return this.props.options.map(option => {
            if (React.isValidElement(option)) {
                if (option.key) {
                    return option;
                }
                else {
                    const object = Object;
                    return object.assign({}, option, { key: unique_id_1.default() });
                }
            }
            else {
                return (React.createElement("option", { value: option.value, key: unique_id_1.default() }, option.title));
            }
        });
    }
    render() {
        const { multiple, disabled, required, size, addClass, style, id, meta, input } = this.props;
        const inputId = `${this.props.meta.form}-${this.props.input.name}`;
        const addProps = Object.assign({}, this.props.addProps);
        delete addProps.addClass;
        const props = this.props;
        return (React.createElement(Input_1.Input, Object.assign({ name: this.name }, props),
            React.createElement(Input_1.InputError, Object.assign({}, props)),
            React.createElement(Input_1.InputLabel, { name: this.name }, this.props.labels.main),
            React.createElement("select", Object.assign({ className: `${this.name}__item`, id: id ? id : inputId, multiple: !!multiple, disabled: !!disabled, required: !!required, size: size }, input, addProps), this.renderOptions())));
    }
}
Select.defaultProps = {
    options: [],
    multiple: false,
    disabled: false,
    required: false,
    size: 0,
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
exports.default = Select;
//# sourceMappingURL=index.js.map