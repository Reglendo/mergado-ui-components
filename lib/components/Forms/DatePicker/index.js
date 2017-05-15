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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_dates_1 = require("react-dates");
var Moment = require("moment");
var config_1 = require("config");
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "datepicker";
        _this.form = config_1.prefix + "form";
        var startDate = props.input.value ? Moment(props.input.value) : null;
        _this.state = {
            startDate: startDate,
            endDate: null,
            focused: null
        };
        require('moment/locale/' + props.locale);
        return _this;
    }
    DatePicker.prototype.onDateChange = function (date) {
        this.setState({ startDate: date });
    };
    DatePicker.prototype.onDatesChange = function (dates) {
        this.setState({ startDate: dates.startDate, endDate: dates.endDate });
    };
    DatePicker.prototype.onFocusChange = function (action) {
        if (action === 'startDate') {
            this.setState({ focused: 'startDate' });
        }
        else if (action === 'endDate') {
            this.setState({ focused: 'endDate' });
        }
        else if (action) {
            this.setState({ focused: action.focused });
        }
        if (action === null) {
            this.setState({ focused: null });
        }
    };
    DatePicker.prototype.renderInvalid = function () {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: this.form + "__validation" }, this.props.labels.invalid));
        }
    };
    DatePicker.prototype.render = function () {
        var _a = this.state, focused = _a.focused, startDate = _a.startDate, endDate = _a.endDate;
        var _b = this.props, type = _b.type, labels = _b.labels, defaults_single = _b.defaults_single, defaults_range = _b.defaults_range, numberOfMonths = _b.numberOfMonths, minimumDays = _b.minimumDays, meta = _b.meta;
        var picker;
        if (type === 'single') {
            picker = React.createElement(react_dates_1.SingleDatePicker, __assign({}, defaults_single, { placeholder: labels.placeholder, date: startDate, focused: focused, numberOfMonths: numberOfMonths, onDateChange: this.onDateChange.bind(this), onFocusChange: this.onFocusChange.bind(this) }));
        }
        else {
            picker = React.createElement(react_dates_1.DateRangePicker, __assign({}, defaults_range, { numberOfMonths: numberOfMonths, minimumNights: minimumDays - 1, onDatesChange: this.onDatesChange.bind(this), onFocusChange: this.onFocusChange.bind(this), startDatePlaceholderText: labels.placeholderFrom, endDatePlaceholderText: labels.placeholderTo, focusedInput: this.state.focused, startDate: startDate, endDate: endDate }));
        }
        return (React.createElement("div", { className: this.name + " " + this.form + "__group " + (meta.invalid && (meta.dirty || meta.touched) ? this.form + "__group--invalid" : ''), style: this.props.style },
            this.renderInvalid(),
            React.createElement("span", { className: this.name + "__label " + this.form + "__label" }, labels.main),
            React.createElement("div", { className: this.name + "__picker" }, picker)));
    };
    return DatePicker;
}(React.Component));
DatePicker.defaultProps = {
    type: 'single',
    numberOfMonths: 1,
    minimumDays: 1,
    locale: 'cs',
    style: null,
    input: {
        checked: false,
        name: "",
        onBlur: function (value) {
        },
        onChange: function (value) {
        },
        onDragStart: function (value) {
        },
        onDrop: function (value) {
        },
        onFocus: function (value) {
        },
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
        id: 'date',
        placeholder: 'Date',
        disabled: false,
        required: false,
        screenReaderInputMessage: '',
        showClearDate: true,
        // calendar presentation and interaction related props
        orientation: 'horizontal',
        anchorDirection: 'left',
        horizontalMargin: 0,
        withPortal: false,
        withFullScreenPortal: false,
        initialVisibleMonth: null,
        numberOfMonths: 2,
        keepOpenOnDateSelect: false,
        reopenPickerOnClearDate: false,
        // navigation related props
        daySize: 30,
        navPrev: '<',
        navNext: '>',
        onPrevMonthClick: function () { },
        onNextMonthClick: function () { },
        // day presentation and interaction related props
        renderDay: null,
        enableOutsideDays: false,
        isDayBlocked: function () { return false; },
        isOutsideRange: function (day) { return false; },
        isDayHighlighted: function (day) { return day.startOf('day').toString() === Moment().startOf('day').toString(); },
        // internationalization props
        displayFormat: function () { return Moment.localeData().longDateFormat('L'); },
        monthFormat: 'MMMM YYYY'
    },
    defaults_range: {
        // input related props
        startDateId: 'startDate',
        startDatePlaceholderText: '',
        endDateId: 'endDate',
        endDatePlaceholderText: '',
        disabled: false,
        required: false,
        screenReaderInputMessage: '',
        showClearDates: true,
        showDefaultInputIcon: false,
        // calendar presentation and interaction related props
        orientation: 'horizontal',
        anchorDirection: 'left',
        horizontalMargin: 0,
        withPortal: false,
        withFullScreenPortal: false,
        initialVisibleMonth: null,
        numberOfMonths: 2,
        keepOpenOnDateSelect: false,
        reopenPickerOnClearDates: false,
        // navigation related props
        navPrev: '<',
        navNext: '>',
        onPrevMonthClick: function () { },
        onNextMonthClick: function () { },
        // day presentation and interaction related props
        daySize: 30,
        renderDay: null,
        minimumNights: 0,
        enableOutsideDays: false,
        isDayBlocked: function () { return false; },
        isOutsideRange: function (day) { return false; },
        isDayHighlighted: function (day) { return day.startOf('day').toString() === Moment().startOf('day').toString(); },
        // internationalization
        displayFormat: function () { return Moment.localeData().longDateFormat('L'); },
        monthFormat: 'MMMM YYYY'
    }
};
exports["default"] = DatePicker;
//# sourceMappingURL=index.js.map