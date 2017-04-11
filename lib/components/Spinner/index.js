"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../config");
var Spinner = (function (_super) {
    __extends(Spinner, _super);
    function Spinner(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "spinner";
        _this.state = {
            loaded: false
        };
        return _this;
    }
    Spinner.prototype.updateState = function (props) {
        var loaded = this.state.loaded;
        if (props.loaded) {
            loaded = !!props.loaded;
        }
        this.setState({
            loaded: loaded
        });
    };
    Spinner.prototype.componentDidMount = function () {
        this.updateState(this.props);
    };
    Spinner.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateState(nextProps);
    };
    Spinner.prototype.render = function () {
        if (this.state.loaded) {
            return (React.createElement("div", null, this.props.children));
        }
        var _a = this.props, size = _a.size, type = _a.type, color = _a.color, speed = _a.speed;
        var defaultStyle = { width: size,
            height: size,
            borderColor: "rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8)",
            fontSize: size,
            animationDuration: 1.2 / speed + 's'
        };
        if (color == 'black') {
            defaultStyle.borderColor = "rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)";
        }
        else if (color == 'green') {
            defaultStyle.borderColor = "rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)";
        }
        else if (color == 'blue') {
            defaultStyle.borderColor = "rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)";
        }
        if (type == 'dashed') {
            defaultStyle.borderStyle = 'dashed';
        }
        else if (type == 'dotted') {
            defaultStyle.borderStyle = 'dotted';
        }
        if (type == 'mergado') {
            defaultStyle = { borderWidth: size / 2 };
            defaultStyle.animationDuration = 10 / speed + 's';
        }
        var object = Object;
        var style = object.assign(defaultStyle, this.props.style);
        return (React.createElement("div", { className: this.name + " " + this.name + "--" + this.props.type, style: style },
            React.createElement("div", { className: this.name + "__content", style: { overflow: 'hidden', maxHeight: '0px', maxWidth: '0px' } }, this.props.children)));
    };
    return Spinner;
}(React.Component));
Spinner.defaultProps = {
    type: "default",
    size: 30,
    loaded: false,
    color: "white",
    style: {},
    speed: 1
};
exports["default"] = Spinner;
//# sourceMappingURL=index.js.map