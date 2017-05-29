import * as React from "react"
import {prefix} from "config"

export interface Props {
    active?: boolean
    link?: JSX.Element | string
    style?: any
    onClick?: (event: any) => any
}

export interface State {
}


/**
 * disable-styleguide
 */
class WizardStep extends React.Component<Props, State> {

    private readonly name = prefix + "wizard_nav__item";

    public static defaultProps: Props = {
        active: false,
        link: '',
        style: {},
        onClick: () => {}
    }

    render() {
        const {link, active, style, onClick} = this.props
        var className = `${this.name}`
        if (active) {
            className += ` ${this.name}--active`
        }
        return (
            <li className={`${className}`} style={style}>
                <a className={`${this.name}__step`} onClick={onClick}>
                    {link}
                </a>
            </li>
        )
    }
}

export default WizardStep