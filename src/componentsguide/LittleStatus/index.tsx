import * as React from "react"
import {prefix} from "../../config"

import "../../stylesheets/components/_little_status.sass"

export interface Props {
	/** Status title */
    title: string
	/** Status type */
    type: "warning" | "success" | "error" | "inactive" | ""
	/** Status text */
	text?: string
}
export interface State {}

class LittleStatus extends React.Component<Props, State> {

	readonly name = prefix+"little_status";

	
    public static defaultProps: Props = {
        title: "",
        type: "success",
		text: "",
    }

    render() {
		
		let className = `${this.name} ${this.name}--${this.props.type}`
		let classIndikator = `${this.name}__indikator tooltip`
		let classText = `${this.name}__text`
		
		let text = this.props.text ? (<span className={classText}> {this.props.text}</span>) :  ""
        return (
            <span className={className}>
				<span className={classIndikator} title={this.props.title}></span>{text}
			</span>
        ) 
    }
}

export default LittleStatus