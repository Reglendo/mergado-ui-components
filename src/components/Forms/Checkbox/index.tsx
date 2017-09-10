import * as React from "react"
import styled from "styled-components"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"

export interface Props extends IFieldProps {
}

const StyledField = styled(Field)`
    & > .muk-form__group--invalid {
        border: none !important;
    }
`
const StyledInput = styled.input`
    margin-right: 5px;
    appearance: none;
    background: transparent;
    border-radius: ${props => props.theme.radius};
    width: 18px;
    height: 18px;
    position: relative;
    border: 1px solid ${props => props.theme.decoration};
    vertical-align: top !important;
    transition: border-color 0.2s;
    &:checked {
        border-color: ${props => props.theme.blue};
        background: ${props => props.theme.blue};
        & + span.muk-icon--check {
            display: inline-block;
        }
    }

    &:hover {
        border-color: ${props => props.theme.blue};
    }

    & + span.muk-icon--check {
        display: none;
        position: absolute;
        left: 2px;
        top: 2px;
        path {
            fill: white !important;
        }
    }


`

class Checkbox extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-checkbox"

    public static defaultProps: Props = {
        ...defaultFieldProps,
    }

    protected renderLabel() {
        const { input, labels } = this.props
        const label = this.props.label ? this.props.label : labels.main
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)

        return <div className={`${isInvalid ? `${form}__group--invalid` : ""}`} style={{padding: "0 2px"}} >
                    <div style={{ position: "relative", display: "inline-block", verticalAlign: "middle" }}>
                        <StyledInput
                            checked={input.value}
                            {...input}
                            type="checkbox"
                            className={`${this.name}__item ${input.className}`}
                            />
                        <IconCheck size={14} style={{position: "absolute"}} />
                    </div>
                    {label && " " }{label}
                </div>
    }

    public render() {
        return <StyledField {...this.props} name={this.name} label={this.renderLabel()} />
    }

}

export default Checkbox
