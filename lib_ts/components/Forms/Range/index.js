"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const MUK = require("components/Forms/input");
class Range extends MUK.InputComponent {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "input-range";
        this.state = {
            value: props.input.value,
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
    renderInput(className, props) {
        const { labels, meta, input } = this.props;
        const outputId = `${meta.form}-${input.name}_output`;
        const outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
        return (React.createElement("span", null,
            React.createElement("input", Object.assign({}, input, { className: `${this.name}__item
                                ${this.form}__input--text ${this.form}__input--range
                                ${className}}`, type: "range", max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, onInput: (evt) => {
                    const target = evt.target;
                    const output = document.getElementById(outputId);
                    output.value = target.value;
                }, value: this.state.value })),
            this.state.value !== undefined &&
                React.createElement("output", { className: `${this.form}__input--range__output`, style: { left: "calc(" + ((this.state.value / this.props.max) * 100) + "% - " + outputWidth / 2 + "px)" }, id: outputId }, this.state.value)));
    }
    renderLabel() {
        const { labels } = this.props;
        return this.props.labels.main;
    }
}
Range.defaultProps = Object.assign({}, MUK.defaultProps, { max: 50, min: 0, step: 1 });
exports.default = Range;
//# sourceMappingURL=index.js.map