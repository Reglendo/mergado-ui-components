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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CheckboxContainer = (function (_super) {
    __extends(CheckboxContainer, _super);
    function CheckboxContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            filter: ''
        };
        return _this;
    }
    CheckboxContainer.prototype.renderBoxes = function () {
        var _this = this;
        var options = this.props.availibleQueries;
        if (typeof options === "object") {
            var arr = Object.keys(options).map(function (key) { return options[key]; });
            options = arr;
        }
        var queries = this.props.input.value;
        var querieType = typeof queries;
        if (!(querieType === "array" || querieType === "object")) {
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
                    _this.props.input.onChange(queries.concat(option.id));
                }
                else {
                    var copy = queries.slice(); // make copy to not mutate value
                    copy.splice(index, 1); // remove item at index
                    _this.props.input.onChange(copy);
                }
            };
            return (React.createElement("li", { className: "checkbox-container-item " + (index >= 0 ? 'active' : ''), key: option.id, onClick: handler, style: { cursor: "pointer" } },
                React.createElement("input", { type: "checkbox", checked: queries.indexOf(option.id) >= 0, onChange: handler }),
                React.createElement("label", null,
                    option.name === "♥ALLPRODUCTS♥" ? _this.props.labels.allProducts : option.name,
                    " ",
                    React.createElement("span", { className: "query-info-count" }, typeof option.productCount !== "undefined" ? "(" + option.productCount + ")" : ""))));
        });
    };
    CheckboxContainer.prototype.render = function () {
        var _this = this;
        var queries = this.props.input.value;
        return (React.createElement("div", null,
            React.createElement("h3", { title: this.props.meta.invalid ? this.props.labels.invalid :
                    '' }, this.props.labels.main),
            React.createElement("div", { id: "queries", className: "queries-list " + (this.props.meta.dirty && this.props.meta.invalid ?
                    'invalid' : '') },
                React.createElement("div", { style: { paddingRight: 0 } },
                    React.createElement("div", { className: "quick-filter", style: { display: 'block' } },
                        React.createElement("input", { className: "string form-control", type: "text", name: "filter", id: "quick-filter", placeholder: this.props.labels.placeholder, value: this.state.filter, onChange: function (evt) { _this.setState({ filter: evt.target.value }); } })),
                    React.createElement("ul", { className: "query-list-control" }, this.renderBoxes())))));
    };
    return CheckboxContainer;
}(React.Component));
CheckboxContainer.defaultProps = {
    input: {
        checked: false,
        name: "",
        onBlur: function (value) { },
        onChange: function (value) { },
        onDragstart: function (value) { },
        onDrop: function (value) { },
        onFocus: function (value) { },
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
    availibleQueries: [],
    labels: {
        main: "Apply on queries",
        allProducts: "All products",
        placeholder: "Filter",
        invalid: "Invalid input"
    }
};
exports.default = CheckboxContainer;
