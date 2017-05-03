import * as React from "react"
import {prefix} from "../../../config"

export interface Props {
    style?: any
    addClass?: string
    type?: 'cell' | 'header'
    onClick: (event: any) => any
}
export interface State {
}

class DataCell extends React.Component<Props, State> {

    readonly name = prefix + "datagrid__cell";

    public static defaultProps: Props = {
        addClass: '',
        style: {},
        type: 'cell',
        onClick: () => {}
    }

    render() {
        const { style, type, addClass, onClick } = this.props;
        if(type === 'cell') {
            return (<td className={`${this.name} ${addClass}`} style={style} onClick={onClick}>{this.props.children}</td>)
        } else {
            return (<th className={`${this.name} ${this.name}--header ${addClass}`} style={style} onClick={onClick}>{this.props.children}</th>)
        }
    }
}

export default DataCell