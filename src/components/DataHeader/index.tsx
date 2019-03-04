import * as React from "react"
import Div from "../Div"
import css from "css"
import {prefix} from "../../config"
import DataCell from "../DataCell"
import Checkbox from "../Checkbox"
import { ID, Action } from "../../helpers/types"
import Button from "../Button"
import Theme from "components/Theme"

export interface Props {
    style?: any
    className?: string

    actions?: Action[]
    handleSelectAll?: () => void
    selectedAll?: boolean
    selectedRows?: any[]
    children?: any
}

export interface State {
}

class DataHeader extends React.PureComponent<Props, State> {

    public static defaultProps: Props = {
        className: "",
        style: {},
        actions: [],
        handleSelectAll: () => {},
    }
    private readonly name = prefix + "datarow";

    protected renderBulkActions() {
        return this.props.actions.map(obj => {
            return (<Button className="m-bulk"
                            onClick={obj.action}
                            key={obj.type}
                            icon={obj.icon}
                            color="nocolor"
                            style={{margin: "0 2px"}}
                            size="small" />)
        })
    }

    public render() {
        const { actions, className, selectedRows, style,children } = this.props
        const kids = !Array.isArray(children) ? [children] : [...children]
        const lastKid = kids.pop()
        return (
            <thead className={`${this.name} ${className || ""}`}>
                <CssHeader className="m-row" selected={selectedRows && selectedRows.length > 0}
                        style={style}>
                    {actions.length > 0 &&
                        <DataCell type="header" style={{width: "1%"}}>
                            <Checkbox
                                onChange={this.props.handleSelectAll}
                                checked={this.props.selectedAll}
                            />
                        </DataCell>
                    }
                    {kids}
                    {selectedRows && selectedRows.length > 0 ?
                        <DataCell type="header">
                            <Div className={`m-actions`} textAlign={"center"} verticalAlign={"bottom"}>
                                    <CssActionsIcons className={`m-icons`}>
                                        {this.renderBulkActions()}
                                    </CssActionsIcons>
                            </Div>
                        </DataCell>
                        :
                        lastKid}
                </CssHeader>
            </thead>
        )
    }
}

export const CssActionsIcons = css("div")({
    marginTop: "-3px",
    whiteSpace: "nowrap",
    " .m-image g path": {
        fill: "white !important",

    },
})

const CssHeader = css("tr")(
(props: any) => {
    return {
        background: props.selected ? Theme.blue : "#333",
    }})


export default DataHeader
