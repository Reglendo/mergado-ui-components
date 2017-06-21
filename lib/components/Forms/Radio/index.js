"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var MUK = require("../input");

var Radio = function (_MUK$InputComponent) {
    _inherits(Radio, _MUK$InputComponent);

    function Radio() {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));

        _this.name = config_1.prefix + "input-radio";
        return _this;
    }

    _createClass(Radio, [{
        key: "renderInputs",
        value: function renderInputs(className, props) {
            var _this2 = this;

            var _props = this.props,
                input = _props.input,
                meta = _props.meta,
                labels = _props.labels;

            return this.props.items.map(function (obj) {
                return React.createElement("label", { className: _this2.name + "__item", key: obj.value }, React.createElement("input", { value: obj.value, checked: obj.value === _this2.props.input.value, onChange: input.onChange, className: _this2.name + "__input " + className, type: "radio" }), "\xA0", obj.label);
            });
        }
    }, {
        key: "renderInput",
        value: function renderInput(className, props) {
            var _props2 = this.props,
                input = _props2.input,
                meta = _props2.meta,
                labels = _props2.labels;

            return this.renderInputs(className, props);
        }
    }]);

    return Radio;
}(MUK.InputComponent);

Radio.defaultProps = Object.assign({}, MUK.defaultProps, { items: [] });
exports.default = Radio;
//# sourceMappingURL=index.js.map