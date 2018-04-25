import * as React from "react";
import { Div } from "../../components/Layout/Div";
import IconHintInfo from "@reglendo/mergado-ui-icons/lib/icons/IconHintInfo";
import IconHintHelp from "@reglendo/mergado-ui-icons/lib/icons/IconHintHelp";
import { prefix } from "../../config";
import Bubble from "./Bubble";
import debounce from "lodash/throttle";
class PopupHint extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "popuphint";
        this.id = null;
        this.collapse = debounce(this.collapse.bind(this), 50);
        this.expand = debounce(this.expand.bind(this), 50);
        this.styleHint = this.styleHint.bind(this);
        this.id = Math.round(Math.random() * 1000);
    }
    expand(event) {
        event.preventDefault();
        const hint = document.getElementById('muk-popuphint');
        hint.classList.add("m-active");
        const content = document.getElementById("muk-popup-content-" + this.id).innerHTML;
        document.getElementById('muk-popup-bubble').innerHTML = content;
        this.styleElements();
    }
    doNothing() {
    }
    collapse() {
        const hint = document.getElementById('muk-popuphint');
        const bubble = document.getElementById('muk-bubble');
        hint.classList.remove("m-active");
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
        const renderLeft = widthLeft > windowWidth / 2;
        this.styleHint(buttonPosition, renderLeft);
    }
    styleArrow(left, right) {
        const arrow = document.getElementById('muk-bubble-arrow');
        arrow.style.left = left;
        arrow.style.right = right;
    }
    styleHint(buttonPosition, renderLeft) {
        const hint = document.getElementById('muk-bubble');
        hint.style.display = "block";
        hint.style.pointerEvents = "none";
        let newX;
        let arrowLeft;
        let arrowRight;
        if (renderLeft) {
            newX = buttonPosition.left - hint.offsetWidth + 14;
            arrowLeft = "";
            arrowRight = 0 + this.props.arrowRight + "px";
        }
        else {
            newX = (buttonPosition.left - 2) > 0 ? (buttonPosition.left - 8) : 0;
            arrowLeft = buttonPosition.left - newX + this.props.arrowLeft + "px";
            arrowRight = "";
        }
        if (hint.style.top === `${buttonPosition.top - hint.offsetHeight}px` &&
            hint.style.left === `${newX}px`) {
        }
        else {
            hint;
            hint.style.top = `${buttonPosition.top - hint.offsetHeight}px`;
            hint.style.left = `${newX}px`;
        }
        this.styleArrow(arrowLeft, arrowRight);
        if (!this.props.hover) {
            const toggler = document.getElementById('muk-popup-toggler-' + this.id);
            toggler.focus();
        }
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
        return (React.createElement(Div, Object.assign({ className: `${this.name} ${this.props.className || ""}`, props: {
                id: `muk-popup-toggler-${this.id}`,
                onMouseEnter: this.props.hover ? this.expand : this.doNothing,
                onMouseLeave: this.props.hover ? this.collapse : this.doNothing,
                onMouseDown: this.props.hover ? this.doNothing : this.expand,
                onBlur: this.props.hover ? this.doNothing : this.collapse,
                tabIndex: 0,
            }, cursor: "help", verticalAlign: "text-bottom", display: "inline-block" }, this.props.style),
            React.createElement(Div, { props: { id: `muk-popup-content-${this.id}` }, display: "none" }, this.props.children),
            React.createElement(Div, { pointerEvents: "none" },
                React.createElement("div", { ref: "button", className: `m-trigger` },
                    this.props.hint ? React.createElement(IconHintInfo, { className: "m-icon", size: 16 }) : null,
                    this.props.help ? React.createElement(IconHintHelp, { className: "m-icon", size: 16 }) : null,
                    this.props.icon ? this.props.icon : null)),
            React.createElement(Bubble, null)));
    }
}
PopupHint.defaultProps = {
    icon: null,
    style: {},
    hint: false,
    help: false,
    hover: true,
    arrowLeft: 0,
    arrowRight: 0,
};
export default PopupHint;
