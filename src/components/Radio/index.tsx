import * as React from "react"
import {prefix} from "../../config"
import {Field, IField} from "../Field"
import RadioInput from "./input"
import InputContainer from "../Field/InputContainer"

interface IItem {
    value: string
    label: string | JSX.Element
}

interface Props extends IField {
    items: IItem[]
}

export class Radio extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-radio";

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.error !== nextProps.error ||
            this.props.value !== nextProps.value
        ) {
            return true
        }
        return false
    }


    handleChange = (evt) => {
        if(this.props.setValue) {
            this.props.setValue(evt.target.value);
        }
        if(this.props.onChange) {
            this.props.onChange(evt.target.value);
        }
    }

    public renderInputs() {
        const { value, items } = this.props
        if(!items) {
            return false
        }
        return items.map((obj: IItem) => {
            return (
                <RadioInput label={obj.label}
                            value={obj.value}
                            key={obj.value}
                            data-name={this.props.name}
                            checked={obj.value == value}
                            onChange={this.handleChange}
                />
            )
        })
    }

    public render() {
        const {children, ...props} = this.props
        return (
            <Field {...props} name={this.name}>
                <div style={{display: "table", width: "auto", tableLayout: "fixed"}}>
                    <div style={{display: "table-row"}}>
                    {this.renderInputs()}
                    </div>
                </div>
            </Field>
        )
    }

}

export default InputContainer(Radio)
