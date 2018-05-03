var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import css from "@reglendo/cxs/component";
import { prefix } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import ReactDatePicker from "react-day-picker/DayPickerInput";
import dayjs from "dayjs";
import { style as factoryStyle } from "./style";
import { styles as inputStyles, stylesProps as inputStylesProps } from "../TextInput";
class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "datepicker";
        this.handleChanged = this.handleChanged.bind(this);
        this.state = {
            startDate: props.input.value ?
                props.input.value : props.default ?
                props.default : null
        };
        if (this.props.locale === "sk") {
            this.locale = require("./locale.sk").default;
        }
        else {
            this.locale = require("./locale.cs").default;
        }
    }
    handleChanged(evt) {
        this.setState({ startDate: evt });
        if (this.props.onChange) {
            return this.props.onChange(evt);
        }
    }
    render() {
        const _a = this.props, { locale, input, meta, children, labels, pickerProps } = _a, props = __rest(_a, ["locale", "input", "meta", "children", "labels", "pickerProps"]);
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        const FORMAT = "DD. MM. YYYY";
        return (React.createElement(StyledField, { labels: labels },
            React.createElement(ReactDatePicker, Object.assign({ "aria-invalid": isInvalid ? 1 : 0, placeholder: this.state.startDate ? dayjs(this.state.startDate).format(FORMAT) : FORMAT, onDayChange: this.handleChanged, dayPickerProps: Object.assign({ firstDayOfWeek: 1, months: this.locale.MONTHS, weekdaysLong: this.locale.WEEKDAYS_LONG, weekdaysShort: this.locale.WEEKDAYS_SHORT, selectedDays: this.state.startDate ? dayjs(this.state.startDate).toDate() : [], month: this.state.startDate ? dayjs(this.state.startDate).toDate() : null }, pickerProps), parseDate: (a) => {
                    const parsed = a.split(" ").map(o => parseInt(o, 10));
                    return new Date(parsed[2], parsed[1] - 1, parsed[0]);
                }, formatDate: (a, b) => dayjs(a).format(b), format: FORMAT }, props)),
            React.createElement("style", null, factoryStyle)));
    }
}
DatePicker.defaultProps = Object.assign({ locale: "cs", pickerProps: {} }, defaultFieldProps);
const StyledField = css(Field)({
    display: "inline-block",
    width: "100%",
    " input": Object.assign({}, inputStyles)
}, props => {
    return {
        " input": inputStylesProps(props)
    };
});
export default DatePicker;
