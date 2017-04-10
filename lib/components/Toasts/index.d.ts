/// <reference types="react" />
import * as React from "react";
import Toast from "./Toast";
export interface Props {
    toasts?: Array<Toast>;
    paused: boolean;
}
export interface State {
    toasts: Array<Toast>;
}
declare class Toasts extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    constructor(props: Props);
    isPaused(): boolean;
    renderToasts(): JSX.Element[];
    render(): JSX.Element;
}
export default Toasts;
