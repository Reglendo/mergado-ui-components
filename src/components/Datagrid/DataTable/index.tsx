import * as React from "react"
import {prefix} from "config"

export interface Props {
    style?: any
    addClass?: string
}
export interface State {
}

class DataTable extends React.Component<Props, State> {

    public static defaultProps: Props = {
        style: {},
        addClass: "",
    }

    private readonly name = prefix + "datagrid";

    public render() {
        const { addClass, style } = this.props
        const className = `${this.name} ${this.props.addClass}`
        return (
            <table className={className} style={style}>
                {this.props.children}
            </table>
        )
    }
}

export default DataTable
