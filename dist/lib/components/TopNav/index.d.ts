/// <reference types="react" />
import * as React from "react";
export interface Props {
    links: Array<JSX.Element>;
    style?: any;
}
export interface State {
}
declare class TopNav extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    renderLinks(): JSX.Element;
    render(): JSX.Element;
}
export default TopNav;
