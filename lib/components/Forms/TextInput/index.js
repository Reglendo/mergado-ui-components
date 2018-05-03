var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import css from "@reglendo/cxs/component";
import { Div } from "../../../components/Layout/Div";
import * as Color from "color";
import IconEye from "@reglendo/mergado-ui-icons/lib/icons/IconEye";
import IconClose from "@reglendo/mergado-ui-icons/lib/icons/IconClose";
import IconEyeSlash from "@reglendo/mergado-ui-icons/lib/icons/IconEyeSlash";
import { Input } from "light-form/dist/es";
import { prefix } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import Button from "../../../components/Forms/Button";
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this._inputRef = null;
        this.name = prefix + "textinput";
        this.state = {
            passwordVisible: false,
        };
    }
    render() {
        const _a = this.props, { type, meta, input } = _a, p = __rest(_a, ["type", "meta", "input"]);
        const _b = this.props, { children, style, className } = _b, props = __rest(_b, ["children", "style", "className"]);
        const inputProps = this.props.input;
        if (type === "file") {
            delete inputProps.value;
        }
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        const Element = props.name ? CssLightInput : CssInput;
        const elProps = Object.assign({}, props);
        delete elProps.input;
        delete elProps.meta;
        delete elProps.group;
        delete elProps.labels;
        return (React.createElement(Field, Object.assign({}, props, { className: `${this.name} ${className || ""}`, s: style, name: props.name }),
            React.createElement(Div, { className: "m-textinput-wrapper", position: "relative" },
                React.createElement(Element, Object.assign({}, (!props.name && inputProps), elProps, { placeholder: this.props.labels.placeholder, ref: "input", type: type === "search" || (type === "password" && this.state.passwordVisible)
                        ? "text" : props.type, "aria-invalid": isInvalid ? 1 : 0, className: `m-textinput-input m-textinput-${type}` })),
                type === "password" && this.state.passwordVisible === false &&
                    React.createElement(CssButtonEye, { className: "m-openedeye", icon: React.createElement(IconEye, null), type: "void", color: "nocolor", size: "tiny", onClick: () => this.setState({ passwordVisible: true }) }),
                type === "password" && this.state.passwordVisible === true &&
                    React.createElement(CssButtonEye, { className: "m-closedeye", icon: React.createElement(IconEyeSlash, null), type: "void", color: "nocolor", size: "tiny", onClick: () => this.setState({ passwordVisible: false }) }),
                type === "search" &&
                    React.createElement(CssButtonClose, { className: "m-clear", icon: React.createElement(IconClose, null), type: "void", color: "nocolor", size: "tiny", onClick: () => {
                            const input = this.refs.input;
                            this.props.onClear && this.props.onClear();
                            if (input) {
                                input.getDOMNode().value = "";
                            }
                            inputProps.value = "";
                            this.props.change ? this.props.change(inputProps.name, "") : true;
                        } }))));
    }
}
TextInput.defaultProps = Object.assign({}, defaultFieldProps, { type: "text" });
export const styles = {
    fontSize: "14px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    display: "block",
    textAlign: "left",
    outline: "none",
    padding: "0 10px",
    color: "#333",
    lineHeight: "40px",
    transition: "border-color 0.2s",
    willChange: "border-color",
    width: "100%",
};
export const stylesProps = (props) => {
    const theme = props.theme;
    let type = {};
    if (props.type === "file") {
        type = {
            lineHeight: "initial",
            padding: "8px",
            height: "auto",
        };
    }
    let disabled = {};
    if (props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5).string(),
        };
    }
    return Object.assign({}, type, disabled, { height: props.height ? props.height + "px" : "40px", border: props["aria-invalid"] ? theme.input_border_error : theme.input_border, borderRadius: theme.radius, "&:active": {
            border: `${theme.input_border_active} !important`,
        }, "&:focus": {
            border: `${theme.input_border_active} !important`,
        } });
};
const CssInput = css("input")(styles, stylesProps);
const CssLightInput = css(Input)(styles, stylesProps);
const CssButtonEye = css(Button)({
    right: "5px",
    bottom: "8px",
    position: "absolute",
});
const CssButtonClose = css(Button)({
    right: "5px",
    bottom: "8px",
    position: "absolute",
});
export default TextInput;
