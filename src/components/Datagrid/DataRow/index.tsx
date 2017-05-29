import * as React from "react"
import {prefix} from "config"

export interface Props {
    style?: any
    addClass?: string
    inactive?: boolean
    /** optional attribute "data-id" for sortablejs */
    dataId?: number | string
}

export interface State {
}

class DataRow extends React.Component<Props, State> {

    public static defaultProps: Props = {
        addClass: "",
        style: {},
        inactive: false,
        dataId: "",
    }
    private readonly name = prefix + "datagrid__row";

    public render() {
        const { style, addClass, inactive, dataId } = this.props;
        return (
            <tr className={`${this.name} ${inactive && this.name+`--inactive`} ${addClass}`}
                data-id={dataId} style={style}>
                    {this.props.children}
            </tr>
        )
    }
}

export default DataRow
