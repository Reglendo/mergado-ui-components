import * as React from "react"
import css from "@reglendo/cxs/component"
import InputContainer from "../Field/InputContainer"
import {prefix} from "../../config"
import {Field, IField} from "../Field"
import ReactDatePicker from "react-day-picker"
import dayjs from "dayjs"
import TextInput from "../TextInput"
import FieldLabel from "../FieldLabel"
import {style as factoryStyle} from "./style"
import {styles as inputStyles, stylesProps as inputStylesProps} from "../TextInput"

interface Props extends IField {
    locale?: "cs" | "sk"
    pickerProps?: any
    datetime?: boolean

    onClear?: () => void
}

interface State {
    startDate: string
    startTime: string
    showPicker: boolean
}

export class DatePicker extends React.Component<Props, State> {

    protected readonly name = prefix + "datepicker"
    protected locale;

    constructor(props) {
        super(props)
        const startDate = props.value ? dayjs(props.value).format('YYYY-MM-DD') : null
        const startTime = props.value ? dayjs(props.value).format('HH:mm:ss') : null

        this.state = {
            showPicker: false,
            startDate,
            startTime,
        }

        if(this.props.locale === "sk") {
            this.locale = require("./locale.sk").default
        } else {
            this.locale = require("./locale.cs").default
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.value !== nextProps.value ||
            this.props.error !== nextProps.error ||
            this.state.showPicker !== nextState.showPicker ||
            this.state.startDate !== nextState.startDate ||
            this.state.startTime !== nextState.startTime

        ) {
            return true
        }
        return false
    }


    componentWillUpdate(props) {
        const startDate = props.value ? dayjs(props.value).format('YYYY-MM-DD') : null
        const startTime = props.value ? dayjs(props.value).format('HH:mm:ss') : null

        this.setState({
            startDate,
            startTime,
        })
    }

    handleChanged = (date) => {
        if(!dayjs(date).isValid()) {
            return
        }
        const set =  `${dayjs(date).format("YYYY-MM-DD")} ${(this.state.startTime || "00:00:00")}`
        this.setState({ startDate: dayjs(set).format("YYYY-MM-DD"), showPicker: this.props.datetime, })

        if(this.props.setValue) {
            this.props.setValue(set)
        }
        if(this.props.onChange) {
            return this.props.onChange(set)
        }
    }

    handleTimeChanged = (evt) => {
        const time = evt
        const set = dayjs(`${this.state.startDate} ${time}`)
        this.setState({ startTime: set.format("HH:mm:ss") })
        if(this.props.setValue) {
            this.props.setValue(set.format("YYYY-MM-DD HH:mm:ss"))
        } else
        if(this.props.onChange) {
            return this.props.onChange(set.format("YYYY-MM-DD HH:mm:ss"))
        }

    }

    handleClick = () => this.setState({showPicker: true})
    handleHide = () => this.setState({showPicker: false})

    public render() {
        const { label, name, placeholder, value, onChange, locale, children, pickerProps, datetime, ...props } = this.props
        const {showPicker} = this.state
        const FORMAT = datetime ?  "DD. MM. YYYY HH:mm:ss" : "DD. MM. YYYY"
        return(
            <StyledField>
                <div>
                    {/* visible */}
                    <TextInput {...props}
                            onClick={this.handleClick}
                            type={this.props.onClear ? "search" : "text"}
                            onClear={this.props.onClear}
                            label={label}
                            placeholder={placeholder || (this.state.startDate ? dayjs(this.state.startDate + " " + this.state.startTime).format(FORMAT) : FORMAT)}
                            value={this.state.startDate ? dayjs(this.state.startDate + " " + this.state.startTime).format(FORMAT) : ""} />
                </div>
                {showPicker &&
                <Popover>
                    <Cover onClick={this.handleHide} />
                    <Picker>
                    {datetime &&
                    <>
                        <FieldLabel>Čas:</FieldLabel><br/>
                        <TextInput type={"time"} value={this.state.startTime}
                                style={{width: "80%", margin: "auto"}}
                                step={1}
                                onChange={this.handleTimeChanged} />
                        <FieldLabel style={{marginBottom: "-20px", marginTop: "10px"}}>Den:</FieldLabel><br/>
                    </>
                        }
                        <ReactDatePicker
                            onDayClick={this.handleChanged}
                            {...{
                                firstDayOfWeek: 1,
                                months: this.locale.MONTHS,
                                weekdaysLong: this.locale.WEEKDAYS_LONG,
                                weekdaysShort: this.locale.WEEKDAYS_SHORT,
                                selectedDays: this.state.startDate ? dayjs(this.state.startDate).toDate() : [],
                                month: this.state.startDate ?  dayjs(this.state.startDate).toDate() : null,
                                ...pickerProps,
                            }}
                            {...props}
                        />
                    </Picker>
                </Popover>
            }
            </StyledField>
        )
    }
}

const Picker = css("div")({
    ...factoryStyle,
    background: "white",
    boxShadow: "1px 2px 5px 0px rgba(122,122,122,0.5)",
    paddingTop: "10px",
    " .muk-form-label": {
        marginLeft: "5px",
    },
})

const Popover = css("div")({
    position: "absolute",
    zIndex: 200,
})

const Cover = css("div")({
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
})

const StyledField = css(Field)({
    display: "block",
    width: "100%",

    " input": {
        ...inputStyles,
    }
}, props => {
    return {
    " input": inputStylesProps(props)
}})

export default InputContainer(DatePicker)
