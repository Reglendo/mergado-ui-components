/// <reference types="react" />
import * as React from "react";
import InputProps from "components/Forms/default_props";
export interface Props extends InputProps {
    max: number;
    min: number;
    step: number;
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
    value: any;
}
declare class Range extends React.Component<Props, State> {
    readonly name: string;
    readonly form: string;
    static defaultProps: Props;
    constructor(props: any);
    handleChange(evt: any): void;
    renderInvalid(): JSX.Element;
    render(): JSX.Element;
}
export default Range;
