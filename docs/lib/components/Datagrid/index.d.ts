/// <reference types="react" />
import * as React from "react";
export interface Props {
    style?: any;
    addClass?: string;
    rows: Array<JSX.Element>;
    header: Array<JSX.Element>;
    sortable?: boolean;
    sortableProps?: any;
}
export interface State {
}
declare class DataTable extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default DataTable;
