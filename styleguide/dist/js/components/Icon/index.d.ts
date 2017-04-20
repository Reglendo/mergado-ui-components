/// <reference types="react" />
import * as React from "react";
export interface Props {
    /** Icon type */
    type: string;
    /** Size */
    size?: number;
    /** Icon text */
    text?: string;
    /** Icon title */
    title?: string;
}
export interface State {
}
declare class Icon extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default Icon;
