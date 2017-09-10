import * as React from "react"
import glamorous from "glamorous"

import {prefix} from "../../../config"
import DataCell from "../DataCell"
import Checkbox from "../../../components/Forms/Checkbox"
import { ID, Action } from "../../../helpers/types"
import Button from "../../../components/Forms/Button"
import {Actions, ActionsIcons} from "../DataTable"

export interface Props {
    style?: any
    addClass?: string
    actions?: Action[]
    handleSelectAll?: () => void
    selectedAll?: boolean
    selectedRows?: any[]
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

    protected renderBulkActions() {
        return this.props.actions.map(obj => {
            return (<Button onClick={obj.action}
                            key={obj.type}
                            icon={obj.icon}
                            color="nocolor"
                            size="small" />)
        })
    }

    public render() {
        const { actions, addClass, selectedRows, style } = this.props
        const kids: any = this.props.children
        const lastKid = kids.pop()
        return (
            <thead>
                <Header className={`${this.name} ${this.name}--header ${addClass}`} selected={selectedRows.length > 0}
                        style={style}>
                    {actions.length > 0 &&
                        <DataCell type="header" style={{width: "1%"}}>
                            <Checkbox
                                input={{ onChange: this.props.handleSelectAll, checked: this.props.selectedAll}}
                            />
                        </DataCell>
                    }
                    {kids}
                    {selectedRows.length > 0 ?
                        <DataCell type="header">
                            <Actions className={`${this.name}__actions_bar`}>
                                <ActionsIcons className={`${this.name}__actions_icons`}>
                                    {this.renderBulkActions()}
                                </ActionsIcons>
                            </Actions>
                        </DataCell>
                        :
                        lastKid}
                </Header>
            </thead>
        )
    }
}

const Header = glamorous.tr({}, (props: any) => { return {
    background: props.selected ? props.theme.blue : "#333",
}})

export default DataHeader
