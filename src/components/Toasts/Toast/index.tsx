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
    onClose?: (number) => boolean
}
export interface State {
    visible: boolean
}

class Toast extends React.Component<Props, State> {

    readonly name = prefix + "toast";

    public static defaultProps: Props = {
        id: uniqueId(),
        text: '',
        type: "info",
        icon: null,
        onClose: () => { return true; }
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            visible: true
        }
    }

    removeToast(evt) {
        evt.preventDefault()

        if(this.props.onClose(this.props.id) === true) {
            this.setState({
                visible: false
            })
        }
    }

    render() {
        return (
        <div className={`${this.name}__wrapper ${this.state.visible ? '' : 'hidden'}`}>
            <div className={`${this.name} ${this.name}--${this.props.type}`}>
                {this.props.icon ? (
                        <div className={`${this.name}__icon`}>{this.props.icon}</div>
                    ): null}
                <div className={`${this.name}__content`}>
                    {this.props.text}
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