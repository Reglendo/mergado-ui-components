"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Bubble_1 = require("./Bubble");
const config_1 = require("config");
class PopupHint extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "popup_hint";
        this.state = {
            expanded: false
        };
        this.collapse = this.collapse.bind(this);
        this.expand = this.expand.bind(this);
    }
    expand(event) {
        event.preventDefault();
        this.setState({ expanded: true });
    }
    collapse() {
        this.fadeOut(this.refs["hint"], () => {
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
        const buttonPosition = this.getPosition(this.refs["button"]);
        const windowWidth = this.getWindowWidth();
        const widthLeft = buttonPosition.left;
        const windowRight = windowWidth - buttonPosition.left;
        const renderLeft = widthLeft > windowWidth / 2;
        this.styleHint(buttonPosition, renderLeft);
    }
    styleArrow(left, right) {
        let arrow = this.refs["arrow"];
        arrow.style.left = left;
        arrow.style.right = right;
    }
    styleHint(buttonPosition, renderLeft) {
        let hint = this.refs["hint"];
        hint.style.opacity = `0`;
        hint.style.display = 'block';
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
                this.fadeIn(this.refs["hint"]);
                this.refs["hint"].focus();
            }
        }
        else {
            hint.style.top = `${buttonPosition.top - hint.offsetHeight}px`;
            hint.style.left = `${newX}px`;
            this.styleHint(buttonPosition, renderLeft);
        }
    }
    fadeOut(el, callback) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                callback();
            }
            else {
                requestAnimationFrame(fade);
            }
        })();
    }
    fadeIn(el, display = null) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }
    getPosition(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left,
        };
    }
    getArrowPosition(buttonPosition) {
        return {
            top: buttonPosition.top - 15 / 2,
            left: buttonPosition.left - 21 / 2,
        };
    }
    render() {
        var object = Object;
        var style = object.assign({ display: this.state.expanded ? "" : "none", position: "absolute" }, this.props.style);
        var hint = (React.createElement(Bubble_1.default, null,
            React.createElement("div", { ref: "hint", className: `${this.name}__bubble`, style: style, tabIndex: 0, onBlur: this.collapse },
                React.createElement("div", { className: `${this.name}__innerwrapper` },
                    React.createElement("div", { className: `${this.name}__border` },
                        React.createElement("div", { className: `${this.name}__content` }, this.props.content)),
                    React.createElement("span", { ref: "arrow", className: `${this.name}__arrow` })))));
        return (React.createElement("div", { className: this.name, style: { display: 'inline-block' } },
            React.createElement("div", { ref: "button", className: `${this.name}__trigger ${this.state.expanded ? "active" : ""}`, onMouseDown: this.state.expanded ? () => { } : this.expand }, this.props.icon ? this.props.icon : null),
            hint));
    }
}
PopupHint.defaultProps = {
    content: "",
    icon: null,
    iconType: "",
    style: {}
};
exports.default = PopupHint;
//# sourceMappingURL=index.js.map