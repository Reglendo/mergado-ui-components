"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const config_1 = require("../../config");
const unique_id_1 = require("../../helpers/unique_id");
class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "paginator";
        this.state = {
            id: unique_id_1.default(),
            current: 2,
        };
    }
    renderButton(label, page, clickable, active = false) {
        const key = `${this.state.id}-${label}-${page}`;
        const classLink = `${this.name}__item`;
        let classDisabled = `${this.name}__item ${this.name}__item--disabled`;
        if (active) {
            classDisabled = `${this.name}__item ${this.name}__item--active`;
        }
        if (clickable) {
            return React.createElement(Button, { className: classLink, href: "#", onClick: (evt) => { this.pageClicked(evt, page); }, key: key }, label);
        }
        else if (active) {
            return React.createElement(Active, { className: classDisabled, key: key }, label);
        }
        else {
            return React.createElement(Disabled, { className: classDisabled, key: key }, label);
        }
    }
    renderMainButtons() {
        const buttons = [];
        let range;
        if (this.props.maxLinks % 2 === 0) {
            range = (this.props.maxLinks - 2) / 2;
        }
        else {
            range = (this.props.maxLinks - 1) / 2;
        }
        let topLimit = this.props.currentPage + range;
        let bottomLimit = this.props.currentPage - range;
        if (topLimit > this.props.lastPage) {
            const diff = topLimit - this.props.lastPage;
            topLimit -= diff;
            bottomLimit -= diff;
        }
        if (bottomLimit < 1) {
            const diff = Math.abs(1 - bottomLimit);
            topLimit += diff;
            bottomLimit += diff;
        }
        if (topLimit > this.props.lastPage) {
            topLimit = this.props.lastPage;
        }
        for (let i = bottomLimit; i <= topLimit; i++) {
            const button = this.renderButton(i, i, i !== this.props.currentPage, i === this.props.currentPage);
            buttons.push(button);
        }
        return buttons;
    }
    renderPreviousButton() {
        return this.renderButton(this.props.labelPrevious, this.props.currentPage - 1, this.props.currentPage !== 1);
    }
    renderNextButton() {
        return this.renderButton(this.props.labelNext, this.props.currentPage + 1, this.props.currentPage !== this.props.lastPage);
    }
    renderFirstButton() {
        return this.renderButton(this.props.labelFirst, 1, this.props.currentPage !== 1);
    }
    renderLastButton() {
        return this.renderButton(this.props.labelLast, this.props.lastPage, this.props.currentPage !== this.props.lastPage);
    }
    pageClicked(evt, pageNumber) {
        evt.preventDefault();
        this.props.onPageChange(pageNumber);
    }
    render() {
        return (React.createElement(glamorous_1.Div, { margin: "10px 0", textAlign: "center", className: this.name, "data-active": this.props.currentPage, style: this.props.style },
            this.props.showFirstAndLast && this.renderFirstButton(),
            this.props.showPrevAndNext && this.renderPreviousButton(),
            this.renderMainButtons(),
            this.props.showPrevAndNext && this.renderNextButton(),
            this.props.showFirstAndLast && this.renderLastButton()));
    }
}
Paginator.defaultProps = {
    currentPage: 1,
    onPageChange: () => {
    },
    firstPage: 1,
    lastPage: 1,
    showPrevAndNext: true,
    showFirstAndLast: false,
    labelLast: "« Last",
    labelFirst: "First »",
    labelNext: "Next",
    labelPrevious: "Previous",
    maxLinks: 5,
    style: {},
};
const Button = glamorous_1.default.a({
    boxSizing: "border-box",
    display: "inline-block",
    height: "42px",
    minWidth: "42px",
    lineHeight: "40px",
    padding: "0px 10px 0 10px",
    textDecoration: "none",
    margin: "0 2px",
    border: `1px solid transparent`,
    fontWeight: "bold",
    ":active,:focus,:visited": {
        textDecoration: "none",
    }
}, (props) => {
    return {
        borderRadius: props.theme.radius,
        color: props.theme.blue,
        ":hover": {
            background: props.theme.blue,
            color: "white",
            textDecoration: "none",
        },
    };
});
const Disabled = glamorous_1.default(Button)({
    display: "inline-block",
    opacity: 0.2,
    color: "black",
    ":hover": {
        background: "initial",
        color: "black",
    },
});
const Active = glamorous_1.default(Button)({
    opacity: 1,
    color: "black",
}, (props) => {
    return {
        background: props.theme.decoration_background,
        border: `1px solid ${props.theme.decoration}`,
        ":hover": {
            background: props.theme.decoration_background,
            border: `1px solid ${props.theme.decoration}`,
            color: "black",
            textDecoration: "none",
        },
    };
});
exports.default = Paginator;
//# sourceMappingURL=index.js.map