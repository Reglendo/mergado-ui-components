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
var LittleStatus = (function (_super) {
    __extends(LittleStatus, _super);
    function LittleStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "little_status";
        return _this;
    }
    LittleStatus.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        var classIndikator = this.name + "__indikator tooltip";
        var classText = this.name + "__text";
        var text = this.props.text ? (React.createElement("span", { className: classText },
            " ",
            this.props.text)) : "";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("span", { className: classIndikator, title: this.props.title }),
            text));
    };
    return LittleStatus;
}(React.Component));
LittleStatus.defaultProps = {
    title: "",
    type: "success",
    text: "",
    style: {}
};
exports["default"] = LittleStatus;
//# sourceMappingURL=index.js.map