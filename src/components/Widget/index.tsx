import * as React from "react"
import css from "@reglendo/cxs/component"

interface Props {
    className?: string
    children?: any
    style?: any
}

const Widget = (props: Props) => {
    const { children } = props
    if(children === "" || children === null) {
        return null
    }

    return (
        <WidgetStyle className={`muk-widget ${props.className || ""}`} s={props.style}>
            <div style={{display: "table", width: "100%"}}>
            {children}
            </div>
        </WidgetStyle>
    )
}

const WidgetStyle = css("div")({
    maxWidth: "350px",
    minWidth: "200px",
    height: "100px",
    marginTop: "0",
    fontSize: "14px",
    width: "100%",
    padding: "10px",
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

}, p => ({
    ...p.s,
}))

export default Widget
