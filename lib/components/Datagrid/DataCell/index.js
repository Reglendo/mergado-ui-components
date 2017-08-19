"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    padding: 8px 10px;\n    text-align: left;\n    border-bottom: 1px solid #dbcba3;\n    font-weight: normal;\n    border-right: #dbcba3 1px dotted;\n    font-size: 13px;\n    .muk-form__group {\n        margin: 0;\n    }\n    .muk-form__label {\n        padding: 0;\n    }\n"], ["\n    padding: 8px 10px;\n    text-align: left;\n    border-bottom: 1px solid #dbcba3;\n    font-weight: normal;\n    border-right: #dbcba3 1px dotted;\n    font-size: 13px;\n    .muk-form__group {\n        margin: 0;\n    }\n    .muk-form__label {\n        padding: 0;\n    }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    background: #333;\n    padding: 0 10px;\n    border-color: transparent;\n    font-weight: bold;\n    white-space: nowrap;\n    height: 30px;\n    line-height: 30px;\n    color: #fff;\n"], ["\n    background: #333;\n    padding: 0 10px;\n    border-color: transparent;\n    font-weight: bold;\n    white-space: nowrap;\n    height: 30px;\n    line-height: 30px;\n    color: #fff;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var styled_components_1 = require("styled-components");
var Cell = styled_components_1.default.td(_templateObject);
var Header = Cell.withComponent("th").extend(_templateObject2);

var DataCell = function (_React$Component) {
    _inherits(DataCell, _React$Component);

    function DataCell() {
        _classCallCheck(this, DataCell);

        var _this = _possibleConstructorReturn(this, (DataCell.__proto__ || Object.getPrototypeOf(DataCell)).apply(this, arguments));

        _this.name = config_1.prefix + "datagrid__cell";
        return _this;
    }

    _createClass(DataCell, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                style = _props.style,
                type = _props.type,
                addClass = _props.addClass,
                onClick = _props.onClick;

            return type === "header" ? React.createElement(Header, { className: this.name + " " + this.name + "--header " + addClass, style: style, onClick: onClick }, this.props.children) : React.createElement(Cell, { className: this.name + " " + addClass, style: style, onClick: onClick }, this.props.children);
        }
    }]);

    return DataCell;
}(React.Component);

DataCell.defaultProps = {
    addClass: "",
    style: null,
    type: "cell"
};
exports.default = DataCell;
//# sourceMappingURL=index.js.map