import * as React from "react"
import styled, {css} from "styled-components"
import IconEye from "@reglendo/mergado-ui-icons/lib/icons/IconEye"
import IconEyeSlash from "@reglendo/mergado-ui-icons/lib/icons/IconEyeSlash"

import {prefix,form} from "../../../config"
import uniqueId from "../../../helpers/unique_id"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import theme from "../../../styled/theme"
import Button from "../../../components/Forms/Button"

export interface Props extends IFieldProps {
    type?: "text" | "number" | "password" | "hidden" | "email" | "search" | "tel" | "url" | "file"
}

interface State {
    passwordVisible: boolean
}

export const StyledInput = styled.input`
    font-size: 14px;
    box-sizing: border-box;
    background-color: #fff;
    border: ${props => { return props["aria-invalid"] ?  theme.input_border_error : theme.input_border} };
    border-radius: ${theme.radius};

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
        color: #999;
        background: #eee;
        border-color: ${theme.grey.fade(0.5)};
    `}

    transition: border-color 0.2s;
    will-change: border-color;

    &:active,&:focus {
        border: ${theme.input_border_active}
    }
`

const ButtonEye = styled(Button)`
    position: absolute;
    right: 5px;
    bottom: 5px;
`

class TextInput extends React.Component<Props, State> {

    protected readonly name = prefix + "input-text"
    public static defaultProps: Props = {
        ...defaultFieldProps,
        type: "text",
    }

    public constructor(props) {
        super(props)

        this.state = {
            passwordVisible: false,
        }
    }

    public render() {
        const { type, meta, input } = this.props
        const {children, ...props} = this.props
        const inputProps: any = this.props.input
        if(type === "file") {
            delete inputProps.value
        }
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)

        return (
            <Field {...props} name={this.name}>
                {type === "password" && this.state.passwordVisible === false &&
                    <ButtonEye icon={<IconEye />} color="nocolor" size="tiny"
                            onClick={() => this.setState({ passwordVisible: true })} />
                }
                {type === "password" && this.state.passwordVisible === true &&
                    <ButtonEye icon={<IconEyeSlash />} color="nocolor" size="tiny"
                            onClick={() => this.setState({ passwordVisible: false })} />
                }
                <StyledInput
                    {...props}
                    {...inputProps}
                    placeholder={this.props.labels.placeholder}
                    ref="input"
                    type={type === "password" && this.state.passwordVisible ? "text" : props.type}
                    aria-invalid={isInvalid ? 1 : 0}
                    className={`${this.name}__input \
                                ${form}__input--text \
                                ${form}__input--${type} \
                                ${inputProps.className} \
                                `}
                />

            </Field>
        )
    }
}

export default TextInput
