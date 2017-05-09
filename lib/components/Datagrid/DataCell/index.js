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
var DataCell = (function (_super) {
    __extends(DataCell, _super);
    function DataCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "datagrid__cell";
        return _this;
    }
    DataCell.prototype.render = function () {
        var _a = this.props, style = _a.style, type = _a.type, addClass = _a.addClass, onClick = _a.onClick;
        if (type === 'cell') {
            return (React.createElement("td", { className: this.name + " " + addClass, style: style, onClick: onClick }, this.props.children));
        }
        else {
            return (React.createElement("th", { className: this.name + " " + this.name + "--header " + addClass, style: style, onClick: onClick }, this.props.children));
        }
    };
    return DataCell;
}(React.Component));
DataCell.defaultProps = {
    addClass: '',
    style: {},
    type: 'cell',
    onClick: function () { }
};
exports["default"] = DataCell;
//# sourceMappingURL=index.js.map