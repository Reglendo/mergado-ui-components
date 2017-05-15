"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
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
            return React.createElement("li", { className: "" + className, style: style }, React.createElement("a", { className: this.name + "__step", onClick: onClick }, link));
        }
    }]);

    return WizardStep;
}(React.Component);

WizardStep.defaultProps = {
    active: false,
    link: '',
    style: {},
    onClick: function onClick() {}
};
exports.default = WizardStep;
//# sourceMappingURL=index.js.map