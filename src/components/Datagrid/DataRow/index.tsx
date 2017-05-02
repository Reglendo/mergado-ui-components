import * as React from "react"
import {prefix} from "../../../config"

export interface Props {
    cells?: JSX.Element | Array<JSX.Element>
    style?: any
    addClass?: string
    inactive?: boolean

}

export interface State {
}

class DataRow extends React.Component<Props, State> {

    readonly name = prefix + "datagrid__row";

    public static defaultProps: Props = {
        cells: [],
        addClass: '',
        style: {},
        inactive: false
    }

    render() {
        const { cells, style, addClass, inactive } = this.props;
        return (
            <tr className={`${this.name} ${inactive && this.name+`--inactive`} ${addClass}`} style={style}>{cells}</tr>
        )
    }
}

export default DataRow