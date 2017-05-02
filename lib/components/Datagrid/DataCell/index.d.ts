/// <reference types="react" />
import * as React from "react";
export interface Props {
    content?: JSX.Element;
    style?: any;
    addClass?: string;
    type?: 'cell' | 'header';
}
export interface State {
}
declare class DataCell extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default DataCell;
