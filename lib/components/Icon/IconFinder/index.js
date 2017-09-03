"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Icons = require("@reglendo/mergado-ui-icons/lib");
const styled_components_1 = require("styled-components");
const config_1 = require("../../../config");
const Icon_1 = require("../../../components/Icon");
const TextInput_1 = require("../../../components/Forms/TextInput");
/* <style> */
const Wrapper = styled_components_1.default.div `
`;
const Image = styled_components_1.default.span `
    cursor: pointer;
    position: relative;
    text-align: left;
    &:focus {
        outline: none;

        &:before {
            content: attr(title);
            position: absolute;
            left: 50%;
            top: -63px;
            transform: translateX(-50%);
            white-space: nowrap;
            background: #888;
            color: white;
            z-index: 1000;
            border-radius: 2px;
            font-size: 12px;
            padding: 5px;
        }

        .${config_1.prefix}icon {
            z-index: 1000;
        }
        .${config_1.prefix}icon__text {
            display: inline-block;
        }

        svg {
            outline: 1px solid #888;
            transform: scale3d(3,3,1);
            background: #fff;
        }

    }
    .${config_1.prefix}icon {
        padding: 4px;
        position: relative;
        border: 1px solid transparent;

        &:hover {
            background: white;
            border: 1px solid #ccc;
        }
    }

    svg {
        transition: transform 0.2s;
        will-change: transform;
    }
    .${config_1.prefix}icon__text {
        border-radius: 2px;
        position: absolute;
        top: -50px;
        left: -29px;
        display: none;
        background: white;
        color: #333;
        border: 2px solid #888;
        font-size: 10px;
        padding: 5px;
        white-space: nowrap;
        left: 50%;
        top: 68px;
        transform: translateX(-50%);
    }
`;
/**
 * disable-styleguide
 */
class IconFinder extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "icon-finder";
        this.state = {
            value: "",
        };
    }
    handleChange(evt) {
        this.setState({
            value: evt.target.value,
        });
    }
    renderIcons() {
        const find = this.state.value.toLowerCase().trim();
        const icons = Object.keys(Icons);
        const found = icons.filter((icon) => {
            if (icon.toLowerCase().indexOf(find) > -1) {
                return true;
            }
            return false;
        });
        if (found.length === 0) {
            return React.createElement("p", { style: { padding: "10px" } }, "no icon found :(");
        }
        return found.map(obj => {
            const viewBox = obj === "IconHeureka" ? "0 0 200 40" : "0 0 40 40";
            return (React.createElement(Image, { key: obj, className: `${this.name}__icon`, title: obj, tabIndex: 1 },
                React.createElement(Icon_1.default, { name: `${obj}`, size: 30, text: `import ${obj} from "@reglendo/mergado-ui-icons/lib/icons/${obj}"`, viewBox: viewBox, style: { display: "inline-block", margin: "5px" } })));
        });
    }
    render() {
        const className = `${this.name}`;
        return (React.createElement(Wrapper, { className: `${className}` },
            React.createElement(TextInput_1.default, { labels: { main: "",
                    placeholder: "Type icon name here...",
                    invalid: "Invalid input",
                    title: "" }, input: { onChange: this.handleChange.bind(this), value: this.state.value } }),
            this.renderIcons()));
    }
}
IconFinder.defaultProps = {};
exports.default = IconFinder;
//# sourceMappingURL=index.js.map