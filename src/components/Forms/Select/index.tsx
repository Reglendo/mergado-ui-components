import * as React from "react"
import {prefix} from "config"
import uniqueId from "helpers/unique_id"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

export interface Props extends MUK.Props {
    options?: any
}

export interface State {
}

class Select extends MUK.InputComponent<Props, State> {
    public readonly props: Props;
    public state: State;
    protected readonly name = prefix + "select";

    public static defaultProps: Props = {
        ...MUK.defaultProps,
        options: [],
        size: 0,
    }

    protected renderOptions() {
        return this.props.options.map( option => {
            if(React.isValidElement(option)) {
                if(option.key) {
                    return option;
                } else {
                    const object: any = Object
                    return object.assign({}, option, { key: uniqueId() })
                }
            } else {
                return(<option value={option.value} key={uniqueId()}>{option.title}</option>)
            }
        })
    }

    protected renderInput(className, props) {
        const { meta, input, labels } = this.props
        delete props.options
        return (
            <select
                {...input}
                className={`${this.name}__item ${className}`}
            >
                {this.renderOptions()}
            </select>
        )
    }

}

export default Select
