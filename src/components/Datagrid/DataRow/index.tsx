import * as React from "react"
import {prefix} from "config"
import { Action } from "../DataTable"
import DataCell from "../DataCell"
import Checkbox from "components/Forms/Checkbox"
import uniqueId from "helpers/unique_id"

export interface Props {
    style?: any
    addClass?: string
    inactive?: boolean
    /** optional attribute "data-id" for sortablejs */
    dataId?: number | string
    actions?: Action[]
    checkedAll?: boolean
    selectRow?: any
    selected?: any
}

export interface State {
    checked?: boolean
}

class DataRow extends React.Component<Props, State> {

    public static defaultProps: Props = {
        addClass: "",
        style: {},
        inactive: false,
        dataId: "",
        actions: [],
        selected: [],
    }
    private readonly name = prefix + "datagrid__row"

    public constructor(props) {
        super(props)
        this.state = {
            checked: props.checkedAll,
        }
    }

    public componentWillReceiveProps(nextProps) {

        if(this.props.checkedAll !== nextProps.checkedAll) {
            this.setState({
                checked: nextProps.checkedAll,
            })
        }
    }

    public render() {
        const { style, addClass, inactive, dataId, actions } = this.props
        return (
            <tr className={`${this.name} ${inactive && this.name+`--inactive`} ${addClass}`}
                key={uniqueId()}
                data-id={dataId} style={style}>
                    {actions.length > 0 &&
                        <DataCell>
                            <Checkbox
                                input={{ "onChange": evt => {
                                                this.props.selectRow(dataId)
                                            },
                                         "onClick": evt => {
                                         },
                                         "checked": this.props.selected.indexOf(dataId) !== -1,
                                         "data-id": dataId,
                                         "className": "bulk-action-item",
                                      }} />
                        </DataCell>
                    }
                    {this.props.children}
            </tr>
        )
    }
}

export default DataRow
