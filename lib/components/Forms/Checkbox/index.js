"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const IconCheck_1 = require("@reglendo/mergado-ui-icons/lib/icons/IconCheck");
const glamorous_1 = require("glamorous");
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
class Checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-checkbox";
    }
    renderLabel() {
        const { input, labels } = this.props;
        const label = this.props.label ? this.props.label : labels.main;
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        return React.createElement(glamorous_1.default.Div, { className: `${isInvalid ? `${config_1.form}__group--invalid` : ""}` },
            React.createElement("div", { style: { position: "relative", display: "inline-block", verticalAlign: "middle" } },
                React.createElement(Input, Object.assign({ checked: input.value }, input, { type: "checkbox", className: `${this.name}__item ${input.className}`, style: { display: "none" } })),
                React.createElement(StyledInput, { label: label }),
                React.createElement(IconCheck_1.default, { size: 14, style: { position: "absolute" } })),
            label && " ",
            label);
    }
    render() {
        return React.createElement(StyledField, Object.assign({}, this.props, { style: Object.assign({ margin: 0, padding: 0 }, this.props.style), label: this.renderLabel() }));
    }
}
Checkbox.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { halfway: false });
const StyledField = glamorous_1.default(Field_1.Field)({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
});
const Input = glamorous_1.default.input({
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
const StyledInput = glamorous_1.default.span({
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "top !important",
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
exports.default = Checkbox;
//# sourceMappingURL=index.js.map