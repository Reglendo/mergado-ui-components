import * as React from "react"
import css from "cxs/component"
import domOnlyProps from "../../../helpers/dom-only-props"

interface Props {
    children?: any
}

export const Widget = (props: Props) => {
    const { children } = props
    if(children === "" || children === null) {
        return null
    }

    return (
        <WidgetStyle  {...domOnlyProps(props)}>
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
    " .widget-status": {
        width: "100%"
    }
})
