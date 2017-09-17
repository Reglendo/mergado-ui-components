var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import glamorous from "glamorous";
import { form } from "../../../config";
import domOnlyProps from "../../../helpers/dom-only-props";
export const defaultFieldProps = {
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
const BigLabel = glamorous.h3({
    paddingLeft: "10px",
    borderLeft: "5px solid hsla(43,44%,75%,.5)",
    fontSize: "1.2em",
    margin: "10px 0",
});
const LabelComponent = ({ children, name, bigLabel, className = "" }) => {
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement("label", { className: `${name}__label ${form}__label ${className}` }, bigLabel ? React.createElement(BigLabel, null, children) : children));
};
export const FieldLabel = glamorous(LabelComponent)({
    display: "inline-block",
}, (props) => {
    const theme = props.theme;
    return {
        fontSize: theme.form_label_text_size,
        fontWeight: theme.form_label_text_weight,
    };
});
const FieldErrorComponent = (_a) => {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) &&
        props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return (React.createElement("div", { className: `${props.className}` }, props.meta.error || props.labels.invalid));
    }
    else {
        return null;
    }
};
export const FieldError = glamorous(FieldErrorComponent)({
    color: "white",
    fontSize: "12px",
    zIndex: 1,
    padding: "1px 5px",
    position: "absolute",
    top: "100%",
}, (props) => {
    const theme = props.theme;
    return {
        left: theme.radius,
        background: theme.red,
    };
});
const FieldComponent = (props) => {
    const { meta, input, labels, group } = props, others = __rest(props, ["meta", "input", "labels", "group"]);
    const isInvalid = props.meta.invalid && (props.meta.dirty || props.meta.touched);
    return (React.createElement("div", Object.assign({}, domOnlyProps(group), { className: `${props.name ? props.name : ""}
                        ${props.className ? props.className : ""}
                        ${props.disabled ? props.name + `--disabled` : ""}
                        ${props.required ? props.name + `--required` : ""}
                        ${form}__group
                        `, title: props.labels.title, style: props.style }),
        React.createElement(FieldError, Object.assign({}, props, { className: `${form}__validation` })),
        (props.label || others.label || labels.main) &&
            React.createElement(FieldLabel, { name: props.name, bigLabel: group.bigLabel }, props.label ? props.label : (others.label ? others.label : labels.main)),
        React.createElement("div", { className: `\
                    ${isInvalid ? `${form}__group--invalid` : ""}\
                ` }, props.children)));
};
FieldComponent.defaultProps = defaultFieldProps;
export const Field = glamorous(FieldComponent)({
    position: "relative",
}, (props) => {
    const theme = props.theme;
    const styles = [];
    if ((props.input && props.input.name)) {
        styles.push({
            marginBottom: "20px",
            paddingRight: "10px",
        });
    }
    return [...styles, {
            "& .muk-form__group--invalid": {
                borderRadius: `${parseInt(theme.radius, 10) + 2}px`,
                border: `1px solid ${theme.red}`,
            },
        }];
});
