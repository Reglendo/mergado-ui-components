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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LittleStatus = (function (_super) {
    __extends(LittleStatus, _super);
    function LittleStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LittleStatus.prototype.render = function () {
        return (React.createElement("span", { className: "lite-status tooltip " + this.props.type, title: this.props.title }));
    };
    return LittleStatus;
}(React.Component));
LittleStatus.defaultProps = {
    title: "",
    type: "ok"
};
exports.default = LittleStatus;
