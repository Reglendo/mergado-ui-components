import * as React from "react";
import css from "@reglendo/cxs/component";
const Widget = (props) => {
    const { children } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement(WidgetStyle, { className: `muk-widget ${props.className || ""}`, s: props.style },
        React.createElement("div", { style: { display: "table", width: "100%" } }, children)));
};
const WidgetStyle = css("div")({
    maxWidth: "350px",
    minWidth: "200px",
    height: "100px",
    marginTop: "0",
    fontSize: "14px",
    width: "100%",
    lineHeight: "18px",
    background: "white",
    " .widget-row": {
        display: "table-row",
        lineHeight: "18px",
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
}, p => (Object.assign({}, p.s)));
export default Widget;
