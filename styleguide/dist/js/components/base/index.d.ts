/// <reference types="react" />
import * as React from 'react';
export interface Props {
    /** currentPage currentpage */
    currentPage: number;
    /** onPageChange currentpage */
    onPageChange: (page: number) => any;
    /** firstPage currentpage */
    firstPage?: number;
    /** lastPage currentpage */
    lastPage?: number;
    /** showPrevAndNext currentpage */
    showPrevAndNext?: boolean;
    /** showFirstAndLast currentpage */
    showFirstAndLast?: boolean;
    /** advanced currentpage */
    advanced?: boolean;
    /** labelLast currentpage */
    labelLast?: string;
    /** labelFirst currentpage */
    labelFirst?: string;
    /** labelNext currentpage */
    labelNext?: string;
    /** labelPrevious currentpage */
    labelPrevious?: string;
    /** maxLinks currentpage */
    maxLinks?: number;
}
export interface State {
    id: string;
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
