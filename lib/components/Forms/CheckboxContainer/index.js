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
var LittleStatus_1 = require("../../LittleStatus");
var react_router_1 = require("react-router");
var CheckboxContainer = (function (_super) {
    __extends(CheckboxContainer, _super);
    function CheckboxContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "checkbox_container";
        _this.form = config_1.prefix + "form";
        _this.state = {
            filter: ''
        };
        return _this;
    }
    CheckboxContainer.prototype.renderInvalid = function () {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid));
        }
    };
    CheckboxContainer.prototype.renderOptions = function (options) {
        var _this = this;
        if (typeof options === "object") {
            var arr = Object.keys(options).map(function (key) { return options[key]; });
            options = arr;
        }
        var queries = this.props.input.value;
        if (!(queries instanceof Array) && !(queries instanceof Object)) {
            queries = [];
        }
        return options
            .filter(function (option) {
            var regex = new RegExp(_this.state.filter, 'i');
            return regex.test(option.name);
        })
            .map(function (option) {
            var index = queries.indexOf(option.id);
            var handler = function () {
                if (index < 0) {
                    if (_this.props.singleChoice === false) {
                        _this.props.input.onChange(queries.concat(option.id));
                    }
                    else {
                        _this.props.input.onChange([option.id]);
                    }
                }
                else {
                    var copy = queries.slice(); // make copy to not mutate value
                    copy.splice(index, 1); // remove item at index
                    _this.props.input.onChange(copy);
                }
            };
            return (React.createElement("li", { className: _this.name + "__item " + (index >= 0 ? _this.name + "__item--active" : '') + "\n                                    " + (option.disabled ? _this.name + "__item--disabled" : '') + "\n                                ", key: option.id, onClick: handler },
                _this.props.singleChoice == false &&
                    React.createElement("input", { type: "checkbox", className: _this.name + "__checkbox", checked: queries.indexOf(option.id) >= 0, onChange: handler }),
                _this.renderLabel(option)));
        });
    };
    CheckboxContainer.prototype.renderLabel = function (option) {
        var label = (option.name === "♥ALLPRODUCTS♥" ? this.props.labels.allProducts : option.name);
        if (option.link !== undefined) {
            label = React.createElement(react_router_1.Link, { to: option.link }, label);
        }
        if (option.active !== undefined) {
            label = React.createElement(LittleStatus_1["default"], { type: option.active ? "success" : "inactive" }, label);
        }
        return (React.createElement("label", { className: this.name + "__label" },
            label,
            " ",
            React.createElement("span", { className: this.name + "__count" }, typeof option.product_count !== "undefined" ? "(" + option.product_count + ")" : "")));
    };
    CheckboxContainer.prototype.renderBoxes = function () {
        var _this = this;
        var options = this.props.availableQueries;
        var render = function (options) { return _this.renderOptions(options); };
        var className = this.name + "__group";
        if (options.constructor === Array) {
            return render(options);
        }
        else {
            return Object.keys(options).map(function (key) {
                if (key === '') {
                    return render(options[key]);
                }
                else {
                    return (React.createElement("div", { key: "size_" + key },
                        React.createElement("li", { key: "size_" + key, className: className }, key),
                        render(options[key])));
                }
            });
        }
    };
    CheckboxContainer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: this.name, style: this.props.style },
            React.createElement("h3", { className: this.name + "__header", title: this.props.meta.invalid ? this.props.labels.invalid :
                    '' }, this.props.labels.main),
            React.createElement("div", { className: this.name + "__queries\n                                 " + this.form + "__group\n                                 " + (this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.form + "__group--invalid" : '') + "\n                             " },
                this.renderInvalid(),
                this.props.withoutFilter === false ? (React.createElement("div", { className: this.name + "__filter" },
                    React.createElement("input", { className: this.name + "__filter_input " + this.form + "__input--text", type: "text", id: "filter", name: "filter", value: this.state.filter, placeholder: this.props.labels.placeholder, onChange: function (evt) { _this.setState({ filter: evt.target.value }); } }))) : null,
                React.createElement("ul", { className: this.name + "__list", style: { height: this.props.height } }, this.renderBoxes()))));
    };
    return CheckboxContainer;
}(React.Component));
CheckboxContainer.defaultProps = {
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
        value: []
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
    availableQueries: [],
    labels: {
        main: "Apply on queries",
        allProducts: "All products",
        placeholder: "Filter",
        invalid: "Invalid input"
    },
    singleChoice: false,
    withoutFilter: false,
    height: 300
};
exports["default"] = CheckboxContainer;
//# sourceMappingURL=index.js.map