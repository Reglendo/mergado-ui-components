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
const react_router_1 = require("react-router");
const glamorous_1 = require("glamorous");
const Color = require("color");
const Radio_1 = require("../../../components/Forms/Radio");
const Checkbox_1 = require("../../../components/Forms/Checkbox");
const LittleStatus_1 = require("../../../components/LittleStatus");
exports.QueryItem = (_a) => {
    var { name, option, index, onClick, checked, labels, className, singleChoice, showInput } = _a, props = __rest(_a, ["name", "option", "index", "onClick", "checked", "labels", "className", "singleChoice", "showInput"]);
    return (React.createElement(exports.Li, { className: `${name}__item ${index >= 0 ? `${name}__item--active` : ""}
                        ${option.disabled ? `${name}__item--disabled` : ""}
                        ${className}
            `, "data-subheader": option.subheader, disabled: option.disabled, checked: checked, key: option.id, onClick: !option.subheader && onClick },
        showInput &&
            React.createElement("span", null, singleChoice ?
                React.createElement(Radio_1.default, { items: [
                        { value: option.id, label: "" }
                    ], input: {
                        value: checked ? option.id : null,
                        onChange: onClick,
                    }, key: "input", style: { display: showInput ? "inline-block" : "none", pointerEvents: "none" } })
                :
                    React.createElement(Checkbox_1.default, { input: {
                            checked: checked,
                            onChange: onClick,
                        }, key: "input", style: { display: showInput ? "inline-block" : "none", pointerEvents: "none", paddingRight: "5px" } })),
        React.createElement(exports.QueryItemLabel, { name: name, option: option, allProducts: labels.allProducts, showInput: showInput })));
};
exports.QueryItemLabel = (_a) => {
    var { name, option, allProducts, className, showInput } = _a, props = __rest(_a, ["name", "option", "allProducts", "className", "showInput"]);
    let label = (option.name === "♥ALLPRODUCTS♥" ? allProducts : option.name);
    if (option.link !== undefined) {
        label = React.createElement(react_router_1.Link, { to: option.link }, label);
    }
    return (React.createElement(Label, { className: `${name}__label ${className}`, key: "label", disabled: option.disabled },
        label,
        " ",
        React.createElement(Count, { className: `${name}__count` }, typeof option.product_count !== "undefined" ? `(${option.product_count})` : ""),
        option.active !== undefined &&
            React.createElement(LittleStatus_1.default, { style: { float: showInput ? "right" : "left" }, type: option.active ? "success" : "inactive" })));
};
exports.Li = glamorous_1.default.li({
    display: "table",
    background: "white",
    fontWeight: "normal",
    width: "100%",
    padding: "10px",
    fontSize: "0.9em",
    cursor: "pointer",
}, (props) => {
    const styles = [];
    styles.push({
        ":hover": {
            background: props.theme.hover_background,
        },
    });
    if (props.checked) {
        styles.push({
            background: props.theme.selected_background,
            ":hover": {
                background: Color(props.theme.selected_background).fade(0.2),
            },
        });
    }
    if (props.disabled) {
        styles.push({
            cursor: "default",
            ":hover": {
                background: "white",
            }
        });
    }
    if (props["data-subheader"]) {
        styles.push({
            background: props.theme.decoration,
            color: "white",
            padding: "5px",
            fontWeight: "bold",
            pointerEvents: "none",
        });
    }
    return styles;
});
const Label = glamorous_1.default.label({
    cursor: "pointer",
    margin: "0 5px",
    "& a": {
        verticalAlign: "middle",
    }
}, (props) => {
    return props.disabled ?
        {
            cursor: "default",
            fontStyle: "italic",
            color: "#888",
        }
        : {};
});
const Count = glamorous_1.default.span({
    color: "#888",
    fontSize: "0.8em",
});
const StyledInput = glamorous_1.default.input({
    margin: 0,
    marginRight: "10px",
    verticalAlign: "text-bottom",
});
//# sourceMappingURL=item.js.map