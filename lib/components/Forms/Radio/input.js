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
import Button from "../../../components/Forms/Button";
import { Input as LightInput } from "light-form/dist/es";
const RadioInput = (_a) => {
    var { name, value, checked, label, onChange, bigButtons, hideInput } = _a, props = __rest(_a, ["name", "value", "checked", "label", "onChange", "bigButtons", "hideInput"]);
    const Element = name ? StyledLightInput : Input;
    if (bigButtons) {
        return React.createElement(BigLabel, { className: `${name}__item ${props.className}`, key: value },
            React.createElement(Button, { secondary: checked ? false : true, style: { display: "block" }, color: checked ? "blue" : "decoration", type: "void", input: { onClick: () => false } },
                React.createElement(Element, { name: name, value: value, checked: checked, onChange: onChange, type: "radio", className: `${this.name}__item`, style: { display: "none" }, "data-big": bigButtons }),
                !hideInput ?
                    React.createElement("span", null,
                        React.createElement(StyledInput, null),
                        "\u00A0")
                    :
                        React.createElement("span", null),
                React.createElement("span", { style: { verticalAlign: "middle" } }, label)));
    }
    return React.createElement(Label, { className: `${name}__item ${props.className}`, key: value },
        React.createElement(Element, { name: name, value: value, checked: checked, onChange: onChange, type: "radio", className: `${this.name}__item`, style: { display: "none" }, "data-big": bigButtons }),
        React.createElement("span", null,
            React.createElement(StyledInput, null),
            "\u00A0",
            label));
};
const Label = css("label")({
    cursor: "pointer",
    display: "block",
    padding: "5px 0",
}, (props) => {
    const theme = props.theme;
    return {
        ":hover span span": {
            borderColor: theme.blue,
        },
    };
});
const BigLabel = css("label")({
    display: "table-cell",
    marginRight: "5px",
    " .muk-button__item": {
        borderRadius: 0,
        margin: "0 0 0 -1px",
    },
    " span span": {
        fontWeight: "normal",
    },
}, (props) => {
    const theme = props.theme;
    return {
        ":hover span span": {
            borderColor: `${theme.blue}`,
        },
        ":first-of-type .muk-button__item": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .muk-button__item": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        },
    };
});
const styledProps = (props) => {
    if (props["data-big"]) {
        return {
            ":checked + span span": {
                border: `6px solid white`,
            },
        };
    }
    else {
        return {
            ":checked + span span": {
                border: `6px solid ${props.theme.blue}`,
            },
        };
    }
};
const Input = css("input")(styledProps);
const StyledLightInput = css(LightInput)(styledProps);
const StyledInput = css("span")({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "text-top !important",
    transition: "border-color 0.2s",
    borderRadius: "100%",
    ":focus": {
        outline: "none",
    },
    ":active": {
        outline: "none",
    },
}, (props) => {
    if (props["data-big"]) {
        return {
            border: `1px solid ${props.theme.decoration}`,
        };
    }
    else {
        return {
            border: `1px solid ${props.theme.decoration}`,
        };
    }
});
export default RadioInput;
