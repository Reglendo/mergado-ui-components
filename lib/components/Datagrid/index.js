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
var Datagrid = (function (_super) {
    __extends(Datagrid, _super);
    function Datagrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "datagrid";
        return _this;
    }
    Datagrid.prototype.render = function () {
        var className = this.name + " " + this.props.addClass;
        return (React.createElement("table", { className: className },
            this.props.header,
            React.createElement("tbody", null, this.props.rows)));
    };
    return Datagrid;
}(React.Component));
Datagrid.defaultProps = {
    style: {},
    addClass: '',
    rows: [],
    header: []
};
exports["default"] = Datagrid;
//# sourceMappingURL=index.js.map