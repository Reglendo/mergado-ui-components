"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const config_1 = require("../../config");
/* <style> */
const Component = styled_components_1.default.div `
    position: relative;
`;
const Shadow = styled_components_1.default.div `
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: rgba(219, 203, 163, 0.25);
    margin: auto;
`;
const Wrapper = styled_components_1.default.div `
    display: table;
    width: 100%;
    height: 100%;
`;
const Container = styled_components_1.default.div `
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`;
/* </style> */
class Placeholder extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "placeholder";
    }
    render() {
        const { addClass, style, width, height } = this.props;
        const className = `${this.name} ${addClass ? addClass : ""}`;
        const object = Object;
        const styles = object.assign({}, style, { paddingBottom: `${(height * 100 / width)}%` });
        return (React.createElement(Component, { className: className, style: styles },
            React.createElement(Shadow, { className: `${this.name}__shadow` },
                React.createElement(Wrapper, { className: `${this.name}__wrapper` },
                    React.createElement(Container, { className: `${this.name}__container` }, this.props.children)))));
    }
}
Placeholder.defaultProps = {
    width: 100,
    height: 100,
    style: {},
    addClass: "",
};
exports.default = Placeholder;
//# sourceMappingURL=index.js.map