import * as React from "react"
import {prefix} from "../../config"

export interface Props {
    type?: string
    /** Maximum dimension (width or height) */
    size?: number
    loaded?: boolean
    color?: "black" | "white" | "green" | "blue"
}
export interface State {
    loaded: boolean
}

class Spinner extends React.Component<Props, State> {

    readonly name = prefix + "spinner";
    constructor(props: Props) {
        super(props)

        this.state = {
            loaded: false
        }
    }

    public static defaultProps: Props = {
        type: "default",
        size: 30,
        loaded: false,
        color: "white"
    }

    updateState(props) {
        var loaded = this.state.loaded

        if(props.loaded) {
            loaded = !!props.loaded;
        }

        this.setState({
            loaded: loaded
        })
    }

    componentDidMount() {
        this.updateState(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps);
    }

    render() {

        if(this.state.loaded) {
            return (<div>{this.props.children}</div>)
        }

        var style : any = { width: this.props.size,
                            height: this.props.size,
                            borderColor: `rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8)`,
                            fontSize: this.props.size
                        }
        if(this.props.color == 'black') {
            style.borderColor = `rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)`
        } else if(this.props.color == 'green') {
            style.borderColor = `rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)`
        } else if(this.props.color == 'blue') {
            style.borderColor = `rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)`
        }

        if(this.props.type == 'dashed') {
            style.borderStyle = 'dashed'
        } else if(this.props.type == 'dotted') {
            style.borderStyle = 'dotted'
        }

        if(this.props.type == 'mergado') {
            style = { borderWidth: this.props.size / 2}
        }

        return ( <div className={`${this.name} ${this.name}--${this.props.type}`} style={style}></div> )
    }
}

export default Spinner