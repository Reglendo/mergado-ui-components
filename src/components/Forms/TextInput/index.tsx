import * as React from "react"
import {prefix} from "config"
import uniqueId from "helpers/unique_id"
import {Field, IFieldProps, defaultFieldProps} from "components/Forms/Field"
import styled, {css} from "styled-components"

export interface Props extends IFieldProps {
    type?: "text" | "number" | "password" | "hidden" | "email" | "search" | "tel" | "url" | "file"
}

const StyledInput = styled.input`
    font-size: 14px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #dbcba3;
    display: block;
    width: ${props => props.type ==="search" ? "calc(100% - 22px)" : "100%"};
    text-align: left;
    outline: none;
    padding: 0 10px;
    color: #333;
    height: 40px;
    line-height: 40px;
    ${props => props.type === "file" && css`
        line-height: initial;
        padding: 8px;
        height: auto;
        &:focus {
          border-color: #85bd3c
          outline: 3px solid #85bd3c
        }
    `}

    ${props => props.disabled && css`
        color: #888;
        background: #eee;
    `}
`

class TextInput extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-text"
    public static defaultProps: Props = {
        ...defaultFieldProps,
        type: "text",
    }

    public render() {
        const { type, meta, input } = this.props
        const {children, ...props} = this.props
        const inputProps: any = this.props.input
        if(type === "file") {
            delete inputProps.value
        }

        return (
            <Field {...props} name={this.name}>
                <StyledInput
                    {...props}
                    {...inputProps}
                    placeholder={this.props.labels.placeholder}
                    ref="input"
                    className={`${this.name}__input \
                                ${this.form}__input--text \
                                ${this.form}__input--${type}
                                `}
                />
            </Field>
        )
    }
}

export default TextInput
