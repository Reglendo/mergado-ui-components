"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var unique_id_1 = require("../../../helpers/unique_id");
var MUK = require("../input");

var Select = function (_MUK$InputComponent) {
    _inherits(Select, _MUK$InputComponent);

    function Select() {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));

        _this.name = config_1.prefix + "select";
        return _this;
    }

    _createClass(Select, [{
        key: "renderOptions",
        value: function renderOptions() {
            return this.props.options.map(function (option) {
                if (React.isValidElement(option)) {
                    if (option.key) {
                        return option;
                    } else {
                        var object = Object;
                        return object.assign({}, option, { key: unique_id_1.default() });
                    }
                } else {
                    return React.createElement("option", { value: option.value, key: unique_id_1.default() }, option.title);
                }
            });
        }
    }, {
        key: "renderInput",
        value: function renderInput(className, props) {
            var _props = this.props,
                meta = _props.meta,
                input = _props.input,
                labels = _props.labels;

            delete props.options;
            return React.createElement("select", Object.assign({}, input, { className: this.name + "__item " + className }), this.renderOptions());
        }
    }]);

    return Select;
}(MUK.InputComponent);

Select.defaultProps = Object.assign({}, MUK.defaultProps, { options: [], size: 0 });
exports.default = Select;
//# sourceMappingURL=index.js.map