/// <reference types="react" />
import * as React from "react";
export interface Props {
    id?: string;
    text?: string;
    type?: "warning" | "success" | "error" | "inactive" | "info";
    icon?: JSX.Element;
    isPaused?: () => boolean;
    onClose?: (number) => boolean;
    timeout?: number;
    closeable?: boolean;
    style?: any;
}
export interface State {
    visible: boolean;
    paused: boolean;
    secondsLeft: number;
}
declare class Toast extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    constructor(props: Props);
    componentDidMount(): void;
    hideToast(): void;
    removeToast(evt: any): void;
    render(): JSX.Element;
}
export default Toast;
