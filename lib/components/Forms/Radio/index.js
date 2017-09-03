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
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
const input_1 = require("./input");
class Radio extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-radio";
    }
    renderInputs() {
        const { input, meta, labels } = this.props;
        return this.props.items.map((obj) => {
            return (React.createElement(input_1.default, { name: this.name, label: obj.label, value: obj.value, key: obj.value, checked: obj.value == input.value, onChange: input.onChange }));
        });
    }
    render() {
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return (React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }), this.renderInputs()));
    }
}
Radio.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { items: [] });
exports.default = Radio;
//# sourceMappingURL=index.js.map