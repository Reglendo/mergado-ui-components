import * as React from "react"
import {prefix} from "../../../config"

export interface Props {
    style?: any
    addClass?: string
    type?: 'cell' | 'header'
}
export interface State {
}

class DataCell extends React.Component<Props, State> {

    readonly name = prefix + "datagrid__cell";

    public static defaultProps: Props = {
        addClass: '',
        style: {},
        type: 'cell'
    }

    render() {
        const { style, type, addClass } = this.props;
        if(type === 'cell') {
            return (<td className={`${this.name} ${addClass}`} style={style}>{this.props.children}</td>)
        } else {
            return (<th className={`${this.name} ${this.name}--header ${addClass}`} style={style}>{this.props.children}</th>)
        }
    }
}

export default DataCell