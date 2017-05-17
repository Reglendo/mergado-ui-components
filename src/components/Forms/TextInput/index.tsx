import * as React  from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"

export interface Props extends InputProps {
    type?: "text" | "number" | "password" | "hidden" | "email" | "search" | "tel" | "url" | "file"
    labels?: {
        main: string | JSX.Element
        placeholder: string
        invalid: string | JSX.Element
        title: string
    }
    style?: any
    addClass?: string
    id?: string
}

export interface State {
}

class TextInput extends React.Component<Props, State> {

    readonly name = prefix + "input-text";
    readonly form = prefix + "form";

    public static defaultProps: Props = {
        type: "text",
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
            main: "Text",
            placeholder: "Fill out here...",
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
        const { id, type, meta, input, addClass } = this.props
        const inputId = id?id:`${meta.form}-${input.name}`
        return (
            <div className={`${this.name} ${addClass} ${this.form}__group ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ''}`} title={this.props.labels.title} style={this.props.style}>
                {this.renderInvalid()}
                <label className={`${this.name}__label ${this.form}__label`} htmlFor={inputId}>{this.props.labels.main }</label>
                <input
                    className={`${this.name}__input ${this.form}__input--text ${this.form}__input--${type} ${meta.invalid && (meta.dirty || meta.touched) ? 'invalid' : ''}`}
                    id={inputId} type={type} placeholder={this.props.labels.placeholder}
                    ref="input"
                    {...this.props.input}
                    {...this.props.addProps}
                />
            </div>
        )
    }
}

export default TextInput