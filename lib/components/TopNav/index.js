"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const config_1 = require("../../config");
/* <style> */
const Component = styled_components_1.default.nav `
    background: #e5d7b6;
    color: #333;
    font-size: 11pt;
    font-weight: bold;
    padding: 10px 20px;
`;
const Wrapper = styled_components_1.default.div `
    position: relative;
    margin: auto;
`;
/* </style> */
class TopNav extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "top_nav";
    }
    renderLinks() {
        const { links } = this.props;
        return (React.createElement("ul", { className: `${this.name}__list muk-helper-clearfix` }, links));
    }
    render() {
        const className = `${this.name} ${this.props.addClass}`;
        const classWrapper = `${this.name}__wrapper"`;
        return (React.createElement(Component, { className: className, style: this.props.style },
            React.createElement(Wrapper, { className: classWrapper }, this.renderLinks())));
    }
}
TopNav.defaultProps = {
    links: [],
    style: {},
    addClass: "",
};
exports.default = TopNav;
//# sourceMappingURL=index.js.map