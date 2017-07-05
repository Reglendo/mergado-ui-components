import * as React from "react"
import { form } from "config"
import domOnlyProps from "helpers/dom-only-props"
import styled from "styled-components"
import * as style from "styled"

const StyledInput = styled.div`
    position: relative;
    margin-bottom: 10px;
    border: 2px solid;
    border-color: ${(props: any) => props["data-invalid"] ? style.RED : "transparent" }
`
const StyledLabel = styled.label`
    display: block;
    padding: 6px 10px 4px 2px;
`

const StyledError = styled.div`
    background: ${style.RED};
    color: white;
    font-size: 12px;
    z-index: 1;
    padding: 1px 5px;
    position: absolute;
    top: 100%;
    left: -2px;
`

export const Input = ({group: {...addProps}, ...props}) => {
    return (
    <StyledInput
        {...domOnlyProps(addProps)}
        data-invalid={props.meta.invalid && (props.meta.dirty || props.meta.touched)}
        className={`${props.name} \
${props.className} \
${props.disabled ? props.name+`--disabled` : ""} \
${props.required ? props.name+`--required` : ""} \
${form}__group \
${props.meta.invalid && (props.meta.dirty || props.meta.touched) ? `${form}__group--invalid` : ""}\
`}
        title={props.labels.title} style={props.style}>
            {props.children}
    </StyledInput>
)}

export const InputLabel = ({children, name}) => {
    if(children === "" || children === null) {
        return null
    }

    return (
            <StyledLabel className={`${name}__label ${form}__label`}>
                {children}
            </StyledLabel>
        )
}

export const InputError = ({...props}) => {
        if((props.meta.error || props.labels.invalid) &&
            props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
            return (
                <StyledError className={`${form}__validation`}>
                    {props.meta.error || props.labels.invalid}
                </StyledError>
            )
        } else {
            return null
        }
}
