/// <reference types="react" />
import * as React from "react";
export interface Props {
    active?: boolean;
    link?: JSX.Element | string;
    style?: any;
    onClick?: (event: any) => any;
}
export interface State {
}
/**
 * disable-styleguide
 */
declare class WizardStep extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default WizardStep;
