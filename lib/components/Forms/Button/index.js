"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    vertical-align: top;\n"], ["\n    display: inline-block;\n    vertical-align: top;\n"]);

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
var types_1 = require("./types");
var styled_components_1 = require("styled-components");
var StyledField = styled_components_1.default(Field_1.Field)(_templateObject);

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

        _this.name = config_1.prefix + "button";
        return _this;
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                meta = _props.meta,
                input = _props.input,
                labels = _props.labels,
                group = _props.group;
            var _a = this.props,
                children = _a.children,
                props = __rest(_a, ["children"]);
            return React.createElement(StyledField, Object.assign({ className: this.name + "--" + props.color + "\n                                        " + (!labels.main ? this.name + "--notext" : "") + "\n                                        " + (props.size ? this.name + "--" + props.size : "") + "\n                                        " + this.name + "--" + props.type + "\n                                        " + (props.disabled ? this.name + "--disabled" : "") + "\n                " }, this.props, { name: this.name, label: "", labels: Object.assign({}, labels, { main: "" }) }), React.createElement(types_1.UniversalButton, Object.assign({}, this.props, { name: this.name })));
        }
    }]);

    return Button;
}(React.Component);

Button.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { type: "href", icon: null, color: "blue", disabled: false, size: "" });
exports.default = Button;
//# sourceMappingURL=index.js.map