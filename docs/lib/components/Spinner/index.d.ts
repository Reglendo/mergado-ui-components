/// <reference types="react" />
import * as React from "react";
export interface Props {
    type?: string;
    /** Maximum dimension (width or height) */
    size?: number;
    loaded?: boolean;
    color?: "black" | "white" | "green" | "blue";
    speed?: number;
    style?: any;
}
export interface State {
    loaded: boolean;
}
declare class Spinner extends React.Component<Props, State> {
    readonly name: string;
    constructor(props: Props);
    static defaultProps: Props;
    updateState(props: any): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
export default Spinner;
