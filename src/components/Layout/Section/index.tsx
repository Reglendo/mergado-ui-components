import * as React from "react"
import glamorous from "glamorous"

import domOnlyProps from "../../../helpers/dom-only-props"

interface Props {
    header?: JSX.Element
    children?: any
}

const Section = (props: Props) => {
    const { children, header } = props
    if(children === "" || children === null) {
        return null
    }

    return (
        <SSection  {...domOnlyProps(props)}>
            {header && <Header>{header}</Header>}
            {children}
        </SSection>
    )
}

const Header = glamorous.h3({
    padding: "20px",
    fontWeight: "normal",
    fontSize: "15px",
},(props: any) => {
    return {
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