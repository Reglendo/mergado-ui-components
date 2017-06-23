import * as React from "react"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

export interface Props extends MUK.Props {
}

export interface State {
}

class FormGroup extends MUK.InputComponent<Props, State> {

    protected readonly name = prefix + "form-group"
    public readonly props: Props
    public state: State

    public static defaultProps: Props = {
        ...MUK.defaultProps,
    }

    protected renderInput() {
        return this.props.children
    }
}

export default FormGroup
