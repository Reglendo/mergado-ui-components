import * as React from "react"
import glamorous,{Div} from "glamorous"

import {prefix} from "../../../config"
import TextInput from "../../../components/Forms/TextInput"
import Checkbox from "../../../components/Forms/Checkbox"
import { ID, Action, Filter } from "../../../helpers/types"
import domOnlyProps from "../../../helpers/dom-only-props"

export interface Props {
    bulkActions?: Action[]
    filters?: Filter[]
    buttons?: JSX.Element[]
    style?: any
    addClass?: string
    labels?: {
        actionsBar: string
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
        buttons: [],
        style: {},
        addClass: "",
        labels: {
            actionsBar: "",
        },
    }

    private readonly name = prefix + "datagrid"

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
                actions: this.props.bulkActions,
                labels: this.props.labels,
                selectedAll: this.state.selectedAll,
                handleSelectAll: this.handleSelectAll.bind(this),
                handleSelectRow: this.handleSelectRow.bind(this),
                selectedRows: this.state.selectedRows,
            })
        })
    }

    protected renderFiltersBar() {
        return (
            <Div verticalAlign={"middle"} className={`${this.name}__filters_bar`}>
                <div className="muk-grid--table" style={{width: "100%" }}>
                    <div>
                        {this.renderFilters()}
                        {this.renderButtons()}
                    </div>
                </div>
            </Div>
        )
    }

    protected renderButtons() {
        return this.props.buttons.map(obj => {
            return <div style={{ textAlign: "right", verticalAlign: "bottom" }}>{obj}</div>
        })
    }

    protected renderFilters() {
        return this.props.filters.map(obj => {
            switch(obj.type) {
                case "text":
                    return (<TextFilter
                                type="search"
                                input={{ onChange: (evt) => { obj.action(evt) } }} labels={{placeholder: obj.label }}
                                key="text"
                            />)
                case "checkbox":
                    return (<CheckboxFilter
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
                <div style={{whiteSpace: "nowrap"}}>
                    {this.props.filters.length > 0 && this.renderFiltersBar()}
                </div>
                <Table className={className} style={style} {...domOnlyProps(this.props)}>
                    {this.props.children && this.renderChildren(this.props.children)}
                </Table>
            </div>
        )
    }
}

const Table = glamorous.table({
    width: "100%",
    "& .sortable-ghost": {
      opacity: 0.1,
    },
},(props:any) => {
    return {
        borderLeft: props.theme.table_border_vertical,
    }
})

const TextFilter = glamorous(TextInput)({
    paddingRight: "20px",
})

const CheckboxFilter = glamorous(Checkbox)({
    whiteSpace: "nowrap",
})

export default DataTable
