import * as React from "react"
import {prefix} from "../../../config"
import Icon from "../../Icon"
import "../../../stylesheets/components/_toast.sass"
import uniqueId from "../../../helpers/unique_id"

export interface Props {
    id?: string,
    text?: string,
    type?: "warning" | "success" | "error" | "inactive" | "info",
    icon?: Icon
    isPaused?: () => boolean
    onClose?: (number) => boolean
    timeout?: number
}
export interface State {
    visible: boolean,
    paused: boolean,
    secondsLeft: number
}

class Toast extends React.Component<Props, State> {

    readonly name = prefix + "toast";

    public static defaultProps: Props = {
        id: uniqueId(),
        text: '',
        type: "info",
        icon: null,
        onClose: () => { return true; },
        timeout: 0
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            visible: true,
            paused: false,
            secondsLeft: this.props.timeout/1000
        }
    }

    componentDidMount() {

        if(this.props.isPaused() !== true && this.props.timeout > 0) {
            var interval = window.setInterval(() => {
                if(this.state.secondsLeft < 1) {
                    this.hideToast()
                    window.clearInterval(interval)
                } else {
                    this.setState({
                        visible: true,
                        paused: false,
                        secondsLeft: this.state.secondsLeft > 0 ? this.state.secondsLeft - 1 : this.state.secondsLeft
                    })
                }
            },1000)
        }
    }

    hideToast() {
        this.setState({
            visible: false,
            paused: true,
            secondsLeft: 0
        })
    }

    removeToast(evt) {
        evt.preventDefault()

        if(this.props.onClose(this.props.id) === true) {
            this.hideToast()
        }
    }

    render() {
        console.log(this.state)
        return (
        <div className={`${this.name}__wrapper ${this.state.visible ? '' : 'hidden'}`}>
            <div className={`${this.name} ${this.name}--${this.props.type}`}>
                {this.props.icon ? (
                        <div className={`${this.name}__icon`}>{this.props.icon}</div>
                    ): null}
                <div className={`${this.name}__content`}>
                    {this.props.text.replace('%seconds%',this.state.secondsLeft + 's')}
                </div>
                <div className={`${this.name}__close`}>
                    <a className={`${this.name}__button`} onClick={(evt) => {
                        this.removeToast(evt)
                    }}><Icon type="close" /></a>
                </div>
            </div>
        </div>
        )
    }
}

export default Toast