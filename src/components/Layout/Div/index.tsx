import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from "prop-types"

export const Div = ({children, style = {}, className = "", ...props}) => {
    return <CssDiv className={`muk-div ${className}`} s={{...props, ...style}}>
        {children}
    </CssDiv>
}

const CssDiv = css("div")(
    (props) => {
        const { className,theme,children,s,...style } = props
        return {...s, ...style}
    })

CssDiv.propTypes = {
    s: PropTypes.any,
}


export default Div