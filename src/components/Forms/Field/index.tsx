import * as React from "react"
import glamorous from "glamorous"

import {prefix, form} from "../../../config"
import domOnlyProps from "../../../helpers/dom-only-props"

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

const BigLabel = glamorous.h3({
    paddingLeft: "10px",
    borderLeft: "5px solid hsla(43,44%,75%,.5)",
    fontSize: "1.2em",
    margin: "10px 0",
})

const LabelComponent = ({children, name, bigLabel, className = ""}) => {
    if(children === "" || children === null) {
        return null
    }

    return (
            <label className={`${name}__label ${form}__label ${className}`}>
                {bigLabel ? <BigLabel>{children}</BigLabel> : children }
            </label>
        )
}

export const FieldLabel = glamorous(LabelComponent)({
    display: "inline-block",
    padding: "5px 0",
}, (props: any) => {
    const theme: any = props.theme
    return {
        fontSize: theme.form_label_text_size,
        fontWeight: theme.form_label_text_weight,
    }
})

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

export const FieldError = glamorous(FieldErrorComponent)({
    color: "white",
    fontSize: "12px",
    zIndex: 1,
    padding: "1px 5px",
    position: "absolute",
    top: "100%",
},(props: any) => {
    const theme: any = props.theme
    return {
        left: theme.radius,
        background: theme.red,
    }
})

const FieldComponent: React.SFC<IFieldProps> = (props) => {

    const { meta, input, labels, group, ...others } = props
    const isInvalid = props.meta.invalid && (props.meta.dirty || props.meta.touched)
    return (
        <div
            {...domOnlyProps(group)}
            className={`${props.name ? props.name : ""}
                        ${props.className ? props.className : ""}
                        ${props.disabled ? props.name + `--disabled` : ""}
                        ${props.required ? props.name + `--required` : ""}
                        ${form}__group
                        `}
            title={props.labels.title}
            style={props.style}>
                <FieldError {...props} className={`${form}__validation`} />
                {(props.label || others.label || labels.main) &&
                    <FieldLabel name={props.name} bigLabel={group.bigLabel}>
                        {props.label ? props.label : (others.label ? others.label : labels.main)}
                    </FieldLabel>
                }
                <div className={`\
                    ${isInvalid ? `${form}__group--invalid` : ""}\
                `}>
                    {props.children}
                </div>
        </div>
    )
}

FieldComponent.defaultProps = defaultFieldProps

export const Field = glamorous(FieldComponent)({
    position: "relative",
},(props: any) => {
    const theme: any = props.theme
    const styles = []
    if((props.input && props.input.name)) {
        styles.push({
            marginBottom: "20px",
            paddingRight: "10px",
        })
    } 

    return [...styles,{
        "& .muk-form__group--invalid": {
            borderRadius: `${parseInt(theme.radius,10) + 2}px`,
            border: `1px solid ${theme.red}`,
        },
    }]
})
