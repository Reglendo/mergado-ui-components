"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const IconCheck_1 = require("@reglendo/mergado-ui-icons/lib/icons/IconCheck");
const glamorous_1 = require("glamorous");
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
const StyledField = glamorous_1.default(Field_1.Field)({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },
});
const StyledInput = glamorous_1.default.input({
    marginRight: "5px",
    appearance: "none",
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
    ":checked + span.muk-icon--check": {
        display: "inline-block",
    },
}, (props) => {
    return {
        borderRadius: `${props.theme.radius}`,
        border: `1px solid ${props.theme.decoration}`,
        ":checked": {
            borderColor: `${props.theme.blue}`,
            background: `${props.theme.blue}`,
        },
        ":hover": {
            borderColor: `${props.theme.blue}`,
        },
    };
});
class Checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-checkbox";
    }
    renderLabel() {
        const { input, labels } = this.props;
        const label = this.props.label ? this.props.label : labels.main;
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        return React.createElement(glamorous_1.default.Div, { padding: "2px 2px 0px 2px", className: `${isInvalid ? `${config_1.form}__group--invalid` : ""}` },
            React.createElement("div", { style: { position: "relative", display: "inline-block", verticalAlign: "middle" } },
                React.createElement(StyledInput, Object.assign({ checked: input.value }, input, { type: "checkbox", className: `${this.name}__item ${input.className}` })),
                React.createElement(IconCheck_1.default, { size: 14, style: { position: "absolute" } })),
            label && " ",
            label);
    }
    render() {
        return React.createElement(StyledField, Object.assign({}, this.props, { name: this.name, label: this.renderLabel() }));
    }
}
Checkbox.defaultProps = Object.assign({}, Field_1.defaultFieldProps);
exports.default = Checkbox;
//# sourceMappingURL=index.js.map