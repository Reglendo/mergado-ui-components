import * as React from "react"

export interface Props {
    active: boolean
    link: JSX.Element
}

export interface State {}

class NavLink extends React.Component<Props, State> {
    public static defaultProps: Props = {
        active: false,
        link: (<a href="#" />)
    }

    render() {
        const {link, active} = this.props
        return (
            <li className={`${active ? 'active' : ''}`} >
                {link}
            </li>
        )
    }
}

export default NavLink