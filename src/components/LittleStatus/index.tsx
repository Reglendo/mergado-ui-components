import * as React from "react"
import css from "@reglendo/cxs/component"
import {prefix} from "../../config"
import {Type} from "../../helpers/types"

export interface Props {
    title?: string
    type: Type,
    text?: string
    style?: any
}
export interface State {
}

class LittleStatus extends React.Component<Props, State> {

    private readonly name = prefix + "little_status";

    public static defaultProps: Props = {
        title: "",
        type: "success",
        text: "",
        style: {},
    }

    public render() {

        const className = `${this.name} ${this.name}--${this.props.type}`
        const classIndikator = `${this.name}__indikator tooltip`
        const classText = `${this.name}__text`

        const text = this.props.text ?
                        (<Text className={classText}> {this.props.text}</Text>)
                    :
                        this.props.children

        return (
            <Wrapper className={className}  s={this.props.style}>
                <Indikator type={this.props.type}
                                className={classIndikator}
                                title={this.props.title} />
                {text}
            </Wrapper>
        )
    }
}

const Wrapper = css("span")({
    verticalAlign: "middle",
}, props => ({
    ...props.s
}))
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
        backgroundColor: props.type === "inactive" ? "#888" : props.theme[props.type],
    }
});

const Text = css("span")({
    verticalAlign: "middle",
    "a:hover": {
        textDecoration: "none",
    },
})

export default LittleStatus
