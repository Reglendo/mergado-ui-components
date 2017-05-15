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
var ReactDOM = require("react-dom");
var config_1 = require("config");
/**
 * disable-styleguide
 */
var Bubble = (function (_super) {
    __extends(Bubble, _super);
    function Bubble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "popup_hint__bubble";
        return _this;
    }
    Bubble.prototype.componentDidMount = function () {
        this.popup = document.createElement("span");
        this.popup.className = this.name + "__wrapper";
        this.popup.ref = 'bubble';
        document.getElementById('app').appendChild(this.popup);
        this._renderLayer();
    };
    Bubble.prototype.componentDidUpdate = function () {
        this._renderLayer();
    };
    Bubble.prototype.componentWillUnmount = function () {
        ReactDOM.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    };
    Bubble.prototype._renderLayer = function () {
        ReactDOM.render((React.createElement("span", null, this.props.children)), this.popup);
    };
    Bubble.prototype.render = function () {
        return (React.createElement("div", null));
    };
    return Bubble;
}(React.Component));
exports["default"] = Bubble;
//# sourceMappingURL=index.js.map