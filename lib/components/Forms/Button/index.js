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
import cxs from "@reglendo/cxs/component";
import { prefix } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import { CssUniversalButton } from "./button";
export class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "button";
    }
    render() {
        const { meta, input, labels, group } = this.props;
        const _a = this.props, { children, style } = _a, props = __rest(_a, ["children", "style"]);
        if (props.type !== "submit") {
            return React.createElement(CssUniversalButton, Object.assign({}, this.props, { s: style, name: this.name }));
        }
        return (React.createElement(CssField, Object.assign({ className: `m-field  m-${props.color} ${!labels.main ? `m-notext` : ``} ${props.size ? `m-${props.size}` : ``} ${this.name}--${props.type} ${props.disabled ? `m-disabled` : ``}` }, this.props, { name: this.name, label: "", labels: Object.assign({}, labels, { main: "" }), s: Object.assign({ marginBottom: 0 }, style, group.style) }),
            React.createElement(CssUniversalButton, Object.assign({}, this.props, { s: style, name: this.name }))));
    }
}
Button.defaultProps = Object.assign({}, defaultFieldProps, { type: "button", icon: null, color: "blue", disabled: false, size: "", secondary: false });
const CssField = cxs(Field)({
    display: "inline-block",
    verticalAlign: "top",
}, props => (Object.assign({}, props.s)));
export default Button;
