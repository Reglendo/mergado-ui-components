import * as React from "react";
import css from "@reglendo/cxs/component";
import { prefix } from "../../config";
import IconChevronLeft from "@reglendo/mergado-ui-icons/lib/icons/IconChevronLeft";
import IconChevronRight from "@reglendo/mergado-ui-icons/lib/icons/IconChevronRight";
import { Div } from "../Layout/Div";
import { Button } from "../Forms/Button";
export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "carousel";
        this.timer = null;
        this.state = {
            active: 1,
        };
        this.increaseActive = this.increaseActive.bind(this);
        this.decreaseActive = this.decreaseActive.bind(this);
        this.setActive = this.setActive.bind(this);
    }
    componentWillMount() {
        if (this.props.timeout) {
            this.timer = setInterval(this.increaseActive, this.props.timeout * 1000);
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    increaseActive() {
        const steps = this.props.children.length;
        this.setState({ active: this.state.active % steps + 1 });
    }
    decreaseActive() {
        const steps = this.props.children.length;
        this.setState({ active: (this.state.active - 2 + steps) % steps + 1 });
    }
    setActive(s) {
        const steps = this.props.children.length;
        this.setState({ active: parseInt(s.target.dataset.step, 10) });
    }
    render() {
        const steps = this.props.children.length;
        let i = 1;
        let j = 1;
        const translate = -((this.state.active - 1) / steps) * 100;
        return (React.createElement(CssWrapper, { className: `${this.name} ${this.props.className || ""}`, s: this.props.style },
            React.createElement(CssMukBigButton, { color: "nocolor", left: true, className: "m-big-prev", onClick: this.decreaseActive, icon: React.createElement(IconChevronLeft, { size: 20 }) }),
            this.props.topLayer,
            React.createElement(Div, { className: "m-slides", padding: "10px 30px", maxWidth: "100%", overflowX: "hidden" },
                React.createElement(CssSlides, { className: "m-slides-wrapper", count: steps, translate: translate }, this.props.children.map(o => {
                    return React.createElement(CssSlide, { className: `m-slide ${this.state.active === 1 && "active"}`, active: this.state.active === i, "data-next": i++ }, o);
                }))),
            React.createElement("div", { className: "m-controls" },
                React.createElement(Button, { className: "m-prev", color: "nocolor", style: { fontSize: "14px" }, onClick: this.decreaseActive, icon: React.createElement(IconChevronLeft, { size: 12, text: "Předchozí" }) }),
                "\u00A0",
                this.props.children.map(o => {
                    j++;
                    return this.state.active === j - 1 ?
                        React.createElement(CssMukCircle, { color: "nocolor", size: "tiny", className: "m-point", onClick: this.setActive, type: "void", "data-step": j - 1 }, "\u25CF")
                        :
                            React.createElement(CssMukCircle, { color: "nocolor", size: "tiny", className: "m-point", onClick: this.setActive, type: "void", "data-step": j - 1 }, "\u25CB");
                }),
                React.createElement(Button, { className: "m-next", color: "nocolor", style: { fontSize: "14px" }, onClick: this.increaseActive, icon: React.createElement(IconChevronRight, { size: 12, textFirst: true, text: "Další" }) })),
            React.createElement(CssMukBigButton, { className: "m-big-next", color: "nocolor", onClick: this.increaseActive, icon: React.createElement(IconChevronRight, { size: 20 }) })));
    }
}
const CssWrapper = css("div")({
    overflowX: "hidden",
    maxWidth: "100%",
    position: "relative",
    textAlign: "center",
}, props => (Object.assign({}, props.s)));
const CssMukBigButton = css(Button)({
    position: "absolute",
    zIndex: 10,
    top: 0,
    bottom: 0,
    margin: "auto"
}, props => ({
    left: props.left ? "0px" : "auto",
    right: props.left ? "auto" : "0px",
}));
const CssSlides = css("div")({
    display: "table",
    tableLayout: "fixed",
    transition: "transform 0.2s",
}, props => ({
    width: props.count * 100 + "%",
    transform: "translate3d(" + props.translate + "%,0,0)",
}));
const CssSlide = css("div")({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
    transition: "0.1s opacity",
}, props => ({
    opacity: props.active ? 1 : 0,
}));
const CssMukCircle = css(Button)({
    fontSize: "22px",
    opacity: 0.8,
    display: "inline-block",
    padding: "5px",
    color: "#333",
});
export default Carousel;
