"use strict";

var _templateObject = _taggedTemplateLiteral(["\n    padding: 0 10px;\n    height: 32px;\n    line-height: 30px;\n"], ["\n    padding: 0 10px;\n    height: 32px;\n    line-height: 30px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    padding: 0 5px;\n    height: 20px;\n    line-height: 18px;\n"], ["\n    padding: 0 5px;\n    height: 20px;\n    line-height: 18px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    opacity: 0.5;\n    cursor: default;\n    pointer-events: none;\n"], ["\n    opacity: 0.5;\n    cursor: default;\n    pointer-events: none;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    border-radius: 0px;\n    display: inline-block;\n    font-family: Trebuchet MS,Geneva CE,lucida,sans-serif;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: bold;\n    user-select: none;\n    color: white;\n    padding: 0px 20px;\n    height: 42px;\n    line-height: 42px;\n    border-width: 1px;\n    border-style: solid;\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    &:hover {\n      text-decoration: none\n    }\n    &:last-child {\n        margin-right: 0\n    }\n\n    .", "icon {\n      margin: 0 5px;\n      position: relative;\n      top: -1px;\n    }\n    a {\n        color: white;\n    }\n"], ["\n    box-sizing: border-box;\n    border-radius: 0px;\n    display: inline-block;\n    font-family: Trebuchet MS,Geneva CE,lucida,sans-serif;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: bold;\n    user-select: none;\n    color: white;\n    padding: 0px 20px;\n    height: 42px;\n    line-height: 42px;\n    border-width: 1px;\n    border-style: solid;\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    &:hover {\n      text-decoration: none\n    }\n    &:last-child {\n        margin-right: 0\n    }\n\n    .", "icon {\n      margin: 0 5px;\n      position: relative;\n      top: -1px;\n    }\n    a {\n        color: white;\n    }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n    ", "\n"], ["\n    ", "\n"]);

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
var styled_components_1 = require("styled-components");
var style = require("../../../styled");
var dom_only_props_1 = require("../../../helpers/dom-only-props");
var config_1 = require("../../../config");
var react_router_1 = require("react-router");
/* <style> */
/* sizes */
var Small = styled_components_1.css(_templateObject);
var Tiny = styled_components_1.css(_templateObject2);
var Disabled = styled_components_1.css(_templateObject3);
/* colors */
var colorize = function colorize() {
    return function (props) {
        var color = void 0;
        var dark = void 0;
        var darker = void 0;
        if (props.color === "nocolor") {
            return "\n            background: transparent;\n            padding: 0;\n            border: none;\n            color: #333;\n            path {\n                fill: #333;\n            }\n        ";
        }
        switch (props.color) {
            case "green":
                color = style.GREEN;
                dark = style.GREEN_DARK;
                darker = style.GREEN_DARKER;
                break;
            case "grey":
            case "gray":
                color = style.GREY;
                dark = style.GREY_DARK;
                darker = style.GREY_DARKER;
                break;
            case "red":
                color = style.RED;
                dark = style.RED_DARK;
                darker = style.RED_DARKER;
                break;
            case "blue":
            default:
                color = style.BLUE;
                dark = style.BLUE_DARK;
                darker = style.BLUE_DARKER;
                break;
        }
        return "\n        background-color: " + color + ";\n        border-color: " + color + ";\n        color: white;\n        &:hover {\n            background-color: " + dark + ";\n        }\n\n        &:active,&:focus {\n          background: " + darker + ";\n          text-decoration: none;\n        }\n\n    ";
    };
};
var styling = styled_components_1.css(_templateObject4, function (props) {
    return props.size === "tiny" && Tiny;
}, function (props) {
    return props.size === "small" && Small;
}, function (props) {
    return props.disabled && Disabled;
}, colorize(), config_1.prefix);
var Href = function Href(_a) {
    var icon = _a.icon,
        label = _a.label,
        link = _a.link,
        name = _a.name,
        title = _a.title,
        className = _a.className,
        children = _a.children,
        props = __rest(_a, ["icon", "label", "link", "name", "title", "className", "children"]);

    return React.createElement("a", Object.assign({}, dom_only_props_1.default(props), { href: link, className: name + "__item " + (className ? className : ""), title: title }), icon, label, children);
};
var Button = function Button(_a) {
    var name = _a.name,
        icon = _a.icon,
        label = _a.label,
        title = _a.title,
        className = _a.className,
        input = _a.input,
        children = _a.children,
        props = __rest(_a, ["name", "icon", "label", "title", "className", "input", "children"]);

    return React.createElement("button", Object.assign({}, input, dom_only_props_1.default(props), { className: name + "__item " + (className ? className : ""), title: title }), icon, label, children);
};
var Link = function Link(_a) {
    var name = _a.name,
        icon = _a.icon,
        label = _a.label,
        title = _a.title,
        className = _a.className,
        link = _a.link,
        children = _a.children,
        props = __rest(_a, ["name", "icon", "label", "title", "className", "link", "children"]);

    return React.createElement(react_router_1.Link, Object.assign({}, dom_only_props_1.default(props), { to: link, className: name + "__item " + (className ? className : ""), title: title }), icon, label, children);
};
var Submit = function Submit(_a) {
    var name = _a.name,
        label = _a.label,
        title = _a.title,
        className = _a.className,
        input = _a.input,
        children = _a.children,
        props = __rest(_a, ["name", "label", "title", "className", "input", "children"]);

    return React.createElement("input", Object.assign({ type: "submit" }, input, dom_only_props_1.default(props), { className: name + "__item " + (className ? className : ""), value: label, title: title }));
};
var Void = function Void(_a) {
    var name = _a.name,
        icon = _a.icon,
        label = _a.label,
        title = _a.title,
        className = _a.className,
        children = _a.children,
        props = __rest(_a, ["name", "icon", "label", "title", "className", "children"]);

    return React.createElement("span", Object.assign({}, dom_only_props_1.default(props), { className: name + "__item " + (className ? className : ""), title: title }), icon, label, children);
};
var UniversalButtonComponent = function UniversalButtonComponent(_a) {
    var props = __rest(_a, []);

    var name = props.name,
        type = props.type,
        link = props.link,
        labels = props.labels,
        icon = props.icon,
        input = props.input,
        to = props.to,
        children = props.children,
        others = __rest(props, ["name", "type", "link", "labels", "icon", "input", "to", "children"]);

    if (type === "href") {
        return React.createElement(Href, Object.assign({}, others, { name: name, title: labels.title, link: to ? to : link, icon: icon, children: children, label: others.label ? others.label : labels.main }));
    } else if (type === "button") {
        return React.createElement(Button, Object.assign({}, others, { name: name, title: labels.title, icon: icon, input: input, children: children, label: others.label ? others.label : labels.main }));
    } else if (type === "link") {
        return React.createElement(Link, Object.assign({}, others, { name: name, title: labels.title, icon: icon, children: children, link: to ? to : link, label: others.label ? others.label : labels.main }));
    } else if (type === "submit") {
        return React.createElement(Submit, Object.assign({}, others, { name: name, title: labels.title, input: input, label: others.label ? others.label : labels.main }));
    } else if (type === "void") {
        return React.createElement(Void, Object.assign({}, others, { name: name, icon: icon, title: labels.title, children: children, label: others.label ? others.label : labels.main }));
    } else {
        return React.createElement("div", null);
    }
};
exports.UniversalButton = styled_components_1.default(UniversalButtonComponent)(_templateObject5, styling);
//# sourceMappingURL=types.js.map