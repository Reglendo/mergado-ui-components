import * as React from "react"
import WizardStep from "components/WizardNav/WizardStep"
import {prefix} from "config"

export interface Props {
    links: JSX.Element[]
    style?: any
}

export interface State {
}

class WizardNav extends React.Component<Props, State> {

    private readonly name = prefix + "wizard_nav";

    public static defaultProps: Props = {
        links: [],
        style: {},
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

        const className = `${this.name}`
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

export default WizardNav
