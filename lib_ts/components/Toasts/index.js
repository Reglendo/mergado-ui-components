"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Toast_1 = require("components/Toasts/Toast");
const unique_id_1 = require("helpers/unique_id");
class Toasts extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "toasts-container";
        this.state = {
            toasts: []
        };
    }
    isPaused() {
        return this.props.paused;
    }
    renderToasts() {
        return this.props.toasts.map((toast) => {
            return (React.createElement("div", { key: unique_id_1.default(), className: `${this.name}__item` },
                React.createElement(Toast_1.default, Object.assign({ isPaused: this.isPaused.bind(this) }, toast.props))));
        });
    }
    render() {
        return (React.createElement("div", { className: `${this.name}`, style: this.props.style },
            React.createElement("div", { className: `${this.name}__wrapper` }, this.renderToasts())));
    }
}
Toasts.defaultProps = {
    toasts: [],
    paused: false,
    style: {}
};
exports.default = Toasts;
//# sourceMappingURL=index.js.map