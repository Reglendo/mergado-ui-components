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
const glamor_1 = require("glamor");
const Color = require("color");
const types_1 = require("./types");
const UniversalButtonComponent = (_a) => {
    var props = __rest(_a, []);
    const { name, type, link, labels, icon, input, to, children } = props, others = __rest(props, ["name", "type", "link", "labels", "icon", "input", "to", "children"]);
    if (type === "href") {
        return React.createElement(types_1.Href, Object.assign({}, others, { name: name, title: labels.title, link: to ? to : link, icon: icon, children: children, label: others.label ? others.label : labels.main, styleClass: UniversalStyle }));
    }
    else if (type === "button") {
        return React.createElement(types_1.Button, Object.assign({}, others, { name: name, title: labels.title, icon: icon, input: input, children: children, label: others.label ? others.label : labels.main, styleClass: UniversalStyle }));
    }
    else if (type === "link") {
        return React.createElement(types_1.Link, Object.assign({}, others, { name: name, title: labels.title, icon: icon, children: children, link: to ? to : link, label: others.label ? others.label : labels.main, styleClass: UniversalStyle }));
    }
    else if (type === "submit") {
        return React.createElement(types_1.Submit, Object.assign({}, others, { name: name, title: labels.title, input: input, label: others.label ? others.label : labels.main, styleClass: UniversalStyle }));
    }
    else if (type === "void") {
        return React.createElement(types_1.Void, Object.assign({}, others, { name: name, icon: icon, title: labels.title, children: children, label: others.label ? others.label : labels.main, styleClass: UniversalStyle }));
    }
    else {
        return React.createElement("div", null);
    }
};
const UniversalStyle = glamor_1.css({
    boxSizing: "border-box",
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    userSelect: "none",
    padding: "0px 20px",
    height: "42px",
    lineHeight: "39px",
    borderWidth: "2px",
    borderStyle: "solid",
    ":hover": {
        textDecoration: "none",
    },
    ":last-child": {
        marginRight: 0,
    },
    "& .muk-icon": {
        margin: "0 5",
        position: "relative",
        top: "-1px",
    },
    "& a": {
        color: "white",
    },
});
exports.UniversalButton = glamorous_1.default(UniversalButtonComponent)({}, props => {
    const style = [];
    if (props.size === "tiny") {
        style.push({
            padding: "0 5px",
            height: "20px",
            lineHeight: "18px",
        });
    }
    else if (props.size === "small") {
        style.push({
            padding: "0 10px",
            height: "32px",
            lineHeight: "30px",
        });
    }
    if (props.disabled) {
        style.push({
            opacity: 0.5,
            cursor: "default",
            pointerEvents: "none",
        });
    }
    if (props.color === "nocolor") {
        style.push({
            background: "transparent",
            padding: "0 2px",
            border: "none",
            color: props.theme.blue,
            ":active,:focus": {
                border: "none",
                outline: "none",
                background: "rgba(200,200,200,0.2)",
            },
            "& path": {
                fill: props.theme.blue,
            },
        });
    }
    else {
        const color = props.theme[props.color === "gray" ? "grey" : props.color];
        style.push({
            backgroundColor: color,
            borderColor: color,
            color: "white",
            ":hover": {
                backgroundColor: Color(color).darken(0.1),
                borderColor: Color(color).darken(0.1),
            },
            ":active,:focus": {
                background: Color(color).darken(0.2),
                borderColor: Color(color).darken(0.2),
                textDecoration: "none",
            },
        });
    }
    style.push({
        borderRadius: props.theme.radius,
        textTransform: props.theme.button_text_transform,
        fontSize: props.theme.button_text_size,
        fontWeight: props.theme.button_text_weight,
    });
    return style;
});
//# sourceMappingURL=button.js.map