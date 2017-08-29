import * as React from "react"
import {prefix} from "config"
import DataHeader from "../DataHeader"
import DataBody from "../DataBody"
import Button from "components/Forms/Button"
import TextInput from "components/Forms/TextInput"
import Checkbox from "components/Forms/Checkbox"
import uniqueId from "helpers/unique_id"
import { ID, Action, Filter } from "helpers/types"
import styled from "styled-components"
import domOnlyProps from "helpers/dom-only-props"

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

/* <style> */

const Wrapper = styled.div`
`

const Table = styled.table`
    width: 100%;
    .sortable-ghost {
      opacity: 0.1;
    }
`

const Filters = styled.div`
    display: inline-block;
    vertical-align: bottom;
    padding-left: 40px;
    position: relative;
    .muk-form__group {
        padding: 0;
    }
    &:before {
        display: inline-block;
        content: " ";
        border-left: 2px solid #dbcba3;
        height: 40px;
        vertical-align: bottom;
        margin-top: 20px;
        width: 10px;
        position: absolute;
        bottom: 0;
        left: 19px;
    }
`

const TextFilter = styled(TextInput)`
    &.muk-form__group {
        padding-right: 20px;
    }
`

const CheckboxFilter = styled(Checkbox)`
    &.muk-form__group {
        padding-top: 20px;
        padding-left: 20px;
    }
    white-space: nowrap;
`

const Actions = styled.div`
    display: inline-block;
    vertical-align: bottom;
`
const ActionsIcons = styled.div`
    background: white;
    display: inline-block;
    vertical-align: bottom;
    height: 40px;
    line-height: 34px;
    white-space: nowrap;
    position: relative;
    background-color: #fff;
    border: 1px solid #dbcba3;
    .muk-button__item {
        height: 34px !important;
    }
    .muk-icon {
        line-height: 42px;
    }
    svg {
        width: 18px !important;
        height: 18px !important;
    }
`

/* </style> */

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
            <Actions className={`${this.name}__actions_bar`}>
                <ActionsIcons className={`${this.name}__actions_icons`}>
                    {this.renderBulkActions()}
                </ActionsIcons>
            </Actions>
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
            <Filters className={`${this.name}__filters_bar muk-11-12`}>
                <div className="muk-grid--table">
                    <div>
                        {this.renderFilters()}
                    </div>
                </div>
            </Filters>
        )
    }

    protected renderFilters() {
        return this.props.filters.map(obj => {
            switch(obj.type) {
                case "text":
                    return (<TextFilter
                                type="search"
                                input={{ onChange: (evt) => { obj.action(evt) } }} labels={{main: obj.label }}
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
            <Wrapper className={`${this.name}`}>
                <div style={{whiteSpace: "nowrap"}}>
                    {this.props.bulkActions.length > 0 && this.renderBulkActionbar()}
                    {this.props.filters.length > 0 && this.renderFiltersBar()}
                </div>
                <Table className={className} style={style} {...domOnlyProps(this.props)}>
                    {this.props.children && this.renderChildren(this.props.children)}
                </Table>
            </Wrapper>
        )
    }
}

export default DataTable
