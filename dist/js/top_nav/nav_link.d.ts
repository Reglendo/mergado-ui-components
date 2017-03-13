/// <reference types="react" />
import * as React from "react";
export interface Props {
    active: boolean;
    link: JSX.Element;
}
export interface State {
}
declare class NavLink extends React.Component<Props, State> {
    static defaultProps: Props;
    render(): JSX.Element;
}
export default NavLink;
