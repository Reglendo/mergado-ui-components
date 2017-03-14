"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class NavLink extends React.Component {
    render() {
        const { link, active } = this.props;
        return (React.createElement("li", { className: `${active ? 'active' : ''}` }, link));
    }
}
NavLink.defaultProps = {
    active: false,
    link: (React.createElement("a", { href: "#" }))
};
exports.default = NavLink;
//# sourceMappingURL=nav_link.js.map