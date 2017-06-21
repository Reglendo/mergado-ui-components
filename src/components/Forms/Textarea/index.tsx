import * as React from "react"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

export interface Props extends MUK.Props {
}

export interface State {
}

class Textarea extends MUK.InputComponent<Props, State> {

    protected readonly name = prefix + "textarea";

    public static defaultProps: Props = {
        ...MUK.defaultProps,
    }

    protected renderInput(className, props) {
        const { input, labels } = this.props
        return (
            <textarea
                {...input}
                className={`${this.name}__input
                            ${this.form}__input--text
                            ${this.form}__input--textarea
                            ${className}
                `}
                placeholder={labels.placeholder}
            >{input.value}</textarea>
        )
    }
}

export default Textarea
