import * as React from 'react'
import {Button,DatePicker,Grid, GridCell} from "../../"
import moment from "dayjs"
import css from "@reglendo/cxs/component"
interface Props {
    getter: (dateFrom: string, dateTo: string) => void
    disabledDays?: Function
    dateFrom?: string
    dateTo?: string
    style?: any

    labelFrom?: string
    labelTo?: string

    placeholderFrom?: string
    placeholderTo?: string
}

interface State {
    dateFrom: string
    dateTo: string
}

class DateRange extends React.PureComponent<Props, State> {

    constructor(props) {
        super(props)
        this.state = {
            dateFrom: props.dateFrom || null,
            dateTo: props.dateTo || null,
        }
    }

    componentWillUpdate(nextProps) {
            if(this.props.dateFrom !== nextProps.dateFrom) {
                this.setState({ dateFrom: nextProps.dateFrom })
            }

            if(this.props.dateTo !== nextProps.dateTo) {
                this.setState({ dateTo: nextProps.dateTo })
            }
    }

    onChangeDateFrom = e => {
        this.getter(moment(e).format('YYYY-MM-DD'),this.state.dateTo);
        this.setState({
            dateFrom: moment(e).format('YYYY-MM-DD'),
        })
    }

    onChangeDateTo = e => {
        this.getter(this.state.dateFrom, moment(e).format('YYYY-MM-DD'));

        this.setState({
            dateTo: moment(e).format('YYYY-MM-DD'),
        })
    }

    getter = (from, to) => {
        if(from && to) {
            this.props.getter(from, to)
        }
    }

    filterDays = date => date > moment() || date < moment('2018-01-01')

    filterDaysFrom = date => (this.props.disabledDays && this.props.disabledDays(date)) || (this.state.dateTo && moment(date) > moment(this.state.dateTo).add(1,'day'))

    filterDaysTo = date => (this.props.disabledDays && this.props.disabledDays(date)) || (this.state.dateFrom && moment(date) < moment(this.state.dateFrom))

    render() {
        const { style } = this.props
        const { dateFrom, dateTo } = this.state
        const pickerProps = {   showOverlay: true, showOutsideDays: true, className: "Range",
                                modifiers: { start: moment(dateFrom).toDate(), end: moment(dateTo).toDate() },
                                selectedDays: [{ from: moment(dateFrom).toDate(), to: moment(dateTo).toDate() }] }
        const pickerPropsFrom = {
            ...pickerProps,
            disabledDays: this.filterDaysFrom,
        }
        const pickerPropsTo = {
            ...pickerProps,
            disabledDays: this.filterDaysTo,
        }
        return (
            <Wrapper cols={"auto auto 1fr"} s={style} gap={"5px"} {...style}>
                <GridCell valign={"center"} style={{ padding: "10px 0" }}>
                    <DatePicker
                        className="muk-picker-from"
                        pickerProps={pickerPropsFrom}
                        placeholder={this.props.placeholderFrom}
                        label={this.props.labelFrom}
                        value={dateFrom !== null ? moment(dateFrom).format('YYYY-MM-DD') : null}
                        onChange={this.onChangeDateFrom} />
                </GridCell>
                <GridCell valign={"center"}>
                    <DatePicker
                        className="muk-picker-to"
                        pickerProps={pickerPropsTo}
                        placeholder={this.props.placeholderTo}
                        label={this.props.labelTo}
                        value={dateTo !== null ? moment(dateTo).format('YYYY-MM-DD') : null}
                        onChange={this.onChangeDateTo} />
                </GridCell>
                <GridCell valign={"center"} className="screenshot-hide">

                </GridCell>
            </Wrapper>
        )
    }
}
const Wrapper = css(Grid)(props => ({
    " .muk-picker-to .muk-datepicker-popover": {
        right: 0,
        left: 'initial',
    },
    ...props.s,
}))

export default DateRange
