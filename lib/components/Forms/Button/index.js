"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var react_router_1 = require("react-router");

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

        _this.name = config_1.prefix + "button";
        _this.form = config_1.prefix + "form";
        return _this;
    }

    _createClass(Button, [{
        key: "renderHref",
        value: function renderHref() {
            var _props = this.props,
                link = _props.link,
                labels = _props.labels,
                icon = _props.icon,
                onClick = _props.onClick;

            return React.createElement("a", { href: link, className: this.name + "__item", onClick: onClick, title: labels.title }, icon, labels.main);
        }
    }, {
        key: "renderButton",
        value: function renderButton() {
            var _props2 = this.props,
                input = _props2.input,
                labels = _props2.labels,
                icon = _props2.icon,
                onClick = _props2.onClick;

            return React.createElement("button", Object.assign({ className: this.name + "__item", onClick: onClick, name: input.name, title: labels.title }, this.props.addProps), icon, labels.main);
        }
    }, {
        key: "renderLink",
        value: function renderLink() {
            var _props3 = this.props,
                link = _props3.link,
                labels = _props3.labels,
                icon = _props3.icon,
                onClick = _props3.onClick;

            return React.createElement(react_router_1.Link, { to: link, className: this.name + "__item", onClick: onClick, title: labels.title }, icon, labels.main);
        }
    }, {
        key: "renderSubmit",
        value: function renderSubmit() {
            var _props4 = this.props,
                meta = _props4.meta,
                input = _props4.input,
                labels = _props4.labels,
                onClick = _props4.onClick;

            var inputId = meta.form + "-" + input.name;
            return React.createElement("input", Object.assign({ type: "submit", className: this.name + "__item", value: "" + labels.main, id: inputId, name: input.name, title: labels.title, onClick: onClick }, this.props.addProps));
        }
    }, {
        key: "renderVoid",
        value: function renderVoid() {
            var _props5 = this.props,
                input = _props5.input,
                labels = _props5.labels,
                icon = _props5.icon,
                onClick = _props5.onClick;

            return React.createElement("span", { className: this.name + "__item", onClick: onClick, name: input.name, title: labels.title }, icon, labels.main);
        }
    }, {
        key: "render",
        value: function render() {
            var _props6 = this.props,
                type = _props6.type,
                color = _props6.color,
                state = _props6.state,
                size = _props6.size,
                addClass = _props6.addClass,
                meta = _props6.meta;

            return React.createElement("div", { className: this.name + " " + this.name + "--" + color + "\n                             " + (!this.props.labels.main ? this.name + "--notext" : "") + "\n                             " + (size ? this.name + "--" + size : "") + "\n                             " + (state ? this.name + "--" + state : "") + "\n                             " + (addClass ? addClass : "") + "\n                         ", title: this.props.labels.title, style: this.props.style }, type === 'button' && this.renderButton(), type === 'link' && this.renderLink(), type === 'submit' && this.renderSubmit(), type === 'void' && this.renderVoid(), type === 'href' && this.renderHref());
        }
    }]);

    return Button;
}(React.Component);

Button.defaultProps = {
    type: "button",
    onClick: function onClick(event) {
        return true;
    },
    icon: null,
    color: "blue",
    state: "",
    size: "",
    style: null,
    addClass: "",
    input: {
        checked: false,
        name: "",
        onBlur: function onBlur(value) {},
        onChange: function onChange(value) {},
        onDragStart: function onDragStart(value) {},
        onDrop: function onDrop(value) {},
        onFocus: function onFocus(value) {},
        value: ""
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: ""
    },
    labels: {
        main: null,
        invalid: "Invalid input",
        title: ""
    }
};
exports.default = Button;
//# sourceMappingURL=index.js.map