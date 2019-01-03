import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from "prop-types"

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

CssUl.propTypes = {
    listStyle: PropTypes.any,
}

export default Ul
