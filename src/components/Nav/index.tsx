import * as React from "react"
import css from "@reglendo/cxs/component"
import {prefix} from "../../config"

export interface Props {
    links: JSX.Element[]
    style?: any
    className?: string
    logo?: JSX.Element
}

export interface State {
}

class Nav extends React.PureComponent<Props, State> {

    private readonly name = prefix + "nav";

    public static defaultProps: Props = {
        links: [],
        style: {},
        className: "",
    }

    protected renderLinks() {
        const {links} = this.props
        return (
            <ul className={`m-links muk-helper-clearfix`}>
                {links.length > 0 ? links : this.props.children}
            </ul>
        )
    }

    public render() {

        return (
            <CssComponent className={`${this.name} ${this.props.className || ""}`} style={this.props.style}>
                {this.props.logo &&
                    <CssLogo className="m-logo">{this.props.logo}</CssLogo>
                }
                {this.renderLinks()}
            </CssComponent>
        )
    }
}

// /* <style> */
const CssLogo = css("div")({
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
})

const CssComponent = css("nav")({
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
})


export default Nav
