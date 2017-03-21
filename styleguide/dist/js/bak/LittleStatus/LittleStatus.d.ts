/// <reference types="react" />
import { Component } from 'react';
/**
 * LittleStatus properties.
 */
export interface Props {
    /** prop1 description */
    prop1?: string;
    /** prop2 description */
    prop2: number;
    /**
     * prop3 description
     */
    prop3: () => void;
    /** prop4 description */
    prop4: 'option1' | 'option2' | 'option3';
}
export interface States {
}
/**
 * Hello world column.
 */
declare class LittleStatus extends Component<Props, States> {
    readonly name: string;
    render(): JSX.Element;
}
export default LittleStatus;
