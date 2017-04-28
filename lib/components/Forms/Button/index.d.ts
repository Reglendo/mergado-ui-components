/// <reference types="react" />
import * as React from "react";
import InputProps from "../default_props";
export interface Props extends InputProps {
    type?: "button" | "link" | "submit" | "void";
    link?: string;
    icon?: JSX.Element;
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor";
    size?: "small" | "tiny" | "";
    state?: "disabled" | "";
    onClick?: (event: any) => boolean;
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
declare class Button extends React.Component<Props, State> {
    readonly name: string;
    readonly form: string;
    static defaultProps: Props;
    renderInvalid(): JSX.Element;
    renderButton(): JSX.Element;
    renderLink(): JSX.Element;
    renderSubmit(): JSX.Element;
    renderVoid(): JSX.Element;
    render(): JSX.Element;
}
export default Button;
