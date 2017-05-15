"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");

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

            var classList = this.name + "__list";
            return React.createElement("ul", { className: classList }, links);
        }
    }, {
        key: "render",
        value: function render() {
            var className = "" + this.name;
            var classWrapper = this.name + "__wrapper\"";
            return React.createElement("nav", { className: className, style: this.props.style }, React.createElement("div", { className: classWrapper }, this.renderLinks()));
        }
    }]);

    return TopNav;
}(React.Component);

TopNav.defaultProps = {
    links: [],
    style: {}
};
exports.default = TopNav;
//# sourceMappingURL=index.js.map