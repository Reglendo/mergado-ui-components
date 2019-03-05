import * as React from "react"
import css from "../../css"

export const Ul = ({children,className = "", ...props}) => {
    return <CssUl className={className} {...props}>
        {children}
    </CssUl>
}

const CssUl = css("ul")(
    (props) => {
        const { className,children,...style } = props
        return style
    })

export default Ul
