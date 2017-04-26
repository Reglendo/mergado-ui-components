/// <reference types="react" />
import * as React from "react";
import InputProps from "../default_props";
export interface Props extends InputProps {
    disabled?: boolean;
    required?: boolean;
    style?: any;
    addClass?: string;
    labels?: {
        main?: string | JSX.Element;
        invalid?: string | JSX.Element;
        title?: string;
    };
}
export interface State {
}
declare class Radio extends React.Component<Props, State> {
    readonly name: string;
    readonly form: string;
    static defaultProps: Props;
    renderInvalid(): JSX.Element;
    render(): JSX.Element;
}
export default Radio;
