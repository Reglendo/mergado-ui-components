import * as React from "react"
import glamorous from "glamorous"

import {prefix} from "../../../config"
import DataCell from "../DataCell"
import Checkbox from "../../../components/Forms/Checkbox"
import { ID, Action } from "../../../helpers/types"

export interface Props {
    style?: any
    addClass?: string
    inactive?: boolean
    /** optional attribute "data-id" for various uses */
    dataId?: ID
    /** array of bulk actions - more info in DataTable component */
    actions?: Action[]
    /** needed for bulk actions */
    selectedAll?: boolean
    /** needed for bulk actions */
    handleSelectRow?: (id: ID) => {}
    /** needed for bulk actions */
    selectedRows?: ID[]
}

export interface State {
}


class DataRow extends React.Component<Props, State> {

    public static defaultProps: Props = {
        addClass: "",
        style: {},
        inactive: false,
        dataId: "",
        actions: [],
        selectedRows: [],
    }
    private readonly name = prefix + "datagrid__row"

    public render() {
        const { style, addClass, inactive, dataId, actions, selectedRows } = this.props
        const isSelected = selectedRows ? selectedRows.indexOf(dataId) > -1 : false
        return (
            <Tr className={`${this.name} ${inactive && this.name+`--inactive`} ${addClass}`}
                disabled={inactive}
                selected={isSelected}
                data-id={dataId} style={style}>
                    {actions.length > 0 &&
                        <DataCell>
                            <Checkbox
                                input={{ "onChange": evt => this.props.handleSelectRow(dataId),
                                         "checked": this.props.selectedRows.indexOf(dataId) !== -1,
                                         "data-id": dataId,
                                         "className": "bulk-action-item",
                                      }} />
                        </DataCell>
                    }
                    {this.props.children}
            </Tr>
        )
    }
}

const Tr = glamorous.tr({
},(props: any) => {
    console.log(props)
    return {
        background: props.selected ? props.theme.selected_background : "#fff",
        ":hover td": {
            background: props.theme.hover_background,
        },
        color: props.disabled ? "#ccc" : "#000"
    }
})

export default DataRow
