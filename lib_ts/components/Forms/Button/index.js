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
const config_1 = require("config");
const react_router_1 = require("react-router");
const MUK = require("components/Forms/input");
const styled_components_1 = require("styled-components");
const style = require("styled");
const polished_1 = require("polished");
const Input_1 = require("components/Forms/Input");
const dom_only_props_1 = require("helpers/dom-only-props");
/* <style> */
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
            break;
        case "grey":
        case "gray":
            color = style.GREY;
            break;
        case "red":
            color = style.RED;
            break;
        case "blue":
        default:
            color = style.BLUE;
            break;
    }
    const dark = polished_1.darken(0.05, color);
    return `
        background-color: ${color};
        background: linear-gradient(to bottom, ${color} 5%, ${dark} 100%);
        border-color: ${dark};

        &:active {
          background: ${dark};
        }

        &:hover {
          background-color: ${dark};
          background: linear-gradient(to bottom, ${dark} 5%, ${color} 100%);
        }
    `;
};
const StyledLink = styled_components_1.default(react_router_1.Link) `
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
    line-height: 41px;
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
`;
const StyledInput = styled_components_1.default(Input_1.Input) `
    display: inline-block;
`;
const StyledHref = StyledLink.withComponent("a");
const StyledButton = StyledLink.withComponent("button");
const StyledSubmit = StyledLink.withComponent("input");
const StyledVoid = StyledLink.withComponent("span");
/* </style> */
class Button extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "button";
    }
    renderHref(className, props) {
        const { link, labels, icon, input, to } = this.props;
        const l = to ? to : link;
        return (React.createElement(StyledHref, Object.assign({}, props, input, { color: this.props.color, disabled: this.props.disabled, onClick: this.props.onClick, href: l, className: `${this.name}__item`, title: labels.title }),
            icon,
            labels.main));
    }
    renderButton(className, props) {
        const { input, labels, icon } = this.props;
        return (React.createElement(StyledButton, Object.assign({}, props, input, { color: this.props.color, disabled: this.props.disabled, onClick: this.props.onClick, className: `${this.name}__item ${className ? className : ""}`, title: labels.title }),
            icon,
            labels.main));
    }
    renderLink(className, props) {
        const { link, labels, icon, input, to } = this.props;
        const l = to ? to : link;
        return (React.createElement(StyledLink, Object.assign({}, props, { color: this.props.color, disabled: this.props.disabled, onClick: this.props.onClick, to: l, className: `${this.name}__item ${className ? className : ""}`, title: labels.title }),
            icon,
            labels.main));
    }
    renderSubmit(className, props) {
        const { meta, input, labels } = this.props;
        return (React.createElement(StyledSubmit, Object.assign({}, props, input, { color: this.props.color, disabled: this.props.disabled, onClick: this.props.onClick, type: "submit", className: `${this.name}__item ${className ? className : ""}`, value: `${labels.main}`, title: labels.title })));
    }
    renderVoid(className, props) {
        const { input, labels, icon } = this.props;
        return (React.createElement(StyledVoid, Object.assign({}, props, input, { color: this.props.color, disabled: this.props.disabled, onClick: this.props.onClick, className: `${this.name}__item ${className ? className : ""}`, title: labels.title }),
            icon,
            labels.main));
    }
    renderLabel(className, props) {
        return null;
    }
    renderInput(className, props) {
        const { type, color, disabled, size, meta } = this.props;
        return (React.createElement("div", { className: `${this.name}--${color} \
${!this.props.labels.main ? this.name + `--notext` : ``} \
${size ? this.name + `--` + size : ``} \
${this.name}--${type} \
${disabled ? this.name + `--disabled` : ``} \
` },
            type === "button" && this.renderButton(className, props),
            type === "link" && this.renderLink(className, props),
            type === "submit" && this.renderSubmit(className, props),
            type === "void" && this.renderVoid(className, props),
            type === "href" && this.renderHref(className, props)));
    }
    render() {
        const props = this.props;
        const { meta, input, labels, group } = props, others = __rest(props, ["meta", "input", "labels", "group"]);
        const inputProps = dom_only_props_1.default(Object.assign({ id: this.props.meta.form ? `${this.props.meta.form}-${input.name}` : "" }, others));
        return (React.createElement(StyledInput, Object.assign({ name: this.name }, props),
            this.renderError(),
            React.createElement(Input_1.InputLabel, { name: this.name }, this.renderLabel(input.className ? input.className : "", inputProps)),
            this.renderInput(input.className ? input.className : "", inputProps)));
    }
}
Button.defaultProps = Object.assign({}, MUK.defaultProps, { type: "button", icon: null, color: "blue", disabled: false, size: "" });
exports.default = Button;
//# sourceMappingURL=index.js.map