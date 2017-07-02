import * as React from "react"
import NavLink from "components/TopNav/NavLink"
import {prefix} from "config"
import styled from "styled-components"

export interface Props {
    links: JSX.Element[]
    style?: any
    addClass?: string
}

export interface State {
}

/* <style> */
const Component = styled.nav`
    background: #e5d7b6;
    color: #333;
    font-size: 11pt;
    font-weight: bold;
    padding: 10px 20px;
`
const Wrapper = styled.div`
    position: relative;
    margin: auto;
`
/* </style> */

class TopNav extends React.Component<Props, State> {

    private readonly name = prefix + "top_nav";

    public static defaultProps: Props = {
        links: [],
        style: {},
        addClass: "",
    }

    protected renderLinks() {
        const {links} = this.props
        return (
            <ul className={`${this.name}__list muk-helper-clearfix`}>
                {links}
            </ul>
        )
    }

    public render() {

        const className = `${this.name} ${this.props.addClass}`
        const classWrapper = `${this.name}__wrapper"`

        return (
            <Component className={className} style={this.props.style}>
                <Wrapper className={classWrapper}>
                    {this.renderLinks() }
                </Wrapper>
            </Component>
        )
    }
}

export default TopNav
