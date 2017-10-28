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
import css from "cxs/component";
import { Div } from "../../../components/Layout";
import * as Color from "color";
import IconChevronDown from "@reglendo/mergado-ui-icons/lib/icons/IconChevronDown";
import { prefix } from "../../../config";
import uniqueId from "../../../helpers/unique_id";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import { Select as LightSelect } from "light-form/dist/es";
class Select extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "select";
    }
    renderOptions() {
        return this.props.options.map(option => {
            if (React.isValidElement(option)) {
                if (option.key) {
                    return option;
                }
                else {
                    const object = Object;
                    return object.assign({}, option, { key: uniqueId() });
                }
            }
            else {
                return (React.createElement("option", { value: option.value, key: uniqueId() }, option.title));
            }
        });
    }
    render() {
        const { meta, input, labels } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        const Element = props.name ? StyledLightSelect : StyledSelect;
        return (React.createElement(Field, Object.assign({}, props, { name: this.name }),
            React.createElement(Div, { position: "relative" },
                React.createElement(Element, Object.assign({}, props, (!props.name && input), { className: `${this.name}__item ${this.props.className}`, "aria-invalid": isInvalid ? 1 : 0 }), this.renderOptions()),
                React.createElement(IconChevronDown, { size: 10, style: { opacity: 0.6, position: "absolute", bottom: "9px",
                        right: "10px", pointerEvents: "none" } }))));
    }
}
Select.defaultProps = Object.assign({}, defaultFieldProps, { options: [], size: 0 });
const styles = {
    boxSizing: "border-box",
    width: "100%",
    height: "40px",
    lineHeight: "40px",
    outline: "none",
    display: "inline-block",
    margin: "0",
    background: "white",
    color: "#333333",
    verticalAlign: "middle",
    padding: "0 10px",
    borderWidth: "1px",
    borderStyle: "solid",
    appearance: "none",
    transition: "border-color 0.2s",
    willChange: "border-color",
    ":focus": {
        outline: "none",
        border: "none",
    },
    ":active": {
        outline: "none",
        border: "none",
    },
    "::-ms-expand": {
        display: "none",
    },
    "::-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #000",
    },
};
const stylesProps = (props) => {
    const theme = props.theme;
    let disabled = {};
    if (props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5).string(),
        };
    }
    return Object.assign({ borderRadius: theme.radius, border: props["aria-invalid"] ? theme.input_border_error : theme.input_border, ":active": {
            border: theme.input_border_active,
        }, ":focus": {
            border: theme.input_border_active,
        } }, disabled);
};
const StyledSelect = css("select")(styles, stylesProps);
const StyledLightSelect = css(LightSelect)(styles, stylesProps);
export default Select;
