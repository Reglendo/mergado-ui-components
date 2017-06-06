"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const react_router_1 = require("react-router");
const MUK = require("components/Forms/input");
class Button extends MUK.InputComponent {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "button";
    }
    renderHref(className, props) {
        const { link, labels, icon, input } = this.props;
        return (React.createElement("a", Object.assign({}, props, { href: link, className: `${this.name}__item`, title: labels.title }),
            icon,
            labels.main));
    }
    renderButton(className, props) {
        const { input, labels, icon } = this.props;
        return (React.createElement("button", Object.assign({}, props, { className: `${this.name}__item ${className ? className : ""}`, title: labels.title }),
            icon,
            labels.main));
    }
    renderLink(className, props) {
        const { link, labels, icon, input } = this.props;
        return (React.createElement(react_router_1.Link, Object.assign({}, props, { to: link, className: `${this.name}__item ${className ? className : ""}`, title: labels.title }),
            icon,
            labels.main));
    }
    renderSubmit(className, props) {
        const { meta, input, labels } = this.props;
        return (React.createElement("input", Object.assign({}, props, { type: "submit", className: `${this.name}__item ${className ? className : ""}`, value: `${labels.main}`, title: labels.title })));
    }
    renderVoid(className, props) {
        const { input, labels, icon } = this.props;
        return (React.createElement("span", Object.assign({}, props, { className: `${this.name}__item ${className ? className : ""}`, title: labels.title }),
            icon,
            labels.main));
    }
    renderLabel() {
        return React.createElement("span", null);
    }
    renderInput(className, props) {
        const { type, color, disabled, size, meta } = this.props;
        return (React.createElement("div", { className: `${this.name}--${color} \
${!this.props.labels.main ? this.name + `--notext` : ``} \
${size ? this.name + `--` + size : ``} \
${disabled ? this.name + `--disabled` : ``} \
` },
            type === "button" && this.renderButton(className, props),
            type === "link" && this.renderLink(className, props),
            type === "submit" && this.renderSubmit(className, props),
            type === "void" && this.renderVoid(className, props),
            type === "href" && this.renderHref(className, props)));
    }
}
Button.defaultProps = Object.assign({}, MUK.defaultProps, { type: "button", icon: null, color: "blue", disabled: false, size: "" });
exports.default = Button;
//# sourceMappingURL=index.js.map