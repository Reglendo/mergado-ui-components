"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    outline: none;\n    display: inline-block;\n    margin: 0;\n    background: white;\n    color: #333333;\n    vertical-align: middle;\n    padding: 0 10px;\n    border: 1px solid #dbcba3;\n"], ["\n    box-sizing: border-box;\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    outline: none;\n    display: inline-block;\n    margin: 0;\n    background: white;\n    color: #333333;\n    vertical-align: middle;\n    padding: 0 10px;\n    border: 1px solid #dbcba3;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var unique_id_1 = require("../../../helpers/unique_id");
var Field_1 = require("../Field");
var styled_components_1 = require("styled-components");
var StyledSelect = styled_components_1.default.select(_templateObject);

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select() {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));

        _this.name = config_1.prefix + "select";
        return _this;
    }

    _createClass(Select, [{
        key: "renderOptions",
        value: function renderOptions() {
            return this.props.options.map(function (option) {
                if (React.isValidElement(option)) {
                    if (option.key) {
                        return option;
                    } else {
                        var object = Object;
                        return object.assign({}, option, { key: unique_id_1.default() });
                    }
                } else {
                    return React.createElement("option", { value: option.value, key: unique_id_1.default() }, option.title);
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                meta = _props.meta,
                input = _props.input,
                labels = _props.labels;
            var _a = this.props,
                children = _a.children,
                props = __rest(_a, ["children"]);
            return React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }), React.createElement(StyledSelect, Object.assign({}, input, { className: this.name + "__item " + this.props.className }), this.renderOptions()));
        }
    }]);

    return Select;
}(React.Component);

Select.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { options: [], size: 0 });
exports.default = Select;
//# sourceMappingURL=index.js.map