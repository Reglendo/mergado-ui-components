/// <reference types="react" />
import * as React from "react";
export interface Props {
    style?: any;
    addClass?: string;
    type?: 'cell' | 'header';
    onClick: (event: any) => any;
}
export interface State {
}
declare class DataCell extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default DataCell;
