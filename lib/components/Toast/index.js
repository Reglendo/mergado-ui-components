import * as React from "react";
import css from "@reglendo/cxs/component";
import { prefix } from "../../config";
import uniqueId from "../../helpers/unique_id";
import Button from "../Forms/Button";
class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "toast";
        this.state = {
            visible: true,
            paused: false,
            secondsLeft: props.timeout / 1000,
        };
    }
    componentDidMount() {
        if (this.props.isPaused() !== true && this.props.timeout > 0) {
            this.countdown = setInterval(this.timer.bind(this), 1000);
        }
    }
    timer() {
        const { secondsLeft } = this.state;
        if (secondsLeft <= 1) {
            this.removeToast();
            clearInterval(this.countdown);
        }
        else {
            if (secondsLeft <= 2) {
                this.hideToast();
            }
            this.setState({
                secondsLeft: secondsLeft > 0 ? secondsLeft - 1 : secondsLeft,
            });
        }
    }
    hideToast() {
        this.setState({
            visible: false,
            paused: true,
            secondsLeft: 1,
        });
    }
    componentWillUnmount() {
        clearInterval(this.countdown);
    }
    removeToast() {
        this.refs.wrapper.style.display = "none";
    }
    onClose(evt) {
        evt.preventDefault();
        if (this.props.onClose(this.props.id) === true) {
            this.hideToast();
            this.countdown = setInterval(this.timer.bind(this), 500);
        }
    }
    render() {
        return (React.createElement("div", { ref: "wrapper" },
            React.createElement(Wrapper, { type: this.props.type, style: this.props.style, hidden: !this.state.visible, className: `${this.name}__wrapper ${this.state.visible ? "" : this.name + "--hidden"}` },
                React.createElement(Icon, { className: `${this.name}__icon` }, this.props.icon),
                React.createElement(Content, { className: `${this.name}__content` }, this.props.text && typeof this.props.text == "string" ?
                    this.props.text.replace("%seconds%", this.state.secondsLeft + "s")
                    :
                        this.props.children),
                this.props.closeable &&
                    React.createElement(CloseButton, { type: this.props.type },
                        React.createElement(Button, { className: `${this.name}__button`, color: "nocolor", size: "tiny", type: "void", onClick: evt => this.onClose(evt) }, "\u00D7")))));
    }
}
Toast.defaultProps = {
    id: uniqueId(),
    text: "",
    type: "info",
    icon: null,
    isPaused: () => { return false; },
    onClose: () => { return true; },
    timeout: 0,
    closeable: true,
    style: {},
};
const Wrapper = css("div")({
    width: "100%",
    display: "table",
    margin: "10px 0",
    boxShadow: "rgba(0, 0, 0, 0.5) 1px 1px 4px 0px",
    transition: "opacity 0.5s",
    transform: "translate3d(0,0,0)",
    willChange: "opacity",
    border: "0px solid transparent",
}, (props) => {
    const type = props.type ? props.type : "info";
    return {
        borderRadius: props.theme.radius,
        opacity: props.hidden ? 0 : 1,
        background: type === "transparent" ? "transparent" : props.theme[type],
        color: (type === "transparent" || type === "info" || type === "inactive" || type === "message")
            ? "#333" : "white",
    };
});
const Icon = css("div")({
    width: "20px",
    padding: "0 10px",
    display: "table-cell",
    verticalAlign: "middle",
});
const Content = css("div")({
    padding: "20px 0px",
    boxSizing: "border-box",
    fontSize: "16px",
    textAlign: "left",
    display: "table-cell",
    verticalAlign: "middle",
});
const CloseButton = css("div")({
    padding: "5px 6px 0 10px",
    width: "20px",
    textAlign: "right",
    verticalAlign: "top",
    display: "table-cell",
    opacity: 0.8,
}, (props) => {
    const type = props.type ? props.type : "info";
    return {
        "& .muk-button": {
            fontSize: "18px",
            color: (type === "info" || type === "inactive" || type === "message")
                ? "#333 !important" : "white !important",
        },
    };
});
export default Toast;
