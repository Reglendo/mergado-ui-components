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
const react_router_1 = require("react-router");
const theme_1 = require("../../../styled/theme");
const dom_only_props_1 = require("../../../helpers/dom-only-props");
const config_1 = require("../../../config");
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
    if (props.color === "nocolor") {
        return styled_components_1.css `
            background: transparent;
            padding: 0;
            border: none;
            color: ${theme_1.default.blue};
            &:active,&:focus {
              border: none;
              outline: none;
              background: rgba(200,200,200,0.2);
            }
            path {
                fill: ${theme_1.default.blue};
            }
        `;
    }
    const color = theme_1.default[props.color === "gray" ? "grey" : props.color];
    if (props.secondary === true) {
        return styled_components_1.css `
            background: transparent;
            border: 2px solid ${color};
            color: ${color};
            path {
                ${color};
            }
            &:hover {
                background-color: ${color.fade(0.9)};
                text-decoration: none;
            }
            &:active,&:focus {
              background: ${color.fade(0.6)};
              text-decoration: none;
            }
        `;
    }
    return styled_components_1.css `
        background-color: ${color};
        border-color: ${color};
        color: white;
        &:hover {
            background-color: ${color.darken(0.1)};
        }
        &:active,&:focus {
          background: ${color.darken(0.2)};
          text-decoration: none;
        }
    `;
};
const styling = styled_components_1.css `
    box-sizing: border-box;
    border-radius: ${theme_1.default.radius};
    display: inline-block;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-transform: ${theme_1.default.button_text_transform};
    font-size: ${theme_1.default.button_text_size};
    font-weight: ${theme_1.default.button_text_weight};
    user-select: none;
    padding: 0px 20px;
    height: 42px;
    line-height: 39px;
    border-width: 2px;
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
      margin: 0 5;
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
        label,
        children);
};
const Button = (_a) => {
    var { name, icon, label, title, className, input, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "input", "children"]);
    return (React.createElement("button", Object.assign({}, input, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label,
        children));
};
const Link = (_a) => {
    var { name, icon, label, title, className, link, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "link", "children"]);
    return React.createElement(react_router_1.Link, Object.assign({}, dom_only_props_1.default(props), { to: link, className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label,
        children);
};
const Submit = (_a) => {
    var { name, label, title, className, input, children } = _a, props = __rest(_a, ["name", "label", "title", "className", "input", "children"]);
    return React.createElement("input", Object.assign({ type: "submit" }, input, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, value: label, title: title }));
};
const Void = (_a) => {
    var { name, icon, label, title, className, children } = _a, props = __rest(_a, ["name", "icon", "label", "title", "className", "children"]);
    return React.createElement("span", Object.assign({}, dom_only_props_1.default(props), { className: `${name}__item ${className ? className : ""}`, title: title }),
        icon,
        label,
        children);
};
const UniversalButtonComponent = (_a) => {
    var props = __rest(_a, []);
    const { name, type, link, labels, icon, input, to, children } = props, others = __rest(props, ["name", "type", "link", "labels", "icon", "input", "to", "children"]);
    if (type === "href") {
        return React.createElement(Href, Object.assign({}, others, { name: name, title: labels.title, link: to ? to : link, icon: icon, children: children, label: others.label ? others.label : labels.main }));
    }
    else if (type === "button") {
        return React.createElement(Button, Object.assign({}, others, { name: name, title: labels.title, icon: icon, input: input, children: children, label: others.label ? others.label : labels.main }));
    }
    else if (type === "link") {
        return React.createElement(Link, Object.assign({}, others, { name: name, title: labels.title, icon: icon, children: children, link: to ? to : link, label: others.label ? others.label : labels.main }));
    }
    else if (type === "submit") {
        return React.createElement(Submit, Object.assign({}, others, { name: name, title: labels.title, input: input, label: others.label ? others.label : labels.main }));
    }
    else if (type === "void") {
        return React.createElement(Void, Object.assign({}, others, { name: name, icon: icon, title: labels.title, children: children, label: others.label ? others.label : labels.main }));
    }
    else {
        return React.createElement("div", null);
    }
};
exports.UniversalButton = styled_components_1.default(UniversalButtonComponent) `
    ${styling}
`;
//# sourceMappingURL=types.js.map