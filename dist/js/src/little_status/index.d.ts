/// <reference types="react" />
import * as React from "react";
export interface Props {
    title: string;
    type: "warning" | "ok" | "failed" | "inactive" | "";
}
export interface State {
}
declare class LittleStatus extends React.Component<Props, State> {
    static defaultProps: Props;
    render(): JSX.Element;
}
export default LittleStatus;
