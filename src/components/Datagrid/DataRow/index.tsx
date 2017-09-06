import * as React from "react"
import styled from "styled-components"
import {prefix} from "../../../config"
import DataCell from "../DataCell"
import Checkbox from "../../../components/Forms/Checkbox"
import uniqueId from "../../../helpers/unique_id"
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

const Row = styled.tr`
    background: #fff;

    color: ${props => props.disabled ? "#ccc" : "#000"};

    .muk-icon--pause,.muk-icon--play {
        color: #333;
    }

    &:not(.no-hover):hover {
        .${prefix}datagrid__cell {
            background: #fcfaf4
        }
    }
`

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
        const { style, addClass, inactive, dataId, actions } = this.props

        return (
            <Row className={`${this.name} ${inactive && this.name+`--inactive`} ${addClass}`}
                disabled={inactive}
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
            </Row>
        )
    }
}

export default DataRow
