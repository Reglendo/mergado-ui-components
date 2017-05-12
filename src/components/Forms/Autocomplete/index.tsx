import * as React from "react"
import {findDOMNode} from "react-dom"
import {prefix} from "../../../config"
import TextInput from "../TextInput"
import InputProps from "../default_props"

export interface Item {
    value: string
    text: string
}

export interface Props extends InputProps {
    
    items : Array<Item>
    shouldItemRender?: (item : any, value : any) => any
    sortItems?: (a : any, b : any, value : any) => any

    getItemValue?: (any) => any
    renderItem?: (item : any, highlighted : boolean, style : any) => any
    renderMenu?: (items : any, value : any, style : any) => any
    autoHighlight?: boolean
    onMenuVisibilityChange?: (any) => any
    open?: boolean
    addClass?: string
    style?: any

    labels?: {
        main: string
        placeholder: string
        invalid: string
        title: string
    }
}
export interface State {
    value: string
    isOpen : boolean
    highlightedIndex : number
    menuLeft : number
    menuTop : number
    menuWidth : number
}

class Autocomplete extends React.Component < Props, State > {

    readonly name = prefix + "autocomplete";

    protected _performAutoCompleteOnUpdate = true
    protected _performAutoCompleteOnKeyUp = true
    protected _ignoreBlur = false
    public static defaultProps : Props = {
        items: [],
        renderMenu: (items, value, style) => {
            return <div className={`${prefix + "autocomplete"}__menu`} style={{ ...style }} children={items}/>
        },
        onMenuVisibilityChange: () => {},
        renderItem: (item: Item, highlighted, style) => {
            let className = `${prefix + "autocomplete"}__item `
            className += highlighted ? className + `${prefix + "autocomplete"}__item--selected` : ''
            return (<div key={`${item.value}`} className={`${className}`}>{item.text}</div>)
        },
        getItemValue: (item: Item) => {
            return item.text
        },
        shouldItemRender: (item, value) => {
            return (item.value.toLowerCase().indexOf(value.toLowerCase()) > -1)
        },
        input: {
            checked: false,
            name: "",
            onBlur: (value) => {
            },
            onChange: (value) => {
            },
            onDragStart: (value) => {
            },
            onDrop: (value) => {
            },
            onFocus: (value) => {
            },
            onKeyDown: (value) => {
            },
            value: ""
        },
        meta: {
            active: false,
            asyncValidating: false,
            autofilled: false,
            dirty: false,
            dispatch: Function,
            error: "",
            form: "",
            invalid: false,
            pristine: true,
            submitting: false,
            submitFailed: false,
            touched: false,
            valid: true,
            visited: false,
            warning: ""
        },
        labels: {
            main: "",
            placeholder: "",
            invalid: "",
            title: "",
        },
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.value ? props.value : '',
            isOpen: false,
            highlightedIndex: null,
            menuLeft: 0,
            menuTop: 0,
            menuWidth: 0
        }

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.items !== nextProps.items ||
            this.state.highlightedIndex >= nextProps.items.length) {
                this.setState({highlightedIndex: null})
        }
    }

    isOpen() {
        return 'open' in this.props ? this.props.open : this.state.isOpen
    }

    componentDidMount() {
        if (this.isOpen()) {
            this.setMenuPositions()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.state.isOpen && !prevState.isOpen) || ('open' in this.props && this.props.open && !prevProps.open)) {
            this.setMenuPositions()
        }

        if (this.isOpen() && this._performAutoCompleteOnUpdate) {
            this._performAutoCompleteOnUpdate = false
            this.maybeAutoCompleteText()
        }

        if (prevState.isOpen !== this.state.isOpen) {
            this
                .props
                .onMenuVisibilityChange(this.state.isOpen)
        }
    }

    setMenuPositions() {
        const node : any = this.refs.input
        const rect = node.refs.input.getBoundingClientRect()
        const glob : any = global
        const computedStyle = glob
            .getComputedStyle(node.refs.input)
        const marginBottom = parseInt(computedStyle.marginBottom, 10) || 0
        const marginLeft = parseInt(computedStyle.marginLeft, 10) || 0
        const marginRight = parseInt(computedStyle.marginRight, 10) || 0
        this.setState({
            menuTop: rect.bottom + marginBottom,
            menuLeft: rect.left + marginLeft,
            menuWidth: rect.width + marginLeft + marginRight
        })
    }

    maybeAutoCompleteText() {
        if (!this.props.autoHighlight || this.state.value === '') {
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
        const itemValueDoesMatch = (itemValue.toLowerCase().indexOf(this.state.value.toLowerCase()) === 0)
        if (itemValueDoesMatch && highlightedIndex === null) {
            this.setState({highlightedIndex: 0})
        }
    }

    getFilteredItems() {
        let items = this.props.items
        if (this.props.shouldItemRender) {
            items = items.filter((item) => (this.props.shouldItemRender(item, this.state.value)))
        }

        if (this.props.sortItems) {
            items.sort((a, b) => (this.props.sortItems(a, b, this.state.value)))
        }

        return items
    }

    onSelect(value, item) {
        this.setState({ value: value })
        this.setIgnoreBlur(false)
    }

    handleChange(event) {
        this._performAutoCompleteOnKeyUp = true
        this.setState({ highlightedIndex: null, value: event.target.value })
        this.props.input.onChange(event)
    }

    handleKeyUp() {
        if (this._performAutoCompleteOnKeyUp) {
            this._performAutoCompleteOnKeyUp = false
            this.maybeAutoCompleteText()
        }
    }

    handleKeyDown(event) {

        if (event.key === 'ArrowDown') {
            this.handleArrowDown(event);
        } else if (event.key === 'ArrowUp') {
            this.handleArrowUp(event);
        } else if (event.key === 'Enter') {
            this.handleEnter(event);
        } else if (event.key === 'Escape') {
            this.handleEscape();
        } else if (!this.isOpen()) {
            this.setState({isOpen: true})
        }

    }



    handleArrowDown(event) {
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
        this._performAutoCompleteOnKeyUp = true
        this.setState({highlightedIndex: index, isOpen: true})
    }

    handleArrowUp(event) {
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
        this._performAutoCompleteOnKeyUp = true
        this.setState({highlightedIndex: index, isOpen: true})
    }

    handleEnter(event) {
        if (!this.isOpen()) {
            // menu is closed so there is no selection to accept -> do nothing
            return
        } else if (this.state.highlightedIndex === null) {
            // input has focus but no menu item is selected + enter is hit -> close the
            // menu, highlight whatever's in input
            this.setState({
                isOpen: false
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
                highlightedIndex: null
            }, () => {
                // this.refs.input.focus() // TODO: file issue
                // this.refs.input.setSelectionRange(     value.length,     value.length   )
                this.onSelect(value, item)
            })
        }
    }

    handleEscape() {
        this.setState({highlightedIndex: null, isOpen: false})
    }

    handleInputBlur() {
        if (this._ignoreBlur) {
            return
        }
        this.setState({isOpen: false, highlightedIndex: null})
    }

    handleInputFocus() {
        if (this._ignoreBlur) {
            this.setIgnoreBlur(false)
            return
        }
        this.setState({isOpen: true})
    }

     isInputFocused() {
        const el : any = this.refs.input
        return el.ownerDocument && (el === el.ownerDocument.activeElement)
    }

      handleInputClick() {
        // Input will not be focused if it's disabled
        if (this.isInputFocused() && !this.isOpen()) {
            this.setState({ isOpen: true })
        }
    }

     composeEventHandlers(internal, external) {
        return external
        ? e => { internal(e); external(e) }
        : internal
    }

    highlightItemFromMouse(index) {
        this.setState({highlightedIndex: index})
    }

    selectItemFromMouse(item) {
        const value = this
            .props
            .getItemValue(item)
        this.setState({
            isOpen: false,
            highlightedIndex: null
        }, () => {
            this.onSelect(value, item)
            // this.refs.input.focus()
        })
    }

    setIgnoreBlur(ignore) {
        this._ignoreBlur = ignore
    }

    renderMenu() {
        const items = this
            .getFilteredItems()
            .map((item, index) => {
                const element = this
                    .props
                    .renderItem(item, this.state.highlightedIndex === index, {cursor: 'default'})
                return React.cloneElement(element, {
                    onMouseDown: () => this.setIgnoreBlur(true), // Ignore blur to prevent menu from de-rendering before we can process click
                    onMouseEnter: () => this.highlightItemFromMouse(index),
                    onClick: () => this.selectItemFromMouse(item),
                    ref: e => this.refs[`item-${index}`] = e
                })
            })
        const style = {
            left: this.state.menuLeft,
            top: this.state.menuTop,
            minWidth: this.state.menuWidth
        }
        const menu = this
            .props
            .renderMenu(items, this.state.value, style)
        return React.cloneElement(menu, {
            ref: e => this.refs.menu = e
        })
    }

    render() {
        let className = `${this.name}`
        const open = this.isOpen()
        const {labels, meta, input} = this.props
        return (
            <div className={`${className}`}>
                <TextInput 
                    ref="input"
                    type="search"
                    labels={labels}
                    meta={meta}
                    input={{
                        value: this.state.value,
                        onFocus: this.composeEventHandlers(this.handleInputFocus.bind(this), input.onFocus),
                        onBlur: this.composeEventHandlers(this.handleInputBlur.bind(this), input.onBlur),
                        onChange: this.handleChange.bind(this),
                        onKeyDown: this.composeEventHandlers(this.handleKeyDown.bind(this), input.onKeyDown),
                        onKeyUp: this.composeEventHandlers(this.handleKeyUp.bind(this), input.onKeyUp),
                        onClick: this.composeEventHandlers(this.handleInputClick.bind(this), input.onClick)
                    }}
                />
                {open && this.renderMenu()}

            </div>
        )
    }
}

export default Autocomplete