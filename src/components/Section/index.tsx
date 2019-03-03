import * as React from "react"
import Grid from "../Grid"
import GridCell from "../GridCell"
import PropTypes from "prop-types"
import css from '@emotion/styled'

interface Props {
    header?: JSX.Element | string
    prefix?: JSX.Element | string
    suffix?: JSX.Element | string
    children?: any
    className?: string
    style?: any
}

const Section = (props: Props) => {
    const name = "muk-section"
    const { children, style, header, prefix, suffix, className, ...p } = props
    if(children === "" || children === null) {
        return null
    }

    return (
        <CssSection className={`${name} ${className || ""}`} s={style} {...p}>
            {header &&
                <CssHeader className={"m-header"}>
                    <Grid className={"m-header-wrap"} cols={`${prefix ? "auto" : ""} 1fr ${suffix ? "auto" : ""}`}>
                    {prefix && <CssPrefix className="m-prefix">{props.prefix}</CssPrefix>}
                    <GridCell className="m-header-content">
                        {header}
                    </GridCell>
                    {suffix && <CssSuffix className="m-suffix">{props.suffix}</CssSuffix>}
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
        ...props.s,
    }
})

CssSection.propTypes = {
    s: PropTypes.any,
}
export default Section
