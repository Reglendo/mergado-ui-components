"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const unique_id_1 = require("helpers/unique_id");
const MUK = require("components/Forms/input");
class Select extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "select";
    }
    renderOptions() {
        return this.props.options.map(option => {
            if (React.isValidElement(option)) {
                if (option.key) {
                    return option;
                }
                else {
                    const object = Object;
                    return object.assign({}, option, { key: unique_id_1.default() });
                }
            }
            else {
                return (React.createElement("option", { value: option.value, key: unique_id_1.default() }, option.title));
            }
        });
    }
    renderInput(className, props) {
        const { meta, input, labels } = this.props;
        delete props.options;
        return (React.createElement("select", Object.assign({}, input, { className: `${this.name}__item ${className}` }), this.renderOptions()));
    }
    renderLabel(className, props) {
        return this.props.labels.main;
    }
}
Select.defaultProps = Object.assign({}, MUK.defaultProps, { options: [], size: 0 });
exports.default = Select;
//# sourceMappingURL=index.js.map