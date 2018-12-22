import * as React from "react"
import css from "@reglendo/cxs/component"
import {prefix,form} from "../../config"
import {Field, IField} from "../Field"
import {styles,stylesProps} from "../TextInput"
import InputContainer from "../Field/InputContainer"

export interface Props extends IField {
    height: number
}

export class Textarea extends React.PureComponent<Props, {}> {

    protected readonly name = prefix + "textarea";

    handleChange = (e) => {
        if(this.props.setValue) {
            this.props.setValue(e.target.value)
        } else
        if(this.props.onChange) {
            this.props.onChange(e.target.value)
        }
    }

    public render() {
        const { name, label, setValue, invalid, height, children, ...props } = this.props
        return (
            <Field {...this.props} name={this.name}>
                <StyledTextarea
                    {...props}
                    height={height || '100'}
                    aria-invalid={invalid ? 1 : 0}
                    className={`${this.name}__input
                                ${form}__input--text
                                ${form}__input--textarea
                    `}
                    onChange={this.handleChange}
                />
            </Field>
        )
    }
}

const StyledTextarea = css("textarea")(styles, stylesProps)

export default InputContainer(Textarea)
