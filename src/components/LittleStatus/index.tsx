import * as React from "react"
import {prefix} from "config"

export interface Props {
    title?: string
    type: "warning" | "success" | "error" | "inactive"
    text?: string
    style?: any
}
export interface State {
}

class LittleStatus extends React.Component<Props, State> {

    private readonly name = prefix + "little_status";

    public static defaultProps: Props = {
        title: "",
        type: "success",
        text: "",
        style: {},
    }

    public render() {

        const className = `${this.name} ${this.name}--${this.props.type}`
        const classIndikator = `${this.name}__indikator tooltip`
        const classText = `${this.name}__text`

        const text = this.props.text ? (<span className={classText}> {this.props.text}</span>) : this.props.children
        return (
            <span className={className}  style={this.props.style}>
                <span className={classIndikator} title={this.props.title}></span>{text}
            </span>
        )
    }
}

export default LittleStatus
