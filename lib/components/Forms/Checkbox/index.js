"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var MUK = require("../input");

var Checkbox = function (_MUK$InputComponent) {
    _inherits(Checkbox, _MUK$InputComponent);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));

        _this.name = config_1.prefix + "input-checkbox";
        return _this;
    }

    _createClass(Checkbox, [{
        key: "renderLabel",
        value: function renderLabel(className, props) {
            var _props = this.props,
                input = _props.input,
                labels = _props.labels;

            return React.createElement("span", null, React.createElement("input", Object.assign({}, input, { type: "checkbox", className: this.name + "__item " + className, defaultChecked: input ? !!input.value : false })), labels && " ", labels ? labels.main : "");
        }
    }]);

    return Checkbox;
}(MUK.InputComponent);

Checkbox.defaultProps = Object.assign({}, MUK.defaultProps);
exports.default = Checkbox;
//# sourceMappingURL=index.js.map