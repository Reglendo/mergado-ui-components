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
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../../config");
var unique_id_1 = require("../../../helpers/unique_id");
var Select = (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "select";
        _this.form = config_1.prefix + "form";
        return _this;
    }
    Select.prototype.renderInvalid = function () {
        return (React.createElement("div", { className: "form-validation-box" }, this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""));
    };
    Select.prototype.renderOptions = function () {
        return this.props.options.map(function (option) {
            if (React.isValidElement(option)) {
                if (option.key) {
                    return option;
                }
                else {
                    var object = Object;
                    return object.assign({}, option, { key: unique_id_1["default"]() });
                }
            }
            else {
                return (React.createElement("option", { value: option.value, key: unique_id_1["default"]() }, option.title));
            }
        });
    };
    Select.prototype.render = function () {
        var _a = this.props, multiple = _a.multiple, disabled = _a.disabled, required = _a.required, size = _a.size, addClass = _a.addClass, style = _a.style, id = _a.id;
        var inputId = this.props.meta.form + "-" + this.props.input.name;
        return (React.createElement("div", { className: this.name + " " + (multiple && this.name + "--" + multiple) + " " + (disabled && this.name + "--" + disabled) + "  " + (required && this.name + "--" + required) + " " + (addClass ? addClass : "") + " " + this.form + "__group ", title: this.props.labels.title, style: style },
            React.createElement("label", { className: this.name + "__label " + this.form + "__label", htmlFor: inputId }, this.props.labels.main),
            React.createElement("select", { className: this.name + "__item", id: id ? id : inputId, multiple: !!multiple, disabled: !!disabled, required: !!required, size: size }, this.renderOptions())));
    };
    return Select;
}(React.Component));
Select.defaultProps = {
    options: [],
    multiple: false,
    disabled: false,
    required: false,
    size: 0,
    style: null,
    addClass: null,
    id: null,
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
        main: null,
        invalid: "Invalid input",
        title: ""
    }
};
exports["default"] = Select;
//# sourceMappingURL=index.js.map