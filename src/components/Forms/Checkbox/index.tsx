import * as React  from "react"
import InputProps from "../default_props"
import {prefix} from "../../../config"

export interface Props extends InputProps {
    disabled?: boolean
    required?: boolean
    style?: any
    addClass?: string
    labels?: {
        main?: string | JSX.Element
        invalid?: string | JSX.Element
        title?: string
    }
}

export interface State {
}

class Checkbox extends React.Component<Props, State> {

    readonly name = prefix + "input-checkbox";
    readonly form = prefix + "form";

    public static defaultProps: Props = {
        disabled: false,
        required: false,
        style: null,
        addClass: null,
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
            value: ""
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
            main: null,
            invalid: "Invalid input",
            title: ""
        }
    }

    renderInvalid() {
        return (
            <div className="form-validation-box">
                {this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""}
            </div>
        )
    }

    render() {
        const { disabled, required, addClass, style, input } = this.props
        const inputId = `${this.props.meta.form}-${input.name}`
        return (
            <div className={`${this.name} ${disabled && this.name+`--`+disabled}  ${required && this.name+`--`+required} ${addClass?addClass:``} ${this.form}__group `} title={this.props.labels.title} style={style}>
                <label className={`${this.name}__label ${this.form}__label`}>
                    <input className={`${this.name}__item`} id={inputId} type="checkbox"  name={input.name} value={input.value} required={!!required} disabled={!!disabled} /> {this.props.labels.main }
                </label>
            </div>
        )
    }
}

export default Checkbox