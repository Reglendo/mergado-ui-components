"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const MUK = require("components/Forms/input");
class Radio extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-radio";
    }
    renderInputs(className, props) {
        const { input, meta, labels } = this.props;
        return this.props.items.map((obj) => {
            return (React.createElement("label", { className: `${this.name}__item`, key: obj.value },
                React.createElement("input", { value: obj.value, checked: obj.value == this.props.input.value, onChange: input.onChange, className: `${this.name}__input ${className}`, type: "radio" }),
                "\u00A0",
                obj.label));
        });
    }
    renderInput(className, props) {
        const { input, meta, labels } = this.props;
        return this.renderInputs(className, props);
    }
}
Radio.defaultProps = Object.assign({}, MUK.defaultProps, { items: [] });
exports.default = Radio;
//# sourceMappingURL=index.js.map