"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../../config");
var TextInput_1 = require("../TextInput");
var Autocomplete = (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "autocomplete";
        _this._performAutoCompleteOnUpdate = true;
        _this._performAutoCompleteOnKeyUp = true;
        _this._ignoreBlur = false;
        _this.state = {
            value: props.value ? props.value : '',
            isOpen: false,
            highlightedIndex: null,
            menuLeft: 0,
            menuTop: 0,
            menuWidth: 0
        };
        return _this;
    }
    Autocomplete.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.items !== nextProps.items ||
            this.state.highlightedIndex >= nextProps.items.length) {
            this.setState({ highlightedIndex: null });
        }
    };
    Autocomplete.prototype.isOpen = function () {
        return 'open' in this.props ? this.props.open : this.state.isOpen;
    };
    Autocomplete.prototype.componentDidMount = function () {
        if (this.isOpen()) {
            this.setMenuPositions();
        }
    };
    Autocomplete.prototype.componentDidUpdate = function (prevProps, prevState) {
        if ((this.state.isOpen && !prevState.isOpen) || ('open' in this.props && this.props.open && !prevProps.open)) {
            this.setMenuPositions();
        }
        if (this.isOpen() && this._performAutoCompleteOnUpdate) {
            this._performAutoCompleteOnUpdate = false;
            this.maybeAutoCompleteText();
        }
        if (prevState.isOpen !== this.state.isOpen) {
            this
                .props
                .onMenuVisibilityChange(this.state.isOpen);
        }
    };
    Autocomplete.prototype.setMenuPositions = function () {
        var node = this.refs.input;
        var rect = node.refs.input.getBoundingClientRect();
        var glob = global;
        var computedStyle = glob
            .getComputedStyle(node.refs.input);
        var marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
        var marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
        var marginRight = parseInt(computedStyle.marginRight, 10) || 0;
        this.setState({
            menuTop: rect.bottom + marginBottom,
            menuLeft: rect.left + marginLeft,
            menuWidth: rect.width + marginLeft + marginRight
        });
    };
    Autocomplete.prototype.maybeAutoCompleteText = function () {
        if (!this.props.autoHighlight || this.state.value === '') {
            return;
        }
        var highlightedIndex = this.state.highlightedIndex;
        var items = this.getFilteredItems();
        if (items.length === 0) {
            return;
        }
        var matchedItem = highlightedIndex !== null
            ? items[highlightedIndex]
            : items[0];
        var itemValue = this
            .props
            .getItemValue(matchedItem);
        var itemValueDoesMatch = (itemValue.toLowerCase().indexOf(this.state.value.toLowerCase()) === 0);
        if (itemValueDoesMatch && highlightedIndex === null) {
            this.setState({ highlightedIndex: 0 });
        }
    };
    Autocomplete.prototype.getFilteredItems = function () {
        var _this = this;
        var items = this.props.items;
        if (this.props.shouldItemRender) {
            items = items.filter(function (item) { return (_this.props.shouldItemRender(item, _this.state.value)); });
        }
        if (this.props.sortItems) {
            items.sort(function (a, b) { return (_this.props.sortItems(a, b, _this.state.value)); });
        }
        return items;
    };
    Autocomplete.prototype.onSelect = function (value, item) {
        this.setState({ value: value });
        this.setIgnoreBlur(false);
    };
    Autocomplete.prototype.handleChange = function (event) {
        this._performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: null, value: event.target.value });
        this.props.input.onChange(event);
    };
    Autocomplete.prototype.handleKeyUp = function () {
        if (this._performAutoCompleteOnKeyUp) {
            this._performAutoCompleteOnKeyUp = false;
            this.maybeAutoCompleteText();
        }
    };
    Autocomplete.prototype.handleKeyDown = function (event) {
        if (event.key === 'ArrowDown') {
            this.handleArrowDown(event);
        }
        else if (event.key === 'ArrowUp') {
            this.handleArrowUp(event);
        }
        else if (event.key === 'Enter') {
            this.handleEnter(event);
        }
        else if (event.key === 'Escape') {
            this.handleEscape();
        }
        else if (!this.isOpen()) {
            this.setState({ isOpen: true });
        }
    };
    Autocomplete.prototype.handleArrowDown = function (event) {
        event.preventDefault();
        var itemsLength = this
            .getFilteredItems()
            .length;
        if (!itemsLength) {
            return;
        }
        var highlightedIndex = this.state.highlightedIndex;
        var index = (highlightedIndex === null || highlightedIndex === itemsLength - 1)
            ? 0
            : highlightedIndex + 1;
        this._performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: index, isOpen: true });
    };
    Autocomplete.prototype.handleArrowUp = function (event) {
        event.preventDefault();
        var itemsLength = this
            .getFilteredItems()
            .length;
        if (!itemsLength) {
            return;
        }
        var highlightedIndex = this.state.highlightedIndex;
        var index = (highlightedIndex === 0 || highlightedIndex === null)
            ? itemsLength - 1
            : highlightedIndex - 1;
        this._performAutoCompleteOnKeyUp = true;
        this.setState({ highlightedIndex: index, isOpen: true });
    };
    Autocomplete.prototype.handleEnter = function (event) {
        var _this = this;
        if (!this.isOpen()) {
            // menu is closed so there is no selection to accept -> do nothing
            return;
        }
        else if (this.state.highlightedIndex === null) {
            // input has focus but no menu item is selected + enter is hit -> close the
            // menu, highlight whatever's in input
            this.setState({
                isOpen: false
            }, function () {
                // TODO this.refs.input.select()
            });
        }
        else {
            // text entered + menu item has been highlighted + enter is hit -> update value
            // to that of selected menu item, close the menu
            event.preventDefault();
            var item_1 = this.getFilteredItems()[this.state.highlightedIndex];
            var value_1 = this
                .props
                .getItemValue(item_1);
            this.setState({
                isOpen: false,
                highlightedIndex: null
            }, function () {
                // this.refs.input.focus() // TODO: file issue
                // this.refs.input.setSelectionRange(     value.length,     value.length   )
                _this.onSelect(value_1, item_1);
            });
        }
    };
    Autocomplete.prototype.handleEscape = function () {
        this.setState({ highlightedIndex: null, isOpen: false });
    };
    Autocomplete.prototype.handleInputBlur = function () {
        if (this._ignoreBlur) {
            return;
        }
        this.setState({ isOpen: false, highlightedIndex: null });
    };
    Autocomplete.prototype.handleInputFocus = function () {
        if (this._ignoreBlur) {
            this.setIgnoreBlur(false);
            return;
        }
        this.setState({ isOpen: true });
    };
    Autocomplete.prototype.isInputFocused = function () {
        var el = this.refs.input;
        return el.ownerDocument && (el === el.ownerDocument.activeElement);
    };
    Autocomplete.prototype.handleInputClick = function () {
        // Input will not be focused if it's disabled
        if (this.isInputFocused() && !this.isOpen()) {
            this.setState({ isOpen: true });
        }
    };
    Autocomplete.prototype.composeEventHandlers = function (internal, external) {
        return external
            ? function (e) { internal(e); external(e); }
            : internal;
    };
    Autocomplete.prototype.highlightItemFromMouse = function (index) {
        this.setState({ highlightedIndex: index });
    };
    Autocomplete.prototype.selectItemFromMouse = function (item) {
        var _this = this;
        var value = this
            .props
            .getItemValue(item);
        this.setState({
            isOpen: false,
            highlightedIndex: null
        }, function () {
            _this.onSelect(value, item);
            // this.refs.input.focus()
        });
    };
    Autocomplete.prototype.setIgnoreBlur = function (ignore) {
        this._ignoreBlur = ignore;
    };
    Autocomplete.prototype.renderMenu = function () {
        var _this = this;
        var items = this
            .getFilteredItems()
            .map(function (item, index) {
            var element = _this
                .props
                .renderItem(item, _this.state.highlightedIndex === index, { cursor: 'default' });
            return React.cloneElement(element, {
                onMouseDown: function () { return _this.setIgnoreBlur(true); },
                onMouseEnter: function () { return _this.highlightItemFromMouse(index); },
                onClick: function () { return _this.selectItemFromMouse(item); },
                ref: function (e) { return _this.refs["item-" + index] = e; }
            });
        });
        var style = {
            left: this.state.menuLeft,
            top: this.state.menuTop,
            minWidth: this.state.menuWidth
        };
        var menu = this
            .props
            .renderMenu(items, this.state.value, style);
        return React.cloneElement(menu, {
            ref: function (e) { return _this.refs.menu = e; }
        });
    };
    Autocomplete.prototype.render = function () {
        var className = "" + this.name;
        var open = this.isOpen();
        var _a = this.props, labels = _a.labels, meta = _a.meta, input = _a.input;
        return (React.createElement("div", { className: "" + className },
            React.createElement(TextInput_1["default"], { ref: "input", type: "search", labels: labels, meta: meta, input: {
                    value: this.state.value,
                    onFocus: this.composeEventHandlers(this.handleInputFocus.bind(this), input.onFocus),
                    onBlur: this.composeEventHandlers(this.handleInputBlur.bind(this), input.onBlur),
                    onChange: this.handleChange.bind(this),
                    onKeyDown: this.composeEventHandlers(this.handleKeyDown.bind(this), input.onKeyDown),
                    onKeyUp: this.composeEventHandlers(this.handleKeyUp.bind(this), input.onKeyUp),
                    onClick: this.composeEventHandlers(this.handleInputClick.bind(this), input.onClick)
                } }),
            open && this.renderMenu()));
    };
    return Autocomplete;
}(React.Component));
Autocomplete.defaultProps = {
    items: [],
    renderMenu: function (items, value, style) {
        return React.createElement("div", { className: config_1.prefix + "autocomplete" + "__menu", style: __assign({}, style), children: items });
    },
    onMenuVisibilityChange: function () { },
    renderItem: function (item, highlighted, style) {
        var className = config_1.prefix + "autocomplete" + "__item ";
        className += highlighted ? className + (config_1.prefix + "autocomplete" + "__item--selected") : '';
        return (React.createElement("div", { key: "" + item.value, className: "" + className }, item.text));
    },
    getItemValue: function (item) {
        return item.text;
    },
    shouldItemRender: function (item, value) {
        return (item.value.toLowerCase().indexOf(value.toLowerCase()) > -1);
    },
    input: {
        checked: false,
        name: "",
        onBlur: function (value) {
        },
        onChange: function (value) {
        },
        onDragStart: function (value) {
        },
        onDrop: function (value) {
        },
        onFocus: function (value) {
        },
        onKeyDown: function (value) {
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
        title: ""
    }
};
exports["default"] = Autocomplete;
//# sourceMappingURL=index.js.map