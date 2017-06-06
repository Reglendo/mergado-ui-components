"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var Button_1 = require("../../Forms/Button");
var Input_1 = require("../../Forms/Input");

var DataTable = function (_React$Component) {
    _inherits(DataTable, _React$Component);

    function DataTable(props) {
        _classCallCheck(this, DataTable);

        var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

        _this.name = config_1.prefix + "datagrid";
        _this.state = {
            checkedAll: false
        };
        return _this;
    }

    _createClass(DataTable, [{
        key: "toggleCheckedAll",
        value: function toggleCheckedAll() {
            this.setState({
                checkedAll: !this.state.checkedAll
            });
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            var _this2 = this;

            var children = this.props.children;
            return children.map(function (obj) {
                return React.cloneElement(obj, {
                    actions: _this2.props.bulkActions,
                    checkedAll: _this2.state.checkedAll,
                    checkAll: _this2.toggleCheckedAll.bind(_this2),
                    labels: _this2.props.labels
                });
            });
        }
    }, {
        key: "renderBulkActionbar",
        value: function renderBulkActionbar() {
            var labels = this.props.labels;

            return React.createElement("div", { className: this.name + "__actions_bar" }, React.createElement(Input_1.InputLabel, { name: "actionbar" }, labels.actionsBar), React.createElement("div", { className: this.name + "__actions_icons" }, this.renderBulkActions()));
        }
    }, {
        key: "renderBulkActions",
        value: function renderBulkActions() {
            var ButtonEl = Button_1.default;
            return this.props.bulkActions.map(function (obj) {
                return React.createElement(ButtonEl, { onClick: obj.action, icon: obj.icon, color: "nocolor", size: "tiny", disabled: !!obj.disabled });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                addClass = _props.addClass,
                style = _props.style;

            var className = this.name + "__table " + this.props.addClass;
            return React.createElement("div", { className: "" + this.name }, this.props.bulkActions.length > 0 && this.renderBulkActionbar(), React.createElement("table", { className: className, style: style }, this.renderChildren()));
        }
    }]);

    return DataTable;
}(React.Component);

DataTable.defaultProps = {
    bulkActions: [],
    style: {},
    addClass: "",
    labels: {
        actionsBar: "",
        actionsHeader: ""
    }
};
exports.default = DataTable;
//# sourceMappingURL=index.js.map