import * as React from "react"
import glamorous from "glamorous"
import Button from "../../Forms/Button"

import domOnlyProps from "../../../helpers/dom-only-props"

interface Props {
    header?: JSX.Element | string
    prefix?: JSX.Element | string
    suffix?: JSX.Element | string
    children?: any
}

const Section = (props: Props) => {
    const { children, header } = props
    if(children === "" || children === null) {
        return null
    }

    const prefix = props.prefix ? <Prefix>{props.prefix}</Prefix> : ""
    const suffix = props.suffix ? <Suffix>{props.suffix}</Suffix> : ""

    return (
        <SSection  {...domOnlyProps(props)}>
            {header &&
                <Header>
                    {prefix}
                    {header}
                    {suffix}
                </Header>
            }
            {children}
        </SSection>
    )
}

const Prefix = glamorous(Button)({
    height: "64px",
    borderRadius: "5px 0 0 0",
},(props: any) => {
    return {
        margin: `-${(parseInt(props.theme.section_padding) + 1) + "px"}!important`,
        marginRight: `${props.theme.section_padding} !important`,
    }
})

const Suffix = glamorous(Button)({
    height: "64px",
    borderRadius: "0 5px 0 0",
    float: "right",
},(props: any) => {
    return {
        margin: `-${(parseInt(props.theme.section_padding) + 1) + "px"}!important`,
        marginLeft: `${props.theme.section_padding} !important`,
    }
})

const Header = glamorous.h3({
    fontWeight: "normal",
    fontSize: "15px",
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

const SSection = glamorous.section({
    marginBottom: "20px",
},(props:any) => {
    return {
        background: props.theme.background,
        color: props.theme.text,
        borderRadius: props.theme.radius,
        border: props.theme.section_border,
        padding: props.theme.section_padding,
    }
})

export default Section