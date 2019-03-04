import * as React from "react"
import css from "css"
import Div from "../Div"
import * as Color from "color"
import {prefix} from "../../config"
import {animation as pulseAnimation} from "../Animations/Pulse"
import {animation as rotateAnimation} from "../Animations/Rotate"
import Theme from "components/Theme"

export interface Props {
    type?: "default" | "dashed" | "dotted" | "mergado" | "bubbles"
    /** Maximum dimension (width or height) */
    size?: number
    color?: string
    speed?: number
    style?: any
    className?: string
}
export interface State {
}

class Spinner extends React.PureComponent<Props, State> {

    private readonly name = prefix + "spinner";

    public static defaultProps: Props = {
        type: "default",
        size: 30,
        color: Theme.decoration,
        style: {},
        speed: 1,
    }

    public render() {

        const { size, type, color, speed,className,...others } = this.props

        const containerStyle: any = {  width: `${size}px`, height: `${type === "bubbles" ? size/1.5 : size}px` }
        return (
            <Div {...containerStyle} display={"inline-block"} overflow={"hidden"}
                className={`${this.name} ${this.name}--${this.props.type} ${className || ""}`}
                {...others}
                >
                <AnimatedWrapper {...this.props} className={`${this.name}__wrapper`}>
                    <div className={`${this.name}__content`}></div>
                </AnimatedWrapper>
            </Div>
        )
    }
}

const mergadoColors = {
    left: "#7fba2c",
    bottom: "#007b20",
    right: "#00a9b8",
    top: "transparent",
}

const Wrapper = css("div")({

}, (props: any) => {
    let type = {}
    let color = {}
    if(props.type === "mergado") {
        type = {
            borderWidth: (props.size / 2) + "px",
            boxSizing: "border-box",
            borderStyle: "solid",
            borderColor: `${mergadoColors.top} ${mergadoColors.left} ${mergadoColors.right} ${mergadoColors.bottom}`,
            position: "relative",
            ".muk-spinner__content": {
                maxWidth: 0,
                maxHeight: 0,
                overflow: "hidden",
            },
        }
    } else if(props.type === "bubbles") {
        type = {
            borderRadius: "50%",
            position: "relative",
            textIndent: "-9999em",
            color: props.color ? props.color : Theme.decoration,
            width: `${props.size / 3 - 2}px`,
            height: `${props.size / 3 - 2}px`,
            margin: "0 auto",
            borderWidth: 0,
            ":before,:after": {
                content: '" "',
                display: "inline-block",
                color: props.color ? props.color : Theme.decoration,
                position: "absolute",
                borderRadius: "50%",
                top: "0",
                height: `${props.size / 3 - 2}px`,
                width: `${props.size / 3 - 2}px`,
            },
            ":before": {
                left: `-${props.size / 3}px`,
            },
            ":after": {
                left: `${props.size / 3}px`,
            },
        }
    } else {
        if(props.color === "black") {
            color = { borderColor: `rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)` }
        } else if(props.color === "green") {
            color = { borderColor: `rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)` }
        } else if(props.color === "blue") {
            color = { borderColor: `rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)` }
        } else {
            color = { borderColor: `
                                        ${Color(Theme.decoration).fade(1).string()}
                                        ${Color(Theme.decoration).fade(0.8).string()}
                                        ${Color(Theme.decoration).fade(0.6).string()}
                                        ${Color(Theme.decoration).fade(0.4).string()}
                                        `}
        }
        type =  {
            borderStyle: props.type === "default" ? "solid" : props.type,
            borderWidth: (props.type === "dashed" || props.type === "dotted") ? "0.1em" : "0.2em",
            display: "inline-block",
            margin: "0px",
            boxSizing: "border-box",
            position: "relative",
            transform: "translate3d(0,0,0)",
            willChange: "transform",
            verticalAlign: "top",
        }
    }

    return {
        width: props.size + "px",
        height: props.size + "px",
        fontSize: props.size + "px",
        borderRadius: "100%",
        ...type,
        ...color,
    }
})


const animations = props => {
    if(props.type === "mergado") {
        return {
            ...pulseAnimation,
            animation: `pulse 10s infinite linear`
        }
    } else if(props.type === "bubbles") {
        return {
            "@keyframes bubbles": {
                "0%, 80%, 100%": {
                    boxShadow: `0 ${props.size/3}px 0 -${props.size/5}px`,
                },
                "40%": {
                    boxShadow: `0 ${props.size/3}px 0 0`,
                },
            },
            animationDelay: "-0.16s",
            "&,:before,:after": {
                animation: `bubbles 1.8s infinite ease-in-out`,
                animationFillMode: "both",
                transform: "translateZ(0)",
                willChange: "box-shadow",
            },
            ":before": {
                animationDelay: "-0.32s",
            },
            ":after": {
                animationDelay: "0s",
            },
        }
    } else {
        return {
            ...rotateAnimation,
            willChange: "transform",
            transform: "translateZ(0)",
            animation: `rotate 1.2s infinite linear`
        }
    }
}

const AnimatedWrapper = css(Wrapper)(animations)

export default Spinner
