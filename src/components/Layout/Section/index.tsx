import * as React from "react"
import glamorous from "glamorous"

import {prefix, form} from "../../../config"
import domOnlyProps from "../../../helpers/dom-only-props"

interface Props {
    header?: JSX.Element
}

class Section extends React.Component<Props, {}> {
    render() {
        const { children, header } = this.props
        if(children === "" || children === null) {
            return null
        }

        return (
            <Styled  {...domOnlyProps(this.props)}>
                {header && <Header>{header}</Header>}
                {children}
            </Styled>
        )
    }
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

const Styled = glamorous.section({
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