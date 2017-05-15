/// <reference types="react" />
import * as React from "react";
export interface Props {
    type?: string;
    name?: string;
    size?: number;
    text?: string;
    title?: string;
    style?: any;
}
export interface State {
}
declare class Icon extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default Icon;
