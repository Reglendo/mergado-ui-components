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
import Button from "../../../components/Forms/Button";
import Span from "../../../components/Layout/Span";
import { Input as LightInput } from "light-form/dist/es";
const RadioInput = (_a) => {
    var { name, value, checked, label, onChange, bigButtons, hideInput } = _a, props = __rest(_a, ["name", "value", "checked", "label", "onChange", "bigButtons", "hideInput"]);
    const Element = name ? CssElementLightInput : CssElement;
    if (bigButtons) {
        return React.createElement(CssBigLabel, { className: `muk-radio ${props.className || ""}`, key: value },
            React.createElement(Element, { name: name, value: value, type: "radio", className: `m-input`, style: { display: "none" }, "data-big": true }),
            React.createElement(Button, { secondary: true, style: { display: "block" }, className: "m-button", type: "void" },
                !hideInput &&
                    React.createElement(Span, { className: "m-input-wrapper" },
                        React.createElement(CssCheckbox, { className: "m-checkbox-input" })),
                React.createElement(Span, { className: "m-label-wrapper" }, label)));
    }
    return React.createElement(CssLabel, { className: `muk-radio ${props.className || ""}`, key: value },
        React.createElement(Element, { name: name, value: value, type: "radio", className: `m-input`, style: { display: "none" }, "data-big": false }),
        React.createElement("span", { className: "m-button" },
            React.createElement(CssCheckbox, { className: "m-checkbox-input" }),
            "\u00A0",
            label));
};
const CssLabel = css("label")({
    cursor: "pointer",
    display: "block",
    padding: "5px 0",
}, (props) => {
    const theme = props.theme;
    return {
        ":hover .m-checkbox-input": {
            borderColor: theme.blue,
        },
    };
});
const CssBigLabel = css("label")({
    display: "table-cell",
    marginRight: "5px",
    verticalAlign: "top",
    " .muk-popuphint": {
        lineHeight: "16px",
    },
    " .m-button": {
        borderRadius: 0,
        margin: "0 0 0 -1px",
        lineHeight: "16px",
        padding: "16px",
    },
    " .m-label-wrapper": {
        fontWeight: "normal",
    },
    " *": {
        verticalAlign: "text-top !important"
    },
    " .muk-icon": {
        verticalAlign: "middle !important"
    },
}, (props) => {
    const theme = props.theme;
    return {
        ":hover .m-checkbox-input": {
            borderColor: `${theme.blue}`,
        },
        ":first-of-type .m-button": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .m-button": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        },
    };
});
const styledProps = (props) => {
    const styledInput = {};
    if (props["data-big"]) {
        return {
            "&:checked + .m-button .m-checkbox-input": {
                border: `6px solid white`,
            },
            "&:checked + .m-button": {
                background: props.theme.blue,
                color: "white",
            },
            "&:checked + .m-button *": {
                color: "white !importat",
                fill: "white !important",
            },
        };
    }
    else {
        return {
            "&:checked + .m-button .m-checkbox-input": {
                border: `6px solid` + props.theme.blue,
            },
        };
    }
};
const CssElement = css("input")(styledProps);
const CssElementLightInput = css(LightInput)(styledProps);
const CssCheckbox = css("span")({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
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
