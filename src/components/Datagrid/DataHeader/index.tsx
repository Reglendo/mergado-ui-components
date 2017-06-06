import * as React from "react"
import {prefix} from "config"
import { Action } from "../DataTable"
import DataCell from "../DataCell"
import Checkbox from "components/Forms/Checkbox"

export interface Props {
    style?: any
    addClass?: string
    actions?: Action[]
    checkAll?: () => void
    checkedAll?: boolean
}

export interface State {
}

class DataHeader extends React.Component<Props, State> {

    public static defaultProps: Props = {
        addClass: "",
        style: {},
        actions: [],
        checkAll: () => {},
        checkedAll: false,
    }
    private readonly name = prefix + "datagrid__row";

    public render() {
        const { actions, style, addClass } = this.props;
        return (
            <thead>
                <tr className={`${this.name} ${this.name}--header ${addClass}`} style={style}>
                    {actions.length > 0 &&
                        <DataCell type="header" style={{width: "1%"}}>
                            <Checkbox
                                input={{ onChange: this.props.checkAll, checked: this.props.checkedAll}}
                            />
                        </DataCell>
                    }
                    {this.props.children}
                </tr>
            </thead>
        )
    }
}

export default DataHeader
