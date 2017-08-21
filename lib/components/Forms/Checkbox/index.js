"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n"], ["\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var Field_1 = require("../Field");
var styled_components_1 = require("styled-components");
var StyledField = styled_components_1.default(Field_1.Field)(_templateObject);

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));

        _this.name = config_1.prefix + "input-checkbox";
        return _this;
    }

    _createClass(Checkbox, [{
        key: "renderLabel",
        value: function renderLabel() {
            var _props = this.props,
                input = _props.input,
                labels = _props.labels;

            var label = this.props.label ? this.props.label : labels.main;
            var isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
            return React.createElement("div", { className: "" + (isInvalid ? config_1.form + "__group--invalid" : "") }, React.createElement("input", Object.assign({ checked: input.value }, input, { type: "checkbox", className: this.name + "__item" })), label && " ", label);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(StyledField, Object.assign({}, this.props, { name: this.name, label: this.renderLabel() }));
        }
    }]);

    return Checkbox;
}(React.Component);

Checkbox.defaultProps = Object.assign({}, Field_1.defaultFieldProps);
exports.default = Checkbox;
//# sourceMappingURL=index.js.map