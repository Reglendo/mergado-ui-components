import * as React from "react"
import NavLink from "components/TopNav/NavLink"
import {prefix} from "config"

export interface Props {
    links: JSX.Element[]
    style?: any
    addClass?: string
}

export interface State {
}

class TopNav extends React.Component<Props, State> {

    private readonly name = prefix + "top_nav";

    public static defaultProps: Props = {
        links: [],
        style: {},
        addClass: "",
    }

    protected renderLinks() {
        const {links} = this.props
        const classList = `${this.name}__list`
        return (
            <ul className={classList}>
                {links}
            </ul>
        )
    }

    public render() {

        const className = `${this.name} ${this.props.addClass}`
        const classWrapper = `${this.name}__wrapper"`

        return (
            <nav className={className} style={this.props.style}>
                <div className={classWrapper}>
                    {this.renderLinks() }
                </div>
            </nav>
        )
    }
}

export default TopNav
