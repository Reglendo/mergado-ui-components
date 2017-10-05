import * as React from "react";
import css from "cxs/component";
import domOnlyProps from "../../../helpers/dom-only-props";
const Widget = (props) => {
    const { children } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement(WidgetStyle, Object.assign({}, domOnlyProps(props)), children));
};
const WidgetStyle = css("div")({
    display: "table",
    margin: "0 5px",
    width: "calc(100% - 10px)",
    marginTop: "7px",
    fontSize: "8pt",
    lineHeight: "17px",
    " .widget-row": {
        display: "table-row",
        height: "17px",
    },
    " .widget-cell": {
        display: "table-cell",
        verticalAlign: "middle"
    },
    ".widget-status": {
        width: "100%"
    }
});
export default Widget;
