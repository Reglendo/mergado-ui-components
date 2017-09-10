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
const styled_components_1 = require("styled-components");
const IconEye_1 = require("@reglendo/mergado-ui-icons/lib/icons/IconEye");
const IconEyeSlash_1 = require("@reglendo/mergado-ui-icons/lib/icons/IconEyeSlash");
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
const theme_1 = require("../../../styled/theme");
const Button_1 = require("../../../components/Forms/Button");
exports.StyledInput = styled_components_1.default.input `
    font-size: 14px;
    box-sizing: border-box;
    background-color: #fff;
    border: ${props => { return props["aria-invalid"] ? theme_1.default.input_border_error : theme_1.default.input_border; }};
    border-radius: ${theme_1.default.radius};

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
        color: #999;
        background: #eee;
        border-color: ${theme_1.default.grey.fade(0.5)};
    `}

    transition: border-color 0.2s;
    will-change: border-color;

    &:active,&:focus {
        border: ${theme_1.default.input_border_active}
    }
`;
const ButtonEye = styled_components_1.default(Button_1.default) `
    position: absolute;
    right: 5px;
    bottom: 5px;
`;
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "input-text";
        this.state = {
            passwordVisible: false,
        };
    }
    render() {
        const { type, meta, input } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const inputProps = this.props.input;
        if (type === "file") {
            delete inputProps.value;
        }
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        return (React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }),
            type === "password" && this.state.passwordVisible === false &&
                React.createElement(ButtonEye, { icon: React.createElement(IconEye_1.default, null), color: "nocolor", size: "tiny", onClick: () => this.setState({ passwordVisible: true }) }),
            type === "password" && this.state.passwordVisible === true &&
                React.createElement(ButtonEye, { icon: React.createElement(IconEyeSlash_1.default, null), color: "nocolor", size: "tiny", onClick: () => this.setState({ passwordVisible: false }) }),
            React.createElement(exports.StyledInput, Object.assign({}, props, inputProps, { placeholder: this.props.labels.placeholder, ref: "input", type: type === "password" && this.state.passwordVisible ? "text" : props.type, "aria-invalid": isInvalid ? 1 : 0, className: `${this.name}__input \
                                ${config_1.form}__input--text \
                                ${config_1.form}__input--${type} \
                                ${inputProps.className} \
                                ` }))));
    }
}
TextInput.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { type: "text" });
exports.default = TextInput;
//# sourceMappingURL=index.js.map