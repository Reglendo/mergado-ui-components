"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");

var FormComponent = function (_React$Component) {
    _inherits(FormComponent, _React$Component);

    function FormComponent() {
        _classCallCheck(this, FormComponent);

        var _this = _possibleConstructorReturn(this, (FormComponent.__proto__ || Object.getPrototypeOf(FormComponent)).apply(this, arguments));

        _this.form = config_1.prefix + "form";
        _this.name = config_1.prefix + "form-component";
        return _this;
    }

    _createClass(FormComponent, [{
        key: "renderInvalid",
        value: function renderInvalid() {
            if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
                return React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid);
            }
        }
    }, {
        key: "renderLabel",
        value: function renderLabel(inputId, inputClass, props) {
            return React.createElement("div", null);
        }
    }, {
        key: "renderInput",
        value: function renderInput(inputId, inputClass, props) {
            return React.createElement("div", null);
        }
    }, {
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

            var inputId = id ? id : this.props.meta.form + "-" + input.name;
            var addProps = Object.assign({}, this.props.addProps);
            delete addProps.addClass;
            return React.createElement("div", { className: this.name + "\n                             " + (disabled && this.name + "--" + disabled) + "\n                             " + (required && this.name + "--" + required) + "\n                             " + (addClass ? addClass : "") + "\n                             " + this.form + "__group\n                             " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : "") + "\n                         ", title: this.props.labels.title, style: style }, this.renderInvalid(), React.createElement("label", { className: this.name + "__label " + this.form + "__label" }, this.renderLabel(inputId, addClass, addProps)), this.renderInput(inputId, addClass, addProps));
        }
    }]);

    return FormComponent;
}(React.Component);

FormComponent.defaultProps = {
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
exports.FormComponent = FormComponent;
//# sourceMappingURL=form_component.js.map