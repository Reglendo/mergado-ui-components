"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { SingleDatePicker } from 'react-dates';
const Moment = require("moment");
const config_1 = require("../../../config");
class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "datepicker";
        this.form = config_1.prefix + "form";
        var startDate = props.input.value ? Moment(props.input.value) : null;
        this.state = {
            startDate: startDate,
            endDate: null,
            focused: null
        };
        require('moment/locale/' + props.locale);
    }
    onDateChange(date) {
        this.setState({ startDate: date });
    }
    onDatesChange(dates) {
        this.setState({ startDate: dates.startDate, endDate: dates.endDate });
    }
    onFocusChange(action) {
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
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
    }
    render() {
        const { focused, startDate, endDate } = this.state;
        const { type, labels, defaults_single, defaults_range, numberOfMonths, minimumDays, meta } = this.props;
        var object = Object;
        var picker = React.createElement("div", null, "todo");
        if (type == 'single') {
            // var picker = <SingleDatePicker
            //     {...defaults_single}
            //     placeholder={labels.placeholder}
            //     date={startDate}
            //     focused={focused}
            //     numberOfMonths={numberOfMonths}
            //     onDateChange={this.onDateChange.bind(this)}
            //     onFocusChange={this.onFocusChange.bind(this)}
            // />
        }
        else {
            // var picker = <DateRangePicker
            //     {...defaults_range}
            //     numberOfMonths={numberOfMonths}
            //     minimumNights={minimumDays - 1}
            //     onDatesChange={this.onDatesChange.bind(this)}
            //     onFocusChange={this.onFocusChange.bind(this)}
            //     startDatePlaceholderText={labels.placeholderFrom}
            //     endDatePlaceholderText={labels.placeholderTo}
            //     focusedInput={this.state.focused}
            //     startDate={startDate}
            //     endDate={endDate}
            // />
        }
        return (React.createElement("div", { className: `${this.name} ${this.form}__group ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ''}`, style: this.props.style },
            this.renderInvalid(),
            React.createElement("span", { className: `${this.name}__label ${this.form}__label` }, labels.main),
            React.createElement("div", { className: `${this.name}__picker` }, picker)));
    }
}
DatePicker.defaultProps = {
    type: 'single',
    numberOfMonths: 1,
    minimumDays: 1,
    locale: 'cs',
    input: {
        checked: false,
        name: "",
        onBlur: (value) => {
        },
        onChange: (value) => {
        },
        onDragStart: (value) => {
        },
        onDrop: (value) => {
        },
        onFocus: (value) => {
        },
        value: "2017-04-06",
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
        onPrevMonthClick() { },
        onNextMonthClick() { },
        // day presentation and interaction related props
        renderDay: null,
        enableOutsideDays: false,
        isDayBlocked: () => false,
        isOutsideRange: day => false,
        isDayHighlighted: day => { return day.startOf('day').toString() === Moment().startOf('day').toString(); },
        // internationalization props
        displayFormat: () => Moment.localeData().longDateFormat('L'),
        monthFormat: 'MMMM YYYY',
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
        onPrevMonthClick() { },
        onNextMonthClick() { },
        // day presentation and interaction related props
        daySize: 30,
        renderDay: null,
        minimumNights: 0,
        enableOutsideDays: false,
        isDayBlocked: () => false,
        isOutsideRange: day => false,
        isDayHighlighted: day => { return day.startOf('day').toString() === Moment().startOf('day').toString(); },
        // internationalization
        displayFormat: () => Moment.localeData().longDateFormat('L'),
        monthFormat: 'MMMM YYYY',
    }
};
exports.default = DatePicker;
//# sourceMappingURL=index.js.map