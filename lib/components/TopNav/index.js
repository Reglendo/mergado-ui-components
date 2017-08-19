"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    background: #e5d7b6;\n    color: #333;\n    font-size: 11pt;\n    font-weight: bold;\n    padding: 10px 20px;\n"], ["\n    background: #e5d7b6;\n    color: #333;\n    font-size: 11pt;\n    font-weight: bold;\n    padding: 10px 20px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    margin: auto;\n"], ["\n    position: relative;\n    margin: auto;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");
var styled_components_1 = require("styled-components");
/* <style> */
var Component = styled_components_1.default.nav(_templateObject);
var Wrapper = styled_components_1.default.div(_templateObject2);
/* </style> */

var TopNav = function (_React$Component) {
    _inherits(TopNav, _React$Component);

    function TopNav() {
        _classCallCheck(this, TopNav);

        var _this = _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).apply(this, arguments));

        _this.name = config_1.prefix + "top_nav";
        return _this;
    }

    _createClass(TopNav, [{
        key: "renderLinks",
        value: function renderLinks() {
            var links = this.props.links;

            return React.createElement("ul", { className: this.name + "__list muk-helper-clearfix" }, links);
        }
    }, {
        key: "render",
        value: function render() {
            var className = this.name + " " + this.props.addClass;
            var classWrapper = this.name + "__wrapper\"";
            return React.createElement(Component, { className: className, style: this.props.style }, React.createElement(Wrapper, { className: classWrapper }, this.renderLinks()));
        }
    }]);

    return TopNav;
}(React.Component);

TopNav.defaultProps = {
    links: [],
    style: {},
    addClass: ""
};
exports.default = TopNav;
//# sourceMappingURL=index.js.map