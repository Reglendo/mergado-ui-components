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
var TopNav = (function (_super) {
    __extends(TopNav, _super);
    function TopNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNav.prototype.renderLinks = function () {
        var links = this.props.links;
        return (React.createElement("ul", null, links));
    };
    TopNav.prototype.render = function () {
        return (React.createElement("nav", { id: "submenu", style: { margin: "15px 0" } },
            React.createElement("div", { className: "wrapper" }, this.renderLinks())));
    };
    return TopNav;
}(React.Component));
exports.default = TopNav;
