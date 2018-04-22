import * as React from "react"
import cxs from "@reglendo/cxs/component"
import {Div} from "../../../components/Layout/Div"
import {prefix} from "../../../config"
import TextInput from "../../../components/Forms/TextInput"
import Checkbox from "../../../components/Forms/Checkbox"
import { ID, Action, Filter } from "../../../helpers/types"
import domOnlyProps from "../../../helpers/dom-only-props"
import Grid from "../../../components/Layout/Grid"
import GridCell from "../../../components/Layout/GridCell"

export interface Props {
    bulkActions?: Action[]
    filters?: Filter[]
    buttons?: JSX.Element[]
    style?: any
    className?: string
    labels?: {
        actionsBar: string
    }
}
export interface State {
    selectedAll: boolean
    selectedRows: ID[]
}

class DataTable extends React.PureComponent<Props, State> {

    public static defaultProps: Props = {
        bulkActions: [],
        filters: [],
        buttons: [],
        style: {},
        className: "",
        labels: {
            actionsBar: "",
        },
    }

    private readonly name = prefix + "datatable"

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
        const ch: any = !Array.isArray(children) ? [children] : children

        if(Array.isArray(ch)) {
            return ch.map(obj => {

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
        } else {
            return false
        }
    }

    protected renderFiltersBar() {
        return (
            <Div className={`m-filters`} marginBottom={"10px"} verticalAlign={"middle"} >
                <Grid cols="auto auto">
                    <GridCell>
                        {this.renderFilters()}
                    </GridCell>
                    <GridCell>
                        {this.renderButtons()}
                    </GridCell>
                </Grid>
            </Div>
        )
    }

    protected renderButtons() {
        return this.props.buttons.map(obj => {
            return <Div className="m-buttons" textAlign="right" verticalAlign="bottom">{obj}</Div>
        })
    }

    protected renderFilters() {
        return this.props.filters.map(obj => {
            switch(obj.type) {
                case "text":
                    return (<CssMTextFilter
                                className="m-text-filter"
                                type="search"
                                onClear={() => obj.action({currentTarget: {value: "" }})}
                                input={{ onKeyUp: (evt) => { obj.action(evt) }, value: obj.value }}
                                labels={{placeholder: obj.label }}
                                key="text"
                            />)
                case "checkbox":
                    return (<CssMCheckboxFilter
                                className="m-checkbox-filter"
                                input={{ onChange: (evt) => { obj.action(evt) }, value: obj.value }}
                                labels={{main: obj.label }}
                                key="checkbox"
                            />)
            }
        })
    }

    public render() {
        const { className, style, ...props } = this.props
        return (
            <Div className={`${this.name} ${className || ""}`}>
                <Div className="m-filters-wrapper" whiteSpace={"nowrap"}>
                    {this.props.filters.length > 0 && this.renderFiltersBar()}
                </Div>
                <CssTable className={`m-table`} s={style} {...domOnlyProps(props)}>
                    {this.props.children && this.renderChildren(this.props.children)}
                </CssTable>
            </Div>
        )
    }
}

const CssTable = cxs("table")({
    width: "100%",
    " .sortable-ghost": {
      opacity: 0.1,
    },
},(props: any) => {
    return {
        borderBottom: "5px solid #333",
        ...props.s,
    }
})

const CssMTextFilter = cxs(TextInput)({
    paddingRight: "20px",
    display: "inline-block",
    width: "70%",
    marginBottom: 0,
})

const CssMCheckboxFilter = cxs(Checkbox)({
    whiteSpace: "nowrap",
    display: "inline-block",
})

export default DataTable
