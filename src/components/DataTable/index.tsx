import * as React from "react"
import css from "css"
import Div from "../Div"
import {prefix} from "../../config"
import TextInput from "components/Form/TextInput"
import Checkbox from "components/Form/Checkbox"
import { ID, Action, Filter } from "../../helpers/types"
import Grid from "../Grid"
import GridCell from "../GridCell"

export interface Props {
    bulkActions?: Action[]
    filters?: Filter[]
    buttons?: JSX.Element[]
    style?: any
    className?: string
    labels?: {
        actionsBar: string
    }
    rowSelected?: (selected: number) => void
}
export interface State {
    selectedAll: boolean
    selectedRows: ID[]
}

class DataTable extends React.PureComponent<Props, State> {
    private readonly name = prefix + "datatable"

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

    state = {
        selectedAll: false,
        selectedRows: [],
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextState.selectedRows.length !== this.state.selectedRows.length && nextProps.onRowSelected !== undefined ) {
            nextProps.onRowSelected(nextState.selectedRows.length)
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
            const selector: any = document.querySelectorAll(".m-bulk-action-item ")
            for ( const checkbox of selector) {
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
        const selected = [...this.state.selectedRows]
        const index = selected.indexOf(id)

        index === -1 ? selected.push(id) : selected.splice(index,1)

        this.setState({
            selectedRows: selected,
        })
    }

    protected renderChildren(children) {

        if(this.props.bulkActions.length > 0) {
            const ch: any = !Array.isArray(children) ? [children] : children

            if(Array.isArray(ch)) {
                return ch.filter(o => o).map((obj,index) => {
                    return React.cloneElement(obj, {
                        ...obj.props,
                        key: index,
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
        } else {
            return children
        }
    }

    protected renderFiltersBar() {
        return (
            <Div key={"filtersbar"} className={`m-filters`} marginBottom={"10px"} verticalAlign={"middle"} >
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
        return <Div key="button" className="m-buttons" textAlign="right" verticalAlign="bottom">
            {this.props.buttons.map(obj => obj)}
        </Div>
    }

    protected renderFilters() {
        return this.props.filters.map(obj => {
            switch(obj.type) {
                case "text":
                    return (<CssMTextFilter
                                className="m-text-filter"
                                type="search"
                                value={obj.value}
                                onChange={obj.action}
                                placeholder={obj.label}
                                key={'textfilter_'+obj.label}
                            />)
                case "checkbox":
                    return (<CssMCheckboxFilter
                                className="m-checkbox-filter"
                                onChange={obj.action}
                                checked={obj.value}
                                label={obj.label}
                                key={'checkbox_'+obj.label}
                            />)
            }
        })
    }

    public render() {
        const { className, filters, bulkActions, buttons, labels, ...props } = this.props
        return (
            <Div className={`${this.name} ${className || ""}`}>
                <Div className="m-filters-wrapper" whiteSpace={"nowrap"}>
                    {filters.length > 0 && this.renderFiltersBar()}
                </Div>
                <CssTable className={`m-table`} {...props}>
                    {this.props.children && this.renderChildren(this.props.children)}
                </CssTable>
            </Div>
        )
    }
}

const CssTable = css("table")({
    width: "100%",
    " .sortable-ghost": {
      opacity: 0.1,
    },
    borderBottom: "5px solid #333",
})

const CssMTextFilter = css(TextInput)({
    paddingRight: "20px",
    display: "inline-block",
    width: "70%",
    marginBottom: 0,
})

const CssMCheckboxFilter = css(Checkbox)({
    whiteSpace: "nowrap",
    display: "inline-block",
})

export default DataTable
