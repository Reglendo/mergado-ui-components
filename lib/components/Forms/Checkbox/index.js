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
import css from "@reglendo/cxs/component";
import { Span } from "../../../components/Layout/Span";
import { prefix } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import { Input as LightInput } from "light-form/dist/es";
import { Div } from "../../Layout/Div";
import PropTypes from "prop-types";
class Checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "input-checkbox";
    }
    renderLabel() {
        const _a = this.props, { input, labels } = _a, props = __rest(_a, ["input", "labels"]);
        const label = this.props.label ? this.props.label : labels.main;
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        const Element = props.name ? StyledLightInput : Input;
        return React.createElement(Label, { className: `m-label ${isInvalid ? `m-invalid` : ""}` },
            React.createElement(Div, { className: "m-element-wrapper", lineHeight: "16px", position: "relative", display: "inline-block", verticalAlign: "middle" },
                React.createElement(Element, Object.assign({ className: `m-item` }, props, (!props.name && { checked: input.value }), (!props.name && input), { type: "checkbox", s: { display: "none !important" } })),
                React.createElement(StyledInput, { className: "muk-checkbox-input", label: label }),
                React.createElement(IconCheck, { className: "m-check", size: 14 })),
            React.createElement(Span, { className: "m-label-wrapper", fontSize: "16px", fontWeight: "normal" },
                label && " ",
                label));
    }
    render() {
        return React.createElement(Field, Object.assign({ className: "muk-checkbox" }, this.props, { s: Object.assign({ marginBottom: 0, padding: 0 }, this.props.style), label: this.renderLabel() }));
    }
}
Checkbox.defaultProps = Object.assign({}, defaultFieldProps, { halfway: false });
const Label = css("div")({
    cursor: "pointer",
}, (props) => {
    const theme = props.theme;
    return {
        "&:hover .muk-checkbox-input": {
            borderColor: theme.blue,
        },
    };
});
const styles = {
    ":checked + .muk-checkbox-input + .muk-icon--check": {
        display: "inline-block",
        verticalAlign: "middle",
        height: "18px",
    },
};
const stylesProps = (props) => {
    return Object.assign({ ":checked + .muk-checkbox-input": {
            borderColor: `${props.theme.blue}`,
            background: `${props.theme.blue}`,
        } }, props.s);
};
const Input = css("input")(styles, stylesProps);
const StyledLightInput = css(LightInput)(styles, stylesProps);
export const StyledInput = css("span")({
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    transition: "border-color 0.2s",
    "& + .muk-icon--check": {
        display: "none",
        position: "absolute",
        left: "2px",
        top: "0px",
    },
    "& + .muk-icon--check path": {
        fill: "white !important",
    },
}, (props) => {
    return {
        marginRight: props.label ? "5px" : "0px",
        borderRadius: `${props.theme.radius}`,
        border: `1px solid ${props.theme.decoration}`,
        ":hover": {
            borderColor: `${props.theme.blue}`,
        },
    };
});
StyledInput.propTypes = {
    label: PropTypes.any,
    group: PropTypes.any,
    meta: PropTypes.any,
    s: PropTypes.any,
};
Input.propTypes = {
    label: PropTypes.any,
    group: PropTypes.any,
    meta: PropTypes.any,
    s: PropTypes.any,
};
StyledLightInput.propTypes = {
    label: PropTypes.any,
    group: PropTypes.any,
    meta: PropTypes.any,
    s: PropTypes.any,
};
export default Checkbox;
