import * as React from "react"
import css from "@reglendo/cxs/component"

export const Div = ({children,className = "", ...props}) => {
    return <CssDiv className={className} {...props}>
        {children}
    </CssDiv>
}

const CssDiv = css("div")(
    (props) => {
        const { className,theme,children,...style } = props
        return style
    })
