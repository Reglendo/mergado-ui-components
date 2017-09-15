"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const Color = require("color");
const default_1 = require("../../styled/themes/default");
const config_1 = require("../../config");
const Bubble_1 = require("./Bubble");
/* </style> */
class PopupHint extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "popup_hint";
        this.state = {
            expanded: false,
        };
        this.collapse = this.collapse.bind(this);
        this.expand = this.expand.bind(this);
    }
    expand(event) {
        event.preventDefault();
        this.setState({ expanded: true });
    }
    collapse() {
        this.fadeOut(this.refs.hint, () => {
            this.setState({ expanded: false });
        });
    }
    componentDidMount() {
        this.styleElements();
    }
    componentDidUpdate(prevProps, prevState) {
        this.styleElements();
    }
    getWindowWidth() {
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
    styleElements() {
        const buttonPosition = this.getPosition(this.refs.button);
        const windowWidth = this.getWindowWidth();
        const widthLeft = buttonPosition.left;
        const windowRight = windowWidth - buttonPosition.left;
        const renderLeft = widthLeft > windowWidth / 2;
        this.styleHint(buttonPosition, renderLeft);
    }
    styleArrow(left, right) {
        const arrow = this.refs.arrow;
        arrow.style.left = left;
        arrow.style.right = right;
    }
    styleHint(buttonPosition, renderLeft) {
        const hint = this.refs.hint;
        hint.style.opacity = `0`;
        hint.style.display = "block";
        hint.style.pointerEvents = "none";
        let newX;
        let arrowLeft;
        let arrowRight;
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
        if (hint.style.top === `${buttonPosition.top - hint.offsetHeight}px` &&
            hint.style.left === `${newX}px`) {
            if (this.state.expanded) {
                this.styleArrow(arrowLeft, arrowRight);
                this.fadeIn(this.refs.hint);
                this.refs.hint.focus();
            }
        }
        else {
            hint.style.top = `${buttonPosition.top - hint.offsetHeight}px`;
            hint.style.left = `${newX}px`;
            if (this.state.expanded) {
                this.styleArrow(arrowLeft, arrowRight);
                this.fadeIn(this.refs.hint);
                this.refs.hint.focus();
            }
        }
    }
    fadeOut(el, callback) {
        const hint = this.refs.hint;
        el.style.opacity = 1;
        hint.style.display = "none";
        (function fade() {
            el.style.opacity -= .1;
            if (el.style.opacity < 0) {
                callback();
            }
            else {
                requestAnimationFrame(fade);
            }
        })();
    }
    fadeIn(el, display = null) {
        el.style.opacity = 0;
        el.style.display = "block";
        (function fade() {
            let val = parseFloat(el.style.opacity);
            val += 1;
            if (!(val > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }
    getPosition(element) {
        let top = 0;
        let left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top,
            left,
        };
    }
    getArrowPosition(buttonPosition) {
        return {
            top: buttonPosition.top - 15 / 2,
            left: buttonPosition.left - 21 / 2,
        };
    }
    render() {
        const object = Object;
        const style = object.assign({ display: this.state.expanded ? "" : "none", position: "absolute" }, this.props.style);
        const hint = (React.createElement(Bubble_1.default, null,
            React.createElement(HintWrapper, { innerRef: (o) => { this.refs.hint = o; }, className: `${this.name}__bubble`, style: style, tabIndex: 0, onBlur: this.collapse },
                React.createElement(glamorous_1.Div, { position: "relative", padding: "0 0 10px 0", className: `${this.name}__innerwrapper` },
                    React.createElement(HintContent, { className: `${this.name}__content` }, this.props.children),
                    React.createElement(HintArrow, { innerRef: (o) => { this.refs.arrow = o; }, className: `${this.name}__arrow` })))));
        return (React.createElement(glamorous_1.Div, { cursor: "pointer", display: "inline-block", className: this.name, style: Object.assign({}, this.props.style) },
            React.createElement("div", { ref: "button", className: `${this.name}__trigger ${this.state.expanded ? "active" : ""}`, onMouseDown: this.state.expanded ? () => { } : this.expand, onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                } }, this.props.icon ? this.props.icon : null),
            hint));
    }
}
PopupHint.defaultProps = {
    icon: null,
    style: {},
};
const fontFamily = "Arial, Helvetica, Verdana, Sans-serif";
/* <style> */
const HintWrapper = glamorous_1.default.div({
    outline: "none",
    fontFamily: fontFamily,
    position: "absolute",
    maxWidth: "600px",
    zIndex: 10000,
});
const HintArrow = glamorous_1.default.div({
    display: "block",
    position: "absolute",
    right: "0px",
    bottom: "3px",
    width: "14px",
    height: "14px",
    background: default_1.default.yellow,
    transform: "rotate(45deg)",
    zIndex: 11,
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    borderColor: Color(default_1.default.yellow).darken(0.3)
});
const HintContent = glamorous_1.default.div({
    maxHeight: "200px",
    padding: "10px",
    textAlign: "left",
    overflow: "auto",
    position: "relative",
    zIndex: 10,
    background: default_1.default.yellow,
    border: "1px solid black",
    boxShadow: "3px 3px 12px -3px rgba(0,0,0,0.25)",
    borderColor: Color(default_1.default.yellow).darken(0.3),
    borderRadius: "2px"
});
exports.default = PopupHint;
//# sourceMappingURL=index.js.map