import * as React from "react"
import {prefix} from "../../config"
import DataRow from './DataRow'
import Sortable from 'react-sortablejs'

export interface Props {
    style?: any
    addClass?: string
    rows: Array<DataRow> | Array<JSX.Element>
    header: Array<DataRow> | Array<JSX.Element>
    sortable?: boolean
    sortableOptions?: any
    sortableOnChange: (order: any, sortable: any) => any

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
        sortable: false,
        sortableOptions: {},
        sortableOnChange: () => {}
    }

    render() {
        let className = `${this.name} ${this.props.addClass}`
        console.log(Sortable)
        return (
            <div>
                <Sortable />
            </div>
        )
    }
}

export default Datagrid