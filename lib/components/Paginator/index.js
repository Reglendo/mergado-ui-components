"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var unique_id_1 = require("../../helpers/unique_id");
var config_1 = require("../../config");
var Paginator = (function (_super) {
    __extends(Paginator, _super);
    function Paginator(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "paginator";
        _this.state = {
            id: unique_id_1["default"](),
            current: 2
        };
        return _this;
    }
    Paginator.prototype.renderButton = function (label, page, clickable, active) {
        var _this = this;
        if (active === void 0) { active = false; }
        var key = this.state.id + "-" + label + "-" + page;
        var classLink = this.name + "__item";
        var classDisabled = this.name + "__item " + this.name + "__item--disabled";
        if (active) {
            classDisabled = this.name + "__item " + this.name + "__item--active";
        }
        if (clickable) {
            return React.createElement("a", { className: classLink, href: "#", onClick: function (evt) { _this.pageClicked(evt, page); }, key: key }, label);
        }
        else {
            return React.createElement("span", { className: classDisabled, key: key }, label);
        }
    };
    Paginator.prototype.renderMainButtons = function () {
        var buttons = [];
        var range;
        if (this.props.maxLinks % 2 === 0) {
            range = (this.props.maxLinks - 2) / 2;
        }
        else {
            range = (this.props.maxLinks - 1) / 2;
        }
        var topLimit = this.props.currentPage + range;
        var bottomLimit = this.props.currentPage - range;
        if (topLimit > this.props.lastPage) {
            var diff = topLimit - this.props.lastPage;
            topLimit -= diff;
            bottomLimit -= diff;
        }
        if (bottomLimit < 1) {
            var diff = Math.abs(1 - bottomLimit);
            topLimit += diff;
            bottomLimit += diff;
        }
        if (topLimit > this.props.lastPage) {
            topLimit = this.props.lastPage;
        }
        for (var i = bottomLimit; i <= topLimit; i++) {
            var button = this.renderButton(i, i, i !== this.props.currentPage, i === this.props.currentPage);
            buttons.push(button);
        }
        return buttons;
    };
    Paginator.prototype.renderPreviousButton = function () {
        return this.renderButton(this.props.labelPrevious, this.props.currentPage - 1, this.props.currentPage !== 1);
    };
    Paginator.prototype.renderNextButton = function () {
        return this.renderButton(this.props.labelNext, this.props.currentPage + 1, this.props.currentPage !== this.props.lastPage);
    };
    Paginator.prototype.renderFirstButton = function () {
        return this.renderButton(this.props.labelFirst, 1, this.props.currentPage !== 1);
    };
    Paginator.prototype.renderLastButton = function () {
        return this.renderButton(this.props.labelLast, this.props.lastPage, this.props.currentPage !== this.props.lastPage);
    };
    Paginator.prototype.pageClicked = function (evt, pageNumber) {
        evt.preventDefault();
        this.props.onPageChange(pageNumber);
    };
    Paginator.prototype.render = function () {
        return (React.createElement("div", { className: this.name, "data-active": this.props.currentPage, style: this.props.style },
            this.props.showFirstAndLast && this.renderFirstButton(),
            this.props.showPrevAndNext && this.renderPreviousButton(),
            this.renderMainButtons(),
            this.props.showPrevAndNext && this.renderNextButton(),
            this.props.showFirstAndLast && this.renderLastButton()));
    };
    return Paginator;
}(React.Component));
Paginator.defaultProps = {
    currentPage: 1,
    onPageChange: function () {
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
    style: {}
};
exports["default"] = Paginator;
//# sourceMappingURL=index.js.map