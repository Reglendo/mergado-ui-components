import * as React from "react"
import css from "@reglendo/cxs/component"

interface Props {
    children?: any
}

const Widget = (props: Props) => {
    const { children } = props
    if(children === "" || children === null) {
        return null
    }

    return (
        <WidgetStyle>
            {children}
        </WidgetStyle>
    )
}

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
    },
    "!::-webkit-scrollbar": {
        display: "none",
    },
    "!body": {
        backgroundColor: "white",
        marginTop: 0,
        fontFamily: "Arial, Helvetica, Verdana, Sans-serif",
    },

})

export default Widget
