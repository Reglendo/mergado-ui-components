import * as React from "react"
import {prefix,form} from "config"
import {Field, IFieldProps, defaultFieldProps} from "components/Forms/Field"
import styled from "styled-components"
import {StyledInput} from "../TextInput"

export interface Props extends IFieldProps {
    height: number
}

const Styled = StyledInput.extend`
    height: ${props => props.height + "px"}
`

const StyledTextarea = Styled.withComponent("textarea")

class Textarea extends React.Component<Props, {}> {

    protected readonly name = prefix + "textarea";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        height: 100,
    }

    public render() {
        const { input, labels } = this.props
        const { children, ...props } = this.props
        return (
            <Field {...props} name={this.name}>
                <StyledTextarea
                    {...input}
                    height={this.props.height}
                    className={`${this.name}__input
                                ${form}__input--text
                                ${form}__input--textarea
                    `}
                    placeholder={labels.placeholder}
                >{input.value}</StyledTextarea>
            </Field>
        )
    }
}

export default Textarea
