import * as React from "react";
import css from "@reglendo/cxs/component";
const Widget = (props) => {
    const { children } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement(WidgetStyle, null, children));
};
const WidgetStyle = css("div")({
    display: "table",
    padding: "10px",
    marginTop: "0",
    fontSize: "14px",
    width: "100%",
    lineHeight: "20px",
    " .widget-row": {
        display: "table-row",
    },
    " .widget-cell": {
        display: "table-cell",
        verticalAlign: "middle",
        color: "#383632",
    },
    " .widget-value": {
        textAlign: "right",
        whiteSpace: "nowrap",
    },
    ".widget-status": {
        width: "100%"
    },
    "!::-webkit-scrollbar": {
        display: "none",
    },
    "!body": {
        backgroundColor: "white",
        marginTop: 0,
        padding: "0 !important",
        fontWeight: 400,
        fontFamily: "Roboto, Arial, Helvetica, Verdana, Sans-serif",
    },
    "!.debugVersionHeader": {
        display: "none",
    },
});
export default Widget;
