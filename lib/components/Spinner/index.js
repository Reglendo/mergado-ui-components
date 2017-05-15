"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");

var Spinner = function (_React$Component) {
    _inherits(Spinner, _React$Component);

    function Spinner(props) {
        _classCallCheck(this, Spinner);

        var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

        _this.name = config_1.prefix + "spinner";
        _this.state = {
            loaded: false
        };
        return _this;
    }

    _createClass(Spinner, [{
        key: "updateState",
        value: function updateState(props) {
            var loaded = this.state.loaded;
            if (props.loaded) {
                loaded = !!props.loaded;
            }
            this.setState({
                loaded: loaded
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateState(this.props);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.updateState(nextProps);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.loaded) {
                return React.createElement("span", { style: { opacity: 1 } }, this.props.children);
            }
            var _props = this.props,
                size = _props.size,
                type = _props.type,
                color = _props.color,
                speed = _props.speed;

            var defaultStyle = { width: size,
                height: size,
                borderColor: "rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8)",
                fontSize: size,
                animationDuration: 1.2 / speed + 's'
            };
            var containerStyle = {
                width: size,
                height: size
            };
            if (color === 'black') {
                defaultStyle.borderColor = "rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)";
            } else if (color === 'green') {
                defaultStyle.borderColor = "rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)";
            } else if (color === 'blue') {
                defaultStyle.borderColor = "rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)";
            }
            if (type === 'dashed') {
                defaultStyle.borderStyle = 'dashed';
            } else if (type === 'dotted') {
                defaultStyle.borderStyle = 'dotted';
            }
            if (type === 'mergado') {
                defaultStyle = { borderWidth: size / 2 };
                defaultStyle.animationDuration = 10 / speed + 's';
            }
            var object = Object;
            var style = object.assign(defaultStyle, this.props.style);
            return React.createElement("div", { className: this.name + " " + this.name + "--" + this.props.type, style: containerStyle }, React.createElement("div", { className: this.name + "__wrapper", style: style }, React.createElement("div", { className: this.name + "__content", style: { opacity: 0 } }, this.props.children)));
        }
    }]);

    return Spinner;
}(React.Component);

Spinner.defaultProps = {
    type: "default",
    size: 30,
    loaded: false,
    color: "white",
    style: {},
    speed: 1
};
exports.default = Spinner;
//# sourceMappingURL=index.js.map