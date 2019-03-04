import * as React from "react"
import css from "css"

interface Props {
    children?: any
    className?: string
    style?: any
    props?: any
    [propName: string]: any
}

class Div extends React.PureComponent<Props, {}> {
    render() {
        const {children, style, className, props, ...others} = this.props
        return <CssDiv className={`muk-div ${className || ""}`} {...props} style={{...others, ...style}}>
            {children}
        </CssDiv>
    }
}

const CssDiv = css("div")({})

export default Div
