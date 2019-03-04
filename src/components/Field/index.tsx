import * as React from "react"
import css from "css"
import {form} from "../../config"
import FieldLabel from "../FieldLabel"
import FieldError from "../FieldError"
import Theme from "components/Theme"

export interface IField {
    name?: string
    value?: string
    invalid?: boolean
    error?: string
    style?: any
    className?: string
    id?: string
    checked?: boolean

    label?: string | JSX.Element
    placeholder?: string
    title?: string
    bigLabel?: boolean

    readOnly?: boolean
    disabled?: boolean
    required?: boolean

    onChange?: (evt) => void
    onClick?: (evt) => void
    onClear?: () => void
    setValue?: (value) => void
    formatter?: (value) => any

    renderError?: () => any
}

export interface IFieldProps {
    group?: {
        className?: string,
        style?: any,
        bigLabel?: boolean,
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
        [propName: string]: any,
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
    className?: string
    [propName: string]: any,
}

export const defaultFieldProps: IFieldProps = {

}

export const Field: React.SFC<IField> = (props) => {
    const { style, error, renderError, ...others } = props
    const isInvalid = props.invalid || error
    return (
        <FieldWrapper className={`${form}-group ${props.name ? "m-field-" + props.name : ""} ${props.disabled ? "disabled" : ""} ${props.required ? "required" : ""}  ${props.className || ""}`}
            title={props.title}
            name={props.name}
            style={style}>
                <FieldError error={error} className={`${form}__validation`} />
                {props.label &&
                    <FieldLabel name={props.name} bigLabel={props.bigLabel}>
                        {props.label}
                    </FieldLabel>
                }
                <div className={`m-isinvalid ${isInvalid ? `m-invalid` : ""}`}>
                    {props.children}
                </div>
        </FieldWrapper>
    )
}

const FieldWrapper = css("div")({
    position: "relative",
},(props: any) => {
    let styles = {}
    if(props.name) {
        styles = {
            marginBottom: "30px",
            paddingRight: "10px",
        }
    }

    return {
        ...styles,
        "& .m-isinvalid": {
            borderRadius: `${parseInt(Theme.radius,10)+2}px`,
            border: `2px solid transparent`,
        },

        "& .m-isinvalid.m-invalid": {
            borderColor: `${Theme.red}`,
        },
    }
})

export default Field
