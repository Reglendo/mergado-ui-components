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
import glamorous from "glamorous";
import css from "cxs/component";
import * as Color from "color";
import IconChevronDown from "@reglendo/mergado-ui-icons/lib/icons/IconChevronDown";
import { prefix } from "../../../config";
import uniqueId from "../../../helpers/unique_id";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
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
        return (React.createElement(Field, Object.assign({}, props, { name: this.name }),
            React.createElement(glamorous.Div, { position: "relative" },
                React.createElement(StyledSelect, Object.assign({}, input, { className: `${this.name}__item ${this.props.className}`, "aria-invalid": isInvalid ? 1 : 0 }), this.renderOptions()),
                React.createElement(IconChevronDown, { size: 10, style: { opacity: 0.6, position: "absolute", bottom: "9px",
                        right: "10px", pointerEvents: "none" } }))));
    }
}
Select.defaultProps = Object.assign({}, defaultFieldProps, { options: [], size: 0 });
const StyledSelect = css("select")({
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
    border: "1px solid",
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
}, (props) => {
    const theme = props.theme;
    const styles = [];
    styles.push({
        borderRadius: theme.radius,
        border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
        ":active": {
            border: theme.input_border_active,
        },
        ":focus": {
            border: theme.input_border_active,
        },
    });
    if (props.disabled) {
        styles.push({
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5),
        });
    }
    return styles;
});
export default Select;
