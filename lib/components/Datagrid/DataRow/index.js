"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var DataCell_1 = require("../DataCell");
var Checkbox_1 = require("../../Forms/Checkbox");

var DataRow = function (_React$Component) {
    _inherits(DataRow, _React$Component);

    function DataRow() {
        _classCallCheck(this, DataRow);

        var _this = _possibleConstructorReturn(this, (DataRow.__proto__ || Object.getPrototypeOf(DataRow)).apply(this, arguments));

        _this.name = config_1.prefix + "datagrid__row";
        return _this;
    }

    _createClass(DataRow, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                style = _props.style,
                addClass = _props.addClass,
                inactive = _props.inactive,
                dataId = _props.dataId,
                actions = _props.actions;

            return React.createElement("tr", { className: this.name + " " + (inactive && this.name + "--inactive") + " " + addClass, "data-id": dataId, style: style }, actions.length > 0 && React.createElement(DataCell_1.default, null, React.createElement(Checkbox_1.default, { input: { "onChange": function onChange(evt) {
                        return _this2.props.handleSelectRow(dataId);
                    },
                    "checked": this.props.selectedRows.indexOf(dataId) !== -1,
                    "data-id": dataId,
                    "className": "bulk-action-item"
                } })), this.props.children);
        }
    }]);

    return DataRow;
}(React.Component);

DataRow.defaultProps = {
    addClass: "",
    style: {},
    inactive: false,
    dataId: "",
    actions: [],
    selectedRows: []
};
exports.default = DataRow;
//# sourceMappingURL=index.js.map