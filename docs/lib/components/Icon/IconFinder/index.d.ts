/// <reference types="react" />
import * as React from "react";
export interface Props {
}
export interface State {
    value: string;
}
<<<<<<< HEAD
/**
 * disable-styleguide
 */
=======
>>>>>>> master
declare class IconFinder extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    constructor(props: any);
    handleChange(evt: any): void;
    renderIcons(): JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export default IconFinder;
