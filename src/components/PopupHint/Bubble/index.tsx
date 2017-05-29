import * as React from "react"
import * as ReactDOM from "react-dom"
import {prefix} from "config"

export interface Props {
}
export interface State {
}

/**
 * disable-styleguide
 */
class Bubble extends React.Component<Props, State> {

    private readonly name = prefix + "popup_hint__bubble";
    public popup;

    protected componentDidMount() {
        this.popup = document.createElement("span")
        this.popup.className = `${this.name}__wrapper`
        this.popup.ref = "bubble"
        document.getElementById("app").appendChild(this.popup)
        this._renderLayer()
    }

    protected componentDidUpdate() {
        this._renderLayer();
    }

    protected componentWillUnmount() {
        if(this.popup) {
            ReactDOM.unmountComponentAtNode(this.popup);
            document.getElementById("app").removeChild(this.popup);
        }
    }

    protected _renderLayer() {
        ReactDOM.render((<span >{this.props.children}</span>), this.popup);
    }

    public render() {
        return (<div/>);
    }
}

export default Bubble
