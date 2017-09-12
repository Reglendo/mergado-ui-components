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
const Button_1 = require("../../../components/Forms/Button");
const RadioInput = (_a) => {
    var { name, value, checked, label, onChange, bigButtons } = _a, props = __rest(_a, ["name", "value", "checked", "label", "onChange", "bigButtons"]);
    if (bigButtons) {
        return React.createElement(Label, { className: `${name}__item ${props.className}`, key: value },
            React.createElement(Button_1.default, { secondary: checked ? false : true, color: checked ? "blue" : "decoration", type: "void", input: { onClick: () => false } },
                React.createElement(Input, { value: value, checked: checked, onChange: onChange, type: "radio", className: `${this.name}__item`, style: { display: "none" }, "data-big": bigButtons }),
                React.createElement(StyledInput, null),
                "\u00A0",
                label));
    }
    return React.createElement(glamorous_1.default.Label, { display: "block", className: `${name}__item ${props.className}`, key: value },
        React.createElement(Input, { value: value, checked: checked, onChange: onChange, type: "radio", className: `${this.name}__item`, style: { display: "none" }, "data-big": bigButtons }),
        React.createElement(StyledInput, null),
        "\u00A0",
        label);
};
const Label = glamorous_1.default.label({
    display: "inline-block",
    marginRight: "5px",
    "& .muk-button__item": {
        borderRadius: 0,
        margin: "0 0 0 -6px"
    },
}, (props) => {
    const theme = props.theme;
    return {
        ":first-of-type .muk-button__item": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .muk-button__item": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        }
    };
});
const Input = glamorous_1.default.input({}, (props) => {
    if (props["data-big"]) {
        return {
            ":checked + span": {
                border: `6px solid white`,
            },
        };
    }
    else {
        return {
            ":checked + span": {
                border: `6px solid ${props.theme.blue}`,
            },
        };
    }
});
const StyledInput = glamorous_1.default.span({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "text-top !important",
    transition: "border-color 0.2s",
    borderRadius: "100%",
    cursor: "pointer",
    ":focus,:active": {
        outline: "none",
    }
}, (props) => {
    if (props["data-big"]) {
        return {
            border: `1px solid ${props.theme.decoration}`,
        };
    }
    else {
        return {
            border: `1px solid ${props.theme.decoration}`,
            ":hover": {
                borderColor: `${props.theme.blue}`,
            },
        };
    }
});
exports.default = RadioInput;
//# sourceMappingURL=input.js.map