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
var config_1 = require("../../config");
var TopNav = (function (_super) {
    __extends(TopNav, _super);
    function TopNav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "top_nav";
        return _this;
    }
    TopNav.prototype.renderLinks = function () {
        var links = this.props.links;
        var classList = this.name + "__list";
        return (React.createElement("ul", { className: classList }, links));
    };
    TopNav.prototype.render = function () {
        var className = "" + this.name;
        var classWrapper = this.name + "__wrapper\"";
        return (React.createElement("nav", { className: className, style: this.props.style },
            React.createElement("div", { className: classWrapper }, this.renderLinks())));
    };
    return TopNav;
}(React.Component));
TopNav.defaultProps = {
    links: [],
    style: {}
};
exports["default"] = TopNav;
//# sourceMappingURL=index.js.map