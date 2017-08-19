"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n"], ["\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    position: relative;\n    text-align: left;\n    &:focus {\n        outline: none;\n\n        &:before {\n            content: attr(title);\n            position: absolute;\n            left: 50%;\n            top: -63px;\n            transform: translateX(-50%);\n            white-space: nowrap;\n            background: #888;\n            color: white;\n            z-index: 1000;\n            border-radius: 2px;\n            font-size: 12px;\n            padding: 5px;\n        }\n\n        .", "icon {\n            z-index: 1000;\n        }\n        .", "icon__text {\n            display: inline-block;\n        }\n\n        svg {\n            outline: 1px solid #888;\n            transform: scale3d(3,3,1);\n            background: #fff;\n        }\n\n    }\n    .", "icon {\n        padding: 4px;\n        position: relative;\n        border: 1px solid transparent;\n\n        &:hover {\n            background: white;\n            border: 1px solid #ccc;\n        }\n    }\n\n    svg {\n        transition: transform 0.2s;\n        will-change: transform;\n    }\n    .", "icon__text {\n        border-radius: 2px;\n        position: absolute;\n        top: -50px;\n        left: -29px;\n        display: none;\n        background: white;\n        color: #333;\n        border: 2px solid #888;\n        font-size: 10px;\n        padding: 5px;\n        white-space: nowrap;\n        left: 50%;\n        top: 68px;\n        transform: translateX(-50%);\n    }\n"], ["\n    cursor: pointer;\n    position: relative;\n    text-align: left;\n    &:focus {\n        outline: none;\n\n        &:before {\n            content: attr(title);\n            position: absolute;\n            left: 50%;\n            top: -63px;\n            transform: translateX(-50%);\n            white-space: nowrap;\n            background: #888;\n            color: white;\n            z-index: 1000;\n            border-radius: 2px;\n            font-size: 12px;\n            padding: 5px;\n        }\n\n        .", "icon {\n            z-index: 1000;\n        }\n        .", "icon__text {\n            display: inline-block;\n        }\n\n        svg {\n            outline: 1px solid #888;\n            transform: scale3d(3,3,1);\n            background: #fff;\n        }\n\n    }\n    .", "icon {\n        padding: 4px;\n        position: relative;\n        border: 1px solid transparent;\n\n        &:hover {\n            background: white;\n            border: 1px solid #ccc;\n        }\n    }\n\n    svg {\n        transition: transform 0.2s;\n        will-change: transform;\n    }\n    .", "icon__text {\n        border-radius: 2px;\n        position: absolute;\n        top: -50px;\n        left: -29px;\n        display: none;\n        background: white;\n        color: #333;\n        border: 2px solid #888;\n        font-size: 10px;\n        padding: 5px;\n        white-space: nowrap;\n        left: 50%;\n        top: 68px;\n        transform: translateX(-50%);\n    }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
var Icon_1 = require("..");
var TextInput_1 = require("../../Forms/TextInput");
var Icons = require("@reglendo/mergado-ui-icons/lib");
var styled_components_1 = require("styled-components");
/* <style> */
var Wrapper = styled_components_1.default.div(_templateObject);
var Image = styled_components_1.default.span(_templateObject2, config_1.prefix, config_1.prefix, config_1.prefix, config_1.prefix);
/**
 * disable-styleguide
 */

var IconFinder = function (_React$Component) {
    _inherits(IconFinder, _React$Component);

    function IconFinder(props) {
        _classCallCheck(this, IconFinder);

        var _this = _possibleConstructorReturn(this, (IconFinder.__proto__ || Object.getPrototypeOf(IconFinder)).call(this, props));

        _this.name = config_1.prefix + "icon-finder";
        _this.state = {
            value: ""
        };
        return _this;
    }

    _createClass(IconFinder, [{
        key: "handleChange",
        value: function handleChange(evt) {
            this.setState({
                value: evt.target.value
            });
        }
    }, {
        key: "renderIcons",
        value: function renderIcons() {
            var _this2 = this;

            var find = this.state.value.toLowerCase().trim();
            var icons = Object.keys(Icons);
            var found = icons.filter(function (icon) {
                if (icon.toLowerCase().indexOf(find) > -1) {
                    return true;
                }
                return false;
            });
            if (found.length === 0) {
                return React.createElement("p", { style: { padding: "10px" } }, "no icon found :(");
            }
            return found.map(function (obj) {
                var viewBox = obj === "IconHeureka" ? "0 0 200 40" : "0 0 40 40";
                return React.createElement(Image, { key: obj, className: _this2.name + "__icon", title: obj, tabIndex: 1 }, React.createElement(Icon_1.default, { name: "" + obj, size: 30, text: "import " + obj + " from \"@reglendo/mergado-ui-icons/lib/icons/" + obj + "\"", viewBox: viewBox, style: { display: "inline-block", margin: "5px" } }));
            });
        }
    }, {
        key: "render",
        value: function render() {
            var className = "" + this.name;
            return React.createElement(Wrapper, { className: "" + className }, React.createElement(TextInput_1.default, { labels: { main: "",
                    placeholder: "Type icon name here...",
                    invalid: "Invalid input",
                    title: "" }, input: { onChange: this.handleChange.bind(this), value: this.state.value } }), this.renderIcons());
        }
    }]);

    return IconFinder;
}(React.Component);

IconFinder.defaultProps = {};
exports.default = IconFinder;
//# sourceMappingURL=index.js.map