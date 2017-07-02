"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const styled_components_1 = require("styled-components");
/* <style> */
const Item = styled_components_1.default.li `
    display: inline-block;
    margin: 0;
    padding: 0;
    background: ${props => props.selected ? "#00a9b8" : "transparent"};

    &:first-of-type {
        .${config_1.prefix}wizard_nav__item__step {
            margin-left: 20px;
        }
    }


    &:after {
          content: '';
          display: inline-block;
          width: 32px;
          height: 32px;
          transform: rotate(-45deg);
          background: ${props => props.selected ? "#00a9b8" : "777"};
          vertical-align: middle;
          border: solid #777;
          border-width: 0 3px 3px 0;
          margin-right: -14px;
          margin-left: -14px;
          clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%);
          position: relative;
          z-index: 1;
    }

`;
const Link = styled_components_1.default.a `
    font-size: 13px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    color: #fff;
    margin-left: 35px;
    min-width: 60px;
    position: relative;
    z-index: 2;

    &:hover,&:focus,&:active {
        text-decoration: none;
        color: #fff;
    }


`;
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