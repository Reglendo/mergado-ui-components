import * as React from "react"
import css from "css"
import Header from "components/Header"

interface Props {
    header?: JSX.Element
    children?: any
}

const Fieldset = (props: Props) => {
        const { children, header } = props
        if(children === "" || children === null) {
            return null
        }

        return (
            <Styled {...props}>
                {header && <Header type={"3"}>{header}</Header>}
                {children}
            </Styled>
        )
}

const Styled = css("fieldset")({
    padding: 0,
    margin: 0,
})

export default Fieldset
