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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var config_1 = require("config");
var Sortable = require("react-sortablejs");
var DataTable = (function (_super) {
    __extends(DataTable, _super);
    function DataTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "datagrid";
        return _this;
    }
    DataTable.prototype.render = function () {
        var _a = this.props, rows = _a.rows, header = _a.header, sortable = _a.sortable, sortableProps = _a.sortableProps, addClass = _a.addClass, style = _a.style;
        var className = this.name + " " + this.props.addClass;
        return (React.createElement("table", { className: className, style: style },
            header,
            sortable ? React.createElement(Sortable, __assign({ tag: "tbody" }, sortableProps), rows) : React.createElement("tbody", null, rows)));
    };
    return DataTable;
}(React.Component));
DataTable.defaultProps = {
    style: {},
    addClass: '',
    rows: [],
    header: [],
    sortable: false,
    sortableProps: {}
};
exports["default"] = DataTable;
//# sourceMappingURL=index.js.map