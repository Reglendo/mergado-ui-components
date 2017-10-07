import * as React from "react";
import css from "cxs/component";
import { Div } from "../../components/Layout";
import * as Color from "color";
import { prefix } from "../../config";
class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "spinner";
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
        const containerStyle = { width: size, height: size };
        return (React.createElement(Div, { display: "inline-block", overflow: "hidden", className: `${this.name} ${this.name}--${this.props.type}`, style: containerStyle },
            React.createElement(AnimatedWrapper, Object.assign({}, this.props, { className: `${this.name}__wrapper` }),
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
const mergadoColors = {
    left: "#7fba2c",
    bottom: "#007b20",
    right: "#00a9b8",
    top: "transparent",
};
const Wrapper = css("div")({}, (props) => {
    let type = {};
    let color = {};
    if (props.type === "mergado") {
        type = {
            borderWidth: (props.size / 2) + "px",
            boxSizing: "border-box",
            borderStyle: "solid",
            borderColor: `${mergadoColors.top} ${mergadoColors.left} ${mergadoColors.right} ${mergadoColors.bottom}`,
            position: "relative",
            ".muk-spinner__content": {
                maxWidth: 0,
                maxHeight: 0,
                overflow: "hidden",
            },
        };
    }
    else {
        if (props.color === "black") {
            color = { borderColor: `rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)` };
        }
        else if (props.color === "green") {
            color = { borderColor: `rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)` };
        }
        else if (props.color === "blue") {
            color = { borderColor: `rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)` };
        }
        else {
            color = { borderColor: `
                                        ${Color(props.theme.decoration).fade(1).string()} 
                                        ${Color(props.theme.decoration).fade(0.8).string()} 
                                        ${Color(props.theme.decoration).fade(0.6).string()} 
                                        ${Color(props.theme.decoration).fade(0.4).string()}
                                        ` };
        }
        type = {
            borderStyle: props.type === "default" ? "solid" : props.type,
            borderWidth: (props.type === "dashed" || props.type === "dotted") ? "0.1em" : "0.2em",
            display: "inline-block",
            margin: "0px",
            boxSizing: "border-box",
            position: "relative",
            transform: "translate3d(0,0,0)",
            willChange: "transform",
            verticalAlign: "top",
        };
    }
    return Object.assign({ width: props.size + "px", height: props.size + "px", fontSize: props.size + "px", borderRadius: "100%" }, type, color);
});
const animations = props => {
    if (props.type === "mergado") {
        const animation = {
            "@keyframes pulse": {
                "0%:": {
                    borderColor: `${mergadoColors.top} ${mergadoColors.right} ${mergadoColors.bottom} ${mergadoColors.left}`
                },
                "25%": {
                    borderColor: `${mergadoColors.bottom} ${mergadoColors.left} ${mergadoColors.top} ${mergadoColors.right}`
                },
                "50%": {
                    borderColor: `${mergadoColors.right} ${mergadoColors.top} ${mergadoColors.left} ${mergadoColors.bottom}`
                },
                "75%": {
                    borderColor: `${mergadoColors.left} ${mergadoColors.bottom} ${mergadoColors.right} ${mergadoColors.top}`
                },
                "100%": {
                    borderColor: `${mergadoColors.top} ${mergadoColors.right} ${mergadoColors.bottom} ${mergadoColors.left}`
                }
            }
        };
        return Object.assign({}, animation, { animation: `pulse 10s infinite linear` });
    }
    else {
        const animation = {
            "@keyframes spin": {
                "0%": {
                    transform: "rotate(0deg)",
                },
                "100%": {
                    transform: "rotate(360deg)",
                }
            }
        };
        return Object.assign({}, animation, { animation: `spin 1.2s infinite linear` });
    }
};
const AnimatedWrapper = css(Wrapper)(animations);
export default Spinner;
