import * as React from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"

export interface Props extends InputProps {
    disabled?: boolean
    required?: boolean
    style?: any
    addClass?: string
    id?: string
    labels?: {
        main?: string | JSX.Element,
        invalid?: string | JSX.Element,
        title?: string,
    }
}

export interface State {
}

class Checkbox extends React.Component<Props, State> {

    private readonly name = prefix + "input-checkbox";
    private readonly form = prefix + "form";

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
            main: null,
            invalid: "Invalid input",
            title: "",
        },
    }

    public render() {
        const { disabled, required, input, id, meta, labels } = this.props
        const inputId = `${this.props.meta.form}-${input.name}`
        const addProps = Object.assign({}, this.props.addProps)
        delete addProps.addClass
        const props: any = this.props
        return (
            <Input name={this.name} {...props}>
                <InputError {...props} />
                <InputLabel name={this.name}>
                    <input className={`${this.name}__item`} id={id?id:inputId} type="checkbox"
                        required={!!required} disabled={!!disabled}
                        {...this.props.input} {...addProps} /> {this.props.labels.main }
                </InputLabel>
            </Input>
        )
    }
}

export default Checkbox
