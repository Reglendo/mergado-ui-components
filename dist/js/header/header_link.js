"use strict";
const React = require("react");
class HeaderLink extends React.Component {
    render() {
        const { link, active } = this.props;
        return (React.createElement("li", { className: `${active ? 'active' : ''}` }, link));
    }
}
HeaderLink.defaultProps = {
    active: false,
    link: (React.createElement("a", { href: "#" }))
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeaderLink;
//# sourceMappingURL=header_link.js.map