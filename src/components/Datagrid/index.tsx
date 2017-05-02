import * as React from "react"
import {prefix} from "../../config"
import DataRow from './DataRow'

export interface Props {
    style?: any
    addClass?: string
    rows: Array<DataRow> | Array<JSX.Element>
    header: Array<DataRow> | Array<JSX.Element>
}
export interface State {
}

class Datagrid extends React.Component<Props, State> {

    readonly name = prefix + "datagrid";

    public static defaultProps: Props = {
        style: {},
        addClass: '',
        rows: [],
        header: [],
    }

    render() {
        let className = `${this.name} ${this.props.addClass}`
        return (
            <table className={className}>
                {this.props.header}
                <tbody>
                 {this.props.rows}
                </tbody>
            </table>
        )
    }
}

export default Datagrid