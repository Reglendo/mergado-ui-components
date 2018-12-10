import * as React from "react"
import css from "@reglendo/cxs/component"
import {prefix,form} from "../../config"
import {Field, IField} from "../Field"
import {styles,stylesProps} from "../TextInput"
import {TextArea as LightTextarea} from "light-form/dist/es"

export interface Props extends IField {
    height: number
}

const StyledTextarea = css(LightTextarea)(styles, stylesProps)

class Textarea extends React.PureComponent<Props, {}> {

    protected readonly name = prefix + "textarea";

    public render() {
        const { label, value, onChange, invalid, height, ...props } = this.props

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
                >{value}</StyledTextarea>
            </Field>
        )
    }
}

export default Textarea
