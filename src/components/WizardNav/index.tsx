import * as React from "react"
import css from "../../css"
import Ul from "../Ul"
import Theme from "../Theme"

export interface Props {
    links: JSX.Element[]
    style?: any
}

export interface State {
}

/* </style> */

class WizardNav extends React.PureComponent<Props, State> {

    private readonly name = "muk-wizard_nav";

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
    borderRadius: Theme.radius,
    backgroundColor: Theme.grey,
})

export default WizardNav
