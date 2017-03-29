import * as React from "react"
import {prefix} from "../../config"
import "../../stylesheets/components/icon/_icon.sass"

export interface Props {
	/** Icon type */
    type: string

    /** Size */
    size?: number

	/** Icon text */
	text?: string
	/** Icon title */
    title?: string

}
export interface State {}

class Icon extends React.Component<Props, State> {

    readonly name = prefix+"icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 16,
    }

    render() {
        var iconImport;
        try {
            iconImport = require(`mergado-ui-icons/lib/export/tsx/${this.props.type}.js`)
        } catch(e) {
        }

		let className = `${this.name} ${this.name}--${this.props.type}`
        let iconName = `Icon`+`${this.props.type}`.replace(/\b(\w)/g, s => s.toUpperCase());
        let icon = iconImport[iconName] ? iconImport[iconName] : null

        return (
            <span className={className}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                  fill='currentColor'
                  height={this.props.size}
                  width={this.props.size}
                  viewBox={`0 0 40 40`}
                  >
                    {icon}
                </svg>
                <span className={`${this.name}__text`} style={{fontSize: this.props.size+'px'}}>
                    {this.props.text}
                </span>
            </span>
        ) 
    }
}

export default Icon