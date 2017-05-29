import * as React from "react"
import {prefix} from "config"
import * as Sortable from "react-sortablejs"

export interface Props {
    style?: any
    addClass?: string
    sortable?: boolean
    sortableProps?: any
}

export interface State {
}

class DataBody extends React.Component<Props, State> {

    public static defaultProps: Props = {
        sortable: false,
        sortableProps: {},
        addClass: "",
        style: {},
    }
    private readonly name = prefix + "datagrid__body";

    public render() {
        const { sortable, sortableProps, style, addClass } = this.props;
        if(sortable) {
            return (
                <Sortable tag="tbody" {...sortableProps}>
                    {this.props.children}
                </Sortable>
            )

        } else {
            return (
                <tbody>
                    {this.props.children}
                </tbody>
            )
        }
    }
}

export default DataBody
