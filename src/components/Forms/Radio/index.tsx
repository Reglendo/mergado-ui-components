import * as React from "react"
import glamorous from "glamorous"

import {prefix} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import RadioInput from "./input"

interface IItem {
    value: string
    label: string | JSX.Element
}

export interface Props extends IFieldProps {
    items: IItem[]
}

class Radio extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-radio";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        items: [],
    }

    public renderInputs() {
        const { input, meta, labels } = this.props
        return this.props.items.map((obj: IItem) => {
            return (
                <RadioInput name={this.name} label={obj.label}
                            value={obj.value}
                            key={obj.value}
                            checked={obj.value == input.value}
                            onChange={input.onChange}
                />
            )
        })
    }

    public render() {
        const {children, ...props} = this.props
        return (
            <Field {...props} name={this.name}>
                {this.renderInputs()}
            </Field>
        )
    }

}

export default Radio
