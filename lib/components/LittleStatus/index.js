"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    vertical-align: middle;\n"], ["\n    vertical-align: middle;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n    border-bottom: none;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 5px;\n    background-color: ", "\n"], ["\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n    border-bottom: none;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 5px;\n    background-color: ", "\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    vertical-align: middle;\n\n    a:hover {\n        text-decoration: none\n    }\n"], ["\n    vertical-align: middle;\n\n    a:hover {\n        text-decoration: none\n    }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");
var styled_components_1 = require("styled-components");
/* <style> */
var colors = {
    success: "#85bd3c",
    warning: "#FF9900",
    error: "#d00",
    inactive: "#888"
};
var Wrapper = styled_components_1.default.span(_templateObject);
var Indikator = styled_components_1.default.span(_templateObject2, function (props) {
    return colors[props.type];
});
var Text = styled_components_1.default.span(_templateObject3);
/* </style> */

var LittleStatus = function (_React$Component) {
    _inherits(LittleStatus, _React$Component);

    function LittleStatus() {
        _classCallCheck(this, LittleStatus);

        var _this = _possibleConstructorReturn(this, (LittleStatus.__proto__ || Object.getPrototypeOf(LittleStatus)).apply(this, arguments));

        _this.name = config_1.prefix + "little_status";
        return _this;
    }

    _createClass(LittleStatus, [{
        key: "render",
        value: function render() {
            var className = this.name + " " + this.name + "--" + this.props.type;
            var classIndikator = this.name + "__indikator tooltip";
            var classText = this.name + "__text";
            var text = this.props.text ? React.createElement(Text, { className: classText }, " ", this.props.text) : this.props.children;
            return React.createElement(Wrapper, { className: className, style: this.props.style }, React.createElement(Indikator, { type: this.props.type, className: classIndikator, title: this.props.title }), text);
        }
    }]);

    return LittleStatus;
}(React.Component);

LittleStatus.defaultProps = {
    title: "",
    type: "success",
    text: "",
    style: {}
};
exports.default = LittleStatus;
//# sourceMappingURL=index.js.map