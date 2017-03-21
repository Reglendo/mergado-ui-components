/// <reference types="react" />
import * as React from 'react';
export interface Props {
    prop1?: string;
    prop2: number;
    prop3: () => void;
    prop4: 'option1' | 'option2' | 'option3';
}
export interface State {
}
declare class LittleStatus extends React.Component<Props, State> {
    readonly name: string;
    render(): JSX.Element;
}
export default LittleStatus;
