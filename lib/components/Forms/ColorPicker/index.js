"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("../../../config");
const Chrome_1 = require("react-color/lib/components/chrome/Chrome");
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "colorpicker";
        this.form = config_1.prefix + "form";
        this.state = {
            displayColorPicker: false,
            color: props.color
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
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
        return this.props.input.onChange(evt);
    }
    renderPicker() {
        return (React.createElement("div", { className: `${this.name}__popover` },
            React.createElement("div", { className: `${this.name}__cover`, onClick: this.handleClose }),
            React.createElement(Chrome_1.default, { color: this.state.color, onChange: this.handleChange.bind(this), onChangeComplete: this.handleChanged.bind(this) })));
    }
    renderItem() {
        const { color } = this.state;
        const { input } = this.props;
        const background = typeof color == "string" ? "#" + color.substring(0, 6) : `rgba(${color.r},${color.g},${color.b},${color.a})`;
        const inputId = `${this.props.meta.form}-${input.name}`;
        return (React.createElement("div", { className: `${this.name}__picker ${this.form}__input` },
            React.createElement("input", { id: inputId, type: "hidden", name: input.name, value: background }),
            React.createElement("div", { className: `${this.name}__colorbox`, style: { background: background }, onClick: this.handleClick }),
            this.state.displayColorPicker && this.renderPicker()));
    }
    render() {
        const { disabled, required, addClass, style, labels, meta } = this.props;
        return (React.createElement("div", { className: `${this.name} ${disabled && this.name + `--` + disabled}
                             ${required && this.name + `--` + required}
                             ${addClass ? addClass : ``}
                             ${this.form}__group
                             ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ''}
                          `, title: labels.title, style: style },
            this.renderInvalid(),
            React.createElement("label", { className: `${this.name}__label ${this.form}__label` }, labels.main),
            this.renderItem()));
    }
}
ColorPicker.defaultProps = {
    disabled: false,
    required: false,
    style: null,
    addClass: null,
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
        value: ""
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
        warning: ""
    },
    labels: {
        main: null,
        invalid: "Invalid input",
        title: ""
    }
};
exports.default = ColorPicker;
//# sourceMappingURL=index.js.map