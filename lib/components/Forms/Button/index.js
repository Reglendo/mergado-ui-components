"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var react_router_1 = require("react-router");
var MUK = require("../input");

var Button = function (_MUK$InputComponent) {
    _inherits(Button, _MUK$InputComponent);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

        _this.name = config_1.prefix + "button";
        return _this;
    }

    _createClass(Button, [{
        key: "renderHref",
        value: function renderHref(className, props) {
            var _props = this.props,
                link = _props.link,
                labels = _props.labels,
                icon = _props.icon,
                input = _props.input;

            return React.createElement("a", Object.assign({}, input, props, { href: link, className: this.name + "__item", title: labels.title }), icon, labels.main);
        }
    }, {
        key: "renderButton",
        value: function renderButton(className, props) {
            var _props2 = this.props,
                input = _props2.input,
                labels = _props2.labels,
                icon = _props2.icon;

            return React.createElement("button", Object.assign({}, input, props, { className: this.name + "__item " + (className ? className : ""), title: labels.title }), icon, labels.main);
        }
    }, {
        key: "renderLink",
        value: function renderLink(className, props) {
            var _props3 = this.props,
                link = _props3.link,
                labels = _props3.labels,
                icon = _props3.icon,
                input = _props3.input;

            return React.createElement(react_router_1.Link, Object.assign({}, props, { to: link, className: this.name + "__item " + (className ? className : ""), title: labels.title }), icon, labels.main);
        }
    }, {
        key: "renderSubmit",
        value: function renderSubmit(className, props) {
            var _props4 = this.props,
                meta = _props4.meta,
                input = _props4.input,
                labels = _props4.labels;

            return React.createElement("input", Object.assign({}, input, { type: "submit", className: this.name + "__item " + (className ? className : ""), value: "" + labels.main, title: labels.title }));
        }
    }, {
        key: "renderVoid",
        value: function renderVoid(className, props) {
            var _props5 = this.props,
                input = _props5.input,
                labels = _props5.labels,
                icon = _props5.icon;

            return React.createElement("span", Object.assign({}, input, props, { className: this.name + "__item " + (className ? className : ""), title: labels.title }), icon, labels.main);
        }
    }, {
        key: "renderLabel",
        value: function renderLabel() {
            return React.createElement("span", null);
        }
    }, {
        key: "renderInput",
        value: function renderInput(className, props) {
            var _props6 = this.props,
                type = _props6.type,
                color = _props6.color,
                disabled = _props6.disabled,
                size = _props6.size,
                meta = _props6.meta;

            return React.createElement("div", { className: this.name + "--" + color + " " + (!this.props.labels.main ? this.name + "--notext" : "") + " " + (size ? this.name + "--" + size : "") + " " + (disabled ? this.name + "--disabled" : "") + " " }, type === "button" && this.renderButton(className, props), type === "link" && this.renderLink(className, props), type === "submit" && this.renderSubmit(className, props), type === "void" && this.renderVoid(className, props), type === "href" && this.renderHref(className, props));
        }
    }]);

    return Button;
}(MUK.InputComponent);

Button.defaultProps = Object.assign({}, MUK.defaultProps, { type: "button", icon: null, color: "blue", disabled: false, size: "" });
exports.default = Button;
//# sourceMappingURL=index.js.map