import * as React from "react"
import {prefix} from "config"
import styled from "styled-components"

export interface Props {
    type?: "default" | "dashed" | "dotted" | "mergado"
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

/* <style> */
const Component = styled.div`
    display: inline-block;
    overflow: hidden;
`

const Wrapper = styled.div`
    display: inline-block;
    margin: 0px;
    border-radius: 80%;
    box-sizing: border-box;
    position: relative;
    border-style: solid;
    border-width: ${props => { return (props.type === "dashed" || props.type === "dotted") ? "0.1em" : "0.2em" }};
    border-color: rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8);
    transform: translateZ(0);
    animation: spin 1.2s infinite linear;
    vertical-align: top;
    @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`

const colors = {
    left: "#7fba2c",
    bottom: "#007b20",
    right: "#00a9b8",
    top: "transparent",
}
const Mergado = Wrapper.extend`
    border-width: 12px;
    box-sizing: border-box;
    border-style: solid;
    border-color: ${colors.top} ${colors.left} ${colors.right} ${colors.bottom};

    animation: pulse 10s linear infinite;
    position: relative;

    .${prefix}spinner__content {
        max-width: 0;
        max-height: 0;
        overflow: hidden;
    }

    @keyframes pulse {
        0% {
            border-left-color: ${colors.left};
            border-bottom-color: ${colors.bottom};
            border-right-color: ${colors.right};
            border-top-color: ${colors.top};
        }
        25% {
            border-left-color: ${colors.right};
            border-bottom-color: ${colors.top};
            border-right-color: ${colors.left};
            border-top-color: ${colors.bottom};
        }
        50% {
            border-left-color: ${colors.bottom};
            border-bottom-color: ${colors.left};
            border-right-color: ${colors.top};
            border-top-color: ${colors.right};
        }
        75% {
            border-left-color: ${colors.top};
            border-bottom-color: ${colors.right};
            border-right-color: ${colors.bottom};
            border-top-color: ${colors.left};
        }
        100% {
            border-left-color: ${colors.left};
            border-bottom-color: ${colors.bottom};
            border-right-color: ${colors.right};
            border-top-color: ${colors.top};
        }
    }
`

const Content = styled.div`
`
/* </style> */

class Spinner extends React.Component<Props, State> {

    private readonly name = prefix + "spinner";
    constructor(props: Props) {
        super(props)

        this.state = {
            loaded: false,
        }
    }

    public static defaultProps: Props = {
        type: "default",
        size: 30,
        loaded: false,
        color: "white",
        style: {},
        speed: 1,
    }

    protected updateState(props) {
        let loaded = this.state.loaded

        if(props.loaded) {
            loaded = !!props.loaded;
        }

        this.setState({
            loaded,
        })
    }

    protected componentDidMount() {
        this.updateState(this.props);
    }

    protected componentWillReceiveProps(nextProps) {
        this.updateState(nextProps);
    }

    public render() {

        if(this.state.loaded) {
            return (<span style={{opacity: 1}}>{this.props.children}</span>)
        }
        const { size, type, color, speed } = this.props

        // TODO: refactor with styled-components
        let defaultStyle: any = {
                    width: size,
                    height: size,
                    borderColor: `rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8)`,
                    fontSize: size,
                    animationDuration: 1.2/speed + "s",
                }
        const containerStyle: any = {
                                    width: size,
                                    height: size,
                                }
        if(color === "black") {
            defaultStyle.borderColor = `rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)`
        } else if(color === "green") {
            defaultStyle.borderColor = `rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)`
        } else if(color === "blue") {
            defaultStyle.borderColor = `
                                rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)
                                `
        }

        if(type === "dashed" || type === "dotted") {
            defaultStyle.borderStyle = type
        } else
        if(type === "mergado") {
            defaultStyle = { borderWidth: size / 2 }
            defaultStyle.animationDuration = 10/speed + "s";
        }

        const object: any = Object
        const style = object.assign(defaultStyle, this.props.style)
        const WrapperType = this.props.type === "mergado" ? Mergado : Wrapper
        return (
            <Component className={`${this.name} ${this.name}--${this.props.type}`} style={containerStyle}>
                <WrapperType type={this.props.type} className={`${this.name}__wrapper`} style={style}>
                    <Content className={`${this.name}__content`} style={{opacity: 0}}>{this.props.children}</Content>
                </WrapperType>
            </Component>
        )
    }
}

export default Spinner
