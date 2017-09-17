<<<<<<< HEAD
import * as React from "react";
import glamorous from "glamorous";
import { prefix } from "../../config";
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const config_1 = require("../../config");
>>>>>>> master
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
<<<<<<< HEAD
const Logo = glamorous.div({
=======
// /* <style> */
const Logo = glamorous_1.default.div({
>>>>>>> master
    display: "inline-block",
    float: "left",
    maxHeight: "40px",
    padding: "0 20px 0 0",
    "& img": {
        maxHeight: "30px",
        width: "auto",
    }
});
<<<<<<< HEAD
const Component = glamorous.nav({
=======
const Component = glamorous_1.default.nav({
>>>>>>> master
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px 0 20px",
}, (props) => {
    return {};
});
<<<<<<< HEAD
export default TopNav;
=======
exports.default = TopNav;
//# sourceMappingURL=index.js.map
>>>>>>> master
