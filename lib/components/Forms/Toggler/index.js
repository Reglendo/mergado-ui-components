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
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck";
import IconClose from "@reglendo/mergado-ui-icons/lib/icons/IconClose";
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
        const offLabel = !props.big && React.createElement(Span, { fontSize: "16px", margin: "0 3px", verticalAlign: "top" },
            props.offLabel,
            props.offLabel && "");
        const onLabel = !props.big && React.createElement(Span, { fontSize: "16px", margin: "0 3px", verticalAlign: "top" },
            label && "",
            label);
        return React.createElement(Label, { className: `${isInvalid ? `${form}__group--invalid` : ""}` },
            reverse ? onLabel : offLabel,
            React.createElement("div", { style: { position: "relative", display: "inline-block", verticalAlign: "middle" } },
                React.createElement(Element, Object.assign({}, props, (!props.name && { checked: input.value }), (!props.name && input), { reverse: reverse, type: "checkbox", className: `${this.name}__item ${input.className}`, style: { display: "none" } })),
                React.createElement(StyledInput, { big: props.big, boolean: props.boolean, width: props.width, reverse: reverse, onLabel: label, offLabel: props.offLabel, label: label, className: "muk-checkbox-input" }),
                React.createElement(Point, { big: props.big, boolean: props.boolean, width: props.width, className: "toggler-point", reverse: reverse }),
                props.big && props.boolean &&
                    React.createElement(IconCheck, { size: 18, color: "rgb(245, 236, 213)", style: { position: "absolute", left: "3px", top: "5px" } }),
                props.big && props.boolean &&
                    React.createElement(IconClose, { size: 18, color: "#888", style: { position: "absolute", right: "3px", top: "5px" } })),
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
    borderRadius: "999em",
    background: "white",
    position: "absolute",
    left: "2px",
    top: "2px",
    zIndex: 5,
    transition: "all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)",
}, props => ({
    width: props.big ? "28px" : "14px",
    height: props.big ? "28px" : "14px",
    transform: props.reverse ? "translate3d(" + (props.big ? (props.boolean ? "23px" : props.width - 32 + "px") : "18px") + ",0,0)" : "translate3d(0,0,0)",
}));
const styles = {};
const stylesProps = (props) => {
    return {
        ":checked + span + span.toggler-point": {
            transform: props.reverse ? "translate3d(0,0,0)" : "translate3d(" + (props.big ? (props.boolean ? "23px" : props.width - 32 + "px") : "18px") + ",0,0)",
        },
        " + span": {
            borderColor: `${props.theme.inactive}`,
            background: `${props.theme.inactive}`,
            transition: "border-color 0.2s, background-color 0.2s",
            willChange: "background-color",
            ":before": {
                opacity: 0,
                position: "absolute",
                left: props.reverse ? "initial" : 0,
                right: props.reverse ? 0 : "initial",
            },
            ":after": {
                opacity: 1,
                position: "absolute",
                right: props.reverse ? "initial" : 0,
                left: props.reverse ? 0 : "initial",
            },
        },
        ":checked + span": {
            borderColor: `${props.theme.green}`,
            background: `${props.theme.green}`,
            ":before": {
                opacity: 1
            },
            ":after": {
                opacity: 0
            },
        },
    };
};
const Input = css("input")(styles, stylesProps);
const StyledLightInput = css(LightInput)(styles, stylesProps);
const StyledInput = css("span")({
    display: "inline-block",
    background: "transparent",
    position: "relative",
    transition: "border-color 0.1s",
}, (props) => {
    const content = props.big && !props.boolean ? {
        "&:before": {
            content: props.onLabel,
            transition: "opacity 0.1s",
            lineHeight: "32px",
            color: "white",
            padding: "0 3px",
        },
        "&:after": {
            content: props.offLabel,
            transition: "opacity 0.1s",
            lineHeight: "32px",
            padding: "0 3px",
            color: "#888",
        },
    } : {};
    return Object.assign({}, content, { width: props.big ? (props.boolean ? "55px" : (props.width + "px")) : "36px", height: props.big ? "32px" : "18px", borderRadius: `999em`, border: `1px solid ${props.theme.decoration}`, ":hover": {
            borderColor: `${props.theme.blue}`,
        } });
});
export default Toggler;
