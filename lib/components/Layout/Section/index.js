import * as React from "react";
import glamorous from "glamorous";
import domOnlyProps from "../../../helpers/dom-only-props";
const Section = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement(Styled, Object.assign({}, domOnlyProps(props)),
        header && React.createElement(Header, null, header),
        children));
};
const Header = glamorous.h3({
    padding: "20px",
    fontWeight: "normal",
    fontSize: "15px",
}, (props) => {
    return {
        margin: `-${props.theme.section_padding}!important`,
        marginBottom: "0 !important",
        background: props.theme.decoration_background,
        borderBottom: props.theme.section_border,
        borderRadius: `${props.theme.radius} ${props.theme.radius} 0 0`,
    };
});
const Styled = glamorous.section({
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
export default Section;
