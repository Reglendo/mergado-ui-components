"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var Input_1 = require("../Input");

var Radio = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio() {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));

        _this.name = config_1.prefix + "input-checkbox";
        _this.form = config_1.prefix + "form";
        return _this;
    }

    _createClass(Radio, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                disabled = _props.disabled,
                required = _props.required,
                addClass = _props.addClass,
                style = _props.style,
                input = _props.input,
                id = _props.id,
                meta = _props.meta;

            var inputId = this.props.meta.form + "-" + input.name;
            var addProps = Object.assign({}, this.props.addProps);
            delete addProps.addClass;
            var props = this.props;
            return React.createElement(Input_1.Input, Object.assign({ name: this.name }, props), React.createElement(Input_1.InputError, Object.assign({}, props)), React.createElement(Input_1.InputLabel, { name: this.name }, React.createElement("input", Object.assign({ className: this.name + "__item", id: id ? id : inputId, type: "radio", required: !!required, disabled: !!disabled, checked: !!this.props.input.value }, this.props.input, addProps)), "\xA0", this.props.labels.main));
        }
    }]);

    return Radio;
}(React.Component);

Radio.defaultProps = {
    disabled: false,
    required: false,
    style: null,
    addClass: "",
    id: "",
    input: {
        checked: false,
        name: "",
        onBlur: function onBlur(value) {},
        onChange: function onChange(value) {},
        onDragStart: function onDragStart(value) {},
        onDrop: function onDrop(value) {},
        onFocus: function onFocus(value) {},
        value: ""
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: ""
    },
    labels: {
        main: null,
        invalid: "Invalid input",
        title: ""
    }
};
exports.default = Radio;
//# sourceMappingURL=index.js.map