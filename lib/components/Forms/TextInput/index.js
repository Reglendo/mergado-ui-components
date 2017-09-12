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
const glamorous_1 = require("glamorous");
const IconEye_1 = require("@reglendo/mergado-ui-icons/lib/icons/IconEye");
const IconEyeSlash_1 = require("@reglendo/mergado-ui-icons/lib/icons/IconEyeSlash");
const Color = require("color");
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
const Button_1 = require("../../../components/Forms/Button");
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
            React.createElement(glamorous_1.default.Div, { position: "relative" },
                React.createElement(exports.StyledInput, Object.assign({}, props, inputProps, { placeholder: this.props.labels.placeholder, ref: "input", type: type === "password" && this.state.passwordVisible ? "text" : props.type, "aria-invalid": isInvalid ? 1 : 0, className: `${this.name}__input \
                                ${config_1.form}__input--text \
                                ${config_1.form}__input--${type} \
                                ${inputProps.className} \
                                ` })),
                type === "password" && this.state.passwordVisible === false &&
                    React.createElement(ButtonEye, { icon: React.createElement(IconEye_1.default, null), color: "nocolor", size: "tiny", onClick: () => this.setState({ passwordVisible: true }) }),
                type === "password" && this.state.passwordVisible === true &&
                    React.createElement(ButtonEye, { icon: React.createElement(IconEyeSlash_1.default, null), color: "nocolor", size: "tiny", onClick: () => this.setState({ passwordVisible: false }) }))));
    }
}
TextInput.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { type: "text" });
exports.StyledInput = glamorous_1.default.input({
    fontSize: "14px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    display: "block",
    textAlign: "left",
    outline: "none",
    padding: "0 10px",
    color: "#333",
    height: "40px",
    lineHeight: "40px",
    transition: "border-color 0.2s",
    willChange: "border-color",
}, (props) => {
    const styles = [];
    const theme = props.theme;
    if (props.type === "file") {
        styles.push({
            lineHeight: "initial",
            padding: "8px",
            height: "auto",
        });
    }
    if (props.disabled) {
        styles.push({
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5),
        });
    }
    return [...styles, {
            border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
            borderRadius: theme.radius,
            width: props.type === "search" ? "calc(100% - 22px)" : "100%",
            ":active,:focus": {
                border: `${theme.input_border_active} !important`,
            }
        }];
});
const ButtonEye = glamorous_1.default(Button_1.default)({
    right: "5px",
    bottom: "8px",
    position: "absolute",
});
exports.default = TextInput;
//# sourceMappingURL=index.js.map