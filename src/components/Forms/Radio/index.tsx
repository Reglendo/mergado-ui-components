import * as React  from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"

export interface Props extends InputProps {
    disabled?: boolean
    required?: boolean
    style?: any
    addClass?: string
    id?: string

    labels?: {
        main?: string | JSX.Element
        invalid?: string | JSX.Element
        title?: string
    }
}

export interface State {
}

class Radio extends React.Component<Props, State> {

    readonly name = prefix + "input-checkbox";
    readonly form = prefix + "form";

    public static defaultProps: Props = {
        disabled: false,
        required: false,
        style: null,
        addClass: "",
        id: "",
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
        if(this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (
                <div className={`${this.form}__validation`}>
                    {this.props.labels.invalid}
                </div>
            )
        }
    }

    render() {
        const { disabled, required, addClass, style, input, id, meta } = this.props
        const inputId = `${this.props.meta.form}-${input.name}`
        return (
            <div className={`${this.name}
                             ${disabled && this.name+`--`+disabled}
                             ${required && this.name+`--`+required}
                             ${addClass?addClass:``}
                             ${this.form}__group
                             ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ''}
                         `} title={this.props.labels.title} style={style}>
                {this.renderInvalid()}
                <label className={`${this.name}__label ${this.form}__label`}>
                    <input className={`${this.name}__item`} id={id?id:inputId} type="radio" required={!!required} disabled={!!disabled} 
                        {...this.props.input} {...this.props.addProps}/> {this.props.labels.main }
                </label>
            </div>
        )
    }
}

export default Radio