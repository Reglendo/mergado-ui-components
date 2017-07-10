import * as React from "react"
import {prefix, form} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import domOnlyProps from "helpers/dom-only-props"
import styled from "styled-components"
import * as style from "styled"

export interface IFieldProps {
    group?: {
        className?: string,
        style?: any,
        bigLabel?: boolean
        [propName: string]: any,
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
        initial?: string,
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
    [propName: string]: any,
}

export const defaultFieldProps: IFieldProps = {
        group: {
            className: "",
            style: {},
            bigLabel: false,
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

const LabelComponent = ({children, name}) => {
    if(children === "" || children === null) {
        return null
    }

    return (
            <label className={`${name}__label ${form}__label`}>
                {children}
            </label>
        )
}

export const FieldLabel = styled(LabelComponent)`
    display: block;
    padding: 6px 10px 4px 2px;
`

const FieldErrorComponent = ({...props}) => {
        if((props.meta.error || props.labels.invalid) &&
            props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
            return (
                <div className={`${props.className}`}>
                    {props.meta.error || props.labels.invalid}
                </div>
            )
        } else {
            return null
        }
}

export const FieldError = styled(FieldErrorComponent)`
    background: ${style.RED};
    color: white;
    font-size: 12px;
    z-index: 1;
    padding: 1px 5px;
    position: absolute;
    top: 100%;
    left: -2px;
`
const FieldComponent: React.SFC<IFieldProps> = (props) => {

    const { meta, input, labels, group, ...others } = props
    const isInvalid = props.meta.invalid && (props.meta.dirty || props.meta.touched)
    return (
        <div
            {...domOnlyProps(props)}
            className={`${props.name ? props.name : ""}
                        ${props.className ? props.className : ""}
                        ${props.disabled ? props.name + `--disabled` : ""}
                        ${props.required ? props.name + `--required` : ""}
                        ${form}__group
                        ${isInvalid ? `${form}__group--invalid` : ""}
                        `}
            title={props.labels.title}
            style={props.style}>
                <FieldError {...props} className={`${form}__validation}`} />
                <FieldLabel name={props.name}>
                    {props.label ? props.label : (others.label ? others.label : labels.main)}
                </FieldLabel>
                {props.children}
        </div>
    )
}

FieldComponent.defaultProps = defaultFieldProps

export const Field = styled(FieldComponent)`
    position: relative;
    margin-bottom: 10px;
    border: 2px solid;
    border-color: ${(props) => props.meta && props.meta.invalid &&
                    (props.meta.dirty || props.meta.touched) ? style.RED : "transparent" }
`
