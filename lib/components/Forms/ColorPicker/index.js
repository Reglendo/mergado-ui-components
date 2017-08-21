"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 100%;\n"], ["\n    display: inline-block;\n    width: 100%;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    border: 5px solid white;\n    height: 34px;\n    border-radius: 2px;\n    cursor: pointer;\n    background: white;\n    padding: 5px;\n    border-radius: 1px;\n    box-shadow: 0 0 0 1px rgba(0,0,0,.1);\n"], ["\n    border: 5px solid white;\n    height: 34px;\n    border-radius: 2px;\n    cursor: pointer;\n    background: white;\n    padding: 5px;\n    border-radius: 1px;\n    box-shadow: 0 0 0 1px rgba(0,0,0,.1);\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    position: absolute;\n    z-index: 200;\n"], ["\n    position: absolute;\n    z-index: 200;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n"], ["\n    position: fixed;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var Chrome_1 = require("react-color/lib/components/chrome/Chrome");
var Field_1 = require("../Field");
var styled_components_1 = require("styled-components");
var StyledField = styled_components_1.default(Field_1.Field)(_templateObject);
var ColorBox = styled_components_1.default.div(_templateObject2);
var Popover = styled_components_1.default.div(_templateObject3);
var Cover = styled_components_1.default.div(_templateObject4);

var ColorPicker = function (_React$Component) {
    _inherits(ColorPicker, _React$Component);

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
            return React.createElement(Popover, { className: this.name + "__popover" }, React.createElement(Cover, { className: this.name + "__cover", onClick: this.handleClose }), React.createElement(Chrome_1.default, { color: this.state.color, onChange: this.handleChange.bind(this), onChangeComplete: this.handleChanged.bind(this) }));
        }
    }, {
        key: "render",
        value: function render() {
            var color = this.state.color;
            var _props = this.props,
                input = _props.input,
                meta = _props.meta;
            var _a = this.props,
                children = _a.children,
                props = __rest(_a, ["children"]);
            var background = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
            return React.createElement(StyledField, Object.assign({}, props, { name: this.name }), React.createElement("input", Object.assign({}, input, { type: "hidden", value: background })), React.createElement(ColorBox, { className: this.name + "__colorbox " + this.props.className, style: { background: background }, onClick: this.handleClick }), this.state.displayColorPicker && this.renderPicker());
        }
    }]);

    return ColorPicker;
}(React.Component);

ColorPicker.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { color: { r: 0, g: 0, b: 0, a: 1 } });
exports.default = ColorPicker;
//# sourceMappingURL=index.js.map