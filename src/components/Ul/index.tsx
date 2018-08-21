import * as React from "react"
import css from "@reglendo/cxs/component"

export const Ul = ({children,className = "", ...props}) => {
    return <CssUl className={className} {...props}>
        {children}
    </CssUl>
}

const CssUl = css("ul")(
    (props) => {
        const { className,theme,children,...style } = props
        return style
    })

export default Ul
