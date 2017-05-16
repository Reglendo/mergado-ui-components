import * as React from "react"
import {prefix} from "config"
import * as Sortable from 'react-sortablejs'

export interface Props {
    style?: any
    addClass?: string
    sortable?: boolean
    sortableProps?: any
}

export interface State {
}

class DataBody extends React.Component<Props, State> {

    readonly name = prefix + "datagrid__body";

    public static defaultProps: Props = {
        sortable: false,
        sortableProps: {},
        addClass: '',
        style: {},
    }

    render() {
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