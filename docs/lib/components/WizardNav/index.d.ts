/// <reference types="react" />
import * as React from 'react';
import WizardStep from "./WizardStep";
export interface Props {
    /** Links */
    links: Array<WizardStep> | Array<JSX.Element>;
    style?: any;
}
export interface State {
}
declare class WizardNav extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    renderLinks(): JSX.Element;
    render(): JSX.Element;
}
export default WizardNav;
