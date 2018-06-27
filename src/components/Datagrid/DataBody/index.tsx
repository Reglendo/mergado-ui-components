import * as React from "react"
import {prefix} from "../../../config"
import * as Sortable from "react-sortablejs"
import { ID, Action } from "../../../helpers/types"

export interface Props {
    style?: any
    addClass?: string
    className?: string
    sortable?: boolean
    sortableProps?: any
    actions?: Action[]
    handleSelectRow?: (id: ID) => {}
    selectedRows?: ID[]
}

export interface State {
}

class DataBody extends React.Component<Props, State> {

    public static defaultProps: Props = {
        sortable: false,
        sortableProps: {},
        addClass: "",
        className: "",
        style: {},
        actions: [],
    }
    private readonly name = prefix + "databody";

    protected renderChildren() {
        const children: any = !Array.isArray(this.props.children) ? [this.props.children] : this.props.children

        return children.map(obj => {
            return React.cloneElement(obj, {
                actions: this.props.actions,
                handleSelectRow: this.props.handleSelectRow,
                selectedRows: this.props.selectedRows,
            })
        })
    }

    public render() {
        const { sortable, sortableProps, style, addClass, className } = this.props;
        if(sortable) {
            return (
                <Sortable className={`${this.name} m-sortable ${className || ""}`} tag="tbody" {...sortableProps}>
                    {this.props.children && this.renderChildren()}
                </Sortable>
            )

        } else {
            return (
                <tbody className={`${this.name} ${className || ""}`}>
                    {this.props.children && this.renderChildren()}
                </tbody>
            )
        }
    }
}

export default DataBody
