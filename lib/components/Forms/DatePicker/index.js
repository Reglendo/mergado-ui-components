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
import css from "cxs/component";
import { prefix } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import ReactDatePicker from "react-datepicker/es";
import moment from "moment-mini";
import { style as factoryStyle } from "./style";
import { styles as inputStyles, stylesProps as inputStylesProps } from "../TextInput";
export class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "colorpicker";
        this.handleChanged = this.handleChanged.bind(this);
        this.state = {
            startDate: props.input.value ?
                moment(props.input.value) : props.default ?
                moment(props.default) : null
        };
    }
    handleChanged(evt) {
        this.setState({ startDate: evt });
        return this.props.input.onChange(evt);
    }
    render() {
        const { input, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        return (React.createElement(StyledField, null,
            React.createElement(ReactDatePicker, Object.assign({ "aria-invalid": isInvalid ? 1 : 0, selected: this.state.startDate, onChange: this.handleChanged }, props)),
            React.createElement("style", null, factoryStyle)));
    }
}
DatePicker.defaultProps = Object.assign({}, defaultFieldProps);
const StyledField = css(Field)({
    display: "inline-block",
    width: "100%",
    " input[type=text]": Object.assign({}, inputStyles)
}, props => {
    return {
        " input[type=text]": inputStylesProps(props)
    };
});
