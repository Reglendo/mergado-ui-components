import * as React from "react";
import glamorous from "glamorous";
import domOnlyProps from "../../../helpers/dom-only-props";
const Section = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
    const prefix = props.prefix ? React.createElement(Prefix, null, props.prefix) : "";
    const suffix = props.suffix ? React.createElement(Suffix, null, props.suffix) : "";
    return (React.createElement(SSection, Object.assign({}, domOnlyProps(props)),
        header &&
            React.createElement(Header, null,
                prefix,
                header,
                suffix),
        children));
};
const Prefix = glamorous.div({
    float: "left",
    margin: "-10px",
    padding: "10px",
    marginRight: "15px",
    paddingRight: "15px",
    borderRight: "1px solid #ccc",
});
const Suffix = glamorous.div({
    float: "right",
    margin: "-10px",
    padding: "10px",
    marginLeft: "15px",
    paddingLeft: "15px",
    borderLeft: "1px solid #ccc",
});
const Header = glamorous.h3({
    fontWeight: "normal",
    fontSize: "15px",
    height: "63px",
}, (props) => {
    return {
        padding: `${props.theme.section_padding}`,
        margin: `-${props.theme.section_padding}!important`,
        marginBottom: "20px !important",
        background: props.theme.decoration_background,
        borderBottom: props.theme.section_border,
        borderRadius: `${props.theme.radius} ${props.theme.radius} 0 0`,
    };
});
const SSection = glamorous.section({
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
