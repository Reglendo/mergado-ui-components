import * as React from "react"
import {prefix} from "config"
import DataHeader from "../DataHeader"
import DataBody from "../DataBody"
import Button from "components/Forms/Button"
import {InputLabel} from "components/Forms/Input"

export interface Action {
    type: string
    icon: JSX.Element | string
    action: (evt: any) => void
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
        }
    }

    protected toggleCheckedAll() {
        this.setState({
            checkedAll: !this.state.checkedAll,
        })
    }

    protected renderChildren() {
        const children: any = this.props.children
        return children.map(obj => {

            return React.cloneElement(obj, {
                actions: this.props.bulkActions,
                checkedAll: this.state.checkedAll,
                checkAll: this.toggleCheckedAll.bind(this),
                labels: this.props.labels,
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
        const ButtonEl: any = Button
        return this.props.bulkActions.map(obj => {
            return (<ButtonEl onClick={obj.action} icon={obj.icon}
                            color="nocolor" size="tiny" disabled={!!obj.disabled} />)
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
