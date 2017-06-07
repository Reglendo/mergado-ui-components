import * as React from "react"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

export interface Props extends MUK.Props {
}

export interface State {
}

class Radio extends MUK.InputComponent<Props, State> {

    protected readonly name = prefix + "input-checkbox";
    public readonly props: Props
    public state: State
    public static defaultProps: Props = {
        ...MUK.defaultProps,
    }

    public renderLabel(className, props) {
        const { input, meta, labels } = this.props
        return (<span>
                    <input
                        {...input}
                        className={`${this.name}__item ${className}`}
                        type="radio"
                        />
                    &nbsp;{this.props.labels.main }
                </span>
            )
    }

}

export default Radio
