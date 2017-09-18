import * as React from "react"
import glamorous from "glamorous"

import {prefix} from "../../../config"
import uniqueId from "../../../helpers/unique_id"
import Button from "../../../components/Forms/Button"
import {Type} from "../../../helpers/types"


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

}
export interface State {
    visible: boolean,
    paused: boolean,
    secondsLeft: number
}

class Toast extends React.Component<Props, State> {
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

    public refWrapper: any;

    constructor(props: Props) {
        super(props)

        this.state = {
            visible: true,
            paused: false,
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
            this.removeToast()
            clearInterval(this.countdown)
        } else {
            if (secondsLeft <= 2) {
                this.hideToast()
            }
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
        clearInterval(this.countdown)
    }

    protected removeToast() {
        this.refWrapper.style.display = "none"
    }

    protected onClose(evt) {
        evt.preventDefault()
        if(this.props.onClose(this.props.id) === true) {
            this.hideToast()
            this.countdown = setInterval(this.timer.bind(this),500)
        }
    }

    public render() {
        return (
            <Wrapper type={this.props.type} innerRef={(o) => { this.refWrapper = o } }
                    style={this.props.style} hidden={!this.state.visible}
                    className={`${this.name}__wrapper ${this.state.visible ? "" : this.name+"--hidden"}`}>
                    <Icon className={`${this.name}__icon`}>{this.props.icon}</Icon>
                    <Content className={`${this.name}__content`}>
                            {this.props.text ?
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
                                    toastType={this.props.type}
                                    onClick={evt => this.onClose(evt) }
                                >×</Button>
                            </CloseButton>
                    }
            </Wrapper>
        )
    }
}

/* <style> */
const Wrapper = glamorous.div({
    width: "100%",
    display: "table",
    margin: "10px 0",
    boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 4px 0px",
    transition: "opacity 0.5s",
    transform: "translate3d(0,0,0)",
    willChange: "opacity",
    border: "0px solid transparent",
},(props: any) => {
    return {
        borderRadius: props.theme.radius,
        opacity: props.hidden ? 0 : 1,
        background: props.theme[props.type],
        color: (props.type === "info" || props.type === "inactive" || props.type === "message")
            ? "#333" : "white",
    }
})

const Component = glamorous.div({
    boxSizing: "border-box",
    display: "table-row",
})

const Icon = glamorous.div({
    width: "20px",
    padding: "0 10px",
    display: "table-cell",
    verticalAlign: "middle",
})

const Content = glamorous.div({
    padding: "20px 0px",
    boxSizing: "border-box",
    fontSize: "16px",
    textAlign: "left",
    display: "table-cell",
    verticalAlign: "middle",
})

const CloseButton = glamorous.div({
    padding: "5px 6px 0 10px",
    width: "20px",
    textAlign: "right",
    verticalAlign: "top",
    display: "table-cell",
    opacity: 0.8,
},(props: any) => {
    return {
        "& .muk-button__item": {
            fontSize: "18px",
            color:  (props.type === "info" || props.type === "inactive" || props.type === "message")
                    ? "#333 !important" : "white !important",
        },
    }
})

export default Toast
