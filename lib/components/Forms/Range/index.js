var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import glamorous from "glamorous";
import * as Color from "color";
import debounce from "lodash/debounce";
import { prefix, form } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import TextInput from "../../../components/Forms/TextInput";
class Range extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "input-range";
        this.state = {
            value: props.input.value ?
                props.input.value : props.default !== null ?
                props.default : (props.max - props.min) / 2 + props.min,
        };
        this.handleChange = debounce(this.handleChange.bind(this), 200);
    }
    handleChange(evt) {
        this.setState({ value: evt.target.value });
        return this.props.input.onChange(evt.target.value);
    }
    render() {
        const { labels, meta, input } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const value = this.state.value;
        return (React.createElement(StyledField, Object.assign({}, props, { name: this.name }),
            React.createElement(glamorous.Div, { padding: "5px 0px", className: "muk-grid" },
                React.createElement(TextInput, { type: "number", max: this.props.max, min: this.props.min, step: this.props.step, className: "muk-2-12", input: {
                        value,
                        onChange: this.handleChange,
                    } }),
                React.createElement("div", { className: "muk-10-12", style: { padding: "5px 0 5px 10px" } },
                    React.createElement(Input, Object.assign({}, input, { className: `${this.name}__item
                                        ${form}__input--text ${form}__input--range muk-6-12`, type: "range", max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, value: value }))))));
    }
}
Range.defaultProps = Object.assign({}, defaultFieldProps, { max: 50, min: 0, step: 1, default: null });
const StyledField = glamorous(Field)({
    "& input[type=range]": {
        appearance: "none",
        width: "100%",
        margin: "5.5px 0",
    },
    "& input[type=range]:focus": {
        outline: "none",
    },
}, (props) => {
    const thumbColor = props.theme.blue;
    const sliderColor = Color(props.theme.decoration).fade(0.5);
    const slider = {
        width: "100%",
        height: "6px",
        cursor: "pointer",
        background: "white",
        borderRadius: "10px",
        border: `1px solid ${sliderColor}`,
    };
    const thumb = {
        border: `8px solid ${Color(thumbColor).fade(0.2)}`,
        height: "25px",
        width: "25px",
        borderRadius: "100%",
        background: "#ffffff",
        cursor: "pointer",
        appearance: "none",
        marginTop: "-11px",
        transition: "border-color 0.3s",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
    };
    return {
        "& input[type=range]::-webkit-slider-runnable-track": slider,
        "& input[type=range]::-moz-range-track": Object.assign({}, slider),
        "& input[type=range]::-webkit-slider-thumb": thumb,
        "& input[type=range]:hover::-webkit-slider-thumb": {
            borderColor: thumbColor,
        },
        "& input[type=range]::-moz-range-thumb": Object.assign({}, thumb, { height: "10px", width: "10px" }),
        "& input[type=range]:hover::-moz-range-thumb": {
            borderColor: thumbColor,
        },
    };
});
const Input = glamorous.input({
    padding: 0,
    border: "none",
    background: "transparent",
});
export default Range;
