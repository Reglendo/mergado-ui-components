"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: inline-block;\n"], ["\n    cursor: pointer;\n    display: inline-block;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    outline: none;\n    font-family: ", ";\n    position: absolute;\n    max-width: 600px;\n    z-index: 10000;\n"], ["\n    outline: none;\n    font-family: ", ";\n    position: absolute;\n    max-width: 600px;\n    z-index: 10000;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    padding: 0 0 10px 0;\n"], ["\n    position: relative;\n    padding: 0 0 10px 0;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    padding: 3px;\n    background: #FFEC88;\n    box-shadow: 3px 3px 12px -3px rgba(0,0,0,0.25);\n    margin-bottom: -5px;\n"], ["\n    padding: 3px;\n    background: #FFEC88;\n    box-shadow: 3px 3px 12px -3px rgba(0,0,0,0.25);\n    margin-bottom: -5px;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n    display: block;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    width: 15px;\n    height: 15px;\n    background: #FFEC88;\n    transform: rotate(45deg);\n    box-shadow: 3px 3px 12px -3px rgba(0,0,0,0.25);\n"], ["\n    display: block;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    width: 15px;\n    height: 15px;\n    background: #FFEC88;\n    transform: rotate(45deg);\n    box-shadow: 3px 3px 12px -3px rgba(0,0,0,0.25);\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n    max-height: 200px;\n    padding: 10px;\n    text-align: left;\n    color: #333;\n    border: 1px solid #F0DD79;\n    overflow: auto;\n    position: relative;\n    z-index: 10;\n"], ["\n    max-height: 200px;\n    padding: 10px;\n    text-align: left;\n    color: #333;\n    border: 1px solid #F0DD79;\n    overflow: auto;\n    position: relative;\n    z-index: 10;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Bubble_1 = require("./Bubble");
var config_1 = require("../../config");
var styled_components_1 = require("styled-components");
var fontFamily = "Arial, Helvetica, Verdana, Sans-serif";
/* <style> */
var Component = styled_components_1.default.div(_templateObject);
var HintWrapper = styled_components_1.default.div(_templateObject2, fontFamily);
var HintInnerWrapper = styled_components_1.default.div(_templateObject3);
var HintBorder = styled_components_1.default.div(_templateObject4);
var HintArrow = styled_components_1.default.span(_templateObject5);
var HintContent = styled_components_1.default.div(_templateObject6);
/* </style> */

var PopupHint = function (_React$Component) {
    _inherits(PopupHint, _React$Component);

    function PopupHint(props) {
        _classCallCheck(this, PopupHint);

        var _this = _possibleConstructorReturn(this, (PopupHint.__proto__ || Object.getPrototypeOf(PopupHint)).call(this, props));

        _this.name = config_1.prefix + "popup_hint";
        _this.state = {
            expanded: false
        };
        _this.collapse = _this.collapse.bind(_this);
        _this.expand = _this.expand.bind(_this);
        return _this;
    }

    _createClass(PopupHint, [{
        key: "expand",
        value: function expand(event) {
            event.preventDefault();
            this.setState({ expanded: true });
        }
    }, {
        key: "collapse",
        value: function collapse() {
            var _this2 = this;

            this.fadeOut(this.refs.hint, function () {
                _this2.setState({ expanded: false });
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.styleElements();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            this.styleElements();
        }
    }, {
        key: "getWindowWidth",
        value: function getWindowWidth() {
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
        }
    }, {
        key: "styleElements",
        value: function styleElements() {
            var buttonPosition = this.getPosition(this.refs.button);
            var windowWidth = this.getWindowWidth();
            var widthLeft = buttonPosition.left;
            var windowRight = windowWidth - buttonPosition.left;
            var renderLeft = widthLeft > windowWidth / 2;
            this.styleHint(buttonPosition, renderLeft);
        }
    }, {
        key: "styleArrow",
        value: function styleArrow(left, right) {
            var arrow = this.refs.arrow;
            arrow.style.left = left;
            arrow.style.right = right;
        }
    }, {
        key: "styleHint",
        value: function styleHint(buttonPosition, renderLeft) {
            var hint = this.refs.hint;
            hint.style.opacity = "0";
            hint.style.display = "block";
            hint.style.pointerEvents = "none";
            var newX = void 0;
            var arrowLeft = void 0;
            var arrowRight = void 0;
            if (renderLeft) {
                newX = buttonPosition.left - hint.offsetWidth + 30;
                arrowLeft = "";
                arrowRight = 11 + "px";
            } else {
                newX = buttonPosition.left - 10 > 0 ? buttonPosition.left - 10 : 0;
                arrowLeft = buttonPosition.left - newX + "px";
                arrowRight = "";
            }
            if (hint.style.top === buttonPosition.top - hint.offsetHeight + "px" && hint.style.left === newX + "px") {
                if (this.state.expanded) {
                    this.styleArrow(arrowLeft, arrowRight);
                    this.fadeIn(this.refs.hint);
                    this.refs.hint.focus();
                }
            } else {
                hint.style.top = buttonPosition.top - hint.offsetHeight + "px";
                hint.style.left = newX + "px";
                if (this.state.expanded) {
                    this.styleArrow(arrowLeft, arrowRight);
                    this.fadeIn(this.refs.hint);
                    this.refs.hint.focus();
                }
            }
            hint.style.display = "none";
        }
    }, {
        key: "fadeOut",
        value: function fadeOut(el, callback) {
            el.style.opacity = 1;
            (function fade() {
                el.style.opacity -= .1;
                if (el.style.opacity < 0) {
                    callback();
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        }
    }, {
        key: "fadeIn",
        value: function fadeIn(el) {
            var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            el.style.opacity = 0;
            el.style.display = display || "block";
            (function fade() {
                var val = parseFloat(el.style.opacity);
                val += 1;
                if (!(val > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        }
    }, {
        key: "getPosition",
        value: function getPosition(element) {
            var top = 0;
            var left = 0;
            do {
                top += element.offsetTop || 0;
                left += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);
            return {
                top: top,
                left: left
            };
        }
    }, {
        key: "getArrowPosition",
        value: function getArrowPosition(buttonPosition) {
            return {
                top: buttonPosition.top - 15 / 2,
                left: buttonPosition.left - 21 / 2
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var object = Object;
            var style = object.assign({ display: this.state.expanded ? "" : "none", position: "absolute" }, this.props.style);
            var hint = React.createElement(Bubble_1.default, null, React.createElement(HintWrapper, { innerRef: function innerRef(o) {
                    _this3.refs.hint = o;
                }, className: this.name + "__bubble", style: style, tabIndex: 0, onBlur: this.collapse }, React.createElement(HintInnerWrapper, { className: this.name + "__innerwrapper" }, React.createElement(HintBorder, { className: this.name + "__border" }, React.createElement(HintContent, { className: this.name + "__content" }, this.props.children)), React.createElement(HintArrow, { innerRef: function innerRef(o) {
                    _this3.refs.arrow = o;
                }, className: this.name + "__arrow" }))));
            return React.createElement(Component, { className: this.name, style: Object.assign({}, this.props.style, { display: "inline-block" }) }, React.createElement("div", { ref: "button", className: this.name + "__trigger " + (this.state.expanded ? "active" : ""), onMouseDown: this.state.expanded ? function () {} : this.expand, onClick: function onClick(e) {
                    e.preventDefault();
                    e.stopPropagation();
                } }, this.props.icon ? this.props.icon : null), hint);
        }
    }]);

    return PopupHint;
}(React.Component);

PopupHint.defaultProps = {
    icon: null,
    style: {}
};
exports.default = PopupHint;
//# sourceMappingURL=index.js.map