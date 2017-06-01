import * as React from "react"
import InputProps from "components/Forms/default_props"
import {prefix} from "config"
import uniqueId from "helpers/unique_id"
import {Input, InputLabel, InputError} from "components/Forms/Input"

export interface Props extends InputProps {
    options?: any
    multiple?: boolean
    disabled?: boolean
    required?: boolean
    size?: number

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

class Select extends React.Component<Props, State> {

    private readonly name = prefix + "select";
    private readonly form = prefix + "form";

    public static defaultProps: Props = {
        options: [],
        multiple: false,
        disabled: false,
        required: false,
        size: 0,
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

    protected renderInvalid() {
        if(this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (
                <div className={`${this.form}__validation`}>
                    {this.props.labels.invalid}
                </div>
            )
        }
    }

    protected renderOptions() {
        return this.props.options.map( option => {
            if(React.isValidElement(option)) {
                if(option.key) {
                    return option;
                } else {
                    const object: any = Object
                    return object.assign({}, option, { key: uniqueId() })
                }
            } else {
                return(<option value={option.value} key={uniqueId()}>{option.title}</option>)
            }
        })
    }

    public render() {
        const { multiple, disabled,required, size, addClass, style, id, meta, input } = this.props
        const inputId = `${this.props.meta.form}-${this.props.input.name}`
        const addProps = Object.assign({}, this.props.addProps)
        delete addProps.addClass
        const props: any = this.props
        return (
            <Input name={this.name} {...props}>
                <InputError {...props} />
                <InputLabel name={this.name}>
                    {this.props.labels.main }
                </InputLabel>
                <select className={`${this.name}__item`} id={id?id:inputId}
                    multiple={!!multiple} disabled={!!disabled}
                    required={!!required} size={size} {...input} {...addProps}>
                        {this.renderOptions()}
                </select>
            </Input>
        )
    }
}

export default Select
