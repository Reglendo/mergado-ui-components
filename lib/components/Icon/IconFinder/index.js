"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
<<<<<<< HEAD
var config_1 = require("../../../config");
var Icon_1 = require("..");
var TextInput_1 = require("../../Forms/TextInput");
=======
var config_1 = require("config");
var Icon_1 = require("components/Icon");
var TextInput_1 = require("components/Forms/TextInput");
>>>>>>> master
var Icons = require("mergado-ui-icons/lib");
/**
 * disable-styleguide
 */
<<<<<<< HEAD

var IconFinder = function (_React$Component) {
    _inherits(IconFinder, _React$Component);

=======
var IconFinder = (function (_super) {
    __extends(IconFinder, _super);
>>>>>>> master
    function IconFinder(props) {
        _classCallCheck(this, IconFinder);

        var _this = _possibleConstructorReturn(this, (IconFinder.__proto__ || Object.getPrototypeOf(IconFinder)).call(this, props));

        _this.name = config_1.prefix + "icon-finder";
        _this.state = {
            value: ''
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
                return React.createElement("p", { style: { padding: '10px' } }, "no icon found :(");
            }
            return found.map(function (obj) {
                return React.createElement("span", { className: _this2.name + "__icon", tabIndex: 1 }, React.createElement(Icon_1.default, { name: "" + obj, size: 30, title: obj, text: obj, style: { display: 'inline-block', margin: '5px' } }));
            });
        }
    }, {
        key: "render",
        value: function render() {
            var className = "" + this.name;
            return React.createElement("div", { className: "" + className }, React.createElement(TextInput_1.default, { labels: { main: "", placeholder: "Type icon name here...", invalid: "Invalid input", title: "" }, input: { onChange: this.handleChange.bind(this), value: this.state.value } }), this.renderIcons());
        }
    }]);

    return IconFinder;
}(React.Component);

IconFinder.defaultProps = {};
exports.default = IconFinder;
//# sourceMappingURL=index.js.map