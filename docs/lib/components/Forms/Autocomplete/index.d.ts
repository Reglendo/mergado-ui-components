/// <reference types="react" />
import * as React from "react";
import InputProps from "../default_props";
export interface Item {
    value: string;
    text: string;
}
export interface Props extends InputProps {
    items: Array<Item>;
    shouldItemRender?: (item: any, value: any) => any;
    sortItems?: (a: any, b: any, value: any) => any;
    getItemValue?: (any) => any;
    renderItem?: (item: any, highlighted: boolean, style: any) => any;
    renderMenu?: (items: any, value: any, style: any) => any;
    autoHighlight?: boolean;
    onMenuVisibilityChange?: (any) => any;
    open?: boolean;
    addClass?: string;
    style?: any;
    labels?: {
        main: string;
        placeholder: string;
        invalid: string;
        title: string;
    };
}
export interface State {
    value: string;
    isOpen: boolean;
    highlightedIndex: number;
    menuLeft: number;
    menuTop: number;
    menuWidth: number;
}
declare class Autocomplete extends React.Component<Props, State> {
    readonly name: string;
    protected _performAutoCompleteOnUpdate: boolean;
    protected _performAutoCompleteOnKeyUp: boolean;
    protected _ignoreBlur: boolean;
    static defaultProps: Props;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    isOpen(): boolean;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    setMenuPositions(): void;
    maybeAutoCompleteText(): void;
    getFilteredItems(): Item[];
    onSelect(value: any, item: any): void;
    handleChange(event: any): void;
    handleKeyUp(): void;
    handleKeyDown(event: any): void;
    handleArrowDown(event: any): void;
    handleArrowUp(event: any): void;
    handleEnter(event: any): void;
    handleEscape(): void;
    handleInputBlur(): void;
    handleInputFocus(): void;
    isInputFocused(): boolean;
    handleInputClick(): void;
    composeEventHandlers(internal: any, external: any): any;
    highlightItemFromMouse(index: any): void;
    selectItemFromMouse(item: any): void;
    setIgnoreBlur(ignore: any): void;
    renderMenu(): React.DOMElement<{
        ref: (e: Element) => Element;
    }, Element>;
    render(): JSX.Element;
}
export default Autocomplete;
