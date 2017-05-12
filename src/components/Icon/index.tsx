import * as React from "react"
import {prefix} from "../../config"
import  * as Icons from "mergado-ui-icons/lib"

export interface Props {
    type?: string
    name?: string

    size?: number
    text?: string
    title?: string
    style?: any
}
export interface State {
}

class Icon extends React.Component<Props, State> {

    readonly name = prefix + "icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--${this.props.type}`
        let iconName : string;
        if(this.props.name) {
            iconName = this.props.name
        } else {
            iconName = `Icon` + `${this.props.type}`.replace(/\b(\w)/g, s => s.toUpperCase()).replace('-','')
        }

        let icon = Icons[iconName] ? Icons[iconName] : null

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    {icon}
                </svg>
                {this.props.text ? (
                    <span className={`${this.name}__text`}>
                        {this.props.text}
                    </span>
                ) : null}
            </span>
        )
    }
}

export default Icon