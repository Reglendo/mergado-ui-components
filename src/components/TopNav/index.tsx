import * as React from "react"
import glamorous, {Div} from "glamorous"

import {prefix} from "../../config"

export interface Props {
    links: JSX.Element[]
    style?: any
    addClass?: string
    logo?: JSX.Element
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
        return (
            <ul className={`${this.name}__list muk-helper-clearfix`}>
                {links.length > 0 ? links : this.props.children}
            </ul>
        )
    }

    public render() {

        const className = `${this.name} ${this.props.addClass}`
        const classWrapper = `${this.name}__wrapper"`

        return (
            <Component className={className} style={this.props.style}>
                {this.props.logo &&
                    <Logo>{this.props.logo}</Logo>
                }
                {this.renderLinks()}
            </Component>
        )
    }
}

// /* <style> */
const Logo = glamorous.div({
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
})

const Component = glamorous.nav({
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
},(props: any) =>
{
    return {
        // borderBottom: `1px solid #ccc`,
        // background: props.theme.nav_background,
    }
})


export default TopNav
