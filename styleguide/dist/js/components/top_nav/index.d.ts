/// <reference types="react" />
import * as React from 'react';
import NavLink from "./nav_link";
export interface Props {
    links: Array<NavLink> | Array<JSX.Element>;
}
export interface State {
}
declare class TopNav extends React.Component<Props, State> {
    renderLinks(): JSX.Element;
    render(): JSX.Element;
}
export default TopNav;
