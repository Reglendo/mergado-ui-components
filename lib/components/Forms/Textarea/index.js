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
var config_1 = require("config");
var Textarea = (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "textarea";
        _this.form = config_1.prefix + "form";
        return _this;
    }
    Textarea.prototype.renderInvalid = function () {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid));
        }
    };
    Textarea.prototype.render = function () {
        var _a = this.props, id = _a.id, meta = _a.meta, input = _a.input;
        var inputId = meta.form + "-" + input.name;
        return (React.createElement("div", { className: this.name + " " + this.form + "__group " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : ''), title: this.props.labels.title, style: this.props.style },
            this.renderInvalid(),
            React.createElement("label", { className: this.name + "__label " + this.form + "__label", htmlFor: inputId }, this.props.labels.main),
            React.createElement("textarea", __assign({ className: this.name + "__input " + this.form + "__input--text " + this.form + "__input--textarea " + (meta.invalid && (meta.dirty || meta.touched) ? 'invalid' : ''), id: id ? id : inputId, placeholder: this.props.labels.placeholder }, input), input.value)));
    };
    return Textarea;
}(React.Component));
Textarea.defaultProps = {
    style: null,
    addClass: "",
    id: "",
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
exports["default"] = Textarea;
//# sourceMappingURL=index.js.map