import * as React from "react"
import glamorous from "glamorous"
import css from "cxs/component"
import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {styles,stylesProps} from "../TextInput"

export interface Props extends IFieldProps {
    height: number
}

const StyledTextarea = css("textarea")(styles, stylesProps)

class Textarea extends React.Component<Props, {}> {

    protected readonly name = prefix + "textarea";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        height: 100,
    }

    public render() {
        const { input, labels, meta } = this.props
        const { children, ...props } = this.props
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        return (
            <Field {...props} name={this.name}>
                <StyledTextarea
                    {...input}
                    height={this.props.height}
                    aria-invalid={isInvalid ? 1 : 0}
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
