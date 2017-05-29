"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const config_1 = require("config");
/**
 * disable-styleguide
 */
class Bubble extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "popup_hint__bubble";
    }
    componentDidMount() {
        this.popup = document.createElement("span");
        this.popup.className = `${this.name}__wrapper`;
        this.popup.ref = "bubble";
        document.getElementById("app").appendChild(this.popup);
        this._renderLayer();
    }
    componentDidUpdate() {
        this._renderLayer();
    }
    componentWillUnmount() {
        if (this.popup) {
            ReactDOM.unmountComponentAtNode(this.popup);
            document.getElementById("app").removeChild(this.popup);
        }
    }
    _renderLayer() {
        ReactDOM.render((React.createElement("span", null, this.props.children)), this.popup);
    }
    render() {
        return (React.createElement("div", null));
    }
}
exports.default = Bubble;
//# sourceMappingURL=index.js.map