"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class WizardNav extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "wizard_nav";
    }
    renderLinks() {
        const { links } = this.props;
        const classList = `${this.name}__list`;
        return (React.createElement("ul", { className: classList }, links));
    }
    render() {
        const className = `${this.name}`;
        const classWrapper = `${this.name}__wrapper"`;
        return (React.createElement("nav", { className: className, style: this.props.style },
            React.createElement("div", { className: classWrapper }, this.renderLinks())));
    }
}
WizardNav.defaultProps = {
    links: [],
    style: {},
};
exports.default = WizardNav;
//# sourceMappingURL=index.js.map