/// <reference types="react" />
import * as React from "react";
import DataRow from './DataRow';
export interface Props {
    style?: any;
    addClass?: string;
    rows: Array<DataRow> | Array<JSX.Element>;
    header: Array<DataRow> | Array<JSX.Element>;
    sortable?: boolean;
    sortableProps?: any;
}
export interface State {
}
declare class Datagrid extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default Datagrid;
