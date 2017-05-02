import * as React from "react"
import {prefix} from "../../../config"

export interface Props {
    current?: boolean
    link?: JSX.Element
    style?: any
}

export interface State {
}


/**
 * disable-styleguide
 */
class WizardStep extends React.Component<Props, State> {

    readonly name = prefix + "wizard_nav__item";

    public static defaultProps: Props = {
        current: false,
        link: (<a href="#"/>),
        style: {}
    }

    render() {
        const {link, current} = this.props
        var className = `${this.name}`
        if (current) {
            className += ` ${this.name}--current`
        }
        return (
            <li className={`${className}`} style={this.props.style}>
                {link}
            </li>
        )
    }
}

export default WizardStep