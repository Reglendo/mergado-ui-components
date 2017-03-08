import * as React from "react"

export interface Props {
    title: string
    type: "warning" | "ok" | "failed" | ""
}
export interface State {}

class LittleStatus extends React.Component<Props, State> {
    public static defaultProps: Props = {
        title: "",
        type: "ok"
    }

    render() {
        return (
            <span className={`lite-status tooltip ${this.props.type}`} title={this.props.title} />
        ) 
    }
}

export default LittleStatus