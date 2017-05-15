import * as React from "react"
import {prefix} from "config"

export interface Props {
    active?: boolean
    link?: JSX.Element
    style?: any
}

export interface State {
}


/**
 * disable-styleguide
 */
class NavLink extends React.Component<Props, State> {

    readonly name = prefix + "top_nav__item";

    public static defaultProps: Props = {
        active: false,
        link: (<a href="#"/>),
        style: {}
    }

    render() {
        const {link, active} = this.props
        var className = `${this.name}`
        if (active) {
            className += ` ${this.name}--active`
        }
        return (
            <li className={`${className}`} style={this.props.style}>
                {link}
            </li>
        )
    }
}

export default NavLink