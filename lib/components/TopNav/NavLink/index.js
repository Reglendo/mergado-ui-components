"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    float: left;\n    margin-right: 1em;\n    list-style-type: none;\n    a {\n        padding: 5px 10px;\n        background: ", ";\n        display: inline-block;\n        cursor: pointer;\n    }\n    a,a:visited {\n        color: #333;\n        text-decoration: none;\n    }\n\n    a:active, a:focus, a:hover {\n        text-decoration: none;\n        background: rgba(0,0,0,0.25);\n    }\n"], ["\n    float: left;\n    margin-right: 1em;\n    list-style-type: none;\n    a {\n        padding: 5px 10px;\n        background: ", ";\n        display: inline-block;\n        cursor: pointer;\n    }\n    a,a:visited {\n        color: #333;\n        text-decoration: none;\n    }\n\n    a:active, a:focus, a:hover {\n        text-decoration: none;\n        background: rgba(0,0,0,0.25);\n    }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var styled_components_1 = require("styled-components");
/* <style> */
var Link = styled_components_1.default.li(_templateObject, function (props) {
    return props.selected ? "rgba(0,0,0,0.25)" : "transparent";
});
/**
 * disable-styleguide
 */

var NavLink = function (_React$Component) {
    _inherits(NavLink, _React$Component);

    function NavLink() {
        _classCallCheck(this, NavLink);

        var _this = _possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).apply(this, arguments));

        _this.name = config_1.prefix + "top_nav__item";
        return _this;
    }

    _createClass(NavLink, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                link = _props.link,
                active = _props.active;

            var className = "" + this.name;
            if (active) {
                className += " " + this.name + "--active";
            }
            return React.createElement(Link, { className: "" + className, selected: this.props.active, style: this.props.style }, link);
        }
    }]);

    return NavLink;
}(React.Component);

NavLink.defaultProps = {
    active: false,
    link: React.createElement("a", { href: "#" }),
    style: {}
};
exports.default = NavLink;
//# sourceMappingURL=index.js.map