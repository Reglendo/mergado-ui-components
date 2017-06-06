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
        console.log('check')
        this.setState({
            checkedAll: !this.state.checkedAll
        })
    }

    protected renderChildren() {
        const children: any = this.props.children
        return children.map(obj => {
            if(obj.type.name === "DataHeader") {
                return <DataHeader {...obj.props} actions={this.props.bulkActions}
                            checkAll={this.toggleCheckedAll.bind(this)}
                            checkedAll={this.state.checkedAll}
                            labels={this.props.labels} />
            }
            if(obj.type.name === "DataBody") {
                return <DataBody {...obj.props}
                        inputRef={el => this.inputElement = el}
                        actions={this.props.bulkActions}
                        labels={this.props.labels}
                        checkedAll={this.state.checkedAll}
                 />
            }
        })
    }

    protected renderBulkActionbar() {
        const { labels } = this.props
        console.log(this)
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
