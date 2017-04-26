import * as React  from "react"
import InputProps from "../default_props"
import {prefix} from "../../../config"

export interface Props extends InputProps {
    labels?: {
        main: string | JSX.Element
        placeholder: string
        invalid: string | JSX.Element
        title: string
    }
    style?: any
}

export interface State {
}

class TextInput extends React.Component<Props, State> {

    readonly name = prefix + "input-text";
    readonly form = prefix + "form";

    public static defaultProps: Props = {
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
        return (
            <div
                className="form-validation-box">{this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""}</div>
        )
    }

    render() {
        const inputId = `${this.props.meta.form}-${this.props.input.name}`
        return (
            <div className={`${this.name} ${this.form}__group`} title={this.props.labels.title} style={this.props.style}>
                {this.renderInvalid()}
                <label className={`${this.name}__label ${this.form}__label`} htmlFor={inputId}>{this.props.labels.main }</label>
                <input
                    className={`${this.name}__input ${this.form}__input--text ${this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? 'invalid' : ''}`}
                    id={inputId} type="text" placeholder={this.props.labels.placeholder}
                    {...this.props.input} />
            </div>
        )
    }
}

export default TextInput