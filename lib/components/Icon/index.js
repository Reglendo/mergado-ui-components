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
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "icon";
        return _this;
    }
    Icon.prototype.render = function () {
        var iconImport = [];
        try {
            iconImport = require("mergado-ui-icons/lib/" + this.props.type + ".js");
        }
        catch (e) {
        }
        var className = this.name + " " + this.name + "--" + this.props.type;
        var iconName = "Icon" + ("" + this.props.type).replace(/\b(\w)/g, function (s) { return s.toUpperCase(); }).replace('-', '');
        var icon = iconImport[iconName] ? iconImport[iconName] : null;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" }, icon),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return Icon;
}(React.Component));
Icon.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports["default"] = Icon;
//# sourceMappingURL=index.js.map