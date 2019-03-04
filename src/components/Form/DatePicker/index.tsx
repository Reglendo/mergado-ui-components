import * as React from "react"
import css from "css"
import InputContainer from "../Field/InputContainer"
import {prefix} from "config"
import {Field, IField} from "../Field"
import ReactDatePicker from "react-day-picker"
import dayjs from "dayjs"
import TextInput from "../TextInput"
import FieldLabel from "../FieldLabel"
import {style as factoryStyle} from "./style"
import {styles as inputStyles, stylesProps as inputStylesProps} from "../TextInput"
import ReactDOM from "react-dom"

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
    manual: string
    invalid: boolean
    positionEdge: "left" | "right"
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
            positionEdge: "left",
            manual: null,
            invalid: false,
        }

        if(this.props.locale === "sk") {
            this.locale = require("./locale.sk").default
        } else {
            this.locale = require("./locale.cs").default
        }
    }

    myRef = React.createRef();

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.value !== nextProps.value ||
            this.props.error !== nextProps.error ||
            this.state.manual !== nextState.manual ||
            this.state.showPicker !== nextState.showPicker ||
            this.state.startDate !== nextState.startDate ||
            this.state.startTime !== nextState.startTime

        ) {
            return true
        }
        return false
    }


    componentWillUpdate(props, state) {
        if(state.manual === null) {
            const startDate = props.value ? dayjs(props.value).format('YYYY-MM-DD') : null
            const startTime = props.value ? dayjs(props.value).format('HH:mm:ss') : null

            this.setState({
                startDate,
                startTime,
                invalid: false,
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.showPicker && !prevState.showPicker) {
            const n:any = ReactDOM.findDOMNode(this.refs['popover'])
            const c = n.getBoundingClientRect()
            if(c.x + c.width > window.screen.availWidth) {
                n.style.right = 0
                n.style.left = 'initial'
            } else {
                n.style.left = 0
                n.style.right = 'initial'
            }
        }

    }

    handleDateChanged = (date) => {
        if(!dayjs(date).isValid()) {
            return
        }
        const set =  `${dayjs(date).format("YYYY-MM-DD")} ${(this.state.startTime || "00:00:00")}`
        this.setState({ startDate: dayjs(set).format("YYYY-MM-DD"), showPicker: this.props.datetime, manual: null, })

        if(this.props.setValue) {
            this.props.setValue(set)
        }
        if(this.props.onChange) {
            return this.props.onChange(set)
        }
    }

    handleChanged = (e) => {
        const d = e.split(' ')
        const date = dayjs(`${d[1] || ""} ${d[0] || ""} ${d[2] || ""} ${d[3] || ""}`);
        const invalid = !date.isValid()
        if(invalid) {
            this.setState({
                manual: e,
                invalid,
            })
        } else {
            const set =  `${date.format("YYYY-MM-DD HH:mm:ss")}`
            this.setState({ startDate: date.format("YYYY-MM-DD"),
                            startTime: date.format("HH:mm:ss"),
            })

            if(this.props.setValue) {
                this.props.setValue(set)
            }
            if(this.props.onChange) {
                this.props.onChange(set)
            }
            this.setState({
                manual: e,
                invalid: false,
            })
        }
    }


    handleTimeChanged = (evt) => {
        const time = evt
        const set = dayjs(`${this.state.startDate} ${time}`)
        this.setState({ startTime: set.format("HH:mm:ss"), manual: null, })
        if(this.props.setValue) {
            this.props.setValue(set.format("YYYY-MM-DD HH:mm:ss"))
        }
        if(this.props.onChange) {
            return this.props.onChange(set.format("YYYY-MM-DD HH:mm:ss"))
        }

    }

    handleClick = () => { this.setState({showPicker: true}) }
    handleHide = () => this.setState({showPicker: false})

    public render() {
        const { className, label, name, placeholder, value, onChange, locale, children, pickerProps, datetime, ...props } = this.props
        const {showPicker, manual, invalid} = this.state
        const FORMAT = datetime ?  "DD. MM. YYYY HH:mm:ss" : "DD. MM. YYYY"
        return(
            <StyledField className={`${className || ""} muk-datepicker`}>
                <div>
                    {/* visible */}
                    <TextInput {...props}
                            onClick={this.handleClick}
                            type={this.props.onClear ? "search" : "text"}
                            onClear={this.props.onClear}
                            label={label}
                            style={{
                                " input": {
                                    background: invalid ? "rgba(255,0,0,0.2)" : undefined,
                                }
                            }}
                            data-name={name}
                            onChange={this.handleChanged}
                            placeholder={placeholder || (this.state.startDate ? dayjs(this.state.startDate + " " + this.state.startTime).format(FORMAT) : FORMAT)}
                            value={manual ? manual : this.state.startDate ? dayjs(this.state.startDate + " " + this.state.startTime).format(FORMAT) : ""} />
                </div>
                {showPicker &&
                <Popover className="muk-datepicker-popover" ref={"popover"}>
                    <Cover onClick={this.handleHide} className="muk-datepicker-cover" />
                    <Picker className="muk-datepicker-picker">
                    {datetime &&
                    <>
                        <FieldLabel className="muk-datepicker-pickerlabel">Čas:</FieldLabel><br/>
                        <TextInput type={"time"} value={this.state.startTime}
                                    className="muk-datepicker-inputtime"
                                style={{width: "80%", margin: "auto"}}
                                step={1}
                                onChange={this.handleTimeChanged} />
                        <FieldLabel className="muk-datepicker-pickerlabel" style={{marginBottom: "-20px", marginTop: "10px"}}>Den:</FieldLabel><br/>
                    </>
                        }
                        <ReactDatePicker
                            onDayClick={this.handleDateChanged}
                            className="muk-datepicker-reactdatepicker"
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
