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
const StyledInput = styled_components_1.default.div `
    position: relative;
    margin-bottom: 10px;
    border: 2px solid;
    border-color: ${(props) => props["data-invalid"] ? style.RED : "transparent"}
`;
const StyledLabel = styled_components_1.default.label `
    display: block;
    padding: 6px 10px 4px 2px;
`;
const StyledError = styled_components_1.default.div `
    background: ${style.RED};
    color: white;
    font-size: 12px;
    z-index: 1;
    padding: 1px 5px;
    position: absolute;
    top: 100%;
    left: -2px;
`;
exports.Input = (_a) => {
    var addProps = __rest(_a.group, []), props = __rest(_a, ["group"]);
    return (React.createElement(StyledInput, Object.assign({}, dom_only_props_1.default(addProps), { "data-invalid": props.meta.invalid && (props.meta.dirty || props.meta.touched), className: `${props.name} \
${props.className} \
${props.disabled ? props.name + `--disabled` : ""} \
${props.required ? props.name + `--required` : ""} \
${config_1.form}__group \
${props.meta.invalid && (props.meta.dirty || props.meta.touched) ? `${config_1.form}__group--invalid` : ""}\
`, title: props.labels.title, style: props.style }), props.children));
};
exports.InputLabel = ({ children, name }) => {
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement(StyledLabel, { className: `${name}__label ${config_1.form}__label` }, children));
};
exports.InputError = (_a) => {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) &&
        props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return (React.createElement(StyledError, { className: `${config_1.form}__validation` }, props.meta.error || props.labels.invalid));
    }
    else {
        return null;
    }
};
//# sourceMappingURL=index.js.map