"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../../config");
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "text_input";
        return _this;
    }
    TextInput.prototype.renderInvalid = function () {
        return (React.createElement("div", { className: "form-validation-box" }, this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""));
    };
    TextInput.prototype.render = function () {
        var inputId = this.props.meta.form + "-" + this.props.input.name;
        return (React.createElement("div", { className: this.name + " " + config_1.prefix + "form__group", title: this.props.labels.title },
            this.renderInvalid(),
            React.createElement("label", { className: this.name + "__label", htmlFor: inputId }, this.props.labels.main),
            React.createElement("input", __assign({ className: this.name + "__input " + config_1.prefix + "form__control " + config_1.prefix + "input--text " + (this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? 'invalid' : ''), id: inputId, type: "text", placeholder: this.props.labels.placeholder }, this.props.input))));
    };
    return TextInput;
}(React.Component));
TextInput.defaultProps = {
    input: {
        checked: false,
        name: "",
        onBlur: function (value) {
        },
        onChange: function (value) {
        },
        onDragStart: function (value) {
        },
        onDrop: function (value) {
        },
        onFocus: function (value) {
        },
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
        main: "Text",
        placeholder: "Fill out here...",
        invalid: "Invalid input",
        title: ""
    }
};
exports["default"] = TextInput;
//# sourceMappingURL=index.js.map