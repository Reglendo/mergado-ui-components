import * as React from "react";
import css from "@reglendo/cxs/component";
import * as Color from "color";
import { prefix } from "../../config";
import PropTypes from "prop-types";
class NavLink extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "navlink";
    }
    render() {
        const { link, active, className, style } = this.props;
        return (React.createElement(CssLink, { className: `${this.name} ${this.props.className || ""} ${active ? "active" : ""}`, active: active, s: style }, link));
    }
}
NavLink.defaultProps = {
    active: false,
    link: (React.createElement("a", { href: "#" })),
    style: {},
};
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
}, (props) => {
    return {
        "& a, & a:visited": {
            borderBottom: props.theme.nav_link_border,
            borderBottomColor: props.active ? props.theme.nav_link_color : "transparent",
            color: props.active ? props.theme.text : Color(props.theme.text).fade(0.3).string(),
        },
        "& a:hover, & a:focus, & a:active": {
            color: props.theme.text,
        },
    };
});
CssLink.propTypes = {
    active: PropTypes.bool,
    s: PropTypes.any,
};
export default NavLink;
