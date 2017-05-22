"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var unique_id_1 = require("../../../helpers/unique_id");

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select() {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));

        _this.name = config_1.prefix + "select";
        _this.form = config_1.prefix + "form";
        return _this;
    }

    _createClass(Select, [{
        key: "renderInvalid",
        value: function renderInvalid() {
            if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
                return React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid);
            }
        }
    }, {
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
                multiple = _props.multiple,
                disabled = _props.disabled,
                required = _props.required,
                size = _props.size,
                addClass = _props.addClass,
                style = _props.style,
                id = _props.id,
                meta = _props.meta,
                addProps = _props.addProps,
                input = _props.input;

            var inputId = this.props.meta.form + "-" + this.props.input.name;
            return React.createElement("div", { className: this.name + "\n                             " + (multiple ? this.name + "--" + multiple : '') + "\n                             " + (disabled ? this.name + "--" + disabled : '') + "\n                             " + (required ? this.name + "--" + required : '') + "\n                             " + (addClass ? addClass : "") + "\n                             " + this.form + "__group\n                             " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : '') + "\n                             ", title: this.props.labels.title, style: style }, this.renderInvalid(), React.createElement("label", { className: this.name + "__label " + this.form + "__label", htmlFor: inputId }, this.props.labels.main), React.createElement("select", Object.assign({ className: this.name + "__item", id: id ? id : inputId, multiple: !!multiple, disabled: !!disabled, required: !!required, size: size }, input, addProps), this.renderOptions()));
        }
    }]);

    return Select;
}(React.Component);

Select.defaultProps = {
    options: [],
    multiple: false,
    disabled: false,
    required: false,
    size: 0,
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
exports.default = Select;
//# sourceMappingURL=index.js.map