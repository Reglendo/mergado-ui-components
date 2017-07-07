import * as React from "react"
import {prefix} from "config"
import {Field, IFieldProps, defaultFieldProps} from "components/Forms/Field"
import styled from "styled-components"

export interface Props extends IFieldProps {
}

const StyledField = styled(Field)`
`

class Checkbox extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-checkbox"

    public static defaultProps: Props = {
        ...defaultFieldProps,
    }

    protected renderLabel() {
        const { input, labels } = this.props
        const label = this.props.label ? this.props.label : labels.main
        return  <span>
                    <input
                        checked={input.value}
                        {...input}
                        type="checkbox"
                        className={`${this.name}__item`}
                        />
                    {label && " " }{label}
                </span>
    }

    public render() {
        return <StyledField {...this.props} name={this.name} label={this.renderLabel()} />
    }

}

export default Checkbox
