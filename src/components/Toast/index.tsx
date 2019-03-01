import * as React from "react"
import css from "@reglendo/cxs/component"

import {prefix} from "../../config"
import uniqueId from "../../helpers/unique_id"
import Button from "../Button"
import {Type} from "../../helpers/types"
import PropTypes from "prop-types"
import Grid from "../Grid"

export interface Props {
    id?: string,
    text?: string,
    type?: Type,
    icon?: JSX.Element
    isPaused?: () => boolean
    onClose?: (id: string) => boolean
    timeout?: number
    closeable?: boolean
    style?: any
    className?: string
    onClick?: (e:any) => void

}
export interface State {
    visible: boolean,
    paused: boolean,
    secondsLeft: number
    removed: boolean
}

class Toast extends React.PureComponent<Props, State> {
    private readonly name = prefix + "toast";
    private countdown;
    public static defaultProps: Props = {
        id: uniqueId(),
        text: "",
        type: "info",
        icon: null,
        isPaused: () => { return false },
        onClose: () => { return true },
        timeout: 0,
        closeable: true,
        style: {},
    }

    public refs: {
        [key: string]: Element,
        wrapper: HTMLElement,
    }
    constructor(props: Props) {
        super(props)

        this.state = {
            visible: true,
            paused: false,
            removed: false,
            secondsLeft: props.timeout/1000,
        }
    }

    public componentDidMount() {
        if(this.props.isPaused() !== true && this.props.timeout > 0) {
            this.countdown = setInterval(this.timer.bind(this),1000)
        }
    }

    protected timer() {
        const { secondsLeft } = this.state
        if(secondsLeft <= 1) {
            this.hideToast()
            setTimeout(o => this.removeToast(), 300)
            clearInterval(this.countdown)
        } else {
            this.setState({
                secondsLeft: secondsLeft > 0 ? secondsLeft - 1 : secondsLeft,
            })
        }
    }

    protected hideToast() {
        this.setState({
            visible: false,
            paused: true,
            secondsLeft: 1,
        })
    }

    public componentWillUnmount() {
        if(this.countdown) {
            clearInterval(this.countdown)
        }
    }

    protected removeToast() {
        this.setState({
            removed: true,
        })
    }

    onClose = (evt) => {
        evt.preventDefault()
        if(this.props.onClose(this.props.id) === true) {
            this.hideToast()
            setTimeout(o => this.removeToast(), 300)
            clearInterval(this.countdown)
        }
        evt.stopPropagation()
    }

    onClick = (e) => {
        if(this.props.onClick) {
            this.onClose(e)
            this.props.onClick(e)
        }
    }

    public render() {
        return (
            <Wrapper type={this.props.type}
                    onClick={this.props.onClick ? this.onClick : undefined}
                    cols={"auto 1fr 40px"}
                    valign="center"
                    removed={this.state.removed}
                    s={this.props.style} hidden={!this.state.visible}
                    className={`${this.name}__wrapper ${this.state.visible ? "" : "ended"} ${this.props.className || ""}`}>
                    <Icon className={`${this.name}__icon`}>{this.props.icon}</Icon>
                    <Content className={`${this.name}__content`}>
                            {this.props.text && typeof this.props.text == "string" ?
                                this.props.text.replace("%seconds%",this.state.secondsLeft + "s")
                            :
                                this.props.children }
                    </Content>
                    {this.props.closeable &&
                            <CloseButton type={this.props.type}>
                                <Button className={`${this.name}__button`}
                                    color="nocolor"
                                    size="tiny"
                                    type="void"
                                    onClick={this.onClose}
                                >×</Button>
                            </CloseButton>
                    }
            </Wrapper>
        )
    }
}

/* <style> */
const Wrapper = css(Grid)({
    width: "100%",
    transform: "translate3d(0,0,0)",
    willChange: "max-height",
    border: "0px solid transparent",
},(props: any) => {
    const type = props.type ? props.type : "info"
    return {
        cursor: props.onClick !== undefined ? "pointer" : undefined,
        transition: props.removed ? "max-height 0.2s !important" : undefined,
        margin: props.removed ? "0px" : "10px 0",
        boxShadow: props.type === "success" ? "rgba(0, 0, 0, 0.3) 2px 3px 5px 0px"
                 : props.type === "error" ? "rgba(0, 0, 0, 0.3) 2px 3px 5px 0px"
                                            : "rgba(0, 0, 0, 0.3) 2px 3px 5px 0px",
        borderRadius: "2px",
        opacity: props.hidden ? 0 : 1,
        background: type === "transparent" ? "transparent" : type === "material" ? "#222" : props.theme[type],
        color: (type === "transparent" || type === "info" || type === "inactive" || type === "message")
                    ? "#333" : "white",
        ...props.s,
        maxHeight: props.removed ? "0px !important" : (props.s && props.s.maxHeight ? props.s.maxHeight : "100px"),
    }
})

Wrapper.propTypes = {
    type: PropTypes.string,
    removed: PropTypes.bool,
    hidden: PropTypes.bool,
    s: PropTypes.any,
}

const Icon = css("div")({
    padding: "0 10px",
    alignSelf: "center",
})

const Content = css("div")({
    padding: "20px 0px",
})

const CloseButton = css("div")({
    padding: "5px 6px 0 10px",
    textAlign: "right",
    alignSelf: "start",
},(props: any) => {
    const type = props.type ? props.type : "info"
    return {
        "& .muk-button": {
            fontSize: "18px",
            color:  ( type === "inactive" || type === "message" || type === "info")
                    ? "#333 !important" : "white !important",
        },
    }
})

export default Toast
