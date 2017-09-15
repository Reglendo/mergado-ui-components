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
const config_1 = require("../../../config");
const Field_1 = require("../../../components/Forms/Field");
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "colorpicker";
        this.state = {
            displayColorPicker: false,
            color: props.color,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClick(evt) {
        evt.preventDefault();
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    }
    handleClose(evt) {
        evt.preventDefault();
        this.setState({ displayColorPicker: false });
    }
    handleChange(evt) {
        return false;
    }
    handleChanged(evt) {
        this.setState({ color: evt.rgb });
        return this.props.input.onChange(evt.rgb);
    }
    renderPicker() {
        return (React.createElement(Popover, { className: `${this.name}__popover` },
            React.createElement(Cover, { className: `${this.name}__cover`, onClick: this.handleClose })));
    }
    render() {
        const { color } = this.state;
        const { input, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const background = `rgba(${color.r},${color.g},${color.b},${color.a})`;
        return (React.createElement(StyledField, Object.assign({}, props, { name: this.name }),
            React.createElement("input", Object.assign({}, input, { type: "hidden", value: background })),
            React.createElement(InputColor, { value: "#000000", defaultValue: "#345678", onChange: this.handleChange.bind(this) })));
    }
}
ColorPicker.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { color: { r: 0, g: 0, b: 0, a: 1 } });
const StyledField = glamorous_1.default(Field_1.Field)({
    display: "inline-block",
    width: "100%",
    "& .m-input-color": {
        position: "relative",
        display: "inline-block",
        width: "49px",
        height: "24px",
        padding: "4px",
        paddingRight: "15px",
        backgroundColor: "#ffffff",
        border: "1px solid #bebebe",
        borderRadius: "3px",
        userSelect: "none",
    }
}, props => {
    const theme = props.theme;
    return {
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