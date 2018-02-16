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
import css from "@reglendo/cxs/component";
import { Span } from "../../../components/Layout";
import { prefix, form } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import { Input as LightInput } from "light-form/dist/es";
class Toggler extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "input-toggler";
    }
    renderLabel() {
        const _a = this.props, { input, labels, reverse } = _a, props = __rest(_a, ["input", "labels", "reverse"]);
        const label = this.props.label ? this.props.label : labels.main;
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        const Element = props.name ? StyledLightInput : Input;
        const offLabel = React.createElement(Span, { fontSize: "16px" },
            props.offLabel,
            props.offLabel && " ");
        const onLabel = React.createElement(Span, { fontSize: "16px" },
            label && " ",
            label);
        return React.createElement(Label, { className: `${isInvalid ? `${form}__group--invalid` : ""}` },
            reverse ? onLabel : offLabel,
            React.createElement("div", { style: { position: "relative", display: "inline-block", verticalAlign: "middle" } },
                React.createElement(Element, Object.assign({}, props, (!props.name && { checked: input.value }), (!props.name && input), { reverse: reverse, type: "checkbox", className: `${this.name}__item ${input.className}`, style: { display: "none" } })),
                React.createElement(StyledInput, { reverse: reverse, label: label, className: "muk-checkbox-input" }),
                React.createElement(Point, { className: "toggler-point", reverse: reverse })),
            reverse ? offLabel : onLabel);
    }
    render() {
        return React.createElement(StyledField, Object.assign({}, this.props, { style: Object.assign({ margin: 0, padding: 0 }, this.props.style), label: this.renderLabel() }));
    }
}
Toggler.defaultProps = Object.assign({}, defaultFieldProps, { offLabel: "", reverse: false });
const Label = css("div")({
    cursor: "pointer",
}, (props) => {
    const theme = props.theme;
    return {
        ":hover .muk-checkbox-input": {
            borderColor: theme.blue,
        },
    };
});
const StyledField = css(Field)({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
    " svg": {},
});
const Point = css("span")({
    display: "inline-block",
    width: "14px",
    height: "14px",
    borderRadius: "999em",
    background: "white",
    position: "absolute",
    left: "11px",
    top: "2px",
    transition: "transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)",
    willChange: "transform",
}, props => ({
    transform: props.reverse ? "translate3d(20px,0,0)" : "translate3d(0,0,0)",
}));
const styles = {};
const stylesProps = (props) => {
    return {
        ":checked + span + span.toggler-point": {
            transform: props.reverse ? "translate3d(0,0,0)" : "translate3d(20px,0,0)",
        },
        " + span": {
            borderColor: `${props.theme.inactive}`,
            background: `${props.theme.inactive}`,
            transition: "border-color 0.2s, background-color 0.2s",
            willChange: "background-color",
        },
        ":checked + span": {
            borderColor: `${props.theme.green}`,
            background: `${props.theme.green}`,
        },
    };
};
const Input = css("input")(styles, stylesProps);
const StyledLightInput = css(LightInput)(styles, stylesProps);
const StyledInput = css("span")({
    display: "inline-block",
    background: "transparent",
    width: "36px",
    height: "18px",
    position: "relative",
    transition: "border-color 0.1s",
}, (props) => {
    return {
        marginRight: props.label ? "10px" : "0px",
        marginLeft: props.label ? "10px" : "0px",
        borderRadius: `999em`,
        border: `1px solid ${props.theme.decoration}`,
        ":hover": {
            borderColor: `${props.theme.blue}`,
        },
    };
});
export default Toggler;
