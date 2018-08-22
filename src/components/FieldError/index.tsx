import * as React from "react"
import css from "@reglendo/cxs/component"

import {prefix, form} from "../../config"
import domOnlyProps from "../../helpers/dom-only-props"
import Div from "../Div"
import PropTypes from 'prop-types'

const FieldErrorComponent = ({...props}) => {
        if(props.meta && props.meta.error) {
            return (
                <div className={`${props.className}`}>
                    {props.meta.error}
                </div>
            )
        } else {
            return null
        }
}

export const FieldError = css(FieldErrorComponent)({
    color: "white",
    fontSize: "12px",
    zIndex: 1,
    padding: "1px 5px",
    position: "absolute",
    top: "100%",
},(props: any) => {
    const theme: any = props.theme
    return {
        left: theme.radius,
        background: theme.red,
    }
})

FieldError.propTypes = {
    input: PropTypes.any,
    labels: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
}

export default FieldError
