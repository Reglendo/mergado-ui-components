import * as React from "react"
import Grid from "../Grid"
import GridCell from "../GridCell"
import css from 'css'
import Theme from "components/Theme"

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
    const { children, header, prefix, suffix, className, ...p } = props
    if(children === "" || children === null) {
        return null
    }

    return (
        <CssSection className={`${name} ${className || ""}`} {...p}>
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
    padding: `${Theme.section_padding}`,
    margin: `-${Theme.section_padding}!important`,
    marginBottom: "20px !important",
    background: Theme.decoration_background,
    borderBottom: Theme.section_border,
    borderRadius: `${Theme.radius} ${Theme.radius} 0 0`,
})

const CssSection = css("section")({
    marginBottom: "20px",
    background: Theme.background,
    color: Theme.text,
    borderRadius: Theme.radius,
    border: Theme.section_border,
    padding: Theme.section_padding,
})

export default Section
