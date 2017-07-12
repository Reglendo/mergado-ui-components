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
const Field_1 = require("components/Forms/Field");
const styled_components_1 = require("styled-components");
const StyledTextarea = styled_components_1.default.textarea `
    height: ${props => props.height + "px"}
`;
class Textarea extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "textarea";
    }
    render() {
        const { input, labels } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return (React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }),
            React.createElement(StyledTextarea, Object.assign({}, input, { height: this.props.height, className: `${this.name}__input
                                ${config_1.form}__input--text
                                ${config_1.form}__input--textarea
                    `, placeholder: labels.placeholder }), input.value)));
    }
}
Textarea.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { height: 100 });
exports.default = Textarea;
//# sourceMappingURL=index.js.map