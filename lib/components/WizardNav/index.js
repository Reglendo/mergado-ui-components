"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const config_1 = require("../../config");
/* <style> */
const Component = styled_components_1.default.nav `
    padding: 0;
    margin: 20px 0;
    list-style: none;
    background-color: #777777;
`;
const List = styled_components_1.default.ul `
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    overflow: hidden;
`;
/* </style> */
class WizardNav extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "wizard_nav";
    }
    renderLinks() {
        const { links } = this.props;
        const classList = `${this.name}__list`;
        return (React.createElement(List, { className: classList }, links));
    }
    render() {
        const className = `${this.name}`;
        return (React.createElement(Component, { className: className, style: this.props.style }, this.renderLinks()));
    }
}
WizardNav.defaultProps = {
    links: [],
    style: {},
};
exports.default = WizardNav;
//# sourceMappingURL=index.js.map