"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    font-size: 14px;\n    box-sizing: border-box;\n    background-color: #fff;\n    border: 1px solid #dbcba3;\n    display: block;\n    width: ", ";\n    text-align: left;\n    outline: none;\n    padding: 0 10px;\n    color: #333;\n    height: 40px;\n    line-height: 40px;\n    ", "\n\n    ", "\n"], ["\n    font-size: 14px;\n    box-sizing: border-box;\n    background-color: #fff;\n    border: 1px solid #dbcba3;\n    display: block;\n    width: ", ";\n    text-align: left;\n    outline: none;\n    padding: 0 10px;\n    color: #333;\n    height: 40px;\n    line-height: 40px;\n    ", "\n\n    ", "\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n        line-height: initial;\n        padding: 8px;\n        height: auto;\n        &:focus {\n          border-color: #85bd3c\n          outline: 3px solid #85bd3c\n        }\n    "], ["\n        line-height: initial;\n        padding: 8px;\n        height: auto;\n        &:focus {\n          border-color: #85bd3c\n          outline: 3px solid #85bd3c\n        }\n    "]),
    _templateObject3 = _taggedTemplateLiteral(["\n        color: #888;\n        background: #eee;\n    "], ["\n        color: #888;\n        background: #eee;\n    "]);

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
exports.StyledInput = styled_components_1.default.input(_templateObject, function (props) {
    return props.type === "search" ? "calc(100% - 22px)" : "100%";
}, function (props) {
    return props.type === "file" && styled_components_1.css(_templateObject2);
}, function (props) {
    return props.disabled && styled_components_1.css(_templateObject3);
});

var TextInput = function (_React$Component) {
    _inherits(TextInput, _React$Component);

    function TextInput() {
        _classCallCheck(this, TextInput);

        var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));

        _this.name = config_1.prefix + "input-text";
        return _this;
    }

    _createClass(TextInput, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                type = _props.type,
                meta = _props.meta,
                input = _props.input;
            var _a = this.props,
                children = _a.children,
                props = __rest(_a, ["children"]);
            var inputProps = this.props.input;
            if (type === "file") {
                delete inputProps.value;
            }
            return React.createElement(Field_1.Field, Object.assign({}, props, { name: this.name }), React.createElement(exports.StyledInput, Object.assign({}, props, inputProps, { placeholder: this.props.labels.placeholder, ref: "input", className: this.name + "__input                                 " + config_1.form + "__input--text                                 " + config_1.form + "__input--" + type + "                                 " + inputProps.className + "                                 " })));
        }
    }]);

    return TextInput;
}(React.Component);

TextInput.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { type: "text" });
exports.default = TextInput;
//# sourceMappingURL=index.js.map