"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Chrome_1 = require("react-color/lib/components/chrome/Chrome");
const Input_1 = require("components/Forms/Input");
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "colorpicker";
        this.form = config_1.prefix + "form";
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
    renderItem() {
        const { color } = this.state;
        const { input } = this.props;
        const background = typeof color === "string"
            ? "#" + color.substring(0, 6)
            : `rgba(${color.r},${color.g},${color.b},${color.a})`;
        const inputId = `${this.props.meta.form}-${input.name}`;
        return (React.createElement("div", { className: `${this.name}__picker ${this.form}__input` },
            React.createElement("input", { id: inputId, type: "hidden", name: input.name, value: background }),
            React.createElement("div", { className: `${this.name}__colorbox`, style: { background }, onClick: this.handleClick }),
            this.state.displayColorPicker && this.renderPicker()));
    }
    render() {
        const { disabled, required, addClass, style, labels, meta } = this.props;
        const props = this.props;
        return (React.createElement(Input_1.Input, Object.assign({ name: this.name }, props),
            React.createElement(Input_1.InputError, Object.assign({}, props)),
            React.createElement(Input_1.InputLabel, { name: this.name }, labels.main),
            this.renderItem()));
    }
}
ColorPicker.defaultProps = {
    disabled: false,
    required: false,
    style: null,
    addClass: "",
    color: { r: 0, g: 0, b: 0, a: 1 },
    input: {
        checked: false,
        name: "",
        onBlur: (value) => {
        },
        onChange: (value) => {
        },
        onDragStart: (value) => {
        },
        onDrop: (value) => {
        },
        onFocus: (value) => {
        },
        value: "",
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: "",
    },
    labels: {
        main: null,
        invalid: "Invalid input",
        title: "",
    },
};
exports.default = ColorPicker;
//# sourceMappingURL=index.js.map