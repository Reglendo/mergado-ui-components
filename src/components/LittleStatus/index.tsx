import * as React from "react"
import css from "../../css"

import {Type} from "../../helpers/types"
import Theme from "../Theme"

export interface Props {
    title?: string
    type: Type,
    text?: string
    style?: any
}
export interface State {
}

class LittleStatus extends React.PureComponent<Props, State> {

    private readonly name = "muk-little_status";

    public static defaultProps: Props = {
        title: "",
        type: "success",
        text: "",
        style: {},
    }

    public render() {
        const {type, text, children, ...props } = this.props

        const className = `${this.name} ${this.name}--${type}`
        const classIndikator = `${this.name}__indikator tooltip`
        const classText = `${this.name}__text`

        const content = text ?
                        (<Text className={classText}> {text}</Text>)
                    :
                        children

        return (
            <Wrapper className={className} {...props}>
                <Indikator type={type}
                            className={classIndikator} /> {content}
            </Wrapper>
        )
    }
}

const Wrapper = css("span")({
    verticalAlign: "middle",
})
const Indikator = css("span")({
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    borderBottom: "none",
    verticalAlign: "middle",
    display: "inline-block",
    margin: "0 2px",
}, (props: any) => {
    return {
        boxShadow: props.type === "info" ? "0px 0px 1px 0px rgba(0,0,0,0.5)" : "none",
        backgroundColor: props.type === "inactive" ? "#888" : Theme[props.type],
    }
});

const Text = css("span")({
    verticalAlign: "middle",
    "a:hover": {
        textDecoration: "none",
    },
})

export default LittleStatus
