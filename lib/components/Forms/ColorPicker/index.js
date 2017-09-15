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
const InputColor = require("react-input-color");
const glamorous_1 = require("glamorous");
const debounce = require("lodash.debounce");
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "colorpicker";
        const color = (typeof props.color == 'string' || props.color instanceof String)
            ? props.color
            : `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`;
        this.state = {
            displayColorPicker: false,
            color,
        };
        this.handleChanged = debounce(this.handleChanged.bind(this), 200);
    }
    handleChanged(evt) {
        this.setState({ color: evt });
        return this.props.input.onChange(evt);
    }
    render() {
        const { color } = this.state;
        const { input, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const background = `${color}`;
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        return (React.createElement(StyledField, Object.assign({}, props, { name: this.name, "aria-invalid": isInvalid ? 1 : 0 }),
            React.createElement("input", Object.assign({}, input, { type: "hidden", value: background })),
            React.createElement(InputColor, { value: color, defaultValue: "#345678", onChange: this.handleChanged })));
    }
}
ColorPicker.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { color: "#000000" });
const StyledField = glamorous_1.default(Field_1.Field)({
    display: "inline-block",
    width: "100%",
    "& .muk-form__group--invalid": {
        fontSize: "0",
    },
    "& .m-input-color": {
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "40px",
        padding: "5px",
        backgroundColor: "#ffffff",
        userSelect: "none",
        transition: "border-color 0.2s",
        willChange: "border-color",
    }
}, props => {
    const theme = props.theme;
    return {
        "& .m-input-color": {
            borderRadius: theme.radius,
            borderColor: theme.decoration,
            border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
            ":active,:focus": {
                border: `${theme.input_border_active} !important`,
            }
        },
        "& .muk-form__group--invalid .muk-colorpicker__colorbox": {
            borderColor: `${theme.red} !important`,
        }
    };
});
const ColorBox = glamorous_1.default.div({
    cursor: "pointer",
    background: "white",
    padding: "5px",
}, props => {
    const theme = props.theme;
    return {
        border: `1px solid ${theme.decoration}`,
        borderRadius: theme.radius,
    };
});
const Popover = glamorous_1.default.div({
    position: "absolute",
    zIndex: 200,
});
const Cover = glamorous_1.default.div({
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
});
exports.default = ColorPicker;
//# sourceMappingURL=index.js.map