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
const styled_components_1 = require("styled-components");
const style = require("styled");
const dom_only_props_1 = require("helpers/dom-only-props");
const config_1 = require("config");
const react_router_1 = require("react-router");
/* <style> */
/* sizes */
const Small = styled_components_1.css `
    padding: 0 10px;
    height: 32px;
    line-height: 30px;
`;
const Tiny = styled_components_1.css `
    padding: 0 5px;
    height: 20px;
    line-height: 18px;
`;
const Disabled = styled_components_1.css `
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
`;
/* colors */
const colorize = () => (props) => {
    let color;
    let dark;
    let darker;
    if (props.color === "nocolor") {
        return `
            background: transparent;
            padding: 0;
            border: none;
            color: #333;
            path {
                fill: #333;
            }
        `;
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
    return `
        background-color: ${color};
        border-color: ${color};
        color: white;
        &:hover {
            background-color: ${dark};
        }

        &:active,&:focus {
          background: ${darker};
          text-decoration: none;
        }

    `;
};
const styling = styled_components_1.css `
    box-sizing: border-box;
    border-radius: 0px;
    display: inline-block;
    font-family: Trebuchet MS,Geneva CE,lucida,sans-serif;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    user-select: none;
    color: white;
    padding: 0px 20px;
    height: 42px;
    line-height: 42px;
    border-width: 1px;
    border-style: solid;
    ${(props) => props.size === "tiny" && Tiny}
    ${(props) => props.size === "small" && Small}
    ${(props) => props.disabled && Disabled}

    ${colorize()}

    &:hover {
      text-decoration: none
    }
    &:last-child {
        margin-right: 0
    }

    .${config_1.prefix}icon {
      margin: 0 5px;
      position: relative;
      top: -1px;
    }
    a {
        color: white;
    }
`;
const Href = (_a) => {
    var { icon, label, link, name, title, className, children } = _a, props = __rest(_a, ["icon", "label", "link", "name", "title", "className", "children"]);
    return React.createElement("a", Object.assign({}, dom_only_props_1.default(props), { href: link, className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label);
};
const Button = (_a) => {
    var { name, icon, label, title, className, input, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "input", "children"]);
    return (React.createElement("button", Object.assign({}, input, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label));
};
const Link = (_a) => {
    var { name, icon, label, title, className, link, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "link", "children"]);
    return React.createElement(react_router_1.Link, Object.assign({}, dom_only_props_1.default(props), { to: link, className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label);
};
const Submit = (_a) => {
    var { name, label, title, className, input, children } = _a, props = __rest(_a, ["name", "label", "title", "className", "input", "children"]);
    return React.createElement("input", Object.assign({ type: "submit" }, input, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, value: label, title: title }));
};
const Void = (_a) => {
    var { name, icon, label, title, className, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "children"]);
    return React.createElement("span", Object.assign({}, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label);
};
const UniversalButtonComponent = (_a) => {
    var props = __rest(_a, []);
    const { name, type, link, labels, icon, input, to, children } = props, others = __rest(props, ["name", "type", "link", "labels", "icon", "input", "to", "children"]);
    if (type === "href") {
        return React.createElement(Href, Object.assign({}, others, { name: name, title: labels.title, link: to ? to : link, icon: icon, label: others.label ? others.label : labels.main }));
    }
    else if (type === "button") {
        return React.createElement(Button, Object.assign({}, others, { name: name, title: labels.title, icon: icon, input: input, label: others.label ? others.label : labels.main }));
    }
    else if (type === "link") {
        return React.createElement(Link, Object.assign({}, others, { name: name, title: labels.title, icon: icon, link: to ? to : link, label: others.label ? others.label : labels.main }));
    }
    else if (type === "submit") {
        return React.createElement(Submit, Object.assign({}, others, { name: name, title: labels.title, input: input, label: others.label ? others.label : labels.main }));
    }
    else if (type === "void") {
        return React.createElement(Void, Object.assign({}, others, { name: name, icon: icon, title: labels.title, label: others.label ? others.label : labels.main }));
    }
    else {
        return React.createElement("div", null);
    }
};
exports.UniversalButton = styled_components_1.default(UniversalButtonComponent) `
    ${styling}
`;
//# sourceMappingURL=types.js.map