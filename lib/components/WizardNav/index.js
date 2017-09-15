"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const config_1 = require("../../config");
/* </style> */
class WizardNav extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "wizard_nav";
    }
    renderLinks() {
        const { links } = this.props;
        const classList = `${this.name}__list`;
        return (React.createElement(glamorous_1.Ul, { listStyle: "none", padding: "0", margin: "0", position: "relative", overflow: "hidden", className: classList }, links));
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
const Nav = glamorous_1.default.nav({
    padding: "0",
    margin: "20px 0",
    listStyle: "none",
}, (props) => {
    return {
        borderRadius: props.theme.radius,
        backgroundColor: props.theme.grey,
    };
});
exports.default = WizardNav;
//# sourceMappingURL=index.js.map