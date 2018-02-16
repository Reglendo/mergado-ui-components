import * as React from "react"
import * as InputColor from "react-input-color"
import css from "@reglendo/cxs/component"
import debounce from "lodash/debounce"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {Input} from "light-form/dist/es"
import ReactDatePicker from "react-datepicker/es"
import moment from "moment-mini"
import {style as factoryStyle} from "./style"

import {styles as inputStyles, stylesProps as inputStylesProps} from "../TextInput"

export interface Props extends IFieldProps {

}


export interface State {
    startDate: any

}

class DatePicker extends React.Component<Props, State> {

    protected readonly name = prefix + "colorpicker"

    public static defaultProps: Props = {
        ...defaultFieldProps,
    }

    constructor(props) {
        super(props)
        this.handleChanged = this.handleChanged.bind(this);

        this.state = {
            startDate: props.input.value ?
                            moment(props.input.value) : props.default ?
                            moment(props.default) : null
        }

    }

    protected handleChanged(evt) {
        this.setState({ startDate: evt })
        return this.props.input.onChange(evt)
    }

    public render() {
        const { input, meta } = this.props
        const { children, ...props} = this.props
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        return(
            <StyledField>
                <ReactDatePicker
                    aria-invalid={isInvalid ? 1 : 0}
                    selected={this.state.startDate}
                    onChange={this.handleChanged}
                    {...props}
                />
                <style>
                    {factoryStyle}
                </style>
            </StyledField>
        )
    }
}

const StyledField = css(Field)({
    display: "inline-block",
    width: "100%",

    " input[type=text]": {
        ...inputStyles
    }
}, props => {
    return {
    " input[type=text]": inputStylesProps(props)
}})

export default DatePicker
