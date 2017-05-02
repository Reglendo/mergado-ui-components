/// <reference types="react" />
import * as React from "react";
export interface Props {
}
export interface State {
}
declare class Bubble extends React.Component<Props, State> {
    readonly name: string;
    popup: any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    _renderLayer(): void;
    render(): JSX.Element;
}
export default Bubble;
