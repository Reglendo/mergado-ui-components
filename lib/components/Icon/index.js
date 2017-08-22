"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n"], ["\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    vertical-align: middle;\n    margin-left: 2px;\n    margin-right: 5px;\n"], ["\n    vertical-align: middle;\n    margin-left: 2px;\n    margin-right: 5px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    vertical-align: middle;\n"], ["\n    vertical-align: middle;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");
var styled_components_1 = require("styled-components");
/* <style> */
var Wrapper = styled_components_1.default.span(_templateObject);
var Text = styled_components_1.default.span(_templateObject2);
var Image = styled_components_1.default.svg(_templateObject3);
/* </style> */
var getIcon = function getIcon(name) {
    return Promise.resolve().then(function () {
        return require("@reglendo/mergado-ui-icons/lib/icons/const/" + name + ".js");
    });
};

var Icon = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon(props) {
        _classCallCheck(this, Icon);

        var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

        _this.name = config_1.prefix + "icon";
        _this.state = {
            icon: React.createElement("span", null)
        };
        return _this;
    }

    _createClass(Icon, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var iconName = void 0;
            if (this.props.name) {
                iconName = this.props.name;
            } else {
                iconName = "Icon" + ("" + this.props.type).replace(/\b(\w)/g, function (s) {
                    return s.toUpperCase();
                }).replace("-", "");
            }
            getIcon(iconName).then(function (module) {
                _this2.setState({
                    icon: module[iconName]
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var className = this.name + " " + this.name + "--" + this.props.type + " " + this.props.addClass;
            return React.createElement(Wrapper, { className: className, style: this.props.style, title: this.props.title }, React.createElement(Image, { className: this.name + "__image", preserveAspectRatio: "xMidYMid meet", fill: "currentColor", height: this.props.size, width: this.props.size, viewBox: this.props.viewBox }, this.state.icon), this.props.text ? React.createElement(Text, { className: this.name + "__text" }, this.props.text) : null);
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
    title: "",
    addClass: "",
    viewBox: "0 0 40 40"
};
exports.default = Icon;
//# sourceMappingURL=index.js.map