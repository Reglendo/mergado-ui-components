import * as React from "react"
import { form } from "config"

export const Input = ({...props}) => (
    <div className={`${props.name}
                     ${props.disabled ? this.name+`--`+ props.disabled : ""}
                     ${props.required ? this.name+`--`+props.required : ""}
                     ${props.addClass?props.addClass:``}
                     ${form}__group
                     ${props.meta.invalid && (props.meta.dirty || props.meta.touched) ? `${form}__group--invalid` : ""}
                 `}
         title={props.labels.title} style={props.style}>
            {props.children}
    </div>
)

export const InputLabel = ({children, name}) => {
    if(children === "") {
        return null
    }
    return (
            <label className={`${name}__label ${form}__label ${form}__input`}>
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
