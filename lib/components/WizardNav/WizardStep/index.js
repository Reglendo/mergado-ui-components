"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    background: ", ";\n\n    &:first-of-type {\n        .", "wizard_nav__item__step {\n            margin-left: 20px;\n        }\n    }\n\n\n    &:after {\n          content: '';\n          display: inline-block;\n          width: 32px;\n          height: 32px;\n          transform: rotate(-45deg);\n          background: ", ";\n          vertical-align: middle;\n          border: solid #777;\n          border-width: 0 3px 3px 0;\n          margin-right: -14px;\n          margin-left: -14px;\n          clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%);\n          position: relative;\n          z-index: 1;\n    }\n\n"], ["\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    background: ", ";\n\n    &:first-of-type {\n        .", "wizard_nav__item__step {\n            margin-left: 20px;\n        }\n    }\n\n\n    &:after {\n          content: '';\n          display: inline-block;\n          width: 32px;\n          height: 32px;\n          transform: rotate(-45deg);\n          background: ", ";\n          vertical-align: middle;\n          border: solid #777;\n          border-width: 0 3px 3px 0;\n          margin-right: -14px;\n          margin-left: -14px;\n          clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%);\n          position: relative;\n          z-index: 1;\n    }\n\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    font-size: 13px;\n    display: inline-block;\n    height: 36px;\n    line-height: 36px;\n    color: #fff;\n    margin-left: 35px;\n    min-width: 60px;\n    position: relative;\n    z-index: 2;\n\n    &:hover,&:focus,&:active {\n        text-decoration: none;\n        color: #fff;\n    }\n\n\n"], ["\n    font-size: 13px;\n    display: inline-block;\n    height: 36px;\n    line-height: 36px;\n    color: #fff;\n    margin-left: 35px;\n    min-width: 60px;\n    position: relative;\n    z-index: 2;\n\n    &:hover,&:focus,&:active {\n        text-decoration: none;\n        color: #fff;\n    }\n\n\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var styled_components_1 = require("styled-components");
/* <style> */
var Item = styled_components_1.default.li(_templateObject, function (props) {
    return props.selected ? "#00a9b8" : "transparent";
}, config_1.prefix, function (props) {
    return props.selected ? "#00a9b8" : "777";
});
var Link = styled_components_1.default.a(_templateObject2);
/* </style> */
/**
 * disable-styleguide
 */

var WizardStep = function (_React$Component) {
    _inherits(WizardStep, _React$Component);

    function WizardStep() {
        _classCallCheck(this, WizardStep);

        var _this = _possibleConstructorReturn(this, (WizardStep.__proto__ || Object.getPrototypeOf(WizardStep)).apply(this, arguments));

        _this.name = config_1.prefix + "wizard_nav__item";
        return _this;
    }

    _createClass(WizardStep, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                link = _props.link,
                active = _props.active,
                style = _props.style,
                onClick = _props.onClick;

            var className = "" + this.name;
            if (active) {
                className += " " + this.name + "--active";
            }
            return React.createElement(Item, { className: "" + className, style: style, selected: active }, React.createElement(Link, { className: this.name + "__step", onClick: onClick }, link));
        }
    }]);

    return WizardStep;
}(React.Component);

WizardStep.defaultProps = {
    active: false,
    link: "",
    style: {},
    onClick: function onClick() {}
};
exports.default = WizardStep;
//# sourceMappingURL=index.js.map