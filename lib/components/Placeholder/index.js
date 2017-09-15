"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const Color = require("color");
const config_1 = require("../../config");
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
        return (React.createElement(glamorous_1.Div, { position: "relative", className: className, style: styles },
            React.createElement(Shadow, { className: `${this.name}__shadow` },
                React.createElement(glamorous_1.Div, { display: "table", width: "100%", height: "100%", className: `${this.name}__wrapper` },
                    React.createElement(Container, { className: `${this.name}__container` }, this.props.children)))));
    }
}
Placeholder.defaultProps = {
    width: 100,
    height: 100,
    style: {},
    addClass: "",
};
const Shadow = glamorous_1.default.div({
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
    border: "1px solid white",
}, (props) => {
    return {
        background: Color(props.theme.decoration).fade(0.8),
        borderColor: Color(props.theme.decoration).fade(0.2),
    };
});
const Container = glamorous_1.default.div({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
});
exports.default = Placeholder;
//# sourceMappingURL=index.js.map