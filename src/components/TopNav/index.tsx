import * as React from 'react'
import NavLink from "./NavLink"
import {prefix} from "../../config"

export interface Props {
    /** Links */
    links: Array<NavLink> | Array<JSX.Element>
}

export interface State {
}

class TopNav extends React.Component<Props, State> {

    readonly name = prefix + "top_nav";


    public static defaultProps: Props = {
        links: []
    }

    renderLinks() {
        const {links} = this.props
        let classList = `${this.name}__list`
        return (
            <ul className={classList}>
                {links}
            </ul>
        )
    }

    render() {

        let className = `${this.name}`
        let classWrapper = `${this.name}__wrapper"`

        return (
            <nav className={className}>
                <div className={classWrapper}>
                    {this.renderLinks() }
                </div>
            </nav>
        )
    }
}

export default TopNav