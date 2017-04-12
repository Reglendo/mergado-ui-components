"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../../config");
var Icon_1 = require("../../Icon");
var unique_id_1 = require("../../../helpers/unique_id");
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "toast";
        _this.state = {
            visible: true,
            paused: false,
            secondsLeft: props.timeout / 1000
        };
        return _this;
    }
    Toast.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.isPaused() !== true && this.props.timeout > 0) {
            var interval = window.setInterval(function () {
                if (_this.state.secondsLeft < 1) {
                    _this.hideToast();
                    window.clearInterval(interval);
                }
                else {
                    _this.setState({
                        visible: true,
                        paused: false,
                        secondsLeft: _this.state.secondsLeft > 0 ? _this.state.secondsLeft - 1 : _this.state.secondsLeft
                    });
                }
            }, 1000);
        }
    };
    Toast.prototype.hideToast = function () {
        this.setState({
            visible: false,
            paused: true,
            secondsLeft: 0
        });
    };
    Toast.prototype.removeToast = function (evt) {
        evt.preventDefault();
        if (this.props.onClose(this.props.id) === true) {
            this.hideToast();
        }
    };
    Toast.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: this.props.style, className: this.name + "__wrapper " + (this.state.visible ? '' : 'hidden') },
            React.createElement("div", { className: this.name + " " + this.name + "--" + this.props.type },
                React.createElement("div", { className: this.name + "__icon" }, this.props.icon),
                React.createElement("div", { className: this.name + "__content" }, this.props.text.replace('%seconds%', this.state.secondsLeft + 's')),
                this.props.closeable &&
                    React.createElement("div", { className: this.name + "__close" },
                        React.createElement("a", { className: this.name + "__button", onClick: function (evt) {
                                _this.removeToast(evt);
                            } },
                            React.createElement(Icon_1["default"], { type: "close" }))))));
    };
    return Toast;
}(React.Component));
Toast.defaultProps = {
    id: unique_id_1["default"](),
    text: '',
    type: "info",
    icon: null,
    isPaused: function () { return false; },
    onClose: function () { return true; },
    timeout: 0,
    closeable: true,
    style: {}
};
exports["default"] = Toast;
//# sourceMappingURL=index.js.map