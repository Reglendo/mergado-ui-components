"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var TextInput_1 = require("../TextInput");
var unique_id_1 = require("../../../helpers/unique_id");
var MUK = require("../input");

var Autocomplete = function (_MUK$InputComponent) {
    _inherits(Autocomplete, _MUK$InputComponent);

    function Autocomplete(props) {
        _classCallCheck(this, Autocomplete);

        var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

        _this.name = config_1.prefix + "autocomplete";
        _this.performAutoCompleteOnUpdate = true;
        _this.performAutoCompleteOnKeyUp = true;
        _this.ignoreBlur = false;
        _this.state = {
            value: props.value ? props.value : "",
            isOpen: false,
            highlightedIndex: null,
            menuLeft: 0,
            menuTop: 0,
            menuWidth: 0
        };
        return _this;
    }

    _createClass(Autocomplete, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var props = this.props;
            var state = this.state;
            if (props.items !== nextProps.items || state.highlightedIndex >= nextProps.items.length) {
                this.setState({ highlightedIndex: null });
            }
        }
    }, {
        key: "isOpen",
        value: function isOpen() {
            return "open" in this.props ? this.props.open : this.state.isOpen;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.isOpen()) {
                this.setMenuPositions();
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.state.isOpen && !prevState.isOpen || "open" in this.props && this.props.open && !prevProps.open) {
                this.setMenuPositions();
            }
            if (this.isOpen() && this.performAutoCompleteOnUpdate) {
                this.performAutoCompleteOnUpdate = false;
                this.maybeAutoCompleteText();
            }
            if (prevState.isOpen !== this.state.isOpen) {
                this.props.onMenuVisibilityChange(this.state.isOpen);
            }
        }
    }, {
        key: "setMenuPositions",
        value: function setMenuPositions() {
            var node = this.refs.input;
            var rect = node.refs.input.getBoundingClientRect();
            var glob = global;
            var computedStyle = glob.getComputedStyle(node.refs.input);
            var marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
            var marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
            var marginRight = parseInt(computedStyle.marginRight, 10) || 0;
            this.setState({
                menuTop: rect.bottom + marginBottom,
                menuLeft: rect.left + marginLeft,
                menuWidth: rect.width + marginLeft + marginRight
            });
        }
    }, {
        key: "maybeAutoCompleteText",
        value: function maybeAutoCompleteText() {
            if (!this.props.autoHighlight || this.state.value === "") {
                return;
            }
            var highlightedIndex = this.state.highlightedIndex;

            var items = this.getFilteredItems();
            if (items.length === 0) {
                return;
            }
            var matchedItem = highlightedIndex !== null ? items[highlightedIndex] : items[0];
            var itemValue = this.props.getItemValue(matchedItem);
            var itemValueDoesMatch = itemValue.toLowerCase().indexOf(this.state.value.toLowerCase()) === 0;
            if (itemValueDoesMatch && highlightedIndex === null) {
                this.setState({ highlightedIndex: 0 });
            }
        }
    }, {
        key: "getFilteredItems",
        value: function getFilteredItems() {
            var _this2 = this;

            var items = this.props.items;
            if (this.props.shouldItemRender) {
                items = items.filter(function (item) {
                    return _this2.props.shouldItemRender(item, _this2.state.value);
                });
            }
            if (this.props.sortItems) {
                items.sort(function (a, b) {
                    return _this2.props.sortItems(a, b, _this2.state.value);
                });
            }
            return items;
        }
    }, {
        key: "onSelect",
        value: function onSelect(value, item) {
            this.setState({ value: value });
            this.setIgnoreBlur(false);
            this.props.input.onChange(value);
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            this.performAutoCompleteOnKeyUp = true;
            this.setState({ highlightedIndex: null, value: event.target.value });
            this.props.input.onChange(event);
        }
    }, {
        key: "handleKeyUp",
        value: function handleKeyUp() {
            if (this.performAutoCompleteOnKeyUp) {
                this.performAutoCompleteOnKeyUp = false;
                this.maybeAutoCompleteText();
            }
        }
    }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
            if (event.key === "ArrowDown") {
                this.handleArrowDown(event);
            } else if (event.key === "ArrowUp") {
                this.handleArrowUp(event);
            } else if (event.key === "Enter") {
                this.handleEnter(event);
            } else if (event.key === "Escape") {
                this.handleEscape();
            } else if (!this.isOpen()) {
                this.setState({ isOpen: true });
            }
        }
    }, {
        key: "handleArrowDown",
        value: function handleArrowDown(event) {
            event.preventDefault();
            var itemsLength = this.getFilteredItems().length;
            if (!itemsLength) {
                return;
            }
            var highlightedIndex = this.state.highlightedIndex;

            var index = highlightedIndex === null || highlightedIndex === itemsLength - 1 ? 0 : highlightedIndex + 1;
            this.performAutoCompleteOnKeyUp = true;
            this.setState({ highlightedIndex: index, isOpen: true });
        }
    }, {
        key: "handleArrowUp",
        value: function handleArrowUp(event) {
            event.preventDefault();
            var itemsLength = this.getFilteredItems().length;
            if (!itemsLength) {
                return;
            }
            var highlightedIndex = this.state.highlightedIndex;

            var index = highlightedIndex === 0 || highlightedIndex === null ? itemsLength - 1 : highlightedIndex - 1;
            this.performAutoCompleteOnKeyUp = true;
            this.setState({ highlightedIndex: index, isOpen: true });
        }
    }, {
        key: "handleEnter",
        value: function handleEnter(event) {
            var _this3 = this;

            if (!this.isOpen()) {
                // menu is closed so there is no selection to accept -> do nothing
                return;
            } else if (this.state.highlightedIndex === null) {
                // input has focus but no menu item is selected + enter is hit -> close the
                // menu, highlight whatever's in input
                this.setState({
                    isOpen: false
                }, function () {
                    // TODO this.refs.input.select()
                });
            } else {
                // text entered + menu item has been highlighted + enter is hit -> update value
                // to that of selected menu item, close the menu
                event.preventDefault();
                var item = this.getFilteredItems()[this.state.highlightedIndex];
                var value = this.props.getItemValue(item);
                this.setState({
                    isOpen: false,
                    highlightedIndex: null
                }, function () {
                    // this.refs.input.focus() // TODO: file issue
                    // this.refs.input.setSelectionRange(     value.length,     value.length   )
                    _this3.onSelect(value, item);
                });
            }
        }
    }, {
        key: "handleEscape",
        value: function handleEscape() {
            this.setState({ highlightedIndex: null, isOpen: false });
        }
    }, {
        key: "handleInputBlur",
        value: function handleInputBlur() {
            if (this.ignoreBlur) {
                return;
            }
            this.setState({ isOpen: false, highlightedIndex: null });
        }
    }, {
        key: "handleInputFocus",
        value: function handleInputFocus() {
            if (this.ignoreBlur) {
                this.setIgnoreBlur(false);
                return;
            }
            this.setState({ isOpen: true });
        }
    }, {
        key: "isInputFocused",
        value: function isInputFocused() {
            var el = this.refs.input;
            return el.ownerDocument && el === el.ownerDocument.activeElement;
        }
    }, {
        key: "handleInputClick",
        value: function handleInputClick() {
            // Input will not be focused if it's disabled
            if (this.isInputFocused() && !this.isOpen()) {
                this.setState({ isOpen: true });
            }
        }
    }, {
        key: "composeEventHandlers",
        value: function composeEventHandlers(internal, external) {
            return external ? function (e) {
                internal(e);external(e);
            } : internal;
        }
    }, {
        key: "highlightItemFromMouse",
        value: function highlightItemFromMouse(index) {
            this.setState({ highlightedIndex: index });
        }
    }, {
        key: "selectItemFromMouse",
        value: function selectItemFromMouse(item) {
            var _this4 = this;

            var value = this.props.getItemValue(item);
            this.setState({
                isOpen: false,
                highlightedIndex: null
            }, function () {
                _this4.onSelect(value, item);
                // this.refs.input.focus()
            });
        }
    }, {
        key: "setIgnoreBlur",
        value: function setIgnoreBlur(ignore) {
            this.ignoreBlur = ignore;
        }
    }, {
        key: "renderMenu",
        value: function renderMenu() {
            var _this5 = this;

            var items = this.getFilteredItems().map(function (item, index) {
                var element = _this5.props.renderItem(item, _this5.state.highlightedIndex === index, { cursor: "default" });
                return React.cloneElement(element, {
                    onMouseDown: function onMouseDown() {
                        return _this5.setIgnoreBlur(true);
                    },
                    onMouseEnter: function onMouseEnter() {
                        return _this5.highlightItemFromMouse(index);
                    },
                    onClick: function onClick() {
                        return _this5.selectItemFromMouse(item);
                    },
                    ref: function ref(e) {
                        return _this5.refs["item-" + index] = e;
                    }
                });
            });
            var style = {
                left: this.state.menuLeft,
                top: this.state.menuTop,
                minWidth: this.state.menuWidth
            };
            var menu = this.props.renderMenu(items, this.state.value, style);
            return React.cloneElement(menu, {
                ref: function ref(e) {
                    return _this5.refs.menu = e;
                }
            });
        }
    }, {
        key: "renderError",
        value: function renderError() {
            return React.createElement("div", null);
        }
    }, {
        key: "renderInput",
        value: function renderInput(className, props) {
            var open = this.isOpen();
            var _props = this.props,
                labels = _props.labels,
                meta = _props.meta,
                input = _props.input;

            var inputProps = Object.assign({}, this.props.input, {
                onFocus: this.composeEventHandlers(this.handleInputFocus.bind(this), input.onFocus),
                onBlur: this.handleInputBlur.bind(this),
                onChange: this.handleChange.bind(this),
                onKeyDown: this.composeEventHandlers(this.handleKeyDown.bind(this), input.onKeyDown),
                onKeyUp: this.composeEventHandlers(this.handleKeyUp.bind(this), input.onKeyUp),
                onClick: this.composeEventHandlers(this.handleInputClick.bind(this), input.onClick)
            });
            return React.createElement("div", null, React.createElement(TextInput_1.default, { ref: "input", type: "search", labels: labels, meta: meta, input: inputProps }), open && this.renderMenu());
        }
    }]);

    return Autocomplete;
}(MUK.InputComponent);

Autocomplete.defaultProps = Object.assign({}, MUK.defaultProps, { items: [], renderMenu: function renderMenu(items, value, style) {
        return React.createElement("div", { className: config_1.prefix + "autocomplete" + "__menu", style: Object.assign({}, style), children: items });
    }, onMenuVisibilityChange: function onMenuVisibilityChange() {}, renderItem: function renderItem(item, highlighted, style) {
        var className = config_1.prefix + "autocomplete" + "__item ";
        className += highlighted ? className + (config_1.prefix + "autocomplete" + "__item--selected") : "";
        return React.createElement("div", { key: item.value + "-" + unique_id_1.default(), className: "" + className }, item.text);
    }, getItemValue: function getItemValue(item) {
        return item.text;
    }, shouldItemRender: function shouldItemRender(item, value) {
        return item.value.toLowerCase().indexOf(value.toLowerCase()) > -1;
    } });
exports.default = Autocomplete;
//# sourceMappingURL=index.js.map