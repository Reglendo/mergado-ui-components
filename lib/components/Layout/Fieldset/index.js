import * as React from "react";
import glamorous from "glamorous";
import Header from "../Header";
import domOnlyProps from "../../../helpers/dom-only-props";
const Fieldset = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement(FFieldset, Object.assign({}, domOnlyProps(props)),
        header && React.createElement(Header, { type: "3" }, header),
        children));
};
const FFieldset = glamorous.fieldset({
    padding: 0,
});
export default Fieldset;
