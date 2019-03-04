import * as React from "react"
import css from "css"

interface Props {
    className?: string
    inline?: boolean
    children: any
    cols?: string
    rows?: string
    gap?: number | string
    colgap?: number
    rowgap?: number
    align?: "start" | "end" | "center" | "stretch"
    valign?: "start" | "end" | "center" | "stretch"
    autoFlow?: "row" | "column"
    style?: any
}

const Grid = (props: Props) => {
    const { children, className, ...p } = props

    return (
        <CssGrid className={`muk-grid ${className || ""}`} {...p}>
            {children}
        </CssGrid>
    )
}

const CssGrid = css("div")({},(props: any) => {
    return {
        display: props.inline ? "inline-grid" : "grid",
        gridTemplateColumns: props.cols ? props.cols : "auto",
        gridTemplateRows: props.rows ? props.rows : "auto",
        gridGap: props.gap ? props.gap : `${props.rowgap ? props.rowgap : ''} ${props.colgap ? props.colgap : ''}`,
        justifyItems: props.align ? props.align : "stretch",
        alignItems: props.valign ? props.valign : "stretch",
        gridAutoFlow: props.autoFlow ? props.autoFlow : "row",
    }
})


export default Grid
