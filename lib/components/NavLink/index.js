import * as React from "react";
import css from "@reglendo/cxs/component";
import * as Color from "color";
import { prefix } from "../../config";
class NavLink extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "top_nav__item";
    }
    render() {
        const { link, active } = this.props;
        let className = `${this.name}`;
        if (active) {
            className += ` ${this.name}--active`;
        }
        return (React.createElement(Link, { className: `${className}`, selected: this.props.active, style: this.props.style }, link));
    }
}
NavLink.defaultProps = {
    active: false,
    link: (React.createElement("a", { href: "#" })),
    style: {},
};
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
}, (props) => {
    return {
        "& a": {
            background: props.selected ? props.theme.nav_link_background_active : props.theme.nav_link_background,
            borderBottom: props.theme.nav_link_border,
            borderBottomColor: props.selected ? props.theme.nav_link_color : "transparent",
            color: props.selected ? props.theme.text : Color(props.theme.text).fade(0.3).string(),
        },
        "& a:visited": {
            color: props.selected ? props.theme.text : Color(props.theme.text).fade(0.3).string(),
        },
        "& a:hover, & a:focus, & a:active": {
            color: props.theme.text,
        },
    };
});
export default NavLink;
