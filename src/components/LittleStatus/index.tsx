import * as React from "react"
import glamorous from "glamorous"

import {prefix} from "../../config"

export interface Props {
    title?: string
    type: "warning" | "success" | "error" | "inactive"
    text?: string
    style?: any
}
export interface State {
}

const Wrapper = glamorous.span({
    verticalAlign: "middle",
})
const Indikator = glamorous.span({
    width: "8px",
    height: "8px",
    borderRadius: "100%",
    borderBottom: "none",
    verticalAlign: "baseline",
    display: "inline-block",
    margin: "0 5px",
}, (props: any) => {
    const colors = {
        success: props.theme.green,
        warning: props.theme.orange,
        error: props.theme.red,
        inactive: props.theme.grey,
    }
    return {
        backgroundColor: colors[props.type]
    }
});

const Text = glamorous.span({
    verticalAlign: "middle",
    "a:hover": {
        textDecoration: "none",
    },
})
/* </style> */

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
            <Wrapper className={className}  style={this.props.style}>
                <Indikator type={this.props.type}
                                className={classIndikator}
                                title={this.props.title} />
                {text}
            </Wrapper>
        )
    }
}

export default LittleStatus
