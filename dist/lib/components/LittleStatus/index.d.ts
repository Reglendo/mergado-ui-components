/// <reference types="react" />
import * as React from "react";
export interface Props {
    title?: string;
    type: "warning" | "success" | "error" | "inactive";
    text?: string;
    style?: any;
}
export interface State {
}
declare class LittleStatus extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default LittleStatus;
