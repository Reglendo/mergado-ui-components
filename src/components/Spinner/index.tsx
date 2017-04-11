import * as React from "react"
import {prefix} from "../../config"


export interface Props {
    type?: string
    /** Maximum dimension (width or height) */
    size?: number
    loaded?: boolean
    color?: "black" | "white" | "green" | "blue"
    speed?: number
    style?: any
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
        color: "white",
        style: {},
        speed: 1
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
        const { size, type, color, speed } = this.props

        var defaultStyle : any = {  width: size,
                                    height: size,
                                    borderColor: `rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8)`,
                                    fontSize: size,
                                    animationDuration: 1.2/speed + 's'
                                }
        if(color == 'black') {
            defaultStyle.borderColor = `rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)`
        } else if(color == 'green') {
            defaultStyle.borderColor = `rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)`
        } else if(color == 'blue') {
            defaultStyle.borderColor = `rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)`
        }

        if(type == 'dashed') {
            defaultStyle.borderStyle = 'dashed'
        } else if(type == 'dotted') {
            defaultStyle.borderStyle = 'dotted'
        }

        if(type == 'mergado') {
            defaultStyle = { borderWidth: size / 2}
            defaultStyle.animationDuration = 10/speed + 's';
        }


        var object : any = Object
        var style = object.assign(defaultStyle, this.props.style)
        return ( <div className={`${this.name} ${this.name}--${this.props.type}`} style={style}>
                    <div className={`${this.name}__content`} style={{overflow: 'hidden', maxHeight: '0px', maxWidth: '0px'}}>{this.props.children}</div>
                </div>)
    }
}

export default Spinner
