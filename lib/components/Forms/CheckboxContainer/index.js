"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var LittleStatus_1 = require("../../LittleStatus");
var react_router_1 = require("react-router");
var unique_id_1 = require("../../../helpers/unique_id");
var Input_1 = require("../Input");
var MUK = require("../input");
var dom_only_props_1 = require("../../../helpers/dom-only-props");

var CheckboxContainer = function (_MUK$InputComponent) {
    _inherits(CheckboxContainer, _MUK$InputComponent);

    function CheckboxContainer(props) {
        _classCallCheck(this, CheckboxContainer);

        var _this = _possibleConstructorReturn(this, (CheckboxContainer.__proto__ || Object.getPrototypeOf(CheckboxContainer)).call(this, props));

        _this.name = config_1.prefix + "checkbox_container";
        _this.state = {
            filter: ""
        };
        return _this;
    }

    _createClass(CheckboxContainer, [{
        key: "renderOptions",
        value: function renderOptions(options) {
            var _this2 = this;

            var input = this.props.input;

            if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
                var arr = Object.keys(options).map(function (key) {
                    return options[key];
                });
                options = arr;
            }
            var queries = this.props.input.value;
            if (!(queries instanceof Array) && !(queries instanceof Object)) {
                queries = [queries];
            }
            var allProductsOption = null;
            var isAllProducts = options.map(function (option, key) {
                if (option.name === "♥ALLPRODUCTS♥") {
                    var object = Object;
                    allProductsOption = object.assign({}, option, { key: key });
                }
                return option.name === "♥ALLPRODUCTS♥" && queries.indexOf(option.id);
            });
            return options.filter(function (option) {
                var regex = new RegExp(_this2.state.filter, "i");
                return regex.test(option.name);
            }).map(function (option) {
                var index = queries.indexOf(option.id);
                var handler = function handler() {
                    if (index < 0) {
                        if (allProductsOption && isAllProducts[allProductsOption.key] !== false && isAllProducts[allProductsOption.key] > -1) {
                            // 'All products' option is already selected, remove it
                            queries.splice(queries.indexOf(allProductsOption.id), 1);
                        }
                        if (input) {
                            if (_this2.props.singleChoice === false) {
                                input.onChange(queries.concat(option.id));
                            } else {
                                input.onChange(option.id);
                            }
                        }
                    } else {
                        var copy = [].concat(_toConsumableArray(queries)); // make copy to not mutate value
                        copy.splice(index, 1); // remove item at index
                        if (input) {
                            input.onChange(copy);
                        }
                    }
                };
                return React.createElement("li", { className: _this2.name + "__item " + (index >= 0 ? _this2.name + "__item--active" : "") + "\n                                    " + (option.disabled ? _this2.name + "__item--disabled" : ""), key: unique_id_1.default(), onClick: handler }, _this2.props.singleChoice === false ? React.createElement("input", Object.assign({}, dom_only_props_1.default(_this2.props), dom_only_props_1.default(_this2.props.input), { type: "checkbox", className: _this2.name + "__checkbox", checked: queries.indexOf(option.id) >= 0, onChange: handler, style: { pointerEvents: "none" } })) : React.createElement("input", Object.assign({}, dom_only_props_1.default(_this2.props), dom_only_props_1.default(_this2.props.input), { type: "radio", className: _this2.name + "__checkbox", checked: queries.indexOf(option.id) >= 0, onChange: handler, style: { display: _this2.props.showRadio ? "inline-block" : "none", pointerEvents: "none" } })), _this2.renderItemLabel(option));
            });
        }
    }, {
        key: "renderItemLabel",
        value: function renderItemLabel(option) {
            var label = option.name === "♥ALLPRODUCTS♥" ? this.props.labels.allProducts : option.name;
            if (option.link !== undefined) {
                label = React.createElement(react_router_1.Link, { to: option.link }, label);
            }
            if (option.active !== undefined) {
                label = React.createElement(LittleStatus_1.default, { type: option.active ? "success" : "inactive" }, label);
            }
            return React.createElement("label", { className: this.name + "__label" }, label, " ", React.createElement("span", { className: this.name + "__count" }, typeof option.product_count !== "undefined" ? "(" + option.product_count + ")" : ""));
        }
    }, {
        key: "renderBoxes",
        value: function renderBoxes() {
            var _this3 = this;

            var options = this.props.availableQueries;
            var render = function render(items) {
                return _this3.renderOptions(items);
            };
            var className = this.name + "__group";
            if (options.constructor === Array) {
                return render(options);
            } else {
                return Object.keys(options).map(function (key) {
                    if (key === "") {
                        return render(options[key]);
                    } else {
                        return React.createElement("div", { key: "size_" + key + "_" + unique_id_1.default() }, React.createElement("li", { key: "option_" + key + "_" + unique_id_1.default(), className: className }, key), render(options[key]));
                    }
                });
            }
        }
    }, {
        key: "renderLabel",
        value: function renderLabel(className, props) {
            var _props = this.props,
                showLabel = _props.showLabel,
                labels = _props.labels,
                meta = _props.meta;

            return React.createElement(Input_1.InputLabel, { name: this.name }, showLabel ? labels.main : React.createElement("h3", { className: this.name + "__header" }, labels.main));
        }
    }, {
        key: "renderFilter",
        value: function renderFilter() {
            var _this4 = this;

            return React.createElement("div", { className: this.name + "__filter" }, React.createElement("input", { className: this.name + "__filter_input " + this.form + "__input--text", type: "text", id: "filter", name: "filter", value: this.state.filter, placeholder: this.props.labels.placeholder, onChange: function onChange(evt) {
                    _this4.setState({ filter: evt.target.value });
                } }));
        }
    }, {
        key: "renderInput",
        value: function renderInput(className, props) {
            var _props2 = this.props,
                withoutFilter = _props2.withoutFilter,
                height = _props2.height,
                showLabel = _props2.showLabel,
                labels = _props2.labels,
                meta = _props2.meta;

            return React.createElement("div", { className: this.name + "__queries" }, withoutFilter === false && this.renderFilter(), React.createElement("ul", { className: this.name + "__list", style: { height: height } }, this.renderBoxes()));
        }
    }]);

    return CheckboxContainer;
}(MUK.InputComponent);

CheckboxContainer.defaultProps = Object.assign({}, MUK.defaultProps, { availableQueries: [], singleChoice: false, withoutFilter: false, height: 300, showRadio: false, showLabel: false, labels: {
        main: "",
        allProducts: "All products",
        placeholder: "",
        invalid: ""
    } });
exports.default = CheckboxContainer;
//# sourceMappingURL=index.js.map