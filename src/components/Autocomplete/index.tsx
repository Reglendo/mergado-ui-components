import * as React from "react"
import css from "css"
import InputContainer from "../Field/InputContainer"
import {prefix,form} from "../../config"
import TextInput from "../TextInput"
import uniqueId from "../../helpers/unique_id"
import {Field, IField} from "../Field"

export interface Item {
    value: string
    text: string
    disabled?: boolean
}

export interface Props extends IField {
    items: Item[]
    shouldItemRender?: (item: any, value: any) => any
    sortItems?: (a: any, b: any, value: any) => any
    getItemValue?: (item: any) => any
    renderItem?: (item: any, highlighted: boolean, style: any) => any
    renderMenu?: (items: any, value: any, style: any) => any
    autoHighlight?: boolean
    onMenuVisibilityChange?: (isOpen: boolean) => any
    open?: boolean
}
export interface State {
    isOpen: boolean
    highlightedIndex: number
    menuLeft: number
    menuTop: number
    menuWidth: number
}

export class Autocomplete extends  React.PureComponent<Props, State> {
    protected readonly name = prefix + "autocomplete";
    protected performAutoCompleteOnUpdate = true
    protected performAutoCompleteOnKeyUp = true
    protected ignoreBlur = false
    protected _inputRef = null
    protected randid = Math.random()

