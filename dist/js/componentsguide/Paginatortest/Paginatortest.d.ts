/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    /** Číslo aktivní stránky */
    currentPage: number;
    /** Callback po stisknutí stránky */
    onPageChange: (page: number) => any;
    /** Číslo první stránky */
    firstPage?: number;
    /** Číslo poslední stránky*/
    lastPage?: number;
    /** Zobrazovat tlačítka Další a Předchozí */
    showPrevAndNext?: boolean;
    /** Zobrazovat tlačítka První a Poslední */
    showFirstAndLast?: boolean;
    /** Popisek tlačítka Poslední  */
    labelLast?: string;
    /** Popisek tlačítka První */
    labelFirst?: string;
    /** Popisek tlačítka Další */
    labelNext?: string;
    /** Popisek tlačítka Předchozí */
    labelPrevious?: string;
    /** Maximální počet zobrazených stránek */
    maxLinks?: number;
}
export interface State {
    id: string;
}
declare class Paginator extends Component<Props, State> {
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
