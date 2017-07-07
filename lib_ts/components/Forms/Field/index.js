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
const dom_only_props_1 = require("helpers/dom-only-props");
const styled_components_1 = require("styled-components");
const style = require("styled");
exports.defaultFieldProps = {
    group: {
        className: "",
        style: {},
        bigLabel: false,
    },
    input: {
        className: "",
        name: "",
        value: "",
        checked: false,
        onBlur: (value) => { },
        onChange: (value) => { },
        onDragStart: (value) => { },
        onDrop: (value) => { },
        onFocus: (value) => { },
        onKeyDown: (value) => { },
        onKeyUp: (value) => { },
        onClick: (value) => { },
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
        warning: "",
    },
    labels: {
        main: "",
        invalid: "",
        title: "",
        placeholder: "",
    },
};
const LabelComponent = ({ children, name }) => {
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement("label", { className: `${name}__label ${config_1.form}__label` }, children));
};
exports.FieldLabel = styled_components_1.default(LabelComponent) `
    display: block;
    padding: 6px 10px 4px 2px;
`;
const FieldErrorComponent = (_a) => {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) &&
        props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return (React.createElement("div", { className: `${config_1.form}__validation` }, props.meta.error || props.labels.invalid));
    }
    else {
        return null;
    }
};
exports.FieldError = styled_components_1.default(FieldErrorComponent) `
    background: ${style.RED};
    color: white;
    font-size: 12px;
    z-index: 1;
    padding: 1px 5px;
    position: absolute;
    top: 100%;
    left: -2px;
`;
const FieldComponent = (props) => {
    const { meta, input, labels, group } = props, others = __rest(props, ["meta", "input", "labels", "group"]);
    const isInvalid = props.meta.invalid && (props.meta.dirty || props.meta.touched);
    return (React.createElement("div", Object.assign({}, dom_only_props_1.default(props), { "data-invalid": isInvalid, className: `${props.name ? props.name : ""}
                        ${props.className ? props.className : ""}
                        ${props.disabled ? props.name + `--disabled` : ""}
                        ${props.required ? props.name + `--required` : ""}
                        ${config_1.form}__group
                        ${isInvalid ? `${config_1.form}__group--invalid` : ""}
                        `, title: props.labels.title, style: props.style }),
        React.createElement(exports.FieldError, Object.assign({}, props)),
        React.createElement(exports.FieldLabel, { name: props.name }, props.label ? props.label : (others.label ? others.label : labels.main)),
        props.children));
};
FieldComponent.defaultProps = exports.defaultFieldProps;
exports.Field = styled_components_1.default(FieldComponent) `
    position: relative;
    margin-bottom: 10px;
    border: 2px solid;
    border-color: ${(props) => props["data-invalid"] ? style.RED : "transparent"}
`;
//# sourceMappingURL=index.js.map