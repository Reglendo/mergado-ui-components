"use strict";

var _templateObject = _taggedTemplateLiteral(["\n    display: block;\n    padding: 2px 0px;\n"], ["\n    display: block;\n    padding: 2px 0px;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var RadioInputComponent = function RadioInputComponent(_a) {
    var name = _a.name,
        value = _a.value,
        checked = _a.checked,
        label = _a.label,
        onChange = _a.onChange,
        props = __rest(_a, ["name", "value", "checked", "label", "onChange"]);

    return React.createElement("label", { className: name + "__item " + props.className, key: value }, React.createElement("input", { value: value, checked: checked, onChange: onChange, className: name + "__input", type: "radio" }), "\xA0", label);
};
var RadioInput = styled_components_1.default(RadioInputComponent)(_templateObject);
exports.default = RadioInput;
//# sourceMappingURL=input.js.map