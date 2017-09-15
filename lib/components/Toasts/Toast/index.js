"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const config_1 = require("../../../config");
const unique_id_1 = require("../../../helpers/unique_id");
const Button_1 = require("../../../components/Forms/Button");
class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "toast";
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
        this.refWrapper.style.display = "none";
    }
    onClose(evt) {
        evt.preventDefault();
        if (this.props.onClose(this.props.id) === true) {
            this.hideToast();
            this.countdown = setInterval(this.timer.bind(this), 500);
        }
    }
    render() {
        return (React.createElement(Wrapper, { type: this.props.type, innerRef: (o) => { this.refWrapper = o; }, style: this.props.style, hidden: !this.state.visible, className: `${this.name}__wrapper ${this.state.visible ? "" : this.name + "--hidden"}` },
            React.createElement(Icon, { className: `${this.name}__icon` }, this.props.icon),
            React.createElement(Content, { className: `${this.name}__content` }, this.props.text ?
                this.props.text.replace("%seconds%", this.state.secondsLeft + "s")
                :
                    this.props.children),
            this.props.closeable &&
                React.createElement(CloseButton, { type: this.props.type },
                    React.createElement(Button_1.default, { className: `${this.name}__button`, color: "nocolor", size: "tiny", type: "void", toastType: this.props.type, onClick: evt => this.onClose(evt) }, "\u00D7"))));
    }
}
Toast.defaultProps = {
    id: unique_id_1.default(),
    text: "",
    type: "info",
    icon: null,
    isPaused: () => { return false; },
    onClose: () => { return true; },
    timeout: 0,
    closeable: true,
    style: {},
};
/* <style> */
const Wrapper = glamorous_1.default.div({
    width: "100%",
    display: "table",
    margin: "10px 0",
    boxShadow: "2px 2px 6px 0px rgba(0,0,0,0.5)",
    transition: "opacity 0.5s",
    transform: "translate3d(0,0,0)",
    willChange: "opacity",
    border: "0px solid transparent",
}, (props) => {
    return {
        borderRadius: props.theme.radius,
        opacity: props.hidden ? 0 : 1,
        background: props.theme[props.type],
        color: (props.type === "info" || props.type === "inactive" || props.type === "message")
            ? "#333" : "white",
    };
});
const Component = glamorous_1.default.div({
    boxSizing: "border-box",
    display: "table-row",
});
const Icon = glamorous_1.default.div({
    width: "20px",
    padding: "0 10px",
    display: "table-cell",
    verticalAlign: "middle",
});
const Content = glamorous_1.default.div({
    padding: "20px 0px",
    boxSizing: "border-box",
    fontSize: "16px",
    textAlign: "left",
    display: "table-cell",
    verticalAlign: "middle",
});
const CloseButton = glamorous_1.default.div({
    padding: "5px 6px 0 10px",
    width: "20px",
    textAlign: "right",
    verticalAlign: "top",
    display: "table-cell",
    opacity: 0.8,
}, (props) => {
    return {
        "& .muk-button__item": {
            fontSize: "18px",
            color: (props.type === "info" || props.type === "inactive" || props.type === "message")
                ? "#333 !important" : "white !important",
        },
    };
});
exports.default = Toast;
//# sourceMappingURL=index.js.map