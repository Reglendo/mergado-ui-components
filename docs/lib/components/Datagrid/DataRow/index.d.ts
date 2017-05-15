/// <reference types="react" />
import * as React from "react";
export interface Props {
    cells?: Array<JSX.Element>;
    style?: any;
    addClass?: string;
    inactive?: boolean;
    /** optional attribute "data-id" for sortablejs */
    dataId?: number | string;
}
export interface State {
}
declare class DataRow extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default DataRow;
