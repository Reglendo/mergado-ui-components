"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../../config");
var Chrome_1 = require("react-color/lib/components/chrome/Chrome");
var ColorPicker = (function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "colorpicker";
        _this.form = config_1.prefix + "form";
        _this.state = {
            displayColorPicker: false,
            color: props.color
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }
    ColorPicker.prototype.renderInvalid = function () {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid));
        }
    };
    ColorPicker.prototype.handleClick = function (evt) {
        evt.preventDefault();
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };
    ColorPicker.prototype.handleClose = function (evt) {
        evt.preventDefault();
        this.setState({ displayColorPicker: false });
    };
    ColorPicker.prototype.handleChange = function (evt) {
        return false;
    };
    ColorPicker.prototype.handleChanged = function (evt) {
        this.setState({ color: evt.rgb });
        return this.props.input.onChange(evt);
    };
    ColorPicker.prototype.renderPicker = function () {
        return (React.createElement("div", { className: this.name + "__popover" },
            React.createElement("div", { className: this.name + "__cover", onClick: this.handleClose }),
            React.createElement(Chrome_1["default"], { color: this.state.color, onChange: this.handleChange.bind(this), onChangeComplete: this.handleChanged.bind(this) })));
    };
    ColorPicker.prototype.renderItem = function () {
        var color = this.state.color;
        var input = this.props.input;
        var background = typeof color == "string" ? "#" + color.substring(0, 6) : "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
        var inputId = this.props.meta.form + "-" + input.name;
        return (React.createElement("div", { className: this.name + "__picker " + this.form + "__input" },
            React.createElement("input", { id: inputId, type: "hidden", name: input.name, value: background }),
            React.createElement("div", { className: this.name + "__colorbox", style: { background: background }, onClick: this.handleClick }),
            this.state.displayColorPicker && this.renderPicker()));
    };
    ColorPicker.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, required = _a.required, addClass = _a.addClass, style = _a.style, labels = _a.labels, meta = _a.meta;
        return (React.createElement("div", { className: this.name + " " + (disabled && this.name + "--" + disabled) + "\n                             " + (required && this.name + "--" + required) + "\n                             " + (addClass ? addClass : "") + "\n                             " + this.form + "__group\n                             " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : '') + "\n                          ", title: labels.title, style: style },
            this.renderInvalid(),
            React.createElement("label", { className: this.name + "__label " + this.form + "__label" }, labels.main),
            this.renderItem()));
    };
    return ColorPicker;
}(React.Component));
ColorPicker.defaultProps = {
    disabled: false,
    required: false,
    style: null,
    addClass: null,
    input: {
        checked: false,
        name: "",
        onBlur: function (value) {
        },
        onChange: function (value) {
        },
        onDragStart: function (value) {
        },
        onDrop: function (value) {
        },
        onFocus: function (value) {
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
exports["default"] = ColorPicker;
//# sourceMappingURL=index.js.map