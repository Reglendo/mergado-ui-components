"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../../config");
var MUK = require("../input");

var FormGroup = function (_MUK$InputComponent) {
    _inherits(FormGroup, _MUK$InputComponent);

    function FormGroup() {
        _classCallCheck(this, FormGroup);

        var _this = _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));

        _this.name = config_1.prefix + "form-group";
        return _this;
    }

    _createClass(FormGroup, [{
        key: "renderInput",
        value: function renderInput() {
            return this.props.children;
        }
    }]);

    return FormGroup;
}(MUK.InputComponent);

FormGroup.defaultProps = Object.assign({}, MUK.defaultProps);
exports.default = FormGroup;
//# sourceMappingURL=index.js.map