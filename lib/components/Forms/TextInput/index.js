"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var MUK = require("../input");

var TextInput = function (_MUK$InputComponent) {
    _inherits(TextInput, _MUK$InputComponent);

    function TextInput() {
        _classCallCheck(this, TextInput);

        var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));

        _this.name = config_1.prefix + "input-text";
        return _this;
    }

    _createClass(TextInput, [{
        key: "renderInput",
        value: function renderInput(className, props) {
            var _props = this.props,
                type = _props.type,
                meta = _props.meta,
                input = _props.input;

            var inputProps = this.props.input;
            if (type === "file") {
                delete inputProps.value;
            }
            return React.createElement("input", Object.assign({}, props, inputProps, { placeholder: this.props.labels.placeholder, ref: "input", className: this.name + "__input " + this.form + "__input--text " + this.form + "__input--" + type + " " + className }));
        }
    }]);

    return TextInput;
}(MUK.InputComponent);

TextInput.defaultProps = Object.assign({}, MUK.defaultProps, { type: "text" });
exports.default = TextInput;
//# sourceMappingURL=index.js.map