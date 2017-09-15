"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const Color = require("color");
const config_1 = require("../../../config");
/**
 * disable-styleguide
 */
class NavLink extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "top_nav__item";
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
const Link = glamorous_1.default.li({
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
    "& a:active,& a:focus,& a:hover, & a,& a:visited": {
        textDecoration: "none",
    },
}, (props) => {
    return {
        "& a": {
            background: props.selected ? props.theme.nav_link_background_active : props.theme.nav_link_background,
            borderBottom: props.theme.nav_link_border,
            borderBottomColor: props.selected ? props.theme.nav_link_color : "transparent",
        },
        "& a,& a:visited": {
            color: props.selected ? props.theme.text : Color(props.theme.text).fade(0.3),
        },
        "& a:active,& a:focus,& a:hover": {
            color: props.theme.text,
        },
    };
});
exports.default = NavLink;
//# sourceMappingURL=index.js.map