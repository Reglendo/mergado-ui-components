"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    margin: 10px 0;\n    text-align: center;\n    font-size: 13px;\n"], ["\n    margin: 10px 0;\n    text-align: center;\n    font-size: 13px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: inline-block;\n    height: 30px;\n    min-width: 30px;\n    background: rgba(255, 255, 255, 0.25);\n    border: 1px solid #dbcba3;\n    line-height: 28px;\n    padding: 0px 5px 0 5px;\n    text-decoration: none;\n    color: #009ba9;\n    margin: 0 2px;\n    &:hover {\n        background: white;\n        text-decoration: none;\n    }\n    &:active,&:focus,&:visited {\n        text-decoration: none;\n    }\n"], ["\n    box-sizing: border-box;\n    display: inline-block;\n    height: 30px;\n    min-width: 30px;\n    background: rgba(255, 255, 255, 0.25);\n    border: 1px solid #dbcba3;\n    line-height: 28px;\n    padding: 0px 5px 0 5px;\n    text-decoration: none;\n    color: #009ba9;\n    margin: 0 2px;\n    &:hover {\n        background: white;\n        text-decoration: none;\n    }\n    &:active,&:focus,&:visited {\n        text-decoration: none;\n    }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    display: inline-block;\n    opacity: 0.3;\n    color: black;\n    &:hover {\n        background: initial;\n    }\n\n"], ["\n    display: inline-block;\n    opacity: 0.3;\n    color: black;\n    &:hover {\n        background: initial;\n    }\n\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    font-weight: bold;\n    opacity: 1;\n    border: 1px solid #b79748;\n    background: #fff;\n    color: black;\n"], ["\n    font-weight: bold;\n    opacity: 1;\n    border: 1px solid #b79748;\n    background: #fff;\n    color: black;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var unique_id_1 = require("../../helpers/unique_id");
var config_1 = require("../../config");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(_templateObject);
var Button = styled_components_1.default.a(_templateObject2);
var Disabled = Button.extend(_templateObject3);
var Active = Button.extend(_templateObject4);

var Paginator = function (_React$Component) {
    _inherits(Paginator, _React$Component);

    function Paginator(props) {
        _classCallCheck(this, Paginator);

        var _this = _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call(this, props));

        _this.name = config_1.prefix + "paginator";
        _this.state = {
            id: unique_id_1.default(),
            current: 2
        };
        return _this;
    }

    _createClass(Paginator, [{
        key: "renderButton",
        value: function renderButton(label, page, clickable) {
            var _this2 = this;

            var active = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var key = this.state.id + "-" + label + "-" + page;
            var classLink = this.name + "__item";
            var classDisabled = this.name + "__item " + this.name + "__item--disabled";
            if (active) {
                classDisabled = this.name + "__item " + this.name + "__item--active";
            }
            if (clickable) {
                return React.createElement(Button, { className: classLink, href: "#", onClick: function onClick(evt) {
                        _this2.pageClicked(evt, page);
                    }, key: key }, label);
            } else if (active) {
                return React.createElement(Active, { className: classDisabled, key: key }, label);
            } else {
                return React.createElement(Disabled, { className: classDisabled, key: key }, label);
            }
        }
    }, {
        key: "renderMainButtons",
        value: function renderMainButtons() {
            var buttons = [];
            var range = void 0;
            if (this.props.maxLinks % 2 === 0) {
                range = (this.props.maxLinks - 2) / 2;
            } else {
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
                var _diff = Math.abs(1 - bottomLimit);
                topLimit += _diff;
                bottomLimit += _diff;
            }
            if (topLimit > this.props.lastPage) {
                topLimit = this.props.lastPage;
            }
            for (var i = bottomLimit; i <= topLimit; i++) {
                var button = this.renderButton(i, i, i !== this.props.currentPage, i === this.props.currentPage);
                buttons.push(button);
            }
            return buttons;
        }
    }, {
        key: "renderPreviousButton",
        value: function renderPreviousButton() {
            return this.renderButton(this.props.labelPrevious, this.props.currentPage - 1, this.props.currentPage !== 1);
        }
    }, {
        key: "renderNextButton",
        value: function renderNextButton() {
            return this.renderButton(this.props.labelNext, this.props.currentPage + 1, this.props.currentPage !== this.props.lastPage);
        }
    }, {
        key: "renderFirstButton",
        value: function renderFirstButton() {
            return this.renderButton(this.props.labelFirst, 1, this.props.currentPage !== 1);
        }
    }, {
        key: "renderLastButton",
        value: function renderLastButton() {
            return this.renderButton(this.props.labelLast, this.props.lastPage, this.props.currentPage !== this.props.lastPage);
        }
    }, {
        key: "pageClicked",
        value: function pageClicked(evt, pageNumber) {
            evt.preventDefault();
            this.props.onPageChange(pageNumber);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(Wrapper, { className: this.name, "data-active": this.props.currentPage, style: this.props.style }, this.props.showFirstAndLast && this.renderFirstButton(), this.props.showPrevAndNext && this.renderPreviousButton(), this.renderMainButtons(), this.props.showPrevAndNext && this.renderNextButton(), this.props.showFirstAndLast && this.renderLastButton());
        }
    }]);

    return Paginator;
}(React.Component);

Paginator.defaultProps = {
    currentPage: 1,
    onPageChange: function onPageChange() {},
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
exports.default = Paginator;
//# sourceMappingURL=index.js.map