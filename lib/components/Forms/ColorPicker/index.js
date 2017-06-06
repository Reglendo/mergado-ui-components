"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var Chrome_1 = require("react-color/lib/components/chrome/Chrome");
var MUK = require("../input");

var ColorPicker = function (_MUK$InputComponent) {
    _inherits(ColorPicker, _MUK$InputComponent);

    function ColorPicker(props) {
        _classCallCheck(this, ColorPicker);

        var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

        _this.name = config_1.prefix + "colorpicker";
        _this.state = {
            displayColorPicker: false,
            color: props.color
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    _createClass(ColorPicker, [{
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
            return this.props.input.onChange(evt.rgb);
        }
    }, {
        key: "renderPicker",
        value: function renderPicker() {
            return React.createElement("div", { className: this.name + "__popover" }, React.createElement("div", { className: this.name + "__cover", onClick: this.handleClose }), React.createElement(Chrome_1.default, { color: this.state.color, onChange: this.handleChange.bind(this), onChangeComplete: this.handleChanged.bind(this) }));
        }
    }, {
        key: "renderInput",
        value: function renderInput(className, props) {
            var color = this.state.color;
            var _props = this.props,
                input = _props.input,
                meta = _props.meta;

            var background = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
            return React.createElement("div", { className: this.name + "__picker " + this.form + "__input " + className }, React.createElement("input", Object.assign({}, input, { type: "hidden", value: background })), React.createElement("div", { className: this.name + "__colorbox", style: { background: background }, onClick: this.handleClick }), this.state.displayColorPicker && this.renderPicker());
        }
    }, {
        key: "renderLabel",
        value: function renderLabel() {
            return this.props.labels.main;
        }
    }]);

    return ColorPicker;
}(MUK.InputComponent);

ColorPicker.defaultProps = Object.assign({}, MUK.defaultProps, { color: { r: 0, g: 0, b: 0, a: 1 } });
exports.default = ColorPicker;
//# sourceMappingURL=index.js.map