var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
        const _a = this.props, { link, active, className, style } = _a, p = __rest(_a, ["link", "active", "className", "style"]);
        return (React.createElement(CssLink, Object.assign({ className: `${this.name} ${this.props.className || ""} ${active ? "active" : ""}`, active: active, s: style }, p), link));
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
