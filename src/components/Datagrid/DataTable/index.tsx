import * as React from "react"
import {prefix} from "config"
import DataHeader from "../DataHeader"
import DataBody from "../DataBody"
import Button from "components/Forms/Button"
import {InputLabel} from "components/Forms/Input"
import uniqueId from "helpers/unique_id"
export interface Action {
    type: string
    icon: JSX.Element | string
    action: () => any
    disabled: boolean
}

export interface Props {
    bulkActions: Action[]
    style?: any
    addClass?: string
    labels: {
        actionsBar: string,
        actionsHeader: string,
    }
}
export interface State {
    checkedAll: boolean
    selectedRows: any
}

class DataTable extends React.Component<Props, State> {

    public static defaultProps: Props = {
        bulkActions: [],
        style: {},
        addClass: "",
        labels: {
            actionsBar: "",
            actionsHeader: "",
        },
    }

    private readonly name = prefix + "datagrid"
    private inputElement: any

    constructor(props) {
        super(props)

        this.state = {
            checkedAll: false,
            selectedRows: [],
        }
    }

    protected handleCheckAll() {
        if(this.state.checkedAll) {
            this.setState({
                selectedRows: [],
                checkedAll: false,
            })
        } else {
            const selected = []
            for ( const checkbox of document.querySelectorAll(".bulk-action-item")) {
                const item: any = checkbox
                selected.push(parseInt(item.getAttribute("data-id"), 10))
            }
            this.setState({
                selectedRows: selected,
                checkedAll: true,
            })
        }
    }

    protected handleSelectRow(id) {
        const selected = this.state.selectedRows
        const index = selected.indexOf(id)

        index === -1 ? selected.push(id) : selected.splice(index,1)

        this.setState({
            selectedRows: selected,
        })
    }

    protected renderChildren() {
        const children: any = this.props.children
        return children.map(obj => {

            return React.cloneElement(obj, {
                ...obj.props,
                key: uniqueId(),
                actions: this.props.bulkActions,
                checkedAll: this.state.checkedAll,
                checkAll: this.handleCheckAll.bind(this),
                labels: this.props.labels,
                selectRow: this.handleSelectRow.bind(this),
                selected: this.state.selectedRows,
            })
        })
    }

    protected renderBulkActionbar() {
        const { labels } = this.props
        return (
            <div className={`${this.name}__actions_bar`}>
                <InputLabel name="actionbar">{labels.actionsBar}</InputLabel>
                <div className={`${this.name}__actions_icons`}>
                    {this.renderBulkActions()}
                </div>
            </div>
        )
    }

    protected renderBulkActions() {
        const disabled = this.state.selectedRows.length === 0
        return this.props.bulkActions.map(obj => {
            return (<Button onClick={obj.action}
                            key={obj.type}
                            icon={obj.icon}
                            disabled={disabled}
                            color="nocolor"
                            size="tiny" />)
        })
    }

    public render() {
        const { addClass, style } = this.props
        const className = `${this.name}__table ${this.props.addClass}`
        return (
            <div className={`${this.name}`}>
                {this.props.bulkActions.length > 0 && this.renderBulkActionbar()}
                <table className={className} style={style}>
                    {this.renderChildren()}
                </table>
            </div>
        )
    }
}

export default DataTable
