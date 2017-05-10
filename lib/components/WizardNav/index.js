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
var WizardNav = (function (_super) {
    __extends(WizardNav, _super);
    function WizardNav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "wizard_nav";
        return _this;
    }
    WizardNav.prototype.renderLinks = function () {
        var links = this.props.links;
        var classList = this.name + "__list";
        return (React.createElement("ul", { className: classList }, links));
    };
    WizardNav.prototype.render = function () {
        var className = "" + this.name;
        var classWrapper = this.name + "__wrapper\"";
        return (React.createElement("nav", { className: className, style: this.props.style },
            React.createElement("div", { className: classWrapper }, this.renderLinks())));
    };
    return WizardNav;
}(React.Component));
WizardNav.defaultProps = {
    links: [],
    style: {}
};
exports["default"] = WizardNav;
//# sourceMappingURL=index.js.map