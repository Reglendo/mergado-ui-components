"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n    background: rgba(255, 255, 255, 0.9);\n    padding: 0;\n    font-size: 90%;\n    position: absolute;\n    top: 100% !important;\n    left: 2px !important;\n    margin: 1px 0;\n    overflow: auto;\n    max-height: 50vh;\n    z-index: 1000;\n    margin-top: -12px;\n    border-color: transparent !important;\n"], ["\n    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n    background: rgba(255, 255, 255, 0.9);\n    padding: 0;\n    font-size: 90%;\n    position: absolute;\n    top: 100% !important;\n    left: 2px !important;\n    margin: 1px 0;\n    overflow: auto;\n    max-height: 50vh;\n    z-index: 1000;\n    margin-top: -12px;\n    border-color: transparent !important;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    padding: 9px 10px;\n    font-size: 12px;\n    cursor: pointer;\n    border-bottom: 1px solid #ccc;\n    border-left: 5px solid rgba(0,0,0,0);\n    transition: border-color 0.2s;\n    border-radius: 0;\n    background: ", ";\n    font-weight: ", ";\n    border-left-color: ", ";\n"], ["\n    padding: 9px 10px;\n    font-size: 12px;\n    cursor: pointer;\n    border-bottom: 1px solid #ccc;\n    border-left: 5px solid rgba(0,0,0,0);\n    transition: border-color 0.2s;\n    border-radius: 0;\n    background: ", ";\n    font-weight: ", ";\n    border-left-color: ", ";\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var TextInput_1 = require("../TextInput");
var unique_id_1 = require("../../../helpers/unique_id");
var styled_components_1 = require("styled-components");
var Field_1 = require("../Field");
/* <style> */
var Menu = styled_components_1.default.div(_templateObject);
var MenuItem = styled_components_1.default.div(_templateObject2, function (props) {
    return props.selected ? "rgba(0,0,0,0.1)" : "transparent";
}, function (props) {
    return props.selected ? "bold" : "normal";
}, function (props) {
    return props.selected ? "rgba(0,0,0,0.3)" : "transparent";
});
/* </style> */

var Autocomplete = function (_React$Component) {
    _inherits(Autocomplete, _React$Component);

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
        key: "render",
        value: function render() {
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
            return React.createElement(Field_1.Field, { label: "" }, React.createElement(TextInput_1.default, { ref: "input", type: "search", labels: labels, meta: meta, input: inputProps }), open && this.renderMenu());
        }
    }]);

    return Autocomplete;
}(React.Component);

Autocomplete.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { items: [], renderMenu: function renderMenu(items, value, style) {
        return React.createElement(Menu, { className: config_1.prefix + "autocomplete" + "__menu", style: Object.assign({}, style), children: items });
    }, onMenuVisibilityChange: function onMenuVisibilityChange() {}, renderItem: function renderItem(item, highlighted, style) {
        var className = config_1.prefix + "autocomplete" + "__item ";
        className += highlighted ? className + (config_1.prefix + "autocomplete" + "__item--selected") : "";
        return React.createElement(MenuItem, { key: item.value + "-" + unique_id_1.default(), selected: highlighted, className: "" + className }, item.text);
    }, getItemValue: function getItemValue(item) {
        return item.text;
    }, shouldItemRender: function shouldItemRender(item, value) {
        return item.value.toLowerCase().indexOf(value.toLowerCase()) > -1;
    } });
exports.default = Autocomplete;
//# sourceMappingURL=index.js.map