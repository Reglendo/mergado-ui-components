"use strict";

var _templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n    margin-right: 10px;\n    vertical-align: text-bottom;\n"], ["\n    margin: 0;\n    margin-right: 10px;\n    vertical-align: text-bottom;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    display: table;\n    border-bottom: 1px solid #dbcba3;\n    width: 100%;\n    background: ", ";\n    padding: 10px;\n    font-size: 0.9em;\n    cursor: pointer;\n    font-weight: ", ";\n    &:hover {\n        background: #fdf7d2;\n    }\n    ", "\n    ", "\n"], ["\n    display: table;\n    border-bottom: 1px solid #dbcba3;\n    width: 100%;\n    background: ", ";\n    padding: 10px;\n    font-size: 0.9em;\n    cursor: pointer;\n    font-weight: ", ";\n    &:hover {\n        background: #fdf7d2;\n    }\n    ", "\n    ", "\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n        cursor: default;\n        &:hover {\n            background: white;\n        }\n    "], ["\n        cursor: default;\n        &:hover {\n            background: white;\n        }\n    "]),
    _templateObject4 = _taggedTemplateLiteral(["\n        background: #888;\n        color: white;\n        padding: 5px 10px;\n        font-weight: bold;\n        font-size: 0.9em;\n        cursor: default;\n        &:hover {\n            background: #888;\n        }\n    "], ["\n        background: #888;\n        color: white;\n        padding: 5px 10px;\n        font-weight: bold;\n        font-size: 0.9em;\n        cursor: default;\n        &:hover {\n            background: #888;\n        }\n    "]),
    _templateObject5 = _taggedTemplateLiteral(["\n    color: #888;\n    font-size: 0.8em;\n"], ["\n    color: #888;\n    font-size: 0.8em;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    ", "\n"], ["\n    cursor: pointer;\n    ", "\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n        cursor: default;\n        font-style: italic;\n        color: #888;\n    "], ["\n        cursor: default;\n        font-style: italic;\n        color: #888;\n    "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var LittleStatus_1 = require("../../LittleStatus");
var styled_components_1 = require("styled-components");
var StyledInput = styled_components_1.default.input(_templateObject);
var QueryItemComponent = function QueryItemComponent(_a) {
    var name = _a.name,
        option = _a.option,
        index = _a.index,
        onClick = _a.onClick,
        checked = _a.checked,
        labels = _a.labels,
        className = _a.className,
        singleChoice = _a.singleChoice,
        showInput = _a.showInput,
        props = __rest(_a, ["name", "option", "index", "onClick", "checked", "labels", "className", "singleChoice", "showInput"]);

    return React.createElement("li", { className: name + "__item " + (index >= 0 ? name + "__item--active" : "") + "\n                        " + (option.disabled ? name + "__item--disabled" : "") + "\n                        " + className + "\n            ", key: option.id, onClick: !option.subheader && onClick }, React.createElement(StyledInput, { type: singleChoice ? "radio" : "checkbox", className: name + "__checkbox", checked: checked, onChange: onClick, key: "input", style: { display: showInput ? "inline-block" : "none", pointerEvents: "none" } }), React.createElement(QueryItemLabel, { name: name, option: option, allProducts: labels.allProducts }));
};
exports.QueryItem = styled_components_1.default(QueryItemComponent)(_templateObject2, function (props) {
    return props.checked ? "#fbeea5" : "white";
}, function (props) {
    return props.checked ? "bold" : "normal";
}, function (props) {
    return props.option.disabled && styled_components_1.css(_templateObject3);
}, function (props) {
    return props.option.subheader && styled_components_1.css(_templateObject4);
});
var Count = styled_components_1.default.span(_templateObject5);
var QueryItemLabelComponent = function QueryItemLabelComponent(_a) {
    var name = _a.name,
        option = _a.option,
        allProducts = _a.allProducts,
        className = _a.className,
        props = __rest(_a, ["name", "option", "allProducts", "className"]);

    var label = option.name === "♥ALLPRODUCTS♥" ? allProducts : option.name;
    if (option.link !== undefined) {
        label = React.createElement(react_router_1.Link, { to: option.link }, label);
    }
    if (option.active !== undefined) {
        label = React.createElement(LittleStatus_1.default, { type: option.active ? "success" : "inactive" }, label);
    }
    return React.createElement("label", { className: name + "__label " + className, key: "label" }, label, " ", React.createElement(Count, { className: name + "__count" }, typeof option.product_count !== "undefined" ? "(" + option.product_count + ")" : ""));
};
var QueryItemLabel = styled_components_1.default(QueryItemLabelComponent)(_templateObject6, function (props) {
    return props.option.disabled && styled_components_1.css(_templateObject7);
});
//# sourceMappingURL=item.js.map