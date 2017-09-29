import * as React from "react"
import glamorous,{Ul} from "glamorous"
import css from "cxs/component"
import WizardStep from "../../components/WizardNav/WizardStep"
import {prefix} from "../../config"

export interface Props {
    links: JSX.Element[]
    style?: any
}

export interface State {
}

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
            <Ul listStyle="none"
                padding="0"
                margin="0"
                position="relative"
                overflow="hidden"
                className={classList}>
                    {links}
            </Ul>
        )
    }

    public render() {
        const className = `${this.name}`
        return (
                <Nav className={className} style={this.props.style} >
                        {this.renderLinks() }
                </Nav>
        )
    }
}

const Nav = css("nav")({
    padding: "0",
    margin: "20px 0",
    listStyle: "none",
},(props: any) => {
    return {
        borderRadius: props.theme.radius,
        backgroundColor: props.theme.grey,
    }
})

export default WizardNav
