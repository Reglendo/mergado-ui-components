"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");
var Toast_1 = require("./Toast");
var unique_id_1 = require("../../helpers/unique_id");

var Toasts = function (_React$Component) {
    _inherits(Toasts, _React$Component);

    function Toasts(props) {
        _classCallCheck(this, Toasts);

        var _this = _possibleConstructorReturn(this, (Toasts.__proto__ || Object.getPrototypeOf(Toasts)).call(this, props));

        _this.name = config_1.prefix + "toasts-container";
        _this.state = {
            toasts: []
        };
        return _this;
    }

    _createClass(Toasts, [{
        key: "isPaused",
        value: function isPaused() {
            return this.props.paused;
        }
    }, {
        key: "renderToasts",
        value: function renderToasts() {
            var _this2 = this;

            return this.props.toasts.map(function (toast) {
                return React.createElement("div", { key: unique_id_1.default(), className: _this2.name + "__item" }, React.createElement(Toast_1.default, Object.assign({ isPaused: _this2.isPaused.bind(_this2) }, toast.props)));
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", { className: "" + this.name, style: this.props.style }, React.createElement("div", { className: this.name + "__wrapper" }, this.renderToasts()));
        }
    }]);

    return Toasts;
}(React.Component);

Toasts.defaultProps = {
    toasts: [],
    paused: false,
    style: {}
};
exports.default = Toasts;
//# sourceMappingURL=index.js.map