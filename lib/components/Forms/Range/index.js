"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\ninput[type=range]::-webkit-slider-thumb {\n    border-color: $color-blue-light;\n}\n\ninput[type=range] {\n    -webkit-appearance: none;\n    width: 100%;\n    margin: 5.5px 0;\n}\n\ninput[type=range]:focus {\n    outline: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n    background: ", ";\n    border-radius: 0px;\n    border: 0px solid #010101;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n    box-shadow: 0px 0px 0px rgba(48, 113, 169, 0), 0px 0px 0px rgba(54, 126, 189, 0);\n    border: 3px solid ", ";\n    height: 15px;\n    width: 15px;\n    border-radius: 50px;\n    background: #ffffff;\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5.5px;\n    transition: border-color 0.1s;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n    background: ", ";\n}\n\ninput[type=range]::-moz-range-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    box-shadow: none;\n    background: ", ";\n    border-radius: 0px;\n    border: 0px solid #010101;\n}\n\ninput[type=range]::-moz-range-thumb {\n    box-shadow: none;\n    border: 3px solid ", ";\n    height: 15px;\n    width: 15px;\n    border-radius: 50px;\n    background: white;\n    cursor: pointer;\n}\n\ninput[type=range]::-ms-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n    background: ", ";\n    border: 0px solid #010101;\n    border-radius: 0px;\n    box-shadow: none;\n}\n\ninput[type=range]::-ms-fill-upper {\n    background: ", ";\n    border: 0px solid #010101;\n    border-radius: 0px;\n    box-shadow: none;\n}\n\ninput[type=range]::-ms-thumb {\n    box-shadow: none;\n    border: 3px solid ", ";\n    height: 15px;\n    width: 15px;\n    border-radius: 50px;\n    background: #ffffff;\n    cursor: pointer;\n    height: 4px;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n    background: ", ";\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n    background: ", ";\n}\n"], ["\ninput[type=range]::-webkit-slider-thumb {\n    border-color: $color-blue-light;\n}\n\ninput[type=range] {\n    -webkit-appearance: none;\n    width: 100%;\n    margin: 5.5px 0;\n}\n\ninput[type=range]:focus {\n    outline: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n    background: ", ";\n    border-radius: 0px;\n    border: 0px solid #010101;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n    box-shadow: 0px 0px 0px rgba(48, 113, 169, 0), 0px 0px 0px rgba(54, 126, 189, 0);\n    border: 3px solid ", ";\n    height: 15px;\n    width: 15px;\n    border-radius: 50px;\n    background: #ffffff;\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5.5px;\n    transition: border-color 0.1s;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n    background: ", ";\n}\n\ninput[type=range]::-moz-range-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    box-shadow: none;\n    background: ", ";\n    border-radius: 0px;\n    border: 0px solid #010101;\n}\n\ninput[type=range]::-moz-range-thumb {\n    box-shadow: none;\n    border: 3px solid ", ";\n    height: 15px;\n    width: 15px;\n    border-radius: 50px;\n    background: white;\n    cursor: pointer;\n}\n\ninput[type=range]::-ms-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n    background: ", ";\n    border: 0px solid #010101;\n    border-radius: 0px;\n    box-shadow: none;\n}\n\ninput[type=range]::-ms-fill-upper {\n    background: ", ";\n    border: 0px solid #010101;\n    border-radius: 0px;\n    box-shadow: none;\n}\n\ninput[type=range]::-ms-thumb {\n    box-shadow: none;\n    border: 3px solid ", ";\n    height: 15px;\n    width: 15px;\n    border-radius: 50px;\n    background: #ffffff;\n    cursor: pointer;\n    height: 4px;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n    background: ", ";\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n    background: ", ";\n}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    padding: 0 0 0 0;\n    border: none;\n    background: transparent;\n"], ["\n    padding: 0 0 0 0;\n    border: none;\n    background: transparent;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    background: ", ";\n    position: absolute;\n    pointer-events: none;\n    margin: auto;\n    color: white;\n    display: inline-block;\n    padding: 2px 5px;\n    margin-top: -10px;\n    border-radius: 2px;\n    font-size: 10px;\n    opacity: 1;\n"], ["\n    background: ", ";\n    position: absolute;\n    pointer-events: none;\n    margin: auto;\n    color: white;\n    display: inline-block;\n    padding: 2px 5px;\n    margin-top: -10px;\n    border-radius: 2px;\n    font-size: 10px;\n    opacity: 1;\n"]);

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
var Field_1 = require("../Field");
var styled_components_1 = require("styled-components");
var style = require("../../../styled");
var StyledField = styled_components_1.default(Field_1.Field)(_templateObject, style.BLUE, style.BLUE, style.BLUE, style.BLUE, style.BLUE, style.BLUE, style.BLUE, style.BLUE, style.BLUE, style.BLUE);
var Input = styled_components_1.default.input(_templateObject2);
var Output = styled_components_1.default.output(_templateObject3, style.BLUE);

var Range = function (_React$Component) {
    _inherits(Range, _React$Component);

    function Range(props) {
        _classCallCheck(this, Range);

        var _this = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

        _this.name = config_1.prefix + "input-range";
        _this.state = {
            value: props.input.value ? props.input.value : props.default ? props.default : (props.max - props.min) / 2 + props.min
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Range, [{
        key: "handleChange",
        value: function handleChange(evt) {
            this.setState({ value: evt.target.value });
            return this.props.input.onChange(evt.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                labels = _props.labels,
                meta = _props.meta,
                input = _props.input;
            var _a = this.props,
                children = _a.children,
                props = __rest(_a, ["children"]);
            var outputId = meta.form + "-" + input.name + "_output";
            var outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
            var value = this.state.value;
            var percent = (value - this.props.min) / (this.props.max - this.props.min) * 100;
            return React.createElement(StyledField, Object.assign({}, props, { name: this.name }), React.createElement(Input, Object.assign({}, input, { className: this.name + "__item\n                                " + config_1.form + "__input--text " + config_1.form + "__input--range", type: "range", max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, onInput: function onInput(evt) {
                    var target = evt.target;
                    var output = document.getElementById(outputId);
                    output.value = target.value;
                }, value: value })), value !== undefined && value !== "" && React.createElement(Output, { className: config_1.form + "__input--range__output", style: { left: "calc(" + percent + "% - 10px)" }, id: outputId }, value));
        }
    }]);

    return Range;
}(React.Component);

Range.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { max: 50, min: 0, step: 1 });
exports.default = Range;
//# sourceMappingURL=index.js.map