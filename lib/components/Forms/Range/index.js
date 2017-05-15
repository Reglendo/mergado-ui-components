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
var Range = (function (_super) {
    __extends(Range, _super);
    function Range(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "input-range";
        _this.form = config_1.prefix + "form";
        _this.state = {
            value: props.input.value
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Range.prototype.handleChange = function (evt) {
        this.setState({ value: evt.target.value });
        return this.props.input.onChange(evt.target.value);
    };
    Range.prototype.renderInvalid = function () {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid));
        }
    };
    Range.prototype.render = function () {
        var _a = this.props, id = _a.id, meta = _a.meta, input = _a.input;
        var inputId = meta.form + "-" + input.name;
        var outputId = meta.form + "-" + input.name + "_output";
        var outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
        return (React.createElement("div", { className: this.name + " " + this.form + "__group " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : ''), title: this.props.labels.title, style: this.props.style },
            this.renderInvalid(),
            React.createElement("div", { style: { position: 'relative' } },
                React.createElement("label", { className: this.name + "__label " + this.form + "__label", htmlFor: inputId }, this.props.labels.main),
                React.createElement("input", __assign({ className: this.name + "__item " + this.form + "__input--text " + this.form + "__input--range " + (meta.invalid && (meta.dirty || meta.touched) ? 'invalid' : ''), id: id ? id : inputId, type: 'range', placeholder: this.props.labels.placeholder }, this.props.input, { max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, onInput: function (evt) {
                        var target = evt.target;
                        var output = document.getElementById(outputId);
                        output.value = target.value;
                    }, value: this.state.value })),
                React.createElement("output", { className: this.form + "__input--range__output", style: { left: 'calc(' + ((this.state.value / this.props.max) * 100) + '% - ' + outputWidth / 2 + 'px)' }, id: outputId }, this.state.value))));
    };
    return Range;
}(React.Component));
Range.defaultProps = {
    max: 50,
    min: 0,
    step: 1,
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
exports["default"] = Range;
//# sourceMappingURL=index.js.map