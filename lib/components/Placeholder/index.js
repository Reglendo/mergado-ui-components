import * as React from "react";
import css from "@reglendo/cxs/component";
import { Div } from "../../components/Layout/Div";
import * as Color from "color";
import { prefix } from "../../config";
class Placeholder extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "placeholder";
    }
    render() {
        const { className, style, width, height } = this.props;
        const object = Object;
        const styles = Object.assign({ paddingBottom: `${(height * 100 / width)}%` }, style);
        return (React.createElement(Div, Object.assign({ className: `${this.name} ${className || ""}`, position: "relative" }, styles),
            React.createElement(CssShadow, { className: `m-shadow` },
                React.createElement(Div, { className: `m-content-wrapper`, display: "table", width: "100%", height: "100%" },
                    React.createElement(CssContainer, { className: `m-content` }, this.props.children)))));
    }
}
Placeholder.defaultProps = {
    width: 100,
    height: 100,
    style: {},
    className: "",
};
const CssShadow = css("div")({
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
const CssContainer = css("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
});
export default Placeholder;
