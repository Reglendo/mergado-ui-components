import * as React from "react";
import glamorous from "glamorous";
import { prefix } from "../../../config";
import TextInput from "../../../components/Forms/TextInput";
import uniqueId from "../../../helpers/unique_id";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "autocomplete";
        this.performAutoCompleteOnUpdate = true;
        this.performAutoCompleteOnKeyUp = true;
        this.ignoreBlur = false;
        this._inputRef = null;
        this.state = {
            value: props.value ? props.value : "",
            isOpen: false,
            highlightedIndex: null,
            menuLeft: 0,
            menuTop: 0,
            menuWidth: 0,
        };
    }
    componentWillReceiveProps(nextProps) {
        const props = this.props;
        const state = this.state;
        if (props.items !== nextProps.items ||
            state.highlightedIndex >= nextProps.items.length) {
            this.setState({ highlightedIndex: null });
        }
    }
    isOpen() {
        return "open" in this.props ? this.props.open : this.state.isOpen;
    }
    componentDidMount() {
        if (this.isOpen()) {
            this.setMenuPositions();
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if ((this.state.isOpen && !prevState.isOpen) || ("open" in this.props && this.props.open && !prevProps.open)) {
            this.setMenuPositions();
        }
        if (this.isOpen() && this.performAutoCompleteOnUpdate) {
            this.performAutoCompleteOnUpdate = false;
            this.maybeAutoCompleteText();
        }
        if (prevState.isOpen !== this.state.isOpen) {
            this
                .props
                .onMenuVisibilityChange(this.state.isOpen);
        }
    }
    setMenuPositions() {
        const node = this._inputRef;
        const rect = node.base.getBoundingClientRect();
        const glob = global;
        const computedStyle = glob
            .getComputedStyle(node.base);
        const marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
        const marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
        const marginRight = parseInt(computedStyle.marginRight, 10) || 0;
        this.setState({
            menuTop: rect.bottom + marginBottom,
            menuLeft: rect.left + marginLeft,
            menuWidth: rect.width + marginLeft + marginRight - 10,
        });
    }
    maybeAutoCompleteText() {
        if (!this.props.autoHighlight || this.state.value === "") {
            return;
        }
        const { highlightedIndex } = this.state;
        const items = this.getFilteredItems();
        if (items.length === 0) {
            return;
        }
        const matchedItem = highlightedIndex !== null
            ? items[highlightedIndex]
            : items[0];
        const itemValue = this
            .props
            .getItemValue(matchedItem);
        const itemValueDoesMatch = (itemValue.toLowerCase().indexOf(this.state.value.toLowerCase()) === 0);
        if (itemValueDoesMatch && highlightedIndex === null) {
            this.setState({ highlightedIndex: 0 });
        }
    }
    getFilteredItems() {
        let items = this.props.items;
        if (this.props.shouldItemRender) {
            items = items.filter((item) => (this.props.shouldItemRender(item, this.state.value)));
        }
        if (this.props.sortItems) {
            items.sort((a, b) => (this.props.sortItems(a, b, this.state.value)));
        }
        return items;
    }
    onSelect(value, item) {
        this.setState({ value });
        this.setIgnoreBlur(false);
        this.props.input.onChange(value);
    }
    handleChange(event) {
        this.performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: null, value: event.target.value });
        this.props.input.onChange(event);
    }
    handleKeyUp() {
        if (this.performAutoCompleteOnKeyUp) {
            this.performAutoCompleteOnKeyUp = false;
            this.maybeAutoCompleteText();
        }
    }
    handleKeyDown(event) {
        if (event.key === "ArrowDown") {
            this.handleArrowDown(event);
        }
        else if (event.key === "ArrowUp") {
            this.handleArrowUp(event);
        }
        else if (event.key === "Enter") {
            this.handleEnter(event);
        }
        else if (event.key === "Escape") {
            this.handleEscape();
        }
        else if (!this.isOpen()) {
            this.setState({ isOpen: true });
        }
    }
    handleArrowDown(event) {
        event.preventDefault();
        const itemsLength = this
            .getFilteredItems()
            .length;
        if (!itemsLength) {
            return;
        }
        const { highlightedIndex } = this.state;
        const index = (highlightedIndex === null || highlightedIndex === itemsLength - 1)
            ? 0
            : highlightedIndex + 1;
        this.performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: index, isOpen: true });
    }
    handleArrowUp(event) {
        event.preventDefault();
        const itemsLength = this
            .getFilteredItems()
            .length;
        if (!itemsLength) {
            return;
        }
        const { highlightedIndex } = this.state;
        const index = (highlightedIndex === 0 || highlightedIndex === null)
            ? itemsLength - 1
            : highlightedIndex - 1;
        this.performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: index, isOpen: true });
    }
    handleEnter(event) {
        if (!this.isOpen()) {
            return;
        }
        else if (this.state.highlightedIndex === null) {
            this.setState({
                isOpen: false,
            }, () => {
            });
        }
        else {
            event.preventDefault();
            const item = this.getFilteredItems()[this.state.highlightedIndex];
            const value = this
                .props
                .getItemValue(item);
            this.setState({
                isOpen: false,
                highlightedIndex: null,
            }, () => {
                this.onSelect(value, item);
            });
        }
    }
    handleEscape() {
        this.setState({ highlightedIndex: null, isOpen: false });
    }
    handleInputBlur() {
        if (this.ignoreBlur) {
            return;
        }
        this.setState({ isOpen: false, highlightedIndex: null });
    }
    handleInputFocus() {
        if (this.ignoreBlur) {
            this.setIgnoreBlur(false);
            return;
        }
        this.setState({ isOpen: true });
    }
    isInputFocused() {
        const el = this._inputRef.base;
        return el.ownerDocument && (el === el.ownerDocument.activeElement);
    }
    handleInputClick() {
        if (this.isInputFocused() && !this.isOpen()) {
            this.setState({ isOpen: true });
        }
    }
    composeEventHandlers(internal, external) {
        return external
            ? e => { internal(e); external(e); }
            : internal;
    }
    highlightItemFromMouse(index) {
        this.setState({ highlightedIndex: index });
    }
    selectItemFromMouse(item) {
        const value = this
            .props
            .getItemValue(item);
        this.setState({
            isOpen: false,
            highlightedIndex: null,
        }, () => {
            this.onSelect(value, item);
        });
    }
    setIgnoreBlur(ignore) {
        this.ignoreBlur = ignore;
    }
    renderMenu() {
        const items = this
            .getFilteredItems()
            .map((item, index) => {
            const element = this
                .props
                .renderItem(item, this.state.highlightedIndex === index, { cursor: "default" });
            return React.cloneElement(element, {
                onMouseDown: () => this.selectItemFromMouse(item),
                onMouseEnter: () => this.highlightItemFromMouse(index),
                onClick: () => { this.selectItemFromMouse(item); },
                ref: e => this.refs[`item-${index}`] = e,
            });
        });
        const style = {
            left: this.state.menuLeft,
            top: this.state.menuTop,
            minWidth: this.state.menuWidth,
        };
        const menu = this
            .props
            .renderMenu(items, this.state.value, style);
        return React.cloneElement(menu, {
            ref: e => this.refs.menu = e,
        });
    }
    render() {
        const open = this.isOpen();
        const { labels, meta, input } = this.props;
        const inputProps = Object.assign({}, this.props.input, {
            onFocus: this.composeEventHandlers(this.handleInputFocus.bind(this), input.onFocus),
            onBlur: this.handleInputBlur.bind(this),
            onChange: this.handleChange.bind(this),
            onKeyDown: this.composeEventHandlers(this.handleKeyDown.bind(this), input.onKeyDown),
            onKeyUp: this.composeEventHandlers(this.handleKeyUp.bind(this), input.onKeyUp),
            onClick: this.composeEventHandlers(this.handleInputClick.bind(this), input.onClick),
        });
        return (React.createElement(Field, { label: "" },
            React.createElement(TextInput, { innerRef: r => (this._inputRef = r), type: "search", labels: labels, meta: meta, input: inputProps }),
            open && this.renderMenu()));
    }
}
Autocomplete.defaultProps = Object.assign({}, defaultFieldProps, { items: [], renderMenu: (items, value, style) => {
        return React.createElement(Menu, { className: `${prefix + "autocomplete"}__menu`, style: Object.assign({}, style), children: items });
    }, onMenuVisibilityChange: () => { }, renderItem: (item, highlighted, style) => {
        let className = `${prefix + "autocomplete"}__item `;
        className += highlighted ? className + `${prefix + "autocomplete"}__item--selected` : "";
        return React.createElement(MenuItem, { key: `${item.value}-${uniqueId()}`, selected: highlighted, className: `${className}` }, item.text);
    }, getItemValue: (item) => {
        return item.text;
    }, shouldItemRender: (item, value) => {
        return (item.value.toLowerCase().indexOf(value.toLowerCase()) > -1);
    } });
const Menu = glamorous.div({
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.95)",
    padding: 0,
    fontSize: "90%",
    position: "absolute",
    top: "100% !important",
    left: "2px !important",
    margin: "1px 0",
    overflow: "auto",
    maxHeight: "50vh",
    zIndex: 1000,
    marginTop: "5px",
}, props => {
    const theme = props.theme;
    return {
        border: `1px solid ${theme.decoration}`,
        borderRadius: theme.radius,
    };
});
const MenuItem = glamorous.div({
    padding: "9px 10px",
    fontSize: "12px",
    cursor: "pointer",
    transition: "border-color 0.2s",
    borderRadius: 0,
}, props => {
    const p = props;
    const theme = props.theme;
    if (p.selected) {
        return {
            background: theme.selected_background,
        };
    }
    else {
        return {
            background: "transparent",
        };
    }
});
export default Autocomplete;
