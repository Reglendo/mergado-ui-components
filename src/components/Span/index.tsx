import * as React from "react"
import css from "css"

interface Props {
    children?: any
    className?: string
    style?: any
    props?: any
    [propName: string]: any
}

export const Span = (p: Props) => {
    const {children, style, className, props, ...others} = p
    return <CssSpan className={`muk-span ${className || ""}`} {...props} style={{...others, ...style}}>
        {children}
    </CssSpan>
}

const CssSpan = css("span")({})

export default Span
