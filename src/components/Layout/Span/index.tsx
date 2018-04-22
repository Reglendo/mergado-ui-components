import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from "prop-types"

export const Span = ({children, style = {}, className = "", ...props}) => {
    return <CssSpan className={`muk-span ${className}`} s={{...props,...style}} >
        {children}
    </CssSpan>
}

const CssSpan = css("span")(
    (props) => {
        const { className,theme,children,s,...style } = props
        return {...s, ...style}
    })

CssSpan.propTypes = {
    s: PropTypes.any,
}


export default Span
