import * as React from 'react'
import WizardStep from "./WizardStep"
import {prefix} from "../../config"

export interface Props {
    /** Links */
    links: Array<WizardStep> | Array<JSX.Element>
    style?: any
}

export interface State {
}

class WizardNav extends React.Component<Props, State> {

    readonly name = prefix + "wizard_nav";


    public static defaultProps: Props = {
        links: [],
        style: {}
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
            <nav className={className} style={this.props.style}>
                <div className={classWrapper}>
                    {this.renderLinks() }
                </div>
            </nav>
        )
    }
}

export default WizardNav