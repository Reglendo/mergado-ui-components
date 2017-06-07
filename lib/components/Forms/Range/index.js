"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var MUK = require("../input");

var Range = function (_MUK$InputComponent) {
    _inherits(Range, _MUK$InputComponent);

    function Range(props) {
        _classCallCheck(this, Range);

        var _this = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

        _this.name = config_1.prefix + "input-range";
        _this.state = {
            value: props.input.value
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
        key: "renderInvalid",
        value: function renderInvalid() {
            if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
                return React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid);
            }
        }
    }, {
        key: "renderInput",
        value: function renderInput(className, props) {
            var _props = this.props,
                labels = _props.labels,
                meta = _props.meta,
                input = _props.input;

            var outputId = meta.form + "-" + input.name + "_output";
            var outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
            return React.createElement("span", null, React.createElement("input", Object.assign({}, input, { className: this.name + "__item\n                                " + this.form + "__input--text " + this.form + "__input--range\n                                " + className + "}", type: "range", max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, onInput: function onInput(evt) {
                    var target = evt.target;
                    var output = document.getElementById(outputId);
                    output.value = target.value;
                }, value: this.state.value })), React.createElement("output", { className: this.form + "__input--range__output", style: { left: "calc(" + this.state.value / this.props.max * 100 + "% - " + outputWidth / 2 + "px)" }, id: outputId }, this.state.value));
        }
    }, {
        key: "renderLabel",
        value: function renderLabel() {
            var labels = this.props.labels;

            return this.props.labels.main;
        }
    }]);

    return Range;
}(MUK.InputComponent);

Range.defaultProps = Object.assign({}, MUK.defaultProps, { max: 50, min: 0, step: 1 });
exports.default = Range;
//# sourceMappingURL=index.js.map