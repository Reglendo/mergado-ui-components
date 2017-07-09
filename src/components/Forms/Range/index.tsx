import * as React from "react"
import {prefix,form} from "config"
import {Field, IFieldProps, defaultFieldProps} from "components/Forms/Field"
import styled from "styled-components"
import * as style from "styled"
export interface Props extends IFieldProps {
    max: number
    min: number
    step: number
}

export interface State {
    value: any
}

const StyledField = styled(Field)`
input[type=range]::-webkit-slider-thumb {
    border-color: $color-blue-light;
}

input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    margin: 5.5px 0;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
    background: ${style.BLUE};
    border-radius: 0px;
    border: 0px solid #010101;
}

input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px rgba(48, 113, 169, 0), 0px 0px 0px rgba(54, 126, 189, 0);
    border: 3px solid ${style.BLUE};
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5.5px;
    transition: border-color 0.1s;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: ${style.BLUE};
}

input[type=range]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: ${style.BLUE};
    border-radius: 0px;
    border: 0px solid #010101;
}

input[type=range]::-moz-range-thumb {
    box-shadow: none;
    border: 3px solid ${style.BLUE};
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: white;
    cursor: pointer;
}

input[type=range]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
}

input[type=range]::-ms-fill-lower {
    background: ${style.BLUE};
    border: 0px solid #010101;
    border-radius: 0px;
    box-shadow: none;
}

input[type=range]::-ms-fill-upper {
    background: ${style.BLUE};
    border: 0px solid #010101;
    border-radius: 0px;
    box-shadow: none;
}

input[type=range]::-ms-thumb {
    box-shadow: none;
    border: 3px solid ${style.BLUE};
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    height: 4px;
}

input[type=range]:focus::-ms-fill-lower {
    background: ${style.BLUE};
}

input[type=range]:focus::-ms-fill-upper {
    background: ${style.BLUE};
}
`

const Input = styled.input`
    padding: 0 0 0 0;
    border: none;
    background: transparent;
`

const Output = styled.output`
    background: ${style.BLUE};
    position: absolute;
    pointer-events: none;
    margin: auto;
    color: white;
    display: inline-block;
    padding: 2px 5px;
    margin-top: -50px;
    border-radius: 2px;
    font-size: 10px;
    opacity: 1;
`

class Range extends React.Component<Props,State> {

    protected readonly name = prefix + "input-range";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        max: 50,
        min: 0,
        step: 1,
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.input.value ? props.input.value : (props.max - props.min) / 2 + props.min,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    protected handleChange(evt) {
        this.setState({value: evt.target.value});
        return this.props.input.onChange(evt.target.value);
    }

    public render() {
        const { labels, meta, input } = this.props
        const { children, ...props } = this.props
        const outputId = `${meta.form}-${input.name}_output`
        const outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
        const percent = (this.state.value - this.props.min) /(this.props.max- this.props.min) * 100
        return (
            <StyledField {...props} name={this.name}>
                <Input
                    {...input}
                    className={`${this.name}__item
                                ${form}__input--text ${form}__input--range`}
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
                {this.state.value !== undefined && this.state.value !== "" &&
                    <Output className={`${form}__input--range__output`}
                        style={{left: "calc(" + percent + "% - 10px)" }}
                        id={outputId}>
                            {this.state.value}
                    </Output>
                }
            </StyledField>
        )
    }
}

export default Range
