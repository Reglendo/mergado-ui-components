import * as React from "react";
import { prefix } from "../../config";
import * as Icons from "@reglendo/mergado-ui-icons/lib";
export class Icon extends React.Component {
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
        const Icon = Icons[iconName] ? Icons[iconName] : null;
        return (React.createElement(Icon, Object.assign({}, this.props)));
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
    color: null,
    viewBox: "0 0 40 40",
    textFirst: false,
};
