import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from "prop-types"
interface Props {
    type: "1" | "2" | "3" | "4" | "5"
    children?: any
    className?: string
    style?: any
}

const Header = (props: Props) => {
    const name = "muk-header"
    const { children, type, className, style, ...p } = props
    if(children === "" || children === null) {
        return null
    }

    if(type === "1") {
        return (
            <CssH1 {...p} s={style} className={`muk-header m-h1 ${className}`}>
                {children}
            </CssH1>
        )
    }
    if(type === "2") {
        return (
            <CssH2 {...p} s={style} className={`muk-header m-h2 ${className}`}>
                {children}
            </CssH2>
        )
    }
    if(type === "3") {
        return (
            <CssH3 {...p} s={style} className={`muk-header m-h3 ${className}`}>
                {children}
            </CssH3>
        )
    }
    if(type === "4") {
        return (
            <CssH4 {...p} s={style} className={`muk-header m-h4 ${className}`}>
                {children}
            </CssH4>
        )
    }
    if(type === "5") {
        return (
            <CssH5 {...p} s={style} className={`muk-header m-h5 ${className}`}>
                {children}
            </CssH5>
        )
    }
}

const CssH1 = css("h1")({
    fontSize:  "28px",
    lineHeight:  "40px",
    margin:  "40px 0 0 0",
    fontWeight: 700,
}, props => ({ ...props.s }))



const CssH2 = css("h2")({
    fontSize:  "24px",
    lineHeight:  "32px",
    margin:  "32px 0 0 0",
    fontWeight: 700,
}, props => ({ ...props.s }))

const CssH3 =  css("h3")({
    fontSize:  "20px",
    lineHeight:  "24px",
    margin:  "24px 0 0 0",
    fontWeight: 700,
}, props => ({ ...props.s }))

const CssH4 =  css("h4")({
    fontSize:  "17px",
    lineHeight:  "24px",
    margin:  "24px 0 0 0",
    fontWeight: 700,
}, props => ({ ...props.s }))

const CssH5 =  css("h5")({
    fontSize:  "14px",
    lineHeight:  "20px",
    margin:  "20px 0 0 0",
    fontWeight: 700,
}, props => ({ ...props.s }))

CssH1.propTypes = {
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    s: PropTypes.any,
}
CssH2.propTypes = CssH1.propTypes
CssH3.propTypes = CssH1.propTypes
CssH4.propTypes = CssH1.propTypes
CssH5.propTypes = CssH1.propTypes

export default Header
