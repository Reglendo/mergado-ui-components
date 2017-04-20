/// <reference types="react" />
import * as React from 'react';
import NavLink from "./NavLink";
export interface Props {
    /** Links */
    links: Array<NavLink> | Array<JSX.Element>;
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
