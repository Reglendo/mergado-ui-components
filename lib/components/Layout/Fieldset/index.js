import * as React from "react";
import css from "cxs/component";
import { Header } from "../Header";
import domOnlyProps from "../../../helpers/dom-only-props";
export const Fieldset = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement(FFieldset, Object.assign({}, domOnlyProps(props)),
        header && React.createElement(Header, { type: "3" }, header),
        children));
};
const FFieldset = css("fieldset")({
    padding: 0,
    margin: 0,
});
