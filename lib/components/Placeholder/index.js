"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    position: relative;\n"], ["\n    position: relative;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    background: rgba(219, 203, 163, 0.25);\n    margin: auto;\n"], ["\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    background: rgba(219, 203, 163, 0.25);\n    margin: auto;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    display: table;\n    width: 100%;\n    height: 100%;\n"], ["\n    display: table;\n    width: 100%;\n    height: 100%;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle;\n"], ["\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle;\n"]);

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
var Shadow = styled_components_1.default.div(_templateObject2);
var Wrapper = styled_components_1.default.div(_templateObject3);
var Container = styled_components_1.default.div(_templateObject4);
/* </style> */

var Placeholder = function (_React$Component) {
    _inherits(Placeholder, _React$Component);

    function Placeholder() {
        _classCallCheck(this, Placeholder);

        var _this = _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).apply(this, arguments));

        _this.name = config_1.prefix + "placeholder";
        return _this;
    }

    _createClass(Placeholder, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                addClass = _props.addClass,
                style = _props.style,
                width = _props.width,
                height = _props.height;

            var className = this.name + " " + (addClass ? addClass : "");
            var object = Object;
            var styles = object.assign({}, style, { paddingBottom: height * 100 / width + "%" });
            return React.createElement(Component, { className: className, style: styles }, React.createElement(Shadow, { className: this.name + "__shadow" }, React.createElement(Wrapper, { className: this.name + "__wrapper" }, React.createElement(Container, { className: this.name + "__container" }, this.props.children))));
        }
    }]);

    return Placeholder;
}(React.Component);

Placeholder.defaultProps = {
    width: 100,
    height: 100,
    style: {},
    addClass: ""
};
exports.default = Placeholder;
//# sourceMappingURL=index.js.map