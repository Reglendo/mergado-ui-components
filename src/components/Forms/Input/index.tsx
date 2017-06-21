import * as React from "react"
import { form } from "config"
import domOnlyProps from "helpers/dom-only-props"

export const Input = ({group: {...addProps}, ...props}) => {
    return (
    <div
        {...domOnlyProps(addProps)}
        className={`${props.name} \
${props.disabled ? props.name+`--disabled` : ""} \
${props.required ? props.name+`--required` : ""} \
${addProps.className ? addProps.className : ""} \
${form}__group \
${props.meta.invalid && (props.meta.dirty || props.meta.touched) ? `${form}__group--invalid` : ""}\
`}
        title={props.labels.title} style={props.style}>
            {props.children}
    </div>
)}

export const InputLabel = ({children, name}) => {
    if(children === "") {
        return null
    }

    return (
            <label className={`${name}__label ${form}__label`}>
                {children}
            </label>
        )
}

export const InputError = ({...props}) => {
        if((props.meta.error || props.labels.invalid) &&
            props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
            return (
                <div className={`${form}__validation`}>
                    {props.meta.error || props.labels.invalid}
                </div>
            )
        } else {
            return null
        }
}
