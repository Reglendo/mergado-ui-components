import * as React from "react"
import {prefix} from "config"
import styled from "styled-components"

export interface Props {
    active?: boolean
    link?: JSX.Element
    style?: any
}

export interface State {
}

/* <style> */
const Link = styled.li`
    float: left;
    margin-right: 1em;
    list-style-type: none;
    a {
        padding: 5px 10px;
        background: ${props => props.selected ? "rgba(0,0,0,0.25)" : "transparent"};
        display: inline-block;
        cursor: pointer;
    }
    a,a:visited {
        color: #333;
        text-decoration: none;
    }

    a:active, a:focus, a:hover {
        text-decoration: none;
        background: rgba(0,0,0,0.25);
    }
`

/**
 * disable-styleguide
 */
class NavLink extends React.Component<Props, State> {

    private readonly name = prefix + "top_nav__item";

    public static defaultProps: Props = {
        active: false,
        link: (<a href="#"/>),
        style: {},
    }

    public render() {
        const {link, active} = this.props
        let className = `${this.name}`
        if (active) {
            className += ` ${this.name}--active`
        }
        return (
            <Link className={`${className}`} selected={this.props.active} style={this.props.style}>
                {link}
            </Link>
        )
    }
}

export default NavLink
