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
var NavLink = (function (_super) {
    __extends(NavLink, _super);
    function NavLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavLink.prototype.render = function () {
        var _a = this.props, link = _a.link, active = _a.active;
        return (React.createElement("li", { className: "" + (active ? 'active' : '') }, link));
    };
    return NavLink;
}(React.Component));
NavLink.defaultProps = {
    active: false,
    link: (React.createElement("a", { href: "#" }))
};
exports.default = NavLink;
//# sourceMappingURL=nav_link.js.map