    public static defaultProps: Props = {
        items: [],
        renderMenu: (items, value, style) => {
            if(items.length > 0) {
                return <Menu className={`${prefix + "autocomplete"}__menu`} style={{ ...style }} children={items}/>
            }
            return false
        },
        onMenuVisibilityChange: () => {},
        renderItem: (item: Item, highlighted, style) => {
            let className = `${prefix + "autocomplete"}__item `
            className += highlighted ? className + `${prefix + "autocomplete"}__item--selected` : ""
            return <MenuItem key={`${item.value}-${uniqueId()}`} selected={highlighted}
                            className={`${className}`}>{item.text}</MenuItem>
        },
        getItemValue: (item: Item) => {
            return item.text
        },
        shouldItemRender: (item, value) => {
            return (item.value.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.text)
        },
    }

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            highlightedIndex: null,
            menuLeft: 0,
            menuTop: 0,
            menuWidth: 0,
        }

    }

    public componentWillReceiveProps(nextProps) {
        const props: any = this.props
        const state: any = this.state
        if (props.items !== nextProps.items ||
            state.highlightedIndex >= nextProps.items.length) {
                this.setState({highlightedIndex: null})
        }
    }

    protected isOpen() {
        return "open" in this.props ? this.props.open : this.state.isOpen
    }

    public componentDidMount() {
        if (this.isOpen()) {
            this.setMenuPositions()
        }
    }

    public componentDidUpdate(prevProps, prevState) {
        if ((this.state.isOpen && !prevState.isOpen) || ("open" in this.props && this.props.open && !prevProps.open)) {
            this.setMenuPositions()
        }

        if (this.isOpen() && this.performAutoCompleteOnUpdate) {
            this.performAutoCompleteOnUpdate = false
            this.maybeAutoCompleteText()
        }

        if (prevState.isOpen !== this.state.isOpen) {
            this
                .props
                .onMenuVisibilityChange(this.state.isOpen)
        }
    }

    protected setMenuPositions() {
        const node: any = document.getElementById("autocomplete-input-"+this.randid)
        const rect = node.getBoundingClientRect()
        const glob: any = global
        const computedStyle = glob
            .getComputedStyle(node)
        const marginBottom = parseInt(computedStyle.marginBottom, 10) || 0
        const marginLeft = parseInt(computedStyle.marginLeft, 10) || 0
        const marginRight = parseInt(computedStyle.marginRight, 10) || 0
        this.setState({
            menuTop: rect.bottom + marginBottom,
            menuLeft: rect.left + marginLeft,
            menuWidth: rect.width + marginLeft + marginRight - 10,
        })
    }

    protected maybeAutoCompleteText() {
        if (!this.props.autoHighlight || this.props.value === "") {
            return
        }
        const {highlightedIndex} = this.state
        const items = this.getFilteredItems()
        if (items.length === 0) {
            return
        }
        const matchedItem = highlightedIndex !== null
            ? items[highlightedIndex]
            : items[0]
        const itemValue = this
            .props
            .getItemValue(matchedItem)
        const itemValueDoesMatch = (itemValue.toLowerCase().indexOf(this.props.value.toLowerCase()) === 0)
        if (itemValueDoesMatch && highlightedIndex === null) {
            this.setState({highlightedIndex: 0})
        }
    }

    protected getFilteredItems() {
        let items = this.props.items
        if (this.props.shouldItemRender) {
            items = items.filter((item) => (this.props.shouldItemRender(item, this.props.value)))
        }

        if (this.props.sortItems) {
            items.sort((a, b) => (this.props.sortItems(a, b, this.props.value)))
        }

        return items
    }

    protected onSelect(value, item) {
        this.setIgnoreBlur(false)
        if(this.props.setValue) {
            this.props.setValue(value)
        }
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }

    protected handleChange(value) {
        this.performAutoCompleteOnKeyUp = true
        this.setState({ highlightedIndex: null })
        if(this.props.setValue) {
            this.props.setValue(value)
        }
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }

    protected handleKeyUp() {
        if (this.performAutoCompleteOnKeyUp) {
            this.performAutoCompleteOnKeyUp = false
            this.maybeAutoCompleteText()
        }
    }

    protected handleKeyDown(event) {

        if (event.key === "ArrowDown") {
            this.handleArrowDown(event);
        } else if (event.key === "ArrowUp") {
            this.handleArrowUp(event);
        } else if (event.key === "Enter") {
            this.handleEnter(event);
        } else if (event.key === "Escape") {
            this.handleEscape();
        } else if (!this.isOpen()) {
            this.setState({isOpen: true})
        }

    }

    protected handleArrowDown(event) {
        event.preventDefault()
        const itemsLength = this
            .getFilteredItems()
            .length
        if (!itemsLength) {
            return
        }
        const {highlightedIndex} = this.state
        const index = (highlightedIndex === null || highlightedIndex === itemsLength - 1)
            ? 0
            : highlightedIndex + 1
        this.performAutoCompleteOnKeyUp = true
        this.setState({highlightedIndex: index, isOpen: true})
    }

    protected handleArrowUp(event) {
        event.preventDefault()
        const itemsLength = this
            .getFilteredItems()
            .length
        if (!itemsLength) {
            return
        }
        const {highlightedIndex} = this.state
        const index = (highlightedIndex === 0 || highlightedIndex === null)
            ? itemsLength - 1
            : highlightedIndex - 1
        this.performAutoCompleteOnKeyUp = true
        this.setState({highlightedIndex: index, isOpen: true})
    }

    protected handleEnter(event) {
        if (!this.isOpen()) {
            // menu is closed so there is no selection to accept -> do nothing
            return
        } else if (this.state.highlightedIndex === null) {
            // input has focus but no menu item is selected + enter is hit -> close the
            // menu, highlight whatever's in input
            this.setState({
                isOpen: false,
            }, () => {
                // TODO this.refs.input.select()
            })
        } else {
            // text entered + menu item has been highlighted + enter is hit -> update value
            // to that of selected menu item, close the menu
            event.preventDefault()
            const item = this.getFilteredItems()[this.state.highlightedIndex]
            const value = this
                .props
                .getItemValue(item)
            this.setState({
                isOpen: false,
                highlightedIndex: null,
            }, () => {
                // this.refs.input.focus() // TODO: file issue
                // this.refs.input.setSelectionRange(     value.length,     value.length   )
                this.onSelect(value, item)
            })
        }
    }

    protected handleEscape() {
        this.setState({highlightedIndex: null, isOpen: false})
    }

    protected handleInputBlur() {
        if (this.ignoreBlur) {
            return
        }
        this.setState({isOpen: false, highlightedIndex: null})
    }

    protected handleInputFocus() {
        if (this.ignoreBlur) {
            this.setIgnoreBlur(false)
            return
        }
        this.setState({isOpen: true})
    }

    protected isInputFocused() {
        const el: any = document.getElementById("autocomplete-input-"+this.randid)
        return el.ownerDocument && (el === el.ownerDocument.activeElement)
    }

    protected handleInputClick() {
        // Input will not be focused if it's disabled
        if (this.isInputFocused() && !this.isOpen()) {
            this.setState({ isOpen: true })
        }
    }

    protected composeEventHandlers(internal, external) {
        return external
                ? e => { internal(e); external(e) }
                : internal
    }

    protected highlightItemFromMouse(index) {
        this.setState({highlightedIndex: index})
    }

    protected selectItemFromMouse(item) {
        const value = this
            .props
            .getItemValue(item)
        this.setState({
            isOpen: false,
            highlightedIndex: null,
        }, () => {
            this.onSelect(value, item)
            // this.refs.input.focus()
        })
    }

    protected setIgnoreBlur(ignore) {
        this.ignoreBlur = ignore
    }

    protected renderMenu() {
        const items = this
            .getFilteredItems()
            .map((item, index) => {
                const element = this
                    .props
                    .renderItem(item, this.state.highlightedIndex === index, {cursor: "default"})
                return React.cloneElement(element, {
                    onMouseDown: () => { item.disabled ? null : this.selectItemFromMouse(item) },
                    onMouseEnter: () => { item.disabled ? null : this.highlightItemFromMouse(index) },
                    onClick: () => { item.disabled ? null : this.selectItemFromMouse(item) },
                    // ref: e => this.refs[`item-${index}`] = e,
                })
            })
        const style = {
            left: this.state.menuLeft,
            top: this.state.menuTop,
            minWidth: this.state.menuWidth,
        }

        if(items.length === 0) {
            return false
        }

        const menu = this
            .props
            .renderMenu(items, this.props.value, style)
        return React.cloneElement(menu, {
            // ref: e => this.refs.menu = e,
        })
    }

    public render() {
        const open = this.isOpen()
        const {name, shouldItemRender, renderMenu, onMenuVisibilityChange, renderItem, getItemValue,  ...props} = this.props
        const inputProps = {
                onFocus: this.handleInputFocus.bind(this),
                onBlur: this.handleInputBlur.bind(this),
                onChange: this.handleChange.bind(this),
                onKeyDown: this.handleKeyDown.bind(this),
                onKeyUp: this.handleKeyUp.bind(this),
                onClick: this.handleInputClick.bind(this),
        }

        return (
            <Field label="">
                <TextInput
                    {...props}
                    {...inputProps}
                    data-name={name}
                    id={"autocomplete-input-"+this.randid}
                />
                {open && this.renderMenu()}
            </Field>
        )
    }
}

const Menu = css("div")({
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.95)",
    padding: 0,
    fontSize: "90%",
    position: "absolute",
    top: "100% !important",
    left: "3px !important",
    margin: "1px 0",
    overflow: "auto",
    maxHeight: "250px",
    zIndex: 1000,
    marginTop: "0",
}, props => {
    const theme: any = props.theme
    return {
        border: `1px solid ${theme.decoration}`,
        borderTop: "none",
    }
})

const MenuItem = css("div")({
    padding: "5px 20px",
    fontSize: "0.9em",
    cursor: "pointer",
    borderRadius: 0,
    borderBottom: "1px solid #eee",
}, (props:any) => {
    if(props.selected) {
        return {
            background: "#f4f4f4",
        }
    } else {
        return {
            background: "transparent",
        }
    }
})

export default InputContainer(Autocomplete)
