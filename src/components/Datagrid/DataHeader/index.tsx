import * as React from "react"
import {prefix} from "../../../config"
import DataCell from "../DataCell"
import Checkbox from "../../../components/Forms/Checkbox"
import { ID, Action } from "../../../helpers/types"

export interface Props {
    style?: any
    addClass?: string
    actions?: Action[]
    handleSelectAll?: () => void
    selectedAll?: boolean
}

export interface State {
}

class DataHeader extends React.Component<Props, State> {

    public static defaultProps: Props = {
        addClass: "",
        style: {},
        actions: [],
        handleSelectAll: () => {},
        selectedAll: false,
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
                                input={{ onChange: this.props.handleSelectAll, checked: this.props.selectedAll}}
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
