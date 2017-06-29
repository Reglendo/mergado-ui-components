import * as React from "react"
import {prefix} from "config"
import DataHeader from "../DataHeader"
import DataBody from "../DataBody"
import Button from "components/Forms/Button"
import TextInput from "components/Forms/TextInput"
import Checkbox from "components/Forms/Checkbox"
import {InputLabel} from "components/Forms/Input"
import uniqueId from "helpers/unique_id"
import { ID, Action, Filter } from "helpers/types"

export interface Props {
    bulkActions: Action[]
    filters: Filter[]
    style?: any
    addClass?: string
    labels?: {
        actionsBar: string,
    }
}
export interface State {
    selectedAll: boolean
    selectedRows: ID[]
}

class DataTable extends React.Component<Props, State> {

    public static defaultProps: Props = {
        bulkActions: [],
        filters: [],
        style: {},
        addClass: "",
        labels: {
            actionsBar: "",
        },
    }

    private readonly name = prefix + "datagrid"
    private inputElement: any

    constructor(props) {
        super(props)

        this.state = {
            selectedAll: false,
            selectedRows: [],
        }
    }

    protected handleSelectAll() {
        if(this.state.selectedAll) {
            this.setState({
                selectedRows: [],
                selectedAll: false,
            })
        } else {
            const selected = []
            for ( const checkbox of document.querySelectorAll(".bulk-action-item")) {
                const item: any = checkbox
                selected.push(parseInt(item.getAttribute("data-id"), 10))
            }
            this.setState({
                selectedRows: selected,
                selectedAll: true,
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

    protected renderChildren(children) {
        return children.map(obj => {

            return React.cloneElement(obj, {
                ...obj.props,
                key: uniqueId(),
                actions: this.props.bulkActions,
                labels: this.props.labels,
                selectedAll: this.state.selectedAll,
                handleSelectAll: this.handleSelectAll.bind(this),
                handleSelectRow: this.handleSelectRow.bind(this),
                selectedRows: this.state.selectedRows,
            })
        })
    }

    protected renderBulkActionbar() {
        const { labels } = this.props
        return (
            <div className={`${this.name}__actions_bar muk-1-12`}>
                <InputLabel name="actionbar">{labels.actionsBar}</InputLabel>
                <div className={`${this.name}__actions_icons`}>
                    {this.renderBulkActions()}
                </div>
            </div>
        )
    }

    protected renderBulkActions() {
        const disabled = !this.state.selectedRows || this.state.selectedRows.length === 0
        return this.props.bulkActions.map(obj => {
            return (<Button onClick={obj.action}
                            key={obj.type}
                            icon={obj.icon}
                            disabled={disabled}
                            color="nocolor"
                            size="tiny" />)
        })
    }

    protected renderFiltersBar() {
        return (
            <div className={`${this.name}__filters_bar muk-11-12`}>
                <div className="muk-grid--table">
                    <div>
                        {this.renderFilters()}
                    </div>
                </div>
            </div>
        )
    }

    protected renderFilters() {
        return this.props.filters.map(obj => {
            switch(obj.type) {
                case "text":
                    return (<TextInput
                                type="search"
                                input={{ onChange: (evt) => { obj.action(evt) } }} labels={{main: obj.label }}
                                key="text"
                            />)
                case "checkbox":
                    return (<Checkbox
                                input={{ onChange: (evt) => { obj.action(evt) } }} labels={{main: obj.label }}
                                key="checkbox"
                            />)
            }
        })
    }

    public render() {
        const { addClass, style } = this.props
        const className = `${this.name}__table ${this.props.addClass}`
        return (
            <div className={`${this.name}`}>
                <div className="muk-grid--table">
                    <div>
                        {this.props.bulkActions.length > 0 && this.renderBulkActionbar()}
                        {this.props.filters.length > 0 && this.renderFiltersBar()}
                    </div>
                </div>
                <table className={className} style={style}>
                    {this.props.children && this.renderChildren(this.props.children)}
                </table>
            </div>
        )
    }
}

export default DataTable
