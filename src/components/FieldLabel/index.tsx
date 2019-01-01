import * as React from "react"
import css from "@reglendo/cxs/component"

import {form} from "../../config"
import PropTypes from 'prop-types'
import Theme from "../Theme";


const CssBigLabel = css("h3")({
    borderLeft: `10px solid ${Theme.blue}`,
    padding: "5px",
    paddingLeft: "15px",
    fontSize: "1.1rem",
})

interface Props {
    children?: any
    bigLabel?: boolean
    className?: string
    [propName: string]: any
}


export const FieldLabel = ({children, bigLabel, className} : Props): any => {
    if(children === "" || children === null) {
        return false
    }

    return (
            <Label className={`${form}-label ${className}`} bigLabel={bigLabel}>
                {bigLabel ? <CssBigLabel>{children}</CssBigLabel> : children }
            </Label>
        )
}


const Label = css("label")({
    display: "inline-block",
    height: "25px",
    " .muk-popup-hint": {
        verticalAlign: "middle",
    },
}, (props: any) => {
    const theme: any = props.theme
    return {
        ...props.s,
        height: props.bigLabel ? "50px" : "25px",
        fontSize: theme.form_label_text_size,
        fontWeight: theme.form_label_text_weight,
    }
})

export default FieldLabel
