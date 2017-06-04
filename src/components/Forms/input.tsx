import * as React from "react"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"

export interface Props {
    group?: {
        className?: string,
    },
    input?: {
        className?: string,
        name?: string,
        value?: any,
        checked?: boolean,
        onBlur?: (value: any) => void,
        onChange?: (value: any) => void,
        onDragStart?: (value: any) => void,
        onDrop?: (value: any) => void,
        onFocus?: (value: any) => void,
        onKeyDown?: (value: any) => void,
        onKeyUp?: (value: any) => void,
        onClick?: (value: any) => void,
    }
    meta?: {
        active: boolean,
        autofilled: boolean,
        asyncValidating: boolean,
        dirty: boolean,
        dispatch: () => void,
        error: string,
        form: string,
        invalid: boolean,
        pristine: boolean,
        submitting: boolean,
        submitFailed: boolean,
        touched: boolean,
        valid: boolean,
        visited: boolean,
        warning: string,
    }
    labels?: {
        main?: string | JSX.Element,
        invalid?: string | JSX.Element,
        title?: string,
        placeholder?: string,
    }
}

export interface State {
}

export const defaultProps: Props = {
        group: {
            className: "",
        },
        input: {
            className: "",
            name: "",
            value: "",
            checked: false,
            onBlur: (value: any) => {},
            onChange: (value: any) => {},
            onDragStart: (value: any) => {},
            onDrop: (value: any) => {},
            onFocus: (value: any) => {},
            onKeyDown: (value: any) => {},
            onKeyUp: (value: any) => {},
            onClick: (value: any) => {},
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
            invalid: "",
            title: "",
            placeholder: "",
        },
}

export class InputComponent<P,S> extends React.Component<Props, State> {

    protected readonly form = prefix + "form";
    protected readonly name = prefix + "input";

    public static defaultProps: Props = defaultProps

    protected renderError() {
        return <InputError {...this.props} />
    }

    protected renderInput(className: string, props: any) {
        return
    }
    protected renderLabel(className: string, props: any) {
        return
    }

    public render() {
        const props: any = this.props
        const { meta, input, labels, group, ...others } = props
        const inputProps: Props = {id: this.props.meta.form?`${this.props.meta.form}-${input.name}` : "", ...others }
        return (
            <Input name={this.name} {...props}>
                {this.renderError()}
                <InputLabel name={this.name}>
                    {this.renderLabel(input ? input.className : "", inputProps)}
                </InputLabel>
                {this.renderInput(input ? input.className : "", inputProps)}
            </Input>
        )
    }
}
