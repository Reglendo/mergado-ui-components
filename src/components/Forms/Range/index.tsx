import * as React from "react"
import glamorous from "glamorous"
import * as Color from "color"
import * as debounce from "lodash.debounce"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import TextInput from "../../../components/Forms/TextInput"

export interface Props extends IFieldProps {
    max: number
    min: number
    step: number
    default?: number
}

export interface State {
    value: any
}

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
            value: props.input.value ?
                     props.input.value : props.default ?
                     props.default : (props.max - props.min) / 2 + props.min,
        }
        this.handleChange = debounce(this.handleChange.bind(this), 200);
    }

    protected handleChange(evt) {
        this.setState({value: evt.target.value});
        return this.props.input.onChange(evt.target.value);
    }

    public render() {
        const { labels, meta, input } = this.props
        const { children, ...props } = this.props
        const value = this.state.value
        return (
            <StyledField {...props} name={this.name}>
                <glamorous.Div padding="5px 0px" className="muk-grid">
                    <TextInput
                        type="number"
                        max={this.props.max}
                        min={this.props.min}
                        step={this.props.step}
                        className="muk-2-12"
                        input={{
                            value,
                            onChange: this.handleChange,
                        }}
                    />
                    <div className="muk-10-12" style={{padding: "5px 0 5px 10px"}}>
                        <Input
                            {...input}
                            className={`${this.name}__item
                                        ${form}__input--text ${form}__input--range muk-6-12`}
                            type="range"
                            max={this.props.max}
                            min={this.props.min}
                            step={this.props.step}
                            onChange={this.handleChange}
                            value={value}
                            />
                    </div>
                </glamorous.Div>
            </StyledField>
        )
    }
}



const StyledField = glamorous(Field)({
    "& input[type=range]": {
        appearance: "none",
        width: "100%",
        margin: "5.5px 0",
    },
    "& input[type=range]:focus": {
        outline: "none",
    },
},(props) => {

    const thumbColor = props.theme.blue
    const sliderColor = Color(props.theme.decoration).fade(0.5)

    const slider = {
        width: "100%",
        height: "6px",
        cursor: "pointer",
        background: "white",
        borderRadius: "10px",
        border: `1px solid ${sliderColor}`,
    }

    const thumb = {
        border: `8px solid ${Color(thumbColor).fade(0.2)}`,
        height: "25px",
        width: "25px",
        borderRadius: "100%",
        background: "#ffffff",
        cursor: "pointer",
        appearance: "none",
        marginTop: "-11px",
        transition: "border-color 0.3s",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
    }
    return {
        // track
        "& input[type=range]::-webkit-slider-runnable-track": slider,

        "& input[type=range]::-moz-range-track": {
            ...slider,
        },

        // thumb

        "& input[type=range]::-webkit-slider-thumb": thumb,
        "& input[type=range]:hover::-webkit-slider-thumb": {
            borderColor: thumbColor,
        },

        // Mozilla
        "& input[type=range]::-moz-range-thumb": {
            ...thumb,
            height: "10px",
            width: "10px",
        },
        "& input[type=range]:hover::-moz-range-thumb": {
            borderColor: thumbColor,
        },
    }
})

const Input = glamorous.input({
    padding: 0,
    border: "none",
    background: "transparent",
})

export default Range
