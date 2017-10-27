import * as React from "react"

import {prefix} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import RadioInput from "./input"

interface IItem {
    value: string
    label: string | JSX.Element
}

export interface Props extends IFieldProps {
    items: IItem[]
    bigButtons?: boolean
}

class Radio extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-radio";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        bigButtons: false,
        items: [],
    }

    public renderInputs() {
        const { input, meta, labels, bigButtons, hideInput } = this.props
        return this.props.items.map((obj: IItem) => {
            return (
                <RadioInput name={this.props.name} label={obj.label}
                            value={obj.value}
                            key={obj.value}
                            checked={obj.value == input.value}
                            onChange={input.onChange}
                            bigButtons={bigButtons}
                            hideInput={hideInput}
                />
            )
        })
    }

    public render() {
        const {children, ...props} = this.props
        return (
            <Field {...props} name={this.name}>
                <div style={{display: "table", width: this.props.bigButtons ? "100%": "auto", tableLayout: "fixed"}}>
                    <div style={{display: "table-row"}}>
                    {this.renderInputs()}
                    </div>
                </div>
            </Field>
        )
    }

}

export default Radio
