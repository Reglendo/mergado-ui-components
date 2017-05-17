"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const react_router_1 = require("react-router");
class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "button";
        this.form = config_1.prefix + "form";
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
    }
    renderHref() {
        const { link, labels, icon, onClick } = this.props;
        return (React.createElement("a", { href: link, className: `${this.name}__item`, onClick: onClick, title: labels.title },
            icon,
            labels.main));
    }
    renderButton() {
        const { input, labels, icon, onClick } = this.props;
        return (React.createElement("button", Object.assign({ className: `${this.name}__item`, onClick: onClick, name: input.name, title: labels.title }, this.props.addProps),
            icon,
            labels.main));
    }
    renderLink() {
        const { link, labels, icon, onClick } = this.props;
        return (React.createElement(react_router_1.Link, { to: link, className: `${this.name}__item`, onClick: onClick, title: labels.title },
            icon,
            labels.main));
    }
    renderSubmit() {
        const { meta, input, labels, onClick } = this.props;
        const inputId = `${meta.form}-${input.name}`;
        return (React.createElement("input", Object.assign({ type: "submit", className: `${this.name}__item`, value: `${labels.main}`, id: inputId, name: input.name, title: labels.title, onClick: onClick }, this.props.addProps)));
    }
    renderVoid() {
        const { input, labels, icon, onClick } = this.props;
        return (React.createElement("span", { className: `${this.name}__item`, onClick: onClick, name: input.name, title: labels.title },
            icon,
            labels.main));
    }
    render() {
        const { type, color, state, size, addClass, meta } = this.props;
        return (React.createElement("div", { className: `${this.name} ${this.name}--${color}
                             ${!this.props.labels.main ? this.name + `--notext` : ``}
                             ${size ? this.name + `--` + size : ``}
                             ${state ? this.name + `--` + state : ``}
                             ${addClass ? addClass : ``}
                             ${type === 'submit' ? `{this.form}__group` : ''}
                             ${type === 'submit' && meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ''}
                         `, title: this.props.labels.title, style: this.props.style },
            type === 'submit' && this.renderInvalid(),
            type === 'button' && this.renderButton(),
            type === 'link' && this.renderLink(),
            type === 'submit' && this.renderSubmit(),
            type === 'void' && this.renderVoid(),
            type === 'href' && this.renderHref()));
    }
}
Button.defaultProps = {
    type: "button",
    onClick: (event) => {
        return true;
    },
    icon: null,
    color: "blue",
    state: "",
    size: "",
    style: null,
    addClass: "",
    input: {
        checked: false,
        name: "",
        onBlur: (value) => {
        },
        onChange: (value) => {
        },
        onDragStart: (value) => {
        },
        onDrop: (value) => {
        },
        onFocus: (value) => {
        },
        value: ""
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: ""
    },
    labels: {
        main: null,
        invalid: "Invalid input",
        title: ""
    }
};
exports.default = Button;
//# sourceMappingURL=index.js.map