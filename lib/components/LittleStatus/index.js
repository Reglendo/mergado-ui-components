"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const config_1 = require("../../config");
/* <style> */
const colors = {
    success: "#85bd3c",
    warning: "#FF9900",
    error: "#d00",
    inactive: "#888",
};
const Wrapper = styled_components_1.default.span `
    vertical-align: middle;
`;
const Indikator = styled_components_1.default.span `
    width: 8px;
    height: 8px;
    border-radius: 100%;
    border-bottom: none;
    vertical-align: baseline;
    display: inline-block;
    margin: 0 5px;
    background-color: ${props => colors[props.type]}
`;
const Text = styled_components_1.default.span `
    vertical-align: middle;

    a:hover {
        text-decoration: none
    }
`;
/* </style> */
class LittleStatus extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "little_status";
    }
    render() {
        const className = `${this.name} ${this.name}--${this.props.type}`;
        const classIndikator = `${this.name}__indikator tooltip`;
        const classText = `${this.name}__text`;
        const text = this.props.text ?
            (React.createElement(Text, { className: classText },
                " ",
                this.props.text))
            :
                this.props.children;
        return (React.createElement(Wrapper, { className: className, style: this.props.style },
            React.createElement(Indikator, { type: this.props.type, className: classIndikator, title: this.props.title }),
            text));
    }
}
LittleStatus.defaultProps = {
    title: "",
    type: "success",
    text: "",
    style: {},
};
exports.default = LittleStatus;
//# sourceMappingURL=index.js.map