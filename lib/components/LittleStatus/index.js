"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");

var LittleStatus = function (_React$Component) {
    _inherits(LittleStatus, _React$Component);

    function LittleStatus() {
        _classCallCheck(this, LittleStatus);

        var _this = _possibleConstructorReturn(this, (LittleStatus.__proto__ || Object.getPrototypeOf(LittleStatus)).apply(this, arguments));

        _this.name = config_1.prefix + "little_status";
        return _this;
    }

    _createClass(LittleStatus, [{
        key: "render",
        value: function render() {
            var className = this.name + " " + this.name + "--" + this.props.type;
            var classIndikator = this.name + "__indikator tooltip";
            var classText = this.name + "__text";
            var text = this.props.text ? React.createElement("span", { className: classText }, " ", this.props.text) : this.props.children;
            return React.createElement("span", { className: className, style: this.props.style }, React.createElement("span", { className: classIndikator, title: this.props.title }), text);
        }
    }]);

    return LittleStatus;
}(React.Component);

LittleStatus.defaultProps = {
    title: "",
    type: "success",
    text: "",
    style: {}
};
exports.default = LittleStatus;
//# sourceMappingURL=index.js.map