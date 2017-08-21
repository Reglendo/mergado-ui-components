"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Field_1 = require("../Field");
var input_1 = require("./input");

var Radio = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio() {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));

        _this.name = config_1.prefix + "input-radio";
        return _this;
    }

    _createClass(Radio, [{
        key: "renderInputs",
        value: function renderInputs() {
            var _this2 = this;

            var _props = this.props,
                input = _props.input,
                meta = _props.meta,
                labels = _props.labels;

            return this.props.items.map(function (obj) {
                return React.createElement(input_1.default, { name: _this2.name, label: obj.label, value: obj.value, key: obj.value, checked: obj.value == input.value, onChange: input.onChange });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _a = this.props,
                children = _a.children,
                props = __rest(_a, ["children"]);
            return React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }), this.renderInputs());
        }
    }]);

    return Radio;
}(React.Component);

Radio.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { items: [] });
exports.default = Radio;
//# sourceMappingURL=index.js.map