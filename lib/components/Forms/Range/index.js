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
import css from "cxs/component";
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
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.input.value !== this.props.input.value) {
            this.handleChange({ target: { value: nextProps.input.value } });
        }
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
const StyledField = css(Field)({
    " input[type=range]": {
        appearance: "none",
        width: "100%",
        margin: "5.5px 0",
    },
    " input[type=range]:focus": {
        outline: "none",
    },
}, (props) => {
    const thumbColor = props.theme.blue;
    const sliderColor = Color(props.theme.decoration).fade(0.5).string();
    const slider = {
        width: "100%",
        height: "6px",
        cursor: "pointer",
        background: "white",
        borderRadius: "10px",
        border: `1px solid ${sliderColor}`,
    };
    const thumb = {
        border: `8px solid ${Color(thumbColor).fade(0.2).string()}`,
        height: "25px",
        width: "25px",
        borderRadius: "100%",
        background: "#ffffff",
        cursor: "pointer",
        "-webkit-appearance": "none",
        appearance: "none",
        marginTop: "-11px",
        transition: "border-color 0.3s",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
    };
    return {};
});
const Input = css("input")({
    padding: 0,
    border: "none",
    background: "transparent",
    appearance: "none",
    "-webkit-appearance": "none",
});
export default Range;
