import * as React from "react"
import css from "cxs/component"

import domOnlyProps from "../../../helpers/dom-only-props"

interface Props {
    type: "1" | "2" | "3" | "4" | "5"
    children?: any
}

export const Header = (props: Props) => {
    const { children, type } = props
    if(children === "" || children === null) {
        return null
    }

    if(type === "1") {
        return (
            <H1 {...domOnlyProps(props)}>
                {children}
            </H1>
        )
    }
    if(type === "2") {
        return (
            <H2 {...domOnlyProps(props)}>
                {children}
            </H2>
        )
    }
    if(type === "3") {
        return (
            <H3 {...domOnlyProps(props)}>
                {children}
            </H3>
        )
    }
    if(type === "4") {
        return (
            <H4 {...domOnlyProps(props)}>
                {children}
            </H4>
        )
    }
    if(type === "5") {
        return (
            <H5 {...domOnlyProps(props)}>
                {children}
            </H5>
        )
    }
}

const H1 = css("h1")({
    fontSize:  "28px",
    lineHeight:  "40px",
    margin:  "40px 0 0 0",
    fontWeight: 700,
})

const H2 = css("h2")({
    fontSize:  "24px",
    lineHeight:  "32px",
    margin:  "32px 0 0 0",
    fontWeight: 700,
})

const H3 =  css("h3")({
    fontSize:  "20px",
    lineHeight:  "24px",
    margin:  "24px 0 0 0",
    fontWeight: 700,
})

const H4 =  css("h4")({
    fontSize:  "17px",
    lineHeight:  "24px",
    margin:  "24px 0 0 0",
    fontWeight: 700,
})

const H5 =  css("h5")({
    fontSize:  "14px",
    lineHeight:  "20px",
    margin:  "20px 0 0 0",
    fontWeight: 700,
})
