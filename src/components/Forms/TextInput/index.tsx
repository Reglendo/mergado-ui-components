import * as React from "react"
import {prefix} from "config"
import uniqueId from "helpers/unique_id"
import * as MUK from "components/Forms/input"

export interface Props extends MUK.Props {
    type?: "text" | "number" | "password" | "hidden" | "email" | "search" | "tel" | "url" | "file"
}

export interface State {
}

class TextInput extends MUK.InputComponent<Props, State> {
    public readonly props: Props
    public state: State
    protected readonly name = prefix + "input-text"
    public static defaultProps: Props = {
        ...MUK.defaultProps,
        type: "text",
    }

    protected renderLabel() {
        return this.props.labels.main
    }
    protected renderInput(className, props) {
        const { type, meta, input } = this.props
        const inputProps: any = this.props.input
        if(type === "file") {
            delete inputProps.value
        }

        return (
            <input
                {...input}
                {...props}
                placeholder={this.props.labels.placeholder}
                ref="input"
                className={`${this.name}__input \
${this.form}__input--text \
${this.form}__input--${type} \
${className}`}
            />
        )
    }
}

export default TextInput
