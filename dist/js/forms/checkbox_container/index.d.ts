/// <reference types="react" />
import * as React from "react";
import InputProps from "../default_props";
export interface Query {
    id: number;
    name: string;
    productCount: number;
}
export interface Props extends InputProps {
    availibleQueries: Array<Query>;
    labels: {
        main: string;
        placeholder: string;
        allProducts: string;
        invalid: string;
    };
}
export interface State {
    filter: string;
}
declare class CheckboxContainer extends React.Component<Props, State> {
    static defaultProps: Props;
    constructor(props: Props);
    renderBoxes(): JSX.JSXElement[];
    render(): JSX.JSXElement;
}
export default CheckboxContainer;
