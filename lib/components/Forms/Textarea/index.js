"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    height: ", "\n"], ["\n    height: ", "\n"]);

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
var TextInput_1 = require("../TextInput");
var Styled = TextInput_1.StyledInput.extend(_templateObject, function (props) {
    return props.height + "px";
});
var StyledTextarea = Styled.withComponent("textarea");

var Textarea = function (_React$Component) {
    _inherits(Textarea, _React$Component);

    function Textarea() {
        _classCallCheck(this, Textarea);

        var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));

        _this.name = config_1.prefix + "textarea";
        return _this;
    }

    _createClass(Textarea, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                input = _props.input,
                labels = _props.labels;
            var _a = this.props,
                children = _a.children,
                props = __rest(_a, ["children"]);
            return React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }), React.createElement(StyledTextarea, Object.assign({}, input, { height: this.props.height, className: this.name + "__input\n                                " + config_1.form + "__input--text\n                                " + config_1.form + "__input--textarea\n                    ", placeholder: labels.placeholder }), input.value));
        }
    }]);

    return Textarea;
}(React.Component);

Textarea.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { height: 100 });
exports.default = Textarea;
//# sourceMappingURL=index.js.map