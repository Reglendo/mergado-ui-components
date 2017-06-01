"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");

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
            return React.createElement("div", { className: className, style: styles }, React.createElement("div", { className: this.name + "__shadow" }, React.createElement("div", { className: this.name + "__wrapper" }, React.createElement("div", { className: this.name + "__container" }, this.props.children))));
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