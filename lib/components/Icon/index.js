"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");
var Icons = require("mergado-ui-icons/lib");

var Icon = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        _classCallCheck(this, Icon);

        var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));

        _this.name = config_1.prefix + "icon";
        return _this;
    }

    _createClass(Icon, [{
        key: "render",
        value: function render() {
            var className = this.name + " " + this.name + "--" + this.props.type;
            var iconName = void 0;
            if (this.props.name) {
                iconName = this.props.name;
            } else {
                iconName = "Icon" + ("" + this.props.type).replace(/\b(\w)/g, function (s) {
                    return s.toUpperCase();
                }).replace("-", "");
            }
            var icon = Icons[iconName] ? Icons[iconName] : null;
            return React.createElement("span", { className: className, style: this.props.style, title: this.props.title }, React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: "xMidYMid meet", fill: "currentColor", height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" }, icon), this.props.text ? React.createElement("span", { className: this.name + "__text" }, this.props.text) : null);
        }
    }]);

    return Icon;
}(React.Component);

Icon.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {},
    name: "",
    text: "",
    title: ""
};
exports.default = Icon;
//# sourceMappingURL=index.js.map