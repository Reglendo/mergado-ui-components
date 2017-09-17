import * as React from "react";
import glamorous from "glamorous";
import { prefix } from "../../config";
const Wrapper = glamorous.span({
    verticalAlign: "middle",
});
const Indikator = glamorous.span({
    width: "8px",
    height: "8px",
    borderRadius: "100%",
    borderBottom: "none",
    verticalAlign: "baseline",
    display: "inline-block",
    margin: "0 5px",
}, (props) => {
    return {
        boxShadow: props.type === "info" ? "0px 0px 1px 0px rgba(0,0,0,0.5)" : "none",
        backgroundColor: props.theme[props.type]
    };
});
const Text = glamorous.span({
    verticalAlign: "middle",
    "a:hover": {
        textDecoration: "none",
    },
});
class LittleStatus extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "little_status";
    }
    render() {
        const className = `${this.name} ${this.name}--${this.props.type}`;
        const classIndikator = `${this.name}__indikator tooltip`;
        const classText = `${this.name}__text`;
        const text = this.props.text ?
            (React.createElement(Text, { className: classText },
                " ",
                this.props.text))
            :
                this.props.children;
        return (React.createElement(Wrapper, { className: className, style: this.props.style },
            React.createElement(Indikator, { type: this.props.type, className: classIndikator, title: this.props.title }),
            text));
    }
}
LittleStatus.defaultProps = {
    title: "",
    type: "success",
    text: "",
    style: {},
};
export default LittleStatus;
