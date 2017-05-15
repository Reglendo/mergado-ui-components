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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var config_1 = require("config");
var Toast_1 = require("components/Toasts/Toast");
var unique_id_1 = require("helpers/unique_id");
var Toasts = (function (_super) {
    __extends(Toasts, _super);
    function Toasts(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "toasts-container";
        _this.state = {
            toasts: []
        };
        return _this;
    }
    Toasts.prototype.isPaused = function () {
        return this.props.paused;
    };
    Toasts.prototype.renderToasts = function () {
        var _this = this;
        return this.props.toasts.map(function (toast) {
            return (React.createElement("div", { key: unique_id_1["default"](), className: _this.name + "__item" },
                React.createElement(Toast_1["default"], __assign({ isPaused: _this.isPaused.bind(_this) }, toast.props))));
        });
    };
    Toasts.prototype.render = function () {
        return (React.createElement("div", { className: "" + this.name, style: this.props.style },
            React.createElement("div", { className: this.name + "__wrapper" }, this.renderToasts())));
    };
    return Toasts;
}(React.Component));
Toasts.defaultProps = {
    toasts: [],
    paused: false,
    style: {}
};
exports["default"] = Toasts;
//# sourceMappingURL=index.js.map