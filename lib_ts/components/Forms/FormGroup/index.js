"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("config");
const MUK = require("components/Forms/input");
class FormGroup extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "form-group";
    }
    renderInput() {
        return this.props.children;
    }
}
FormGroup.defaultProps = Object.assign({}, MUK.defaultProps);
exports.default = FormGroup;
//# sourceMappingURL=index.js.map