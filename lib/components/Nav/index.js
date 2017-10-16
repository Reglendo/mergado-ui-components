import * as React from "react";
import css from "cxs/component";
import { prefix } from "../../config";
class Nav extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "top_nav";
    }
    renderLinks() {
        const { links } = this.props;
        return (React.createElement("ul", { className: `${this.name}__list muk-helper-clearfix` }, links.length > 0 ? links : this.props.children));
    }
    render() {
        const className = `${this.name} ${this.props.addClass} ${this.props.className}`;
        return (React.createElement(Component, { className: className, style: this.props.style },
            this.props.logo &&
                React.createElement(Logo, null, this.props.logo),
            this.renderLinks()));
    }
}
Nav.defaultProps = {
    links: [],
    style: {},
    addClass: "",
    className: "",
};
const Logo = css("div")({
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
});
const Component = css("nav")({
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
});
export default Nav;
