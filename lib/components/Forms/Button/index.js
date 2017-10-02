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
import cxs from "cxs/component";
import { prefix } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import { UniversalButton } from "./button";
class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "button";
    }
    render() {
        const { meta, input, labels, group } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        if (props.type !== "submit") {
            return React.createElement(UniversalButton, Object.assign({}, this.props, { name: this.name }));
        }
        return (React.createElement(StyledField, Object.assign({ className: `${this.name}--${props.color}
                                        ${!labels.main ? this.name + `--notext` : ``}
                                        ${props.size ? this.name + `--` + props.size : ``}
                                        ${this.name}--${props.type}
                                        ${props.disabled ? this.name + `--disabled` : ``}
                ` }, this.props, { name: this.name, label: "", labels: Object.assign({}, labels, { main: "" }), style: Object.assign({ marginBottom: 0 }, group.style) }),
            React.createElement(UniversalButton, Object.assign({}, this.props, { name: this.name }))));
    }
}
Button.defaultProps = Object.assign({}, defaultFieldProps, { type: "button", icon: null, color: "blue", disabled: false, size: "", secondary: false });
const StyledField = cxs(Field)({
    display: "inline-block",
    verticalAlign: "top",
});
export default Button;
