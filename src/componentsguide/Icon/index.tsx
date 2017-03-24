import * as React from "react"
import {prefix} from "../../config"
import * as Icons from "mergado-ui-icons/lib"
import "../../stylesheets/components/icon/_icon.sass"

export interface Props {
	/** Icon type */
    type: string

    /** Size */
    size: number

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
        
        console.log(Icons)
        
		let className = `${this.name} ${this.name}--${this.props.type}`
        let iconName = `Icon`+`${this.props.type}`.replace(/\b(\w)/g, s => s.toUpperCase());
        
        const icon = Icons[iconName];

        return (
            <span className={className}>
                <svg style={{verticalAlign: "middle"}} preserveAspectRatio='xMidYMid meet'
                  fill='currentColor'
                  height={this.props.size}
                  width={this.props.size}
                  viewBox={`0 0 40 40`}
                  >
                    {icon}
                </svg>
                <span className="icon__text" style={{fontSize: this.props.size, verticalAlign: "middle"}}>
                    {this.props.text}
                </span>
            </span>
        ) 
    }
}

export default Icon