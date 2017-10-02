import * as React from "react";
import css from "cxs/component";
import { Ul } from "../../html";
import { prefix } from "../../config";
class WizardNav extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "wizard_nav";
    }
    renderLinks() {
        const { links } = this.props;
        const classList = `${this.name}__list`;
        return (React.createElement(Ul, { listStyle: "none", padding: "0", margin: "0", position: "relative", overflow: "hidden", className: classList }, links));
    }
    render() {
        const className = `${this.name}`;
        return (React.createElement(Nav, { className: className, style: this.props.style }, this.renderLinks()));
    }
}
WizardNav.defaultProps = {
    links: [],
    style: {},
};
const Nav = css("nav")({
    padding: "0",
    margin: "20px 0",
    listStyle: "none",
}, (props) => {
    return {
        borderRadius: props.theme.radius,
        backgroundColor: props.theme.grey,
    };
});
export default WizardNav;
