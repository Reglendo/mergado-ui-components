import * as React from "react"
import * as ReactDOM from "react-dom"
import {prefix} from "../../../config"

export interface Props {
}
export interface State {}

class Bubble extends React.Component<Props, State> {

    readonly name = prefix+"popup_hint__bubble";
    public popup;


    componentDidMount() {
        this.popup = document.createElement("span")
        this.popup.className = `${this.name}__wrapper`
        this.popup.ref = 'bubble'
        document.getElementById('app').appendChild(this.popup)
        this._renderLayer()
    }

    componentDidUpdate() {
        this._renderLayer();
    }
    
    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    }

    _renderLayer() {
        ReactDOM.render((<span >{this.props.children}</span>), this.popup);
    }

    render() {
        return (<div></div>);
    }
}

export default Bubble