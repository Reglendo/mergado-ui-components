import * as React from "react";
import glamorous from "glamorous";
import Button from "../../Forms/Button";
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
const Prefix = glamorous(Button)({
    height: "64px",
    borderRadius: "5px 0 0 0",
}, (props) => {
    return {
        margin: `-${(parseInt(props.theme.section_padding) + 1) + "px"}!important`,
        marginRight: `${props.theme.section_padding} !important`,
    };
});
const Suffix = glamorous(Button)({
    height: "64px",
    borderRadius: "0 5px 0 0",
    float: "right",
}, (props) => {
    return {
        margin: `-${(parseInt(props.theme.section_padding) + 1) + "px"}!important`,
        marginLeft: `${props.theme.section_padding} !important`,
    };
});
const Header = glamorous.h3({
    fontWeight: "normal",
    fontSize: "15px",
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
