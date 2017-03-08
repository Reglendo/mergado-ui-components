/// <reference types="react" />
import * as React from 'react';
import HeaderLink from "./header_link";
export interface Props {
    links: Array<HeaderLink> | Array<JSX.Element>;
}
export interface State {
}
declare class TopNav extends React.Component<Props, State> {
    renderLinks(): JSX.JSXElement;
    render(): JSX.JSXElement;
}
export default TopNav;
