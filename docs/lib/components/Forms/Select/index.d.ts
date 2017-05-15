/// <reference types="react" />
import * as React from "react";
import InputProps from "components/Forms/default_props";
export interface Props extends InputProps {
    options?: any;
    multiple?: boolean;
    disabled?: boolean;
    required?: boolean;
    size?: number;
    style?: any;
    addClass?: string;
    id?: string;
    labels?: {
        main?: string | JSX.Element;
        invalid?: string | JSX.Element;
        title?: string;
    };
}
export interface State {
}
declare class Select extends React.Component<Props, State> {
    readonly name: string;
    readonly form: string;
    static defaultProps: Props;
    renderInvalid(): JSX.Element;
    renderOptions(): any;
    render(): JSX.Element;
}
export default Select;
