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
import css from "@reglendo/cxs/component";
import { form } from "../../../config";
import { Div } from "../../Layout/Div";
import PropTypes from 'prop-types';
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
const CssBigLabel = css("h3")({
    paddingLeft: "10px",
    borderLeft: "5px solid hsla(43,44%,75%,.5)",
    fontSize: "1.2em",
    margin: "10px 0",
});
const LabelComponent = ({ children, bigLabel, className = "" }) => {
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement("label", { className: `${form}-label ${className}` }, bigLabel ? React.createElement(CssBigLabel, null, children) : children));
};
export const FieldLabel = css(LabelComponent)({
    display: "inline-block",
    height: "25px",
    " .muk-popup-hint": {
        verticalAlign: "middle",
    },
}, (props) => {
    const theme = props.theme;
    return {
        fontSize: theme.form_label_text_size,
        fontWeight: theme.form_label_text_weight,
    };
});
FieldLabel.propTypes = {
    meta: PropTypes.any,
    input: PropTypes.any,
    labels: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
};
const FieldErrorComponent = (_a) => {
    var props = __rest(_a, []);
    if (props.meta && props.meta.error) {
        return (React.createElement("div", { className: `${props.className}` }, props.meta.error));
    }
    else {
        return null;
    }
};
export const FieldError = css(FieldErrorComponent)({
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
FieldError.propTypes = {
    meta: PropTypes.any,
    input: PropTypes.any,
    labels: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
};
const FieldComponent = (props) => {
    const { meta, input, labels, group, style } = props, others = __rest(props, ["meta", "input", "labels", "group", "style"]);
    const isInvalid = !!props.meta.error || props.meta.invalid;
    return (React.createElement(Div, Object.assign({}, others, { className: `${form}-group ${props.name ? "m-field-" + props.name : ""} ${props.disabled ? "disabled" : ""} ${props.required ? "required" : ""}  ${props.className || ""}`, title: props.labels.title }, props.style),
        React.createElement(FieldError, Object.assign({}, others, { meta: meta, className: `${form}__validation` })),
        (props.label || others.label || labels.main) &&
            React.createElement(FieldLabel, { name: props.name, bigLabel: group.bigLabel }, props.label ? props.label : (others.label ? others.label : labels.main)),
        React.createElement("div", { className: `m-isinvalid ${isInvalid ? `m-invalid` : ""}` }, props.children)));
};
FieldComponent.defaultProps = defaultFieldProps;
FieldComponent.propTypes = {
    input: PropTypes.any,
    labels: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
};
export const Field = css(FieldComponent)({
    position: "relative",
    ".muk-checkbox .m-isinvalid.m-invalid": {
        borderColor: "transparent",
    },
}, (props) => {
    const theme = props.theme;
    let styles = {};
    if ((props.input && props.input.name) || props.name) {
        styles = {
            marginBottom: "30px",
            paddingRight: "10px",
        };
    }
    return Object.assign({}, styles, { "& .m-invalid": {
            borderRadius: `${parseInt(theme.radius, 10) + 2}px`,
            border: `1px solid ${theme.red}`,
        } }, props.s);
});
Field.propTypes = {
    input: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
};
