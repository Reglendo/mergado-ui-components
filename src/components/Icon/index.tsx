import * as React from "react"
import {prefix} from "../../config"
import * as Icons from "@reglendo/mergado-ui-icons/lib"

export interface Props {
    type?: string
    name?: string
    color?: string
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
    textFirst?: boolean
}
export interface State {
}
export class Icon extends React.Component<Props, State> {

    private readonly name = prefix + "icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 15,
        style: {},
        name: "",
        text: "",
        title: "",
        addClass: "",
        color: null,
        viewBox: "0 0 40 40",
        textFirst: false,
    }

    public render() {

        const className = `${this.name} ${this.name}--${this.props.type} ${this.props.addClass}`
        let iconName: string;
        if(this.props.name) {
            iconName = this.props.name
        } else {
            iconName = `Icon` + `${this.props.type}`.replace(/\b(\w)/g, s => s.toUpperCase()).replace("-","")
        }

        const Icon = Icons[iconName] ? Icons[iconName] : null

        return (
            <Icon {...this.props} />
        )
    }
}
