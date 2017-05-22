"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");

var TextInput = function (_React$Component) {
    _inherits(TextInput, _React$Component);

    function TextInput() {
        _classCallCheck(this, TextInput);

        var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));

        _this.name = config_1.prefix + "input-text";
        _this.form = config_1.prefix + "form";
        return _this;
    }

    _createClass(TextInput, [{
        key: "renderInvalid",
        value: function renderInvalid() {
            if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
                return React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                id = _props.id,
                type = _props.type,
                meta = _props.meta,
                input = _props.input,
                addClass = _props.addClass;

            var inputId = id ? id : meta.form + "-" + input.name;
            return React.createElement("div", { className: this.name + " " + addClass + " " + this.form + "__group " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : ''), title: this.props.labels.title, style: this.props.style }, this.renderInvalid(), React.createElement("label", { className: this.name + "__label " + this.form + "__label", htmlFor: inputId }, this.props.labels.main), React.createElement("input", Object.assign({ id: inputId, type: type, placeholder: this.props.labels.placeholder, ref: "input" }, this.props.input, this.props.addProps, { className: this.name + "__input " + this.form + "__input--text " + this.form + "__input--" + type + " " + (meta.invalid && (meta.dirty || meta.touched) ? 'invalid' : '') + " " + (this.props.addProps ? this.props.addProps.addClass : '') })));
        }
    }]);

    return TextInput;
}(React.Component);

TextInput.defaultProps = {
    type: "text",
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
        main: "",
        placeholder: "",
        invalid: "",
        title: ""
    }
};
exports.default = TextInput;
//# sourceMappingURL=index.js.map