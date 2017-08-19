"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    display: table;\n    margin: 10px 0;\n    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);\n    transition: opacity 0.5s;\n    transform: translate3d(0,0,0);\n    will-change: opacity;\n    opacity: ", "\n"], ["\n    width: 100%;\n    display: table;\n    margin: 10px 0;\n    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);\n    transition: opacity 0.5s;\n    transform: translate3d(0,0,0);\n    will-change: opacity;\n    opacity: ", "\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid #dbcba3;\n    box-sizing: border-box;\n    display: table-row;\n    color: ", ";\n"], ["\n    background: ", ";\n    border: 1px solid #dbcba3;\n    box-sizing: border-box;\n    display: table-row;\n    color: ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    width: 20px;\n    padding: 0 10px;\n    display: table-cell;\n    vertical-align: middle;\n"], ["\n    width: 20px;\n    padding: 0 10px;\n    display: table-cell;\n    vertical-align: middle;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    padding: 20px 0px;\n    box-sizing: border-box;\n    font-size: 16px;\n    text-align: left;\n    display: table-cell;\n    vertical-align: middle;\n"], ["\n    padding: 20px 0px;\n    box-sizing: border-box;\n    font-size: 16px;\n    text-align: left;\n    display: table-cell;\n    vertical-align: middle;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n"], ["\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n    text-decoration: none;\n    padding: 0 20px 0 10px;\n    width: 20px;\n    text-align: right;\n    vertical-align: middle;\n    display: table-cell !important;\n    .muk-button--nocolor {\n        margin-bottom: 0;\n    }\n    svg, path {\n        fill:  ", " !important;\n    }\n    button:focus {\n        outline: none;\n    }\n"], ["\n    text-decoration: none;\n    padding: 0 20px 0 10px;\n    width: 20px;\n    text-align: right;\n    vertical-align: middle;\n    display: table-cell !important;\n    .muk-button--nocolor {\n        margin-bottom: 0;\n    }\n    svg, path {\n        fill:  ", " !important;\n    }\n    button:focus {\n        outline: none;\n    }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var IconClose_1 = require("@reglendo/mergado-ui-icons/lib/icons/IconClose");
var unique_id_1 = require("../../../helpers/unique_id");
var styled_components_1 = require("styled-components");
var Button_1 = require("../../Forms/Button");
/* <style> */
var Wrapper = styled_components_1.default.div(_templateObject, function (props) {
    return props.hidden ? 0 : 1;
});
var Component = styled_components_1.default.div(_templateObject2, function (props) {
    switch (props.type) {
        case "success":
            return "#16c084";
        case "error":
            return "#e7434c";
        case "warning":
            return "#ff7f2a";
        case "inactive":
            return "#ccc";
        case "info":
        default:
            return "#fff";
    }
}, function (props) {
    return props.type === "info" || props.type === "inactive" ? "#333" : "white";
});
var Icon = styled_components_1.default.div(_templateObject3);
var Content = styled_components_1.default.div(_templateObject4);
var Close = styled_components_1.default.div(_templateObject5);
var CloseButton = styled_components_1.default.div(_templateObject6, function (props) {
    return props.type === "info" || props.type === "inactive" ? "#333" : "white";
});
/* </style> */

var Toast = function (_React$Component) {
    _inherits(Toast, _React$Component);

    function Toast(props) {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

        _this.name = config_1.prefix + "toast";
        _this.state = {
            visible: true,
            paused: false,
            secondsLeft: props.timeout / 1000
        };
        return _this;
    }

    _createClass(Toast, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.props.isPaused() !== true && this.props.timeout > 0) {
                this.countdown = setInterval(this.timer.bind(this), 1000);
            }
        }
    }, {
        key: "timer",
        value: function timer() {
            var secondsLeft = this.state.secondsLeft;

            if (secondsLeft <= 1) {
                this.removeToast();
                clearInterval(this.countdown);
            } else {
                if (secondsLeft <= 2) {
                    this.hideToast();
                }
                this.setState({
                    secondsLeft: secondsLeft > 0 ? secondsLeft - 1 : secondsLeft
                });
            }
        }
    }, {
        key: "hideToast",
        value: function hideToast() {
            this.setState({
                visible: false,
                paused: true,
                secondsLeft: 1
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.countdown);
        }
    }, {
        key: "removeToast",
        value: function removeToast() {
            this.refWrapper.style.display = "none";
        }
    }, {
        key: "onClose",
        value: function onClose(evt) {
            evt.preventDefault();
            if (this.props.onClose(this.props.id) === true) {
                this.hideToast();
                this.countdown = setInterval(this.timer.bind(this), 500);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(Wrapper, { innerRef: function innerRef(o) {
                    _this2.refWrapper = o;
                }, style: this.props.style, hidden: !this.state.visible, className: this.name + "__wrapper " + (this.state.visible ? "" : this.name + "--hidden") }, React.createElement(Component, { type: this.props.type, className: this.name + " " + this.name + "--" + this.props.type }, React.createElement(Icon, { className: this.name + "__icon" }, this.props.icon), React.createElement(Content, { className: this.name + "__content" }, this.props.text ? this.props.text.replace("%seconds%", this.state.secondsLeft + "s") : this.props.children), this.props.closeable && React.createElement(CloseButton, { type: this.props.type }, React.createElement(Button_1.default, { className: this.name + "__button", icon: React.createElement(IconClose_1.default, { style: { lineHeight: "40px" } }), color: "nocolor", size: "tiny", toastType: this.props.type, onClick: function onClick(evt) {
                    return _this2.onClose(evt);
                } }))));
        }
    }]);

    return Toast;
}(React.Component);

Toast.defaultProps = {
    id: unique_id_1.default(),
    text: "",
    type: "info",
    icon: null,
    isPaused: function isPaused() {
        return false;
    },
    onClose: function onClose() {
        return true;
    },
    timeout: 0,
    closeable: true,
    style: {}
};
exports.default = Toast;
//# sourceMappingURL=index.js.map