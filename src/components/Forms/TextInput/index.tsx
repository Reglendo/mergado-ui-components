import * as React from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"

export interface Props extends InputProps {
    type?: "text" | "number" | "password" | "hidden" | "email" | "search" | "tel" | "url" | "file"
    labels?: {
        main: string | JSX.Element,
        placeholder: string,
        invalid: string | JSX.Element,
        title: string,
    }
    style?: any
    addClass?: string
    id?: string
}

export interface State {
}

class TextInput extends React.Component<Props, State> {

    private readonly name = prefix + "input-text";
    private readonly form = prefix + "form";

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
            value: "",
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
            warning: "",
        },
        labels: {
            main: "",
            placeholder: "",
            invalid: "",
            title: "",
        },
    }

    protected renderInvalid() {
        if(this.props.meta.error && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (
                <div className={`${this.form}__validation`}>
                    {this.props.meta.error}
                </div>
            )
        }
    }

    public render() {
        const { id, type, meta, input, addClass } = this.props
        const inputId = id?id:`${meta.form}-${input.name}`
        const addProps = Object.assign({}, this.props.addProps)
        delete addProps.addClass
        return (
            <div className={`${this.name} ${addClass} ${this.form}__group
                            ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ""}`}
                            title={this.props.labels.title} style={this.props.style}>
                {this.renderInvalid()}
                {this.props.labels.main &&
                    <label className={`${this.name}__label ${this.form}__label`} htmlFor={inputId}>
                        {this.props.labels.main}
                    </label>
                }
                <input
                    id={inputId} type={type} placeholder={this.props.labels.placeholder}
                    ref="input"
                    {...this.props.input}
                    {...addProps}
                    className={`${this.name}__input ${this.form}__input--text ${this.form}__input--${type}
                                ${meta.invalid && (meta.dirty || meta.touched) ? "invalid" : ""}
                                ${this.props.addProps?this.props.addProps.addClass:""}`}
                />
            </div>
        )
    }
}

export default TextInput
