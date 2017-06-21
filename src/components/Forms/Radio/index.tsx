import * as React from "react"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

interface Item {
    value: string
    label: string | JSX.Element
}

export interface Props extends MUK.Props {
    items: Item[]
}

export interface State {
}

class Radio extends MUK.InputComponent<Props, State> {

    protected readonly name = prefix + "input-radio";
    public readonly props: Props
    public state: State
    public static defaultProps: Props = {
        ...MUK.defaultProps,
        items: [],
    }

    public renderInputs(className, props) {
        const { input, meta, labels } = this.props
        return this.props.items.map((obj) => {
            return (
                <label className={`${this.name}__item`} key={obj.value}>
                        <input
                            value={obj.value}
                            checked={obj.value == this.props.input.value}
                            onChange={input.onChange}
                            className={`${this.name}__input ${className}`}
                            type="radio"
                            />
                        &nbsp;{obj.label}
                </label>
            )
        })
    }

    public renderInput(className, props) {
        const { input, meta, labels } = this.props
        return this.renderInputs(className, props)
    }

}

export default Radio
