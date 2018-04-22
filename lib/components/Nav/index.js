import * as React from "react";
import css from "@reglendo/cxs/component";
import { prefix } from "../../config";
class Nav extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "nav";
    }
    renderLinks() {
        const { links } = this.props;
        return (React.createElement("ul", { className: `m-links muk-helper-clearfix` }, links.length > 0 ? links : this.props.children));
    }
    render() {
        return (React.createElement(CssComponent, { className: `${this.name} ${this.props.className || ""}`, style: this.props.style },
            this.props.logo &&
                React.createElement(CssLogo, { className: "m-logo" }, this.props.logo),
            this.renderLinks()));
    }
}
Nav.defaultProps = {
    links: [],
    style: {},
    className: "",
};
const CssLogo = css("div")({
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
});
const CssComponent = css("nav")({
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
});
export default Nav;
