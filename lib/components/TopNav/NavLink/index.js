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
/**
 * disable-styleguide
 */
var NavLink = (function (_super) {
    __extends(NavLink, _super);
    function NavLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "top_nav__item";
        return _this;
    }
    NavLink.prototype.render = function () {
        var _a = this.props, link = _a.link, active = _a.active;
        var className = "" + this.name;
        if (active) {
            className += " " + this.name + "--active";
        }
        return (React.createElement("li", { className: "" + className, style: this.props.style }, link));
    };
    return NavLink;
}(React.Component));
NavLink.defaultProps = {
    active: false,
    link: (React.createElement("a", { href: "#" })),
    style: {}
};
exports["default"] = NavLink;
//# sourceMappingURL=index.js.map