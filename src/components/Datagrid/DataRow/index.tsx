import * as React from "react"
import {prefix} from "config"

export interface Props {
    cells?: Array<JSX.Element>
    style?: any
    addClass?: string
    inactive?: boolean
    /** optional attribute "data-id" for sortablejs */
    dataId?: number | string
}

export interface State {
}

class DataRow extends React.Component<Props, State> {

    readonly name = prefix + "datagrid__row";

    public static defaultProps: Props = {
        cells: [],
        addClass: '',
        style: {},
        inactive: false,
        dataId: ""
    }

    render() {
        const { cells, style, addClass, inactive, dataId } = this.props;
        return (
            <tr className={`${this.name} ${inactive && this.name+`--inactive`} ${addClass}`} data-id={dataId} style={style}>{cells}</tr>
        )
    }
}

export default DataRow