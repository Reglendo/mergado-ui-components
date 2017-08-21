import * as React from "react"
import WizardStep from "components/WizardNav/WizardStep"
import {prefix} from "config"
import styled from "styled-components"

export interface Props {
    links: JSX.Element[]
    style?: any
}

export interface State {
}

/* <style> */
const Component = styled.nav`
    padding: 0;
    margin: 20px 0;
    list-style: none;
    background-color: #777777;
`
const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    overflow: hidden;
`
/* </style> */

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
            <List className={classList}>
                {links}
            </List>
        )
    }

    public render() {
        const className = `${this.name}`

        return (
            <Component className={className} style={this.props.style}>
                {this.renderLinks() }
            </Component>
        )
    }
}

export default WizardNav
