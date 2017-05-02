import * as React from "react"
import {prefix} from "../../../config"

export interface Props {
    content?: JSX.Element
    style?: any
    addClass?: string
    type?: 'cell' | 'header'
}
export interface State {
}

class DataCell extends React.Component<Props, State> {

    readonly name = prefix + "datagrid__cell";

    public static defaultProps: Props = {
        content: null,
        addClass: '',
        style: {},
        type: 'cell'
    }

    render() {
        const { content, style, type, addClass } = this.props;
        if(type === 'cell') {
            return (<td className={`${this.name} ${addClass}`} style={style}>{content}</td>)
        } else {
            return (<th className={`${this.name} ${this.name}--header ${addClass}`} style={style}>{content}</th>)
        }
    }
}

export default DataCell