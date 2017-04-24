/// <reference types="react" />
import * as React from "react";
import InputProps from "../default_props";
export interface Query {
    id: number;
    name: string;
    productCount: number;
}
export interface Props extends InputProps {
    availableQueries: Array<Query>;
    labels: {
        main: string;
        placeholder: string;
        allProducts: string;
        invalid: string;
    };
    singleChoice?: boolean;
    withoutFilter?: boolean;
    /** Height of box with queries (in px) */
    height?: string | number;
    style?: any;
}
export interface State {
    filter: string;
}
declare class CheckboxContainer extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    constructor(props: Props);
    renderBoxes(): JSX.Element[];
    render(): JSX.Element;
}
export default CheckboxContainer;
