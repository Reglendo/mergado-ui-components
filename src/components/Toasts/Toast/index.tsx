import * as React from "react"
import {prefix} from "config"
import IconClose from "mergado-ui-icons/lib/icons/IconClose"
import uniqueId from "helpers/unique_id"

export interface Props {
    id?: string,
    text?: string,
    type?: "warning" | "success" | "error" | "inactive" | "info",
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

    constructor(props: Props) {
        super(props)

        this.state = {
            visible: true,
            paused: false,
            secondsLeft: props.timeout/1000,
        }
    }

    protected componentDidMount() {
        if(this.props.isPaused() !== true && this.props.timeout > 0) {
            this.countdown = setInterval(this.timer.bind(this),1000)
        }
    }

    protected timer() {
        const { secondsLeft } = this.state
        if(secondsLeft < 1) {
            this.hideToast()
            clearInterval(this.countdown)
        } else {
            this.setState({
                visible: true,
                paused: false,
                secondsLeft: secondsLeft > 0 ? secondsLeft - 1 : secondsLeft,
            })
        }
    }

    protected componentWillUnmount() {
        clearInterval(this.countdown)
    }

    protected hideToast() {
        this.setState({
            visible: false,
            paused: true,
            secondsLeft: 0,
        })
    }

    protected removeToast(evt) {
        evt.preventDefault()

        if(this.props.onClose(this.props.id) === true) {
            this.hideToast()
        }
    }

    public render() {

        return (
            <div style={this.props.style} className={`${this.name}__wrapper ${this.state.visible ? "" : "hidden"}`}>
                <div className={`${this.name} ${this.name}--${this.props.type}`}>
                    <div className={`${this.name}__icon`}>{this.props.icon}</div>
                    <div className={`${this.name}__content`}>
                        {this.props.text.replace("%seconds%",this.state.secondsLeft + "s")}
                    </div>
                    {this.props.closeable &&
                        <div className={`${this.name}__close`}>
                            <a className={`${this.name}__button`} onClick={(evt) => {
                                this.removeToast(evt)
                            }}><IconClose /></a>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Toast
