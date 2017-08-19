"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const unique_id_1 = require("helpers/unique_id");
const config_1 = require("config");
const styled_components_1 = require("styled-components");
const Wrapper = styled_components_1.default.div `
    margin: 10px 0;
    text-align: center;
    font-size: 13px;
`;
const Button = styled_components_1.default.a `
    box-sizing: border-box;
    display: inline-block;
    height: 30px;
    min-width: 30px;
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid #dbcba3;
    line-height: 28px;
    padding: 0px 5px 0 5px;
    text-decoration: none;
    color: #009ba9;
    margin: 0 2px;
    &:hover {
        background: white;
        text-decoration: none;
    }
    &:active,&:focus,&:visited {
        text-decoration: none;
    }
`;
const Disabled = Button.extend `
    display: inline-block;
    opacity: 0.3;
    color: black;
    &:hover {
        background: initial;
    }

`;
const Active = Button.extend `
    font-weight: bold;
    opacity: 1;
    border: 1px solid #b79748;
    background: #fff;
    color: black;
`;
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
        return (React.createElement(Wrapper, { className: this.name, "data-active": this.props.currentPage, style: this.props.style },
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
exports.default = Paginator;
//# sourceMappingURL=index.js.map