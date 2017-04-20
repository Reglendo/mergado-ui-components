/// <reference types="react" />
import * as React from 'react';
export interface Props {
    /** Active page number */
    currentPage: number;
    /** Callback fired when page change */
    onPageChange: (page: number) => any;
    /** First page number */
    firstPage?: number;
    /** Last page number */
    lastPage?: number;
    /** Whether to show 'Next' and 'Previous' buttons */
    showPrevAndNext?: boolean;
    /** Whether to show 'First' and 'Last' buttons */
    showFirstAndLast?: boolean;
    /** Text label of button 'Last' */
    labelLast?: string;
    /** Text label of button 'First' */
    labelFirst?: string;
    /** Text label of button 'Next' */
    labelNext?: string;
    /** Text label of button 'Previous' */
    labelPrevious?: string;
    /** Maximum number of shown pages at once */
    maxLinks?: number;
    style?: any;
}
export interface State {
    id: string;
    current: number;
}
declare class Paginator extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    constructor(props: Props);
    renderButton(label: any, page: number, clickable: boolean, active?: boolean): JSX.Element;
    renderMainButtons(): Array<JSX.Element>;
    renderPreviousButton(): JSX.Element;
    renderNextButton(): JSX.Element;
    renderFirstButton(): JSX.Element;
    renderLastButton(): JSX.Element;
    pageClicked(evt: any, pageNumber: number): void;
    render(): JSX.Element;
}
export default Paginator;
