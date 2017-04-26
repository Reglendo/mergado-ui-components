/// <reference types="react" />
import * as React from "react";
import InputProps from "../default_props";
export interface Props extends InputProps {
    labels?: {
        main: string | JSX.Element;
        placeholder: string;
        invalid: string | JSX.Element;
        title: string;
    };
    style?: any;
    addClass?: string;
    id?: string;
}
export interface State {
}
declare class TextInput extends React.Component<Props, State> {
    readonly name: string;
    readonly form: string;
    static defaultProps: Props;
    renderInvalid(): JSX.Element;
    render(): JSX.Element;
}
export default TextInput;
