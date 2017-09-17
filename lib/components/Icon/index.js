import * as React from "react";
import { prefix } from "../../config";
import * as Icons from "@reglendo/mergado-ui-icons/lib";
import { Span, Svg } from "glamorous";
class Icon extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "icon";
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
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement(Svg, { verticalAlign: "middle", className: `${this.name}__image`, preserveAspectRatio: "xMidYMid meet", fill: "currentColor", height: this.props.size, width: this.props.size, viewBox: this.props.viewBox }, icon),
            this.props.text ? (React.createElement(Span, { className: `${this.name}__text`, verticalAlign: "middle", marginLeft: "2px", marginRight: "5px" }, this.props.text)) : null));
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
    viewBox: "0 0 40 40",
};
export default Icon;
