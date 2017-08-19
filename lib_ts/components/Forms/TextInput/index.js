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
const Field_1 = require("components/Forms/Field");
const styled_components_1 = require("styled-components");
exports.StyledInput = styled_components_1.default.input `
    font-size: 14px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #dbcba3;
    display: block;
    width: ${props => props.type === "search" ? "calc(100% - 22px)" : "100%"};
    text-align: left;
    outline: none;
    padding: 0 10px;
    color: #333;
    height: 40px;
    line-height: 40px;
    ${props => props.type === "file" && styled_components_1.css `
        line-height: initial;
        padding: 8px;
        height: auto;
        &:focus {
          border-color: #85bd3c
          outline: 3px solid #85bd3c
        }
    `}

    ${props => props.disabled && styled_components_1.css `
        color: #888;
        background: #eee;
    `}
`;
class TextInput extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-text";
    }
    render() {
        const { type, meta, input } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const inputProps = this.props.input;
        if (type === "file") {
            delete inputProps.value;
        }
        return (React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }),
            React.createElement(exports.StyledInput, Object.assign({}, props, inputProps, { placeholder: this.props.labels.placeholder, ref: "input", className: `${this.name}__input \
                                ${config_1.form}__input--text \
                                ${config_1.form}__input--${type} \
                                ${inputProps.className} \
                                ` }))));
    }
}
TextInput.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { type: "text" });
exports.default = TextInput;
//# sourceMappingURL=index.js.map