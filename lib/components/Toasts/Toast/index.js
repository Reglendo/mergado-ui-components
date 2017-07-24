"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var IconClose_1 = require("mergado-ui-icons/lib/icons/IconClose");
var unique_id_1 = require("../../../helpers/unique_id");

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

            if (secondsLeft < 1) {
                this.hideToast();
                clearInterval(this.countdown);
            } else {
                this.setState({
                    visible: true,
                    paused: false,
                    secondsLeft: secondsLeft > 0 ? secondsLeft - 1 : secondsLeft
                });
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.countdown);
        }
    }, {
        key: "hideToast",
        value: function hideToast() {
            this.setState({
                visible: false,
                paused: true,
                secondsLeft: 0
            });
        }
    }, {
        key: "removeToast",
        value: function removeToast(evt) {
            evt.preventDefault();
            if (this.props.onClose(this.props.id) === true) {
                this.hideToast();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement("div", { style: this.props.style, className: this.name + "__wrapper " + (this.state.visible ? "" : "hidden") }, React.createElement("div", { className: this.name + " " + this.name + "--" + this.props.type }, React.createElement("div", { className: this.name + "__icon" }, this.props.icon), React.createElement("div", { className: this.name + "__content" }, this.props.text ? this.props.text.replace("%seconds%", this.state.secondsLeft + "s") : this.props.children), this.props.closeable && React.createElement("div", { className: this.name + "__close" }, React.createElement("a", { className: this.name + "__button", onClick: function onClick(evt) {
                    _this2.removeToast(evt);
                } }, React.createElement(IconClose_1.default, null)))));
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