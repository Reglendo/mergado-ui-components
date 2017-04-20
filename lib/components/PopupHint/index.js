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
var Bubble_1 = require("./Bubble");
var config_1 = require("../../config");
var PopupHint = (function (_super) {
    __extends(PopupHint, _super);
    function PopupHint(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "popup_hint";
        _this.state = {
            expanded: false
        };
        _this.collapse = _this.collapse.bind(_this);
        _this.expand = _this.expand.bind(_this);
        return _this;
    }
    PopupHint.prototype.expand = function (event) {
        event.preventDefault();
        this.setState({ expanded: true });
    };
    PopupHint.prototype.collapse = function () {
        var _this = this;
        this.fadeOut(this.refs["hint"], function () {
            _this.setState({ expanded: false });
        });
    };
    PopupHint.prototype.componentDidMount = function () {
        this.styleElements();
    };
    PopupHint.prototype.componentDidUpdate = function (prevProps, prevState) {
        this.styleElements();
    };
    PopupHint.prototype.getWindowWidth = function () {
        if (window.innerWidth) {
            return window.innerWidth;
        }
        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        }
        if (document.body) {
            return document.body.clientWidth;
        }
        return 0;
    };
    PopupHint.prototype.styleElements = function () {
        var buttonPosition = this.getPosition(this.refs["button"]);
        var windowWidth = this.getWindowWidth();
        var widthLeft = buttonPosition.left;
        var windowRight = windowWidth - buttonPosition.left;
        var renderLeft = widthLeft > windowWidth / 2;
        this.styleHint(buttonPosition, renderLeft);
    };
    PopupHint.prototype.styleArrow = function (left, right) {
        var arrow = this.refs["arrow"];
        arrow.style.left = left;
        arrow.style.right = right;
    };
    PopupHint.prototype.styleHint = function (buttonPosition, renderLeft) {
        var hint = this.refs["hint"];
        hint.style.opacity = "0";
        hint.style.display = 'block';
        var newX;
        var arrowLeft;
        var arrowRight;
        if (renderLeft) {
            newX = buttonPosition.left - hint.offsetWidth + 30;
            arrowLeft = "";
            arrowRight = 11 + "px";
        }
        else {
            newX = (buttonPosition.left - 10) > 0 ? (buttonPosition.left - 10) : 0;
            arrowLeft = buttonPosition.left - newX + "px";
            arrowRight = "";
        }
        if (hint.style.top === buttonPosition.top - hint.offsetHeight + "px" &&
            hint.style.left === newX + "px") {
            if (this.state.expanded) {
                this.styleArrow(arrowLeft, arrowRight);
                this.fadeIn(this.refs["hint"]);
                this.refs["hint"].focus();
            }
        }
        else {
            hint.style.top = buttonPosition.top - hint.offsetHeight + "px";
            hint.style.left = newX + "px";
            this.styleHint(buttonPosition, renderLeft);
        }
    };
    PopupHint.prototype.fadeOut = function (el, callback) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                callback();
            }
            else {
                requestAnimationFrame(fade);
            }
        })();
    };
    PopupHint.prototype.fadeIn = function (el, display) {
        if (display === void 0) { display = null; }
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };
    PopupHint.prototype.getPosition = function (element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left
        };
    };
    PopupHint.prototype.getArrowPosition = function (buttonPosition) {
        return {
            top: buttonPosition.top - 15 / 2,
            left: buttonPosition.left - 21 / 2
        };
    };
    PopupHint.prototype.render = function () {
        var object = Object;
        var style = object.assign({ display: this.state.expanded ? "" : "none", position: "absolute" }, this.props.style);
        var hint = (React.createElement(Bubble_1["default"], null,
            React.createElement("div", { ref: "hint", className: this.name + "__bubble", style: style, tabIndex: 0, onBlur: this.collapse },
                React.createElement("div", { className: this.name + "__innerwrapper" },
                    React.createElement("div", { className: this.name + "__border" },
                        React.createElement("div", { className: this.name + "__content" }, this.props.content)),
                    React.createElement("span", { ref: "arrow", className: this.name + "__arrow" })))));
        return (React.createElement("div", { className: this.name, style: { display: 'inline-block' } },
            React.createElement("div", { ref: "button", className: this.name + "__trigger " + (this.state.expanded ? "active" : ""), onMouseDown: this.state.expanded ? function () { } : this.expand }, this.props.icon ? this.props.icon : null),
            hint));
    };
    return PopupHint;
}(React.Component));
PopupHint.defaultProps = {
    content: "",
    icon: null,
    iconType: "",
    style: {}
};
exports["default"] = PopupHint;
//# sourceMappingURL=index.js.map