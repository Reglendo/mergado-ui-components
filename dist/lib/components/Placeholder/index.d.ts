/// <reference types="react" />
import * as React from "react";
export interface Props {
    width: number;
    height: number;
    style?: any;
    addClass?: string;
}
export interface State {
}
declare class Placeholder extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default Placeholder;
