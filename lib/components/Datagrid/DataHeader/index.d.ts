/// <reference types="react" />
import * as React from "react";
export interface Props {
    cells?: JSX.Element | Array<JSX.Element>;
    style?: any;
    addClass?: string;
}
export interface State {
}
declare class DataHeader extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default DataHeader;
