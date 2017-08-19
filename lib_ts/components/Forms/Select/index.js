"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const unique_id_1 = require("helpers/unique_id");
const Field_1 = require("components/Forms/Field");
const styled_components_1 = require("styled-components");
const StyledSelect = styled_components_1.default.select `
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    line-height: 40px;
    outline: none;
    display: inline-block;
    margin: 0;
    background: white;
    color: #333333;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #dbcba3;
`;
class Select extends React.Component {
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
    render() {
        const { meta, input, labels } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return (React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }),
            React.createElement(StyledSelect, Object.assign({}, input, { className: `${this.name}__item ${this.props.className}` }), this.renderOptions())));
    }
}
Select.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { options: [], size: 0 });
exports.default = Select;
//# sourceMappingURL=index.js.map