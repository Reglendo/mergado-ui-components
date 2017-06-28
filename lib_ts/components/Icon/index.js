"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Icons = require("mergado-ui-icons/lib");
const styled_components_1 = require("styled-components");
/* <style> */
const Wrapper = styled_components_1.default.span `
`;
const Text = styled_components_1.default.span `
    vertical-align: middle;
    margin-left: 2px;
    margin-right: 5px;
`;
const Image = styled_components_1.default.svg `
    vertical-align: middle;
`;
/* </style> */
class Icon extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "icon";
    }
    render() {
        const className = `${this.name} ${this.name}--${this.props.type} ${this.props.addClass}`;
        let iconName;
        if (this.props.name) {
            iconName = this.props.name;
        }
        else {
            iconName = `Icon` + `${this.props.type}`.replace(/\b(\w)/g, s => s.toUpperCase()).replace("-", "");
        }
        const icon = Icons[iconName] ? Icons[iconName] : null;
        return (React.createElement(Wrapper, { className: className, style: this.props.style, title: this.props.title },
            React.createElement(Image, { className: `${this.name}__image`, preserveAspectRatio: "xMidYMid meet", fill: "currentColor", height: this.props.size, width: this.props.size, viewBox: `0 0 40 40` }, icon),
            this.props.text ? (React.createElement(Text, { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
Icon.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {},
    name: "",
    text: "",
    title: "",
    addClass: "",
};
exports.default = Icon;
//# sourceMappingURL=index.js.map