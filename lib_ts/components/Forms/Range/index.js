"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class Range extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "input-range";
        this.form = config_1.prefix + "form";
        this.state = {
            value: props.input.value
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ value: evt.target.value });
        return this.props.input.onChange(evt.target.value);
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
    }
    render() {
        const { id, meta, input } = this.props;
        const inputId = `${meta.form}-${input.name}`;
        const outputId = `${meta.form}-${input.name}_output`;
        const outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
        return (React.createElement("div", { className: `${this.name} ${this.form}__group ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ''}`, title: this.props.labels.title, style: this.props.style },
            this.renderInvalid(),
            React.createElement("div", { style: { position: 'relative' } },
                React.createElement("label", { className: `${this.name}__label ${this.form}__label`, htmlFor: inputId }, this.props.labels.main),
                React.createElement("input", Object.assign({ className: `${this.name}__item ${this.form}__input--text ${this.form}__input--range ${meta.invalid && (meta.dirty || meta.touched) ? 'invalid' : ''}`, id: id ? id : inputId, type: 'range', placeholder: this.props.labels.placeholder }, this.props.input, { max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, onInput: (evt) => {
                        let target = evt.target;
                        let output = document.getElementById(outputId);
                        output.value = target.value;
                    }, value: this.state.value }, this.props.addProps)),
                React.createElement("output", { className: `${this.form}__input--range__output`, style: { left: 'calc(' + ((this.state.value / this.props.max) * 100) + '% - ' + outputWidth / 2 + 'px)' }, id: outputId }, this.state.value))));
    }
}
Range.defaultProps = {
    max: 50,
    min: 0,
    step: 1,
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
        warning: ""
    },
    labels: {
        main: "Text",
        placeholder: "Fill out here...",
        invalid: "Invalid input",
        title: ""
    }
};
exports.default = Range;
//# sourceMappingURL=index.js.map