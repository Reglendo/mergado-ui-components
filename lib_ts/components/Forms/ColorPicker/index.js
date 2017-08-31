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
const Chrome_1 = require("react-color/lib/components/chrome/Chrome");
const Field_1 = require("components/Forms/Field");
const styled_components_1 = require("styled-components");
const StyledField = styled_components_1.default(Field_1.Field) `
    display: inline-block;
    width: 100%;
`;
const ColorBox = styled_components_1.default.div `
    border: 5px solid white;
    height: 34px;
    border-radius: 2px;
    cursor: pointer;
    background: white;
    padding: 5px;
    border-radius: 1px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1);
    outline: 1px solid #dbcba3;
`;
const Popover = styled_components_1.default.div `
    position: absolute;
    z-index: 200;
`;
const Cover = styled_components_1.default.div `
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`;
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
            React.createElement(Cover, { className: `${this.name}__cover`, onClick: this.handleClose }),
            React.createElement(Chrome_1.default, { color: this.state.color, onChange: this.handleChange.bind(this), onChangeComplete: this.handleChanged.bind(this) })));
    }
    render() {
        const { color } = this.state;
        const { input, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const background = `rgba(${color.r},${color.g},${color.b},${color.a})`;
        return (React.createElement(StyledField, Object.assign({}, props, { name: this.name }),
            React.createElement("input", Object.assign({}, input, { type: "hidden", value: background })),
            React.createElement(ColorBox, { className: `${this.name}__colorbox ${this.props.className}`, style: { background }, onClick: this.handleClick }),
            this.state.displayColorPicker && this.renderPicker()));
    }
}
ColorPicker.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { color: { r: 0, g: 0, b: 0, a: 1 } });
exports.default = ColorPicker;
//# sourceMappingURL=index.js.map