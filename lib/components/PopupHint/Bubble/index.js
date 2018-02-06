import * as React from "react";
import * as ReactDOM from "react-dom";
import { prefix } from "../../../config";
export class Bubble extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "popup_hint__bubble";
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
            try {
                ReactDOM.unmountComponentAtNode(this.popup);
                document.getElementById("app").removeChild(this.popup);
            }
            catch (e) {
            }
        }
    }
    _renderLayer() {
        ReactDOM.render((React.createElement("span", null, this.props.children)), this.popup);
    }
    render() {
        return (React.createElement("div", null));
    }
}
