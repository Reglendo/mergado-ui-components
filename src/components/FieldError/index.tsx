import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from 'prop-types'

const FieldError = ({error, className, style = {}}) => {
    if(error) {
        return (
            <Styled className={`${className}`} style={style}>
                {error}
            </Styled>
        )
    } else {
        return null
    }
}

export const Styled = css("div")({
    color: "white",
    fontSize: "12px",
    zIndex: 1,
    padding: "1px 5px",
    position: "absolute",
    fontWeight: "normal",
    top: "100%",
},(props: any) => {
    const theme: any = props.theme
    return {
        left: theme.radius,
        background: theme.red,
    }
})

FieldError.propTypes = {
    error: PropTypes.any,
    className: PropTypes.string,
}

export default FieldError
