import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from "prop-types"

interface Props {
    className?: string
    inline?: boolean
    children: any
    cols?: string
    rows?: string
    gap?: number
    colgap?: number
    rowgap?: number
    align?: "start" | "end" | "center" | "stretch"
    valign?: "start" | "end" | "center" | "stretch"
    autoFlow?: "row" | "column"
    style?: any
}

const Grid = (props: Props) => {
    const { children, style, className, ...p } = props

    return (
        <CssGrid className={`muk-grid ${className || ""}`} s={style} {...p}>
            {children}
        </CssGrid>
    )
}

const CssGrid = css("div")({

},(props: any) => {
    return {
        display: props.inline ? "inline-grid" : "grid",
        gridTemplateColumns: props.cols ? props.cols : "auto",
        gridTemplateRows: props.rows ? props.rows : "auto",
        gridGap: `${props.rowgap ? props.rowgap : props.gap} ${props.colgap ? props.colgap : props.gap}`,
        justifyItems: props.align ? props.align : "stretch",
        alignItems: props.valign ? props.valign : "stretch",
        gridAutoFlow: props.autoFlow ? props.autoFlow : "row",
        ...props.s,
    }
})

CssGrid.propTypes = {
    s: PropTypes.any,
    inline: PropTypes.any,
    cols: PropTypes.string,
    rows: PropTypes.string,
    rowgap: PropTypes.string,
    colgap: PropTypes.string,
    gap: PropTypes.string,
    align: PropTypes.string,
    valign: PropTypes.string,
    autoFlow: PropTypes.string,
}

export default Grid
