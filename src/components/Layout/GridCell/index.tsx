import * as React from "react"
import css from "cxs/component"

interface Props {
    children?: any
    col?: string
    row?: string
    name?: string

    align?: "start" | "end" | "center" | "stretch"
    valign?: "start" | "end" | "center" | "stretch"

    autoFlow?: "row" | "column"
    style?: any
}

export const GridCell = (props: Props) => {
    const { children } = props

    return (
        <GridCellStyle  {...props}>
            {children}
        </GridCellStyle>
    )
}

const GridCellStyle = css("div")({

},(props: any) => {
    return {
        gridColumn: props.col ? props.col : "auto auto",
        gridRow: props.row ? props.row : "auto auto",
        gridArea: props.name ? props.name : null,
        justifySelf: props.align ? props.align : "stretch",
        alignSelf: props.valign ? props.valign : "stretch",
    }
})
