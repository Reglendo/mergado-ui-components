import * as React  from "react"
import InputProps from "../default_props"
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import * as Moment from "moment"
import {prefix} from "../../../config"
// import { SingleDatePickerPhrases, DateRangePickerPhrases } from 'react-dates/src/defaultPhrases';

export interface Props extends InputProps {
    type?: 'single' | 'range'
    numberOfMonths?: number
    minimumDays?: number
    locale?: string
    labels?: {
        main: string | JSX.Element
        placeholder: string
        invalid: string | JSX.Element
        title: string
        placeholderFrom: string
        placeholderTo: string
    }
    defaults_single?: {
    }
    defaults_range?: {
    }
}

export interface State {
    startDate: Moment.Moment | null
    endDate: Moment.Moment | null
    focused: boolean | "startDate" | "endDate"
}


class DatePicker extends React.Component<Props, State> {

    readonly name = prefix + "datepicker";
    readonly form = prefix + "form";

    public static defaultProps: Props = {
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
            onPrevMonthClick() {},
            onNextMonthClick() {},

            // day presentation and interaction related props
            renderDay: null,
            enableOutsideDays: false,
            isDayBlocked: () => false,
            isOutsideRange: day => false,
            isDayHighlighted: day => { return day.startOf('day').toString() === Moment().startOf('day').toString()},

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
            onPrevMonthClick() {},
            onNextMonthClick() {},


            // day presentation and interaction related props
            daySize: 30,
            renderDay: null,
            minimumNights: 0,
            enableOutsideDays: false,
            isDayBlocked: () => false,
            isOutsideRange: day => false,
            isDayHighlighted: day => { return day.startOf('day').toString() === Moment().startOf('day').toString()},

            // internationalization
            displayFormat: () => Moment.localeData().longDateFormat('L'),
            monthFormat: 'MMMM YYYY',
        }
    }

    constructor(props: Props) {
        super(props)
        var startDate = props.input.value ? Moment(props.input.value) : null

        this.state = {
            startDate: startDate,
            endDate: null,
            focused: null
        }
        require('moment/locale/' + props.locale)
    }


    onDateChange(date) {
        this.setState({ startDate: date });
    }

    onDatesChange(dates) {
        this.setState({ startDate: dates.startDate, endDate: dates.endDate });
    }

    onFocusChange(action) {
        if(action === 'startDate') {
            this.setState( { focused: 'startDate' } );
        }
        else
        if(action === 'endDate') {
            this.setState( { focused: 'endDate' } );
        }
        else
        if(action) {
            this.setState( { focused: action.focused } );
        }

        if(action === null) {
            this.setState( { focused: null } );
        }
    }

    render() {
        const { focused, startDate, endDate } = this.state
        const { type,labels, defaults_single, defaults_range, numberOfMonths,minimumDays } = this.props
        var object : any = Object

        if(type == 'single') {
            var picker = <SingleDatePicker
                {...defaults_single}
                placeholder={labels.placeholder}
                date={startDate}
                focused={focused}
                numberOfMonths={numberOfMonths}
                onDateChange={this.onDateChange.bind(this)}
                onFocusChange={this.onFocusChange.bind(this)}
            />
        } else {
            var picker = <DateRangePicker
                {...defaults_range}
                numberOfMonths={numberOfMonths}
                minimumNights={minimumDays - 1}
                onDatesChange={this.onDatesChange.bind(this)}
                onFocusChange={this.onFocusChange.bind(this)}
                startDatePlaceholderText={labels.placeholderFrom}
                endDatePlaceholderText={labels.placeholderTo}
                focusedInput={this.state.focused}
                startDate={startDate}
                endDate={endDate}
            />
        }
        return (
            <div className={`${this.name}`}>
                <span className={`${this.name}__label ${this.form}__label`}>{labels.main}</span>
                <div className={`${this.name}__picker`}>
                    {picker}
                </div>
            </div>
        )
    }
}

export default DatePicker