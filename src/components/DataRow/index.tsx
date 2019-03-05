import * as React from "react"
import css from "../../css"
import DataCell from "../DataCell"
import Checkbox from "../Form/Checkbox"
import { ID, Action } from "../../helpers/types"
import Theme from "../Theme"

export interface Props {
    style?: any
    className?: string
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

class DataRow extends React.PureComponent<Props, State> {

    public static defaultProps: Props = {
        className: "",
        style: {},
        inactive: false,
        dataId: "",
        actions: [],
        selectedRows: [],
    }
    private readonly name = "muk-datarow"

    public render() {
        const { style, inactive, dataId, actions, selectedRows, className } = this.props
        const isSelected = selectedRows ? selectedRows.indexOf(dataId) > -1 : false
        return (
            <CssTr className={`${this.name} ${inactive && `inactive`} ${className}`}
                disabled={inactive}
                selected={isSelected}
                data-id={dataId} style={style}>
                    {actions.length > 0 &&
                        <DataCell className="m-actions-cell">
                            <Checkbox
                                className="m-bulk-action-item"
                                onChange={evt => this.props.handleSelectRow(dataId)}
                                checked={this.props.selectedRows.indexOf(dataId) !== -1}
                                dataId={dataId}
                            />
                        </DataCell>
                    }
                    {this.props.children}
            </CssTr>
        )
    }
}

const CssTr = css("tr")({
},(props: any) => {
    return {
        background: props.selected ? Theme.selected_background : "#fff",
        ":hover td": {
            background: Theme.hover_background,
        },
        color: props.disabled ? "#ccc" : "initial",
        " *, path": {
            color: props.disabled && "#ccc !important",
            fill: props.disabled && "#ccc !important",
        },
        " .muk-icon--pause *": {
            color: Theme.blue + "!important",
            fill: Theme.blue + "!important",
        },
        "& .muk-icon--play *": {
            color: Theme.blue + "!important",
            fill: Theme.blue + "!important",
        },
    }
})

export default DataRow
