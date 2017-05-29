"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "spinner";
        this.state = {
            loaded: false,
        };
    }
    updateState(props) {
        let loaded = this.state.loaded;
        if (props.loaded) {
            loaded = !!props.loaded;
        }
        this.setState({
            loaded,
        });
    }
    componentDidMount() {
        this.updateState(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps);
    }
    render() {
        if (this.state.loaded) {
            return (React.createElement("span", { style: { opacity: 1 } }, this.props.children));
        }
        const { size, type, color, speed } = this.props;
        let defaultStyle = {
            width: size,
            height: size,
            borderColor: `rgba(255,255,255,1)  rgba(255,255,255,.4) rgba(255,255,255,.6) rgba(255,255,255,.8)`,
            fontSize: size,
            animationDuration: 1.2 / speed + "s",
        };
        const containerStyle = {
            width: size,
            height: size,
        };
        if (color === "black") {
            defaultStyle.borderColor = `rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)`;
        }
        else if (color === "green") {
            defaultStyle.borderColor = `rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)`;
        }
        else if (color === "blue") {
            defaultStyle.borderColor = `
                                rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)
                                `;
        }
        if (type === "dashed" || type === "dotted") {
            defaultStyle.borderStyle = type;
        }
        else if (type === "mergado") {
            defaultStyle = { borderWidth: size / 2 };
            defaultStyle.animationDuration = 10 / speed + "s";
        }
        const object = Object;
        const style = object.assign(defaultStyle, this.props.style);
        return (React.createElement("div", { className: `${this.name} ${this.name}--${this.props.type}`, style: containerStyle },
            React.createElement("div", { className: `${this.name}__wrapper`, style: style },
                React.createElement("div", { className: `${this.name}__content`, style: { opacity: 0 } }, this.props.children))));
    }
}
Spinner.defaultProps = {
    type: "default",
    size: 30,
    loaded: false,
    color: "white",
    style: {},
    speed: 1,
};
exports.default = Spinner;
//# sourceMappingURL=index.js.map