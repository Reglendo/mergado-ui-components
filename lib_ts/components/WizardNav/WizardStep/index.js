"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
/**
 * disable-styleguide
 */
class WizardStep extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "wizard_nav__item";
    }
    render() {
        const { link, active, style, onClick } = this.props;
        var className = `${this.name}`;
        if (active) {
            className += ` ${this.name}--active`;
        }
        return (React.createElement("li", { className: `${className}`, style: style },
            React.createElement("a", { className: `${this.name}__step`, onClick: onClick }, link)));
    }
}
WizardStep.defaultProps = {
    active: false,
    link: '',
    style: {},
    onClick: () => { }
};
exports.default = WizardStep;
//# sourceMappingURL=index.js.map