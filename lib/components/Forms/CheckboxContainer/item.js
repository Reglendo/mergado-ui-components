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
import { Link } from "react-router";
import css from "cxs/component";
import Radio from "../../../components/Forms/Radio";
import Checkbox from "../../../components/Forms/Checkbox";
import LittleStatus from "../../../components/LittleStatus";
export const QueryItem = (_a) => {
    var { name, option, index, onClick, checked, labels, className, singleChoice, showInput } = _a, props = __rest(_a, ["name", "option", "index", "onClick", "checked", "labels", "className", "singleChoice", "showInput"]);
    return (React.createElement(Li, { className: `${name}__item ${index >= 0 ? `${name}__item--active` : ""}
                        ${option.disabled ? `${name}__item--disabled` : ""}
                        ${className}
            `, "data-subheader": option.subheader, disabled: option.disabled, checked: checked, key: option.id, "data-link": option.link !== undefined, onClick: !option.subheader && onClick },
        React.createElement("label", null,
            showInput &&
                React.createElement("span", null, singleChoice ?
                    React.createElement(Radio, { items: [
                            { value: option.id, label: "" }
                        ], input: {
                            value: checked ? option.id : null,
                            onChange: onClick,
                        }, name: name, key: "input", style: { display: showInput ? "inline-block" : "none", } })
                    :
                        React.createElement(Checkbox, { name: name + "." + option.id, key: "input", style: { display: showInput ? "inline-block" : "none", paddingRight: "5px" } })),
            React.createElement(QueryItemLabel, { name: name, option: option, allProducts: labels.allProducts, showInput: showInput }))));
};
export const QueryItemLabel = (_a) => {
    var { name, option, allProducts, className, showInput } = _a, props = __rest(_a, ["name", "option", "allProducts", "className", "showInput"]);
    let label = (option.name === "♥ALLPRODUCTS♥" ? allProducts : option.name);
    if (option.link !== undefined) {
        label = React.createElement(Link, { to: option.link }, label);
    }
    return (React.createElement(Label, { className: `${name}__label ${className}`, key: "label", disabled: option.disabled },
        label,
        " ",
        React.createElement(Count, { className: `${name}__count` }, typeof option.product_count !== "undefined" ? `(${option.product_count})` : ""),
        option.active !== undefined &&
            React.createElement(LittleStatus, { style: { float: showInput ? "right" : "left" }, type: option.active ? "success" : "inactive" })));
};
export const Li = css("li")({
    display: "table",
    background: "white",
    fontWeight: "normal",
    width: "100%",
    " > label": {
        padding: "10px",
        display: "block",
        cursor: "pointer",
    },
    "& span.muk-icon--check": {
        top: "-1px !important",
    }
}, (props) => {
    let checked = {};
    if (props.checked) {
        checked = {
            background: props.theme.selected_background,
        };
    }
    let disabled = {};
    if (props.disabled) {
        disabled = {
            " > label": {
                cursor: "default",
            },
            ":hover": {
                background: "white",
            },
        };
    }
    let subheader = {};
    if (props["data-subheader"]) {
        subheader = {
            background: props.theme.decoration,
            color: "white",
            padding: "5px",
            fontWeight: "bold",
            pointerEvents: "none",
        };
    }
    return Object.assign({ cursor: props["data-link"] ? "default" : "pointer", ":hover": {
            background: props.theme.hover_background,
        } }, checked, disabled, subheader);
});
const Label = css("span")({
    cursor: "pointer",
    margin: "0 5px",
    " a": {
        verticalAlign: "middle",
    },
}, (props) => {
    return props.disabled ?
        {
            cursor: "default",
            fontStyle: "italic",
            color: "#888",
        }
        : {};
});
const Count = css("span")({
    color: "#888",
    fontSize: "0.8em",
});
