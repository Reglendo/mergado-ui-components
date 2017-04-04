import * as React from "react"
import {prefix} from "../../../config"

export interface Props {
    active: boolean
    link: JSX.Element
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
        link: (<a href="#"/>)
    }

    render() {
        const {link, active} = this.props
        var className = `${this.name}`
        if (active) {
            className += ` ${this.name}--active`
        }
        return (
            <li className={`${className}`}>
                {link}
            </li>
        )
    }
}

export default NavLink