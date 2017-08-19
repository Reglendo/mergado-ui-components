"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    overflow: hidden;\n"], ["\n    display: inline-block;\n    overflow: hidden;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin: 0px;\n    border-radius: 80%;\n    box-sizing: border-box;\n    position: relative;\n    border-style: solid;\n    border-width: ", ";\n    border-color: rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8);\n    transform: translateZ(0);\n    animation: spin 1.2s infinite linear;\n    vertical-align: top;\n    @keyframes spin {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n    }\n"], ["\n    display: inline-block;\n    margin: 0px;\n    border-radius: 80%;\n    box-sizing: border-box;\n    position: relative;\n    border-style: solid;\n    border-width: ", ";\n    border-color: rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8);\n    transform: translateZ(0);\n    animation: spin 1.2s infinite linear;\n    vertical-align: top;\n    @keyframes spin {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n    }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    border-width: 12px;\n    box-sizing: border-box;\n    border-style: solid;\n    border-color: ", " ", " ", " ", ";\n\n    animation: pulse 10s linear infinite;\n    position: relative;\n\n    .", "spinner__content {\n        max-width: 0;\n        max-height: 0;\n        overflow: hidden;\n    }\n\n    @keyframes pulse {\n        0% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n        25% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n        50% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n        75% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n        100% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n    }\n"], ["\n    border-width: 12px;\n    box-sizing: border-box;\n    border-style: solid;\n    border-color: ", " ", " ", " ", ";\n\n    animation: pulse 10s linear infinite;\n    position: relative;\n\n    .", "spinner__content {\n        max-width: 0;\n        max-height: 0;\n        overflow: hidden;\n    }\n\n    @keyframes pulse {\n        0% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n        25% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n        50% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n        75% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n        100% {\n            border-left-color: ", ";\n            border-bottom-color: ", ";\n            border-right-color: ", ";\n            border-top-color: ", ";\n        }\n    }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n"], ["\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");
var styled_components_1 = require("styled-components");
/* <style> */
var Component = styled_components_1.default.div(_templateObject);
var Wrapper = styled_components_1.default.div(_templateObject2, function (props) {
    return props.type === "dashed" || props.type === "dotted" ? "0.1em" : "0.2em";
});
var colors = {
    left: "#7fba2c",
    bottom: "#007b20",
    right: "#00a9b8",
    top: "transparent"
};
var Mergado = Wrapper.extend(_templateObject3, colors.top, colors.left, colors.right, colors.bottom, config_1.prefix, colors.left, colors.bottom, colors.right, colors.top, colors.right, colors.top, colors.left, colors.bottom, colors.bottom, colors.left, colors.top, colors.right, colors.top, colors.right, colors.bottom, colors.left, colors.left, colors.bottom, colors.right, colors.top);
var Content = styled_components_1.default.div(_templateObject4);
/* </style> */

var Spinner = function (_React$Component) {
    _inherits(Spinner, _React$Component);

    function Spinner(props) {
        _classCallCheck(this, Spinner);

        var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

        _this.name = config_1.prefix + "spinner";
        _this.state = {
            loaded: false
        };
        return _this;
    }

    _createClass(Spinner, [{
        key: "updateState",
        value: function updateState(props) {
            var loaded = this.state.loaded;
            if (props.loaded) {
                loaded = !!props.loaded;
            }
            this.setState({
                loaded: loaded
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateState(this.props);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.updateState(nextProps);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.loaded) {
                return React.createElement("span", { style: { opacity: 1 } }, this.props.children);
            }
            var _props = this.props,
                size = _props.size,
                type = _props.type,
                color = _props.color,
                speed = _props.speed;
            // TODO: refactor with styled-components

            var defaultStyle = {
                width: size,
                height: size,
                borderColor: "rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8)",
                fontSize: size,
                animationDuration: 1.2 / speed + "s"
            };
            var containerStyle = {
                width: size,
                height: size
            };
            if (color === "black") {
                defaultStyle.borderColor = "rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)";
            } else if (color === "green") {
                defaultStyle.borderColor = "rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)";
            } else if (color === "blue") {
                defaultStyle.borderColor = "\n                                rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)\n                                ";
            }
            if (type === "dashed" || type === "dotted") {
                defaultStyle.borderStyle = type;
            } else if (type === "mergado") {
                defaultStyle = { borderWidth: size / 2 };
                defaultStyle.animationDuration = 10 / speed + "s";
            }
            var object = Object;
            var style = object.assign(defaultStyle, this.props.style);
            var WrapperType = this.props.type === "mergado" ? Mergado : Wrapper;
            return React.createElement(Component, { className: this.name + " " + this.name + "--" + this.props.type, style: containerStyle }, React.createElement(WrapperType, { type: this.props.type, className: this.name + "__wrapper", style: style }, React.createElement(Content, { className: this.name + "__content", style: { opacity: 0 } }, this.props.children)));
        }
    }]);

    return Spinner;
}(React.Component);

Spinner.defaultProps = {
    type: "default",
    size: 30,
    loaded: false,
    color: "white",
    style: {},
    speed: 1
};
exports.default = Spinner;
//# sourceMappingURL=index.js.map