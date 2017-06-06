import * as React from "react"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

export interface Props extends MUK.Props {
    max: number
    min: number
    step: number
}

export interface State {
    value: any
}

class Range extends MUK.InputComponent<Props,State> {

    protected readonly name = prefix + "input-range";
    public readonly props: Props
    public state: State
    public static defaultProps: Props = {
        ...MUK.defaultProps,
        max: 50,
        min: 0,
        step: 1,
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.input.value,
        }
        this.handleChange = this.handleChange.bind(this)

    }

    protected handleChange(evt) {
        this.setState({value: evt.target.value});
        return this.props.input.onChange(evt.target.value);
    }

    protected renderInvalid() {
        if(this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (
                <div className={`${this.form}__validation`}>
                    {this.props.labels.invalid}
                </div>
            )
        }
    }

    public renderInput(className, props) {
        const { labels, meta, input } = this.props
        const outputId = `${meta.form}-${input.name}_output`
        const outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
        return (
            <span>
                <input
                    {...input}
                    className={`${this.name}__item
                                ${this.form}__input--text ${this.form}__input--range
                                ${className}}`}
                    type="range"
                    max={this.props.max}
                    min={this.props.min}
                    step={this.props.step}
                    onChange={this.handleChange}
                    onInput={(evt) => {
                                const target: any = evt.target;
                                const output: any = document.getElementById(outputId);
                                output.value = target.value;
                            }}
                    value={this.state.value}
                    />
                <output className={`${this.form}__input--range__output`}
                    style={{left: "calc("+((this.state.value/this.props.max) * 100)+"% - "+outputWidth/2+"px)" }}
                    id={outputId}>
                        {this.state.value}
                </output>
            </span>
        )

    }

    public renderLabel() {
        const { labels } = this.props
        return this.props.labels.main
    }

}

export default Range
