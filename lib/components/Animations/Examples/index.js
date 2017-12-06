import * as React from "react";
import css from "cxs/component";
class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    render() {
        return React.createElement(Div, { className: this.state.active ? "active" : "", onClick: () => this.setState({ active: !this.state.active }) }, this.props.children);
    }
}
const Div = css("div")({
    transform: "rotate3d(0,0,0)",
    transition: "transform 0.2s",
    ".active": {
        transform: "rotate3d(1,0,0)",
    }
});
