"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
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
        var className = `${this.name}`;
        if (active) {
            className += ` ${this.name}--active`;
        }
        return (React.createElement("li", { className: `${className}`, style: this.props.style }, link));
    }
}
NavLink.defaultProps = {
    active: false,
    link: (React.createElement("a", { href: "#" })),
    style: {}
};
exports.default = NavLink;
//# sourceMappingURL=index.js.map