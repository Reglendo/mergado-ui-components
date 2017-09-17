import * as React from "react";
import glamorous from "glamorous";
import { prefix } from "../../config";
class TopNav extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "top_nav";
    }
    renderLinks() {
        const { links } = this.props;
        return (React.createElement("ul", { className: `${this.name}__list muk-helper-clearfix` }, links.length > 0 ? links : this.props.children));
    }
    render() {
        const className = `${this.name} ${this.props.addClass}`;
        const classWrapper = `${this.name}__wrapper"`;
        return (React.createElement(Component, { className: className, style: this.props.style },
            this.props.logo &&
                React.createElement(Logo, null, this.props.logo),
            this.renderLinks()));
    }
}
TopNav.defaultProps = {
    links: [],
    style: {},
    addClass: "",
};
const Logo = glamorous.div({
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
});
const Component = glamorous.nav({
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
}, (props) => {
    return {};
});
export default TopNav;
