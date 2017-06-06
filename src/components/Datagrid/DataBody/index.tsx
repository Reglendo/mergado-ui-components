import * as React from "react"
import {prefix} from "config"
import * as Sortable from "react-sortablejs"
import { Action } from "../DataTable"
import DataRow from "../DataRow"

export interface Props {
    style?: any
    addClass?: string
    sortable?: boolean
    sortableProps?: any
    actions?: Action[]
    checkedAll?: boolean
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
        checkedAll: false,
    }
    private readonly name = prefix + "datagrid__body";

    protected renderChildren() {
        const children: any = this.props.children
        return children.map(obj => {
            if(obj.type.name === "DataRow") {

                return <DataRow {...obj.props} checkedAll={this.props.checkedAll} actions={this.props.actions} />
            } else {
                return obj
            }
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
