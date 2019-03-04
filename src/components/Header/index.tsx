import * as React from "react"
import css from "css"

interface Props {
    type: "1" | "2" | "3" | "4" | "5" | "6" | 1 | 2 | 3 | 4 | 5 | 6
    children?: any
    className?: string
    style?: any
}

const Header = (props: Props) => {
    const { children, className, ...p } = props
    if(children === "" || children === null) {
        return null
    }
    const type = `${p.type || 1}`
    return (
        <CssH {...p} as={`h${type}`} h={type} className={`muk-header m-h${type} ${className || ""}`}>
            {children}
        </CssH>
    )
}

const CssH = css("h1")({
    fontWeight: 700,
    margin:  "0",
}, props => {
    const sizes = [ 40, 32, 24, 20, 18, 16 ]
    const rhytm = sizes[parseInt(props.h) - 1] || sizes[0]
    return ({
    fontSize: `${rhytm * 0.75}px`,
    lineHeight: `${rhytm}px`,
    marginTop: `${rhytm}px`,

})}
)


export default Header
