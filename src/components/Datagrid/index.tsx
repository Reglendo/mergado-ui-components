import * as React from "react"
import {prefix} from "config"

export interface Props {
    style?: any
    addClass?: string
}
export interface State {
}

class DataTable extends React.Component<Props, State> {

    readonly name = prefix + "datagrid";

    public static defaultProps: Props = {
        style: {},
        addClass: ''
    }

    render() {
        const { addClass, style } = this.props
        let className = `${this.name} ${this.props.addClass}`
        return (
            <table className={className} style={style}>
                {this.props.children}
            </table>
        )
    }
}

export default DataTable