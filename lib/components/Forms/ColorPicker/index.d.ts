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
    displayColorPicker: boolean;
    color: any;
}
declare class ColorPicker extends React.Component<Props, State> {
    readonly name: string;
    readonly form: string;
    static defaultProps: Props;
    constructor(props: any);
    renderInvalid(): JSX.Element;
    handleClick(evt: any): void;
    handleClose(evt: any): void;
    handleChange(evt: any): boolean;
    handleChanged(evt: any): void;
    renderPicker(): JSX.Element;
    renderItem(): JSX.Element;
    render(): JSX.Element;
}
export default ColorPicker;
