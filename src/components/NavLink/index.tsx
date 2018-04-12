import * as React from "react"
import css from "@reglendo/cxs/component"
import * as Color from "color"
import {prefix} from "../../config"

export interface Props {
    active?: boolean
    link?: JSX.Element
    style?: any
    className?: string
}

export interface State {
}

class NavLink extends React.Component<Props, State> {

    private readonly name = prefix + "top_nav__item";

    public static defaultProps: Props = {
        active: false,
        link: (<a href="#"/>),
        style: {},
    }

    public render() {
        const {link, active} = this.props
        let className = `${this.name} ${this.props.className || ""}`
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


const Link = css("li")({

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
},(props: any) => {
    return {
        "& a": {
            background: props.selected ? props.theme.nav_link_background_active : props.theme.nav_link_background,
            borderBottom: props.theme.nav_link_border,
            borderBottomColor:  props.selected ? props.theme.nav_link_color  : "transparent",
            color: props.selected ? props.theme.text : Color(props.theme.text).fade(0.3).string(),
        },
        "& a:visited": {
            color: props.selected ? props.theme.text : Color(props.theme.text).fade(0.3).string(),
        },
        "& a:hover, & a:focus, & a:active": {
            color: props.theme.text,
        },
    }
})


export default NavLink
