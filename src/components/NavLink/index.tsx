import * as React from "react"
import css from "@reglendo/cxs/component"
import * as Color from "color"
import {prefix} from "../../config"
import PropTypes from "prop-types"

export interface Props {
    active?: boolean
    link?: JSX.Element
    style?: any
    className?: string
}

export interface State {
}

class NavLink extends React.PureComponent<Props, State> {

    private readonly name = prefix + "navlink";

    public static defaultProps: Props = {
        active: false,
        link: (<a href="#"/>),
        style: {},
    }

    public render() {
        const {link, active, className, style, ...p} = this.props

        return (
            <CssLink className={`${this.name} ${this.props.className || ""} ${active ? "active" : ""}`}
                              active={active} s={style} {...p}>
                {link}
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
},(props: any) => {
    return {
        "& a, & a:visited": {
            borderBottom: props.theme.nav_link_border,
            borderBottomColor:  props.active ? props.theme.nav_link_color  : "transparent",
            color: props.active ? props.theme.text : Color(props.theme.text).fade(0.3).string(),
        },
        "& a:hover, & a:focus, & a:active": {
            color: props.theme.text,
        },
    }
})

CssLink.propTypes = {
    active: PropTypes.bool,
    s: PropTypes.any,
}


export default NavLink
