/// <reference types="react" />
import * as React from 'react';
export interface Props {
    currentPage: number;
    onPageChange: (page: number) => any;
    firstPage?: number;
    lastPage?: number;
    showPrevAndNext?: boolean;
    showFirstAndLast?: boolean;
    advanced?: boolean;
    labelLast?: string;
    labelFirst?: string;
    labelNext?: string;
    labelPrevious?: string;
    maxLinks?: number;
}
export interface State {
    id: string;
}
declare class Paginator extends React.Component<Props, State> {
    static defaultProps: Props;
    constructor(props: Props);
    renderButton(label: any, page: number, active: boolean): JSX.Element;
    renderMainButtons(): Array<JSX.Element>;
    renderPreviousButton(): JSX.Element;
    renderNextButton(): JSX.Element;
    renderFirstButton(): JSX.Element;
    renderLastButton(): JSX.Element;
    pageClicked(evt: any, pageNumber: number): void;
    render(): JSX.Element;
}
export default Paginator;
