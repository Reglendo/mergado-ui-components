"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var Button_1 = require("../../Forms/Button");
var TextInput_1 = require("../../Forms/TextInput");
var Checkbox_1 = require("../../Forms/Checkbox");
var Input_1 = require("../../Forms/Input");

var DataTable = function (_React$Component) {
    _inherits(DataTable, _React$Component);

    function DataTable(props) {
        _classCallCheck(this, DataTable);

        var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

        _this.name = config_1.prefix + "datagrid";
        _this.state = {
            selectedAll: false,
            selectedRows: []
        };
        return _this;
    }

    _createClass(DataTable, [{
        key: "handleSelectAll",
        value: function handleSelectAll() {
            if (this.state.selectedAll) {
                this.setState({
                    selectedRows: [],
                    selectedAll: false
                });
            } else {
                var selected = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = document.querySelectorAll(".bulk-action-item")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var checkbox = _step.value;

                        var item = checkbox;
                        selected.push(parseInt(item.getAttribute("data-id"), 10));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                this.setState({
                    selectedRows: selected,
                    selectedAll: true
                });
            }
        }
    }, {
        key: "handleSelectRow",
        value: function handleSelectRow(id) {
            var selected = this.state.selectedRows;
            var index = selected.indexOf(id);
            index === -1 ? selected.push(id) : selected.splice(index, 1);
            this.setState({
                selectedRows: selected
            });
        }
    }, {
        key: "renderChildren",
        value: function renderChildren(children) {
            var _this2 = this;

            return children.map(function (obj) {
                return React.cloneElement(obj, Object.assign({}, obj.props, { actions: _this2.props.bulkActions, labels: _this2.props.labels, selectedAll: _this2.state.selectedAll, handleSelectAll: _this2.handleSelectAll.bind(_this2), handleSelectRow: _this2.handleSelectRow.bind(_this2), selectedRows: _this2.state.selectedRows }));
            });
        }
    }, {
        key: "renderBulkActionbar",
        value: function renderBulkActionbar() {
            var labels = this.props.labels;

            return React.createElement("div", { className: this.name + "__actions_bar muk-1-12" }, React.createElement(Input_1.InputLabel, { name: "actionbar" }, labels.actionsBar), React.createElement("div", { className: this.name + "__actions_icons" }, this.renderBulkActions()));
        }
    }, {
        key: "renderBulkActions",
        value: function renderBulkActions() {
            var disabled = !this.state.selectedRows || this.state.selectedRows.length === 0;
            return this.props.bulkActions.map(function (obj) {
                return React.createElement(Button_1.default, { onClick: obj.action, key: obj.type, icon: obj.icon, disabled: disabled, color: "nocolor", size: "tiny" });
            });
        }
    }, {
        key: "renderFiltersBar",
        value: function renderFiltersBar() {
            return React.createElement("div", { className: this.name + "__filters_bar muk-11-12" }, React.createElement("div", { className: "muk-grid--table" }, React.createElement("div", null, this.renderFilters())));
        }
    }, {
        key: "renderFilters",
        value: function renderFilters() {
            return this.props.filters.map(function (obj) {
                switch (obj.type) {
                    case "text":
                        return React.createElement(TextInput_1.default, { type: "search", input: { onChange: function onChange(evt) {
                                    obj.action(evt);
                                } }, labels: { main: obj.label }, key: "text" });
                    case "checkbox":
                        return React.createElement(Checkbox_1.default, { input: { onChange: function onChange(evt) {
                                    obj.action(evt);
                                } }, labels: { main: obj.label }, key: "checkbox" });
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                addClass = _props.addClass,
                style = _props.style;

            var className = this.name + "__table " + this.props.addClass;
            return React.createElement("div", { className: "" + this.name }, React.createElement("div", { className: "muk-grid--table" }, React.createElement("div", null, this.props.bulkActions.length > 0 && this.renderBulkActionbar(), this.props.filters.length > 0 && this.renderFiltersBar())), React.createElement("table", { className: className, style: style }, this.props.children && this.renderChildren(this.props.children)));
        }
    }]);

    return DataTable;
}(React.Component);

DataTable.defaultProps = {
    bulkActions: [],
    filters: [],
    style: {},
    addClass: "",
    labels: {
        actionsBar: ""
    }
};
exports.default = DataTable;
//# sourceMappingURL=index.js.map