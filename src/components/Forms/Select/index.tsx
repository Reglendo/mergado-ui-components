import * as React from "react"
import styled from "styled-components"

import {prefix} from "../../../config"
import uniqueId from "../../../helpers/unique_id"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"

export interface Props extends IFieldProps {
    options?: any
}

const StyledSelect = styled.select`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    line-height: 40px;
    outline: none;
    display: inline-block;
    margin: 0;
    background: white;
    color: #333333;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #dbcba3;
`

class Select extends React.Component<Props, {}> {

    protected readonly name = prefix + "select";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        options: [],
        size: 0,
    }

    protected renderOptions() {
        return this.props.options.map( option => {
            if(React.isValidElement(option)) {
                if(option.key) {
                    return option;
                } else {
                    const object: any = Object
                    return object.assign({}, option, { key: uniqueId() })
                }
            } else {
                return(<option value={option.value} key={uniqueId()}>{option.title}</option>)
            }
        })
    }

    public render() {
        const { meta, input, labels } = this.props
        const { children, ...props } = this.props
        return (
            <Field {...props} name={this.name}>
                <StyledSelect {...input} className={`${this.name}__item ${this.props.className}`}>
                    {this.renderOptions()}
                </StyledSelect>
            </Field>
        )
    }

}

export default Select
