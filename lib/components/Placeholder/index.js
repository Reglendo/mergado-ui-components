<<<<<<< HEAD
import * as React from "react";
import glamorous, { Div } from "glamorous";
import * as Color from "color";
import { prefix } from "../../config";
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const Color = require("color");
const config_1 = require("../../config");
>>>>>>> master
class Placeholder extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "placeholder";
    }
    render() {
        const { addClass, style, width, height } = this.props;
        const className = `${this.name} ${addClass ? addClass : ""}`;
        const object = Object;
        const styles = object.assign({}, style, { paddingBottom: `${(height * 100 / width)}%` });
<<<<<<< HEAD
        return (React.createElement(Div, { position: "relative", className: className, style: styles },
            React.createElement(Shadow, { className: `${this.name}__shadow` },
                React.createElement(Div, { display: "table", width: "100%", height: "100%", className: `${this.name}__wrapper` },
=======
        return (React.createElement(glamorous_1.Div, { position: "relative", className: className, style: styles },
            React.createElement(Shadow, { className: `${this.name}__shadow` },
                React.createElement(glamorous_1.Div, { display: "table", width: "100%", height: "100%", className: `${this.name}__wrapper` },
>>>>>>> master
                    React.createElement(Container, { className: `${this.name}__container` }, this.props.children)))));
    }
}
Placeholder.defaultProps = {
    width: 100,
    height: 100,
    style: {},
    addClass: "",
};
<<<<<<< HEAD
const Shadow = glamorous.div({
=======
const Shadow = glamorous_1.default.div({
>>>>>>> master
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
<<<<<<< HEAD
const Container = glamorous.div({
=======
const Container = glamorous_1.default.div({
>>>>>>> master
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
});
<<<<<<< HEAD
export default Placeholder;
=======
exports.default = Placeholder;
//# sourceMappingURL=index.js.map
>>>>>>> master
