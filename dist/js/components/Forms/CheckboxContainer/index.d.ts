/// <reference types="react" />
import * as React from "react";
import InputProps from "../default_props";
import "../../../stylesheets/components/forms/_checkbox_container.sass";
export interface Query {
    id: number;
    name: string;
    productCount: number;
}
export interface Props extends InputProps {
    availableQueries: Array<Query>;
    multipleChoice: boolean;
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
    readonly name: string;
    static defaultProps: Props;
    constructor(props: Props);
    renderBoxes(): JSX.Element[];
    render(): JSX.Element;
}
export default CheckboxContainer;
