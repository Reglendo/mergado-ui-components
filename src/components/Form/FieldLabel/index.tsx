import * as React from "react"
import css from "css"
import {form} from "config"
import Theme from "components/Theme";


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
    style?: any
    [propName: string]: any
}


export const FieldLabel: React.SFC<Props> = ({children, bigLabel, className, style, ...others}): any => {
    if(children === "" || children === null) {
        return false
    }

    return (
            <Label className={`${form}-label ${className || ""}`} bigLabel={bigLabel} {...others}>
                {bigLabel ? <CssBigLabel>{children}</CssBigLabel> : children }
            </Label>
        )
}



const Label = css("label")({
    display: "inline-block",
    width: "100%",
    height: "25px",
    " .muk-popup-hint": {
        verticalAlign: "middle",
    },
    fontSize: Theme.form_label_text_size,
    fontWeight: Theme.form_label_text_weight,
}, (props: any) => {
    return {
        height: props.bigLabel ? "50px" : "25px",
    }
})

export default FieldLabel
