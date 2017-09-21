import * as React from "react";
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck";
import glamorous, { Span } from "glamorous";
import { prefix, form } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
class Checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "input-checkbox";
    }
    renderLabel() {
        const { input, labels } = this.props;
        const label = this.props.label ? this.props.label : labels.main;
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        return React.createElement(glamorous.Div, { className: `${isInvalid ? `${form}__group--invalid` : ""}` },
            React.createElement("div", { style: { position: "relative", display: "inline-block", verticalAlign: "middle" } },
                React.createElement(Input, Object.assign({ checked: input.value }, input, { type: "checkbox", className: `${this.name}__item ${input.className}`, style: { display: "none" } })),
                React.createElement(StyledInput, { label: label }),
                React.createElement(IconCheck, { size: 14, style: { position: "absolute" } })),
            React.createElement(Span, { fontSize: "16px", fontWeight: "normal" },
                label && " ",
                label));
    }
    render() {
        return React.createElement(StyledField, Object.assign({}, this.props, { style: Object.assign({ margin: 0, padding: 0 }, this.props.style), label: this.renderLabel() }));
    }
}
Checkbox.defaultProps = Object.assign({}, defaultFieldProps, { halfway: false });
const StyledField = glamorous(Field)({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
});
const Input = glamorous.input({
    ":checked + span + span.muk-icon--check": {
        display: "inline-block",
    },
}, (props) => {
    return {
        ":checked + span": {
            borderColor: `${props.theme.blue}`,
            background: `${props.theme.blue}`,
        },
    };
});
const StyledInput = glamorous.span({
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "baseline",
    transition: "border-color 0.2s",
    "& + span.muk-icon--check": {
        display: "none",
        position: "absolute",
        left: "2px",
        top: "2px",
    },
    "& + span.muk-icon--check path": {
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
export default Checkbox;
