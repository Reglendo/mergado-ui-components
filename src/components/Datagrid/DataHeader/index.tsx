import * as React from "react"
import {prefix} from "config"

export interface Props {
    style?: any
    addClass?: string

}

export interface State {
}

class DataHeader extends React.Component<Props, State> {

    public static defaultProps: Props = {
        addClass: "",
        style: {},
    }
    private readonly name = prefix + "datagrid__row";

    public render() {
        const { style, addClass } = this.props;
        return (
            <thead>
                <tr className={`${this.name} ${this.name}--header ${addClass}`} style={style}>
                    {this.props.children}
                </tr>
            </thead>
        )
    }
}

export default DataHeader
