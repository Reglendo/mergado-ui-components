<<<<<<< HEAD
import * as React from "react";
import glamorous from "glamorous";
import domOnlyProps from "../../../helpers/dom-only-props";
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const dom_only_props_1 = require("../../../helpers/dom-only-props");
>>>>>>> master
const Section = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
<<<<<<< HEAD
    return (React.createElement(Styled, Object.assign({}, domOnlyProps(props)),
        header && React.createElement(Header, null, header),
        children));
};
const Header = glamorous.h3({
=======
    return (React.createElement(Styled, Object.assign({}, dom_only_props_1.default(props)),
        header && React.createElement(Header, null, header),
        children));
};
const Header = glamorous_1.default.h3({
>>>>>>> master
    padding: "20px",
    fontWeight: "normal",
    fontSize: "15px",
}, (props) => {
    return {
        margin: `-${props.theme.section_padding}!important`,
        marginBottom: "20px !important",
        background: props.theme.decoration_background,
        borderBottom: props.theme.section_border,
        borderRadius: `${props.theme.radius} ${props.theme.radius} 0 0`,
    };
});
<<<<<<< HEAD
const Styled = glamorous.section({
=======
const Styled = glamorous_1.default.section({
>>>>>>> master
    marginBottom: "20px",
}, (props) => {
    return {
        background: props.theme.background,
        color: props.theme.text,
        borderRadius: props.theme.radius,
        border: props.theme.section_border,
        padding: props.theme.section_padding,
    };
});
<<<<<<< HEAD
export default Section;
=======
exports.default = Section;
//# sourceMappingURL=index.js.map
>>>>>>> master
