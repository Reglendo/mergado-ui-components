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
const styled_components_1 = require("styled-components");
const LittleStatus_1 = require("../../../components/LittleStatus");
const StyledInput = styled_components_1.default.input `
    margin: 0;
    margin-right: 10px;
    vertical-align: text-bottom;
`;
const QueryItemComponent = (_a) => {
    var { name, option, index, onClick, checked, labels, className, singleChoice, showInput } = _a, props = __rest(_a, ["name", "option", "index", "onClick", "checked", "labels", "className", "singleChoice", "showInput"]);
    return (React.createElement("li", { className: `${name}__item ${index >= 0 ? `${name}__item--active` : ""}
                        ${option.disabled ? `${name}__item--disabled` : ""}
                        ${className}
            `, key: option.id, onClick: !option.subheader && onClick },
        React.createElement(StyledInput, { type: singleChoice ? "radio" : "checkbox", className: `${name}__checkbox`, checked: checked, onChange: onClick, key: "input", style: { display: showInput ? "inline-block" : "none", pointerEvents: "none" } }),
        React.createElement(QueryItemLabel, { name: name, option: option, allProducts: labels.allProducts })));
};
exports.QueryItem = styled_components_1.default(QueryItemComponent) `
    display: table;
    border-bottom: 1px solid #dbcba3;
    width: 100%;
    background: ${props => props.checked ? "#fbeea5" : "white"};
    padding: 10px;
    font-size: 0.9em;
    cursor: pointer;
    font-weight: ${props => props.checked ? "bold" : "normal"};
    &:hover {
        background: #fdf7d2;
    }
    ${props => props.option.disabled && styled_components_1.css `
        cursor: default;
        &:hover {
            background: white;
        }
    `}
    ${props => props.option.subheader && styled_components_1.css `
        background: #888;
        color: white;
        padding: 5px 10px;
        font-weight: bold;
        font-size: 0.9em;
        cursor: default;
        &:hover {
            background: #888;
        }
    `}
`;
const Count = styled_components_1.default.span `
    color: #888;
    font-size: 0.8em;
`;
const QueryItemLabelComponent = (_a) => {
    var { name, option, allProducts, className } = _a, props = __rest(_a, ["name", "option", "allProducts", "className"]);
    let label = (option.name === "♥ALLPRODUCTS♥" ? allProducts : option.name);
    if (option.link !== undefined) {
        label = React.createElement(react_router_1.Link, { to: option.link }, label);
    }
    if (option.active !== undefined) {
        label = React.createElement(LittleStatus_1.default, { type: option.active ? "success" : "inactive" }, label);
    }
    return (React.createElement("label", { className: `${name}__label ${className}`, key: "label" },
        label,
        " ",
        React.createElement(Count, { className: `${name}__count` }, typeof option.product_count !== "undefined" ? `(${option.product_count})` : "")));
};
const QueryItemLabel = styled_components_1.default(QueryItemLabelComponent) `
    cursor: pointer;
    ${props => props.option.disabled && styled_components_1.css `
        cursor: default;
        font-style: italic;
        color: #888;
    `}
`;
//# sourceMappingURL=item.js.map