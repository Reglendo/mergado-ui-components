import * as React from "react"
import {prefix} from "config"

export interface Props {
    cells?: Array<JSX.Element>
    style?: any
    addClass?: string

}

export interface State {
}

class DataHeader extends React.Component<Props, State> {

    readonly name = prefix + "datagrid__row";

    public static defaultProps: Props = {
        cells: [],
        addClass: '',
        style: {},
    }

    render() {
        const { cells, style, addClass } = this.props;
        return (
            <thead>
                <tr className={`${this.name} ${this.name}--header ${addClass}`} style={style}>{cells}</tr>
            </thead>
        )
    }
}

export default DataHeader