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
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../../config");
var Icon_1 = require("../../Icon");
var TextInput_1 = require("../../Forms/TextInput");
var Icons = require("mergado-ui-icons/lib");
var IconFinder = (function (_super) {
    __extends(IconFinder, _super);
    function IconFinder(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "icon-finder";
        _this.state = {
            value: ''
        };
        return _this;
    }
    IconFinder.prototype.handleChange = function (evt) {
        this.setState({
            value: evt.target.value
        });
    };
    IconFinder.prototype.renderIcons = function () {
        var _this = this;
        var find = this.state.value.toLowerCase().trim();
        var icons = Object.keys(Icons);
        var found = icons.filter(function (icon) {
            if (icon.toLowerCase().indexOf(find) > -1) {
                return true;
            }
            return false;
        });
        if (found.length === 0) {
            return React.createElement("p", { style: { padding: '10px' } }, "no icon found :(");
        }
        return found.map(function (obj) {
            return (React.createElement("span", { className: _this.name + "__icon", tabIndex: 1 },
                React.createElement(Icon_1["default"], { name: "" + obj, size: 30, title: obj, text: obj, style: { display: 'inline-block', margin: '5px' } })));
        });
    };
    IconFinder.prototype.render = function () {
        var className = "" + this.name;
        return (React.createElement("div", { className: "" + className },
            React.createElement(TextInput_1["default"], { labels: { main: "", placeholder: "Type icon name here...", invalid: "Invalid input", title: "" }, input: { onChange: this.handleChange.bind(this), value: this.state.value } }),
            this.renderIcons()));
    };
    return IconFinder;
}(React.Component));
IconFinder.defaultProps = {};
exports["default"] = IconFinder;
//# sourceMappingURL=index.js.map