import * as React from "react";
import css from "cxs/component";
import { Div } from "../../components/Layout";
import * as Color from "color";
import IconHintInfo from "@reglendo/mergado-ui-icons/lib/icons/IconHintInfo";
import IconHintHelp from "@reglendo/mergado-ui-icons/lib/icons/IconHintHelp";
import colors from "../../styled/themes/default";
import { prefix } from "../../config";
import Bubble from "./Bubble";
class PopupHint extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "popup_hint";
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
        const hint = this.refs.hint;
        this.fadeOut(this.refs.hint, () => {
            this.setState({ expanded: false });
            hint.style.display = "none";
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
            newX = buttonPosition.left - hint.offsetWidth + 14;
            arrowLeft = "";
            arrowRight = 0 + "px";
        }
        else {
            newX = (buttonPosition.left - 2) > 0 ? (buttonPosition.left - 8) : 0;
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
        if (!el) {
            return;
        }
        el.style.opacity = 1;
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
        let top = 10;
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
    render() {
        const object = Object;
        const style = object.assign({
            display: this.state.expanded ? "" : "none",
            position: "absolute",
            zIndex: 10000,
            outline: "none",
            maxWidth: "600px",
        }, this.props.style);
        const hint = (React.createElement(Bubble, null,
            React.createElement("div", { ref: "hint", className: `${this.name}__bubble`, style: style, tabIndex: 0, onBlur: this.state.expanded ? this.collapse : () => { } },
                React.createElement(Div, { position: "relative", padding: "0 0 10px 0", className: `${this.name}__innerwrapper` },
                    React.createElement(HintContent, { hover: this.props.hover, className: `${this.name}__content`, id: `${this.name}__content` }, this.props.children),
                    React.createElement("div", { ref: "arrow", style: {
                            width: "12px",
                            height: "12px",
                            position: "absolute",
                            display: "inline-block",
                            zIndex: 1000,
                            bottom: "11px"
                        } },
                        React.createElement(HintArrow, { hover: this.props.hover, className: `${this.name}__arrow` }))))));
        return (React.createElement(Div, { cursor: "help", verticalAlign: "text-bottom", display: "inline-block", className: this.name, style: Object.assign({}, this.props.style) },
            React.createElement("div", { ref: "button", className: `${this.name}__trigger ${this.state.expanded ? "active" : ""}`, onMouseDown: this.state.expanded ? () => { } : this.expand, onMouseEnter: !this.props.hover || this.state.expanded ? () => { } : this.expand, onMouseLeave: this.props.hover && this.state.expanded ? this.collapse : () => { }, onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                } },
                this.props.hint ? React.createElement(IconHintInfo, { size: 16 }) : null,
                this.props.help ? React.createElement(IconHintHelp, { size: 16 }) : null,
                this.props.icon ? this.props.icon : null),
            hint));
    }
}
PopupHint.defaultProps = {
    icon: null,
    style: {},
    hint: false,
    help: false,
    hover: false,
};
const fontFamily = "Arial, Helvetica, Verdana, Sans-serif";
const HintArrow = css("div")({
    display: "inline-block",
    width: "8px",
    height: "8px",
    transform: "rotate(45deg)",
    zIndex: 11,
    borderRight: "1px solid " + Color(colors.yellow).darken(0.3).string(),
    borderBottom: "1px solid " + Color(colors.yellow).darken(0.3).string(),
}, (props) => ({
    background: props.hover ? "rgba(50,50,50,1)" : colors.yellow,
    borderColor: props.hover ? "rgba(0,0,0,0.9)!important" : Color(colors.yellow).darken(0.3).string(),
}));
const HintContent = css("div")({
    fontFamily: fontFamily,
    maxHeight: "200px",
    textAlign: "left",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    zIndex: 10,
    border: "1px solid black",
    boxShadow: "3px 3px 12px -3px rgba(0,0,0,0.25)",
    borderColor: Color(colors.yellow).darken(0.3).string(),
    borderRadius: "3px"
}, (props) => ({
    fontSize: props.hover ? "13px" : "16px",
    background: props.hover ? "rgba(50,50,50,1)" : colors.yellow,
    borderColor: props.hover ? "rgba(0,0,0,0.9) !important" : Color(colors.yellow).darken(0.3).string(),
    padding: props.hover ? "2px 10px" : "10px",
    color: props.hover ? "white" : "#333",
}));
export default PopupHint;
