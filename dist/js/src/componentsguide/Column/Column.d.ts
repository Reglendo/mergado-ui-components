/// <reference types="react" />
import { Component } from 'react';
export interface IColumnProps {
    prop1?: string;
    prop2: number;
    prop3: () => void;
    prop4: 'option1' | 'option2' | 'option3';
}
declare class Column extends Component<IColumnProps, {}> {
    render(): JSX.Element;
}
export default Column;
