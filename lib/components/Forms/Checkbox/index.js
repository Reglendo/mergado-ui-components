"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const IconCheck_1 = require("@reglendo/mergado-ui-icons/lib/icons/IconCheck");
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
const StyledField = styled_components_1.default(Field_1.Field) `
    & > .muk-form__group--invalid {
        border: none !important;
    }
`;
const StyledInput = styled_components_1.default.input `
    margin-right: 5px;
    appearance: none;
    background: transparent;
    border-radius: ${props => props.theme.radius};
    width: 18px;
    height: 18px;
    position: relative;
    border: 1px solid ${props => props.theme.decoration};
    vertical-align: top !important;
    transition: border-color 0.2s;
    &:checked {
        border-color: ${props => props.theme.blue};
        background: ${props => props.theme.blue};
        & + span.muk-icon--check {
            display: inline-block;
        }
    }

    &:hover {
        border-color: ${props => props.theme.blue};
    }

    & + span.muk-icon--check {
        display: none;
        position: absolute;
        left: 2px;
        top: 2px;
        path {
            fill: white !important;
        }
    }


`;
class Checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-checkbox";
    }
    renderLabel() {
        const { input, labels } = this.props;
        const label = this.props.label ? this.props.label : labels.main;
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        return React.createElement("div", { className: `${isInvalid ? `${config_1.form}__group--invalid` : ""}`, style: { padding: "0 2px" } },
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