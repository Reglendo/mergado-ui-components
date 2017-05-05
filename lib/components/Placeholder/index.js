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
var Placeholder = (function (_super) {
    __extends(Placeholder, _super);
    function Placeholder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "placeholder";
        return _this;
    }
    Placeholder.prototype.render = function () {
        var _a = this.props, addClass = _a.addClass, style = _a.style, width = _a.width, height = _a.height;
        var className = this.name + " " + (addClass ? addClass : '');
        var object = Object;
        var styles = object.assign({}, style, { paddingBottom: (height * 100 / width) + "%" });
        return (React.createElement("div", { className: className, style: styles },
            React.createElement("div", { className: this.name + "__shadow" }),
            React.createElement("div", { className: this.name + "__content" }, this.props.children)));
    };
    return Placeholder;
}(React.Component));
Placeholder.defaultProps = {
    width: 100,
    height: 100
};
exports["default"] = Placeholder;
//# sourceMappingURL=index.js.map