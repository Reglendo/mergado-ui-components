"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const styled_components_1 = require("styled-components");
/* <style> */
const Link = styled_components_1.default.li `
    float: left;
    margin-right: 1em;
    list-style-type: none;
    a {
        padding: 5px 10px;
        background: ${props => props.selected ? "rgba(0,0,0,0.25)" : "transparent"};
        display: inline-block;
        cursor: pointer;
    }
    a,a:visited {
        color: #333;
        text-decoration: none;
    }

    a:active, a:focus, a:hover {
        text-decoration: none;
        background: rgba(0,0,0,0.25);
    }
`;
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
exports.default = NavLink;
//# sourceMappingURL=index.js.map