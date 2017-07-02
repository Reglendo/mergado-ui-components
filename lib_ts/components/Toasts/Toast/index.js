"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const IconClose_1 = require("mergado-ui-icons/lib/icons/IconClose");
const unique_id_1 = require("helpers/unique_id");
const styled_components_1 = require("styled-components");
const Button_1 = require("components/Forms/Button");
/* <style> */
const Wrapper = styled_components_1.default.div `
    width: 100%;
    display: table;
    margin: 10px 0;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);
    transition: opacity 0.5s;
    transform: translate3d(0,0,0);
    will-change: opacity;
    opacity: ${props => props.hidden ? 0 : 1}
`;
const Component = styled_components_1.default.div `
    background: ${props => {
    switch (props.type) {
        case "success":
            return "#16c084";
        case "error":
            return "#e7434c";
        case "warning":
            return "#ff7f2a";
        case "inactive":
            return "#ccc";
        case "info":
        default:
            return "#fff";
    }
}};
    border: 1px solid #dbcba3;
    box-sizing: border-box;
    display: table-row;
    color: ${props => props.type === "info" || props.type === "inactive" ? "#333" : "white"};
`;
const Icon = styled_components_1.default.div `
    width: 20px;
    padding: 0 10px;
    display: table-cell;
    vertical-align: middle;
`;
const Content = styled_components_1.default.div `
    padding: 20px 0px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
`;
const Close = styled_components_1.default.div `
`;
const CloseButton = styled_components_1.default(Button_1.default) `
    text-decoration: none;
    padding: 0 20px 0 10px;
    width: 20px;
    text-align: right;
    vertical-align: middle;
    display: table-cell;

    svg, path {
        fill:  ${props => props.toastType === "info" || props.toastType === "inactive" ? "#333" : "white"} !important;
    }
    button:focus {
        outline: none;
    }
`;
/* </style> */
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
        return (React.createElement(Wrapper, { innerRef: (o) => { this.refWrapper = o; }, style: this.props.style, hidden: !this.state.visible, className: `${this.name}__wrapper ${this.state.visible ? "" : this.name + "--hidden"}` },
            React.createElement(Component, { type: this.props.type, className: `${this.name} ${this.name}--${this.props.type}` },
                React.createElement(Icon, { className: `${this.name}__icon` }, this.props.icon),
                React.createElement(Content, { className: `${this.name}__content` }, this.props.text.replace("%seconds%", this.state.secondsLeft + "s")),
                this.props.closeable &&
                    React.createElement(CloseButton, { className: `${this.name}__button`, icon: React.createElement(IconClose_1.default, { style: { lineHeight: "40px" } }), color: "nocolor", size: "tiny", toastType: this.props.type, onClick: evt => this.onClose(evt) }))));
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
exports.default = Toast;
//# sourceMappingURL=index.js.map