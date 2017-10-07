import * as React from "react"
import css from "cxs/component"

export const Div = ({children,className = "", ...props}) => {
    return <CssDiv className={className} {...props}>
                {children}
            </CssDiv>
}

const CssDiv = css("div")(
    (props) => {
        const { className,theme,children,...style } = props
        return style
})

export const Span = ({children,className = "", ...props}) => {
    return <CssSpan className={className} {...props}>
        {children}
    </CssSpan>
}

const CssSpan = css("span")(
    (props) => {
        const { className,theme,children,...style } = props
        return style
})

export const Ul = ({children,className = "", ...props}) => {
    return <CssUl className={className} {...props}>
        {children}
    </CssUl>
}

const CssUl = css("ul")(
    (props) => {
        const { className,theme,children,...style } = props
        return style
    })
