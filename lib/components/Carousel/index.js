import * as React from "react";
import css from "cxs/component";
import { prefix } from "../../config";
import IconChevronLeft from "@reglendo/mergado-ui-icons/lib/icons/IconChevronLeft";
import IconChevronRight from "@reglendo/mergado-ui-icons/lib/icons/IconChevronRight";
import { Div } from "../Layout";
import { Button } from "../Forms/Button";
export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "carousel";
        this.state = {
            active: 1,
        };
    }
    render() {
        const steps = this.props.children.length;
        const className = `${this.name}`;
        const increaseActive = () => this.setState({ active: this.state.active % steps + 1 });
        const decreaseActive = () => this.setState({ active: (this.state.active - 2 + steps) % steps + 1 });
        const setActive = s => { this.setState({ active: parseInt(s.target.dataset.step, 10) }); };
        let i = 1;
        let j = 1;
        const translate = -((this.state.active - 1) / steps) * 100;
        return (React.createElement(Wrapper, null,
            React.createElement(BigButton, { color: "nocolor", left: true, onClick: decreaseActive, icon: React.createElement(IconChevronLeft, { size: 20 }) }),
            React.createElement(Div, { padding: "10px 30px" },
                React.createElement(Slides, { count: steps, translate: translate }, this.props.children.map(o => {
                    return React.createElement(Slide, { active: this.state.active === i, "data-next": i++ }, o);
                }))),
            React.createElement("div", { className: "controls" },
                React.createElement(Button, { color: "nocolor", style: { fontSize: "14px" }, onClick: decreaseActive, icon: React.createElement(IconChevronLeft, { size: 12, text: "Předchozí" }) }),
                "\u00A0",
                this.props.children.map(o => {
                    j++;
                    return this.state.active === j - 1 ?
                        React.createElement(Circle, { color: "nocolor", size: "tiny", onClick: setActive, type: "void", "data-step": j - 1 }, "\u25CF")
                        :
                            React.createElement(Circle, { color: "nocolor", size: "tiny", onClick: setActive, type: "void", "data-step": j - 1 }, "\u25CB");
                }),
                React.createElement(Button, { color: "nocolor", style: { fontSize: "14px" }, onClick: increaseActive, icon: React.createElement(IconChevronRight, { size: 12, textFirst: true, text: "Další" }) })),
            React.createElement(BigButton, { color: "nocolor", onClick: increaseActive, icon: React.createElement(IconChevronRight, { size: 20 }) })));
    }
}
const Wrapper = css("div")({
    overflowX: "hidden",
    maxWidth: "100%",
    position: "relative",
    textAlign: "center",
});
const BigButton = css(Button)({
    position: "absolute",
    zIndex: 10,
    top: 0,
    bottom: 0,
    margin: "auto"
}, props => ({
    left: props.left ? "0px" : "auto",
    right: props.left ? "auto" : "0px",
}));
const Slides = css("div")({
    display: "table",
    tableLayout: "fixed",
    transition: "transform 0.2s",
}, props => ({
    width: props.count * 100 + "%",
    transform: "translate3d(" + props.translate + "%,0,0)",
}));
const Slide = css("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
    transition: "0.1s opacity",
}, props => ({
    opacity: props.active ? 1 : 0,
}));
const Circle = css(Button)({
    fontSize: "22px",
    opacity: 0.8,
    display: "inline-block",
    padding: "5px",
    color: "#333",
});
export default Carousel;
