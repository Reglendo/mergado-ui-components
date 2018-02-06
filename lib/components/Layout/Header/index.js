import * as React from "react";
import css from "cxs/component";
import domOnlyProps from "../../../helpers/dom-only-props";
export const Header = (props) => {
    const { children, type } = props;
    if (children === "" || children === null) {
        return null;
    }
    if (type === "1") {
        return (React.createElement(H1, Object.assign({}, domOnlyProps(props)), children));
    }
    if (type === "2") {
        return (React.createElement(H2, Object.assign({}, domOnlyProps(props)), children));
    }
    if (type === "3") {
        return (React.createElement(H3, Object.assign({}, domOnlyProps(props)), children));
    }
    if (type === "4") {
        return (React.createElement(H4, Object.assign({}, domOnlyProps(props)), children));
    }
    if (type === "5") {
        return (React.createElement(H5, Object.assign({}, domOnlyProps(props)), children));
    }
};
const H1 = css("h1")({
    fontSize: "28px",
    lineHeight: "40px",
    margin: "40px 0 0 0",
    fontWeight: 700,
});
const H2 = css("h2")({
    fontSize: "24px",
    lineHeight: "32px",
    margin: "32px 0 0 0",
    fontWeight: 700,
});
const H3 = css("h3")({
    fontSize: "20px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 700,
});
const H4 = css("h4")({
    fontSize: "17px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 700,
});
const H5 = css("h5")({
    fontSize: "14px",
    lineHeight: "20px",
    margin: "20px 0 0 0",
    fontWeight: 700,
});
