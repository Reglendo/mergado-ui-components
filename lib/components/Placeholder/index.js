import * as React from "react";
import css from "cxs/component";
import { Div } from "../../components/Layout";
import * as Color from "color";
import { prefix } from "../../config";
class Placeholder extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "placeholder";
    }
    render() {
        const { addClass, style, width, height } = this.props;
        const className = `${this.name} ${addClass ? addClass : ""}`;
        const object = Object;
        const styles = object.assign({}, { paddingBottom: `${(height * 100 / width)}%` }, style);
        return (React.createElement(Div, { position: "relative", className: className, style: styles },
            React.createElement(Shadow, { className: `${this.name}__shadow` },
                React.createElement(Div, { display: "table", width: "100%", height: "100%", className: `${this.name}__wrapper` },
                    React.createElement(Container, { className: `${this.name}__container` }, this.props.children)))));
    }
}
Placeholder.defaultProps = {
    width: 100,
    height: 100,
    style: {},
    addClass: "",
};
const Shadow = css("div")({
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
    border: "1px solid white",
}, (props) => {
    return {
        background: Color(props.theme.decoration).fade(0.8).string(),
        borderColor: Color(props.theme.decoration).fade(0.2).string(),
    };
});
const Container = css("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
});
export default Placeholder;
