import * as React from "react";
import css from "@reglendo/cxs/component";
import Grid from "../Grid";
import GridCell from "../GridCell";
import domOnlyProps from "../../../helpers/dom-only-props";
const Section = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
    const prefix = props.prefix ? React.createElement(Prefix, { row: "1" }, props.prefix) : "";
    const suffix = props.suffix ? React.createElement(Suffix, { row: "1" }, props.suffix) : "";
    return (React.createElement(SSection, Object.assign({}, domOnlyProps(props)),
        header &&
            React.createElement(Header, null,
                React.createElement(Grid, { cols: "auto 1fr auto" },
                    prefix,
                    React.createElement(GridCell, { row: "1" }, header),
                    suffix)),
        children));
};
const Prefix = css(GridCell)({
    margin: "-10px",
    padding: "10px",
    marginRight: "15px",
    paddingRight: "15px",
    borderRight: "1px solid #ccc",
    justifySelf: "left",
});
const Suffix = css(GridCell)({
    float: "right",
    margin: "-10px",
    padding: "10px",
    marginLeft: "15px",
    paddingLeft: "15px",
    borderLeft: "1px solid #ccc",
    justifySelf: "right",
});
const Header = css(GridCell)({
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
const SSection = css("section")({
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
