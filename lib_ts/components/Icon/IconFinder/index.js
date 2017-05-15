"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Icon_1 = require("components/Icon");
const TextInput_1 = require("components/Forms/TextInput");
const Icons = require("mergado-ui-icons/lib");
/**
 * disable-styleguide
 */
class IconFinder extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "icon-finder";
        this.state = {
            value: ''
        };
    }
    handleChange(evt) {
        this.setState({
            value: evt.target.value
        });
    }
    renderIcons() {
        let find = this.state.value.toLowerCase().trim();
        let icons = Object.keys(Icons);
        let found = icons.filter((icon) => {
            if (icon.toLowerCase().indexOf(find) > -1) {
                return true;
            }
            return false;
        });
        if (found.length === 0) {
            return React.createElement("p", { style: { padding: '10px' } }, "no icon found :(");
        }
        return found.map(obj => {
            return (React.createElement("span", { className: `${this.name}__icon`, tabIndex: 1 },
                React.createElement(Icon_1.default, { name: `${obj}`, size: 30, title: obj, text: obj, style: { display: 'inline-block', margin: '5px' } })));
        });
    }
    render() {
        let className = `${this.name}`;
        return (React.createElement("div", { className: `${className}` },
            React.createElement(TextInput_1.default, { labels: { main: "", placeholder: "Type icon name here...", invalid: "Invalid input", title: "" }, input: { onChange: this.handleChange.bind(this), value: this.state.value } }),
            this.renderIcons()));
    }
}
IconFinder.defaultProps = {};
exports.default = IconFinder;
//# sourceMappingURL=index.js.map