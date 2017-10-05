import * as React from "react";
import { prefix } from "../../config";
import Toast from "../Toast";
import uniqueId from "../../helpers/unique_id";
class Toasts extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "toasts-container";
        this.state = {
            toasts: [],
        };
    }
    isPaused() {
        return this.props.paused;
    }
    renderToasts() {
        return this.props.toasts.map((toast) => {
            return (React.createElement("div", { key: uniqueId(), className: `${this.name}__item` },
                React.createElement(Toast, Object.assign({ isPaused: this.isPaused.bind(this) }, toast.props))));
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
    style: {},
};
export default Toasts;
