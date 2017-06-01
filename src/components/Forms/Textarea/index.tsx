import * as React from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"

export interface Props extends InputProps {
    labels?: {
        main?: string | JSX.Element,
        placeholder?: string,
        invalid?: string | JSX.Element,
        title?: string,
    }
    style?: any
    addClass?: string
    id?: string
}

export interface State {
}

class Textarea extends React.Component<Props, State> {

    private readonly name = prefix + "textarea";
    private readonly form = prefix + "form";

    public static defaultProps: Props = {
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
            main: "Text",
            placeholder: "Fill out here...",
            invalid: "Invalid input",
            title: "",
        },
    }

    public render() {
        const { id,  meta, input } = this.props
        const inputId = `${meta.form}-${input.name}`
        const addProps = Object.assign({}, this.props.addProps)
        delete addProps.addClass
        const props: any = this.props
        return (
            <Input name={this.name} {...props}>
                <InputError {...props} />
                <InputLabel name={this.name}>
                    {this.props.labels.main }
                </InputLabel>
                <textarea
                    className={`${this.name}__input ${this.form}__input--text ${this.form}__input--textarea
                                ${meta.invalid && (meta.dirty || meta.touched) ? "invalid" : ""}`}
                    id={id?id:inputId} placeholder={this.props.labels.placeholder}
                    {...input} {...addProps}
                >{input.value}</textarea>
            </Input>
        )
    }
}

export default Textarea
