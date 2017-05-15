"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const close_1 = require("mergado-ui-icons/lib/icons/close");
const unique_id_1 = require("helpers/unique_id");
class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "toast";
        this.state = {
            visible: true,
            paused: false,
            secondsLeft: props.timeout / 1000
        };
    }
    componentDidMount() {
        if (this.props.isPaused() !== true && this.props.timeout > 0) {
            var interval = window.setInterval(() => {
                if (this.state.secondsLeft < 1) {
                    this.hideToast();
                    window.clearInterval(interval);
                }
                else {
                    this.setState({
                        visible: true,
                        paused: false,
                        secondsLeft: this.state.secondsLeft > 0 ? this.state.secondsLeft - 1 : this.state.secondsLeft
                    });
                }
            }, 1000);
        }
    }
    hideToast() {
        this.setState({
            visible: false,
            paused: true,
            secondsLeft: 0
        });
    }
    removeToast(evt) {
        evt.preventDefault();
        if (this.props.onClose(this.props.id) === true) {
            this.hideToast();
        }
    }
    render() {
        return (React.createElement("div", { style: this.props.style, className: `${this.name}__wrapper ${this.state.visible ? '' : 'hidden'}` },
            React.createElement("div", { className: `${this.name} ${this.name}--${this.props.type}` },
                React.createElement("div", { className: `${this.name}__icon` }, this.props.icon),
                React.createElement("div", { className: `${this.name}__content` }, this.props.text.replace('%seconds%', this.state.secondsLeft + 's')),
                this.props.closeable &&
                    React.createElement("div", { className: `${this.name}__close` },
                        React.createElement("a", { className: `${this.name}__button`, onClick: (evt) => {
                                this.removeToast(evt);
                            } },
                            React.createElement(close_1.default, null))))));
    }
}
Toast.defaultProps = {
    id: unique_id_1.default(),
    text: '',
    type: "info",
    icon: null,
    isPaused: () => { return false; },
    onClose: () => { return true; },
    timeout: 0,
    closeable: true,
    style: {}
};
exports.default = Toast;
//# sourceMappingURL=index.js.map