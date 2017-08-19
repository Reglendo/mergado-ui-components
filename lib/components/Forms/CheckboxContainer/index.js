"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    & > .muk-form__group--invalid {\n        border: none !important;\n    }\n"], ["\n    & > .muk-form__group--invalid {\n        border: none !important;\n    }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var TextInput_1 = require("../TextInput");
var Field_1 = require("../Field");
var list_1 = require("./list");
var styled_components_1 = require("styled-components");
var StyledField = styled_components_1.default(Field_1.Field)(_templateObject);

var CheckboxContainer = function (_React$Component) {
    _inherits(CheckboxContainer, _React$Component);

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
        key: "renderFilter",
        value: function renderFilter() {
            var _this2 = this;

            return React.createElement(TextInput_1.default, { className: this.name + "__filter_input", type: "search", input: { value: this.state.filter,
                    onChange: function onChange(evt) {
                        return _this2.setState({ filter: evt.target.value });
                    } }, labels: this.props.labels });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                withoutFilter = _props.withoutFilter,
                height = _props.height,
                showLabel = _props.showLabel,
                labels = _props.labels,
                meta = _props.meta;
            var _a = this.props,
                children = _a.children,
                props = __rest(_a, ["children"]);
            var options = this.props.availableQueries.filter(function (option) {
                var regex = new RegExp(_this3.state.filter, "i");
                return option.subheader || regex.test(option.name);
            });
            var isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
            return React.createElement(StyledField, Object.assign({}, props, { label: "", labels: { invalid: labels.invalid, main: "" }, className: this.name + "__queries" }), withoutFilter === false && this.renderFilter(), React.createElement(list_1.QueryList, { className: this.name + "__list " + (isInvalid ? config_1.form + "__group--invalid" : ""), name: this.name, height: height, options: options, value: this.props.input.value ? this.props.input.value : [], input: this.props.input, singleChoice: this.props.singleChoice, showInput: this.props.showInput, labels: labels, meta: meta }));
        }
    }]);

    return CheckboxContainer;
}(React.Component);

CheckboxContainer.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { availableQueries: [], singleChoice: false, withoutFilter: false, height: 300, showInput: false, showLabel: false, labels: {
        main: "",
        allProducts: "All products",
        placeholder: "",
        invalid: ""
    } });
exports.default = CheckboxContainer;
//# sourceMappingURL=index.js.map