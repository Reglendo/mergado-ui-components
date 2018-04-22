import * as React from "react"
import css from "@reglendo/cxs/component"
import Grid from "../Grid"
import GridCell from "../GridCell"

import domOnlyProps from "../../../helpers/dom-only-props"

interface Props {
    header?: JSX.Element | string
    prefix?: JSX.Element | string
    suffix?: JSX.Element | string
    children?: any
    className?: string
}

const Section = (props: Props) => {
    const name = "muk-section"
    const { children, header, prefix, suffix, className, ...p } = props
    if(children === "" || children === null) {
        return null
    }

    const pref = prefix && <CssPrefix className="m-prefix" row={"1"}>{props.prefix}</CssPrefix>
    const suff = suffix && <CssSuffix className="m-suffix" row={"1"}>{props.suffix}</CssSuffix>

    return (
        <CssSection className={`${name} ${className || ""}`}  {...p}>
            {header &&
                <CssHeader className={"m-header"}>
                    <Grid className={"m-header-wrap"} cols={"auto 1fr auto"}>
                    {pref}
                    <GridCell className="m-header-content" row={"1"}>
                        {header}
                    </GridCell>
                    {suff}
                    </Grid>
                </CssHeader>
            }
            {children}
        </CssSection>
    )
}

const CssPrefix = css(GridCell)({
    margin: "-10px",
    padding: "10px",
    marginRight: "15px",
    paddingRight: "15px",
    borderRight: "1px solid #ccc",
    justifySelf: "left",
})

const CssSuffix = css(GridCell)({
    float: "right",
    margin: "-10px",
    padding: "10px",
    marginLeft: "15px",
    paddingLeft: "15px",
    borderLeft: "1px solid #ccc",
    justifySelf: "right",
})

const CssHeader = css(GridCell)({
    fontWeight: "normal",
    fontSize: "15px",
    height: "63px",
},(props: any) => {
    return {
        padding: `${props.theme.section_padding}`,
        margin: `-${props.theme.section_padding}!important`,
        marginBottom: "20px !important",
        background: props.theme.decoration_background,
        borderBottom: props.theme.section_border,
        borderRadius: `${props.theme.radius} ${props.theme.radius} 0 0`,
    }
})

const CssSection = css("section")({
    marginBottom: "20px",
},(props: any) => {
    return {
        background: props.theme.background,
        color: props.theme.text,
        borderRadius: props.theme.radius,
        border: props.theme.section_border,
        padding: props.theme.section_padding,
    }
})

export default Section
