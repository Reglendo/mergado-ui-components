import * as React from "react"
import css from "css"
import * as Color from "color"
import {prefix} from "../../config"
import Theme from "components/Theme"

export interface Props {
    active?: boolean
    link?: JSX.Element | false
    style?: any
    className?: string
}

export interface State {
}

class NavLink extends React.PureComponent<Props, State> {

    private readonly name = prefix + "navlink";

    public render() {
        const {link, active, className, children, ...p} = this.props

        return (
            <CssLink className={`${this.name} ${this.props.className || ""} ${active ? "active" : ""}`}
                              active={active}  {...p}>
                {link || <a href="#">{children}</a>}
            </CssLink>
        )
    }
}

const CssLink = css("li")({
    float: "left",
    marginRight: "1em",
    listStyleType: "none",
    marginBottom: "-1px",
    "& a": {
        padding: "5px 10px 7px 10px",
        display: "inline-block",
        cursor: "pointer",
        transition: "border-color 0.3s",
    },
    "& a:active, & a:focus, & a:visited, & a:hover": {
        textDecoration: "none",
        outline: "none",
    },
    "& a:hover, & a:focus, & a:active": {
        color: Theme.text,
    },
},(props: any) => {
    return {
        "& a, & a:visited": {
            borderBottom: Theme.nav_link_border,
            borderBottomColor:  props.active ? Theme.nav_link_color  : "transparent",
            color: props.active ? Theme.text : Color(Theme.text).fade(0.3).string(),
        },
    }
})



export default NavLink
