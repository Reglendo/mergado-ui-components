"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Field_1 = require("components/Forms/Field");
const styled_components_1 = require("styled-components");
const style = require("styled");
const StyledField = styled_components_1.default(Field_1.Field) `
input[type=range]::-webkit-slider-thumb {
    border-color: $color-blue-light;
}

input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    margin: 5.5px 0;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
    background: ${style.BLUE};
    border-radius: 0px;
    border: 0px solid #010101;
}

input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px rgba(48, 113, 169, 0), 0px 0px 0px rgba(54, 126, 189, 0);
    border: 3px solid ${style.BLUE};
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5.5px;
    transition: border-color 0.1s;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: ${style.BLUE};
}

input[type=range]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: ${style.BLUE};
    border-radius: 0px;
    border: 0px solid #010101;
}

input[type=range]::-moz-range-thumb {
    box-shadow: none;
    border: 3px solid ${style.BLUE};
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: white;
    cursor: pointer;
}

input[type=range]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
}

input[type=range]::-ms-fill-lower {
    background: ${style.BLUE};
    border: 0px solid #010101;
    border-radius: 0px;
    box-shadow: none;
}

input[type=range]::-ms-fill-upper {
    background: ${style.BLUE};
    border: 0px solid #010101;
    border-radius: 0px;
    box-shadow: none;
}

input[type=range]::-ms-thumb {
    box-shadow: none;
    border: 3px solid ${style.BLUE};
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    height: 4px;
}

input[type=range]:focus::-ms-fill-lower {
    background: ${style.BLUE};
}

input[type=range]:focus::-ms-fill-upper {
    background: ${style.BLUE};
}
`;
const Input = styled_components_1.default.input `
    padding: 0 0 0 0;
    border: none;
    background: transparent;
`;
const Output = styled_components_1.default.output `
    background: ${style.BLUE};
    position: absolute;
    pointer-events: none;
    margin: auto;
    color: white;
    display: inline-block;
    padding: 2px 5px;
    margin-top: -10px;
    border-radius: 2px;
    font-size: 10px;
    opacity: 1;
`;
class Range extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "input-range";
        this.state = {
            value: props.input.value ?
                props.input.value : props.default ?
                props.default : (props.max - props.min) / 2 + props.min,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ value: evt.target.value });
        return this.props.input.onChange(evt.target.value);
    }
    render() {
        const { labels, meta, input } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const outputId = `${meta.form}-${input.name}_output`;
        const outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
        const value = this.state.value;
        const percent = (value - this.props.min) / (this.props.max - this.props.min) * 100;
        return (React.createElement(StyledField, Object.assign({}, props, { name: this.name }),
            React.createElement(Input, Object.assign({}, input, { className: `${this.name}__item
                                ${config_1.form}__input--text ${config_1.form}__input--range`, type: "range", max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, onInput: (evt) => {
                    const target = evt.target;
                    const output = document.getElementById(outputId);
                    output.value = target.value;
                }, value: value })),
            value !== undefined && value !== "" &&
                React.createElement(Output, { className: `${config_1.form}__input--range__output`, style: { left: "calc(" + percent + "% - 10px)" }, id: outputId }, value)));
    }
}
Range.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { max: 50, min: 0, step: 1 });
exports.default = Range;
//# sourceMappingURL=index.js.map