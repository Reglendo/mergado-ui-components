import * as React from "react"
import {prefix} from "../../config"
import * as Icons from "@reglendo/mergado-ui-icons/lib"

import {Span, Svg} from "glamorous"

export interface Props {
    type?: string
    name?: string

    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
}
export interface State {
}

class Icon extends React.Component<Props, State> {

    private readonly name = prefix + "icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 15,
        style: {},
        name: "",
        text: "",
        title: "",
        addClass: "",
        viewBox: "0 0 40 40",
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

export default Icon
