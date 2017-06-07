import * as React from "react"
import {prefix} from "config"
import * as Sortable from "react-sortablejs"
import DataRow from "../DataRow"
import { ID, Action } from "helpers/types"

export interface Props {
    style?: any
    addClass?: string
    sortable?: boolean
    sortableProps?: any
    actions?: Action[]
    handleSelectRow?: (id: ID) => {}
    selectedRows?: ID[]
}

export interface State {
}

class DataBody extends React.Component<Props, State> {

    public static defaultProps: Props = {
        sortable: false,
        sortableProps: {},
        addClass: "",
        style: {},
        actions: [],
    }
    private readonly name = prefix + "datagrid__body";

    protected renderChildren() {
        const children: any = this.props.children
        return children.map(obj => {
            return React.cloneElement(obj, {
                actions: this.props.actions,
                handleSelectRow: this.props.handleSelectRow,
                selectedRows: this.props.selectedRows,
            })
        })
    }

    public render() {
        const { sortable, sortableProps, style, addClass } = this.props;
        if(sortable) {
            return (
                <Sortable tag="tbody" {...sortableProps}>
                    {this.renderChildren()}
                </Sortable>
            )

        } else {
            return (
                <tbody>
                    {this.renderChildren()}
                </tbody>
            )
        }
    }
}

export default DataBody
