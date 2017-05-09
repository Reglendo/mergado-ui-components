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
var DataHeader = (function (_super) {
    __extends(DataHeader, _super);
    function DataHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "datagrid__row";
        return _this;
    }
    DataHeader.prototype.render = function () {
        var _a = this.props, cells = _a.cells, style = _a.style, addClass = _a.addClass;
        return (React.createElement("thead", null,
            React.createElement("tr", { className: this.name + " " + this.name + "--header " + addClass, style: style }, cells)));
    };
    return DataHeader;
}(React.Component));
DataHeader.defaultProps = {
    cells: [],
    addClass: '',
    style: {}
};
exports["default"] = DataHeader;
//# sourceMappingURL=index.js.map