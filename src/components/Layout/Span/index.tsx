import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from "prop-types"

interface Props {
    children?: any
    className?: string
    style?: any
    props?: any
    [propName: string]: any
}

export const Span = (p: Props) => {
    const {children, style, className, props, ...others} = p
    return <CssSpan className={`muk-span ${className || ""}`} {...props} s={{...others, ...style}}>
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
    style: PropTypes.any,
}


export default Span