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
const RadioInputComponent = (_a) => {
    var { name, value, checked, label, onChange } = _a, props = __rest(_a, ["name", "value", "checked", "label", "onChange"]);
    return React.createElement("label", { className: `${name}__item ${props.className}`, key: value },
        React.createElement("input", { value: value, checked: checked, onChange: onChange, className: `${name}__input`, type: "radio" }),
        "\u00A0",
        label);
};
const RadioInput = styled_components_1.default(RadioInputComponent) `
    display: block;
    padding: 2px 0px;
`;
exports.default = RadioInput;
//# sourceMappingURL=input.js.map