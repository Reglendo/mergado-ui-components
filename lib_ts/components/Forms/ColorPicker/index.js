"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Chrome_1 = require("react-color/lib/components/chrome/Chrome");
const MUK = require("components/Forms/input");
class ColorPicker extends MUK.InputComponent {
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
        return (React.createElement("div", { className: `${this.name}__popover` },
            React.createElement("div", { className: `${this.name}__cover`, onClick: this.handleClose }),
            React.createElement(Chrome_1.default, { color: this.state.color, onChange: this.handleChange.bind(this), onChangeComplete: this.handleChanged.bind(this) })));
    }
    renderInput(className, props) {
        const { color } = this.state;
        const { input, meta } = this.props;
        const background = typeof color === "string"
            ? "#" + color.substring(0, 6)
            : `rgba(${color.r},${color.g},${color.b},${color.a})`;
        const inputId = `${meta.form}-${input.name}`;
        return (React.createElement("div", { className: `${this.name}__picker ${this.form}__input` },
            React.createElement("input", { id: inputId, type: "hidden", name: input.name, value: background }),
            React.createElement("div", { className: `${this.name}__colorbox`, style: { background }, onClick: this.handleClick }),
            this.state.displayColorPicker && this.renderPicker()));
    }
    renderLabel() {
        return this.props.labels.main;
    }
}
ColorPicker.defaultProps = Object.assign({}, MUK.defaultProps, { color: { r: 0, g: 0, b: 0, a: 1 } });
exports.default = ColorPicker;
//# sourceMappingURL=index.js.map