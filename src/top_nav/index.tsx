import * as React from 'react'
import NavLink from "./nav_link"

export interface Props {
    links: Array<NavLink> | Array<JSX.Element>
}

export interface State {}

class TopNav extends React.Component<Props, State> {

    renderLinks() {
        const {links} = this.props
        return (
            <ul>
                {links}
            </ul>
        )
    }

    render() {
        return (
            <nav id="submenu" style={{ margin: "15px 0" }}>
                <div className="wrapper">
                    {this.renderLinks() }
                </div>
            </nav>
        )
    }
}

export default TopNav