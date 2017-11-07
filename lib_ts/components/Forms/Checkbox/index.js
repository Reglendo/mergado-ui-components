"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Field_1 = require("components/Forms/Field");
const styled_components_1 = require("styled-components");
const StyledField = styled_components_1.default(Field_1.Field) `
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
        return React.createElement("div", { className: `${isInvalid ? `${config_1.form}__group--invalid` : ""}` },
            React.createElement("input", Object.assign({ checked: input.value }, input, { type: "checkbox", className: `${this.name}__item ${input.className ? input.className : ""}` })),
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