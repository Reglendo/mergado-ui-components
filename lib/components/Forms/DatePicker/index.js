"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dates_1 = require("react-dates");
var Moment = require("moment");
var config_1 = require("../../../config");

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker(props) {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

        _this.name = config_1.prefix + "datepicker";
        _this.form = config_1.prefix + "form";
        var startDate = props.input.value ? Moment(props.input.value) : null;
        _this.state = {
            startDate: startDate,
            endDate: null,
            focused: null
        };
        require("moment/locale/" + props.locale);
        return _this;
    }

    _createClass(DatePicker, [{
        key: "onDateChange",
        value: function onDateChange(date) {
            this.setState({ startDate: date });
        }
    }, {
        key: "onDatesChange",
        value: function onDatesChange(dates) {
            this.setState({ startDate: dates.startDate, endDate: dates.endDate });
        }
    }, {
        key: "onFocusChange",
        value: function onFocusChange(action) {
            if (action === "startDate") {
                this.setState({ focused: "startDate" });
            } else if (action === "endDate") {
                this.setState({ focused: "endDate" });
            } else if (action) {
                this.setState({ focused: action.focused });
            } else if (action === null) {
                this.setState({ focused: null });
            }
        }
    }, {
        key: "renderInvalid",
        value: function renderInvalid() {
            if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
                return React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                focused = _state.focused,
                startDate = _state.startDate,
                endDate = _state.endDate;
            var _props = this.props,
                type = _props.type,
                labels = _props.labels,
                defaults_single = _props.defaults_single,
                defaults_range = _props.defaults_range,
                numberOfMonths = _props.numberOfMonths,
                minimumDays = _props.minimumDays,
                meta = _props.meta;

            var picker = void 0;
            if (type === "single") {
                picker = React.createElement(react_dates_1.SingleDatePicker, Object.assign({}, defaults_single, { placeholder: labels.placeholder, date: startDate, focused: focused, numberOfMonths: numberOfMonths, onDateChange: this.onDateChange.bind(this), onFocusChange: this.onFocusChange.bind(this) }));
            } else {
                picker = React.createElement(react_dates_1.DateRangePicker, Object.assign({}, defaults_range, { numberOfMonths: numberOfMonths, minimumNights: minimumDays - 1, onDatesChange: this.onDatesChange.bind(this), onFocusChange: this.onFocusChange.bind(this), startDatePlaceholderText: labels.placeholderFrom, endDatePlaceholderText: labels.placeholderTo, focusedInput: this.state.focused, startDate: startDate, endDate: endDate }));
            }
            return React.createElement("div", { className: this.name + " " + this.form + "__group\n                            " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : "") + "\n                            ", style: this.props.style }, this.renderInvalid(), React.createElement("span", { className: this.name + "__label " + this.form + "__label" }, labels.main), React.createElement("div", { className: this.name + "__picker" }, picker));
        }
    }]);

    return DatePicker;
}(React.Component);

DatePicker.defaultProps = {
    type: "single",
    numberOfMonths: 1,
    minimumDays: 1,
    locale: "cs",
    style: null,
    input: {
        checked: false,
        name: "",
        onBlur: function onBlur(value) {},
        onChange: function onChange(value) {},
        onDragStart: function onDragStart(value) {},
        onDrop: function onDrop(value) {},
        onFocus: function onFocus(value) {},
        value: "2017-04-06"
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: ""
    },
    labels: {
        main: "Pick date:",
        placeholder: "Click here...",
        invalid: "Invalid input",
        title: "",
        placeholderFrom: "Date from",
        placeholderTo: "Date to"
    },
    defaults_single: {
        // input related props
        id: "date",
        placeholder: "Date",
        disabled: false,
        required: false,
        screenReaderInputMessage: "",
        showClearDate: true,
        // calendar presentation and interaction related props
        orientation: "horizontal",
        anchorDirection: "left",
        horizontalMargin: 0,
        withPortal: false,
        withFullScreenPortal: false,
        initialVisibleMonth: null,
        numberOfMonths: 2,
        keepOpenOnDateSelect: false,
        reopenPickerOnClearDate: false,
        // navigation related props
        daySize: 30,
        navPrev: "<",
        navNext: ">",
        onPrevMonthClick: function onPrevMonthClick() {},
        onNextMonthClick: function onNextMonthClick() {},

        // day presentation and interaction related props
        renderDay: null,
        enableOutsideDays: false,
        isDayBlocked: function isDayBlocked() {
            return false;
        },
        isOutsideRange: function isOutsideRange(day) {
            return false;
        },
        isDayHighlighted: function isDayHighlighted(day) {
            return day.startOf("day").toString() === Moment().startOf("day").toString();
        },
        // internationalization props
        displayFormat: function displayFormat() {
            return Moment.localeData().longDateFormat("L");
        },
        monthFormat: "MMMM YYYY"
    },
    defaults_range: {
        // input related props
        startDateId: "startDate",
        startDatePlaceholderText: "",
        endDateId: "endDate",
        endDatePlaceholderText: "",
        disabled: false,
        required: false,
        screenReaderInputMessage: "",
        showClearDates: true,
        showDefaultInputIcon: false,
        // calendar presentation and interaction related props
        orientation: "horizontal",
        anchorDirection: "left",
        horizontalMargin: 0,
        withPortal: false,
        withFullScreenPortal: false,
        initialVisibleMonth: null,
        numberOfMonths: 2,
        keepOpenOnDateSelect: false,
        reopenPickerOnClearDates: false,
        // navigation related props
        navPrev: "<",
        navNext: ">",
        onPrevMonthClick: function onPrevMonthClick() {},
        onNextMonthClick: function onNextMonthClick() {},

        // day presentation and interaction related props
        daySize: 30,
        renderDay: null,
        minimumNights: 0,
        enableOutsideDays: false,
        isDayBlocked: function isDayBlocked() {
            return false;
        },
        isOutsideRange: function isOutsideRange(day) {
            return false;
        },
        isDayHighlighted: function isDayHighlighted(day) {
            return day.startOf("day").toString() === Moment().startOf("day").toString();
        },
        // internationalization
        displayFormat: function displayFormat() {
            return Moment.localeData().longDateFormat("L");
        },
        monthFormat: "MMMM YYYY"
    }
};
exports.default = DatePicker;
//# sourceMappingURL=index.js.map