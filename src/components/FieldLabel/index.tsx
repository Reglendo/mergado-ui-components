import * as React from "react"
import css from "@reglendo/cxs/component"

import {form} from "../../config"
import PropTypes from 'prop-types'


const CssBigLabel = css("h3")({
    paddingLeft: "10px",
    borderLeft: "5px solid hsla(43,44%,75%,.5)",
    fontSize: "1.2em",
    margin: "10px 0",
})


const LabelComponent = ({children, bigLabel, className = ""}) => {
    if(children === "" || children === null) {
        return null
    }

    return (
            <label className={`${form}-label ${className}`}>
                {bigLabel ? <CssBigLabel>{children}</CssBigLabel> : children }
            </label>
        )
}


export const FieldLabel = css(LabelComponent)({
    display: "inline-block",
    height: "25px",
    " .muk-popup-hint": {
        verticalAlign: "middle",
    },
}, (props: any) => {
    const theme: any = props.theme
    return {
        fontSize: theme.form_label_text_size,
        fontWeight: theme.form_label_text_weight,
    }
})

FieldLabel.propTypes = {
    meta: PropTypes.any,
    input: PropTypes.any,
    labels: PropTypes.any,
    group: PropTypes.any,
    s: PropTypes.any,
}
export default FieldLabel
