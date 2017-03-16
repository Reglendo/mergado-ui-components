"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const unique_id_1 = require("../../helpers/unique_id");
const config_1 = require("../../config");
const Style = require("../../stylesheets/components/_paginator.sass");
class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "paginator";
        this.state = {
            id: unique_id_1.default()
        };
    }
    renderButton(label, page, clickable, active = false) {
        let key = `${this.state.id}-${label}-${page}`;
        let classLink = `${this.name}__item`;
        let classDisabled = `${this.name}__item--disabled`;
        if (active) {
            classDisabled = `${this.name}__item--disabled ${this.name}__item--active`;
        }
        if (clickable) {
            return React.createElement("a", { className: classLink, href: "#", onClick: (evt) => { this.pageClicked(evt, page); }, key: key }, label);
        }
        else {
            return React.createElement("span", { className: classDisabled, key: key }, label);
        }
    }
    renderMainButtons() {
        let buttons = [];
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
            let diff = topLimit - this.props.lastPage;
            topLimit -= diff;
            bottomLimit -= diff;
        }
        if (bottomLimit < 1) {
            let diff = Math.abs(1 - bottomLimit);
            topLimit += diff;
            bottomLimit += diff;
        }
        if (topLimit > this.props.lastPage) {
            topLimit = this.props.lastPage;
        }
        for (let i = bottomLimit; i <= topLimit; i++) {
            let button = this.renderButton(i, i, i !== this.props.currentPage, i === this.props.currentPage);
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
        return (React.createElement("div", { className: this.name, "data-active": this.props.currentPage },
            this.props.showFirstAndLast && this.renderFirstButton(),
            this.props.showPrevAndNext && this.renderPreviousButton(),
            this.renderMainButtons(),
            this.props.showPrevAndNext && this.renderNextButton(),
            this.props.showFirstAndLast && this.renderLastButton()));
    }
}
Paginator.defaultProps = {
    currentPage: 1,
    onPageChange: () => { },
    firstPage: 1,
    lastPage: 1,
    showPrevAndNext: true,
    showFirstAndLast: false,
    advanced: false,
    labelLast: "Last",
    labelFirst: "First",
    labelNext: "Next",
    labelPrevious: "Previous",
    maxLinks: 5,
};
exports.default = Paginator;
//# sourceMappingURL=index.js.map