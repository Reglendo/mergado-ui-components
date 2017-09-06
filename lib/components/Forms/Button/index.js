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
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
const types_1 = require("./types");
const StyledField = styled_components_1.default(Field_1.Field) `
    display: inline-block;
    vertical-align: top;
`;
class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "button";
    }
    render() {
        const { meta, input, labels, group } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return (React.createElement(StyledField, Object.assign({ className: `${this.name}--${props.color}
                                        ${!labels.main ? this.name + `--notext` : ``}
                                        ${props.size ? this.name + `--` + props.size : ``}
                                        ${this.name}--${props.type}
                                        ${props.disabled ? this.name + `--disabled` : ``}
                ` }, this.props, { name: this.name, label: "", labels: Object.assign({}, labels, { main: "" }), style: Object.assign({}, group.style, { marginBottom: 0 }) }),
            React.createElement(types_1.UniversalButton, Object.assign({}, this.props, { name: this.name }))));
    }
}
Button.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { type: "button", icon: null, color: "blue", disabled: false, size: "", secondary: false });
exports.default = Button;
//# sourceMappingURL=index.js.map