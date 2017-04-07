/// <reference types="react" />
import * as React from "react";
import "../../stylesheets/components/_little_status.sass";
export interface Props {
    /** Status title */
    title: string;
    /** Status type */
    type: "warning" | "success" | "error" | "inactive" | "";
    /** Status text */
    text?: string;
}
export interface State {
}
declare class LittleStatus extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default LittleStatus;
