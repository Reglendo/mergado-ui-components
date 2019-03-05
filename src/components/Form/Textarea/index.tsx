import * as React from "react"
import css from "../../../css"
import {Field, IField} from "../Field"
import {styles,stylesProps} from "../TextInput"
import InputContainer from "../Field/InputContainer"

export interface Props extends IField {
    height: number
}

export class Textarea extends React.Component<Props, {}> {

    protected readonly name = "muk-textarea";

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.error !== nextProps.error ||
            this.props.value !== nextProps.value
        ) {
            return true
        }
        return false
    }


    handleChange = (e) => {
        if(this.props.setValue) {
            this.props.setValue(e.target.value)
        }
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
                    data-name={name}
                    height={height || 100}
                    aria-invalid={invalid || this.props.error ? 1 : 0}
                    className={`${this.name}__input
                                muk-form__input--text
                                muk-form__input--textarea
                    `}
                    onChange={this.handleChange}
                />
            </Field>
        )
    }
}

const StyledTextarea = css("textarea")(styles, (props) => {
    const styles = stylesProps(props)
    return {
        ...styles,
        height: `${props.height}px`
    }
})

export default InputContainer(Textarea)
