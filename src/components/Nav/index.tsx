import * as React from "react"
import css from "cxs/component"
import {prefix} from "../../config"

export interface Props {
    links: JSX.Element[]
    style?: any
    addClass?: string
    className?: string
    logo?: JSX.Element
}

export interface State {
}

export class Nav extends React.Component<Props, State> {

    private readonly name = prefix + "top_nav";

    public static defaultProps: Props = {
        links: [],
        style: {},
        addClass: "",
        className: "",
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

        const className = `${this.name} ${this.props.addClass} ${this.props.className}`

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
const Logo = css("div")({
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
})

const Component = css("nav")({
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
})

export const TopNav = Nav
