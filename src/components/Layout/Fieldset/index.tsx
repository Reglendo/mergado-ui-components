import * as React from "react"
import css from "cxs/component"

import Header from "../Header"
import domOnlyProps from "../../../helpers/dom-only-props"

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
            <FFieldset  {...domOnlyProps(props)}>
                {header && <Header type={"3"}>{header}</Header>}
                {children}
            </FFieldset>
        )
}

const FFieldset = css("fieldset")({
    padding: 0,
    margin: 0,
})

export default Fieldset
