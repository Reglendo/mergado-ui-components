"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const config_1 = require("../../../config");
/* <style> */
const Item = glamorous_1.default.li({
    display: "inline-block",
    margin: 0,
    padding: 0,
    ":first-of-type .muk-wizard_nav__item__step": {
        marginLeft: "20px",
    },
    "&:after": {
        content: " ",
        display: "inline-block",
        width: "32px",
        height: "32px",
        transform: "rotate(-45deg)",
        verticalAlign: "middle",
        borderWidth: "0 3px 3px 0",
        marginRight: "-14px",
        marginLeft: "-14px",
        clipCath: "polygon(100% 0, 100% 50%, 100% 100%, 0 100%)",
        position: "relative",
        zIndex: 1,
    },
}, (props) => {
    return {
        background: props.selected ? props.theme.blue : "transparent",
        ":after": {
            borderColor: props.theme.grey,
            background: props.selected ? props.theme.blue : props.theme.grey,
        },
        ":first-of-type": {
            borderRadius: props.theme.radius,
        },
    };
});
const Link = glamorous_1.default.a({
    fontSize: "13px",
    display: "inline-block",
    height: "36px",
    lineHeight: "36px",
    color: "#fff",
    marginLeft: "35px",
    minWidth: "60px",
    position: "relative",
    zIndex: 2,
    ":hover,:focus,:active": {
        textDecoration: "none",
        color: "#fff",
    },
});
/* </style> */
/**
 * disable-styleguide
 */
class WizardStep extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "wizard_nav__item";
    }
    render() {
        const { link, active, style, onClick } = this.props;
        let className = `${this.name}`;
        if (active) {
            className += ` ${this.name}--active`;
        }
        return (React.createElement(Item, { className: `${className}`, style: style, selected: active },
            React.createElement(Link, { className: `${this.name}__step`, onClick: onClick }, link)));
    }
}
WizardStep.defaultProps = {
    active: false,
    link: "",
    style: {},
    onClick: () => { },
};
exports.default = WizardStep;
//# sourceMappingURL=index.js.map