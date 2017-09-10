import * as React from "react"
import styled from "styled-components"

import {prefix, form} from "../../../config"
import domOnlyProps from "../../../helpers/dom-only-props"
import * as style from "../../../styled"

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

const BigLabel = styled.h3`
    padding-left: 10px;
    border-left: 5px solid hsla(43,44%,75%,.5);
    font-size: 1.2em;
    margin: 10px 0;
`

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

export const FieldLabel = styled(LabelComponent)`
    display: inline-block;
    padding: 6px 10px 2px 2px;
    font-size: ${props => props.theme.form_label_text_size};
    font-weight: ${props => props.theme.form_label_text_weight};
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
    background: ${props => props.theme.red};
    color: white;
    font-size: 12px;
    z-index: 1;
    padding: 1px 5px;
    position: absolute;
    top: 100%;
    left: ${props => props.theme.radius};
`
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
                <FieldLabel name={props.name} bigLabel={group.bigLabel}>
                    {props.label ? props.label : (others.label ? others.label : labels.main)}
                </FieldLabel>
                <div className={`\
                    ${isInvalid ? `${form}__group--invalid` : ""}\
                `}>
                    {props.children}
                </div>
        </div>
    )
}

FieldComponent.defaultProps = defaultFieldProps

export const Field = styled(FieldComponent)`
    position: relative;
    padding: 2px;
    margin-bottom: 15px;
    .${form}__group--invalid {
        margin: -2px;
        border-radius: ${(props) => { return (parseInt(props.theme.radius,10) + 2) + "px" }};
        border: 1px solid ${(props) => props.theme.red};
    }
`
