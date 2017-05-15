"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var Chrome_1 = require("react-color/lib/components/chrome/Chrome");

var ColorPicker = function (_React$Component) {
    _inherits(ColorPicker, _React$Component);

    function ColorPicker(props) {
        _classCallCheck(this, ColorPicker);

        var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

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

    _createClass(ColorPicker, [{
        key: "renderInvalid",
        value: function renderInvalid() {
            if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
                return React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid);
            }
        }
    }, {
        key: "handleClick",
        value: function handleClick(evt) {
            evt.preventDefault();
            this.setState({ displayColorPicker: !this.state.displayColorPicker });
        }
    }, {
        key: "handleClose",
        value: function handleClose(evt) {
            evt.preventDefault();
            this.setState({ displayColorPicker: false });
        }
    }, {
        key: "handleChange",
        value: function handleChange(evt) {
            return false;
        }
    }, {
        key: "handleChanged",
        value: function handleChanged(evt) {
            this.setState({ color: evt.rgb });
            return this.props.input.onChange(evt);
        }
    }, {
        key: "renderPicker",
        value: function renderPicker() {
            return React.createElement("div", { className: this.name + "__popover" }, React.createElement("div", { className: this.name + "__cover", onClick: this.handleClose }), React.createElement(Chrome_1.default, { color: this.state.color, onChange: this.handleChange.bind(this), onChangeComplete: this.handleChanged.bind(this) }));
        }
    }, {
        key: "renderItem",
        value: function renderItem() {
            var color = this.state.color;
            var input = this.props.input;

            var background = typeof color == "string" ? "#" + color.substring(0, 6) : "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
            var inputId = this.props.meta.form + "-" + input.name;
            return React.createElement("div", { className: this.name + "__picker " + this.form + "__input" }, React.createElement("input", { id: inputId, type: "hidden", name: input.name, value: background }), React.createElement("div", { className: this.name + "__colorbox", style: { background: background }, onClick: this.handleClick }), this.state.displayColorPicker && this.renderPicker());
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                disabled = _props.disabled,
                required = _props.required,
                addClass = _props.addClass,
                style = _props.style,
                labels = _props.labels,
                meta = _props.meta;

            return React.createElement("div", { className: this.name + " " + (disabled && this.name + "--" + disabled) + "\n                             " + (required && this.name + "--" + required) + "\n                             " + (addClass ? addClass : "") + "\n                             " + this.form + "__group\n                             " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : '') + "\n                          ", title: labels.title, style: style }, this.renderInvalid(), React.createElement("label", { className: this.name + "__label " + this.form + "__label" }, labels.main), this.renderItem());
        }
    }]);

    return ColorPicker;
}(React.Component);

ColorPicker.defaultProps = {
    disabled: false,
    required: false,
    style: null,
    addClass: "",
    color: { r: 0, g: 0, b: 0, a: 1 },
    input: {
        checked: false,
        name: "",
        onBlur: function onBlur(value) {},
        onChange: function onChange(value) {},
        onDragStart: function onDragStart(value) {},
        onDrop: function onDrop(value) {},
        onFocus: function onFocus(value) {},
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