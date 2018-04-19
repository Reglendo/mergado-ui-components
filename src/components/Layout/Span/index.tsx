import * as React from "react"
import css from "@reglendo/cxs/component"

export const Span = ({children,className = "", ...props}) => {
    return <CssSpan className={className} {...props}>
        {children}
    </CssSpan>
}

const CssSpan = css("span")(
    (props) => {
        const { className,theme,children,...style } = props
        return style
    })
